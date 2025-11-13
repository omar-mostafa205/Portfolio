"use client"
import React from 'react'

const MovingImages = () => {
  const images = [
    { src: "/codemind.png", alt: "Codemind" },
    { src: "/docy.png", alt: "Docy" },
    { src: "/codelet.png", alt: "Codelet" },
    { src: "/planna.png", alt: "Planna" },
    { src: "/polish.png", alt: "Polish" },
  ]

  const tripleImages = [...images, ...images, ...images , ...images , ...images , ...images];

  return (
    <div className="w-full bg-[#00031a] py-20 overflow-hidden -mt-30">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#00031a] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#00031a] to-transparent z-10" />
        
        <div className="flex animate-scroll-right gap-8">
          {tripleImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[490px] h-[300px] rounded-md overflow-hidden shadow-2xl  relative bg-gray-900"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />
              </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollRight {
          0% {
            transform: translateX(-66.666%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scroll-right {
          animation: scrollRight 20s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default MovingImages