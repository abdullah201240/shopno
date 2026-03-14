"use client";

import React from "react";
import { ShoppingBag, ShieldCheck, Headphones, CreditCard } from "lucide-react";

interface TrustBadge {
  label: string;
  icon: React.ElementType;
  desc: string;
}

const trustBadges: TrustBadge[] = [
  { label: "60 Mins Delivery",        icon: ShoppingBag,  desc: "Free shipping over 1500Tk"       },
  { label: "Authorized Products",     icon: ShieldCheck,  desc: "within 30 days for an exchange"  },
  { label: "Customer Service Support",icon: Headphones,   desc: "8am to 10pm"                     },
  { label: "Flexible Payments",       icon: CreditCard,   desc: "Pay with multiple credit cards"  },
];

const TrustBadges: React.FC = () => {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 my-4">
      {trustBadges.map((badge, i) => (
        <div
          key={i}
          className="flex items-center gap-3 px-4 py-4 bg-white rounded-lg border border-gray-200"
        >
          {/* Red circle outline with thin red icon — exactly as in screenshot */}
          <div className="shrink-0 h-11 w-11 rounded-full border-2 border-[#E8192C] flex items-center justify-center">
            <badge.icon className="h-[18px] w-[18px] text-[#E8192C]" strokeWidth={1.5} />
          </div>

          {/* Text */}
          <div>
            <p className="text-[13px] font-bold text-gray-900 leading-tight">{badge.label}</p>
            <p className="text-[12px] text-gray-500 leading-tight mt-[2px]">{badge.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;