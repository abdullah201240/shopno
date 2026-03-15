"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Star,
  ChevronRight,
  Home,
  Heart,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  ThumbsUp,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CustomProductCard from "@/components/ui/custom/ProductCard";
import { useCart } from "@/context/CartContext";

// Mock Data Source for fallback products
const MOCK_PRODUCT = {
  id: "1",
  name: "Fresh Instant Full Cream Milk Powder 500gm",
  brand: "Fresh",
  category: "Dairy & Bakery",
  sku: "FD-MILK-500",
  rating: 4.8,
  reviewsCount: 124,
  price: 435,
  originalPrice: 480,
  discount: "৳45 OFF",
  unit: "Per Piece",
  inStock: true,
  images: [
    "/product/65fa9509115075f231ec6e53_Fresh-Instant-Full-Cream-Milk-Powder-500gm_1_220.webp",
    "/product/65fa9503115075f231ec697e_Diploma-Instant-Full-Cream-Milk-Powder-500gm-Foil-Pack_1_220.webp", // Mocking secondary images
    "/product/65fa9520115075f231ec83c2_Danish-Full-Cream-Milk-Powder-1kg_1_220.webp"
  ],
  description:
    "Fresh Instant Full Cream Milk Powder is made from premium quality fresh cow's milk from selected farms. It is rich in calcium, protein, and essential vitamins necessary for strong bones and overall health. Perfect for tea, coffee, desserts, and daily consumption. Dissolves easily in water to give a creamy and natural taste of fresh milk.",
  specifications: [
    { label: "Brand", value: "Fresh" },
    { label: "Weight", value: "500 gm" },
    { label: "Type", value: "Full Cream Milk Powder" },
    { label: "Country of Origin", value: "Bangladesh" },
    { label: "Dietary Needs", value: "Halal" }
  ],
  reviews: [
    {
      id: 1,
      user: "Md. Rahman",
      rating: 5,
      date: "12 Mar 2026",
      comment: "Excellent quality milk powder. Good for daily tea and coffee. Highly recommended!",
      likes: 12
    },
    {
      id: 2,
      user: "Sadia Islam",
      rating: 4,
      date: "05 Mar 2026",
      comment: "Taste is good but packaging could be better. Dissolves perfectly fine.",
      likes: 5
    },
    {
      id: 3,
      user: "Abdullah Sakib",
      rating: 5,
      date: "28 Feb 2026",
      comment: "Best price point compared to local stores and super fast delivery.",
      likes: 24
    }
  ]
};

const RELATED_PRODUCTS = [
  {
    id: "2",
    name: "Diploma Instant Full Cream Milk Powder 500gm",
    image: "/product/65fa9503115075f231ec697e_Diploma-Instant-Full-Cream-Milk-Powder-500gm-Foil-Pack_1_220.webp",
    oldPrice: 460,
    newPrice: 410,
    discount: 50,
    unit: "Per Piece",
  },
  {
    id: "3",
    name: "Danish Full Cream Milk Powder 1kg",
    image: "/product/65fa9520115075f231ec83c2_Danish-Full-Cream-Milk-Powder-1kg_1_220.webp",
    oldPrice: 1300,
    newPrice: 1200,
    discount: 100,
    unit: "Per Piece",
  },
  {
    id: "6",
    name: "Nescafe Classic Coffee 100gm Glass Bottle",
    image: "/product/65fa9389115075f231ec4af2_Nescafe-Classic-Coffee-100gm-Glass-Bottle_1_220.webp",
    oldPrice: 350,
    newPrice: 299,
    discount: 51,
    unit: "Per Piece",
  },
  {
    id: "10",
    name: "Surf Excel Detergent 1kg",
    image: "/product/68b575087d266676045747a7_Surf-Excel-1kg_1_220.webp",
    oldPrice: 420,
    newPrice: 365,
    discount: 55,
    unit: "Per Piece",
  }
];

