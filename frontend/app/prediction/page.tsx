"use client"

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
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
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
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 z-0"></div>
      <div className="relative z-20 w-full">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-12 h-12 relative mr-2">
              <Image src="logo.svg" alt="tumor Logo" fill className="object-contain" />
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

        <div className="container mx-auto px-6 py-12 flex flex-col items-center">
          <div className="w-full max-w-md bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl">
            <h1 className="text-3xl font-bold text-white text-center mb-2">Brain Tumor Detection</h1>
            <p className="text-cyan-400 text-center mb-8">
              Upload an MRI scan to detect brain tumors.
            </p>

            <div className="bg-blue-900/50 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-white mb-4">Upload Image</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-cyan-400 mb-2">MRI Image</label>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                <div className="flex items-center">
                  <button type="button" onClick={triggerFileInput} className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition">
                    Choose File
                  </button>
                  <span className="ml-3 text-white">{selectedFile ? selectedFile.name : "No file chosen"}</span>
                </div>
              </div>
            </div>

            <button onClick={handleSubmit} disabled={!selectedFile || isLoading} className={`w-full py-3 rounded-md font-medium transition-colors ${!selectedFile || isLoading ? "bg-cyan-700 cursor-not-allowed" : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"}`}>
              {isLoading ? "Processing..." : "Get Prediction"}
            </button>

            {error && <p className="text-red-500 text-center mt-4">{error}</p>}
            {prediction && (
              <div className="mt-6 text-center bg-white/10 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-white">Prediction: {prediction}</h3>
                <p className="text-cyan-400">Confidence: {confidence}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
