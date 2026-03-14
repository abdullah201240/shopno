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
  Award,
  CreditCard,
  Phone,
  Dog,
  Sparkles,
  Smartphone
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const sidebarCategories = [
  { 
    name: "Ramadan", icon: Apple, slug: "ramadan", 
    subs: ["Dates & Nuts", "Beverages", "Snacks", "Oil & Ghee", "Lentils & Pulses"] 
  },
  { 
    name: "Food", icon: Apple, slug: "food", 
    subs: ["Rice", "Oil", "Flour", "Spices", "Ready to Cook", "Dairy"] 
  },
  { 
    name: "Baby Food & Care", icon: Baby, slug: "baby-food-care", 
    subs: ["Formula", "Baby Cereal", "Diapers", "Baby Wipes", "Baby Bath"] 
  },
  { 
    name: "Diapers", icon: Baby, slug: "diapers", 
    subs: ["Pant Style", "Tape Style", "Small", "Medium", "Large", "XL"] 
  },
  { 
    name: "Home Cleaning", icon: SprayCan, slug: "home-cleaning", 
    subs: ["Floor Cleaner", "Dishwash", "Toilet Cleaner", "Laundry", "Air Freshener"] 
  },
  { 
    name: "Pet Care", icon: Dog, slug: "pet-care", 
    subs: ["Cat Food", "Dog Food", "Pet Litter", "Pet Accessories"] 
  },
  { 
    name: "Beauty & Health", icon: Sparkles, slug: "beauty-health", 
    subs: ["Oral Care", "Hair Care", "Skin Care", "Personal Hygiene", "Health Care"] 
  },
  { 
    name: "Fashion & Lifestyle", icon: SprayCan, slug: "fashion-lifestyle", 
    subs: ["Men's Wear", "Women's Wear", "Kids Wear", "Accessories"] 
  },
  { 
    name: "Home & Kitchen", icon: Apple, slug: "home-kitchen", 
    subs: ["Dinnerware", "Cookware", "Kitchen Tools", "Storage"] 
  },
  { 
    name: "Stationeries", icon: SprayCan, slug: "stationeries", 
    subs: ["Paper & Pens", "Notebooks", "Calculators", "Art Supplies"] 
  },
  { 
    name: "Toys & Sports", icon: Apple, slug: "toys-sports", 
    subs: ["Soft Toys", "Board Games", "Outdoor Sports", "Action Figures"] 
  },
  { 
    name: "Gadget", icon: Smartphone, slug: "gadget", 
    subs: ["Mobile Accessories", "Headphones", "Smart Watches", "Cables"] 
  },
];

