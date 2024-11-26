import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Collaction1 from "../../Assets/images/Avant Devine7960.jpg";
import Collaction2 from "../../Assets/images/Avant Devine8161.jpg";
import Collaction3 from "../../Assets/images/Avant Devine8496.jpg";
import Collaction4 from "../../Assets/images/Avant Devine8535.jpg";
import Collaction5 from "../../Assets/images/Avant Devine8658.jpg";

const collections = [
  {
    name: "Scarlet Seduction Bodysuit",
    image: Collaction1,
    price: "$89.99",
  },
  {
    name: "Rose Noir Tee",
    image: Collaction2,
    price: "$39.99",
  },
  {
    name: "Faded Echo Tee",
    image: Collaction3,
    price: "$34.99",
  },
  {
    name: "Chrome Pulse Jeans",
    image: Collaction4,
    price: "$79.99",
  },
  {
    name: "The Wave Co-ord",
    image: Collaction5,
    price: "$129.99",
  },
];

export default function Collections() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="w-full px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {collections.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105"
              style={{ width: "100%", maxWidth: "250px", margin: "0 auto" }}
            >
              {/* Image Section */}
              <div className="relative w-full h-60">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Text and Button Section */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="font-semibold text-lg text-center mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-center">{item.price}</p>
                {/* Button at the Bottom */}
                <button className="w-full bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center group">
                  <Link
                    to="/bodysuit"
                    className="flex items-center justify-center w-full"
                  >
                    <span className="mr-2">Explore Collection</span>
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
