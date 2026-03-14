"use client";

import React from "react";
import Link from "next/link";
import { Search, MapPin, User, ShoppingBag, Menu, X, Heart, Sparkles, Phone, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* Tier 1: Red Background Header */}
      <div className="bg-[#C82128] text-white py-2 px-3 lg:px-4">
        <div className="w-full flex items-center justify-between gap-2 lg:gap-4 h-11 lg:h-12 px-3 lg:px-6">
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-2 lg:gap-4">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10 h-8 w-8" />}>
                <Menu className="h-5 w-5" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[85%] max-w-[320px] p-0 flex flex-col h-full border-none">
                <div className="p-5 bg-[#C82128] text-white flex items-center justify-between shrink-0">
                  <span className="text-xl font-black tracking-tighter">SHOPNO</span>
                  <SheetTrigger render={<Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8" />}>
                    <X className="h-5 w-5" />
                  </SheetTrigger>
                </div>

                <div className="flex-1 overflow-y-auto py-2">
                  <div className="px-4 py-3 border-b border-gray-100 mb-2">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Navigation</p>
                    <div className="grid grid-cols-1 gap-1">
                      {["Home", "Our Outlets", "Help Line", "Offers"].map((item) => (
                        <Link key={item} href="#" className="flex items-center py-2.5 text-sm font-bold text-[#3c3e44] hover:text-[#C82128]">
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="px-4 py-2">
                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Categories</p>
                    <div className="flex flex-col gap-1">
                      {[
                        "Ramadan Special", "Great Deals", "Food", "Baby Food & Care",
                        "Diapers", "Home Cleaning", "Pet Care", "Beauty & Health",
                        "Fashion & Lifestyle", "Home & Kitchen", "Stationeries", "Toys & Sports"
                      ].map((cat) => (
                        <Link key={cat} href="#" className="flex items-center justify-between py-2.5 border-b border-gray-50 group">
                          <span className="text-[13px] font-bold text-[#3c3e44] group-hover:text-[#C82128]">{cat}</span>
                          <ChevronRight className="h-4 w-4 text-gray-300" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 border-t border-gray-100">
                  <Button className="w-full bg-[#C82128] hover:bg-[#C82128]/90 text-white font-bold h-11">
                    <User className="mr-2 h-4 w-4" />
                    Sign in / Sign up
                  </Button>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center shrink-0">
              <div className="bg-white p-1 rounded-full w-20 lg:w-24 h-8 lg:h-10 flex items-center justify-center">
                <span className="text-[10px] lg:text-sm font-black text-[#C82128] tracking-tighter uppercase px-1">SHWAPNO</span>
              </div>
            </Link>

            <Button variant="outline" className="hidden lg:flex items-center gap-2 bg-transparent border-white/30 text-white hover:bg-white/10 rounded-md text-xs font-semibold h-9">
              <MapPin className="h-4 w-4" />
              <span>Select your delivery location</span>
            </Button>
          </div>

          {/* Search Bar - Hidden on small, absolute on medium? No, let's keep it responsive */}
          <div className="flex-1 max-w-2xl mx-2 lg:mx-auto hidden sm:flex items-center h-8 lg:h-9">
            <div className="relative w-full h-full flex items-center">
              <Input
                placeholder="Search your products..."
                className="bg-white text-black border-none h-full w-full rounded-l-md rounded-r-none placeholder:text-gray-400 text-xs lg:text-sm focus-visible:ring-0"
              />
              <Button
                className="bg-[#FFD35E] hover:bg-[#FFD35E]/90 text-black h-full px-3 lg:px-5 rounded-l-none rounded-r-md border-none shadow-none"
              >
                <Search className="h-4 w-4 lg:h-5 lg:w-5 stroke-[2.5px] text-black" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            <Button variant="outline" className="hidden lg:flex items-center gap-2 bg-transparent border-white/30 text-white hover:bg-white/10 rounded-[5px] h-9 text-xs font-bold px-4">
              <span>বাংলা</span>
            </Button>

            <Link href="/account" className="flex items-center">
              <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-[5px] h-8 lg:h-9 text-[10px] lg:text-xs font-bold px-2 lg:px-4 flex items-center gap-1.5 lg:gap-2">
                <User className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                <span className="hidden sm:inline">Sign in / Sign up</span>
                <span className="sm:hidden">Join</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar - Visible ONLY on very small screens */}
        <div className="sm:hidden mt-2 mb-1 px-1">
          <div className="relative w-full h-9 flex items-center">
            <Input
              placeholder="Search your products..."
              className="bg-white text-black border-none h-full w-full rounded-l-md rounded-r-none placeholder:text-gray-400 text-xs focus-visible:ring-0"
            />
            <Button
              className="bg-[#FFD35E] hover:bg-[#FFD35E]/90 text-black h-full px-4 rounded-l-none rounded-r-md border-none shadow-none"
            >
              <Search className="h-4 w-4 stroke-[2.5px] text-black" />
            </Button>
          </div>
        </div>
      </div>

      {/* Tier 2: White Background Sub-Header */}
      <div className="bg-white hidden lg:block border-b border-gray-100">
        <div className="w-full mx-auto px-4 lg:px-10">
          <div className="flex h-10 items-center justify-between">
            <nav className="flex items-center h-full">
              <div className="flex items-center gap-2 font-black text-[11px] uppercase tracking-wider text-[#3c3e44] cursor-pointer hover:text-[#C82128] w-[255px] h-full pr-4 border-r border-gray-100">
                <Menu className="h-4 w-4" />
                SHOP BY CATEGORY
              </div>
              <div className="flex items-center gap-6 ml-6 overflow-x-auto no-scrollbar">
                {[
                  "RAMADAN SPECIAL", "GREAT DEALS", "UNILEVER-STOCK & SAVE",
                  "BUY & SAVE MORE", "OUR BRANDS", "WOMEN'S CORNER"
                ].map((item) => (
                  <Link key={item} href="#" className="text-[11px] font-black uppercase tracking-wider text-[#3c3e44] hover:text-[#C82128] whitespace-nowrap transition-colors">
                    {item}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="flex items-center gap-6">
              <Link href="#" className="flex items-center gap-1.5 text-[11px] font-bold text-[#3c3e44] hover:text-[#C82128]">
                <MapPin className="h-3.5 w-3.5 text-[#C82128]" />
                Our outlets
              </Link>
              <Link href="#" className="flex items-center gap-1.5 text-[11px] font-bold text-[#3c3e44] hover:text-[#C82128]">
                <Phone className="h-3.5 w-3.5 text-[#C82128]" />
                Help line
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
