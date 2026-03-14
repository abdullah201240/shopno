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

        {/* Premium Promo Banner Section */}
        <section className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Banner 1 - Fresh Vegetables */}
            <div className="relative h-72 rounded-3xl overflow-hidden group cursor-pointer shadow-premium hover:shadow-premium-lg transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=400&fit=crop" 
                alt="Fresh Winter Vegetables Promo"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 via-brand-primary/70 to-transparent"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              
              <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1.5 rounded-full w-fit">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  New Season
                </span>
                <h3 className="text-3xl md:text-4xl font-black mb-3 leading-tight">
                  Fresh Winter <br /> Vegetables
                </h3>
                <p className="text-sm font-semibold opacity-90 mb-5">Direct from local farms</p>
                <button type="button" className="bg-white text-brand-primary font-bold px-6 py-2.5 rounded-xl text-sm w-fit transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 flex items-center gap-2">
                  Grab Offer
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Banner 2 - Personal Care */}
            <div className="relative h-72 rounded-3xl overflow-hidden group cursor-pointer shadow-premium hover:shadow-premium-lg transition-all duration-500">
              <Image 
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=400&fit=crop" 
                alt="Personal Care Essentials Promo"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-600/70 to-transparent"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              
              <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
                <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1.5 rounded-full w-fit">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                  Health & Beauty
                </span>
                <h3 className="text-3xl md:text-4xl font-black mb-3 leading-tight">
                  Personal Care <br /> Essentials
                </h3>
                <p className="text-sm font-semibold opacity-90 mb-5">Flat 15% Cashback</p>
                <button type="button" className="bg-white text-blue-600 font-bold px-6 py-2.5 rounded-xl text-sm w-fit transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 flex items-center gap-2">
                  Explore Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
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

        {/* Premium Newsletter / App Promo */}
        <section className="py-12 mb-12">
          <div className="relative bg-gradient-to-br from-brand-primary/5 via-orange-50/50 to-brand-secondary/5 rounded-[40px] p-8 md:p-16 border border-brand-primary/10 overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 rounded-full blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              <div className="max-w-xl space-y-6 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></span>
                  Download Now
                </div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  Get your groceries in <span className="text-gradient-primary">60 minutes!</span>
                </h2>
                <p className="text-muted-foreground text-lg font-medium">
                  Download the SHOPNO app today and get <span className="text-brand-primary font-bold">৳100 discount</span> on your first order. Use code: 
                  <span className="inline-block bg-white px-3 py-1 rounded-lg font-black text-brand-primary ml-2 shadow-sm border border-brand-primary/10">FIRST100</span>
                </p>
                <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                  {/* App Store Button */}
                  <button type="button" className="h-14 w-44 bg-black rounded-2xl flex items-center px-4 gap-3 active:scale-95 transition-all duration-300 shadow-premium hover:shadow-premium-lg hover:scale-105">
                    <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center">
                      <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] text-zinc-400">Download on the</div>
                      <div className="text-white font-bold leading-none">App Store</div>
                    </div>
                  </button>
                  
                  {/* Play Store Button */}
                  <button type="button" className="h-14 w-44 bg-black rounded-2xl flex items-center px-4 gap-3 active:scale-95 transition-all duration-300 shadow-premium hover:shadow-premium-lg hover:scale-105">
                    <div className="h-8 w-8 bg-white rounded-lg flex items-center justify-center">
                      <svg className="h-5 w-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-[10px] text-zinc-400">Get it on</div>
                      <div className="text-white font-bold leading-none">Google Play</div>
                    </div>
                  </button>
                </div>
              </div>
              
              {/* Phone Mockup */}
              <div className="relative z-10 hidden lg:block">
                <div className="w-64 h-[500px] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-orange-500 to-brand-secondary flex items-center justify-center">
                    <span className="font-black text-4xl text-white">SHOPNO</span>
                  </div>
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-800 rounded-b-xl"></div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 h-16 w-16 bg-brand-secondary rounded-2xl shadow-premium-lg flex items-center justify-center animate-float">
                  <span className="text-2xl">🥬</span>
                </div>
                <div className="absolute -bottom-4 -left-4 h-14 w-14 bg-brand-gold rounded-xl shadow-premium-lg flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                  <span className="text-xl">🍎</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
