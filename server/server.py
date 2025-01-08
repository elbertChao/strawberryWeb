from flask import Flask, request
from flask_cors import CORS
# Pillow Image library used for preimage processing so that each image
# will be the same size when it is processed
# from PIL import Image
# import io
# import torch
# from torchvision import transforms
# from transformers import ViTForImageClassificiation, ViTFeatureExtractor

# creating an app instance
app = Flask(__name__)
CORS(app)  # enabling CORS for all routes

# uploading file api endpoint with POST method
@app.route("/api/upload", methods=['POST'])
def upload_file():
    if 'file' not in request.files: # is file valid?
        return "File not recognized", 400
    
    file = request.files['file']
    if file.filename == '':
        return "Please drop a file", 400
    
    # console logging file name to check if endpoint works
    print(f"SUCCESS, file found! File is called: {file.filename}")
    return f"Filename: {file.filename} uploaded successfully!", 200

if __name__ == "__main__":
    app.run(debug = True) # REMOVE debug=True once you want to deploy to production




# THE FOLLOWING IS JUST TO CHECK IF PYTORCH WITH CPU CUDA IS INSTALLED CORRECTLY
# ---------------------------------------------------------------------------------- #
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
# ---------------------------------------------------------------------------------- #