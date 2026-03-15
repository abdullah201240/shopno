"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, X, Trash2, Plus, Minus, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const FloatingCart = () => {
  const { cartItems, cartCount, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const [previousCount, setPreviousCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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

  const deliveryFee = cartTotal >= 500 ? 0 : 60;
  const discount = cartItems.reduce((acc, curr) => acc + ((curr.originalPrice || curr.price) - curr.price) * curr.quantity, 0);
  const finalTotal = cartTotal + deliveryFee;

  return (
    <>
      {/* Floating Cart Button */}
      <div 
        className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col items-center"
        onMouseEnter={() => setIsHovered(true)}
      >
        <Link 
          href="/cart" 
          className={`
            bg-[#C82128] text-white flex flex-col items-center py-3 px-2  
            transition-all duration-300 w-16
            ${isAnimating ? 'animate-bounce' : ''}
            
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

      {/* Cart Sheet/Drawer - Full Height (outside transformed parent to avoid stacking context issues) */}
      <div 
        className={`
          fixed top-0 right-0 h-screen w-[450px] max-w-[100vw] bg-white z-[101]
          transform transition-all duration-500 ease-in-out
          ${isHovered ? 'translate-x-0' : 'translate-x-full'}
        `}
        onMouseLeave={() => setIsHovered(false)}
      >
          {/* Sheet Header with Gradient */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#C82128] to-[#A81A20] text-white">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-white/20 backdrop-blur-sm">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-base font-black leading-tight">My Shopping Cart</h2>
                <p className="text-xs text-white/80 font-medium">{cartCount} {cartCount === 1 ? 'item' : 'items'}</p>
              </div>
            </div>
            <button
              onClick={() => setIsHovered(false)}
              className="p-1.5 bg-transparent rounded-full backdrop-blur-sm"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Sheet Content */}
          <div className="flex flex-col h-full">
            {/* Cart Items - Scrollable */}
            <div className="flex-1 overflow-y-auto p-3 bg-gray-50">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBag className="w-10 h-10 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-black text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-5 text-xs max-w-xs">Looks like you haven't added anything yet.</p>
                  <Link href="/">
                    <Button 
                      onClick={() => setIsHovered(false)}
                      className="bg-[#C82128]  text-white font-bold h-9 px-6 text-sm transition-all"
                    >
                      Start Shopping
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-2">
                  {cartItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="bg-white p-3 border border-gray-100 relative overflow-hidden"
                    >
                      {/* Remove Button - Always Visible */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="absolute top-2 right-2 p-1.5 bg-white rounded-full z-10"
                        title="Remove item"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>

                      <div className="flex gap-3">
                        {/* Product Image */}
                        <Link href={`/product/${item.id}`} className="relative w-16 h-16 bg-gradient-to-br from-gray-50 to-gray-100 p-2 shrink-0 overflow-hidden">
                          <Image 
                            src={item.image} 
                            alt={item.name} 
                            fill 
                            className="object-contain" 
                          />
                        </Link>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <Link href={`/product/${item.id}`}>
                            <h4 className="font-bold text-xs text-gray-900 line-clamp-2">
                              {item.name}
                            </h4>
                          </Link>
                          <p className="text-[10px] text-gray-500 mt-0.5 font-medium">{item.unit}</p>
                          
                          {/* Price & Quantity Row */}
                          <div className="flex items-center justify-between mt-1.5">
                            <div className="flex items-center gap-1.5">
                              <span className="font-black text-sm text-[#C82128]">৳{item.price}</span>
                              {item.originalPrice && (
                                <span className="text-[10px] text-gray-400 line-through font-medium">৳{item.originalPrice}</span>
                              )}
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded "
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-black text-gray-900 min-w-[20px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 flex items-center justify-center bg-gray-100 rounded"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Clear Cart Button */}
                  {cartItems.length > 0 && (
                    <button
                      onClick={clearCart}
                      className="w-full py-2 text-xs font-bold text-red-600 rounded-lg flex items-center justify-center gap-1.5 border border-red-200"
                    >
                      <Trash2 className="w-3 h-3" />
                      Clear All Items
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Order Summary Footer */}
            {cartItems.length > 0 && (
              <div className="border-t border-gray-100 px-4 py-3 bg-gradient-to-t from-white to-gray-50 mb-16">
                <div className="space-y-1.5 mb-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600 font-medium">Subtotal ({cartItems.reduce((acc, i) => acc + i.quantity, 0)} items)</span>
                    <span className="font-bold text-gray-900">৳{cartTotal}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-600 font-medium">Delivery Fee</span>
                    {deliveryFee === 0 ? (
                      <span className="text-green-600 font-black bg-green-50 px-2 py-0.5 rounded-full text-[10px]">Free</span>
                    ) : (
                      <span className="font-bold text-gray-900">৳{deliveryFee}</span>
                    )}
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600 font-medium">Discount</span>
                      <span className="font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full text-[10px]">-৳{discount}</span>
                    </div>
                  )}
                  <Separator className="bg-gray-200" />
                  <div className="flex justify-between items-center bg-gradient-to-r from-red-50 to-white px-3 py-2 rounded-lg border border-red-100">
                    <div>
                      <span className="text-xs font-bold text-gray-600 block">Grand Total</span>
                      <span className="text-[10px] text-gray-500">VAT included</span>
                    </div>
                    <span className="text-xl font-black text-[#C82128]">৳{finalTotal}</span>
                  </div>
                </div>

                <Link href="/checkout" className="block mb-1.5">
                  <Button 
                    onClick={() => setIsHovered(false)}
                    className="w-full h-10 bg-gradient-to-r from-[#C82128] to-[#A81A20] text-white font-black text-sm"
                  >
                    Proceed to Checkout
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
                
                <Link href="/cart">
                  <Button 
                    onClick={() => setIsHovered(false)}
                    variant="outline" 
                    className="w-full h-8 border border-gray-200 text-gray-700 font-bold text-xs rounded-lg"
                  >
                    View Full Cart Page
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

      {/* Overlay to close sheet */}
      {isHovered && (
        <div 
          className="fixed inset-0 bg-black/30 z-[99] backdrop-blur-sm transition-opacity duration-500"
          onClick={() => setIsHovered(false)}
        />
      )}
    </>
  );
};

export default FloatingCart;
