from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import pickle

app = Flask(__name__)
CORS(app)  # Enable CORS

# Load trained model
try:
    model = pickle.load(open("model.pkl", "rb"))
    print("✅ Model loaded successfully!")
except Exception as e:
    print("❌ ERROR: Model could not be loaded!", e)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        print("🔹 DEBUG: Raw Request Data:", request.data.decode("utf-8"))
        print("🔹 DEBUG: Parsed JSON Data:", data)

        if not data or 'features' not in data:
            return jsonify({"error": "Missing 'features' in request"}), 400

        features = np.array(data['features']).reshape(1, -1)
        prediction = model.predict(features)[0]

        response = {"predicted_revenue": float(prediction)}
        print("🔹 DEBUG: Sending Response:", response)
        return jsonify(response)

    except Exception as e:
        print("❌ ERROR:", str(e))
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
