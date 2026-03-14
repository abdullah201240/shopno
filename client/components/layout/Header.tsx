"use client";

import React from "react";
import Link from "next/link";
import { Search, MapPin, User, ShoppingBag, Menu, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Banner (Optional for promos) */}
      <div className="bg-brand-primary text-white text-xs py-1.5 px-4 text-center font-medium">
        Free delivery on orders over ৳500! 🚚
      </div>

      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left: Mobile Menu & Logo */}
          <div className="flex items-center gap-2 md:gap-4 lg:gap-8">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link href="/" className="text-lg font-bold">Categories</Link>
                  <Link href="/offers" className="text-lg">Special Offers</Link>
                  <Link href="/live" className="text-lg">Live Chat</Link>
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-black tracking-tight text-brand-primary">SHOPNO</span>
            </Link>

            {/* Location Selector (Desktop) */}
            <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 text-sm font-medium cursor-pointer hover:bg-muted transition-colors border border-transparent hover:border-brand-primary/20">
              <MapPin className="h-4 w-4 text-brand-primary" />
              <span>Select Location</span>
            </div>
          </div>

          {/* Center: Search Bar */}
          <div className="flex-1 max-w-xl mx-auto hidden md:flex items-center relative group">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-brand-primary transition-colors" />
              <Input
                placeholder="Search for groceries..."
                className="pl-10 pr-20 bg-muted/30 border-none focus-visible:ring-1 focus-visible:ring-brand-primary h-10 w-full rounded-2xl"
              />
              <Button 
                size="sm" 
                className="absolute right-1 top-1/2 -translate-y-1/2 h-8 rounded-xl bg-[#FFD35E] hover:bg-[#FFD35E]/90 text-black font-bold hidden md:flex"
              >
                Search
              </Button>
            </div>
          </div>

          {/* Right: User Actions */}
          <div className="flex items-center gap-1 md:gap-3">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-6 w-6" />
            </Button>

            <div className="hidden md:flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="ghost" className="gap-2 font-medium hover:bg-brand-primary/5 hover:text-brand-primary" />}>
                  <User className="h-5 w-5" />
                  <span className="hidden lg:inline">Account</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Orders</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Button variant="ghost" size="icon" className="relative hover:bg-brand-primary/5 hover:text-brand-primary">
              <ShoppingBag className="h-6 w-6" />
              <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-brand-primary">
                3
              </Badge>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
