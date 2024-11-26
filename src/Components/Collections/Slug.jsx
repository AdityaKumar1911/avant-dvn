import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const collections = [
  {
    name: "Scarlet Seduction Bodysuit",
    slug: "scarlet-seduction-bodysuit",
    description: "A stunning bodysuit that exudes confidence and allure.",
  },
  {
    name: "Rose Noir Tee",
    slug: "rose-noir-tee",
    description: "A chic and versatile tee with a dark, romantic twist.",
  },
  {
    name: "Faded Echo Tee",
    slug: "faded-echo-tee",
    description: "A comfortable tee with a vintage-inspired, faded design.",
  },
  {
    name: "Chrome Pulse Jeans",
    slug: "chrome-pulse-jeans",
    description: "Sleek jeans with a modern, metallic sheen.",
  },
  {
    name: "The Wave Co-ord",
    slug: "the-wave-co-ord",
    description: "A coordinated set inspired by the fluidity of ocean waves.",
  },
];

export default function CollectionPage() {
  const { slug } = useParams(); // Get slug from React Router's dynamic route
  const navigate = useNavigate(); // For navigation
  const collection = collections.find((c) => c.slug === slug);

  if (!collection) {
    // Redirect to 404 page or navigate to home
    navigate("/404", { replace: true });
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-gray-900">
            {collection.name}
          </h1>
        </div>
      </header>

      {/* Main Section */}
      <main className="max-w-6xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image */}
          <div className="aspect-w-3 aspect-h-4">
            <img
              src={`/placeholder.svg?height=600&width=450&text=${collection.name}`}
              alt={collection.name}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
          {/* Description and Buttons */}
          <div className="flex flex-col justify-center">
            <p className="text-xl text-gray-600 mb-6">
              {collection.description}
            </p>
            <div className="space-y-4">
              <button className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors duration-300">
                Add to Cart
              </button>
              <button className="w-full bg-white text-black py-3 px-6 rounded-md border border-black hover:bg-gray-100 transition-colors duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-white mt-12 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <Link to="/" className="text-blue-600 hover:underline">
            &larr; Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}

// import ProductImg1 from "../../Assets/images/Avant Devine8325.jpg";
// import ProductImg2 from "../../Assets/images/Avant Devine8196.jpg";
// import ProductImg3 from "../../Assets/images/Avant Devine8240 edit.jpg";
// import ProductImg4 from "../../Assets/images/Avant Devine8310.jpg";

// Black: [ProductImg1, ProductImg2, ProductImg3, ProductImg4],
