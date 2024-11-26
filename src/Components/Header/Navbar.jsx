"use client";

import { useState } from "react";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../CartContext/CartContext"; // Adjust path as needed

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cartItems, updateCartItemQuantity } = useCart(); // Assuming you have a function to update cart quantity
  const navigate = useNavigate(); // For navigation

  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Increment and decrement quantity
  const handleQuantityChange = (id, action) => {
    if (action === "increment") {
      updateCartItemQuantity(id, 1); // Increment quantity
    } else if (action === "decrement") {
      updateCartItemQuantity(id, -1); // Decrement quantity
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false); // Close the cart modal
    navigate("/checkoutpage"); // Navigate to the checkout page
  };

  return (
    <>
      {/* Placeholder div to block navbar space */}
      <div className="h-[64px] w-full"></div>

      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-[64px]">
        <div className="flex items-center justify-between px-4 py-4 h-full">
          {/* Left - Menu Icon */}
          <button
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Center - Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="text-xl font-medium tracking-wider">
              AVANT DIVINE
            </Link>
          </div>

          {/* Right - Call Us, Cart, User */}
          <div className="flex items-center gap-4">
            <button className="hidden md:block hover:text-gray-600 transition-colors">
              Call Us
            </button>

            <button
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Shopping cart"
              onClick={toggleCart}
            >
              <ShoppingBag className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 h-5 w-5 text-xs flex items-center justify-center bg-black text-white rounded-full">
                {cartItemCount} {/* Show total cart item count */}
              </span>
            </button>

            <button
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="User account"
            >
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Hamburger Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md z-10">
            <ul className="py-2">
              <li>
                <Link to="/" className="block px-4 py-2 hover:bg-gray-100">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Cart Modal on Right Side */}
      {isCartOpen && (
        <div className="fixed top-0 right-0 bottom-0 w-[400px] bg-white shadow-xl z-40 p-4">
          <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id} className="flex justify-between mb-4">
                  <div className="flex flex-col">
                    <span className="font-semibold">{item.name}</span>
                    <span>Size: {item.size}</span>
                    <span>Color: {item.color}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-md"
                      onClick={() => handleQuantityChange(item.id, "decrement")}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-md"
                      onClick={() => handleQuantityChange(item.id, "increment")}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Total Price:</span>
            <span className="text-xl">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={toggleCart}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg w-full"
            >
              Close Cart
            </button>
            <button
              onClick={handleCheckout}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg w-full"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
