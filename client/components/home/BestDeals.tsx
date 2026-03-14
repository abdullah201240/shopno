"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Plus, Minus, Tag } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  image: string;
}

const bestDealsProducts: Product[] = [
  { 
    id: "d1", 
    name: "Surf Excel Detergent 1kg", 
    price: 320, 
    originalPrice: 400, 
    badge: "৳80 OFF",
    image: "/product/68b575087d266676045747a7_Surf-Excel-1kg_1_220.webp"
  },
  { 
    id: "d2", 
    name: "Vim Dishwash Liquid 950ml", 
    price: 180, 
    originalPrice: 220, 
    badge: "৳40 OFF",
    image: "/product/689dd7ab532fe2c42ca82761_Vim-Dishwash-Liquid-95050ml_1_220.webp"
  },
  { 
    id: "d3", 
    name: "Kellogg's Chocos 385gm", 
    price: 450, 
    originalPrice: 520, 
    badge: "৳70 OFF",
    image: "/product/68931d03253062493943793c_Kelloggs-Chocos-385gm-Poly_1_220.webp"
  },
  { 
    id: "d4", 
    name: "Quaker Oats 500gm", 
    price: 280, 
    originalPrice: 350, 
    badge: "৳70 OFF",
    image: "/product/69529da2c276531e009435f8_Quaker-Oats-50050gm-Poly-Pack_1_220.webp"
  },
  { 
    id: "d5", 
    name: "Starship Full Cream Milk Powder 1kg", 
    price: 650, 
    originalPrice: 750, 
    badge: "৳100 OFF",
    image: "/product/68f6095d974218ccf6c62f0a_Starship-Full-Cream-Milk-Power-1kg-Poly_1_220.webp"
  },
  { 
    id: "d6", 
    name: "Fresh Milk Powder 1kg", 
    price: 580, 
    originalPrice: 680, 
    badge: "৳100 OFF",
    image: "/product/67dfa6abec6779a891ed4b50_Fresh-Instant-Full-Cream-Milk-Powder-1000gm_1_220.webp"
  },
];

const BestDeals: React.FC = () => {
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
      {/* Banner Image */}
      <div className="relative w-full h-32 md:h-40 mb-4 rounded-xl overflow-hidden">
        <Image
          src="/catagory/69a001f5e42d6823d84676f0_uniliverbanner_D_1_1552.webp"
          alt="Best Deals Banner"
          fill
          className="object-cover"
        />
      </div>

      <h2 className="text-center text-lg font-bold uppercase tracking-widest text-gray-900 mb-4 flex items-center justify-center gap-2">
        <Tag className="h-5 w-5 text-green-600" />
        Best Deals
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
          {bestDealsProducts.map((product) => {
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

export default BestDeals;