"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronRight, Home, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomProductCard from "@/components/ui/custom/ProductCard";
import ImageWithFallback from "@/components/ui/ImageWithFallback";

// Category Banner Images Map
const CATEGORY_BANNERS: Record<string, string> = {
  food: "/65f7ef3a115075f231e964dc_Food.png",
  "home-cleaning": "/661f4e01c15481a97eed7698_Home Cleaning_300.png",
  beauty: "/66b826195c414d20bf52e59b_Shampoo_300.png",
  baby: "/65ffaf59d2372028beccb0a7_baby food & care_300.webp",
  fashion: "/6682c9ddae2c9abd70f18c50_fashion and lifestyle_300.png",
};
const MOCK_DB = [
  { id: 1, name: "Fresh Instant Full Cream Milk Powder 500gm", image: "/product/65fa9509115075f231ec6e53_Fresh-Instant-Full-Cream-Milk-Powder-500gm_1_220.webp", oldPrice: 480, newPrice: 435, discount: 45, unit: "Per Piece", category: "food", sub: "beverages" },
  { id: 2, name: "Diploma Instant Full Cream Milk Powder 500gm", image: "/product/65fa9503115075f231ec697e_Diploma-Instant-Full-Cream-Milk-Powder-500gm-Foil-Pack_1_220.webp", oldPrice: 460, newPrice: 410, discount: 50, unit: "Per Piece", category: "food", sub: "beverages" },
  { id: 3, name: "Danish Full Cream Milk Powder 1kg", image: "/product/65fa9520115075f231ec83c2_Danish-Full-Cream-Milk-Powder-1kg_1_220.webp", oldPrice: 1300, newPrice: 1200, discount: 100, unit: "Per Piece", category: "food", sub: "beverages" },
  { id: 4, name: "Nescafe Classic Coffee 100gm", image: "/product/65fa9389115075f231ec4af2_Nescafe-Classic-Coffee-100gm-Glass-Bottle_1_220.webp", oldPrice: 350, newPrice: 299, discount: 51, unit: "Per Piece", category: "food", sub: "beverages" },
  { id: 5, name: "Surf Excel Detergent 1kg", image: "/product/68b575087d266676045747a7_Surf-Excel-1kg_1_220.webp", oldPrice: 420, newPrice: 365, discount: 55, unit: "Per Piece", category: "home-cleaning", sub: "laundry" },
  { id: 6, name: "Vim Dishwash Liquid 950ml", image: "/product/689dd7ab532fe2c42ca82761_Vim-Dishwash-Liquid-95050ml_1_220.webp", oldPrice: 280, newPrice: 245, discount: 35, unit: "Per Piece", category: "home-cleaning", sub: "dish-cleaner" },
  { id: 7, name: "Aarong Dairy UHT Milk 1L", image: "/product/6682cb180a54717fc7e72781_Liquid & UHT Milk 2_300.png", oldPrice: 120, newPrice: 99, discount: 21, unit: "Per Piece", category: "food", sub: "dairy" },
  { id: 8, name: "Radhuni Turmeric Powder 500gm", image: "/product/660112dd4744fb420cd5934b_spices_300.webp", oldPrice: 180, newPrice: 145, discount: 35, unit: "Per Piece", category: "food", sub: "spices" },
  { id: 9, name: "Pran Chinigura Rice 5kg", image: "/product/6621025ad66f7762f1e65133_Fresh-Fruit_300.webp", oldPrice: 650, newPrice: 580, discount: 70, unit: "Per Piece", category: "food", sub: "rice" },
  { id: 10, name: "Shwapno Salt 1kg", image: "/product/66011327d918e48902374088_Salt Sugar_300.webp", oldPrice: 45, newPrice: 35, discount: 10, unit: "Per Piece", category: "food", sub: "essentials" },
  { id: 11, name: "Unilever Sunlight Soap 4pcs", image: "/product/69a001f5e42d6823d84676f0_uniliverbanner_D_1_1552.webp", oldPrice: 80, newPrice: 65, discount: 15, unit: "Per Piece", category: "home-cleaning", sub: "soap" },
  { id: 12, name: "Baby Food & Care Essential", image: "/product/65ffaf59d2372028beccb0a7_baby food & care_300.webp", oldPrice: 350, newPrice: 299, discount: 51, unit: "Per Piece", category: "baby", sub: "food" },
  { id: 13, name: "Shampoo Anti Dandruff 200ml", image: "/product/66b826195c414d20bf52e59b_Shampoo_300.png", oldPrice: 280, newPrice: 245, discount: 35, unit: "Per Piece", category: "beauty", sub: "haircare" },
  { id: 14, name: "Conditioner Smooth & Shine 200ml", image: "/product/66b82633367d9a39bc43ec05_Conditioner_300.png", oldPrice: 250, newPrice: 215, discount: 35, unit: "Per Piece", category: "beauty", sub: "haircare" },
  { id: 15, name: "Home Cleaning Combo Pack", image: "/product/661f4e01c15481a97eed7698_Home Cleaning_300.png", oldPrice: 550, newPrice: 450, discount: 100, unit: "Per Piece", category: "home-cleaning", sub: "combo" },
  { id: 16, name: "Fashion & Lifestyle Essentials", image: "/product/6682c9ddae2c9abd70f18c50_fashion and lifestyle_300.png", oldPrice: 1200, newPrice: 999, discount: 201, unit: "Per Piece", category: "fashion", sub: "lifestyle" },
];

