"use client";

import React, { useState } from "react";
import { 
  ChevronRight,
  Apple, 
  Baby, 
  SprayCan,
  Truck,
  Shield,
  Award,
  Phone,
  Dog,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sidebarCategories = [
  { 
    name: "Ramadan", icon: Apple, slug: "ramadan", 
    subs: [] 
  },
  { 
    name: "Food", icon: Apple, slug: "food", 
    subs: [
      "Fruits & Vegetables", "Meat & Fish", "Eggs", "Baking Needs", "Beverages", 
      "Snacks", "Frozen", "Canned Food", "Ice Cream", "Candy & Chocolate", 
      "Dairy", "Breakfast", "Sauces & Pickles", "Cooking"
    ] 
  },
  { 
    name: "Baby Food & Care", icon: Baby, slug: "baby-food-care", 
    subs: ["Baby Food", "Baby Wipes", "Baby Bath & Skincare", "Baby Oral Care", "Baby Accessories"] 
  },
  { 
    name: "Diapers", icon: Baby, slug: "diapers", 
    subs: ["Baby Diapers"] 
  },
  { 
    name: "Home Cleaning", icon: SprayCan, slug: "home-cleaning", 
    subs: [
      "Dish Cleaner", "Laundry", "Air Fresheners", 
      "Floor Glass & Wood Cleaners", "Toilet Cleaners", "Pest Control", "Trash Supplies"
    ] 
  },
  { 
    name: "Pet Care", icon: Dog, slug: "pet-care", 
    subs: ["Cat Food"] 
  },
  { 
    name: "Beauty & Health", icon: Sparkles, slug: "beauty-health", 
    subs: ["Beauty Care", "Health Care"] 
  },
  { 
    name: "Fashion & Lifestyle", icon: SprayCan, slug: "fashion-lifestyle", 
    subs: ["Kurtis Tunics & Tops", "Skirts & Palazzos", "Lungi"] 
  },
  { 
    name: "Home & Kitchen", icon: Apple, slug: "home-kitchen", 
    subs: [
      "Home Appliance", "Kitchen Accessories", "Kitchen Essentials", 
      "Home Accessories", "Lights & Electrical", "Tools & Hardware"
    ] 
  },
  { 
    name: "Stationeries", icon: SprayCan, slug: "stationeries", 
    subs: ["Batteries", "Writing & Drawing"] 
  },
  { 
    name: "Toys & Sports", icon: Apple, slug: "toys-sports", 
    subs: ["Sports & Outdoor", "Soft Toys", "Dolls & Plastic Toys", "Learning & Educational Toys"] 
  },
];

const promoCategories = [
  { name: "Honey", image: "/catagory/65f1547b733cb673c88fc6a3_Honey (1)_300.webp" },
  { name: "Baby Food", image: "/catagory/65ffaf59d2372028beccb0a7_baby food & care_300.webp" },
  { name: "Shampoo", image: "/catagory/66b826195c414d20bf52e59b_Shampoo_300.png" },
  { name: "Conditioner", image: "/catagory/66b82633367d9a39bc43ec05_Conditioner_300.png" },
  { name: "Home Cleaning", image: "/catagory/661f4e01c15481a97eed7698_Home Cleaning_300.png" },
  { name: "Fashion", image: "/catagory/6682c9ddae2c9abd70f18c50_fashion and lifestyle_300.png" },
  { name: "Milk", image: "/catagory/6682cb180a54717fc7e72781_Liquid & UHT Milk 2_300.png" },
  { name: "Toys & Sports", image: "/catagory/66010b23933e34c33990225c_Toys & Sports _300.webp" },
  { name: "Spices", image: "/catagory/660112dd4744fb420cd5934b_spices_300.webp" },
  { name: "Fresh Fruit", image: "/catagory/6621025ad66f7762f1e65133_Fresh-Fruit_300.webp" },
];

const banners = [
  { image: "/poster/1.png", alt: "Daily Needs Promo" },
  { image: "/poster/2.png", alt: "Fresh Fruits Promo" },
  { image: "/poster/3.png", alt: "Meat Special Promo" }
];

const HomeHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [promoIndex, setPromoIndex] = useState(0);
  const itemsPerPage = 5;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseEnter = (index: number) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <section className="py-6 pt-2 relative z-0">
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 h-auto md:h-[420px]">
        {/* Left Sidebar */}
        <div className="hidden lg:flex flex-col w-[260px] shrink-0 bg-white relative z-[998] overflow-visible">
          <div className="flex flex-col py-2">
            {sidebarCategories.map((cat, i) => (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={`/category/${cat.slug}`}
                  className={cn(
                    "flex items-center justify-between px-4 py-2.5 text-[15px] font-semibold transition-all duration-200",
                    activeMenu === i ? "text-[#C82128] bg-gray-100" : "text-[#222222] hover:text-[#C82128] hover:bg-gray-100"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <cat.icon className={cn("h-4 w-4 transition-colors", activeMenu === i ? "text-[#C82128]" : "text-gray-400")} />
                    <span className="tracking-tight leading-none">{cat.name}</span>
                  </div>
                  {cat.subs.length > 0 && (
                    <ChevronRight className={cn("h-4 w-4 transition-colors", activeMenu === i ? "text-[#C82128]" : "text-gray-300")} />
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Single Mega Menu - Always at top */}
          {activeMenu !== null && sidebarCategories[activeMenu]?.subs.length > 0 && (
            <div 
              className="absolute left-full top-0 w-[420px] bg-white z-[999]"
            >
              <div className="flex flex-col py-2">
                {sidebarCategories[activeMenu].subs.map((sub, j) => (
                  <Link 
                    key={j} 
                    href="#" 
                    className="px-6 py-2.5 text-[14px] font-medium text-[#222222] hover:text-[#C82128] hover:bg-gray-50 transition-all flex items-center justify-between"
                  >
                    <span>{sub}</span>
                    <ChevronRight className="h-4 w-4 text-gray-200" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Slider Section */}
          <div className="relative overflow-hidden flex-1 h-[280px]">
            {banners.map((banner, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out",
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                <div className="w-full h-full bg-gray-200 overflow-hidden">
                  <img 
                    src={banner.image} 
                    alt={banner.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
            
            {/* Navigation Buttons */}
            <button 
              className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 z-50 flex items-center justify-center"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)}
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
            </button>
            <button 
              className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 bg-white/80 hover:bg-white text-gray-800 rounded-full shadow-md transition-all hover:scale-105 active:scale-95 z-50 flex items-center justify-center"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            
            {/* Pagination Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-50">
              {banners.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={cn(
                    "h-1 rounded-full transition-all duration-300",
                    i === currentSlide ? "bg-[#C82128] w-6" : "bg-white/60 w-2 hover:bg-white/80"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Promo Category Row - Slider */}
          <div className="relative flex items-center gap-2">
            <button 
              onClick={() => setPromoIndex(Math.max(0, promoIndex - 1))}
              className="shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-10 border"
              disabled={promoIndex === 0}
            >
              <ChevronRight className="h-5 w-5 rotate-180" />
            </button>
            <div className="flex-1 flex gap-3 overflow-hidden">
              {promoCategories.slice(promoIndex * itemsPerPage, (promoIndex + 1) * itemsPerPage).map((cat, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="group flex-1 flex flex-col bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#C82128]/30 transition-all duration-300 min-w-0 h-[130px]"
                >
                  <div className="flex-1 overflow-hidden relative rounded-t-xl">
                    <img 
                      src={cat.image} 
                      alt={cat.name} 
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                  <div className="w-full bg-[#FFD35E] py-2 text-center rounded-b-xl flex-shrink-0">
                    <span className="text-[9px] font-bold uppercase text-black leading-none block truncate px-1">{cat.name}</span>
                  </div>
                </Link>
              ))}
            </div>
            <button 
              onClick={() => setPromoIndex(Math.min(Math.ceil(promoCategories.length / itemsPerPage) - 1, promoIndex + 1))}
              className="shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-10 border"
              disabled={promoIndex >= Math.ceil(promoCategories.length / itemsPerPage) - 1}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        {[
          { label: "60 MINS DELIVERY", icon: Truck, desc: "Available in selected areas" },
          { label: "AUTHORIZED PRODUCTS", icon: Shield, desc: "Quality guaranteed" },
          { label: "RETURN POLICY", icon: Award, desc: "T&C applies" },
          { label: "HELP LINE 16469", icon: Phone, desc: "24/7 service" },
        ].map((item, i) => (
          <div 
            key={i} 
            className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#C82128]/30 hover:shadow-md transition-all duration-300 cursor-default"
          >
            <div className="h-12 w-12 rounded-full bg-[#C82128]/10 flex items-center justify-center text-[#C82128] shrink-0">
              <item.icon className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-gray-900 uppercase tracking-tight leading-tight truncate">{item.label}</p>
              <p className="text-[10px] text-gray-500 font-medium leading-tight">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
