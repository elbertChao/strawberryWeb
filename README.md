# 🍓 BerryVision (A Strawberry Ripeness & Disease Detection Web App)
AI-Powered Full-Stack Web Application for Monitoring Strawberry Health
This project provides an AI-driven web application that helps farmers analyze strawberry ripeness and detect diseases using machine learning models. It consists of a Next.js frontend and a Flask backend, integrating a trained model for image segmentation.
Hosted live here: https://strawberry.uwo.ca/

## Features:
AI-Based Image Processing - Uses a trained ML model to assess strawberry ripeness and disease conditions
Full-Stack Development - Built with Next.js (frontend) and Flask (backend)
Fast API Response Times - Optimized REST API with responses under 500ms
Secure & Scalable Deployment - Hosted on Western University’s domain with Nginx & Gunicorn
Production-Ready - Includes SSL certificates, firewall protection (UFW), and process management (PM2)

## 💻 How to Set Up & Run the Project:
1️⃣ Clone the Repository
git clone https://github.com/elbertChao/strawberryWeb.git
cd strawberryWeb

## 🖥️ Backend Setup (Flask):
2️⃣ Create a Virtual Environment
python -m venv venv  # Create virtual environment

3️⃣ Activate the Virtual Environment
Windows:
venv\Scripts\activate

Linux/macOS:
source venv/bin/activate

4️⃣ Install Dependencies
pip install -r requirements.txt

5️⃣ Ensure ML Model is in Place
The trained model (model_CPU.pkl) is ignored in .gitignore.
Upload it manually to /server/ using SCP or FileZilla.

## 🚀 Running the Backend:
cd server
gunicorn -w 4 -b 0.0.0.0:5000 server:app

or run it manually:
python server.py

## 🌐 Frontend Setup (Next.js):
1️⃣ Navigate to the Frontend Folder
cd ../strawberry-app

2️⃣ Install Dependencies
npm install

3️⃣ Run the Frontend Locally
npm run dev

## ⚙️ Deployment:
Demonstrated in a private document created by me (Elbert Chao)

## 🔍 Troubleshooting
Use sudo or check file permissions (chmod 644)

Run sudo journalctl -u flask -f to check logs

Ensure NEXT_PUBLIC_API_URL in .env.production is correctly set

Restart services: sudo systemctl restart nginx flask

## 📚 Technologies Used:

🔧 Backend
Python (Flask, Gunicorn)
PyTorch (Machine Learning Model)
REST APIs
Pickle (Model Serialization)

🎨 Frontend
Next.js (React Framework)
Tailwind CSS (UI Styling)
Axios (API Calls)

🛠️ DevOps & Deployment
Nginx (Reverse Proxy)
Gunicorn (Flask Server)
PM2 (Process Management)
UFW (Firewall Rules)
SSL Certificates (Sectigo CA)
FileZilla/SCP (File Transfer)
