"use client";

import React, { useState } from "react";
import { 
  ChevronRight,
  Apple, 
  Baby, 
  SprayCan,
  Dog,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Category {
  name: string;
  icon: React.ElementType;
  slug: string;
  subs: string[];
}

interface CategorySidebarProps {
  categories: Category[];
}

interface MegaMenuProps {
  subs: string[];
}

const MegaMenu: React.FC<MegaMenuProps> = ({ subs }) => {
  return (
    <div className="absolute left-full top-0 w-[420px] bg-white z-[999]">
      <div className="flex flex-col py-2">
        {subs.map((sub, j) => (
          <Link 
            key={j} 
            href="#" 
            className="px-6 py-2.5 text-[14px] font-medium text-[#222222] hover:text-[#C82128] hover:bg-gray-50 transition-all flex items-center justify-between"
          >
            <span>{sub}</span>
            <ChevronRight className="h-4 w-4 text-gray-200" />
          </Link>
        ))}
      </div>
    </div>
  );
};

const CategorySidebar: React.FC<CategorySidebarProps> = ({ categories }) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div className="hidden lg:flex flex-col w-[200px] shrink-0 bg-white relative  overflow-visible">
      <div className="flex flex-col ">
        {categories.map((cat, i) => (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={`/category/${cat.slug}`}
              className={cn(
                "flex items-center justify-between py-2.5 text-[15px] font-semibold transition-all duration-200",
                activeMenu === i ? "text-[#C82128] bg-gray-100" : "text-[#222222] hover:text-[#C82128] hover:bg-gray-100"
              )}
            >
              <div className="flex items-center gap-2">
                <cat.icon className={cn("h-4 w-4 transition-colors", activeMenu === i ? "text-[#C82128]" : "text-gray-400")} />
                <span className="tracking-tight leading-none">{cat.name}</span>
              </div>
              {cat.subs.length > 0 && (
                <ChevronRight className={cn("h-4 w-4 transition-colors", activeMenu === i ? "text-[#C82128]" : "text-gray-300")} />
              )}
            </Link>
          </div>
        ))}
      </div>

      {/* Single Mega Menu - Always at top */}
      {activeMenu !== null && categories[activeMenu]?.subs.length > 0 && (
        <MegaMenu subs={categories[activeMenu].subs} />
      )}
    </div>
  );
};

export default CategorySidebar;
