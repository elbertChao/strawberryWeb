from flask import Flask, request, jsonify
# Pillow Image library used for preimage processing so that each image
# will be the same size when it is processed
# from PIL import Image
import io
# import torch
# from torchvision import transforms
# from transformers import ViTForImageClassificiation, ViTFeatureExtractor

# creating an app instance
app = Flask(__name__)

# GET method at /api/home route
@app.route("/api/home", methods=['GET'])
def return_home():
    return jsonify({
        'message': "Hello World!"
    })

if __name__ == "__main__":
    app.run(debug = True) # REMOVE debug=True once you want to deploy to production

print(torch.__version__)
print("CUDA available:", torch.cuda.is_available())