"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const FloatingCart = () => {
  const { cartCount, cartTotal } = useCart();
  const [previousCount, setPreviousCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Detect when cart count changes (product added)
  useEffect(() => {
    if (cartCount > previousCount && cartCount > 0) {
      // Trigger animation
      setIsAnimating(true);
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 600); // Animation duration
      
      return () => clearTimeout(timer);
    }
    setPreviousCount(cartCount);
  }, [cartCount, previousCount]);

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col items-center">
      <Link 
        href="/cart" 
        className={`
          bg-[#C82128] text-white flex flex-col items-center py-3 px-2 rounded-l-md shadow-2xl border-t-[3px] border-t-[#FFD35E] 
          transition-all duration-300 w-16
          ${isAnimating ? 'animate-bounce' : ''}
          hover:pr-4
        `}
      >
         <div className="flex flex-col items-center gap-1 relative">
            {/* Pulse effect when animating */}
            {isAnimating && (
              <div className="absolute inset-0 bg-yellow-400/30 rounded-full animate-ping" />
            )}
            
            <ShoppingBag className={`h-6 w-6 mb-1 transition-transform duration-300 ${isAnimating ? 'scale-125' : ''}`} />
            
            <span className="text-[11px] font-black uppercase leading-[1.1] text-center relative z-10">
              <span className={`inline-block transition-all duration-300 ${isAnimating ? 'scale-150 text-yellow-400' : ''}`}>
                {cartCount}
              </span>
              {" "}<span className="block text-[9px] opacity-90 lowercase font-bold">items</span>
            </span>
         </div>
         
         {/* Progress bar animation */}
         <div className={`mt-2 bg-[#FFD35E] w-full h-[3px] rounded-full opacity-30 transition-all duration-500 ${isAnimating ? 'scale-x-125' : ''}`} />
         
         <span className="mt-2 text-[12px] font-black tracking-tight transition-all duration-300">৳{cartTotal.toFixed(0)}</span>
      </Link>
    </div>
  );
};

export default FloatingCart;
