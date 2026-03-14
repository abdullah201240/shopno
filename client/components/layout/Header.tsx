"use client";

import React from "react";
import Link from "next/link";
import { Search, MapPin, User, ShoppingBag, Menu, X, Heart, Sparkles, Phone } from "lucide-react";
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
      <div className="bg-[#C82128] text-white py-2 px-4 lg:px-6">
        <div className="container mx-auto flex items-center justify-between gap-4 h-12">
          {/* Logo & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-white/10" />}>
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] p-0">
                <div className="p-6 bg-[#C82128] text-white">
                  <span className="text-2xl font-black tracking-tight">SHOPNO</span>
                </div>
                {/* Mobile Nav Links */}
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center">
               <div className="bg-white p-1 rounded-full w-24 h-10 flex items-center justify-center shadow-inner">
                  <span className="text-sm font-black text-[#C82128] tracking-tighter uppercase px-1">SHWAPNO</span>
               </div>
            </Link>

            <Button variant="outline" className="hidden xl:flex items-center gap-2 bg-transparent border-white/30 text-white hover:bg-white/10 rounded-md text-xs font-semibold h-9">
              <MapPin className="h-4 w-4" />
              <span>Select your delivery location</span>
            </Button>
          </div>

          {/* Center Search Bar */}
          <div className="flex-1 max-w-2xl mx-auto hidden md:flex items-center relative h-9">
            <div className="relative w-full h-full flex items-center">
              <Input
                placeholder="Search your products"
                className="bg-white text-black border-none h-full w-full rounded-l-md rounded-r-none placeholder:text-gray-400 text-sm focus-visible:ring-0"
              />
              <Button 
                className="bg-[#FFD35E] hover:bg-[#FFD35E]/90 text-black h-full px-5 rounded-l-none rounded-r-md border-none shadow-none"
              >
                <Search className="h-5 w-5 stroke-[2.5px] text-black" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <Button variant="outline" className="hidden lg:flex items-center gap-2 bg-transparent border-white/30 text-white hover:bg-white/10 rounded-[5px] h-9 text-xs font-bold px-4">
              <span>বাংলা</span>
            </Button>
            
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-[5px] h-9 text-xs font-semibold px-4 flex items-center gap-2">
                <User className="h-4 w-4" />
                Sign in / Sign up
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tier 2: White Background Sub-Header */}
      <div className="bg-white border-b hidden md:block">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-10 items-center justify-between">
            <nav className="flex items-center h-full">
               <div className="flex items-center gap-2 font-black text-[11px] uppercase tracking-wider text-[#3c3e44] cursor-pointer hover:text-[#1593CE] w-[255px] border-r h-full pr-4">
                  <Menu className="h-4 w-4" />
                  SHOP BY CATEGORY
               </div>
               <div className="flex items-center gap-6 ml-6 overflow-x-auto no-scrollbar">
                {[
                  "RAMADAN SPECIAL", "GREAT DEALS", "UNILEVER-STOCK & SAVE", 
                  "BUY & SAVE MORE", "OUR BRANDS", "WOMEN'S CORNER"
                ].map((item) => (
                  <Link key={item} href="#" className="text-[11px] font-black uppercase tracking-wider text-[#3c3e44] hover:text-[#1593CE] whitespace-nowrap transition-colors">
                    {item}
                  </Link>
                ))}
               </div>
            </nav>

            <div className="flex items-center gap-6">
               <Link href="#" className="flex items-center gap-1.5 text-[11px] font-bold text-[#3c3e44] hover:text-[#C82128]">
                 <MapPin className="h-3.5 w-3.5" />
                 Our outlets
               </Link>
               <Link href="#" className="flex items-center gap-1.5 text-[11px] font-bold text-[#3c3e44] hover:text-[#C82128]">
                 <Phone className="h-3.5 w-3.5" />
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
