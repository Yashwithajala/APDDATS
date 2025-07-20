# app2.py

import os
from flask import Flask, request, render_template
from plant_disease_model import predict_image

# Initialize Flask
app = Flask(__name__)

# Folder where uploaded images will be saved
UPLOAD_FOLDER = 'static/uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def index():
    return render_template('test.html')

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return "No file part", 400

    file = request.files['file']
    if file.filename == '':
        return "No selected file", 400

    # Save uploaded/captured image
    filename = "captured.jpg"
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)

    # Predict using PyTorch model
    result = predict_image(filepath)
    predicted_class = result['class']
    confidence = f"{result['confidence'] * 100:.2f}%"
    diagnosis = result['diagnosis']

    return render_template('test.html',
                           result=predicted_class,
                           confidence=confidence,
                           diagnosis=diagnosis,
                           image_path='/' + filepath)

if __name__ == '__main__':
    app.run(debug=True)
