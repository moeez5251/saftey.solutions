// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // LOAD CART
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ssSafetyCart_v2");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setCartItems(parsed);
        } else {
          setCartItems([]);
        }
      }
    } catch (error) {
      console.error("🔥 LOAD ERROR:", error);
      setCartItems([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // SAVE CART
  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem("ssSafetyCart_v2", JSON.stringify(cartItems));
    } catch (error) {
    }
  }, [cartItems, isLoaded]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        // Increase quantity if already in cart
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Add new item with the selected quantity
        return [...current, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((current) => current.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems((current) =>
      current
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("ssSafetyCart_v2");
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // FIXED TOTAL: Only calculate numeric prices
  const totalAmount = cartItems.reduce((sum, item) => {
    if (typeof item.price === "number") {
      return sum + item.price * item.quantity;
    }
    return sum; // Skip "Call for Price" items
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};