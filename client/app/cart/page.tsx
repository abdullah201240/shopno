"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, Home, ChevronRight, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, cartTotal, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="hidden md:block">
        <div className="max-w-350 mx-auto">
          <nav className="flex items-center text-[13px] text-gray-500 font-medium">
            <Link href="/" className="hover:text-brand-primary flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-900">Shopping Cart</span>
          </nav>
        </div>
      </div>

      <div className="max-w-350 mx-auto pt-4">
        <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 font-sans tracking-tight">
          Your Shopping Bag
        </h1>

        {cartItems.length === 0 ? (
          <div className="bg-white  p-4 flex flex-col items-center justify-center min-h-[40vh]">
            <div className="w-32 h-32 bg-gray-50 rounded-full flex items-center justify-center mb-6">
              <Image 
                src="/shwapno_logo.png"
                alt="Empty Cart"
                width={80}
                height={80}
                className="opacity-30 grayscale"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Your bag is empty!</h2>
            <p className="text-gray-500 mb-8 max-w-sm text-center">
              Looks like you haven't added anything to your cart yet. Let's find some great deals for you.
            </p>
            <Link href="/">
              <Button className="bg-[#C82128] hover:bg-[#A81A20] text-white font-bold h-12 px-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart Items List */}
            <div className="flex-1">
              <div className="bg-white overflow-hidden">
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-100 text-[13px] font-bold text-gray-500 uppercase tracking-wider">
                  <div className="col-span-6">Product Details</div>
                  <div className="col-span-3 text-center">Quantity</div>
                  <div className="col-span-2 text-right">Price</div>
                  <div className="col-span-1 text-center"></div>
                </div>

                <div className="flex flex-col">
                  {cartItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 p-4 border-b border-gray-100 last:border-0 items-center relative"
                    >
                      {/* Mobile Remove Button Overlay */}
                      <button 
                         onClick={() => removeFromCart(item.id)}
                         className="md:hidden absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                      >
                         <Trash2 className="w-5 h-5" />
                      </button>

                      {/* Product Info */}
                      <div className="col-span-1 md:col-span-6 flex items-start gap-4">
                        <Link href={`/product/${item.id}`} className="block w-20 h-20 md:w-24 md:h-24 shrink-0 bg-gray-50  p-2 relative group">
                          <Image src={item.image} alt={item.name} fill className="object-contain group-hover:scale-105 transition-transform" />
                        </Link>
                        <div className="flex flex-col py-1 pr-8 md:pr-0">
                          <Link href={`/product/${item.id}`} className="font-bold text-[14px] md:text-[15px] leading-tight text-gray-900 hover:text-[#C82128] transition-colors line-clamp-2 mb-1">
                            {item.name}
                          </Link>
                          <span className="text-[12px] text-gray-500 font-bold uppercase">{item.unit}</span>
                          
                          {/* Mobile Price */}
                          <div className="md:hidden mt-2 flex items-center gap-2">
                            <span className="font-black text-[#C82128] text-base">৳{item.price}</span>
                            {item.originalPrice && (
                              <span className="text-gray-400 line-through text-xs font-bold">৳{item.originalPrice}</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Quantity Selector */}
                      <div className="col-span-1 md:col-span-3 flex justify-start md:justify-center items-center mt-2 md:mt-0">
                        <div className="flex items-center  overflow-hidden shadow-sm h-10 w-[120px]">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="flex-1 text-center font-black text-sm text-gray-900 select-none">
                            {item.quantity}
                          </span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Desktop Price */}
                      <div className="hidden md:flex col-span-2 flex-col items-end justify-center">
                        <span className="font-black text-[#C82128] text-lg">৳{item.price * item.quantity}</span>
                        {item.originalPrice && (
                          <span className="text-gray-400 line-through text-[13px] font-bold">৳{item.originalPrice * item.quantity}</span>
                        )}
                      </div>

                      {/* Desktop Remove */}
                      <div className="hidden md:flex col-span-1 justify-center items-center">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 transition-colors"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cart Footer Actions */}
                <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
                  <button 
                    onClick={clearCart}
                    className="text-[13px] font-bold text-gray-500 hover:text-red-500 flex items-center gap-1.5 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    Clear Cart
                  </button>
                  <Link href="/">
                    <Button variant="outline" className="text-[13px] font-bold text-gray-700 bg-white border-gray-200 hover:bg-gray-50">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:w-[380px] shrink-0">
              <div className=" shadow-sm  p-4 sticky top-24">
                <h2 className="text-lg font-black text-gray-900 mb-6 border-b border-gray-100 pb-4">Order Summary</h2>
                
                <div className="flex flex-col gap-4 mb-6">
                  <div className="flex justify-between items-center text-[15px] font-medium text-gray-600">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span className="font-bold text-gray-900">৳{cartTotal}</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-[15px] font-medium text-gray-600">
                    <span>Delivery Fee</span>
                    <span className="text-green-600 font-bold uppercase text-[12px]">Free</span>
                  </div>
                  
                  <div className="flex justify-between items-center text-[15px] font-medium text-[#C82128]">
                    <span>Discount Included</span>
                    <span className="font-bold">
                      -৳{cartItems.reduce((acc, curr) => acc + ((curr.originalPrice || curr.price) - curr.price) * curr.quantity, 0)}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-5 pb-6">
                  <div className="flex justify-between items-end">
                    <span className="text-base font-bold text-gray-900">Total</span>
                    <div className="flex flex-col items-end">
                      <span className="text-3xl font-black text-[#C82128] leading-none">৳{cartTotal}</span>
                      <span className="text-[11px] text-gray-500 mt-1">VAT included, where applicable</span>
                    </div>
                  </div>
                </div>

                <Link href="/checkout">
                  <Button className="w-full h-14 bg-[#C82128] hover:bg-[#A81A20] text-white font-black text-base shadow-xl shadow-red-500/20 active:scale-[0.98] transition-all rounded-lg flex items-center justify-center gap-2">
                    Proceed to Checkout
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                
                <div className="mt-4 flex flex-col gap-3">
                  <div className="bg-green-50 rounded-lg p-3 border border-green-100 flex items-start gap-2">
                    <ShieldCheck className="w-5 h-5 text-green-600 shrink-0" />
                    <p className="text-[11px] text-gray-600 leading-tight">
                      <strong className="text-gray-900 block mb-0.5">Secure Checkout</strong>
                      Your payment information is handled safely & securely.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
