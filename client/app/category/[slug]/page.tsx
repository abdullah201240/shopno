"use client";

import React from "react";
import Link from "next/link";
import CategorySidebar from "@/components/layout/CategorySidebar";
import ProductCard from "@/components/ui/custom/ProductCard";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Sparkles, SlidersHorizontal, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const MOCK_CATEGORY_PRODUCTS = [
  { id: "c1", name: "Red Apple - Premium", price: 250, originalPrice: 300, unit: "1 kg", discount: "৳50 OFF", image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=400" },
  { id: "c2", name: "Fuji Apple Small", price: 180, unit: "500 g", image: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=400&h=400" },
  { id: "c3", name: "Gala Apple Box", price: 850, originalPrice: 1000, unit: "3 kg", discount: "15%", image: "https://images.unsplash.com/photo-1560742124-275138ed499b?w=400&h=400" },
  { id: "c4", name: "Green Granny Smith", price: 290, unit: "1 kg", image: "https://images.unsplash.com/photo-1610397648930-477b8c7f0943?w=400&h=400" },
  { id: "c5", name: "Sweet Malta", price: 160, unit: "1 kg", image: "https://images.unsplash.com/photo-1582980848281-995171dfb33e?w=400&h=400" },
  { id: "c6", name: "Fresh Pomegranate", price: 350, unit: "1 kg", image: "https://images.unsplash.com/photo-1620138662059-331526de7676?w=400&h=400" },
  { id: "c7", name: "Dragon Fruit White", price: 420, unit: "1 kg", image: "https://images.unsplash.com/photo-1527325511917-1181be3d8bc0?w=400&h=400" },
  { id: "c8", name: "Local Green Guava", price: 85, unit: "1 kg", image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?w=400&h=400" },
];

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  // In Next.js 15+, params is a Promise that needs to be awaited
  // For client components, we use React.use() to unwrap the promise
  const resolvedParams = React.use(params);
  
  return (
    <div className="container mx-auto px-4 lg:px-6">
      <div className="flex gap-8 py-8">
        {/* Desktop Sidebar */}
        <CategorySidebar />

        {/* Main Content */}
        <div className="flex-1">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Breadcrumb className="mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="uppercase font-semibold">Fruits & Vegetables</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-brand-primary to-orange-500 flex items-center justify-center text-white shadow-md">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground uppercase">Fruits & Vegetables</h1>
                  <p className="text-muted-foreground font-medium mt-1">Found <span className="text-brand-primary font-bold">128</span> products</p>
                </div>
              </div>
              
              {/* Filters Row */}
              <div className="flex items-center gap-3">
                <Button variant="outline" className="lg:hidden rounded-xl bg-background border-border shadow-sm font-semibold gap-2 hover:bg-muted transition-all duration-300">
                  <SlidersHorizontal className="h-4 w-4" /> Filter
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger render={<Button variant="outline" className="rounded-xl bg-background border-border shadow-sm font-semibold gap-2 hover:bg-muted transition-all duration-300" />}>
                    Sort by: Default <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48 p-2 rounded-2xl shadow-premium-lg border border-border/50">
                    <DropdownMenuItem className="rounded-xl px-3 py-2.5 cursor-pointer hover:bg-brand-primary/10 focus:bg-brand-primary/10">Price: Low to High</DropdownMenuItem>
                    <DropdownMenuItem className="rounded-xl px-3 py-2.5 cursor-pointer hover:bg-brand-primary/10 focus:bg-brand-primary/10">Price: High to Low</DropdownMenuItem>
                    <DropdownMenuItem className="rounded-xl px-3 py-2.5 cursor-pointer hover:bg-brand-primary/10 focus:bg-brand-primary/10">Newest First</DropdownMenuItem>
                    <DropdownMenuItem className="rounded-xl px-3 py-2.5 cursor-pointer hover:bg-brand-primary/10 focus:bg-brand-primary/10">Discount: High to Low</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 pt-4">
            {MOCK_CATEGORY_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
            {/* Duplicate for visual grid richness */}
            {MOCK_CATEGORY_PRODUCTS.map((product) => (
              <ProductCard key={product.id + "-copy"} {...product} />
            ))}
          </div>

          {/* Pagination / Load More */}
          <div className="mt-16 flex justify-center py-10">
            <Button className="bg-gradient-to-r from-brand-primary to-orange-500 text-white font-bold px-12 h-14 rounded-2xl shadow-premium-lg hover:shadow-glow-primary hover:scale-105 active:scale-95 transition-all duration-300">
              Load More Products
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
