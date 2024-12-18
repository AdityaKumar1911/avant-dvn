import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isCartOpen) setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav className="relative bg-white shadow-sm">
      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Hamburger menu */}
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 text-gray-800 hover:text-gray-900 focus:outline-none"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="text-xl font-semibold text-gray-900">
              AVANT DIVINE
            </Link>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="text-gray-800 hover:text-gray-900">
              Call Us
            </Link>
            <button
              onClick={toggleCart}
              className="text-gray-800 hover:text-gray-900 relative"
              aria-expanded={isCartOpen}
              aria-controls="cart-sidebar"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
            <Link to="/account" className="text-gray-800 hover:text-gray-900">
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out`}
      >
        <div className="pt-16 pb-6 px-4">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2 text-gray-800 hover:text-gray-900 focus:outline-none"
          >
            <span className="sr-only">Close menu</span>
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Mobile menu items */}
          <div className="space-y-6">
            <Link
              to="/"
              className="block text-lg font-medium text-gray-900 hover:text-gray-700"
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block text-lg font-medium text-gray-900 hover:text-gray-700"
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block text-lg font-medium text-gray-900 hover:text-gray-700"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-lg font-medium text-gray-900 hover:text-gray-700"
            >
              Contact
            </Link>

            {/* Mobile account */}
            <Link
              to="/account"
              className="flex items-center space-x-2 text-lg font-medium text-gray-900 hover:text-gray-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Account</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Cart sidebar */}
      <div
        id="cart-sidebar"
        className={`${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out`}
      >
        <div className="h-full flex flex-col">
          <div className="px-4 py-6 bg-gray-100">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Your Cart</h2>
              <button
                onClick={toggleCart}
                className="text-gray-800 hover:text-gray-900 focus:outline-none"
              >
                <span className="sr-only">Close cart</span>
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-6">
            {/* Cart items would go here */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-900">
                    Product Name
                  </h3>
                  <p className="text-sm text-gray-600">$XX.XX</p>
                  <p className="text-sm text-gray-600">Quantity: 1</p>
                </div>
              </div>
              {/* Repeat for other items */}
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-100">
            <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
              <p>Subtotal</p>
              <p>$XX.XX</p>
            </div>
            <button className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
