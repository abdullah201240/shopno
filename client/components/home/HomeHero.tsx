"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  Menu, 
  ChevronRight, 
  Apple, 
  Carrot, 
  Beef, 
  Milk, 
  IceCream, 
  Coffee, 
  Baby, 
  SprayCan,
  Truck,
  Shield,
  Clock,
  Award
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const sidebarCategories = [
  { name: "Fruits & Vegetables", icon: Apple, slug: "fruits-vegetables", color: "text-green-500" },
  { name: "Meat & Fish", icon: Beef, slug: "meat-fish", color: "text-red-500" },
  { name: "Dairy & Eggs", icon: Milk, slug: "dairy-eggs", color: "text-blue-500" },
  { name: "Beverages", icon: Coffee, slug: "beverages", color: "text-amber-500" },
  { name: "Frozen Foods", icon: IceCream, slug: "frozen-foods", color: "text-cyan-500" },
  { name: "Home & Cleaning", icon: SprayCan, slug: "home-cleaning", color: "text-purple-500" },
  { name: "Baby Care", icon: Baby, slug: "baby-care", color: "text-pink-500" },
  { name: "Personal Care", icon: SprayCan, slug: "personal-care", color: "text-rose-500" },
];

const banners = [
  {
    image: "/poster/1.png",
    alt: "Daily Needs Promo",
  },
  {
    image: "/poster/2.png",
    alt: "Fresh Fruits Promo",
  },
  {
    image: "/poster/3.png",
    alt: "Meat Special Promo",
  }
];

const trustBadges = [
  { label: "Free 1h Delivery", icon: Truck, desc: "For orders over ৳500", color: "from-green-500 to-emerald-500" },
  { label: "Fresh Guarantee", icon: Award, desc: "100% Organic Products", color: "from-brand-primary to-orange-500" },
  { label: "Secure Payment", icon: Shield, desc: "Multiple methods", color: "from-blue-500 to-indigo-500" },
  { label: "Happy Customer", icon: Clock, desc: "1M+ Happy clients", color: "from-purple-500 to-pink-500" },
];

const HomeHero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section className="py-6 pt-2">
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 md:h-[420px]">
        {/* Left Sidebar - Premium Design */}
        <div className="hidden lg:flex flex-col w-72 shrink-0 bg-white rounded-2xl overflow-hidden shadow-premium border border-border/50">
          <div className="relative bg-gradient-to-r from-brand-primary to-orange-500 text-white p-4 font-bold text-sm uppercase flex items-center gap-3 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50"></div>
            <Menu className="h-5 w-5 relative z-10" />
            <span className="relative z-10">Shop By Category</span>
          </div>
          <div className="flex flex-col py-2 overflow-y-auto flex-1">
            {sidebarCategories.map((cat, i) => (
              <Link
                key={i}
                href={`/category/${cat.slug}`}
                className="group flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-muted-foreground hover:text-brand-primary transition-all duration-300 hover:bg-brand-primary/5 border-b border-transparent hover:border-border/50 relative overflow-hidden"
              >
                <div className="absolute inset-0 w-0 group-hover:w-full bg-gradient-to-r from-brand-primary/5 to-transparent transition-all duration-300"></div>
                <div className="flex items-center gap-3 relative z-10">
                  <div className={cn("h-8 w-8 rounded-lg bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300", `group-hover:bg-brand-primary/10`)}>
                    <cat.icon className={cn("h-4 w-4", cat.color, "group-hover:text-brand-primary transition-colors duration-300")} />
                  </div>
                  <span>{cat.name}</span>
                </div>
                <ChevronRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 relative z-10" />
              </Link>
            ))}
            <Link
              href="/categories"
              className="flex items-center justify-center p-4 text-xs font-bold uppercase text-brand-primary hover:bg-brand-primary/5 transition-colors mt-auto border-t border-border/50 group"
            >
              <span className="group-hover:mr-2 transition-all duration-300">View All Categories</span>
              <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </Link>
          </div>
        </div>

        {/* Right Slider Section */}
        <div className="flex-1 relative overflow-hidden lg:rounded-2xl rounded-2xl shadow-premium border border-border/50 min-h-[200px] md:min-h-[420px]">
          <Carousel
            plugins={[plugin.current]}
            className="w-full h-full min-h-[200px] md:min-h-[420px]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="h-full min-h-[200px] md:min-h-[420px]">
              {banners.map((banner, index) => (
                <CarouselItem key={index} className="h-full min-h-[200px] md:min-h-[420px]">
                  <div className="relative h-full min-h-[200px] md:min-h-[420px] w-full overflow-hidden bg-muted">
                    <Image 
                      src={banner.image} 
                      alt={banner.alt}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 80vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Premium Navigation Buttons */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/90 hover:bg-white text-brand-primary border-none rounded-full shadow-premium-lg transition-all duration-300 hover:scale-110 active:scale-95" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-white/90 hover:bg-white text-brand-primary border-none rounded-full shadow-premium-lg transition-all duration-300 hover:scale-110 active:scale-95" />
            </div>
            
            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1.5">
              {banners.map((_, i) => (
                <div key={i} className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === 0 ? "bg-brand-primary w-6" : "bg-white/60 w-2 hover:bg-white/80 cursor-pointer"
                )}></div>
              ))}
            </div>
          </Carousel>
        </div>
      </div>

      {/* Premium Trust Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6">
        {trustBadges.map((badge, i) => (
          <div 
            key={i} 
            className="group relative flex items-center gap-3 p-4 rounded-2xl bg-white border border-border/50 hover:border-transparent hover:shadow-premium transition-all duration-300 overflow-hidden"
          >
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br",
              badge.color
            )}></div>
            <div className={cn(
              "h-11 w-11 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300 bg-gradient-to-br",
              badge.color
            )}>
              <badge.icon className="h-5 w-5" />
            </div>
            <div className="relative z-10">
              <p className="text-sm font-bold text-foreground">{badge.label}</p>
              <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
