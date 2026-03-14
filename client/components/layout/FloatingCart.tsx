"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCart = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col items-center">
      <button className="bg-[#C82128] text-white flex flex-col items-center py-3 px-2 rounded-l-md shadow-2xl border-t-[3px] border-t-[#FFD35E] hover:pr-4 transition-all w-16">
         <div className="flex flex-col items-center gap-1">
            <ShoppingBag className="h-6 w-6 mb-1" />
            <span className="text-[11px] font-black uppercase leading-[1.1] text-center">
              0 <span className="block text-[9px] opacity-90 lowercase font-bold">items</span>
            </span>
         </div>
         <div className="mt-2 bg-[#FFD35E] w-full h-[3px] rounded-full opacity-30" />
         <span className="mt-2 text-[12px] font-black tracking-tight">৳0</span>
      </button>
    </div>
  );
};

export default FloatingCart;
