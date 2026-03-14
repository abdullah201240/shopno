import Link from "next/link";
import Image from "next/image";
import { Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HomeHero from "@/components/home/HomeHero";
import CategoryGrid from "@/components/home/CategoryGrid";
import ProductGrid from "@/components/home/ProductGrid";
import HotAndTrending from "@/components/home/HotAndTrending";
import BreadAndMore from "@/components/home/BreadAndMore";
import { MOCK_PRODUCTS as trendingProducts } from "@/lib/data/products";

export default function Home() {
  return (
    <div className="container mx-auto px-4 lg:px-6 space-y-8 pb-12">
      {/* Hero Section (Sidebar + Slider + Trust Badges) */}
      <HomeHero />

      {/* Categories Grid (Shop by Category) */}
      <CategoryGrid />

      {/* Recommended For You Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-black uppercase tracking-tight text-[#C82128]">Recommended For You</h2>
          </div>
          <Link href="/shop" className="text-sm font-bold text-gray-500 hover:text-[#C82128] transition-colors">
            View All
          </Link>
        </div>
        <ProductGrid products={trendingProducts} />
      </section>

      {/* Middle Promo Banners - 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="group relative aspect-[16/9] overflow-hidden rounded-xl bg-muted border border-border/50 shadow-sm hover:shadow-md transition-all">
            <Image
              src={`/poster/${i}.png`} 
              alt={`Promo ${i}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              unoptimized
            />
          </div>
        ))}
      </div>

      {/* Trending Products Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black uppercase tracking-tight text-[#C82128]">Trending Products</h2>
          <Link href="/shop" className="text-sm font-bold text-gray-500 hover:text-[#C82128] transition-colors">
            View All
          </Link>
        </div>
        <ProductGrid products={trendingProducts} />
      </section>

      {/* Bread & More Section */}
      <BreadAndMore />

      {/* Download App Banner - Shwapno Style */}
      <div className="relative overflow-hidden rounded-2xl bg-[#C82128] p-8 md:p-12 text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
          <Sparkles className="w-full h-full rotate-12" />
        </div>
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black leading-tight">
              Get the best grocery <br className="hidden md:block" /> deals on your phone!
            </h2>
            <p className="text-white/80 text-lg font-medium">
              Download the Shwapno app and enjoy exclusive offers and faster checkout.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-white text-black hover:bg-white/90 font-bold px-8 h-12 rounded-lg">
                App Store
              </Button>
              <Button className="bg-black text-white hover:bg-black/90 font-bold px-8 h-12 rounded-lg border border-white/20">
                Play Store
              </Button>
            </div>
          </div>
          <div className="hidden md:flex justify-end">
             <div className="relative w-64 h-[450px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-800 rounded-b-xl" />
                <Image 
                  src="/poster/1.png"
                  alt="App Preview"
                  fill
                  className="object-cover opacity-80"
                  unoptimized
                />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
