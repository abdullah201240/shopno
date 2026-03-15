"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Package,
  ArrowLeft,
  Clock,
  CheckCircle,
  Truck,
  ChevronRight,
  Search,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const MOCK_ORDERS = [
  {
    id: "ORD-2024-001234",
    date: new Date("2024-01-15T10:30:00"),
    status: "processing",
    items: 3,
    total: 2385,
    image: "/product/65fa9509115075f231ec6e53_Fresh-Instant-Full-Cream-Milk-Powder-500gm_1_220.webp",
  },
  {
    id: "ORD-2024-001233",
    date: new Date("2024-01-14T15:20:00"),
    status: "delivered",
    items: 5,
    total: 4250,
    image: "/product/65fa9389115075f231ec4af2_Nescafe-Classic-Coffee-100gm-Glass-Bottle_1_220.webp",
  },
  {
    id: "ORD-2024-001232",
    date: new Date("2024-01-13T09:15:00"),
    status: "out-for-delivery",
    items: 2,
    total: 1580,
    image: "/product/65fa9503115075f231ec697e_Diploma-Instant-Full-Cream-Milk-Powder-500gm-Foil-Pack_1_220.webp",
  },
  {
    id: "ORD-2024-001231",
    date: new Date("2024-01-12T14:45:00"),
    status: "confirmed",
    items: 4,
    total: 3120,
    image: "/product/68b575087d266676045747a7_Surf-Excel-1kg_1_220.webp",
  },
];

const STATUS_CONFIG: Record<string, { label: string; color: string; bgColor: string; icon: any }> = {
  confirmed: {
    label: "Confirmed",
    color: "text-green-700",
    bgColor: "bg-green-50",
    icon: CheckCircle,
  },
  processing: {
    label: "Processing",
    color: "text-blue-700",
    bgColor: "bg-blue-50",
    icon: Package,
  },
  "out-for-delivery": {
    label: "Out for Delivery",
    color: "text-orange-700",
    bgColor: "bg-orange-50",
    icon: Truck,
  },
  delivered: {
    label: "Delivered",
    color: "text-green-700",
    bgColor: "bg-green-50",
    icon: CheckCircle,
  },
  cancelled: {
    label: "Cancelled",
    color: "text-red-700",
    bgColor: "bg-red-50",
    icon: Clock,
  },
};

export default function OrdersPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredOrders = MOCK_ORDERS.filter((order) => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  };

  return (
    <div className="min-h-screen">
      
      <div className="max-w-350 mx-auto px-4 py-5 space-y-5">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by Order ID"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 rounded-none border-gray-300 focus:border-[#C82128] focus:ring-0"
          />
        </div>

        {/* Status Filter Tabs */}
        <div className="flex gap-0 overflow-x-auto scrollbar-hide border-b border-gray-200">
          <button
            onClick={() => setStatusFilter("all")}
            className={`px-4 py-2.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
              statusFilter === "all"
                ? "border-[#C82128] text-[#C82128]"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            All
          </button>
          {Object.entries(STATUS_CONFIG).map(([key, config]) => {
            const Icon = config.icon;
            return (
              <button
                key={key}
                onClick={() => setStatusFilter(key)}
                className={`px-4 py-2.5 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors flex items-center gap-1.5 ${
                  statusFilter === key
                    ? "border-[#C82128] text-[#C82128]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {config.label}
              </button>
            );
          })}
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <div className="py-16 text-center">
            <Package className="w-14 h-14 text-gray-200 mx-auto mb-4" />
            <h3 className="text-base font-bold text-gray-900 mb-1">No orders found</h3>
            <p className="text-sm text-gray-400 mb-6">
              {searchTerm || statusFilter !== "all"
                ? "Try adjusting your search or filters"
                : "You haven't placed any orders yet"}
            </p>
            {!searchTerm && statusFilter === "all" && (
              <Link href="/">
                <Button className="bg-[#C82128] hover:bg-[#A81A20] text-white font-bold rounded-none h-10 px-6">
                  Start Shopping
                </Button>
              </Link>
            )}
          </div>
        ) : (
          <div className="divide-y divide-gray-100">
            {filteredOrders.map((order) => {
              const statusConfig = STATUS_CONFIG[order.status] || STATUS_CONFIG.confirmed;
              const StatusIcon = statusConfig.icon;

              return (
                <Link key={order.id} href={`/orders/${order.id}`}>
                  <div className="flex gap-4 py-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                    {/* Product Image */}
                    <div className="w-16 h-16 bg-gray-50 shrink-0 flex items-center justify-center">
                      <img
                        src={order.image}
                        alt="Order"
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Order Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1.5">
                        <div>
                          <p className="font-bold text-sm text-gray-900">{order.id}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{formatDate(order.date)}</p>
                        </div>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 ${statusConfig.bgColor} ${statusConfig.color} flex items-center gap-1`}
                        >
                          <StatusIcon className="w-3 h-3" />
                          {statusConfig.label}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">
                          {order.items} items
                          <span className="mx-1.5 text-gray-300">|</span>
                          <span className="font-bold text-gray-800">৳{order.total}</span>
                        </p>
                        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}

        {/* Order Summary */}
        <div className="pt-2">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5" /> Order Summary
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-50 p-3 text-center">
              <p className="text-2xl font-black text-green-700">
                {MOCK_ORDERS.filter((o) => o.status === "delivered").length}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 font-semibold">Delivered</p>
            </div>
            <div className="bg-blue-50 p-3 text-center">
              <p className="text-2xl font-black text-blue-700">
                {MOCK_ORDERS.filter(
                  (o) => o.status === "processing" || o.status === "out-for-delivery"
                ).length}
              </p>
              <p className="text-xs text-gray-500 mt-0.5 font-semibold">Active</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-3 pt-1">
          <Link href="/" className="flex-1">
            <Button
              variant="outline"
              className="w-full h-11 rounded-none border-gray-300 font-bold text-sm"
            >
              Continue Shopping
            </Button>
          </Link>
          <Link href="/cart" className="flex-1">
            <Button className="w-full h-11 rounded-none bg-[#C82128] hover:bg-[#A81A20] text-white font-bold text-sm">
              View Cart
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}