export default function ProductDetailsPage() {
  const params = useParams();
  const productId = params.id as string;
  
  // In a real app we would fetch the product by ID here. Using mock data for demo.
  const product = MOCK_PRODUCT;

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "reviews">("desc");

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      unit: product.unit,
      quantity: quantity
    });
    // optionally give toast feedback here
  };

  // Zoom feature state
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomTransform, setZoomTransform] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomTransform({
      transformOrigin: `${x}% ${y}%`,
      transform: "scale(2.2)", // Magnification strength
    });
  };

  return (
    <div >
      <div  >
        <div className="max-w-350 mx-auto">
          <nav className="flex items-center text-[13px] text-gray-500 font-medium">
            <Link href="/" className="hover:text-brand-primary flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <Link href="#" className="hover:text-brand-primary">
              {product.category}
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            <span className="text-gray-900 truncate max-w-[300px]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-350 mx-auto">
        
        {/* TOP SECTION: Images & Core Info */}
        <div className="overflow-hidden mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 lg:gap-12 p-0 md:p-8">
            
            {/* Gallery Left */}
            <div className="flex flex-col gap-4 p-4 md:p-0 bg-white">
              {/* Main Image View */}
              <div 
                className="relative aspect-square w-full mx-auto flex items-center justify-center overflow-hidden cursor-crosshair group/zoom"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => {
                  setIsZoomed(false);
                  setZoomTransform({});
                }}
                onMouseMove={handleMouseMove}
              >
                {product.discount && (
                  <Badge className="absolute top-4 left-4 bg-[#C82128] text-white z-10 px-2.5 py-1 text-xs font-black uppercase tracking-wider rounded border-none shadow-none">
                    {product.discount}
                  </Badge>
                )}
                
                <div 
                  className="relative w-full h-full transition-transform duration-100 ease-out"
                  style={isZoomed ? zoomTransform : {}}
                >
                  <Image
                    src={product.images[activeImage]}
                    alt={product.name}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative w-20 h-20  overflow-hidden p-2 transition-all ${
                      activeImage === idx 
                        ? "border-[#C82128] shadow-md shadow-red-100" 
                        : "border-gray-100 hover:border-gray-300"
                    }`}
                  >
                    <Image src={img} alt={`Thumbnail ${idx}`} fill className="object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details Right */}
            <div className="flex flex-col ">
              
              <div className="mb-2">
                <span className="text-[12px] font-bold text-[#C82128] bg-red-50 px-2 py-1 rounded inline-block uppercase tracking-wider">
                  {product.brand}
                </span>
              </div>
              
              <h1 className="text-xl md:text-2xl lg:text-[28px] leading-tight font-black text-gray-900 mb-3 tracking-tight">
                {product.name}
              </h1>

              {/* Ratings & SKU */}
              <div className="flex flex-wrap items-center gap-4 text-[13px] font-medium text-gray-500 mb-6">
                <div className="flex items-center gap-1.5 focus:outline-none cursor-pointer group">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className={`w-4 h-4 ${star <= Math.round(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-100 text-gray-200'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-700 font-bold">{product.rating}</span>
                  <span className="group-hover:text-brand-primary transition-colors">({product.reviewsCount} reviews)</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>SKU: {product.sku}</span>
              </div>

              {/* Pricing Canvas */}
              <div >
                <div className="flex flex-col gap-1">
                  <div className="flex items-end gap-3">
                    <span className="text-[34px] md:text-[40px] font-black text-[#C82128] leading-none tracking-tighter">
                      ৳{product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <div className="flex flex-col pb-1">
                        <span className="text-gray-400 font-bold line-through text-sm md:text-base leading-none">
                          ৳{product.originalPrice}
                        </span>
                      </div>
                    )}
                  </div>
                  <span className="text-[13px] text-gray-500 font-bold mt-2">Pack Size: {product.unit}</span>
                </div>
              </div>

              {/* Stock and Add to Cart Area */}
              <div className="flex flex-col gap-5 pb-8 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-bold text-gray-900">In Stock</span>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  
                  {/* Quantity Selector */}
                  <div className="flex justify-between items-center  h-14 w-full sm:w-36 px-2 bg-white flex-shrink-0">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 rounded-md transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="text-lg font-black text-gray-900 select-none">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-black hover:bg-gray-100 rounded-md transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Add action */}
                  <Button 
                    onClick={handleAddToCart}
                    className="flex-1 h-14 bg-[#C82128] hover:bg-[#A81A20] text-white font-black text-base shadow-xl shadow-red-500/20 active:scale-[0.98] transition-all rounded-lg"
                  >
                    Add {quantity} to Bag
                  </Button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 bg-white">
                  <div className="bg-red-50 p-2 rounded-full text-[#C82128]">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-gray-900">Fast Delivery</span>
                    <span className="text-[11px] text-gray-500">Within 1-2 hours</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 bg-white">
                  <div className="bg-green-50 p-2 rounded-full text-green-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] font-bold text-gray-900">Authentic 100%</span>
                    <span className="text-[11px] text-gray-500">Guaranteed quality</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Tabs (Details, Specs, Reviews) */}
        <div className="border-gray-100 md:border mb-12">
          {/* Tabs Navigation */}
          <div className="flex overflow-x-auto border-b border-gray-100 scrollbar-hide">
            {[
              { id: "desc", label: "Description" },
              { id: "specs", label: "Specifications" },
              { id: "reviews", label: `Reviews (${product.reviews.length})` }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative px-6 md:px-8 py-5 text-[15px] font-bold whitespace-nowrap transition-colors outline-none
                  ${activeTab === tab.id ? 'text-[#C82128]' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#C82128] rounded-t-full" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content Panels */}
          <div className="p-6 md:p-8 min-h-[300px]">
            {/* Description UI */}
            {activeTab === "desc" && (
              <div className="prose max-w-none text-gray-600 text-[15px] leading-relaxed">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Product Details</h3>
                <p>{product.description}</p>
              </div>
            )}

            {/* Specifications UI */}
            {activeTab === "specs" && (
              <div className="max-w-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                  {product.specifications.map((spec, idx) => (
                    <div 
                      key={idx} 
                      className={`flex border-b border-gray-100 last:border-0 ${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                    >
                      <div className="w-1/3 p-4 text-[14px] font-bold text-gray-600 border-r border-gray-100">
                        {spec.label}
                      </div>
                      <div className="w-2/3 p-4 text-[14px] text-gray-800 font-medium">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews UI */}
            {activeTab === "reviews" && (
              <div className="flex flex-col md:flex-row gap-10">
                
                {/* Review Analytics */}
                <div className="w-full md:w-1/3">
                  <h3 className="text-lg font-bold text-gray-900 mb-6">Customer Reviews</h3>
                  <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center">
                    <span className="text-[48px] font-black text-gray-900 leading-none mb-2">{product.rating}</span>
                    <div className="flex gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-500">Based on {product.reviewsCount} reviews</span>
                  </div>

                  {/* Rating Bars Placeholder */}
                  <div className="mt-8 flex flex-col gap-3">
                    {[
                      { s: 5, pct: 85 },
                      { s: 4, pct: 10 },
                      { s: 3, pct: 3 },
                      { s: 2, pct: 2 },
                      { s: 1, pct: 0 },
                    ].map(bar => (
                      <div key={bar.s} className="flex items-center gap-3">
                        <span className="text-xs font-bold w-12 text-gray-600">{bar.s} Stars</span>
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${bar.pct}%` }} />
                        </div>
                        <span className="text-xs font-medium text-gray-500 w-8 text-right">{bar.pct}%</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full mt-8 bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold h-12 transition-colors rounded-lg">
                    Write a Review
                  </Button>
                </div>

                {/* Review List */}
                <div className="w-full md:w-2/3 flex flex-col gap-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-6 mb-2 last:border-0 last:pb-0">
                      <div className="flex justify-between items-start mb-3">
                         <div className="flex gap-4 items-center">
                           <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-base">
                             {review.user.charAt(0)}
                           </div>
                           <div className="flex flex-col">
                             <span className="font-bold text-[15px] text-gray-900">{review.user}</span>
                             <div className="flex gap-0.5 mt-0.5">
                               {[...Array(5)].map((_, i) => (
                                 <Star 
                                   key={i} 
                                   className={`w-3.5 h-3.5 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-100 text-gray-200'}`} 
                                 />
                               ))}
                             </div>
                           </div>
                         </div>
                         <span className="text-[12px] text-gray-500 font-medium">{review.date}</span>
                      </div>
                      <p className="text-[14px] text-gray-600 leading-relaxed mb-4 pl-14">
                        {review.comment}
                      </p>
                      
                      <div className="flex items-center gap-4 pl-14">
                        <button className="flex items-center gap-1.5 text-[12px] font-bold text-gray-500 hover:text-gray-900 transition-colors">
                          <ThumbsUp className="w-3.5 h-3.5" />
                          Helpful ({review.likes})
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            )}
          </div>
        </div>
        
        {/* RELATED PRODUCTS */}
        <div className="mb-10">
           <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-6 px-4 md:px-0 tracking-tight">Similar Products</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 px-2 md:px-0">
             {RELATED_PRODUCTS.map((prod) => (
               <CustomProductCard
                 key={prod.id}
                 id={prod.id}
                 name={prod.name}
                 image={prod.image}
                 price={prod.newPrice}
                 originalPrice={prod.oldPrice}
                 unit={prod.unit}
                 discount={`৳${prod.discount} OFF`}
               />
             ))}
           </div>
        </div>

      </div>
    </div>
  );
}
