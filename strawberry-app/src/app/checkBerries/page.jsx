"use client";
import React, { useState } from "react";
import Image from "next/image";

function CheckBerries() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [image, setImage] = useState(null); // Store uploaded image as a preview
  const [imageFile, setImageFile] = useState(null); // Store the actual file for upload
  const [isDragging, setIsDragging] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const processFile = async (file) => {
    setIsLoading(true);
    setImageFile(file);

    const reader = new FileReader();
    reader.onload = (e) => setImage(e.target.result);
    reader.readAsDataURL(file);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${API_URL}/api/upload`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to upload file.");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setResponseMessage(
        `Prediction: ${data.prediction ? data.prediction : "No prediction available"}`
      );
    } catch (error) {
      console.error("Error uploading file:", error);
      setResponseMessage(
        error.message.includes("Failed to fetch")
          ? "Could not connect to the server. Please try again later."
          : "An error occurred while uploading the file. Please try again."
      );
    }
    setIsLoading(false);
  };

  // Handle drag & drop
  const handleDrop = async (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      await processFile(file);
    }
  };

  // Handle file selection
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      await processFile(file);
    }
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/strawberry_wall.jpg')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Check Your Berries Here
        </h2>

        {/* Drag & Drop Box */}
        <div
          className={`w-96 h-64 border-2 border-dashed flex flex-col items-center justify-center text-gray-700 rounded-lg shadow-lg transition ${
            isDragging ? "border-red-400 bg-red-100" : "border-gray-300 bg-white bg-opacity-90"
          }`}
          onDrop={handleDrop}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
        >
          <p className="text-lg mb-2">Drag & Drop an image here</p>
          <p className="text-sm text-gray-500">or</p>
          <label
            htmlFor="fileInput"
            className="mt-4 bg-red-500 text-white py-2 px-6 rounded-lg cursor-pointer hover:bg-[#0e771a] transition duration-300"
          >
            Choose a File
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Image Preview */}
        {image && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Uploaded Image:</h3>
            <div className="relative w-64 h-64 mx-auto">
              <Image
                src={image}
                alt="Uploaded"
                fill
                className="object-contain rounded-lg shadow-2xl"
                sizes="256px"
                priority
              />
            </div>
          </div>
        )}

        {/* Response Message */}
        {responseMessage && <p className="mt-6 text-lg text-green-500">{responseMessage}</p>}

        {/* Loading Indicator */}
        {isLoading && <p className="text-lg text-yellow-500 mt-4">Processing...</p>}
      </div>
    </div>
  );
}

export default CheckBerries;
