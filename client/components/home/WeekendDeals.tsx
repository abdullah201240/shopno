"use client";

import { useEffect, useState, useRef } from "react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import CustomProductCard from "@/components/ui/custom/ProductCard";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Product {
  id: number;
  name: string;
  image: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
  unit: string;
}

interface Category {
  id: number;
  label: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const categories: Category[] = [
  { id: 1, label: "Full Cream Milk" },
  { id: 2, label: "Biscuits Others" },
  { id: 3, label: "Noodles" },
  { id: 4, label: "Frozen Snacks Others" },
  { id: 5, label: "Paratha & Roti" },
  { id: 6, label: "Tea Others" },
];

const products: Product[] = [
  {
    id: 1,
    name: "Fresh Instant Full Cream Milk Powder 500gm",
    image: "/product/65fa9509115075f231ec6e53_Fresh-Instant-Full-Cream-Milk-Powder-500gm_1_220.webp",
    oldPrice: 480,
    newPrice: 435,
    discount: 45,
    unit: "Per Piece",
  },
  {
    id: 2,
    name: "Diploma Instant Full Cream Milk Powder 500gm",
    image: "/product/65fa9503115075f231ec697e_Diploma-Instant-Full-Cream-Milk-Powder-500gm-Foil-Pack_1_220.webp",
    oldPrice: 460,
    newPrice: 410,
    discount: 50,
    unit: "Per Piece",
  },
  {
    id: 3,
    name: "Danish Full Cream Milk Powder 1kg",
    image: "/product/65fa9520115075f231ec83c2_Danish-Full-Cream-Milk-Powder-1kg_1_220.webp",
    oldPrice: 1300,
    newPrice: 1200,
    discount: 100,
    unit: "Per Piece",
  },
  {
    id: 4,
    name: "Fresh Instant Full Cream Milk Powder 1kg",
    image: "/product/67dfa6abec6779a891ed4b50_Fresh-Instant-Full-Cream-Milk-Powder-1000gm_1_220.webp",
    oldPrice: 950,
    newPrice: 870,
    discount: 80,
    unit: "Per Piece",
  },
  {
    id: 5,
    name: "Pusti Plus Instant Full Cream Milk Powder 1kg",
    image: "/product/686f9415c45a839ba05bf3d1_Pusti-Plus-Instant-Full-Cream-Milk-Powder-1kg_1_220.webp",
    oldPrice: 750,
    newPrice: 680,
    discount: 70,
    unit: "Per Piece",
  },
];

// ─── Countdown Hook ────────────────────────────────────────────────────────────

function useCountdown(initialHours = 1, initialMinutes = 35, initialSeconds = 1) {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { return { hours: 0, minutes: 0, seconds: 0 }; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return time;
}





// ─── SpecialSavingsBanner ──────────────────────────────────────────────────────

function SpecialSavingsBanner() {
  return (
    <div className="w-full relative overflow-hidden rounded-r-lg">
      <Image
        src="/6746bb7e042626c43a0ab923_SPECIAL SAVINGS-01 (1).webp"
        alt="Special Savings"
        fill
        className="object-cover"
        sizes="(max-width: 1280px) 30vw, 400px"
        unoptimized
      />
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function WeekendDeals() {
  const { hours, minutes, seconds } = useCountdown(1, 35, 1);
  const [activeCategory, setActiveCategory] = useState(1);
  const categoryScrollRef = useRef<HTMLDivElement>(null);

  const scrollCategoryLeft = () => {
    if (categoryScrollRef.current) {
      categoryScrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    }
  };
  return (
    <div className="grid grid-cols-[1.5fr_18rem] rounded-lg overflow-hidden shadow-sm max-w-315 w-full gap-6 border border-gray-200">

      {/* ── LEFT: Main Deals Section ── */}
      <div className="flex-1 bg-[#C1C9D5] p-2">

        {/* Compact Header Row: Title, Countdown, and Categories in one row */}
        <div className="flex items-center gap-4 mb-4 flex-nowrap">
          <div className="flex items-center gap-3 shrink-0">
            <h2 className="text-[17px] font-black text-gray-900 tracking-tight whitespace-nowrap">
              WEEKEND DEALS!!!
            </h2>

            {/* Compact Countdown */}
            <div className="flex items-center gap-1.5 bg-red-600 text-white px-2 py-1 rounded text-[13px] font-black shadow-sm">
              <span className="tabular-nums">{String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}</span>
              <span className="text-[9px] font-bold opacity-90 uppercase tracking-tighter">Left</span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="w-px h-6 bg-gray-300 shrink-0" />

          {/* Category Tabs - Compact & Scrollable */}
          <div className="flex items-center gap-2 flex-1 min-w-0 max-w-[320px]">
            <button 
              title="Scroll left"
              className="w-6 h-6 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:border-gray-400 hover:bg-gray-50 transition-colors shrink-0"
              onClick={scrollCategoryLeft}
            >
              <ChevronRight className="w-3 h-3 rotate-180" />
            </button>
            
            <div ref={categoryScrollRef} className="flex-1 overflow-x-auto scrollbar-hide">
              <div className="flex items-center gap-1.5 py-0.5">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "px-3 py-1 rounded-full border text-[11px] font-bold whitespace-nowrap transition-all",
                      activeCategory === cat.id
                        ? "bg-yellow-400 border-yellow-400 text-gray-900 shadow-sm"
                        : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button title="Next" className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:border-gray-400 hover:bg-gray-50 transition-colors shadow-sm shrink-0">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Product Cards - Grid with 4 columns to fill full width */}
        <div className="grid grid-cols-4 gap-2.5 pb-2">
          {products.slice(0, 4).map((product) => (
            <CustomProductCard 
              key={product.id} 
              id={String(product.id)}
              name={product.name}
              image={product.image}
              price={product.newPrice}
              originalPrice={product.oldPrice}
              unit={product.unit}
              discount={`৳${product.discount} OFF`}
            />
          ))}
        </div>
      </div>

      {/* ── RIGHT: Special Savings Banner ── */}
      <SpecialSavingsBanner />
    </div>
  );
}