const promoCategories = [
  { name: "Eggs", image: "https://images.unsplash.com/photo-1518562180175-34a163b1a9a5?w=300&h=200&fit=crop" },
  { name: "Tea", image: "https://images.unsplash.com/photo-1544787210-22c1bc1ae650?w=300&h=200&fit=crop" },
  { name: "Soft Drinks", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300&h=200&fit=crop" },
  { name: "Frozen", image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=300&h=200&fit=crop" },
  { name: "Coffee", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop" },
];

const banners = [
  {
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&h=600&fit=crop",
    alt: "Daily Needs Promo",
  },
  {
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=1200&h=600&fit=crop",
    alt: "Fresh Fruits Promo",
  },
  {
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=1200&h=600&fit=crop",
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
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 h-auto md:h-[580px]">
        {/* Left Sidebar - Shwapno Style with Flyout */}
        <div className="hidden lg:flex flex-col w-64 shrink-0 bg-white border border-border/60 relative group-s-sidebar z-[110]">
          <div className="bg-white text-black p-3 font-black text-[11px] uppercase flex items-center gap-3 border-b border-border/60">
            <Menu className="h-4 w-4" />
            <span>SHOP BY CATEGORY</span>
          </div>
          <div className="flex flex-col py-0 flex-1">
            {sidebarCategories.map((cat, i) => (
              <div
                key={i}
                className="relative group/item border-b border-gray-50 last:border-0"
              >
                <Link
                  href={`/category/${cat.slug}`}
                  className="flex items-center justify-between px-4 py-[11px] text-[11px] font-bold text-gray-700 hover:text-[#C82128] hover:bg-gray-50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <cat.icon className="h-4 w-4 text-gray-400 group-hover/item:text-[#C82128]" />
                    <span className="uppercase tracking-tight">{cat.name}</span>
                  </div>
                  <ChevronRight className="h-3 w-3 text-gray-300 group-hover/item:text-[#C82128]" />
                </Link>

                {/* Mega Menu Flyout - Fixed Alignment */}
                <div className="absolute left-full top-[-1px] w-[500px] min-h-[calc(100%+2px)] bg-white border border-border/80 shadow-2xl z-[150] hidden group-hover/item:block p-8">
                   <h4 className="text-[12px] font-black text-[#C82128] uppercase mb-6 pb-2 border-b border-border/40 tracking-wider">
                      {cat.name}
                   </h4>
                   <div className="grid grid-cols-2 gap-x-12 gap-y-5">
                      {cat.subs?.map((sub, j) => (
                        <Link 
                          key={j} 
                          href="#" 
                          className="text-[11px] font-black text-gray-500 hover:text-[#C82128] uppercase transition-colors tracking-tight"
                        >
                          {sub}
                        </Link>
                      ))}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Area (Slider + Promo Row) */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Slider Section */}
          <div className="relative overflow-hidden lg:rounded-2xl rounded-2xl shadow-sm border border-border/50 flex-1 h-[450px]">
            <Carousel
              plugins={[plugin.current]}
              className="w-full h-full h-[450px]"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="h-full h-[450px]">
                {banners.map((banner, index) => (
                  <CarouselItem key={index} className="h-full h-[450px]">
                    <div className="relative h-full h-[450px] w-full overflow-hidden bg-muted">
                      <Image 
                        src={banner.image} 
                        alt={banner.alt}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 80vw"
                        unoptimized
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <div className="hidden md:block">
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 h-8 w-8 bg-[#FFD35E] text-black border-none rounded-full shadow-lg transition-transform" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 h-8 w-8 bg-[#FFD35E] text-black border-none rounded-full shadow-lg transition-transform" />
              </div>
              
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                 {banners.map((_, i) => (
                   <div key={i} className={cn(
                     "h-1.5 w-1.5 rounded-full transition-all",
                     i === 0 ? "bg-[#C82128] w-4" : "bg-white/50"
                   )}></div>
                 ))}
              </div>
            </Carousel>
          </div>

          {/* Promo Category Row - Aligned under the Slider */}
          <div className="grid grid-cols-5 gap-3 h-[120px]">
            {promoCategories.map((cat, i) => (
              <Link key={i} href="#" className="group flex flex-col items-center relative h-full">
                 <div className="relative w-full aspect-[1.6] rounded-xl overflow-hidden border border-border/40 shadow-sm bg-white">
                    <Image 
                      src={cat.image} 
                      alt={cat.name} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                 </div>
                 <div className="absolute -bottom-1 left-1.5 right-1.5 bg-[#FFD35E] py-1.5 text-center rounded-lg shadow-md z-10">
                    <span className="text-[10px] font-black uppercase text-black leading-none block">{cat.name}</span>
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badges - Shwapno Style */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        {[
          { label: "60 MINS DELIVERY", icon: Truck, desc: "Available in selected areas" },
          { label: "AUTHORIZED PRODUCTS", icon: Shield, desc: "Quality guaranteed" },
          { label: "RETURN POLICY", icon: Award, desc: "T&C applies" },
          { label: "HELP LINE 16469", icon: Phone, desc: "24/7 service" },
        ].map((badge, i) => (
          <div 
            key={i} 
            className="flex items-center gap-4 p-4 rounded-xl bg-white border border-border/50 hover:shadow-md transition-all duration-300"
          >
            <div className="h-10 w-10 rounded-full border border-[#C82128] flex items-center justify-center text-[#C82128]">
              <badge.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[11px] font-black text-foreground uppercase tracking-tight leading-tight">{badge.label}</p>
              <p className="text-[10px] text-muted-foreground font-bold leading-tight">{badge.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
