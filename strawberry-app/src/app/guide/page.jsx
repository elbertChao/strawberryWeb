"use client";
import React from "react";
import Link from "next/link";

function Guide() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/guide_bkgrd.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">How to check your berries?</h1>
        <p className="text-lg mb-6">This guide will help you understand how to upload images of your strawberries and receive predictions from our machine learning (ML) model.</p>
        
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-2">Step 1: Upload an Image</h2>
          <p className="mb-4">Go to <Link href="/checkBerries" className="text-red-500 hover:underline">Check Berries</Link>, and either drag & drop or select an image.</p>

          <h2 className="text-2xl font-semibold mb-2">Step 2: Model Processing</h2>
          <p className="mb-4">The ML model analyzes the uploaded image and predicts the class.</p>

          <h2 className="text-2xl font-semibold mb-2">Step 3: View Results</h2>
          <p className="mb-4">
            Predictions will be displayed along with what our model thinks it should be<br />
            labeled as: 
            <span className="font-bold"> Ripe, Unripe, Anthracnose, Powdery Mildew,</span> or 
            <span className="font-bold"> Gray Mold</span>.
          </p>

          <h2 className="text-2xl font-semibold mb-2">Step 4: Try Again</h2>
          <p>Upload as many images as you want to test different samples and verify our predictions.<br />
             Note: That white backgrounds may distrupt our model's behaviour so take a picture that has a natural background
          </p>
        </div>
        
        <Link href="/" className="mt-6 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition">Back to Home</Link>
      </div>
    </div>
  );
}

export default Guide;