"use client";

import React from "react";
import Link from "next/link";
import { 
  Apple, 
  Carrot, 
  Beef, 
  Milk, 
  IceCream, 
  Coffee, 
  Baby, 
  SprayCan, 
  Dog, 
  Smartphone,
  ChevronRight
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const sidebarCategories = [
  { name: "Fruits & Vegetables", icon: Apple, slug: "fruits-vegetables" },
  { name: "Meat & Fish", icon: Beef, slug: "meat-fish" },
  { name: "Dairy & Eggs", icon: Milk, slug: "dairy-eggs" },
  { name: "Beverages", icon: Coffee, slug: "beverages" },
  { name: "Frozen Foods", icon: IceCream, slug: "frozen-foods" },
  { name: "Home & Cleaning", icon: SprayCan, slug: "home-cleaning" },
  { name: "Baby Care", icon: Baby, slug: "baby-care" },
  { name: "Pet Care", icon: Dog, slug: "pet-care" },
  { name: "Personal Care", icon: SprayCan, slug: "personal-care" },
  { name: "Kitchen & Baking", icon: Carrot, slug: "kitchen-baking" },
  { name: "Electronics", icon: Smartphone, slug: "electronics" },
];

const CategorySidebar = () => {
  return (
    <aside className="hidden lg:block w-72 shrink-0 border-r py-6 pr-4 bg-background">
      <div className="flex items-center justify-between mb-6 px-4">
        <h3 className="font-black text-xl tracking-tight">Browse Shop</h3>
      </div>
      <ScrollArea className="h-[calc(100vh-140px)]">
        <nav className="flex flex-col gap-1 px-2">
          {sidebarCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className={cn(
                "group flex items-center justify-between px-4 py-3 rounded-xl transition-all hover:bg-brand-primary hover:text-white group-hover:shadow-md"
              )}
            >
              <div className="flex items-center gap-3">
                <cat.icon className="h-5 w-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                <span className="text-sm font-bold">{cat.name}</span>
              </div>
              <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all font-bold" />
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
};

export default CategorySidebar;
