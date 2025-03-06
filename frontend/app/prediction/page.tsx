"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function Prediction() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile) return

    setIsLoading(true)

    // Here you would normally send the file to your Flask backend
    // For demonstration, we'll just simulate a delay
    setTimeout(() => {
      setIsLoading(false)
      // Handle response from backend
    }, 2000)
  }

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 z-0"></div>

      {/* Content */}
      <div className="relative z-20 w-full">
        {/* Navbar */}
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
            <h1 className="text-3xl font-bold text-white text-center mb-2">Paddy Disease Detection</h1>
            <p className="text-cyan-400 text-center mb-8">
              Upload an image of the affected paddy leaves to detect diseases.
            </p>

            <div className="bg-blue-900/50 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-white mb-4">Upload Image</h2>

              <div className="mb-4">
                <label className="block text-sm font-medium text-cyan-400 mb-2">Leaf Image</label>
                <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" className="hidden" />
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={triggerFileInput}
                    className="bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition"
                  >
                    Choose File
                  </button>
                  <span className="ml-3 text-white">{selectedFile ? selectedFile.name : "No file chosen"}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!selectedFile || isLoading}
              className={`w-full py-3 rounded-md font-medium transition-colors ${
                !selectedFile || isLoading
                  ? "bg-cyan-700 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
              }`}
            >
              {isLoading ? "Processing..." : "Get Prediction"}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

