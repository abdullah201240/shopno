"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, MapPin, User, Menu,Phone, Apple, Baby, SprayCan, Dog, Sparkles, ChevronDown, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface SubCategory {
  name: string;
  slug: string;
  subSubs: string[];
}

interface Category {
  name: string;
  icon: React.ElementType;
  slug: string;
  subs: SubCategory[];
}

const mobileCategories: Category[] = [
  {
    name: "Ramadan", icon: Apple, slug: "ramadan",
    subs: []
  },
  {
    name: "Food", icon: Apple, slug: "food",
    subs: [
      { name: "Fruits & Vegetables", slug: "fruits-vegetables", subSubs: ["Fresh Fruits", "Fresh Vegetables", "Dried Fruits"] },
      { name: "Meat & Fish", slug: "meat-fish", subSubs: ["Fresh Meat", "Fish", "Sea Food"] },
      { name: "Eggs", slug: "eggs", subSubs: ["Chicken Eggs", "Duck Eggs", "Quail Eggs"] },
      { name: "Baking Needs", slug: "baking-needs", subSubs: ["Flour", "Yeast", "Baking Powder"] },
      { name: "Beverages", slug: "beverages", subSubs: ["Juice", "Soft Drinks", "Water", "Tea & Coffee"] },
      { name: "Snacks", slug: "snacks", subSubs: ["Chips", "Nuts", "Cookies"] },
      { name: "Frozen", slug: "frozen", subSubs: ["Ice Cream", "Frozen Vegetables", "Frozen Meat"] },
      { name: "Canned Food", slug: "canned-food", subSubs: ["Canned Vegetables", "Canned Fruits", "Canned Meat"] },
      { name: "Ice Cream", slug: "ice-cream", subSubs: ["Cup Ice Cream", "Cone Ice Cream", "Bar Ice Cream"] },
      { name: "Candy & Chocolate", slug: "candy-chocolate", subSubs: ["Chocolate", "Candy", "Gum"] },
      { name: "Dairy", slug: "dairy", subSubs: ["Milk", "Cheese", "Yogurt", "Butter"] },
      { name: "Breakfast", slug: "breakfast", subSubs: ["Cereal", "Oatmeal", "Bread"] },
      { name: "Sauces & Pickles", slug: "sauces-pickles", subSubs: ["Sauce", "Pickles", "Chutney"] },
      { name: "Cooking", slug: "cooking", subSubs: ["Oil", "Spices", "Salt"] }
    ]
  },
  {
    name: "Baby Food & Care", icon: Baby, slug: "baby-food-care",
    subs: [
      { name: "Baby Food", slug: "baby-food", subSubs: ["Formula", "Cerelac", "Baby Snacks"] },
      { name: "Baby Wipes", slug: "baby-wipes", subSubs: ["Wet Wipes", "Dry Wipes", "Baby Towels"] },
      { name: "Baby Bath & Skincare", slug: "baby-bath", subSubs: ["Baby Soap", "Baby Lotion", "Baby Oil"] },
      { name: "Baby Oral Care", slug: "baby-oral", subSubs: ["Toothbrush", "Toothpaste", "Teether"] },
      { name: "Baby Accessories", slug: "baby-accessories", subSubs: ["Bottle", "Pacifier", "Diaper Bag"] }
    ]
  },
  {
    name: "Diapers", icon: Baby, slug: "diapers",
    subs: [
      { name: "Baby Diapers", slug: "baby-diapers", subSubs: ["Newborn", "Small", "Medium", "Large", "XL"] }
    ]
  },
  {
    name: "Home Cleaning", icon: SprayCan, slug: "home-cleaning",
    subs: [
      { name: "Dish Cleaner", slug: "dish-cleaner", subSubs: ["Dish Soap", "Dish Liquid", "Dish Powder"] },
      { name: "Laundry", slug: "laundry", subSubs: ["Detergent", "Fabric Softener", "Bleach"] },
      { name: "Air Fresheners", slug: "air-fresheners", subSubs: ["Spray", "Gel", "Plug-in"] },
      { name: "Floor Glass & Wood Cleaners", slug: "floor-cleaners", subSubs: ["Floor Cleaner", "Glass Cleaner", "Wood Polish"] },
      { name: "Toilet Cleaners", slug: "toilet-cleaners", subSubs: ["In-cistern", "Brush", "Liquid"] },
      { name: "Pest Control", slug: "pest-control", subSubs: ["Mousetrap", "Insect Spray", "Cockroach Killer"] },
      { name: "Trash Supplies", slug: "trash-supplies", subSubs: ["Trash Bag", "Dustbin", "Dustpan"] }
    ]
  },
  {
    name: "Pet Care", icon: Dog, slug: "pet-care",
    subs: [
      { name: "Cat Food", slug: "cat-food", subSubs: ["Dry Food", "Wet Food", "Treats"] }
    ]
  },
  {
    name: "Beauty & Health", icon: Sparkles, slug: "beauty-health",
    subs: [
      { name: "Beauty Care", slug: "beauty-care", subSubs: ["Skincare", "Makeup", "Hair Care"] },
      { name: "Health Care", slug: "health-care", subSubs: ["Vitamins", "Medicine", "First Aid"] }
    ]
  },
  {
    name: "Fashion & Lifestyle", icon: SprayCan, slug: "fashion-lifestyle",
    subs: [
      { name: "Kurtis Tunics & Tops", slug: "kurtis", subSubs: ["Cotton", "Silk", "Synthetic"] },
      { name: "Skirts & Palazzos", slug: "skirts", subSubs: ["Long Skirt", "Short Skirt", "Palazzo"] },
      { name: "Lungi", slug: "lungi", subSubs: ["Cotton Lungi", "Silk Lungi", "Printed Lungi"] }
    ]
  },
  {
    name: "Home & Kitchen", icon: Apple, slug: "home-kitchen",
    subs: [
      { name: "Home Appliance", slug: "home-appliance", subSubs: ["Fan", "Light", "Heater"] },
      { name: "Kitchen Accessories", slug: "kitchen-accessories", subSubs: [" utensils", "Cookware", "Bakeware"] },
      { name: "Kitchen Essentials", slug: "kitchen-essentials", subSubs: ["Plates", "Glasses", "Cutlery"] },
      { name: "Home Accessories", slug: "home-accessories", subSubs: ["Curtains", "Carpets", "Cushions"] },
      { name: "Lights & Electrical", slug: "lights", subSubs: ["LED", "Bulb", "Tube"] },
      { name: "Tools & Hardware", slug: "tools-hardware", subSubs: ["Screwdriver", "Hammer", "Wrench"] }
    ]
  },
  {
    name: "Stationeries", icon: SprayCan, slug: "stationeries",
    subs: [
      { name: "Batteries", slug: "batteries", subSubs: ["AA", "AAA", "Rechargeable"] },
      { name: "Writing & Drawing", slug: "writing", subSubs: ["Pen", "Pencil", "Notebook"] }
    ]
  },
  {
    name: "Toys & Sports", icon: Apple, slug: "toys-sports",
    subs: [
      { name: "Sports & Outdoor", slug: "sports-outdoor", subSubs: ["Cricket", "Football", "Badminton"] },
      { name: "Soft Toys", slug: "soft-toys", subSubs: ["Teddy Bear", "Pillow", "Character"] },
      { name: "Dolls & Plastic Toys", slug: "dolls", subSubs: ["Barbie", "Action Figure", "Plastic Car"] },
      { name: "Learning & Educational Toys", slug: "learning-toys", subSubs: ["Puzzle", "Building Blocks", "Science Kit"] }
    ]
  },
];

