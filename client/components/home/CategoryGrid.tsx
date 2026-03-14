"use client";

import React from "react";
import { ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const categories = [
  { name: "Daily Needs", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop", color: "#FEE2E2", gradient: "from-rose-500 to-red-500" },
  { name: "Fresh Fruits", image: "https://images.unsplash.com/photo-1619566639371-5909d5977334?w=200&h=200&fit=crop", color: "#FEF3C7", gradient: "from-amber-500 to-orange-500" },
  { name: "Vegetables", image: "https://images.unsplash.com/photo-1597362868423-3b14d858c63f?w=200&h=200&fit=crop", color: "#DCFCE7", gradient: "from-green-500 to-emerald-500" },
  { name: "Meat & Fish", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=200&h=200&fit=crop", color: "#FEE2E2", gradient: "from-red-500 to-rose-600" },
  { name: "Dairy & Eggs", image: "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?w=200&h=200&fit=crop", color: "#DBEAFE", gradient: "from-blue-500 to-indigo-500" },
  { name: "Frozen Food", image: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=200&h=200&fit=crop", color: "#F3E8FF", gradient: "from-purple-500 to-violet-500" },
  { name: "Beverages", image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?w=200&h=200&fit=crop", color: "#ECFDF5", gradient: "from-teal-500 to-cyan-500" },
  { name: "Personal Care", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop", color: "#FFF1F2", gradient: "from-pink-500 to-rose-500" },
];

const CategoryGrid = () => {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-primary to-orange-500 flex items-center justify-center text-white shadow-md">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tight text-foreground">Shop by Category</h2>
            <p className="text-muted-foreground text-sm font-medium">Fresh and delivered in minutes</p>
          </div>
        </div>
        <Link href="/categories" className="group flex items-center gap-1 text-brand-primary font-bold hover:underline underline-offset-4 transition-all duration-300">
          View All <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 md:gap-5">
        {categories.map((cat, index) => (
          <Link 
            href={`/category/${cat.name.toLowerCase().replace(/ /g, "-")}`} 
            key={cat.name} 
            className="group flex flex-col items-center gap-3"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div 
              className="relative h-24 w-24 md:h-28 md:w-28 rounded-2xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:shadow-premium-lg group-hover:scale-105 border-2 border-transparent group-hover:border-brand-primary/20"
              style={{ backgroundColor: cat.color }}
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${cat.gradient}`}></div>
              
              {/* Image */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-contain drop-shadow-lg"
                  sizes="80px"
                />
              </div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
              </div>
            </div>
            <span className="text-xs md:text-sm font-bold text-center group-hover:text-brand-primary transition-colors duration-300 line-clamp-1">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
