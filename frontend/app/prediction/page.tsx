"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import axios from "axios";

export default function Prediction() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [prediction, setPrediction] = useState<string | null>(null);
  const [confidence, setConfidence] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setPrediction(null);
      setConfidence(null);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setIsLoading(true);
    setError(null);
    setPrediction(null);
    setConfidence(null);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("http://127.0.0.1:5000/tumor/predict", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setPrediction(response.data.prediction);
      setConfidence(response.data.confidence);
    } catch (err: any) {
      setError(err.response?.data?.error || "Failed to fetch prediction. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <main className="min-h-screen flex flex-col relative bg-gray-900 text-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-cyan-900 opacity-70"></div>

      {/* Header */}
      <div className="relative z-10 w-full">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 relative mr-2">
              <Image src="logo.svg" alt="NeuraWake Logo" fill className="object-contain" />
            </div>
            <span className="text-white text-3xl font-bold">NeuraWake</span>
          </div>
        </nav>

        <div className="container mx-auto px-6 pt-4">
          <Link href="/" className="inline-flex items-center text-white hover:text-cyan-400 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Link>
        </div>

        {/* Prediction Section */}
        <div className="container mx-auto px-6 py-12 flex flex-col items-center">
          <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-2xl flex flex-col md:flex-row items-center">
            {/* Left Side: Upload Box */}
            <div className="flex flex-col items-center w-full md:w-1/2">
              <h2 className="text-2xl font-semibold text-white mb-4">Upload MRI Image.</h2>

              <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
              
              <div
                className="border border-cyan-500 bg-gray-800 p-3 rounded-lg w-60 h-60 flex items-center justify-center cursor-pointer hover:bg-gray-700 transition"
                onClick={triggerFileInput}
              >
                {preview ? (
                  <img src={preview} alt="Uploaded preview" className="rounded-lg w-full h-full object-cover" />
                ) : (
                  <span className="text-cyan-400">Click to Choose</span>
                )}
              </div>
              <span className="text-white text-sm mt-3">{selectedFile ? selectedFile.name : "No file chosen"}</span>
            </div>

            {/* Right Side: Predictions & Button */}
            <div className="flex flex-col justify-center items-center w-full md:w-1/2 mt-6 md:mt-0">
              <button
                onClick={handleSubmit}
                disabled={!selectedFile || isLoading}
                className={`w-full px-6 py-3 rounded-lg font-medium transition-all ${
                  !selectedFile || isLoading
                    ? "bg-cyan-700 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg"
                }`}
              >
                {isLoading ? "Processing..." : "Get Prediction"}
              </button>

              {error && <p className="text-red-500 text-center mt-4">{error}</p>}

              {prediction && (
                <div className="mt-6 bg-white/10 p-4 rounded-lg shadow-md w-full text-center border border-cyan-500">
                  <h3 className="text-xl font-semibold text-white">
                    Prediction: <span className="text-cyan-300">{prediction}</span>
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
