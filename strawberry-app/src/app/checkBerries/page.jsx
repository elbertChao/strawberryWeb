"use client";
import React, { useState } from "react";

function CheckBerries() {
  const [image, setImage] = useState(null); // state to store uploaded img
  const [isDragging, setIsDragging] = useState(false); // state to track for dragging imgs

  // drop function
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  // file input function
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
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
      </div>
    </div>
  );
}

export default CheckBerries;
