"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle, Package, Truck, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="mb-6 relative">
          <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-16 h-16 text-green-600" />
          </div>
          <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-black text-gray-900 mb-4">
          Order Placed Successfully!
        </h1>
        
        <p className="text-gray-600 mb-8 text-lg">
          Thank you for your order. We'll deliver it soon!
        </p>

        {/* Order Details Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Package className="w-5 h-5 text-[#C82128]" />
            <span className="font-bold text-gray-900">Order Status</span>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-left flex-1">
                <p className="font-bold text-gray-900 text-sm">Order Confirmed</p>
                <p className="text-xs text-gray-500">We've received your order</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Truck className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left flex-1">
                <p className="font-bold text-gray-900 text-sm">Processing</p>
                <p className="text-xs text-gray-500">Getting ready for delivery</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                <Home className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-left flex-1">
                <p className="font-bold text-gray-900 text-sm">Out for Delivery</p>
                <p className="text-xs text-gray-500">Will arrive within 1-2 hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Link href="/" className="block">
            <Button className="w-full h-12 bg-[#C82128] hover:bg-[#A81A20] text-white font-bold shadow-lg">
              Continue Shopping
            </Button>
          </Link>
          
          <Link href="/cart" className="block">
            <Button variant="outline" className="w-full h-12 border-gray-200 text-gray-700 font-bold hover:bg-gray-50">
              View Cart
            </Button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-2">
            Need help? Contact us at
          </p>
          <a 
            href="tel:+8801234567890" 
            className="text-[#C82128] font-bold text-lg hover:underline"
          >
            +880-1234-567890
          </a>
        </div>
      </div>
    </div>
  );
}
