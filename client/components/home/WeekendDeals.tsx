"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChevronRight, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

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

// ─── CountdownBlock ────────────────────────────────────────────────────────────

function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center bg-red-600 text-white rounded px-1.5 py-0.5 min-w-7">
      <span className="text-xs font-bold leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[6px] uppercase tracking-wide leading-none mt-0.5">
        {label}
      </span>
    </div>
  );
}

// ─── ProductCard ───────────────────────────────────────────────────────────────

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="relative flex flex-col items-center bg-white rounded-none shadow-none min-w-43.75 max-w-43.75 p-3 gap-1 shrink-0">
      {/* OFF Badge */}
      <div className="absolute top-2 left-2 bg-red-600 text-white text-[10px] font-bold rounded px-1.5 py-0.5 leading-tight text-center">
        ৳{product.discount}
        <br />
        <span className="font-normal text-[9px]">OFF</span>
      </div>

      {/* Product Image */}
      <div className="w-27.5 h-27.5 relative mt-1">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
          // Fallback placeholder style if image missing
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Fallback colored placeholder */}
        <div className="absolute inset-0 flex items-center justify-center bg-blue-100 rounded-md text-blue-400 text-xs font-semibold text-center p-2 -z-10">
          <ShoppingBag className="w-10 h-10 opacity-30" />
        </div>
      </div>

      {/* Delivery */}
      <p className="text-[11px] text-gray-400 italic mt-1">Delivery 1-2 hours</p>

      {/* Product Name */}
      <p className="text-[12.5px] font-bold text-gray-900 text-center leading-tight min-h-9">
        {product.name}
      </p>

      {/* Price */}
      <div className="flex items-center gap-1.5 mt-1">
        <span className="text-[12px] text-gray-400 line-through">৳{product.oldPrice.toLocaleString()}</span>
        <span className="text-[15px] font-extrabold text-red-600">৳{product.newPrice.toLocaleString()}</span>
        <span className="text-[11px] text-gray-500">{product.unit}</span>
      </div>

      {/* Add to Bag Button */}
      <Button
        className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white font-bold text-[13px] rounded-md h-9 gap-1"
        size="sm"
      >
        <Plus className="w-4 h-4 font-black" strokeWidth={3} />
        Add to Bag
      </Button>
    </Card>
  );
}

// ─── SpecialSavingsBanner ──────────────────────────────────────────────────────

function SpecialSavingsBanner() {
  return (
    <div className="w-64 shrink-0 relative overflow-hidden">
      <Image
        src="/6746bb7e042626c43a0ab923_SPECIAL SAVINGS-01 (1).webp"
        alt="Special Savings"
        fill
        className="object-cover"
        sizes="256px"
        unoptimized
      />
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export default function WeekendDeals() {
  const { hours, minutes, seconds } = useCountdown(1, 35, 1);
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <div className="grid grid-cols-[1fr_16rem] rounded-none overflow-hidden shadow-none max-w-315 w-full gap-2">

      {/* ── LEFT: Main Deals Section ── */}
      <div className="flex-1 bg-[#C1C9D5] p-2">

        {/* Header Row */}
        <div className="flex items-center gap-2 mb-3 flex-nowrap">
          <h2 className="text-[18px] font-black text-gray-900 tracking-tight whitespace-nowrap">
            WEEKEND DEALS!!!
          </h2>

          {/* Countdown */}
          <div className="flex items-center gap-0.5">
            <CountdownBlock value={hours} label="HOURS" />
            <span className="text-red-600 font-black text-sm">:</span>
            <CountdownBlock value={minutes} label="MIN" />
            <span className="text-red-600 font-black text-sm">:</span>
            <CountdownBlock value={seconds} label="SEC" />
          </div>

          <Badge className="bg-red-600 hover:bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shrink-0">
            Left
          </Badge>
        </div>

        {/* Category Tabs */}
        <ScrollArea className="w-full whitespace-nowrap mb-4">
          <div className="flex items-center gap-2 pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-4 py-1.5 rounded-full border text-[12.5px] font-medium whitespace-nowrap transition-all",
                  activeCategory === cat.id
                    ? "bg-yellow-400 border-yellow-400 text-gray-900 font-bold"
                    : "bg-white border-gray-300 text-gray-600 hover:border-gray-400"
                )}
              >
                {cat.label}
              </button>
            ))}
            <button title="Next" className="w-7 h-7 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-500 hover:border-gray-400 shrink-0">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>

        {/* Product Cards */}
        <ScrollArea className="w-full">
          <div className="flex gap-2.5 pb-2 relative">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {/* Next arrow */}
            <button title="Next" className="absolute -right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-red-600 z-10">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
      </div>

      {/* ── RIGHT: Special Savings Banner ── */}
      <SpecialSavingsBanner />
    </div>
  );
}