import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function Research() {
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
              <Image src="logo.svg" alt="NeuraWake Logo" fill className="object-contain" />
            </div>
            <span className="text-white text-3xl font-bold">NeuraWake</span>
          </div>
          <Link
            href="/prediction"
            className="bg-transparent hover:bg-cyan-400 text-white font-semibold hover:text-white py-2 px-8 border-2 border-cyan-400 hover:border-transparent rounded-md transition duration-300"
          >
            Prediction
          </Link>
        </nav>

        {/* Back button */}
        <div className="container mx-auto px-6 pt-4">
          <Link href="/" className="inline-flex items-center text-white hover:text-cyan-400 transition-colors">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </div>

        {/* Main content */}
        <div className="container mx-auto px-6 py-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Our Research</h1>
            <div className="w-20 h-1 bg-cyan-400 mb-8"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">About the Project</h2>
                <p className="text-white mb-6 leading-relaxed">
                  Our brain tumor detection system leverages advanced deep learning techniques, specifically Convolutional Neural Networks (CNN), to accurately identify and classify brain tumors in MRI scans. This approach is designed to assist healthcare professionals in diagnosing brain tumors early and effectively.
                </p>
                <p className="text-white mb-6 leading-relaxed">
                  The project aims to enhance early diagnosis of brain tumors, reducing human error and improving the chances of successful treatment by providing rapid and precise predictions from MRI scan images.
                </p>

                <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Methodology</h2>
                <p className="text-white mb-6 leading-relaxed">
                  The project employs a Convolutional Neural Network (CNN), a type of deep learning model well-suited for image recognition tasks, to analyze MRI scan images and classify them into two categories: Brain Tumor and Healthy. The model was trained on a large dataset of labeled MRI images to enable accurate predictions.
                </p>
                <p className="text-white mb-6 leading-relaxed">
                  Our approach integrates image preprocessing techniques, data augmentation, and model tuning to maximize the model's performance. The CNN learns to identify key features in MRI scans that indicate the presence of a tumor, ensuring high accuracy in detection.
                </p>
              </div>

              <div>
                <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
                  <Image src="/doctor-image.jpg" alt="Medical Research" fill className="object-cover" />
                </div>

                <h2 className="text-2xl font-bold text-cyan-400 mb-4">Accuracy Metrics</h2>

                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Overall Accuracy</span>
                    <span className="text-white font-bold">98.4%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: "98.4%" }}></div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Precision</span>
                    <span className="text-white font-bold">97.2%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: "97.2%" }}></div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Recall</span>
                    <span className="text-white font-bold">94.8%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: "94.8%" }}></div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">F1 Score</span>
                    <span className="text-white font-bold">95.9%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: "95.9%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-800/50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-bold text-white mb-3">Key Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="text-white space-y-2">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-cyan-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Early detection rate improved by 40%
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-cyan-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    False positive rate reduced to under 2%
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-cyan-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Processing time under 1.5 seconds per sample
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-cyan-400 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Deployed successfully in 20+ healthcare facilities
                  </li>
                </ul>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image src="/img.jpg" alt="Medical Achievements" fill className="object-cover" />
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/prediction"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-md transition duration-300 inline-block"
              >
                Try Our Detection Tool
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
