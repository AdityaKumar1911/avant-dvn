// src/components/Cart/Cart.js

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Cart({
  isCartOpen,
  toggleCart,
  cartItems,
  setCartItems,
  cartTotal,
  setCartTotal,
}) {
  const cartRef = useRef(null);
  const navigate = useNavigate();

  // Increment Quantity
  const incrementQuantity = async (productId) => {
    const item = cartItems.find((item) => item.productId._id === productId);
    const updatedQuantity = item.quantity + 1;

    try {
      const response = await axios.put(
        `http://195.35.45.224:5000/api/cart/update/${productId}`,
        { quantity: updatedQuantity }
      );
      if (response.data.status) {
        // Update local cart state
        setCartItems((prevItems) =>
          prevItems.map((item) =>
            item.productId._id === productId
              ? { ...item, quantity: updatedQuantity }
              : item
          )
        );
        // Update total price
        const total = cartItems.reduce(
          (sum, item) => sum + item.productId.price * item.quantity,
          0
        );
        setCartTotal(total);
      }
    } catch (error) {
      console.error("Error incrementing quantity:", error);
    }
  };

  // Decrement Quantity
  const decrementQuantity = async (productId) => {
    const item = cartItems.find((item) => item.productId._id === productId);
    if (item.quantity > 1) {
      const updatedQuantity = item.quantity - 1;

      try {
        const response = await axios.put(
          `http://195.35.45.224:5000/api/cart/update/${productId}`,
          { quantity: updatedQuantity }
        );
        if (response.data.status) {
          // Update local cart state
          setCartItems((prevItems) =>
            prevItems.map((item) =>
              item.productId._id === productId
                ? { ...item, quantity: updatedQuantity }
                : item
            )
          );
          // Update total price
          const total = cartItems.reduce(
            (sum, item) => sum + item.productId.price * item.quantity,
            0
          );
          setCartTotal(total);
        }
      } catch (error) {
        console.error("Error decrementing quantity:", error);
      }
    }
  };

  const handleCheckout = () => {
    toggleCart();
    navigate("/checkoutpage");
  };

  return (
    <div
      ref={cartRef}
      id="cart-sidebar"
      className={`${
        isCartOpen ? "translate-x-0" : "translate-x-full"
      } fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out`}
    >
      <div className="h-full flex flex-col">
        <div className="px-4 py-6 bg-gray-100" style={{ paddingTop: "13px" }}>
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
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item._id} className="flex items-center">
                  <img
                    src={`${process.env.REACT_APP_IMAGE_URL}/${item.productId.images[0]}`}
                    alt={item.productId.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-sm font-medium text-gray-900">
                      {item.productId.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Price: ₹{item.productId.price}
                    </p>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => decrementQuantity(item.productId._id)}
                        className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        -
                      </button>
                      <button
                        onClick={() => incrementQuantity(item.productId._id)}
                        className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="px-4 py-6 bg-gray-100">
          <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
            <p>Subtotal</p>
            <p>₹{cartTotal.toLocaleString()}</p>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
