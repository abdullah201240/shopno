"use client";

import React, { useState } from "react";
import { ShoppingCart, Star, Flame } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  unit: string;
  discount?: string;
  image: string;
  rating: number;
}

const trendingProducts: Product[] = [
  { id: "t1", name: "Premium Spices Mix", price: 280, originalPrice: 350, unit: "500 g", discount: "20%", image: "/catagory/660112dd4744fb420cd5934b_spices_300.webp", rating: 4.8 },
  { id: "t2", name: "Fresh Fruits Basket", price: 650, unit: "1 set", image: "/catagory/6621025ad66f7762f1e65133_Fresh-Fruit_300.webp", rating: 4.5 },
  { id: "t3", name: "Salt & Sugar Pack", price: 120, originalPrice: 150, unit: "1 kg", discount: "20%", image: "/catagory/66011327d918e48902374088_Salt Sugar_300.webp", rating: 4.3 },
  { id: "t4", name: "Baby Care Essentials", price: 480, originalPrice: 600, unit: "1 pack", discount: "20%", image: "/catagory/65ffaf59d2372028beccb0a7_baby food & care_300.webp", rating: 4.6 },
  { id: "t5", name: "Organic Honey", price: 450, originalPrice: 550, unit: "500 g", discount: "18%", image: "/catagory/65f1547b733cb673c88fc6a3_Honey (1)_300.webp", rating: 4.9 },
  { id: "t6", name: "Hair Care Combo", price: 720, originalPrice: 900, unit: "2 items", discount: "20%", image: "/catagory/66b826195c414d20bf52e59b_Shampoo_300.png", rating: 4.4 },
  { id: "t7", name: "Fresh Milk Pack", price: 180, originalPrice: 220, unit: "2 Liter", discount: "18%", image: "/catagory/6682cb180a54717fc7e72781_Liquid & UHT Milk 2_300.png", rating: 4.7 },
  { id: "t8", name: "Cleaning Essentials", price: 350, unit: "3 items", image: "/catagory/661f4e01c15481a97eed7698_Home Cleaning_300.png", rating: 4.2 },
];

const HotAndTrending: React.FC = () => {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const updateQuantity = (id: string, delta: number) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const getQuantity = (id: string) => quantities[id] || 0;

  return (
    <section className="w-full py-6">
      {/* Section Title with Fire Icon */}
      <div className="mb-4 px-1 flex items-center gap-2">
        <Flame className="h-6 w-6 text-[#C82128]" />
        <h2 className="text-[22px] font-bold text-gray-800">Hot & Trending Right Now 🔥</h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {trendingProducts.map((product) => {
          const quantity = getQuantity(product.id);
          
          return (
            <div
              key={product.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col relative"
            >
              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-2 left-2 bg-[#C82128] text-white text-[11px] font-bold px-2 py-0.5 rounded-sm z-10">
                  {product.discount} OFF
                </div>
              )}

              {/* Trending Badge */}
              <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm z-10 flex items-center gap-1">
                <Flame className="h-3 w-3" />
                Hot
              </div>

              {/* Image Section - Centered */}
              <div className="relative h-[160px] bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Rating Stars */}
              <div className="flex items-center justify-center gap-0.5 py-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${
                      i < Math.floor(product.rating)
                        ? "fill-[#FAD816] text-[#FAD816]"
                        : i < product.rating
                        ? "fill-[#FAD816] text-[#FAD816] opacity-50"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
                <span className="text-[11px] text-gray-400 ml-1">({product.rating})</span>
              </div>

              {/* Product Name */}
              <div className="px-3 text-center">
                <h3 className="text-[13px] font-bold text-gray-800 leading-tight line-clamp-2 h-10">
                  {product.name}
                </h3>
              </div>

              {/* Unit */}
              <div className="text-center">
                <span className="text-[11px] text-gray-500 font-medium">{product.unit}</span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-center gap-2 py-2">
                <span className="text-[#C82128] font-black text-lg">৳{product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm">৳{product.originalPrice}</span>
                )}
              </div>

              {/* Add to Cart Button */}
              <div className="p-3 mt-auto">
                {quantity === 0 ? (
                  <button
                    onClick={() => updateQuantity(product.id, 1)}
                    className="w-full bg-[#FAD816] hover:bg-[#FAD816]/90 text-gray-900 font-bold text-[13px] py-2.5 rounded-md transition-all flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex items-center justify-between bg-[#FAD816] rounded-md px-2 py-1.5">
                    <button
                      onClick={() => updateQuantity(product.id, -1)}
                      className="h-7 w-7 flex items-center justify-center rounded bg-white text-gray-900 font-bold hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="font-bold text-gray-900">{quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, 1)}
                      className="h-7 w-7 flex items-center justify-center rounded bg-white text-gray-900 font-bold hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HotAndTrending;
