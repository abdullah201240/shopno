
import HomeHero from "@/components/home/HomeHero";
import BreadAndMore from "@/components/home/BreadAndMore";
import BestDeals from "@/components/home/BestDeals";
import WeekendDeals from "@/components/home/WeekendDeals";
import RecommendedForYou from "@/components/home/RecommendedForYou";
import HotAndTrending from "@/components/home/HotAndTrending";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-6 space-y-6 lg:space-y-8 pb-12">
      {/* Hero Section (Sidebar + Slider + Trust Badges) */}
      <HomeHero />

      {/* Recommended for You */}
      <RecommendedForYou />

      {/* Hot & Trending */}
      <HotAndTrending />

      {/* Bread & More Section */}
      <BreadAndMore />

      {/* Best Deals Section */}
      <BestDeals />
      <WeekendDeals />

    </div>
  );
}
