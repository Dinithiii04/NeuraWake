import os
import io
import numpy as np
from flask import Blueprint, request, jsonify
import tensorflow as tf
from PIL import Image

# Initialize Blueprint
tumor_classification_bp = Blueprint("tumor_classification", __name__)

# Load Model with absolute path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, "..", "models", "brain_tumor_detection_model.h5")

try:
    model = tf.keras.models.load_model(MODEL_PATH)
    print("Brain Tumor Detection Model loaded successfully!")
except Exception as e:
    raise RuntimeError(f"Failed to load model: {e}")

# Function to preprocess the image
def preprocess_image(image, target_size=(224, 224)):
    try:
        image = image.convert("RGB")  # Ensure it's in RGB mode
        image = image.resize(target_size)  # Resize to match model input
        img_array = np.array(image) / 255.0  # Normalize pixel values
        img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
        return img_array
    except Exception as e:
        raise ValueError(f"Image preprocessing failed: {e}")

# Route for prediction
@tumor_classification_bp.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file uploaded"}), 400

    file = request.files["file"]
    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    try:
        # Read and preprocess image
        image_bytes = file.read()
        image = Image.open(io.BytesIO(image_bytes))
        img_array = preprocess_image(image)

        # Make prediction
        prediction = model.predict(img_array)
        predicted_class = "Brain Tumor" if prediction[0][0] > 0.5 else "Healthy"
        confidence = float(prediction[0][0])  # Get confidence score

        # Return prediction result
        return jsonify({
            "prediction": predicted_class,
            "confidence": f"{confidence:.4f}"
        }), 200

    except Exception as e:
        return jsonify({"error": f"Prediction error: {str(e)}"}), 500
