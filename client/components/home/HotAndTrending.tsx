"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Plus, Minus, Flame } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  image: string;
}

const trendingProducts: Product[] = [
  { 
    id: "t1", 
    name: "Nescafe Classic Coffee 200gm", 
    price: 280, 
    originalPrice: 350, 
    badge: "৳70 OFF",
    image: "/product/65fa93b5115075f231ec4d26_Nescafe-Classic-Coffee-200gm-Pouch_1_220.webp"
  },
  { 
    id: "t2", 
    name: "Diploma Milk Powder 1kg", 
    price: 650, 
    image: "/product/65fa9503115075f231ec6941_Diploma-Instant-Full-Cream-Milk-Powder-1kg-Foil-Pack_1_220.webp"
  },
  { 
    id: "t3", 
    name: "Cadbury Dairy Milk Silk", 
    price: 120, 
    originalPrice: 150, 
    badge: "৳30 OFF",
    image: "/product/65fa9656d61902ef23079b4a_Cadbury-Dairy-Milk-Silk-Chocolate-16010gm_1_220.webp"
  },
  { 
    id: "t4", 
    name: "Freedom Wings 16 Pads", 
    price: 480, 
    originalPrice: 600, 
    badge: "৳120 OFF",
    image: "/product/65fa97abd61902ef23080a67_Freedom-Super-Dry-Heavy-Flow-Wings-16-Pads_1_220.webp"
  },
  { 
    id: "t5", 
    name: "Nucella Chocolate Spread 400gm", 
    price: 450, 
    originalPrice: 550, 
    badge: "৳100 OFF",
    image: "/product/65fa9751d61902ef2307b963_Nucella-Chocolate-Spread-400gm_1_220.webp"
  },
  { 
    id: "t6", 
    name: "Radhuni Haleem Mix 200gm", 
    price: 720, 
    originalPrice: 900, 
    badge: "৳180 OFF",
    image: "/product/65fa95b2115075f231ecc8f6_Radhuni-Haleem-Mix-200gm_1_220.webp"
  },
];

const HotAndTrending: React.FC = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const rowRef = useRef<HTMLDivElement>(null);

  const updateQuantity = (id: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta),
    }));
  };

  const scroll = (dir: number) => {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="px-2 py-4">
      <h2 className="text-center text-lg font-bold uppercase tracking-widest text-gray-900 mb-4 flex items-center justify-center gap-2">
        <Flame className="h-5 w-5 text-red-600" />
        Hot & Trending
      </h2>

      <div className="relative">
        {/* LEFT */}
        <button
          onClick={() => scroll(-1)}
          className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-yellow-400 text-black text-lg flex items-center justify-center"
        >
          ‹
        </button>

        {/* ROW */}
        <div
          ref={rowRef}
          className="flex items-stretch gap-3 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {trendingProducts.map((product) => {
            const qty = quantities[product.id] || 0;

            return (
              <div
                key={product.id}
                className="shrink-0 flex flex-col w-[47%] sm:w-[30%] md:w-[22%] lg:w-[18%] bg-white self-stretch"
              >
                {/* Badge */}
                {product.badge && (
                  <span className="self-start text-[10px] font-semibold bg-[#C82128] text-white px-1.5 py-0.5 mb-1">
                    {product.badge}
                  </span>
                )}

                {/* Image */}
                <div className="px-2 pt-2">
                  <AspectRatio ratio={1}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </AspectRatio>
                </div>

                {/* Delivery */}
                <p className="text-center text-[10px] text-gray-400 mt-1">
                  Delivery 1-2 hours
                </p>

                {/* Name */}
                <p className="text-center text-xs font-semibold px-1 mt-1 line-clamp-2 min-h-8">
                  {product.name}
                </p>

                {/* Price */}
                <div className="flex justify-center items-center gap-1 mt-1">
                  {product.originalPrice && (
                    <span className="text-[10px] line-through text-gray-400">
                      ৳{product.originalPrice}
                    </span>
                  )}
                  <span className="text-sm font-bold text-[#C82128]">
                    ৳{product.price}
                  </span>
                </div>

                {/* Add to Cart */}
                <div className="p-2 mt-auto">
                  {qty === 0 ? (
                    <button
                      onClick={() => updateQuantity(product.id, 1)}
                      className="w-full rounded-full bg-[#C82128] text-white text-xs font-semibold py-1.5"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex justify-between items-center bg-[#C82128] text-white rounded-full px-3 py-1.5">
                      <Minus
                        size={14}
                        className="cursor-pointer"
                        onClick={() => updateQuantity(product.id, -1)}
                      />
                      <span className="text-xs font-bold">{qty}</span>
                      <Plus
                        size={14}
                        className="cursor-pointer"
                        onClick={() => updateQuantity(product.id, 1)}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT */}
        <button
          onClick={() => scroll(1)}
          className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-yellow-400 text-black text-lg flex items-center justify-center"
        >
          ›
        </button>
      </div>
    </section>
  );
};

export default HotAndTrending;
