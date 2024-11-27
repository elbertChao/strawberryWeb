"use client"
import React, { useState } from "react";

function CheckBerries() {
  const [image, setImage] = useState(null); // state to store uploaded img
  const [isDragging, setIsDragging] = useState(false); // state to track for dragging imgs

  // initial dropped img function
  const handleDrop = (event) => {
    event.preventDefault(); // prevent default behavior (e.g., opening the file in the browser)
    setIsDragging(false);
    const file = event.dataTransfer.files[0]; // get the dropped file that the user selects
    if (file && file.type.startsWith("image/")) { // check for valid images
      const reader = new FileReader(); // create a FileReader
      // set and read file
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  // img change function
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  // click and drag images from user's folder
  const handleDragOver = (event) => {
    event.preventDefault(); // prevent default behavior to allow drop
    setIsDragging(true); // sets box to red to show users image is sensed
  };

  const handleDragLeave = () => {
    setIsDragging(false); // resets dragging state to reset colour of box
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFE6D1]">
      <h2 className="text-3xl font-bold mb-6">Check your berries here</h2>

      <div
        className={`w-96 h-64 border-2 border-dashed border-gray-400 flex flex-col items-center justify-center ${
          isDragging ? "bg-blue-200" : "bg-blue-100"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <p className="text-gray-600 mb-2">Drag & Drop an image here</p>
        <p className="text-gray-500">or</p>
        <label
          htmlFor="fileInput"
          className="mt-2 bg-blue-500 text-white py-1 px-4 rounded cursor-pointer hover:bg-blue-600"
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

      {image && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Uploaded Image:</h3>
          <img src={image} alt="Uploaded" className="max-w-md max-h-96 rounded shadow" />
        </div>
      )}
    </div>
  );
}

export default CheckBerries;
