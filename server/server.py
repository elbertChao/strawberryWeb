from flask import Flask, request, jsonify
# Pillow Image library used for preimage processing so that each image
# will be the same size when it is processed
from PIL import Image
import io
import torch
from torchvision import transforms
from transformers import ViTForImageClassificiation, ViTFeatureExtractor

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

import torch

# THE FOLLOWING IS JUST TO CHECK IF PYTORCH WITH CPU CUDA IS INSTALLED CORRECTLY
# # check PyTorch version
# print("PyTorch version:", torch.__version__)
# # check if CUDA is available (should be False for CPU-only version)
# print("CUDA available:", torch.cuda.is_available())
# # check the device being used
# device = torch.device("cpu")
# print("Using device:", device)
# # simple tensor operation to verify PyTorch is working
# x = torch.tensor([[1, 2], [3, 4]])
# print("Tensor on CPU:")
# print(x)
# # perform a tensor operation
# y = x + x
# print("Tensor operation result:")
# print(y)