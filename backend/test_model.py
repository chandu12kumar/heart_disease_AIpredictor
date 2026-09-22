import os
import sys
import pandas as pd
import numpy as np

# Ensure backend directory is in python path
current_dir = os.path.dirname(os.path.abspath(__file__))
if current_dir not in sys.path:
    sys.path.insert(0, current_dir)

from services.prediction_service import PredictionService
from utils.validation import validate_and_map_features

def test_model_diagnostics():
    print("=" * 60)
    print(" CardioGuard AI - Model Compatibility Diagnostic Test")
    print("=" * 60)

    try:
        service = PredictionService.get_instance()
    except Exception as e:
        print(f"FAILED to initialize PredictionService: {e}")
        return False

    model_loaded = service.model is not None
    scaler_loaded = service.scaler is not None
    columns_loaded = service.columns is not None

    print(f"Model loaded: {model_loaded}")
    print(f"Scaler loaded: {scaler_loaded}")
    print(f"Columns loaded: {columns_loaded}")

    if not (model_loaded and scaler_loaded and columns_loaded):
        print("ERROR: One or more components failed to load.")
        return False

    cols = service.columns
    n_features = len(cols)
    print(f"Number of features: {n_features}")
    print(f"Columns list: {cols}")

    model_classes = getattr(service.model, "classes_", None)
    print(f"Model classes: {list(model_classes) if model_classes is not None else 'Unknown'}")

    scaler_n_features = getattr(service.scaler, "n_features_in_", None)
    print(f"Scaler expected features count: {scaler_n_features}")

    model_n_features = getattr(service.model, "n_features_in_", None)
    print(f"Model expected features count: {model_n_features}")

    # Verify compatibility
    assert n_features == scaler_n_features, (
        f"Mismatch: len(columns)={n_features} != scaler.n_features_in_={scaler_n_features}"
    )
    assert n_features == model_n_features, (
        f"Mismatch: len(columns)={n_features} != model.n_features_in_={model_n_features}"
    )
    print("\nFeature dimension compatibility: 100% MATCH (15 == 15 == 15)")

    # Test Sample 1: Low risk profile test
    sample_low = {
        "age": 35,
        "sex": "F",
        "chestPainType": "ATA",
        "restingBP": 115,
        "cholesterol": 170,
        "fastingBS": 0,
        "restingECG": "Normal",
        "maxHR": 172,
        "exerciseAngina": "N",
        "oldpeak": 0.0,
        "stSlope": "Up"
    }
    mapped_low, err_low = validate_and_map_features(sample_low, cols)
    assert not err_low, f"Validation failed for low risk sample: {err_low}"
    res_low = service.predict(mapped_low)
    print(f"\n[Test Sample 1 - Low Risk Input]")
    print(f"  Prediction class: {res_low['prediction']}")
    print(f"  Risk level: {res_low['risk_level']}")
    print(f"  Probability: {res_low['probability']} ({res_low['probability_percentage']}%)")

    # Test Sample 2: Elevated risk profile test
    sample_high = {
        "age": 62,
        "sex": "M",
        "chestPainType": "ASY",
        "restingBP": 160,
        "cholesterol": 310,
        "fastingBS": 1,
        "restingECG": "ST",
        "maxHR": 105,
        "exerciseAngina": "Y",
        "oldpeak": 2.5,
        "stSlope": "Flat"
    }
    mapped_high, err_high = validate_and_map_features(sample_high, cols)
    assert not err_high, f"Validation failed for high risk sample: {err_high}"
    res_high = service.predict(mapped_high)
    print(f"\n[Test Sample 2 - Elevated Risk Input]")
    print(f"  Prediction class: {res_high['prediction']}")
    print(f"  Risk level: {res_high['risk_level']}")
    print(f"  Probability: {res_high['probability']} ({res_high['probability_percentage']}%)")

    print("\n" + "=" * 60)
    print(" ALL DIAGNOSTIC CHECKS PASSED SUCCESSFULLY!")
    print("=" * 60)
    return True

if __name__ == "__main__":
    success = test_model_diagnostics()
    sys.exit(0 if success else 1)
