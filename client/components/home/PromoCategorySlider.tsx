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
  const itemsPerPage = 5;
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  return (
    <div className="relative w-full">
      {/* Left Arrow — absolutely positioned over the slider */}
      <button
        onClick={() => setPromoIndex(Math.max(0, promoIndex - 1))}
        disabled={promoIndex === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 h-9 w-9 flex items-center justify-center rounded-full bg-[#FAD816] shadow-md hover:bg-[#FAD816] transition-colors disabled:opacity-30"
      >
        <ChevronLeft className="h-5 w-5 text-black" />
      </button>

      {/* Cards */}
      <div className="flex gap-3 overflow-hidden w-full">
        {categories
          .slice(promoIndex * itemsPerPage, (promoIndex + 1) * itemsPerPage)
          .map((cat, i) => (
            <Link
              key={i}
              href="#"
              className="group flex-1 flex flex-col rounded-xs overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 min-w-0 border border-gray-100"
            >
              {/* Image area */}
              <div className="relative h-[180px] overflow-hidden bg-gray-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Yellow pill label */}
              <div className="bg-[#FFD631] mx-2 mb-2 -mt-4 relative z-10 rounded-full py-2 px-3 flex items-center justify-center shadow-sm">
                <span className="text-[11px] font-bold text-gray-900 uppercase tracking-wide text-center leading-tight truncate">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
      </div>

      {/* Right Arrow — absolutely positioned over the slider */}
      <button
        onClick={() => setPromoIndex(Math.min(totalPages - 1, promoIndex + 1))}
        disabled={promoIndex >= totalPages - 1}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 h-9 w-9 flex items-center justify-center rounded-full bg-[#FAD816] shadow-md hover:bg-[#FAD816] transition-colors disabled:opacity-30"
      >
        <ChevronRight className="h-5 w-5 text-black" />
      </button>
    </div>
  );
};

export default PromoCategorySlider;