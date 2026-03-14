"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  unit?: string;
  badge?: string;
  image: string;
  rating?: number;
}

const recommendedProducts: Product[] = [
  {
    id: "1",
    name: "Chopstick Ramen Hot Chicken Noodles 160gm",
    price: 170,
    image: "/product/65fa972c115075f231ecd19b_Dekko-Egg-Noodles-15020gm-Buy3-Get1-Free_1_220.webp",
  },
  {
    id: "2",
    name: "Pusti Soyabean Oil 5Ltr.",
    price: 955,
    unit: "Per Piece",
    image: "/product/686cf6633d66137b62495be2_Aura-Milk-Pusti-1kg_1_220.webp",
  },
  {
    id: "3",
    name: "Quaker Oats 450(±)50gm (Jar)",
    price: 360,
    originalPrice: 380,
    unit: "Per Piece",
    badge: "৳20 OFF",
    image: "/product/65fa9663d61902ef2307a5f8_Quaker-Oats-1000100gm-Jar_1_220.webp",
  },
  {
    id: "4",
    name: "Noah Blender 888",
    price: 1299,
    originalPrice: 1899,
    unit: "Per Piece",
    badge: "৳600 OFF",
    rating: 5,
    image: "/product/6735d10b767644156106c057_Electric-Kettle-1-8L_1_220.webp",
  },
  {
    id: "5",
    name: "Pureit Classic Germ Kill Kit 1500Ltr.",
    price: 800,
    unit: "Per Piece",
    image: "/product/689dd7ab532fe2c42ca82761_Vim-Dishwash-Liquid-95050ml_1_220.webp",
  },
  {
    id: "6",
    name: "Electric Kettle 1.8Ltr.",
    price: 625,
    originalPrice: 1380,
    unit: "Per Piece",
    badge: "৳755 OFF",
    image: "/product/6735d10b767644156106c057_Electric-Kettle-1-8L_1_220.webp",
  },
];

const RecommendedForYou: React.FC = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const rowRef = useRef<HTMLDivElement>(null);

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const scroll = (dir: number) => {
    rowRef.current?.scrollBy({ left: dir * 240, behavior: "smooth" });
  };

  return (
    <section className="w-full">
      {/* Title */}
      <h2 className="text-center text-xl font-black tracking-widest uppercase text-gray-900 mb-5">
        Recommended For You
      </h2>

      {/* Slider wrapper */}
      <div className="relative">
        {/* Left arrow */}
        <Button
          onClick={() => scroll(-1)}
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-[#F5C800] hover:bg-[#F5C800]/90 text-gray-800 shadow-md -translate-x-1/2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Button>

        {/* Scrollable row */}
        <div
          ref={rowRef}
          className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide px-8"
        >
          {recommendedProducts.map((product) => {
            const qty = quantities[product.id] || 0;

            return (
              <Card 
                key={product.id} 
                className="min-w-[200px] max-w-[200px] flex-shrink-0 relative overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow bg-white rounded-lg"
              >
                {/* Red badge top-left */}
                {product.badge && (
                  <Badge className="absolute top-2 left-2 z-10 bg-[#E31837] text-white font-bold text-[10px] px-2 py-0.5 rounded">
                    {product.badge}
                  </Badge>
                )}

                {/* Image area */}
                <div className="relative p-3 bg-white">
                  <AspectRatio ratio={1 / 1} className="overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                      sizes="200px"
                    />
                  </AspectRatio>
                </div>

                {/* Delivery text */}
                <p className="text-center text-xs text-gray-400 italic px-2 pb-1">
                  Delivery 1-2 hours
                </p>

                {/* Product name */}
                <p className="text-center text-sm font-extrabold text-gray-900 px-3 pb-2 line-clamp-2 min-h-[42px]">
                  {product.name}
                </p>

                {/* Price row */}
                <div className="flex items-baseline justify-center gap-1.5 px-2 pb-2 flex-wrap">
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      ৳{product.originalPrice}
                    </span>
                  )}
                  <span className="text-xl font-black text-[#E31837]">
                    ৳{product.price}
                  </span>
                  {product.unit && (
                    <span className="text-xs text-gray-400">
                      {product.unit}
                    </span>
                  )}
                </div>

                {/* Stars (only if rating) */}
                {product.rating && (
                  <div className="flex justify-center gap-0.5 pb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span
                        key={i}
                        className={`text-base ${i <= product.rating! ? 'text-[#F5C800]' : 'text-gray-300'}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                )}

                {/* Add to Bag / qty control */}
                <div className="p-2 pb-4">
                  {qty === 0 ? (
                    <Button
                      onClick={() => updateQuantity(product.id, 1)}
                      className="w-full bg-[#E31837] hover:bg-[#E31837]/90 text-white border-none rounded-full font-bold text-sm h-10"
                    >
                      <Plus className="h-4 w-4 mr-1" />
                      Add to Bag
                    </Button>
                  ) : (
                    <div className="flex items-center justify-between bg-[#E31837] text-white rounded-full px-2 h-10">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 text-white hover:bg-white/20 rounded-full"
                        onClick={() => updateQuantity(product.id, -1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="font-extrabold text-sm">{qty}</span>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-7 w-7 text-white hover:bg-white/20 rounded-full"
                        onClick={() => updateQuantity(product.id, 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Right arrow */}
        <Button
          onClick={() => scroll(1)}
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-[#F5C800] hover:bg-[#F5C800]/90 text-gray-800 shadow-md translate-x-1/2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </Button>
      </div>
    </section>
  );
};

export default RecommendedForYou;
