"use client";

import React from "react";
import Link from "next/link";
import { Search, MapPin, User, ShoppingBag, Menu, X, Heart, Sparkles } from "lucide-react";
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
    <header className="sticky top-0 z-50 w-full">
      {/* Premium Top Banner with Gradient */}
      <div className="relative overflow-hidden bg-gradient-to-r from-brand-primary via-orange-500 to-brand-primary bg-[length:200%_100%] animate-gradient text-white text-xs py-2 px-4 text-center font-semibold">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50"></div>
        <div className="relative flex items-center justify-center gap-2">
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
          <span>Free delivery on orders over ৳500!</span>
          <Sparkles className="h-3.5 w-3.5 animate-pulse" />
        </div>
      </div>

      {/* Main Header with Glass Effect */}
      <div className="glass border-b border-white/20 shadow-premium">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Left: Mobile Menu & Logo */}
            <div className="flex items-center gap-2 md:gap-4 lg:gap-8">
              <Sheet>
                <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden hover:bg-brand-primary/10 hover:text-brand-primary transition-all duration-300" />}>
                  <Menu className="h-6 w-6" />
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] p-0">
                  <div className="flex flex-col h-full">
                    <div className="p-6 bg-gradient-to-br from-brand-primary to-orange-500 text-white">
                      <span className="text-2xl font-black tracking-tight">SHOPNO</span>
                      <p className="text-sm opacity-80 mt-1">Your grocery partner</p>
                    </div>
                    <nav className="flex flex-col gap-1 p-4 flex-1">
                      <Link href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-brand-primary/10 hover:text-brand-primary transition-all duration-300">
                        <Sparkles className="h-4 w-4" /> Home
                      </Link>
                      <Link href="/categories" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-brand-primary/10 hover:text-brand-primary transition-all duration-300">
                        <ShoppingBag className="h-4 w-4" /> Categories
                      </Link>
                      <Link href="/offers" className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold hover:bg-brand-primary/10 hover:text-brand-primary transition-all duration-300">
                        <Heart className="h-4 w-4" /> Special Offers
                      </Link>
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>

              <Link href="/" className="flex items-center space-x-2 group">
                <div className="relative">
                  <span className="text-2xl font-black tracking-tight text-brand-primary group-hover:scale-105 inline-block transition-transform duration-300">SHOPNO</span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </Link>

              {/* Location Selector (Desktop) */}
              <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5 text-sm font-semibold cursor-pointer hover:from-brand-primary/10 hover:to-brand-secondary/10 transition-all duration-300 border border-transparent hover:border-brand-primary/20 hover-lift">
                <div className="h-8 w-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-brand-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground">Deliver to</span>
                  <span className="text-foreground">Select Location</span>
                </div>
              </div>
            </div>

            {/* Center: Search Bar */}
            <div className="flex-1 max-w-xl mx-auto hidden md:flex items-center relative group">
              <div className="relative w-full">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-brand-primary transition-colors duration-300" />
                <Input
                  placeholder="Search for groceries, fruits, vegetables..."
                  className="pl-11 pr-24 bg-muted/30 border-none focus-visible:ring-2 focus-visible:ring-brand-primary/30 h-11 w-full rounded-2xl text-sm transition-all duration-300 focus:bg-white focus:shadow-lg"
                />
                <Button 
                  size="sm" 
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 h-8 px-4 rounded-xl bg-gradient-to-r from-brand-gold to-yellow-400 hover:from-brand-gold hover:to-yellow-500 text-black font-bold hidden md:flex shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
                >
                  Search
                </Button>
              </div>
            </div>

            {/* Right: User Actions */}
            <div className="flex items-center gap-1 md:gap-2">
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-brand-primary/10 hover:text-brand-primary transition-all duration-300">
                <Search className="h-5 w-5" />
              </Button>

              {/* Wishlist */}
              <Button variant="ghost" size="icon" className="hidden md:flex hover:bg-brand-primary/10 hover:text-brand-primary transition-all duration-300 relative">
                <Heart className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-[9px] bg-brand-secondary border-2 border-background">
                  2
                </Badge>
              </Button>

              <div className="hidden md:flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger render={<Button variant="ghost" className="gap-2 font-semibold hover:bg-brand-primary/10 hover:text-brand-primary transition-all duration-300 rounded-xl" />}>
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-brand-primary to-orange-400 flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="hidden lg:inline">Account</span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 p-2 rounded-2xl shadow-premium-lg border border-border/50 animate-scale-in">
                    <div className="px-3 py-2 mb-2">
                      <p className="font-bold text-sm">Welcome!</p>
                      <p className="text-xs text-muted-foreground">Sign in for best experience</p>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="rounded-xl px-3 py-2.5 cursor-pointer hover:bg-brand-primary/10 focus:bg-brand-primary/10">Profile</DropdownMenuItem>
                    <DropdownMenuItem className="rounded-xl px-3 py-2.5 cursor-pointer hover:bg-brand-primary/10 focus:bg-brand-primary/10">My Orders</DropdownMenuItem>
                    <DropdownMenuItem className="rounded-xl px-3 py-2.5 cursor-pointer hover:bg-brand-primary/10 focus:bg-brand-primary/10">Wishlist</DropdownMenuItem>
                    <DropdownMenuItem className="rounded-xl px-3 py-2.5 cursor-pointer hover:bg-brand-primary/10 focus:bg-brand-primary/10">Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="rounded-xl px-3 py-2.5 cursor-pointer text-brand-primary font-semibold hover:bg-brand-primary/10 focus:bg-brand-primary/10">Sign In</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Cart Button */}
              <Button variant="ghost" size="icon" className="relative hover:bg-brand-primary/10 hover:text-brand-primary transition-all duration-300 group">
                <div className="relative">
                  <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-brand-primary text-white border-2 border-background animate-bounce-in">
                    3
                  </Badge>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
