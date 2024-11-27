import React, { createContext, useContext, useState, useEffect } from "react";

// Create the context
const CartContext = createContext();

// Create a provider component
export function CartProvider({ children }) {
  // Load cart items from localStorage on initial load
  const loadCartFromLocalStorage = () => {
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cartItems, setCartItems] = useState(loadCartFromLocalStorage);

  // Sync cart items to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Create a custom hook to use the cart context
export function useCart() {
  return useContext(CartContext);
}
