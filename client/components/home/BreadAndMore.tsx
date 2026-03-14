"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Plus, Minus, Croissant } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  image: string;
}

const breadProducts: Product[] = [
  { 
    id: "b1", 
    name: "Pit White Sandwich Bread 500gm", 
    price: 95, 
    originalPrice: 120, 
    badge: "৳25 OFF",
    image: "/product/6971ace0102bfed46d50cbbd_Bread-Pit-White-Sandwich-Bread-500gm_1_220.webp"
  },
  { 
    id: "b2", 
    name: "Pit Soft White Milk Bread 300gm", 
    price: 75, 
    image: "/product/6971ace5102bfed46d50cdca_Bread-Pit-Soft-White-Milk-Bread-300gm_1_220.webp"
  },
  { 
    id: "b3", 
    name: "Pit Super S Multigrain Bread 300gm", 
    price: 85, 
    originalPrice: 100, 
    badge: "৳15 OFF",
    image: "/product/6971acea102bfed46d50ce2f_Bread-Pit-Super-S-Multigrain-Bread-300gm_1_220.webp"
  },
  { 
    id: "b4", 
    name: "Pit Soft Brown W Meal Bread 300gm", 
    price: 70, 
    image: "/product/6971ace8102bfed46d50cdfd_Bread-Pit-Soft-Brown-W-Meal-Bread-300gm_1_220.webp"
  },
  { 
    id: "b5", 
    name: "Pit White Sandwich Bread 300gm", 
    price: 65, 
    originalPrice: 80, 
    badge: "৳15 OFF",
    image: "/product/6971ace3102bfed46d50cdb1_Bread-Pit-White-Sandwich-Bread-300gm_1_220.webp"
  },
  { 
    id: "b6", 
    name: "Pit Dinner Roll 4Pcs 180gm", 
    price: 60, 
    image: "/product/6971acf2102bfed46d50cf15_Bread-Pit-Dinner-Roll-4Pcs-180gm_1_220.webp"
  },
];

const BreadAndMore: React.FC = () => {
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
        <Croissant className="h-5 w-5 text-amber-600" />
        Bread & More
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
          className="flex items-stretch gap-3 overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {breadProducts.map((product) => {
            const qty = quantities[product.id] || 0;

            return (
              <div
                key={product.id}
                className="flex-shrink-0 flex flex-col w-[47%] sm:w-[30%] md:w-[22%] lg:w-[18%] bg-white self-stretch"
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
                <p className="text-center text-xs font-semibold px-1 mt-1 line-clamp-2 min-h-[32px]">
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

export default BreadAndMore;