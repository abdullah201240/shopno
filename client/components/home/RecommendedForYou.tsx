"use client";

import { useRef } from "react";
import { useCart } from "@/context/CartContext";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import { Plus, Minus } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  image: string;
  unit?: string;
}

const recommendedProducts: Product[] = [
  {
    id: "1",
    name: "Chopstick Ramen Hot Chicken Noodles 160gm",
    price: 170,
    unit: "160gm",
    image: "/product/65fa972c115075f231ecd19f_Mr-Noodles-Korean-Super-Spicy-496gm_1_220.webp",
  },
  {
    id: "2",
    name: "Pusti Soyabean Oil 5Ltr.",
    price: 955,
    unit: "5Ltr",
    image: "/product/686cf6633d66137b62495be2_Aura-Milk-Pusti-1kg_1_220.webp",
  },
  {
    id: "3",
    name: "Quaker Oats Jar 450gm",
    price: 360,
    originalPrice: 380,
    badge: "৳20 OFF",
    unit: "450gm",
    image: "/product/65fa9663d61902ef2307a5f8_Quaker-Oats-1000100gm-Jar_1_220.webp",
  },
  {
    id: "4",
    name: "Noah Blender 888",
    price: 1299,
    originalPrice: 1899,
    badge: "৳600 OFF",
    unit: "1pc",
    image: "/product/6735d10b767644156106c057_Electric-Kettle-1-8L_1_220.webp",
  },
  {
    id: "5",
    name: "Pureit Classic Germ Kill Kit",
    price: 800,
    unit: "1kit",
    image: "/product/689dd7ab532fe2c42ca82761_Vim-Dishwash-Liquid-95050ml_1_220.webp",
  },
  {
    id: "6",
    name: "Electric Kettle 1.8L",
    price: 625,
    originalPrice: 1380,
    badge: "৳755 OFF",
    unit: "1.8L",
    image: "/product/6735d10b767644156106c057_Electric-Kettle-1-8L_1_220.webp",
  },
];

const RecommendedForYou = () => {
  const { addToCart, removeFromCart, cartItems } = useCart();
  const rowRef = useRef<HTMLDivElement>(null);

  const getQuantity = (id: string) => {
    const item = cartItems.find((i) => i.id === id);
    return item?.quantity || 0;
  };

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
      unit: product.unit || "1pc",
      quantity: 1,
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    removeFromCart(productId);
  };

  const scroll = (dir: number) => {
    if (!rowRef.current) return;
    rowRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section >
      <h2 className="text-center text-lg font-bold uppercase tracking-widest text-gray-900 mb-4">
        Recommended For You
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
        >
          {recommendedProducts.map((product) => {
            const qty = getQuantity(product.id);

            return (
              <div
                key={product.id}
                className="shrink-0 flex flex-col w-[47%] sm:w-[30%] md:w-[22%] lg:w-[20%] bg-white self-stretch"
              >
                {/* Badge */}
                {product.badge && (
                  <span className="self-start text-[10px] font-semibold bg-red-600 text-white px-1.5 py-0.5 mb-1">
                    {product.badge}
                  </span>
                )}

                {/* Image */}
                <div className="px-2 pt-2">
                  <Link href={`/product/${product.id}`}>
                    <AspectRatio ratio={1}>
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    </AspectRatio>
                  </Link>
                </div>

                {/* Delivery */}
                <p className="text-center text-[10px] text-gray-400 mt-1">
                  Delivery 1-2 hours
                </p>

                {/* Name */}
                <Link href={`/product/${product.id}`}>
                  <p className="text-center text-xs font-semibold px-1 mt-1 line-clamp-2 min-h-8 hover:text-[#C82128] cursor-pointer transition-colors">
                    {product.name}
                  </p>
                </Link>

                {/* Price */}
                <div className="flex justify-center items-center gap-1 mt-1">
                  {product.originalPrice && (
                    <span className="text-[10px] line-through text-gray-400">
                      ৳{product.originalPrice}
                    </span>
                  )}
                  <span className="text-sm font-bold text-red-600">
                    ৳{product.price}
                  </span>
                </div>

                {/* Add to Cart */}
                <div className="p-2 mt-auto">
                  {qty === 0 ? (
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full rounded-full bg-red-600 text-white text-xs font-semibold py-1.5"
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <div className="flex justify-between items-center bg-[#FAD816] text-black rounded-full px-3 py-1.5">
                      <Minus
                        size={14}
                        className="cursor-pointer"
                        onClick={() => handleRemoveFromCart(product.id)}
                      />
                      <span className="text-xs font-bold">{qty}</span>
                      <Plus
                        size={14}
                        className="cursor-pointer"
                        onClick={() => handleAddToCart(product)}
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

export default RecommendedForYou;