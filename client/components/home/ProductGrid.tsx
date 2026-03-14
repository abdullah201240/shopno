"use client";

import React from "react";
import ProductCard from "../ui/custom/ProductCard";
import { ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface ProductGridProps {
  title: string;
  subtitle?: string;
  products: any[];
  viewAllLink?: string;
}

const ProductGrid = ({ title, subtitle, products, viewAllLink }: ProductGridProps) => {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-primary to-orange-500 flex items-center justify-center text-white shadow-md">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-tight text-foreground">{title}</h2>
            {subtitle && <p className="text-muted-foreground text-sm font-medium">{subtitle}</p>}
          </div>
        </div>
        {viewAllLink && (
          <Link href={viewAllLink} className="group flex items-center gap-1 text-brand-primary font-bold hover:underline underline-offset-4 transition-all duration-300">
            View All <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="animate-fade-in" 
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
