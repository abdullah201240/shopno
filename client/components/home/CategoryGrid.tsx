"use client";

import React from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const categories = [
  { name: "Daily Needs", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=200&h=200&fit=crop", color: "#FEE2E2" },
  { name: "Fresh Fruits", image: "https://images.unsplash.com/photo-1619566639371-5909d5977334?w=200&h=200&fit=crop", color: "#FEF3C7" },
  { name: "Vegetables", image: "https://images.unsplash.com/photo-1597362868423-3b14d858c63f?w=200&h=200&fit=crop", color: "#DCFCE7" },
  { name: "Meat & Fish", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=200&h=200&fit=crop", color: "#FEE2E2" },
  { name: "Dairy & Eggs", image: "https://images.unsplash.com/photo-1528498033373-3c6c08e93d79?w=200&h=200&fit=crop", color: "#DBEAFE" },
  { name: "Frozen Food", image: "https://images.unsplash.com/photo-1520201163981-8cc95007dd2a?w=200&h=200&fit=crop", color: "#F3E8FF" },
  { name: "Beverages", image: "https://images.unsplash.com/photo-1544145945-f904253db0ad?w=200&h=200&fit=crop", color: "#ECFDF5" },
  { name: "Personal Care", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=200&h=200&fit=crop", color: "#FFF1F2" },
];

const CategoryGrid = () => {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-foreground">Shop by Category</h2>
          <p className="text-muted-foreground text-sm font-medium">Fresh and delivered in minutes</p>
        </div>
        <Link href="/categories" className="group flex items-center gap-1 text-brand-primary font-bold hover:underline">
          View All <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
        {categories.map((cat) => (
          <Link href={`/category/${cat.name.toLowerCase().replace(" ", "-")}`} key={cat.name} className="group flex flex-col items-center gap-3">
            <div 
              className="relative h-28 w-28 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:shadow-brand-primary/20 group-hover:scale-105 border-4 border-transparent group-hover:border-brand-primary/10"
              style={{ backgroundColor: cat.color }}
            >
              <img 
                src={cat.image} 
                alt={cat.name}
                className="w-20 h-20 object-contain drop-shadow-md group-hover:rotate-12 transition-transform duration-500"
              />
            </div>
            <span className="text-sm font-bold text-center group-hover:text-brand-primary transition-colors">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
