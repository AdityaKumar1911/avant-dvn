import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using react-router for navigation
import Img1 from "../../Assets/images/Avant Devine8310.jpg"; // Image 1
import Img2 from "../../Assets/images/Avant Devine8535.jpg"; // Image 2

export default function FashionShowcase() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        {/* <h1 className="text-4xl md:text-6xl font-bold text-center mb-12">
          Avant Collections
        </h1> */}

        {/* Fashion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Blue Collection Card */}
          <div className="group relative overflow-hidden max-h-[600px]">
            <div className="aspect-[3/4] relative">
              <img
                src={Img1} // Use the imported image here
                alt="HUEMN Blue Collection"
                className="object-cover transform transition-transform duration-500 group-hover:scale-105 max-h-[600px] w-full"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transform transition-transform duration-300 group-hover:translate-y-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Rose Noir Tee Shirt
              </h2>
              <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Avant-garde designs featuring bold blue hues and artistic
                expressions
              </p>
              <Link
                to="/product-page"
                className="inline-block bg-white text-black px-6 py-2 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              >
                Explore Collection
              </Link>
            </div>
          </div>

          {/* Diversity Collection Card */}
          <div className="group relative overflow-hidden max-h-[600px]">
            <div className="aspect-[3/4] relative">
              <img
                src={Img2} // Use the imported image here
                alt="HUEMN Diversity Collection"
                className="object-cover transform transition-transform duration-500 group-hover:scale-105 max-h-[600px] w-full"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transform transition-transform duration-300 group-hover:translate-y-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Chrome Pulse Jeans
              </h2>
              <p className="text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Contemporary streetwear blending comfort with artistic
                expression
              </p>
              <Link
                to="/product-page"
                className="inline-block bg-white text-black px-6 py-2 transform -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
