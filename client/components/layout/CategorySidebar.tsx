"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  ChevronRight,
  Sparkles
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const sidebarCategories = [
  { name: "Fruits & Vegetables", icon: Apple, slug: "fruits-vegetables", color: "text-green-500" },
  { name: "Meat & Fish", icon: Beef, slug: "meat-fish", color: "text-red-500" },
  { name: "Dairy & Eggs", icon: Milk, slug: "dairy-eggs", color: "text-blue-500" },
  { name: "Beverages", icon: Coffee, slug: "beverages", color: "text-amber-500" },
  { name: "Frozen Foods", icon: IceCream, slug: "frozen-foods", color: "text-cyan-500" },
  { name: "Home & Cleaning", icon: SprayCan, slug: "home-cleaning", color: "text-purple-500" },
  { name: "Baby Care", icon: Baby, slug: "baby-care", color: "text-pink-500" },
  { name: "Pet Care", icon: Dog, slug: "pet-care", color: "text-amber-600" },
  { name: "Personal Care", icon: SprayCan, slug: "personal-care", color: "text-rose-500" },
  { name: "Kitchen & Baking", icon: Carrot, slug: "kitchen-baking", color: "text-orange-500" },
  { name: "Electronics", icon: Smartphone, slug: "electronics", color: "text-indigo-500" },
];

const CategorySidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:block w-72 shrink-0 py-6 pr-4">
      <div className="bg-white rounded-2xl border border-border/50 shadow-premium overflow-hidden">
        {/* Header */}
        <div className="p-4 border-b border-border/50 bg-gradient-to-r from-muted/30 to-muted/10">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-primary to-orange-500 flex items-center justify-center text-white shadow-md">
              <Sparkles className="h-4 w-4" />
            </div>
            <h3 className="font-bold text-lg tracking-tight">Browse Shop</h3>
          </div>
        </div>
        
        {/* Categories List */}
        <ScrollArea className="h-[calc(100vh-220px)]">
          <nav className="flex flex-col gap-0.5 p-2">
            {sidebarCategories.map((cat, index) => {
              const isActive = pathname === `/category/${cat.slug}`;
              
              return (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className={cn(
                    "group flex items-center justify-between px-3 py-2.5 rounded-xl transition-all duration-300 relative overflow-hidden",
                    isActive 
                      ? "bg-gradient-to-r from-brand-primary to-orange-500 text-white shadow-md" 
                      : "hover:bg-brand-primary/5 hover:text-brand-primary"
                  )}
                  style={{ animationDelay: `${index * 30}ms` }}
                >
                  {/* Hover Background Effect */}
                  {!isActive && (
                    <div className="absolute inset-0 w-0 group-hover:w-full bg-gradient-to-r from-brand-primary/5 to-transparent transition-all duration-300"></div>
                  )}
                  
                  <div className="flex items-center gap-3 relative z-10">
                    <div className={cn(
                      "h-8 w-8 rounded-lg flex items-center justify-center transition-all duration-300",
                      isActive 
                        ? "bg-white/20" 
                        : "bg-muted/50 group-hover:bg-brand-primary/10"
                    )}>
                      <cat.icon className={cn(
                        "h-4 w-4 transition-colors duration-300",
                        isActive ? "text-white" : cat.color
                      )} />
                    </div>
                    <span className="text-sm font-semibold">{cat.name}</span>
                  </div>
                  
                  <ChevronRight className={cn(
                    "h-4 w-4 transition-all duration-300 relative z-10",
                    isActive 
                      ? "opacity-100 translate-x-0" 
                      : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                  )} />
                </Link>
              );
            })}
          </nav>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default CategorySidebar;
