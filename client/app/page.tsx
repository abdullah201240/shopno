
'use client'
import HomeHero from "@/components/home/HomeHero";
import BreadAndMore from "@/components/home/BreadAndMore";
import BestDeals from "@/components/home/BestDeals";
import WeekendDeals from "@/components/home/WeekendDeals";
import RecommendedForYou from "@/components/home/RecommendedForYou";
import HotAndTrending from "@/components/home/HotAndTrending";
import TrustBadges from "@/components/home/TrustBadges";
import PromoBannerGrid from "@/components/home/PromoBannerGrid";
import PopupBanner from "@/components/home/PopupBanner";
import { useState } from "react";

export default function Home() {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {/* Popup Banner */}
      {showPopup && <PopupBanner onClose={() => setShowPopup(false)} />}

      {/* Hero Section - Full Width */}
      <div className="w-full">
        <HomeHero />
      </div>
      
      {/* Other Sections - Constrained Width */}
      <div className="max-w-400 mx-auto px-4 lg:px-6 space-y-6 lg:space-y-8 pb-12">
        {/* Trust Badges */}
        <div className="hidden lg:block">
          <TrustBadges />
        </div>
        {/* Recommended for You */}
        <RecommendedForYou />

        {/* Hot & Trending */}
        <HotAndTrending />

        {/* Bread & More Section */}
        <BreadAndMore />

        {/* Best Deals Section */}
        <BestDeals />
        <WeekendDeals />
        <PromoBannerGrid/>
      </div>
    </>
  );
}
