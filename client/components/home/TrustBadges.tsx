"use client";

import React from "react";
import { Package, ShieldCheck, Headphones, CreditCard } from "lucide-react";

interface TrustBadge {
  label: string;
  icon: React.ElementType;
  desc: string;
}

const trustBadges: TrustBadge[] = [
  { label: "60 Mins Delivery", icon: Package, desc: "Free shipping over 1500Tk" },
  { label: "Authorized Products", icon: ShieldCheck, desc: "within 30 days for an exchange" },
  { label: "Customer Service Support", icon: Headphones, desc: "8am to 10pm" },
  { label: "Flexible Payments", icon: CreditCard, desc: "Pay with multiple credit cards" },
];

const TrustBadges: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
      {trustBadges.map((badge, i) => (
        <div
          key={i}
          className="flex items-center gap-4 px-5 py-4 bg-white rounded-xl border border-gray-200"
        >
          {/* Circle outline icon — matches the screenshot style */}
          <div className="h-12 w-12 rounded-full border-2 border-[#C82128] flex items-center justify-center text-[#C82128] shrink-0">
            <badge.icon className="h-5 w-5" strokeWidth={1.5} />
          </div>

          <div className="min-w-0">
            <p className="text-sm font-bold text-gray-900 leading-snug">{badge.label}</p>
            <p className="text-xs text-gray-500 leading-snug mt-0.5">{badge.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;