"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCart = () => {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[100] hidden md:flex flex-col items-center">
      <button className="bg-[#C82128] text-white flex flex-col items-center py-2 px-3 rounded-l-md shadow-2xl border-y border-l border-white/20 hover:pr-4 transition-all group">
         <div className="flex flex-col items-center gap-1">
            <ShoppingBag className="h-5 w-5 mb-1" />
            <span className="text-[10px] font-black uppercase leading-tight text-center">
              0 <br /> items
            </span>
         </div>
         <div className="mt-2 bg-white/20 w-full h-[1px]" />
         <span className="mt-1 text-[11px] font-black tracking-tighter">৳0</span>
      </button>
    </div>
  );
};

export default FloatingCart;
