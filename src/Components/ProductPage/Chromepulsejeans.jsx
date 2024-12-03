"use client";

import { useState, useEffect } from "react";
import { useCart } from "../CartContext/CartContext"; // Adjust path as needed
import { Link } from "react-router-dom";
import ProductImg1 from "../../Assets/images/Avant Devine8535.jpg";
import ProductImg2 from "../../Assets/images/Avant Devine8658.jpg";
import ProductImg3 from "../../Assets/images/Avant Devine8509 edit.jpg";
import ProductImg4 from "../../Assets/images/Avant Devine8496.jpg";

export default function ProductPage() {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [activeTab, setActiveTab] = useState("PRODUCT INFORMATION");
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();

  const images = {
    Black: [ProductImg1, ProductImg2, ProductImg3, ProductImg4],
    White: [
      "/placeholder.svg?height=600&width=600&text=White+1",
      "/placeholder.svg?height=600&width=600&text=White+2",
      "/placeholder.svg?height=600&width=600&text=White+3",
      "/placeholder.svg?height=600&width=600&text=White+4",
    ],
  };

  const sizes = ["S", "M", "L", "XL"];
  const colors = ["Black", "White"];
  const tabs = ["PRODUCT INFORMATION", "SHIPPING & RETURNS"];

  useEffect(() => {
    setSelectedImage(0);
  }, [selectedColor]);

  const handleIncreaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    const item = {
      id: `${selectedColor}-${selectedSize}`,
      name: "Chrome pulse jeans",
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      price: 9500, // Price in INR
    };
    addToCart(item);
    alert("Your item has been successfully added to the cart!");
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    // Add your "buy now" logic here (e.g., redirect to checkout or initiate the purchase)
  };

  // Calculate the total price in INR (₹4700 per item)
  const priceInINR = 9500 * quantity;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Image Gallery */}
      <div className="relative">
        <div className="absolute left-0 top-0 flex flex-col gap-4">
          {images[selectedColor].map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`w-16 h-16 border ${
                selectedImage === index ? "border-black" : "border-gray-200"
              }`}
            >
              <img
                src={img}
                alt={`${selectedColor} T-shirt view ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
        <div className="ml-20">
          <img
            src={images[selectedColor][selectedImage]}
            alt={`Main ${selectedColor} T-shirt image`}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-medium">Chrome Plus Jeans</h1>
          <p className="mt-2 text-gray-600" style={{ textAlign: "justify" }}>
            Step into the spotlight with our heavy-duty denim chrome jeans, a
            true masterpiece that redefines bold fashion. Handcrafted to
            perfection, these jeans are not just clothing—they’re a work of art.
            Made from premium, durable denim, they offer both strength and
            comfort, designed to withstand the test of time. What truly sets
            these jeans apart is the all-over silver foiling, which creates a
            stunning, reflective effect that catches the light and turns heads.
            The intricate embellishments add a layer of sophistication, making
            each pair as unique as the person wearing them.
          </p>
        </div>

        {/* Size Selection */}
        <div>
          <h2 className="text-sm font-medium mb-2">Select Size</h2>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-12 h-12 border ${
                  selectedSize === size
                    ? "border-black bg-black text-white"
                    : "border-gray-200 hover:border-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div>
          <h2 className="text-sm font-medium mb-2">Select Color</h2>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-16 h-12 border ${
                  selectedColor === color
                    ? "border-black"
                    : "border-gray-200 hover:border-black"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div>
          <h2 className="text-sm font-medium mb-2">Quantity</h2>
          <div className="flex items-center gap-4">
            <button
              onClick={handleDecreaseQuantity}
              className="w-10 h-10 bg-gray-200 text-black text-lg flex justify-center items-center border border-gray-300 hover:bg-gray-300"
            >
              -
            </button>
            <p className="text-lg">{quantity}</p>
            <button
              onClick={handleIncreaseQuantity}
              className="w-10 h-10 bg-gray-200 text-black text-lg flex justify-center items-center border border-gray-300 hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        {/* Price and Action Buttons */}
        <div className="space-y-4">
          <p className="text-xl">₹{priceInINR.toLocaleString()}</p>{" "}
          {/* Display price in INR */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#14161A] text-white py-3 px-4 hover:bg-black transition-colors"
            // disabled={!selectedSize}
          >
            ADD TO CART
          </button>
          <Link to="/checkoutpage">
            <button
              className="w-full bg-red-600 text-white py-3 px-4 hover:bg-red-700  transition-colors"
              style={{ marginTop: "10px" }}
            >
              BUY NOW
            </button>
          </Link>
        </div>

        {/* Product Information Tabs */}
        <div className="pt-8">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-sm ${
                  activeTab === tab
                    ? "border-b-2 border-black"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="pt-4">
            {activeTab === "PRODUCT INFORMATION" ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Material</p>
                    <p className="text-gray-600">100% Cotton</p>
                  </div>
                  <div>
                    <p className="font-medium">Weight</p>
                    <p className="text-gray-600">425 g</p>
                  </div>
                  <div>
                    <p className="font-medium">Country of origin</p>
                    <p className="text-gray-600">Portugal</p>
                  </div>
                  <div>
                    <p className="font-medium">Dimensions</p>
                    <p className="text-gray-600">-</p>
                  </div>
                  <div>
                    <p className="font-medium">Type</p>
                    <p className="text-gray-600">T-Shirt</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-600">
                <p>
                  Free shipping on orders over ₹4500. Returns accepted within 14
                  days of delivery.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
