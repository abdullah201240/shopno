"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  unit: string;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Load from LocalStorage
  useEffect(() => {
    setIsClient(true);
    const savedCart = localStorage.getItem("shopno_cart");
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (err) {
        console.error("Failed to parse cart from local storage", err);
      }
    }
  }, []);

  // Sync with LocalStorage
  useEffect(() => {
    if (isClient) {
      localStorage.setItem("shopno_cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isClient]);

  const addToCart = (item: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      const addQty = item.quantity || 1;
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + addQty } : i
        );
      }
      return [...prev, { ...item, quantity: addQty }];
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) => {
      if (quantity <= 0) {
        return prev.filter((i) => i.id !== id);
      }
      return prev.map((i) => (i.id === id ? { ...i, quantity } : i));
    });
  };

  const clearCart = () => setCartItems([]);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
