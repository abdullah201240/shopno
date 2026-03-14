"use client";

import React from "react";
import { 
  Apple, 
  Baby, 
  SprayCan,
  Dog,
  Sparkles
} from "lucide-react";
import CategorySidebar from "./CategorySidebar";
import HeroSlider from "./HeroSlider";
import PromoCategorySlider from "./PromoCategorySlider";
import TrustBadges from "./TrustBadges";

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
  return (
    <section className="relative z-0">
      <div className="flex flex-col lg:flex-row gap-0 lg:gap-4 h-auto">
        {/* Left Sidebar */}
        <CategorySidebar categories={sidebarCategories} />

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col gap-4 h-[550px]">
          {/* Slider Section */}
          <HeroSlider banners={banners} />

          {/* Promo Category Row - Slider */}
          <PromoCategorySlider categories={promoCategories} />
        </div>
      </div>

      {/* Trust Badges */}
      <TrustBadges />
    </section>
  );
};

export default HomeHero;
