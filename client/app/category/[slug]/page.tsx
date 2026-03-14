"use client";

import React from "react";
import Link from "next/link";
import MainLayout from "@/components/layout/MainLayout";
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
import { Filter, ChevronDown } from "lucide-react";
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

export default function CategoryPage({ params }: { params: { slug: string } }) {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex gap-8 py-8">
          {/* Desktop Sidebar */}
          <CategorySidebar />

          {/* Main Content */}
          <div className="flex-1">
            {/* Breadcrumbs */}
            <div className="mb-6">
              <Breadcrumb className="mb-4">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink render={<Link href="/" />}>Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="uppercase">Fruits & Vegetables</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-black tracking-tight text-foreground uppercase">Fruits & Vegetables</h1>
                  <p className="text-muted-foreground font-medium mt-1">Found 128 products</p>
                </div>
                
                {/* Filters Row */}
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="lg:hidden rounded-xl bg-background border-none shadow-sm font-bold gap-2">
                    <Filter className="h-4 w-4" /> Filter
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger render={<Button variant="outline" className="rounded-xl bg-background border-none shadow-sm font-bold gap-2" />}>
                      Sort by: Default <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                      <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                      <DropdownMenuItem>Newest First</DropdownMenuItem>
                      <DropdownMenuItem>Discount: High to Low</DropdownMenuItem>
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
               <Button className="bg-brand-primary text-white font-black px-12 h-14 rounded-2xl shadow-xl shadow-brand-primary/20 hover:scale-105 active:scale-95 transition-all">Load More Products</Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
