"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  Package,
  Truck,
  CheckCircle,
  Clock,
  Download,
  Share2,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Calendar,
  Hash,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const MOCK_ORDER = {
  id: "ORD-2024-001234",
  orderDate: new Date("2024-01-15T10:30:00"),
  status: "processing",
  customer: {
    name: "John Doe",
    phone: "01712345678",
    email: "john.doe@example.com",
    address: "House 123, Road 45, Dhanmondi",
    city: "Dhaka",
    zipCode: "1209",
  },
  items: [
    {
      id: "1",
      name: "Fresh Instant Full Cream Milk Powder 500gm",
      image: "/product/65fa9509115075f231ec6e53_Fresh-Instant-Full-Cream-Milk-Powder-500gm_1_220.webp",
      price: 435,
      originalPrice: 480,
      quantity: 2,
      unit: "Per Piece",
    },
    {
      id: "2",
      name: "Diploma Instant Full Cream Milk Powder 500gm",
      image: "/product/65fa9503115075f231ec697e_Diploma-Instant-Full-Cream-Milk-Powder-500gm-Foil-Pack_1_220.webp",
      price: 410,
      originalPrice: 460,
      quantity: 1,
      unit: "Per Piece",
    },
    {
      id: "3",
      name: "Nescafe Classic Coffee 100gm",
      image: "/product/65fa9389115075f231ec4af2_Nescafe-Classic-Coffee-100gm-Glass-Bottle_1_220.webp",
      price: 299,
      originalPrice: 350,
      quantity: 3,
      unit: "Per Piece",
    },
  ],
  pricing: {
    subtotal: 2385,
    deliveryFee: 0,
    discount: 236,
    total: 2385,
  },
  payment: {
    method: "cod",
    status: "pending",
  },
  delivery: {
    estimatedTime: "Within 1-2 hours",
    trackingId: "TRK1234567890",
  },
};

const STATUS_STEPS = [
  { key: "confirmed", label: "Confirmed", icon: CheckCircle, description: "We've received your order" },
  { key: "processing", label: "Processing", icon: Package, description: "Getting ready for delivery" },
  { key: "out-for-delivery", label: "Out for Delivery", icon: Truck, description: "On the way to you" },
  { key: "delivered", label: "Delivered", icon: CheckCircle, description: "Successfully delivered" },
];

