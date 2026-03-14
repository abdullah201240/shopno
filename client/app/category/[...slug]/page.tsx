"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ChevronRight, Home, SlidersHorizontal, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import CustomProductCard from "@/components/ui/custom/ProductCard";

// Mock Product Database for Category Page
const MOCK_DB = [
  { id: 1, name: "Fresh Instant Full Cream Milk Powder 500gm", image: "/product/65fa9509115075f231ec6e53_Fresh-Instant-Full-Cream-Milk-Powder-500gm_1_220.webp", oldPrice: 480, newPrice: 435, discount: 45, unit: "Per Piece", category: "food", sub: "beverages" },
  { id: 2, name: "Diploma Instant Full Cream Milk Powder 500gm", image: "/product/65fa9503115075f231ec697e_Diploma-Instant-Full-Cream-Milk-Powder-500gm-Foil-Pack_1_220.webp", oldPrice: 460, newPrice: 410, discount: 50, unit: "Per Piece", category: "food", sub: "beverages" },
  { id: 3, name: "Danish Full Cream Milk Powder 1kg", image: "/product/65fa9520115075f231ec83c2_Danish-Full-Cream-Milk-Powder-1kg_1_220.webp", oldPrice: 1300, newPrice: 1200, discount: 100, unit: "Per Piece", category: "food", sub: "beverages" },
  { id: 6, name: "Nescafe Classic Coffee 100gm", image: "/product/65fa9389115075f231ec4af2_Nescafe-Classic-Coffee-100gm-Glass-Bottle_1_220.webp", oldPrice: 350, newPrice: 299, discount: 51, unit: "Per Piece", category: "food", sub: "beverages" },
  { id: 10, name: "Surf Excel Detergent 1kg", image: "/product/68b575087d266676045747a7_Surf-Excel-1kg_1_220.webp", oldPrice: 420, newPrice: 365, discount: 55, unit: "Per Piece", category: "home-cleaning", sub: "laundry" },
  { id: 11, name: "Vim Dishwash Liquid 950ml", image: "/product/689dd7ab532fe2c42ca82761_Vim-Dishwash-Liquid-95050ml_1_220.webp", oldPrice: 280, newPrice: 245, discount: 35, unit: "Per Piece", category: "home-cleaning", sub: "dish-cleaner" },
];

