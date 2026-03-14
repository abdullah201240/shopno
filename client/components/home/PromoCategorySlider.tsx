"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

interface PromoCategory {
  name: string;
  image: string;
}

interface PromoCategorySliderProps {
  categories: PromoCategory[];
}

const PromoCategorySlider: React.FC<PromoCategorySliderProps> = ({ categories }) => {
  const [promoIndex, setPromoIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(2);
      else if (window.innerWidth < 1024) setItemsPerPage(3);
      else setItemsPerPage(5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(categories.length / itemsPerPage);

  return (
    <div className="relative w-full group">
      {/* Left Arrow — Hidden on mobile, visible on hover desktop */}
      <button
        onClick={() => {
          const container = document.getElementById('promo-slider-container');
          if (container) container.scrollBy({ left: -300, behavior: 'smooth' });
        }}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 h-9 w-9 hidden lg:flex items-center justify-center rounded-full bg-[#FAD816] shadow-md hover:bg-[#FAD816] transition-opacity opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft className="h-5 w-5 text-black" />
      </button>

      {/* Cards container with native scrolling */}
      <div 
        id="promo-slider-container"
        className="flex gap-2 lg:gap-3 overflow-x-auto no-scrollbar w-full px-2 lg:px-0 scroll-smooth"
      >
        {categories.map((cat, i) => (
          <Link
            key={i}
            href="#"
            className="flex-shrink-0 w-[30%] sm:w-[22%] lg:flex-1 group flex flex-col rounded-xs overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
          >
            {/* Image area */}
            <div className="relative h-[100px] sm:h-[180px] overflow-hidden bg-transparent">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Yellow pill label */}
            <div className="bg-[#FFD631] mx-1 mb-1.5 -mt-3 relative z-10 rounded-full py-1.5 px-2 flex items-center justify-center shadow-sm">
              <span className="text-[9px] sm:text-[11px] font-bold text-gray-900 uppercase tracking-wide text-center leading-tight truncate">
                {cat.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Right Arrow — Hidden on mobile, visible on hover desktop */}
      <button
        onClick={() => {
          const container = document.getElementById('promo-slider-container');
          if (container) container.scrollBy({ left: 300, behavior: 'smooth' });
        }}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 h-9 w-9 hidden lg:flex items-center justify-center rounded-full bg-[#FAD816] shadow-md hover:bg-[#FAD816] transition-opacity opacity-0 group-hover:opacity-100"
      >
        <ChevronRight className="h-5 w-5 text-black" />
      </button>
    </div>
  );
};

export default PromoCategorySlider;