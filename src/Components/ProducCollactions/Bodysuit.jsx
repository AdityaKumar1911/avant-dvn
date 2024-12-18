import React, { useState } from "react";
import BodySuit1 from "../../Assets/images/Avant-Devine7960.jpg";

// Product list
const products = [
  {
    id: 1,
    name: "Scarlet Seduction Bodysuit",
    price: 29.99,
    category: "Bodysuits",
    image: BodySuit1,
  },
  {
    id: 2,
    name: "Velvet Desire Bodysuit",
    price: 19.99,
    category: "T-Shirts",
    image:
      "https://images.pexels.com/photos/7583881/pexels-photo-7583881.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    name: "Obsidian Temptation Bodysuit",
    price: 49.99,
    category: "Jeans",
    image:
      "https://images.pexels.com/photos/4547987/pexels-photo-4547987.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    name: "Opal Luxe Bodysuit",
    price: 199.99,
    category: "Jackets",
    image:
      "https://images.unsplash.com/photo-1685012494374-c230ae919e80?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Crimson Grace Bodysuit",
    price: 79.99,
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1668895048775-042ffa95a139?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Midnight Charm Bodysuit",
    price: 39.99,
    category: "Dresses",
    image:
      "https://images.unsplash.com/photo-1685011639316-cd130e3a4437?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Ivory Embrace Bodysuit",
    price: 29.99,
    category: "Shorts",
    image:
      "https://images.unsplash.com/photo-1664097107089-e3df8cdddd9f?q=80&w=1887&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Summer Breeze Bodysuit",
    price: 29.99,
    category: "Shorts",
    image:
      "https://images.unsplash.com/photo-1708998291711-6024c4db6bc9?q=80&w=1888&auto=format&fit=crop",
  },
];

// Dynamic categories
const categories = [
  "All",
  ...new Set(products.map((product) => product.category)),
];

export default function ProductListingPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products by category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>

      {/* Category Filter */}
      <div className="mb-8 text-center">
        <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-red-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={product.image || "https://via.placeholder.com/300"}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-1">{product.category}</p>
              <p className="text-gray-900 font-bold">
                ${product.price.toFixed(2)}
              </p>
              <button className="mt-4 w-full bg-[#14161A] text-white py-2 px-4 rounded hover:bg-red-600 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* No Products Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center mt-8">
          <p className="text-gray-500">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
