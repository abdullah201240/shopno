"use client";

import React from "react";
import { ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Daily Needs", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop" },
  { name: "Fresh Fruits", image: "https://images.unsplash.com/photo-1619566639371-5909d5977334?w=400&h=300&fit=crop" },
  { name: "Vegetables", image: "https://images.unsplash.com/photo-1597362868423-3b14d858c63f?w=400&h=300&fit=crop" },
  { name: "Meat & Fish", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=300&fit=crop" },
  { name: "Dairy & Eggs", image: "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?w=400&h=300&fit=crop" },
  { name: "Frozen Food", image: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=400&h=300&fit=crop" },
  { name: "Beverages", image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?w=400&h=300&fit=crop" },
  { name: "Personal Care", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop" },
  { name: "Snacks", image: "https://images.unsplash.com/photo-15994906592ddc-774026640620?w=400&h=300&fit=crop" },
  { name: "Baby Care", image: "https://images.unsplash.com/photo-1555252333-97863447f321?w=400&h=300&fit=crop" },
];

const CategoryGrid = () => {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-black uppercase tracking-tight text-[#C82128]">Shop by Category</h2>
        </div>
        <Link href="/categories" className="text-sm font-bold text-gray-500 hover:text-[#C82128] transition-colors">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
        {categories.map((cat, index) => (
          <Link 
            href={`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`} 
            key={cat.name} 
            className="group flex flex-col items-center gap-0 overflow-hidden"
          >
            <div className="relative w-full aspect-[4/3] rounded-t-xl overflow-hidden bg-white border border-border/50 shadow-sm">
               <Image
                 src={cat.image}
                 alt={cat.name}
                 fill
                 className="object-cover group-hover:scale-110 transition-transform duration-500"
                 sizes="(max-width: 640px) 50vw, 20vw"
               />
            </div>
            <div className="w-full bg-[#FFD35E] py-2 text-center rounded-b-xl shadow-md z-10">
               <span className="text-[10px] font-black uppercase tracking-widest text-black block">{cat.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
