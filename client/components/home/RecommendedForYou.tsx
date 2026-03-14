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
    image: "/product/65fa972c115075f231ecd19f_Mr-Noodles-Korean-Super-Spicy-496gm_1_220.webp",
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
    name: "Quaker Oats Jar 450gm",
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
    name: "Pureit Classic Germ Kill Kit",
    price: 800,
    unit: "Per Piece",
    image: "/product/689dd7ab532fe2c42ca82761_Vim-Dishwash-Liquid-95050ml_1_220.webp",
  },
  {
    id: "6",
    name: "Electric Kettle 1.8L",
    price: 625,
    originalPrice: 1380,
    unit: "Per Piece",
    badge: "৳755 OFF",
    image: "/product/6735d10b767644156106c057_Electric-Kettle-1-8L_1_220.webp",
  },
];

const RecommendedForYou = () => {
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
    const card = rowRef.current.querySelector(".product-card") as HTMLElement;
    if (!card) return;

    const gap = 12;
    const scrollAmount = card.offsetWidth + gap;

    rowRef.current.scrollBy({
      left: dir * scrollAmount * 2,
      behavior: "smooth",
    });
  };

  return (
    <section>
      <h2 className="text-center text-xl sm:text-2xl font-black tracking-widest uppercase text-gray-900 mb-5">
        Recommended For You
      </h2>

      <div className="relative">
        {/* LEFT */}
        <Button
          onClick={() => scroll(-1)}
          size="icon"
          className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-yellow-400 hover:bg-yellow-500 shadow"
        >
          ‹
        </Button>

        {/* ROW */}
        <div
          ref={rowRef}
          className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {recommendedProducts.map((product) => {
            const qty = quantities[product.id] || 0;

            return (
              <Card
                key={product.id}
                className="
                product-card
                group
                flex-shrink-0
                flex
                flex-col
                w-[48%]
                sm:w-[31%]
                md:w-[23%]
                lg:w-[18.8%]
                h-[380px]
                bg-white
                rounded-2xl
                border
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
              "
              >
                {/* Badge */}
                {product.badge && (
                  <Badge className="absolute top-2 left-2 bg-red-600 text-white text-xs">
                    {product.badge}
                  </Badge>
                )}

                {/* Image */}
                <div className="p-3">
                  <AspectRatio ratio={1}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-110 transition duration-500"
                    />
                  </AspectRatio>
                </div>

                {/* Delivery */}
                <p className="text-center text-xs text-gray-400 italic">
                  Delivery 1-2 hours
                </p>

                {/* Name */}
                <p className="text-center text-sm font-extrabold px-2 min-h-[44px] line-clamp-2 flex-1">
                  {product.name}
                </p>

                {/* Price */}
                <div className="flex justify-center items-center gap-1 pb-2">
                  {product.originalPrice && (
                    <span className="text-xs line-through text-gray-400">
                      ৳{product.originalPrice}
                    </span>
                  )}
                  <span className="text-lg lg:text-xl font-black text-red-600">
                    ৳{product.price}
                  </span>
                </div>

                {/* Rating */}
                <div className={product.rating ? "flex justify-center text-yellow-400 pb-2" : "flex justify-center pb-2 min-h-[24px]"}>
                  {product.rating ? "★★★★★" : <span className="text-xs text-transparent">★★★★★</span>}
                </div>

                {/* Cart */}
                <div className="p-2 pb-4 mt-auto">
                  {qty === 0 ? (
                    <Button
                      onClick={() => updateQuantity(product.id, 1)}
                      className="w-full rounded-full bg-red-600 hover:bg-red-700"
                    >
                      Add
                    </Button>
                  ) : (
                    <div className="flex justify-between items-center bg-red-600 text-white rounded-full px-2 h-9">
                      <Minus
                        className="cursor-pointer"
                        onClick={() => updateQuantity(product.id, -1)}
                      />
                      <span className="font-bold">{qty}</span>
                      <Plus
                        className="cursor-pointer"
                        onClick={() => updateQuantity(product.id, 1)}
                      />
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* RIGHT */}
        <Button
          onClick={() => scroll(1)}
          size="icon"
          className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-yellow-400 hover:bg-yellow-500 shadow"
        >
          ›
        </Button>
      </div>
    </section>
  );
};

export default RecommendedForYou;