export default function CategoryPage() {
  const params = useParams();
  const rawSlug = params.slug;
  const routeSlugs: string[] = Array.isArray(rawSlug) ? [...rawSlug] : (typeof rawSlug === "string" ? [rawSlug] : []);
  
  const rootCategory = routeSlugs[0] || "Products";
  const title = (routeSlugs[routeSlugs.length - 1] || "").replace(/-/g, " ") || "All Products";
  
  const [products, setProducts] = useState(MOCK_DB);
  const [sortMethod, setSortMethod] = useState("default");
  
  // Filter states (mocking functionality)
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [expressDelivery, setExpressDelivery] = useState(false);

  useEffect(() => {
    let sorted = [...MOCK_DB];
    
    // Filter
    if (rootCategory !== "products") {
       sorted = sorted.filter(p => p.category === rootCategory || rootCategory === "all");
    }

    // Sort
    if (sortMethod === "price-asc") {
      sorted.sort((a, b) => a.newPrice - b.newPrice);
    } else if (sortMethod === "price-desc") {
      sorted.sort((a, b) => b.newPrice - a.newPrice);
    } else if (sortMethod === "best-sale" || sortMethod === "newest") {
      // Mock best sale / newest by just reversing or a weak shuffle
      sorted.reverse();
    }

    setProducts(sorted);
  }, [sortMethod, rootCategory]);

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Top Breadcrumb */}
      <div className="bg-white border-b border-gray-100 py-3 hidden md:block px-4 lg:px-10">
        <nav className="max-w-[1400px] mx-auto flex items-center text-[13px] text-[#77797D] font-medium whitespace-nowrap overflow-x-auto scrollbar-hide">
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

      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 pt-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Left Sidebar Filters (Shwapno #F2F2F2 style boxes) */}
          <div className="hidden lg:block w-[260px] shrink-0">
            <div className="bg-[#F2F2F2] rounded-xl p-5 mb-4 border border-[#e5e5e5]">
               <h3 className="text-sm font-bold text-black mb-4 uppercase tracking-wide">Price</h3>
               <div className="flex flex-col gap-2">
                 <input type="range" className="w-full accent-[#D11218] cursor-pointer" min="10" max="5000" />
                 <div className="flex items-center justify-between text-xs font-bold text-[#D11218]">
                    <span>৳ 0</span>
                    <span>৳ 5000</span>
                 </div>
               </div>
            </div>

            <div className="bg-[#F2F2F2] rounded-xl p-5 mb-4 border border-[#e5e5e5]">
               <h3 className="text-sm font-bold text-black mb-4 uppercase tracking-wide">Delivery Options</h3>
               <div className="flex flex-col gap-3">
                 <label className="flex items-center gap-2 cursor-pointer group">
                   <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${expressDelivery ? 'bg-[#D11218] border-[#D11218]' : 'bg-white border-gray-300'}`}>
                     {expressDelivery && <Check className="w-3 h-3 text-white" />}
                   </div>
                   <input type="checkbox" className="hidden" checked={expressDelivery} onChange={() => setExpressDelivery(!expressDelivery)} />
                   <span className="text-[14px] text-gray-700 group-hover:text-[#D11218] font-medium transition-colors">Express Delivery (42)</span>
                 </label>
               </div>
            </div>
            
            <div className="bg-[#F2F2F2] rounded-xl p-5 border border-[#e5e5e5]">
               <h3 className="text-sm font-bold text-black mb-4 uppercase tracking-wide">Top Brands</h3>
               <div className="flex flex-col gap-3">
                 {['Fresh', 'Diploma', 'Nescafe', 'Unilever', 'Aarong Dairy'].map(brand => (
                   <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                     <div className="w-4 h-4 rounded border bg-white border-gray-300 flex items-center justify-center group-hover:border-[#D11218] transition-colors"></div>
                     <span className="text-[14px] text-gray-700 group-hover:text-[#D11218] font-medium transition-colors">{brand}</span>
                   </label>
                 ))}
               </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0">
            
            {/* Thematic Banner */}
            <div className="w-full h-[160px] md:h-[180px] bg-gradient-to-r from-emerald-800 to-green-600 rounded-2xl mb-6 relative overflow-hidden flex items-center px-6 md:px-10 shadow-sm">
               <div className="relative z-10 w-full sm:w-2/3">
                 <h1 className="text-3xl md:text-5xl font-black text-white capitalize drop-shadow-md mb-2 title-shadow">
                   {title}
                 </h1>
                 <p className="text-white/90 font-medium text-sm md:text-base hidden sm:block max-w-[80%]">
                   Hand-picked, premium quality {title.toLowerCase()} items delivered swiftly and securely directly to your doorstep.
                 </p>
               </div>
               
               {/* Decorative background curve */}
               <div className="absolute right-0 top-0 bottom-0 w-[60%] bg-black/10 rounded-l-full blur-2xl transform translate-x-1/3"></div>
               <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-white/10 rounded-l-full blur-xl transform translate-x-1/4"></div>
            </div>

            {/* Sorting Pills Bar (Shwapno Implementation) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sticky top-14 md:top-[128px] z-20 bg-white/95 backdrop-blur-md py-3 shadow-sm md:shadow-none border-b md:border-none border-gray-100 px-2 lg:px-0 rounded-xl md:rounded-none">
               <div className="flex items-center flex-wrap gap-2 text-[14px] font-bold text-gray-700 w-full sm:w-auto overflow-x-auto scrollbar-hide pb-1 sm:pb-0">
                 <span className="mr-1 md:mr-3 shrink-0 uppercase tracking-wider text-[11px] md:text-[13px] text-gray-500 hidden sm:inline-block">SORT BY :</span>
                 
                 {[
                   { label: 'Default', value: 'default' },
                   { label: 'Best sale', value: 'best-sale' },
                   { label: 'Price asc', value: 'price-asc' },
                   { label: 'Price desc', value: 'price-desc' },
                   { label: 'Newest', value: 'newest' }
                 ].map((pill) => (
                   <button 
                     key={pill.value}
                     onClick={() => setSortMethod(pill.value)}
                     className={`px-4 py-1.5 md:px-5 md:py-2 rounded-full transition-all border text-[12px] md:text-[13px] whitespace-nowrap font-black tracking-tight ${
                       sortMethod === pill.value 
                         ? 'bg-[#FFD200] border-[#FFD200] text-black shadow-sm' 
                         : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                     }`}
                   >
                     {pill.label}
                   </button>
                 ))}
               </div>
               
               <p className="text-[13px] text-gray-500 font-bold whitespace-nowrap shrink-0 hidden md:block">
                 Showing {products.length} Products
               </p>
            </div>

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
                    <p className="text-gray-500 font-medium mt-2 max-w-sm">We couldn't find any items matching your current filters in this category.</p>
                    <Button 
                      onClick={() => setSortMethod("default")}
                      variant="outline"
                      className="mt-6 border-2 border-gray-200 font-bold text-gray-700 hover:bg-white"
                    >
                      Clear Filters
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
