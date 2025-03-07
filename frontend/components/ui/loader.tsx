"use client";

import type React from "react"
import Image from "next/image";

const GifLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <Image
        src="/loading-spinner.gif"
        alt="Loading"
        fill
        className="object-cover"
      />
    </div>
  );
}
export default GifLoader