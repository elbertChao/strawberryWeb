from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import numpy as np
from PIL import Image
import traceback
import torch

# creating an app instance
app = Flask(__name__)
CORS(app, origins=["http://strawberry.uwo.ca"])  # enabling CORS for all routes

# LOADING TRAINED MODEL
# rb means to read the binary data from the model.pkl file
model = pickle.load(open('model_CPU.pkl', 'rb'))

# uploading file API endpoint with POST method
@app.route("/api/upload", methods=['POST'])
def upload_file():
    if 'file' not in request.files: # is file valid?
        return jsonify({"error": "File was not recognized!"}), 400
    
    file = request.files['file']
    if file.filename == '':
        print('File is empty')
        return jsonify({"error": "Please drop a file!"}), 400

    try:
        # open and process the image
        img = Image.open(file).convert("RGB")  # ensures a 3-channel RGB is given
        img = img.resize((224, 224))  # resize to match the ViT input
        img = np.array(img) / 255.0  # normalize to [0, 1]
        img = np.transpose(img, (2, 0, 1))  # convert to channels-first format (C, H, W)
        img = torch.tensor(img, dtype=torch.float32).unsqueeze(0)  # adding to the batch dimension

        # Perform inference (model's prediction)
        model.eval()  # set the model to evaluation mode
        with torch.no_grad():
            outputs = model(img)
            logits = outputs.logits  # Get the logits
            predicted_class_idx = torch.argmax(logits, dim=1).item()  # Get the predicted class index

        # what class the img was predicted as retrieved
        predicted_class = model.config.id2label[str(predicted_class_idx)]

        # return that prediction to the front end as a json
        return jsonify({
            "message": "File uploaded successfully!",
            "prediction": predicted_class
        }), 200
    except Exception as e:
        print("Error during prediction:", str(e))
        print(traceback.format_exc())  # Log full stack trace
        return jsonify({"error": f"Unexpected error occurred: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug = True) # REMOVE debug=True once you want to deploy to production