export default function CategoryPage() {
  const params = useParams();
  const rawSlug = params.slug;
  const routeSlugs: string[] = Array.isArray(rawSlug) ? [...rawSlug] : (typeof rawSlug === "string" ? [rawSlug] : []);
  
  const rootCategory = routeSlugs[0] || "Products";
  const title = (routeSlugs[routeSlugs.length - 1] || "").replace(/-/g, " ") || "All Products";
  
  const [sortMethod, setSortMethod] = useState("default");
  
  // Filter states
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [deliveryTime, setDeliveryTime] = useState<string>("all");
  const [expressDelivery, setExpressDelivery] = useState(false);
  const [freeShipping, setFreeShipping] = useState(false);

  // Use useMemo for derived state (sorting/filtering)
  const products = useMemo(() => {
    let sorted = [...MOCK_DB];
    
    // Filter by category
    if (rootCategory !== "products") {
       sorted = sorted.filter(p => p.category === rootCategory || rootCategory === "all");
    }

    // Filter by price range
    sorted = sorted.filter(p => p.newPrice >= priceRange[0] && p.newPrice <= priceRange[1]);

    // Filter by express delivery (mock - all products have express delivery)
    if (expressDelivery) {
      sorted = sorted.filter(p => p.id % 2 === 0); // Mock: even IDs have express delivery
    }

    // Filter by free shipping (mock - products over 500 have free shipping)
    if (freeShipping) {
      sorted = sorted.filter(p => p.newPrice >= 500);
    }

    // Filter by delivery time
    if (deliveryTime === "1-2h") {
      sorted = sorted.filter(p => p.id % 3 !== 0); // Mock filtering
    } else if (deliveryTime === "same-day") {
      sorted = sorted.filter(p => p.id % 2 === 0); // Mock filtering
    }

    // Sort
    if (sortMethod === "price-asc") {
      sorted.sort((a, b) => a.newPrice - b.newPrice);
    } else if (sortMethod === "price-desc") {
      sorted.sort((a, b) => b.newPrice - a.newPrice);
    } else if (sortMethod === "best-sale" || sortMethod === "newest") {
      sorted.reverse();
    }

    return sorted;
  }, [sortMethod, rootCategory, priceRange, deliveryTime, expressDelivery, freeShipping]);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3 hidden md:block px-4 lg:px-10">
        <nav className="max-w-350 mx-auto flex items-center text-[13px] text-[#77797D] font-medium whitespace-nowrap overflow-x-auto scrollbar-hide">
          <Link href="/" className="hover:text-[#D11218] flex items-center gap-1 shrink-0">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {routeSlugs.map((slugSegment, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400 shrink-0" />
              <Link 
                href={`/category/${routeSlugs.slice(0, idx + 1).join("/")}`} 
                className={`capitalize ${idx === routeSlugs.length - 1 ? "text-gray-900 font-bold" : "hover:text-[#D11218]"}`}
              >
                {decodeURIComponent(slugSegment).replace(/-/g, " ")}
              </Link>
            </React.Fragment>
          ))}
        </nav>
      </div>

      <div className="max-w-350 mx-auto ">
        {/* Thematic Banner - Full Width */}
        <div className="w-full h-32 sm:h-40 md:h-65 relative overflow-hidden mb-4">
           {/* Category Image Background */}
           {CATEGORY_BANNERS[rootCategory] ? (
             <ImageWithFallback 
               src={CATEGORY_BANNERS[rootCategory]}
               alt={title}
               fill
               className="object-fit"
               priority
             />
           ) : (
             <div className="absolute inset-0 bg-linear-to-r from-emerald-800 to-green-600"></div>
           )}
        </div>

        {/* Sorting Pills Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sticky top-14 md:top-32 z-20 bg-white/95 backdrop-blur-md py-3  border-b border-gray-100 rounded-xl">
           <div className="flex items-center flex-wrap gap-2 text-[14px] font-bold text-gray-700 w-full sm:w-auto overflow-x-auto scrollbar-hide pb-1 sm:pb-0">
             <span className="mr-3 shrink-0 uppercase tracking-wider text-[11px] md:text-[13px] text-gray-500 font-bold">SORT BY :</span>
             
             <button 
               onClick={() => setSortMethod('default')}
               className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full transition-all border text-[12px] md:text-[13px] whitespace-nowrap font-black tracking-tight ${
                 sortMethod === 'default' 
                   ? 'bg-[#FFD200] border-[#FFD200] text-black' 
                   : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
               }`}
             >
               Default
             </button>
             <button 
               onClick={() => setSortMethod('best-sale')}
               className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full transition-all border text-[12px] md:text-[13px] whitespace-nowrap font-black tracking-tight ${
                 sortMethod === 'best-sale' 
                    ? 'bg-[#FFD200] border-[#FFD200] text-black' 
                   : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
               }`}
             >
               Best sale
             </button>
             <button 
               onClick={() => setSortMethod('price-asc')}
               className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full transition-all border text-[12px] md:text-[13px] whitespace-nowrap font-black tracking-tight ${
                 sortMethod === 'price-asc' 
                   ? 'bg-[#FFD200] border-[#FFD200] text-black' 
                   : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
               }`}
             >
               Price asc
             </button>
             <button 
               onClick={() => setSortMethod('price-desc')}
               className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full transition-all border text-[12px] md:text-[13px] whitespace-nowrap font-black tracking-tight ${
                 sortMethod === 'price-desc' 
                    ? 'bg-[#FFD200] border-[#FFD200] text-black' 
                   : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
               }`}
             >
               Price desc
             </button>
             <button 
               onClick={() => setSortMethod('newest')}
               className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full transition-all border text-[12px] md:text-[13px] whitespace-nowrap font-black tracking-tight ${
                 sortMethod === 'newest' 
                    ? 'bg-[#FFD200] border-[#FFD200] text-black' 
                   : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
               }`}
             >
               Newest
             </button>
           </div>
           
           <p className="text-[13px] text-gray-500 font-bold whitespace-nowrap shrink-0">
             Showing {products.length} Products
           </p>
        </div>

        {/* Filters and Product Grid Layout */}
        <div className="flex gap-6 lg:gap-8">
          {/* Left Sidebar - Filters */}
          <div className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-40 space-y-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                Filters
              </h3>

              {/* Price Range Filter */}
              <div className="pb-6 border-b border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3 text-[13px] uppercase tracking-wide">Price Range</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C82128] focus:border-transparent"
                      placeholder="Min"
                      min="0"
                    />
                    <span className="text-gray-400">-</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-full px-2 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#C82128] focus:border-transparent"
                      placeholder="Max"
                      min="0"
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>৳{priceRange[0]}</span>
                    <span>৳{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Delivery Time Filter */}
              <div className="pb-6 border-b border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3 text-[13px] uppercase tracking-wide">Delivery Time</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="delivery-time"
                      checked={deliveryTime === "all"}
                      onChange={() => setDeliveryTime("all")}
                      className="w-4 h-4 text-[#C82128] focus:ring-[#C82128]"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#C82128] transition-colors">All Delivery Times</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="delivery-time"
                      checked={deliveryTime === "1-2h"}
                      onChange={() => setDeliveryTime("1-2h")}
                      className="w-4 h-4 text-[#C82128] focus:ring-[#C82128]"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#C82128] transition-colors">Within 1-2 Hours</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="radio"
                      name="delivery-time"
                      checked={deliveryTime === "same-day"}
                      onChange={() => setDeliveryTime("same-day")}
                      className="w-4 h-4 text-[#C82128] focus:ring-[#C82128]"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#C82128] transition-colors">Same Day Delivery</span>
                  </label>
                </div>
              </div>

              {/* Express Delivery Filter */}
              <div className="pb-6 border-b border-gray-200">
                <h4 className="font-bold text-gray-800 mb-3 text-[13px] uppercase tracking-wide">Express Delivery</h4>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={expressDelivery}
                    onChange={(e) => setExpressDelivery(e.target.checked)}
                    className="w-4 h-4 text-[#C82128] focus:ring-[#C82128] rounded"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-[#C82128] transition-colors">Enable Express Delivery</span>
                </label>
              </div>

              {/* Free Shipping Filter */}
              <div>
                <h4 className="font-bold text-gray-800 mb-3 text-[13px] uppercase tracking-wide">Free Shipping</h4>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={freeShipping}
                    onChange={(e) => setFreeShipping(e.target.checked)}
                    className="w-4 h-4 text-[#C82128] focus:ring-[#C82128] rounded"
                  />
                  <span className="text-sm text-gray-700 group-hover:text-[#C82128] transition-colors">Free Shipping Available</span>
                </label>
              </div>
            </div>
          </div>

          {/* Product Grid Area */}
          <div className="flex-1">
            {/* Product Grid (4 columns on Desktop) */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-5">
               {products.length > 0 ? (
                 products.map((product) => (
                   <CustomProductCard
                     key={product.id}
                     id={String(product.id)}
                     name={product.name}
                     image={product.image}
                     price={product.newPrice}
                     originalPrice={product.oldPrice}
                     unit={product.unit}
                     discount={`৳${product.discount} OFF`}
                   />
                 ))
               ) : (
                 <div className="col-span-full py-20 flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-200 rounded-xl bg-gray-50/50">
                    <SlidersHorizontal className="w-12 h-12 text-gray-300 mb-4" />
                    <h3 className="text-xl font-black text-gray-900">No products found</h3>
                    <p className="text-gray-500 font-medium mt-2 max-w-sm">We couldn&apos;t find any items matching your current filters in this category.</p>
                    <Button 
                      onClick={() => {
                        setSortMethod("default");
                        setPriceRange([0, 2000]);
                        setDeliveryTime("all");
                        setExpressDelivery(false);
                        setFreeShipping(false);
                      }}
                      variant="outline"
                      className="mt-6 border-2 border-gray-200 font-bold text-gray-700 hover:bg-white"
                    >
                      Clear All Filters
                    </Button>
                 </div>
               )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
