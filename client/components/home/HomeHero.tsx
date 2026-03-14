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
  ChevronLeft
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const sidebarCategories = [
  { name: "Fruits & Vegetables", icon: Apple, slug: "fruits-vegetables" },
  { name: "Meat & Fish", icon: Beef, slug: "meat-fish" },
  { name: "Dairy & Eggs", icon: Milk, slug: "dairy-eggs" },
  { name: "Beverages", icon: Coffee, slug: "beverages" },
  { name: "Frozen Foods", icon: IceCream, slug: "frozen-foods" },
  { name: "Home & Cleaning", icon: SprayCan, slug: "home-cleaning" },
  { name: "Baby Care", icon: Baby, slug: "baby-care" },
  { name: "Personal Care", icon: SprayCan, slug: "personal-care" },
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

const HomeHero = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section className="py-6 pt-2">
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 md:h-[400px]">
        {/* Left Sidebar (Shwapno Style) */}
        <div className="hidden lg:flex flex-col w-72 shrink-0 border bg-white rounded-tl-xl rounded-bl-xl overflow-hidden shadow-sm">
          <div className="bg-brand-primary text-white p-4 font-black text-sm uppercase flex items-center gap-3">
             <Menu className="h-5 w-5" />
             <span>Shop By Category</span>
          </div>
          <div className="flex flex-col py-1 overflow-y-auto">
            {sidebarCategories.map((cat, i) => (
              <Link
                key={i}
                href={`/category/${cat.slug}`}
                className="group flex items-center justify-between px-5 py-2.5 text-sm font-bold text-muted-foreground hover:text-brand-primary transition-all hover:bg-muted/50 border-b border-transparent hover:border-muted"
              >
                <div className="flex items-center gap-3">
                  <cat.icon className="h-4 w-4 opacity-70 group-hover:opacity-100" />
                  <span>{cat.name}</span>
                </div>
                <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all font-bold" />
              </Link>
            ))}
            <Link
              href="/categories"
              className="flex items-center justify-center p-3 text-xs font-black uppercase text-brand-primary hover:bg-brand-primary/5 transition-colors mt-auto"
            >
              View More Categories
            </Link>
          </div>
        </div>

        {/* Right Slider Section */}
        <div className="flex-1 relative overflow-hidden lg:rounded-tr-xl lg:rounded-br-xl rounded-xl">
          <Carousel
            plugins={[plugin.current]}
            className="w-full h-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="h-full">
              {banners.map((banner, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="relative h-[200px] md:h-full w-full overflow-hidden bg-muted">
                      <Image 
                         src={banner.image} 
                         alt={banner.alt}
                         fill
                         className="object-cover"
                      />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Shwapno Style Navigation Buttons - Yellow Circles */}
            <div className="hidden md:block">
              <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-[#FFD35E] hover:bg-[#FFD35E]/90 text-black border-none rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95" />
              <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 bg-[#FFD35E] hover:bg-[#FFD35E]/90 text-black border-none rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95" />
            </div>
            
            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
               {banners.map((_, i) => (
                 <div key={i} className={cn(
                   "h-2 w-2 rounded-full transition-all",
                   i === 0 ? "bg-brand-primary w-4" : "bg-white/50"
                 )}></div>
               ))}
            </div>
          </Carousel>
        </div>
      </div>

      {/* Trust Badges - Styled to be cleaner below the hero */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {[
          { label: "Free 1h Delivery", icon: "🚚", desc: "For orders over ৳500" },
          { label: "Fresh Guarrantee", icon: "🌱", desc: "100% Organic Products" },
          { label: "Secure Payment", icon: "🛡️", desc: "Multiple methods" },
          { label: "Happy Customer", icon: "⭐", desc: "1M+ Happy clients" },
        ].map((badge, i) => (
          <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-muted hover:border-brand-primary/20 hover:shadow-md transition-all group">
            <div className="h-10 w-10 rounded-full bg-brand-primary/5 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
              {badge.icon}
            </div>
            <div>
              <p className="text-sm font-black text-foreground">{badge.label}</p>
              <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
