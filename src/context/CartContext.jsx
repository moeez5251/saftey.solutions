// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // New: track if loaded

  // LOAD CART - runs once
  useEffect(() => {
    console.log("🔄 Loading cart from localStorage...");
    try {
      const saved = localStorage.getItem("ssSafetyCart_v2"); // New unique key
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCartItems(parsed);
          console.log("✅ LOADED CART:", parsed);
        } else {
          console.log("❌ Invalid data, starting empty");
          setCartItems([]);
        }
      } else {
        console.log("ℹ️ No saved cart, starting empty");
        setCartItems([]);
      }
    } catch (error) {
      console.error("🔥 LOAD ERROR:", error);
      setCartItems([]);
    } finally {
      setIsLoaded(true); // Mark as loaded
    }
  }, []);

  // SAVE CART - runs every time cartItems change
  useEffect(() => {
    if (!isLoaded) return; // Don't save before load complete

    console.log("💾 Saving cart:", cartItems);
    try {
      localStorage.setItem("ssSafetyCart_v2", JSON.stringify(cartItems));
      console.log("✅ SAVED SUCCESSFULLY");
    } catch (error) {
      console.error("🔥 SAVE ERROR:", error);
    }
  }, [cartItems, isLoaded]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      let newItems;
      if (existing) {
        newItems = current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        newItems = [...current, { ...product, quantity }];
      }
      console.log("🛒 ADDED TO CART - New state:", newItems);
      return newItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((current) => {
      const newItems = current.filter((item) => item.id !== id);
      console.log("🗑️ REMOVED - New state:", newItems);
      return newItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("ssSafetyCart_v2");
    console.log("🧹 CART CLEARED");
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price || 0) * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};