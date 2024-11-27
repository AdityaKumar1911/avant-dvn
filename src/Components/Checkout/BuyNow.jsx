"use client";

import { useCart } from "../CartContext/CartContext"; // Adjust path as needed
import { useLocation } from "react-router-dom";

export default function BuyNowPage() {
  const { addToCart } = useCart();
  const location = useLocation();

  // Get the product details from state with a default empty object to prevent null errors
  const {
    selectedSize = "",
    selectedColor = "Black",
    quantity = 1,
    price = 19.5,
  } = location.state || {};

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    const item = {
      id: `${selectedColor}-${selectedSize}`,
      name: "Medusa T-Shirt",
      color: selectedColor,
      size: selectedSize,
      quantity,
      price,
    };

    addToCart(item);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-medium mb-4">Buy Now</h1>

      <div className="space-y-2">
        <p>
          <strong>Product:</strong> Medusa T-Shirt
        </p>
        <p>
          <strong>Color:</strong> {selectedColor}
        </p>
        <p>
          <strong>Size:</strong> {selectedSize}
        </p>
        <p>
          <strong>Quantity:</strong> {quantity}
        </p>
        <p>
          <strong>Total Price:</strong> €{(price * quantity).toFixed(2)}
        </p>
      </div>

      <button
        onClick={handleAddToCart}
        className="w-full mt-6 bg-[#14161A] text-white py-3 px-4 hover:bg-black transition-colors"
      >
        Add to Cart
      </button>
    </div>
  );
}
