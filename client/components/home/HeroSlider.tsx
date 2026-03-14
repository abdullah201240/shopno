"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Banner {
  image: string;
  alt: string;
}

interface HeroSliderProps {
  banners: Banner[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ banners }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="relative overflow-hidden flex-1 h-full">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          <div className="w-full h-full bg-gray-200 overflow-hidden">
            <img
              src={banner.image}
              alt={banner.alt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        className="absolute left-2 lg:left-3 top-1/2 -translate-y-1/2 h-7 w-7 lg:h-9 lg:w-9 bg-[#FAD816] hover:bg-[#FAD816] text-black rounded-full shadow-md transition-all hover:scale-105 active:scale-95 z-50 flex items-center justify-center sm:opacity-100 opacity-50"
        onClick={() => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)}
      >
        <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5 rotate-180" />
      </button>
      <button
        className="absolute right-2 lg:right-3 top-1/2 -translate-y-1/2 h-7 w-7 lg:h-9 lg:w-9 bg-[#FAD816] hover:bg-[#FAD816] text-black rounded-full shadow-md transition-all hover:scale-105 active:scale-95 z-50 flex items-center justify-center sm:opacity-100 opacity-50"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
      >
        <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 lg:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 lg:gap-1.5 z-50">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={cn(
              "h-1 rounded-full transition-all duration-300",
              i === currentSlide ? "bg-[#C82128] w-4 lg:w-6" : "bg-white/60 w-1.5 lg:w-2 hover:bg-white/80"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
