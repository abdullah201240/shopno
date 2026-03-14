"use client";

import React from "react";
import ProductCard from "../ui/custom/ProductCard";
import { ChevronRight } from "lucide-react";
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
        <div>
          <h2 className="text-2xl font-black tracking-tight text-foreground">{title}</h2>
          {subtitle && <p className="text-muted-foreground text-sm font-medium">{subtitle}</p>}
        </div>
        {viewAllLink && (
          <Link href={viewAllLink} className="group flex items-center gap-1 text-brand-primary font-bold hover:underline">
            View All <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
