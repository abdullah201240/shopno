"use client";

import React from "react";
import Link from "next/link";
import { Home, Search, ShoppingBag, Gift, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const MobileNav = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", icon: Home, href: "/" },
    { label: "Browse", icon: Search, href: "/categories" },
    { label: "Cart", icon: ShoppingBag, href: "/cart", badge: 0 },
    { label: "Offers", icon: Gift, href: "/offers" },
    { label: "Account", icon: User, href: "/account" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl pb-safe">
      <nav className="flex items-center justify-around h-16 px-2 relative">
        {/* Background Glow Effect */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-primary/30 to-transparent"></div>
        
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          if (item.label === "Cart") {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="relative flex flex-col items-center justify-center w-full h-full"
              >
                <div className={cn(
                  "relative p-3 rounded-full transition-all duration-300 active:scale-90",
                  "bg-[#C82128]",
                  "before:absolute before:inset-0 before:rounded-full before:bg-white/10"
                )}>
                  <Icon className="h-6 w-6 text-white" />
                  {item.badge !== undefined && item.badge > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-[#FFD35E] text-black border-2 border-white font-bold">
                      {item.badge}
                    </Badge>
                  )}
                </div>
                <span className="text-[10px] font-bold mt-1 text-brand-primary">
                  {item.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full gap-1 transition-all duration-300 relative group",
                isActive ? "text-brand-primary" : "text-muted-foreground"
              )}
            >
              {/* Active Indicator */}
              <div className={cn(
                "absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-brand-primary transition-all duration-300",
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-0"
              )}></div>
              
              <div className={cn(
                "p-2 rounded-xl transition-all duration-300",
                isActive ? "bg-brand-primary/10" : "group-hover:bg-muted/50"
              )}>
                <Icon className={cn(
                  "h-5 w-5 transition-transform duration-300",
                  isActive && "scale-110",
                  "group-hover:scale-110"
                )} />
              </div>
              <span className={cn(
                "text-[10px] font-semibold transition-colors duration-300",
                isActive ? "text-brand-primary" : "group-hover:text-foreground"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileNav;
