import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const CartContext = createContext();

// Conversion rate constant
const EUR_TO_INR = 90;

// Cart Provider component
export function CartProvider({ children }) {
  // Load cart items from local storage
  const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  };

  // State to manage cart items
  const [cartItems, setCartItems] = useState(loadCartFromLocalStorage);

  // Persist cart items in local storage whenever they change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add an item to the cart or update its quantity
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      } else {
        return [...prevItems, { ...item, quantity: item.quantity }];
      }
    });
  };

  // Update the quantity of a cart item
  const updateCartItemQuantity = (id, change) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(0, item.quantity + change) }
              : item
          )
          .filter((item) => item.quantity > 0) // Remove items with quantity <= 0
    );
  };

  // Remove an item from the cart
  const removeItemFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate the total price in INR for a specific item or quantity
  const calculatePriceInINR = (priceInEUR, quantity = 1) => {
    return (priceInEUR * quantity).toFixed(2);
  };

  // Calculate the cart subtotal
  const calculateCartSubtotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItemQuantity,
        removeItemFromCart, // Expose remove function
        // calculatePriceInINR,
        calculateCartSubtotal, // Expose subtotal calculation
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  return useContext(CartContext);
}
