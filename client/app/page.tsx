
import HomeHero from "@/components/home/HomeHero";
import BreadAndMore from "@/components/home/BreadAndMore";

export default function Home() {
  return (
    <div className="container mx-auto px-4 lg:px-6 space-y-8 pb-12">
      {/* Hero Section (Sidebar + Slider + Trust Badges) */}
      <HomeHero />

      {/* Bread & More Section */}
      <BreadAndMore />
      
    </div>
  );
}
