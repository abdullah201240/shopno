
import HomeHero from "@/components/home/HomeHero";
import BreadAndMore from "@/components/home/BreadAndMore";
import BestDeals from "@/components/home/BestDeals";
import WeekendDeals from "@/components/home/WeekendDeals";

export default function Home() {
  return (
    <div className="container mx-auto px-4 lg:px-6 space-y-8 pb-12">
      {/* Hero Section (Sidebar + Slider + Trust Badges) */}
      <HomeHero />

      {/* Bread & More Section */}
      <BreadAndMore />

      {/* Best Deals Section */}
      <BestDeals />
      <WeekendDeals/>
      
    </div>
  );
}
