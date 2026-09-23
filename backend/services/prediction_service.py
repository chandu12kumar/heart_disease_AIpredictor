import os
import joblib
import pickle
import numpy as np
import pandas as pd

class PredictionService:
    _instance = None

    def __init__(self):
        self.model = None
        self.scaler = None
        self.columns = None
        self.is_loaded = False
        self.load_models()

    @classmethod
    def get_instance(cls):
        if cls._instance is None:
            cls._instance = cls()
        return cls._instance

    def _safe_load(self, filepath):
        """Attempts joblib.load first (standard for sklearn objects), fallback to pickle.load."""
        if not os.path.exists(filepath):
            raise FileNotFoundError(f"Model artifact not found at {filepath}")
        try:
            return joblib.load(filepath)
        except Exception:
            with open(filepath, "rb") as f:
                return pickle.load(f)

    def load_models(self):
        """Loads columns, scaler, and KNN model into memory using robust directory search."""
        base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # backend directory
        root_dir = os.path.dirname(base_dir)  # project root directory

        search_dirs = [
            os.path.join(base_dir, "model"),
            os.path.join(root_dir, "model"),
            base_dir,
            root_dir,
        ]

        def resolve_file(filenames):
            for d in search_dirs:
                for fn in filenames:
                    candidate = os.path.join(d, fn)
                    if os.path.exists(candidate):
                        return candidate
            raise FileNotFoundError(f"Model artifact not found. Searched for {filenames} in: {search_dirs}")

        columns_path = resolve_file(["columns.pkl"])
        scaler_path = resolve_file(["scaler.pkl"])
        knn_path = resolve_file(["KNN_heart.pkl", "_heart.pkl"])

        self.columns = list(self._safe_load(columns_path))
        self.scaler = self._safe_load(scaler_path)
        self.model = self._safe_load(knn_path)
        self.is_loaded = True
        print(f"[PredictionService] Successfully loaded model artifacts: {len(self.columns)} features.")


    def get_features(self):
        return self.columns

    def predict(self, feature_data: dict) -> dict:
        """
        Receives a dictionary of 15 features or mapped clinical features,
        arranges them strictly according to columns.pkl,
        applies the scaler, and runs the KNN model.
        """
        if not self.is_loaded:
            raise RuntimeError("Prediction models are not loaded.")

        # Ensure all columns exist in feature_data
        missing = [col for col in self.columns if col not in feature_data]
        if missing:
            raise ValueError(f"Missing required model features: {', '.join(missing)}")

        # Build DataFrame with exact column order
        ordered_data = {col: [float(feature_data[col])] for col in self.columns}
        input_df = pd.DataFrame(ordered_data)[self.columns]

        # Apply scaler
        scaled_features = self.scaler.transform(input_df)

        # Run model prediction
        raw_pred = self.model.predict(scaled_features)
        prediction_class = int(raw_pred[0])

        # Safely extract probability if supported by KNN model
        probability = None
        if hasattr(self.model, "predict_proba"):
            try:
                proba_array = self.model.predict_proba(scaled_features)
                # Model classes are typically [0, 1]
                classes = list(getattr(self.model, "classes_", [0, 1]))
                if 1 in classes:
                    idx_class1 = classes.index(1)
                    # probability of elevated risk (class 1)
                    probability = round(float(proba_array[0][idx_class1]), 4)
                else:
                    probability = round(float(proba_array[0][prediction_class]), 4)
            except Exception as e:
                print(f"[PredictionService] predict_proba calculation skipped: {e}")
                probability = None

        risk_level = "elevated" if prediction_class == 1 else "lower"
        risk_headline = "Elevated Risk Indicated" if prediction_class == 1 else "Lower Predicted Risk"
        summary_text = (
            "The model indicates an elevated heart-disease risk based on the information provided."
            if prediction_class == 1 else
            "The model indicates a lower predicted risk based on the information provided."
        )

        return {
            "prediction": prediction_class,
            "risk_level": risk_level,
            "risk_headline": risk_headline,
            "summary": summary_text,
            "probability": probability,
            "probability_percentage": round(probability * 100, 1) if probability is not None else None,
            "disclaimer": (
                "This result is not a diagnosis and cannot predict with certainty whether you will "
                "have a heart attack. Please consult a qualified healthcare professional for medical advice."
            )
        }
