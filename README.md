# 🍓 BerryVision: Strawberry Ripeness & Disease Detection System

## Overview
BerryVision is an AI-powered full-stack web application designed to modernize agricultural monitoring. The system leverages deep learning models to perform real-time image segmentation for assessing strawberry ripeness and detecting disease vectors.

This project demonstrates the end-to-end integration of a PyTorch machine learning pipeline with a responsive Next.js frontend and a scalable Flask backend.

**Live Deployment:** [https://strawberry.uwo.ca/](https://strawberry.uwo.ca/)

**System Demonstration:**

[![BerryVision Demo](https://img.youtube.com/vi/d8iLLYVc4kI/0.jpg)](https://www.youtube.com/watch?v=d8iLLYVc4kI)

## Key Features
* **AI-Driven Analysis:** Utilizes a custom-trained machine learning model to segment and classify agricultural imagery with high precision.
* **High-Performance Architecture:** Optimized REST API delivers inference results with sub-500ms latency.
* **Production-Grade Security:** Deployed behind an Nginx reverse proxy with SSL/TLS encryption (Sectigo CA) and UFW firewall configuration.
* **Scalability:** Process management handled via PM2 and Gunicorn to ensure high availability and load balancing.

## Technical Stack

### Backend
* **Framework:** Python (Flask)
* **Machine Learning:** PyTorch (Inference Engine)
* **Server:** Gunicorn (WSGI HTTP Server)
* **Serialization:** Pickle

### Frontend
* **Framework:** Next.js (React)
* **Styling:** Tailwind CSS
* **Networking:** Axios

### DevOps & Infrastructure
* **Reverse Proxy:** Nginx
* **Process Management:** PM2
* **Security:** UFW (Uncomplicated Firewall), SSL/TLS
* **Environment:** Ubuntu Linux

---

## Installation & Configuration

### Prerequisites
* Python 3.8+
* Node.js & npm
* Git

### 1. Clone the Repository
```bash
git clone [https://github.com/elbertChao/strawberryWeb.git](https://github.com/elbertChao/strawberryWeb.git)
cd strawberryWeb
```
2. Backend Setup (Flask)
Navigate to the server directory and establish the Python environment.

Create and Activate Virtual Environment:

```
# Windows
python -m venv venv
venv\Scripts\activate
```

```
# Linux/macOS
python -m venv venv
source venv/bin/activate
```

Install Dependencies:
```
pip install -r requirements.txt
```

Model Configuration:

Note: The trained model file (model_CPU.pkl) is excluded from version control.

Manually place the model_CPU.pkl file into the /server/ directory via secure transfer (SCP/SFTP).

Start the Server: For development:

```
python server.py
```

For production (Gunicorn):

```
gunicorn -w 4 -b 0.0.0.0:5000 server:app
```
3. Frontend Setup (Next.js)
Navigate to the application directory to configure the client-side interface.

```
cd ../strawberry-app
npm install
npm run dev
```
The application will be available at http://localhost:3000.

Deployment & Maintenance
The application is architected for a Linux environment using Nginx as a reverse proxy to forward requests to the Gunicorn application server.

Service Management:

Restart Services: ```sudo systemctl restart nginx flask```

Logs: ```sudo journalctl -u flask -f```

Environment Variables: Ensure the NEXT_PUBLIC_API_URL variable in .env.production is configured to point to the correct backend endpoint.
