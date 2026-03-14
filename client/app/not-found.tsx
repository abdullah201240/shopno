"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Home, Search, ShoppingBag, ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 relative overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div 
        className="absolute w-[500px] h-[500px] bg-red-50 rounded-full blur-3xl opacity-50 -top-20 -left-20 pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)` }}
      />
      <div 
        className="absolute w-[400px] h-[400px] bg-yellow-50 rounded-full blur-3xl opacity-50 bottom-0 right-0 pointer-events-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` }}
      />

      <div className="max-w-2xl w-full flex flex-col items-center text-center relative z-10 animate-fade-in">
        
        {/* Animated 404 Graphic */}
        <div className="relative mb-8 group cursor-default">
          <h1 
            className="text-[150px] md:text-[200px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#C82128] via-[#e63946] to-[#C82128] drop-shadow-sm transition-transform duration-500 ease-out group-hover:scale-105"
            style={{ 
              textShadow: "0 20px 40px rgba(200, 33, 40, 0.15)",
              transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`
            }}
          >
            404
          </h1>
          
          {/* Floating Elements around 404 */}
          <div className="absolute top-1/4 -left-8 animate-float stagger-1 bg-white p-3 rounded-full shadow-lg border border-gray-100 hidden md:flex">
            <AlertCircle className="w-8 h-8 text-yellow-400" />
          </div>
          <div className="absolute bottom-1/4 -right-12 animate-float stagger-2 bg-white p-3 rounded-full shadow-lg border border-gray-100 hidden md:flex">
            <ShoppingBag className="w-8 h-8 text-[#C82128]" />
          </div>
        </div>

        {/* Text Content */}
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight animate-slide-up stagger-1">
          Aisle Not Found!
        </h2>
        
        <p className="text-gray-500 text-lg md:text-xl mb-10 max-w-lg font-medium animate-slide-up stagger-2">
          Oops! Looks like this grocery aisle is empty. The product or page you are looking for has been moved or doesn't exist.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-slide-up stagger-3 mb-10">
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
            className="w-full sm:w-auto h-14 px-8 border-2 border-gray-200 text-gray-700 font-bold hover:bg-gray-50 flex items-center gap-2 rounded-xl transition-all hover:pr-10 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
          
          <Link href="/" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto h-14 px-10 bg-[#C82128] hover:bg-[#A81A20] text-white font-black shadow-xl shadow-red-500/20 rounded-xl flex items-center gap-2 transition-all hover:-translate-y-0.5">
              <Home className="w-5 h-5" />
              Return Home
            </Button>
          </Link>
        </div>

        {/* Search Bar - Help them find what they need */}
        <div className="w-full max-w-md animate-slide-up stagger-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
          <p className="text-sm font-bold text-gray-600 mb-3 text-left">Let's find what you need:</p>
          <div className="relative flex items-center">
            <Input 
              type="text" 
              placeholder="Search for groceries, vegetables, meat..." 
              className="h-12 pl-4 pr-12 bg-white border-2 border-gray-200 focus-visible:ring-0 focus-visible:border-[#C82128] rounded-xl text-base shadow-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-[#C82128] text-white rounded-lg hover:bg-[#A81A20] transition-colors">
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
