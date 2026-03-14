import Image from "next/image";
import MainLayout from "@/components/layout/MainLayout";
import HomeHero from "@/components/home/HomeHero";
import CategoryGrid from "@/components/home/CategoryGrid";
import ProductGrid from "@/components/home/ProductGrid";
import { MOCK_PRODUCTS, NEW_ARRIVALS } from "@/lib/data/products";

export default function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 lg:px-6">
        <HomeHero />
        
        <CategoryGrid />
        
        <ProductGrid 
          title="Trending Products" 
          subtitle="Top picks from our community this week" 
          products={MOCK_PRODUCTS} 
          viewAllLink="/trending"
        />

        {/* Promo Banner Section */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer">
               <Image 
                 src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop" 
                 alt="Fresh Winter Vegetables Promo"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-transparent flex flex-col justify-center p-8 text-white">
                  <span className="font-black text-xs uppercase tracking-widest mb-2">New Season</span>
                  <h3 className="text-3xl font-black mb-4 leading-tight">Fresh Winter <br /> Vegetables</h3>
                  <p className="text-sm font-bold opacity-90 mb-6">Direct from local farms</p>
                  <button type="button" className="bg-white text-orange-600 font-black px-6 py-2.5 rounded-xl text-sm w-fit transition-all active:scale-95">Grab Offer</button>
               </div>
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden group cursor-pointer">
               <Image 
                 src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=400&fit=crop" 
                 alt="Personal Care Essentials Promo"
                 fill
                 className="object-cover group-hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-transparent flex flex-col justify-center p-8 text-white">
                  <span className="font-black text-xs uppercase tracking-widest mb-2">Health & Beauty</span>
                  <h3 className="text-3xl font-black mb-4 leading-tight">Personal Care <br /> Essentials</h3>
                  <p className="text-sm font-bold opacity-90 mb-6">Flat 15% Cashback</p>
                  <button type="button" className="bg-white text-blue-600 font-black px-6 py-2.5 rounded-xl text-sm w-fit transition-all active:scale-95">Explore Now</button>
               </div>
            </div>
          </div>
        </section>

        <ProductGrid 
          title="New Arrivals" 
          subtitle="Be the first to try our latest additions" 
          products={NEW_ARRIVALS} 
          viewAllLink="/new-arrivals"
        />

        {/* Newsletter / App Promo */}
        <section className="py-12 mb-12">
          <div className="bg-brand-primary/5 rounded-[40px] p-8 md:p-16 border border-brand-primary/10 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
            
            <div className="max-w-xl space-y-6 relative z-10">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Get your groceries in <span className="text-brand-primary">60 minutes!</span></h2>
              <p className="text-muted-foreground text-lg font-medium">Download the SHOPNO app today and get ৳100 discount on your first order. Use code: <span className="bg-white px-2 py-1 rounded inline-block font-black text-brand-primary">FIRST100</span></p>
              <div className="flex flex-wrap gap-4 pt-4">
                 <button type="button" className="h-14 w-44 bg-black rounded-2xl flex items-center px-4 gap-3 active:scale-95 transition-transform shadow-lg shadow-black/20">
                    <div className="h-8 w-8 bg-white rounded-full"></div>
                    <div className="text-left"><div className="text-[10px] text-zinc-400">Download on the</div><div className="text-white font-bold leading-none">App Store</div></div>
                 </button>
                 <button type="button" className="h-14 w-44 bg-black rounded-2xl flex items-center px-4 gap-3 active:scale-95 transition-transform shadow-lg shadow-black/20">
                    <div className="h-8 w-8 bg-white rounded-full"></div>
                    <div className="text-left"><div className="text-[10px] text-zinc-400">Get it on</div><div className="text-white font-bold leading-none">Google Play</div></div>
                 </button>
              </div>
            </div>
            <div className="relative z-10 hidden lg:block">
               <div className="w-64 h-[500px] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-brand-primary flex items-center justify-center font-black text-4xl text-white">SHOPNO</div>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-800 rounded-b-xl"></div>
               </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