const Header = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);
  const [expandedSubCategory, setExpandedSubCategory] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setExpandedCategory(expandedCategory === index ? null : index);
    setExpandedSubCategory(null);
  };

  const toggleSubCategory = (index: number) => {
    setExpandedSubCategory(expandedSubCategory === index ? null : index);
  };
  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Tier 1: Red Background Header */}
      <div className="bg-[#C82128] text-white py-2 px-1 lg:px-4">
        <div className="w-full flex items-center justify-between gap-1 lg:gap-4 h-11 lg:h-12 px-0 lg:px-6">
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-0.5 lg:gap-4">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10 h-8 w-8" />}>
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[85%] max-w-[320px] p-0 flex flex-col h-full border-none">
                {/* Categories - Hierarchical List */}
                <div className="flex-1 overflow-y-auto pt-2">
                  <div className="flex flex-col">
                    {mobileCategories.map((category, catIndex) => (
                      <div key={catIndex} className="border-b border-gray-50">
                        <button
                          onClick={() => toggleCategory(catIndex)}
                          className={`w-full flex items-center justify-between px-4 py-4 text-sm font-bold transition-colors ${
                            expandedCategory === catIndex ? 'bg-gray-50 text-[#C82128]' : 'text-[#3c3e44] hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <category.icon className={`h-5 w-5 ${expandedCategory === catIndex ? 'text-[#C82128]' : 'text-gray-400'}`} />
                            <span>{category.name}</span>
                          </div>
                          {category.subs.length > 0 && (
                            expandedCategory === catIndex ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />
                          )}
                        </button>

                        {/* Subcategories */}
                        {expandedCategory === catIndex && category.subs.length > 0 && (
                          <div className="bg-gray-50/50">
                            {category.subs.map((sub, subIndex) => (
                              <div key={subIndex}>
                                <button
                                  onClick={() => toggleSubCategory(subIndex)}
                                  className={`w-full flex items-center justify-between pl-12 pr-4 py-3 text-[13px] font-semibold transition-colors ${
                                    expandedSubCategory === subIndex ? 'text-[#C82128]' : 'text-[#555] hover:text-[#C82128]'
                                  }`}
                                >
                                  <span>{sub.name}</span>
                                  {sub.subSubs.length > 0 && (
                                    expandedSubCategory === subIndex ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />
                                  )}
                                </button>

                                {/* Sub-subcategories */}
                                {expandedSubCategory === subIndex && sub.subSubs.length > 0 && (
                                  <div className="bg-gray-100/30 py-1">
                                    {sub.subSubs.map((subSub, ssIndex) => (
                                      <Link
                                        key={ssIndex}
                                        href="#"
                                        className="block pl-16 pr-4 py-2.5 text-[12px] font-medium text-gray-500 hover:text-[#C82128] hover:bg-gray-100/50"
                                      >
                                        {subSub}
                                      </Link>
                                    ))}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center shrink-0">
              <div className="bg-white p-1 rounded-full w-20 lg:w-24 h-8 lg:h-10 flex items-center justify-center">
                <span className="text-[10px] lg:text-sm font-black text-[#C82128] tracking-tighter uppercase px-1">SHWAPNO</span>
              </div>
            </Link>

            <Button variant="outline" className="hidden lg:flex items-center gap-2 bg-transparent border-white/30 text-white hover:bg-white/10 rounded-md text-xs font-semibold h-9">
              <MapPin className="h-4 w-4" />
              <span>Select your delivery location</span>
            </Button>
          </div>

          {/* Search Bar - Now visible on all screens */}
          <div className="flex-1 max-w-2xl mx-0.5 lg:mx-auto flex items-center h-8 lg:h-9">
            <div className="relative w-full h-full flex items-center">
              <Input
                placeholder="Search products..."
                className="bg-white text-black border-none h-full w-full rounded-l-md rounded-r-none placeholder:text-gray-400 text-[10px] lg:text-sm focus-visible:ring-0 px-2"
              />
              <Button
                className="bg-[#FFD35E] hover:bg-[#FFD35E]/90 text-black h-full px-2 lg:px-5 rounded-l-none rounded-r-md border-none shadow-none"
              >
                <Search className="h-3.5 w-3.5 lg:h-5 lg:w-5 stroke-[2.5px] text-black" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1 lg:gap-3 shrink-0">
            <Button variant="outline" className="hidden lg:flex items-center gap-2 bg-transparent border-white/30 text-white hover:bg-white/10 rounded-[5px] h-9 text-xs font-bold px-4">
              <span>বাংলা</span>
            </Button>

            <Link href="/account" className="flex items-center">
              <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-[5px] h-8 lg:h-9 text-[10px] lg:text-xs font-bold px-1.5 lg:px-4 flex items-center gap-1 lg:gap-2">
                <User className="h-4 w-4 lg:h-4 lg:w-4" />
                <span className="hidden sm:inline">Sign in / Sign up</span>
              </Button>
            </Link>
          </div>
        </div>

      </div>

      {/* Tier 2: White Background Sub-Header */}
      <div className="bg-white border-b border-gray-100 overflow-x-auto no-scrollbar">
        <div className="w-full mx-auto px-4 lg:px-10">
          <div className="flex h-10 items-center justify-between min-w-max lg:min-w-0">
            <nav className="flex items-center h-full">
              <div className="hidden lg:flex items-center gap-2 font-black text-[11px] uppercase tracking-wider text-[#3c3e44] cursor-pointer hover:text-[#C82128] w-63.75 h-full pr-4 border-r border-gray-100">
                <Menu className="h-4 w-4" />
                SHOP BY CATEGORY
              </div>
              <div className="flex items-center gap-4 lg:gap-6 lg:ml-6">
                {[
                  "RAMADAN SPECIAL", "GREAT DEALS", "UNILEVER-STOCK & SAVE",
                  "BUY & SAVE MORE", "OUR BRANDS", "WOMEN'S CORNER"
                ].map((item) => (
                  <Link key={item} href="#" className="text-[10px] lg:text-[11px] font-black uppercase tracking-wider text-[#3c3e44] hover:text-[#C82128] whitespace-nowrap transition-colors">
                    {item}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="flex items-center gap-6">
              <Link href="#" className="flex items-center gap-1.5 text-[11px] font-bold text-[#3c3e44] hover:text-[#C82128]">
                <MapPin className="h-3.5 w-3.5 text-[#C82128]" />
                Our outlets
              </Link>
              <Link href="#" className="flex items-center gap-1.5 text-[11px] font-bold text-[#3c3e44] hover:text-[#C82128]">
                <Phone className="h-3.5 w-3.5 text-[#C82128]" />
                Help line
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
