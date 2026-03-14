"use client";

import React, { useState, useRef } from "react";
import { 
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Category {
  name: string;
  icon: React.ElementType;
  slug: string;
  subs: SubCategory[];
}

interface SubCategory {
  name: string;
  slug: string;
  subSubs: string[];
}

interface CategorySidebarProps {
  categories: Category[];
}

interface MegaMenuProps {
  subs: SubCategory[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ subs, onMouseEnter, onMouseLeave }) => {
  const [activeSubMenu, setActiveSubMenu] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleSubMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveSubMenu(index);
  };

  const handleSubMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubMenu(null);
    }, 150);
  };

  return (
    <div 
      className="absolute left-full top-0 w-105 bg-white z-999"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col py-2">
        {subs.map((sub, j) => (
          <div
            key={j}
            className="relative"
            onMouseEnter={() => handleSubMouseEnter(j)}
            onMouseLeave={handleSubMouseLeave}
          >
            <Link 
              key={j} 
              href={`#`}
              className="px-6 py-2.5 text-[14px] font-medium text-[#222222] hover:text-[#C82128] hover:bg-gray-50 transition-all flex items-center justify-between"
            >
              <span>{sub.name}</span>
              {sub.subSubs.length > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-300" />
              )}
            </Link>
            
            {/* Sub-Sub Menu */}
            {activeSubMenu === j && sub.subSubs.length > 0 && (
              <div className="absolute left-full top-0 w-50 bg-white z-1000 border-l border-gray-100 shadow-lg">
                <div className="flex flex-col py-2">
                  {sub.subSubs.map((subSub, k) => (
                    <Link
                      key={k}
                      href="#"
                      className="px-6 py-2 text-[13px] text-[#444444] hover:text-[#C82128] hover:bg-gray-50 transition-all"
                    >
                      {subSub}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CategorySidebar: React.FC<CategorySidebarProps> = ({ categories }) => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const handleMegaMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMegaMenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  return (
    <div className="hidden lg:flex flex-col w-60 shrink-0 bg-white relative overflow-visible">
      <div className="flex flex-col" onMouseLeave={handleMouseLeave}>
        {categories.map((cat, i) => (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => handleMouseEnter(i)}
          >
            <Link
              href={`/category/${cat.slug}`}
              className={cn(
                "flex items-center justify-between px-4 py-2.5 text-[15px] font-semibold transition-all duration-200",
                activeMenu === i ? "text-[#C82128] bg-gray-50" : "text-[#222222] hover:text-[#C82128] hover:bg-gray-50"
              )}
            >
              <div className="flex items-center gap-3">
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

      {/* Mega Menu */}
      {activeMenu !== null && categories[activeMenu]?.subs.length > 0 && (
        <div 
          onMouseEnter={handleMegaMenuMouseEnter}
          onMouseLeave={handleMegaMenuMouseLeave}
        >
          <MegaMenu 
            subs={categories[activeMenu].subs} 
            onMouseEnter={handleMegaMenuMouseEnter}
            onMouseLeave={handleMegaMenuMouseLeave}
          />
        </div>
      )}
    </div>
  );
};

export default CategorySidebar;
