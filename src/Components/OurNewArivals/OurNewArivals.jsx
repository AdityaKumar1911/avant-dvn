import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const [products, setProducts] = useState([]); // State to store fetched products
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL + "/products/all");
        const data = await response.json();

        if (data && Array.isArray(data)) {
          // Map API response to the desired format
          const formattedProducts = data.map((item) => ({
            id: item._id,
            name: item.name,
            price: item.price,
            image: process.env.REACT_APP_IMAGE_URL + "/" + item.images[0],
          }));
          setProducts(formattedProducts);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Function to handle the next button click
  const handleNext = () => {
    if (currentIndex < products.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to handle the previous button click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Create a subset of the products array to display the current slider window
  const displayedProducts = products.slice(currentIndex, currentIndex + 4);

  return (
    <section className="container mx-auto px-4 py-12" style={{ overflow: "hidden" }}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-serif">OUR NEW ARRIVALS</h2>
        <Link to="#" className="text-sm uppercase tracking-wider hover:underline">
          VIEW ALL PRODUCTS
        </Link>
      </div>

      <div className="relative">
        {/* Previous Button */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow hover:bg-white z-10"
          aria-label="Previous products"
          onClick={handlePrev}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {displayedProducts.map((product, index) => (
            <div key={index} className="group">
              <Link to={`/product-details/${product.id}`} className="block">
                <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <p className="text-gray-600">
                  <span className="font-semibold">₹ </span>
                  {product.price.toFixed(2)}
                </p>
              </Link>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow hover:bg-white z-10"
          aria-label="Next products"
          onClick={handleNext}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;
