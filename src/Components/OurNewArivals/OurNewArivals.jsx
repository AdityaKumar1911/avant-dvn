import React from "react";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const products = [
    {
      name: "DARK FLORISH ONEPIECE",
      price: 95.0,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/7/329150198/YP/XL/PL/193311541/md362-3-500x500.jpg",
    },
    {
      name: "BAGGY SHIRT",
      price: 55.0,
      image:
        "https://plus.unsplash.com/premium_photo-1689575247968-d1040651e57f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "COTTON OFF-WHITE SHIRT",
      price: 65.0,
      image:
        "https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "CROP SWEATER",
      price: 50.0,
      image:
        "https://plus.unsplash.com/premium_photo-1705554519595-c1143c7fef97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-serif">OUR NEW ARRIVALS</h2>
        <Link
          to="/products"
          className="text-sm uppercase tracking-wider hover:underline"
        >
          VIEW ALL PRODUCTS
        </Link>
      </div>

      <div className="relative">
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow hover:bg-white z-10"
          aria-label="Previous products"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <div key={index} className="group">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover transition-transform duration-300 group-hover:scale-105 w-full h-full"
                />
              </div>
              <h3 className="text-lg font-medium mb-2">{product.name}</h3>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 w-8 h-8 flex items-center justify-center bg-white/80 rounded-full shadow hover:bg-white z-10"
          aria-label="Next products"
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
