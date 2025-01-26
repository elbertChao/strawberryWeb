"use client";
import React, { useState } from "react";

function CheckBerries() {
  const [image, setImage] = useState(null); // state to store uploaded img
  const [isDragging, setIsDragging] = useState(false); // state to track for dragging imgs
  const [responseMessage, setResponseMessage] = useState(null); // state for API response
  const [isLoading, setIsLoading] = useState(false);
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:5000"; // ERORR OCCURS WHEN USING THIS, NOTED...

  const processFile = async (file) => {
    setIsLoading(true);
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
  
      const data = await response.json(); // should get a json response from Flask API
      if (data.error) {
        throw new Error(data.error);
      }

      // takes prediction from the backend and format the given json into a display on the screen
      setResponseMessage(
        `Prediction: ${data.prediction ? data.prediction : "No prediction available"}`
      );

    } catch (error) {
      console.error("Error uploading file:", error);
      if (error.message.includes("Failed to fetch")) {
        setResponseMessage("Could not connect to the server. Please try again later.");
      } else {
        setResponseMessage("An error occurred while uploading the file. Please try again.");
      }
    }
    setIsLoading(false);
  };

  // drop function
  const handleDrop = async (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      await processFile(file);
    }
  };

  // file input function
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      await processFile(file);
    }
  };

  // drag states
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/strawberry_wall.jpg')" }}
    >
      {/* background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* content wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">
          Check Your Berries Here
        </h2>

        {/* drag/drop box */}
        <div
          className={`w-96 h-64 border-2 border-dashed ${
            isDragging
              ? "border-red-400 bg-red-100"
              : "border-gray-300 bg-white bg-opacity-90"
          } flex flex-col items-center justify-center text-gray-700 rounded-lg shadow-lg transition`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
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

        {/* preview of uploaded img */}
        {image && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Uploaded Image:</h3>
            <img
              src={image}
              alt="Uploaded"
              className="max-w-md max-h-96 rounded-lg shadow-2xl"
            />
          </div>
        )}

        {/* response message */}
        {responseMessage && (
          <p className="mt-6 text-lg text-green-500">{responseMessage}</p>
        )}

        {/* loading indicator */}
        {isLoading && <p className="text-lg text-yellow-500 mt-4">Processing...</p>}
      </div>
    </div>
  );
}

export default CheckBerries;