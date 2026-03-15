"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface PopupBannerProps {
  imageUrl?: string;
  onClose: () => void;
}

const PopupBanner: React.FC<PopupBannerProps> = ({ imageUrl, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if user has already closed the popup
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    
    if (!hasSeenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("hasSeenPopup", "true");
    setTimeout(onClose, 300);
  };

  if (!isMounted || !isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleClose}
      />
      
      {/* Popup Content */}
      <div 
        className={`relative  max-w-md w-full  ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Banner Image */}
        <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
          <Image
            src={imageUrl || "/6746bb7e042626c43a0ab923_SPECIAL SAVINGS-01 (1).webp"}
            alt="Special Offer"
            fill
            className="object-fit"
            priority
          />
        </div>

        
      </div>
    </div>
  );
};

export default PopupBanner;
