"use client";

import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface BannerItem {
  id: number;
  src: string;
  alt: string;
  href?: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const topLeftBanner: BannerItem = {
  id: 1,
  src: "/1.jpeg",
  alt: "Fresh Meat",
  href: "/category/fresh-meat",
};

const bottomLeftBanner: BannerItem = {
  id: 2,
  src: "/2.jpeg",
  alt: "Fresh Fish",
  href: "/category/fresh-fish",
};

const rightBanner: BannerItem = {
  id: 3,
  src: "3.jpeg",
  alt: "Stock Up On Essentials",
  href: "/category/essentials",
};

// ─── Banner Card ──────────────────────────────────────────────────────────────

function BannerCard({ item, className }: { item: BannerItem; className?: string }) {
  const content = (
    <div className={`relative w-full h-full ${className ?? ""}`}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-fit transition-transform rounded-lg"
        sizes="(max-width: 668px) 70vw, 20vw"
        unoptimized
      />
    </div>
  );

  if (item.href) {
    return (
      <a href={item.href} className={`block w-full h-full ${className ?? ""}`}>
        {content}
      </a>
    );
  }

  return content;
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PromoBannerGrid() {
  return (
    <div className="w-full flex gap-8">

      {/* ── LEFT: Two stacked banners ── */}
      <div className="flex flex-col gap-2 w-[35%] min-w-35 h-64">
        {/* Top-left banner */}
        <div className="relative w-full flex-1">
          <BannerCard item={topLeftBanner} className="h-full" />
        </div>

        {/* Bottom-left banner */}
        <div className="relative w-full flex-1">
          <BannerCard item={bottomLeftBanner} className="h-full" />
        </div>
      </div>

      {/* ── RIGHT: Single tall banner ── */}
      <div className="flex-1 h-64">
        <BannerCard item={rightBanner} className="h-auto w-full" />
      </div>

    </div>
  );
}