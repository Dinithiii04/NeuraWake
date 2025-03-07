'use client';
import Image from "next/image";
import Link from "next/link";
import GifLoader from "../components/ui/loader";
import { useEffect, useState } from "react";
export default function Home() {  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <GifLoader />
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
            <div className="w-16 h-16 relative mr-2">
              <Image src="/logo.svg" alt="tumor Logo" fill className="object-contain" />
            </div>
            <span className="text-white text-4xl font-bold">NeuraWake</span>
          </div>
          <Link
            href="/prediction"
            className="bg-transparent hover:bg-cyan-400 text-white font-semibold hover:text-white py-2 px-8 border-2 border-cyan-400 hover:border-transparent rounded-md transition duration-300"
          >
            Check Now
          </Link>
        </nav>

        {/* Main content */}
        <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">

          <div className="md:w-1/2 flex flex-col items-start">
            <h1 className="text-5xl md:text-5xl font-bold leading-tight text-white mb-4 font-display">
              Worried About a Brain Tumor?<br />
              Find Out Now!
            </h1>
            <div className="w-20 h-1 bg-cyan-400 my-4"></div>
            <p className="text-white opacity-75 mb-8 leading-relaxed">
            Upload your MRI scan and let cutting-edge AI provide early detection insights in seconds.
            </p>
            <Link
              href="/research"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 px-8 rounded-md transition duration-300"
            >
              Discover More
            </Link>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 relative flex flex-col items-center">
            <div className="relative w-full max-w-full rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/b1.jpg"
                alt="Doctor with patient"
                layout="responsive"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <a
                href="https://youtu.be/cSeXJKSQpiI?si=VyPffHv5VVZNhvIz"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 bg-yellow-400 hover:bg-yellow-500 rounded-full p-3 transition-all duration-300 cursor-pointer inline-flex items-center justify-center"
                aria-label="Watch video about brain tumor research"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M8 5.14v14l11-7-11-7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
