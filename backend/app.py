import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv

from services.prediction_service import PredictionService
from utils.validation import validate_and_map_features, CLINICAL_SCHEMA

load_dotenv()

app = Flask(__name__)
# Max payload 1MB
app.config['MAX_CONTENT_LENGTH'] = 1024 * 1024

# Enable CORS for all routes
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Initialize prediction service (loads model once)
try:
    prediction_service = PredictionService.get_instance()
except Exception as e:
    print(f"[FATAL] Could not initialize PredictionService: {e}")
    prediction_service = None


@app.after_request
def add_security_headers(response):
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["X-XSS-Protection"] = "1; mode=block"
    return response


@app.route("/api/health", methods=["GET"])
def health_check():
    """Service health and model readiness check."""
    loaded = prediction_service is not None and prediction_service.is_loaded
    return jsonify({
        "status": "ok" if loaded else "degraded",
        "service": "CardioGuard AI Prediction API",
        "model_loaded": loaded,
        "features_count": len(prediction_service.columns) if loaded else 0
    }), (200 if loaded else 503)


@app.route("/api/features", methods=["GET"])
def get_features():
    """Returns required model features and clinical form schema."""
    if not prediction_service or not prediction_service.is_loaded:
        return jsonify({"error": "Prediction service is currently unavailable."}), 503

    return jsonify({
        "features": prediction_service.get_features(),
        "clinical_schema": CLINICAL_SCHEMA
    }), 200


@app.route("/api/predict", methods=["POST"])
def predict():
    """
    Main prediction endpoint.
    Accepts clinical form data or raw model feature map.
    Validates, scales, and returns KNN classification and risk estimate.
    """
    if not prediction_service or not prediction_service.is_loaded:
        return jsonify({
            "error": "Unable to connect to the prediction service. Please try again later."
        }), 503

    if not request.is_json:
        return jsonify({
            "error": "Request body must be valid JSON."
        }), 400

    payload = request.get_json(silent=True)
    if not payload or not isinstance(payload, dict):
        return jsonify({
            "error": "Invalid request payload. Please check your submitted data."
        }), 400

    # Validate and map inputs
    required_cols = prediction_service.get_features()
    mapped_features, errors = validate_and_map_features(payload, required_cols)

    if errors:
        return jsonify({
            "error": "Please check the highlighted fields.",
            "details": errors
        }), 400

    try:
        result = prediction_service.predict(mapped_features)
        return jsonify({
            "success": True,
            "data": result
        }), 200
    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400
    except Exception as e:
        # Never expose Python tracebacks or paths to client
        print(f"[Prediction Error]: {e}")
        return jsonify({
            "error": "An error occurred while evaluating the prediction. Please try again."
        }), 500


@app.errorhandler(400)
def handle_bad_request(e):
    return jsonify({"error": "Bad request format or invalid input."}), 400

@app.errorhandler(404)
def handle_not_found(e):
    return jsonify({"error": "Endpoint not found."}), 404

@app.errorhandler(405)
def handle_method_not_allowed(e):
    return jsonify({"error": "Method not allowed for this endpoint."}), 405

@app.errorhandler(500)
def handle_internal_error(e):
    return jsonify({"error": "Internal server error. Please try again later."}), 500


port = int(os.getenv("PORT", 5000))
host = os.getenv("HOST", "0.0.0.0")

if __name__ == "__main__":
    print(f"Starting CardioGuard AI Backend on http://{host}:{port}")
    app.run(host=host, port=port, debug=False)
