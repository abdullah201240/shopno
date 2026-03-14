"use client";

import React from "react";
import ProductCard from "../ui/custom/ProductCard";
import { ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  products: any[];
  viewAllLink?: string;
}

const ProductGrid = ({ title, subtitle, products, viewAllLink }: ProductGridProps) => {
  return (
    <section className="py-2">
      {(title || subtitle) && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
             <h2 className="text-xl font-black uppercase tracking-tight text-[#C82128]">{title}</h2>
          </div>
          {viewAllLink && (
            <Link href={viewAllLink} className="text-sm font-bold text-gray-500 hover:text-[#C82128] transition-colors">
              View All
            </Link>
          )}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
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
