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
              <Image src="logo.svg" alt="tumor Logo" fill className="object-contain" />
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
                  Our virus detection and prevention system uses advanced machine learning algorithms to identify
                  potential viral threats and provide timely recommendations for prevention. The system has been
                  developed after extensive research in virology and epidemiology.
                </p>
                <p className="text-white mb-6 leading-relaxed">
                  The project aims to provide accessible and accurate information about viral diseases, their symptoms,
                  and preventive measures to help communities stay safe during outbreaks.
                </p>

                <h2 className="text-2xl font-bold text-cyan-400 mb-4 mt-8">Methodology</h2>
                <p className="text-white mb-6 leading-relaxed">
                  Our approach combines traditional epidemiological methods with cutting-edge AI technologies. We
                  collect data from various reliable sources, including WHO, CDC, and local health departments, to train
                  our models and provide up-to-date information.
                </p>
                <p className="text-white mb-6 leading-relaxed">
                  The system uses a combination of convolutional neural networks and natural language processing to
                  analyze symptoms, identify patterns, and predict potential outbreaks.
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
                    <span className="text-white font-bold">97.8%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: "97.8%" }}></div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Precision</span>
                    <span className="text-white font-bold">96.5%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: "96.5%" }}></div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">Recall</span>
                    <span className="text-white font-bold">95.2%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: "95.2%" }}></div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">F1 Score</span>
                    <span className="text-white font-bold">95.8%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div className="bg-cyan-400 h-2.5 rounded-full" style={{ width: "95.8%" }}></div>
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
                    Early detection rate improved by 35%
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
                    False positive rate reduced to under 3%
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
                    Processing time under 2 seconds per sample
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
                    Successfully deployed in 15+ healthcare facilities
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

