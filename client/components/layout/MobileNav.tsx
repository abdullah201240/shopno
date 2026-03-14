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
    { label: "Categories", icon: Search, href: "/categories" },
    { label: "Cart", icon: ShoppingBag, href: "/cart", badge: 3 },
    { label: "Offers", icon: Gift, href: "/offers" },
    { label: "Account", icon: User, href: "/account" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-t pb-safe">
      <nav className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          if (item.label === "Cart") {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="relative flex flex-col items-center justify-center w-full h-full -mt-6"
              >
                <div className={cn(
                  "p-3 rounded-full shadow-lg transition-transform active:scale-95 border-4 border-background",
                  isActive ? "bg-brand-primary text-white" : "bg-brand-primary text-white"
                )}>
                  <Icon className="h-6 w-6" />
                </div>
                {item.badge && (
                  <Badge className="absolute top-0 right-1/2 translate-x-3 h-5 w-5 flex items-center justify-center p-0 text-[10px] bg-brand-secondary border-2 border-background">
                    {item.badge}
                  </Badge>
                )}
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
                "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors",
                isActive ? "text-brand-primary" : "text-muted-foreground hover:text-brand-primary/70"
              )}
            >
              <Icon className={cn("h-5 w-5 transition-transform", isActive && "scale-110")} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileNav;