export default function OrderDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [order] = useState(MOCK_ORDER);

  const currentStatusIndex = STATUS_STEPS.findIndex((s) => s.key === order.status) ?? 0;

  const formatDate = (date: Date) =>
    new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(date));
  return (
    <div className="min-h-screen pt-8">
      
      <div className="max-w-350 mx-auto  space-y-0 divide-y divide-gray-100">

        {/* Order ID & Status */}
        <div className="pb-5">
          <div className="flex items-start justify-between mb-1">
            <h1 className="text-lg font-black text-gray-900">Order Details</h1>
            <span className="text-xs font-bold uppercase bg-[#C82128] text-white px-2.5 py-1">
              {order.status.replace(/-/g, " ")}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Hash className="w-3.5 h-3.5" />
            <span>{order.id}</span>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="py-5">
          <div className="relative">
            {/* Track line */}
            <div className="absolute top-3.5 left-0 right-0 h-0.5 bg-gray-200" />
            <div
              className="absolute top-3.5 left-0 h-0.5 bg-[#C82128] transition-all duration-500"
              style={{ width: `${(currentStatusIndex / (STATUS_STEPS.length - 1)) * 100}%` }}
            />
            <div className="relative flex justify-between">
              {STATUS_STEPS.map((step, index) => {
                const Icon = step.icon;
                const isCompleted = index <= currentStatusIndex;
                return (
                  <div key={step.key} className="flex flex-col items-center">
                    <div
                      className={`w-7 h-7 flex items-center justify-center border-2 transition-colors ${
                        isCompleted
                          ? "bg-[#C82128] border-[#C82128] text-white"
                          : "bg-white border-gray-300 text-gray-400"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <p className={`text-[10px] font-bold mt-1.5 text-center hidden md:block ${isCompleted ? "text-gray-800" : "text-gray-400"}`}>
                      {step.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Estimated Delivery */}
          <div className="mt-5 flex items-center gap-3 bg-blue-50 px-4 py-3">
            <Clock className="w-4 h-4 text-blue-600 shrink-0" />
            <div>
              <p className="text-xs font-bold text-gray-700">Estimated Delivery</p>
              <p className="text-sm font-bold text-blue-600">{order.delivery.estimatedTime}</p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="py-5">
          <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Package className="w-4 h-4 text-[#C82128]" />
            Order Items ({order.items.length})
          </h2>
          <div className="divide-y divide-gray-100">
            {order.items.map((item) => (
              <div key={item.id} className="flex gap-3 py-3">
                <div className="w-16 h-16 bg-gray-50 shrink-0 relative flex items-center justify-center">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  <span className="absolute top-0.5 right-0.5 bg-[#C82128] text-white text-[9px] font-bold px-1 py-0.5">
                    x{item.quantity}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <Link href={`/product/${item.id}`}>
                    <p className="text-sm font-bold text-gray-900 line-clamp-2 hover:text-[#C82128] transition-colors">
                      {item.name}
                    </p>
                  </Link>
                  <p className="text-xs text-gray-400 mt-0.5">{item.unit}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm font-bold text-[#C82128]">৳{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">৳{item.originalPrice}</span>
                    )}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm font-bold text-gray-900">৳{item.price * item.quantity}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery Address */}
        <div className="py-5">
          <h2 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#C82128]" /> Delivery Address
          </h2>
          <p className="text-sm font-bold text-gray-900">{order.customer.name}</p>
          <p className="text-sm text-gray-500 mt-0.5">{order.customer.address}</p>
          <p className="text-sm text-gray-500">{order.customer.city} - {order.customer.zipCode}</p>
          <div className="flex items-center gap-2 mt-2">
            <Phone className="w-3.5 h-3.5 text-gray-400" />
            <a href={`tel:${order.customer.phone}`} className="text-sm text-[#C82128] font-bold hover:underline">
              {order.customer.phone}
            </a>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <Mail className="w-3.5 h-3.5 text-gray-400" />
            <a href={`mailto:${order.customer.email}`} className="text-sm text-[#C82128] font-bold hover:underline">
              {order.customer.email}
            </a>
          </div>
        </div>

        {/* Payment Details */}
        <div className="py-5">
          <h2 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-[#C82128]" /> Payment Details
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Method</span>
              <span className="font-bold text-gray-900">
                {order.payment.method === "cod" ? "Cash on Delivery" : "Card Payment"}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Status</span>
              <span className={`font-bold text-xs px-2 py-0.5 ${
                order.payment.status === "paid"
                  ? "bg-green-50 text-green-700"
                  : "bg-yellow-50 text-yellow-700"
              }`}>
                {order.payment.status === "paid" ? "Paid" : "Pending"}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Tracking ID</span>
              <span className="font-mono font-bold text-gray-900">{order.delivery.trackingId}</span>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="py-5">
          <h2 className="text-sm font-bold text-gray-900 mb-3">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">
                Subtotal ({order.items.reduce((acc, i) => acc + i.quantity, 0)} items)
              </span>
              <span className="text-gray-900">৳{order.pricing.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Delivery Fee</span>
              {order.pricing.deliveryFee === 0 ? (
                <span className="text-green-600 font-bold">Free</span>
              ) : (
                <span className="text-gray-900">৳{order.pricing.deliveryFee}</span>
              )}
            </div>
            {order.pricing.discount > 0 && (
              <div className="flex justify-between">
                <span className="text-gray-500">Discount</span>
                <span className="font-bold text-[#C82128]">-৳{order.pricing.discount}</span>
              </div>
            )}
            <div className="border-t border-gray-200 pt-2 flex justify-between items-end">
              <span className="font-bold text-gray-900">Total</span>
              <div className="text-right">
                <span className="text-xl font-black text-[#C82128]">৳{order.pricing.total}</span>
                <p className="text-[10px] text-gray-400 mt-0.5">VAT included</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Timeline */}
        <div className="py-5">
          <h2 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#C82128]" /> Order Timeline
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-[#C82128] mt-1.5 shrink-0" />
              <div>
                <p className="text-sm font-bold text-gray-900">Order Placed</p>
                <p className="text-xs text-gray-400 mt-0.5">{formatDate(order.orderDate)}</p>
              </div>
            </div>
            {currentStatusIndex >= 1 && (
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C82128] mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Order Confirmed</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {formatDate(new Date(order.orderDate.getTime() + 1800000))}
                  </p>
                </div>
              </div>
            )}
            {currentStatusIndex >= 2 && (
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-[#C82128] mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Out for Delivery</p>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {formatDate(new Date(order.orderDate.getTime() + 3600000))}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Help Section */}
        <div className="py-5">
          <h3 className="text-sm font-bold text-gray-900 mb-1">Need Help?</h3>
          <p className="text-sm text-gray-500 mb-4">
            Have questions about your order? Our support team is here to help.
          </p>
          <div className="flex gap-3">
            <a href="tel:+8801234567890" className="flex-1">
              <Button variant="outline" className="w-full rounded-none border-gray-300 font-bold text-sm h-10">
                <Phone className="w-4 h-4 mr-2" /> Call Us
              </Button>
            </a>
            <Link href="/contact" className="flex-1">
              <Button className="w-full rounded-none bg-[#C82128] hover:bg-[#A81A20] text-white font-bold text-sm h-10">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-5 flex gap-3">
          <Link href="/" className="flex-1">
            <Button variant="outline" className="w-full h-11 rounded-none border-gray-300 font-bold text-sm">
              Continue Shopping
            </Button>
          </Link>
          <Link href="/orders" className="flex-1">
            <Button className="w-full h-11 rounded-none bg-[#C82128] hover:bg-[#A81A20] text-white font-bold text-sm">
              View All Orders
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}