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
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

// Mock orders data
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
    color: "text-green-600",
    bgColor: "bg-green-100",
    icon: CheckCircle,
  },
  processing: {
    label: "Processing",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    icon: Package,
  },
  "out-for-delivery": {
    label: "Out for Delivery",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
    icon: Truck,
  },
  delivered: {
    label: "Delivered",
    color: "text-green-600",
    bgColor: "bg-green-100",
    icon: CheckCircle,
  },
  cancelled: {
    label: "Cancelled",
    color: "text-red-600",
    bgColor: "bg-red-100",
    icon: Clock,
  },
};

export default function OrdersPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredOrders = MOCK_ORDERS.filter(order => {
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(new Date(date));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-350 mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
            </button>
            <div>
              <h1 className="text-xl font-black text-gray-900">My Orders</h1>
              <p className="text-sm text-gray-500">Track and manage your orders</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-4 py-6 space-y-6">
        {/* Search and Filter */}
        <div className="space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by Order ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            <button
              onClick={() => setStatusFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${
                statusFilter === "all"
                  ? "bg-[#C82128] text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              All Orders
            </button>
            {Object.entries(STATUS_CONFIG).map(([key, config]) => {
              const Icon = config.icon;
              return (
                <button
                  key={key}
                  onClick={() => setStatusFilter(key)}
                  className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                    statusFilter === key
                      ? `${config.bgColor} ${config.color}`
                      : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {config.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Orders List */}
        {filteredOrders.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-500 mb-6">
                {searchTerm || statusFilter !== "all"
                  ? "Try adjusting your search or filters"
                  : "You haven't placed any orders yet"}
              </p>
              {!searchTerm && statusFilter === "all" && (
                <Link href="/">
                  <Button className="bg-[#C82128] hover:bg-[#A81A20] text-white font-bold">
                    Start Shopping
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {filteredOrders.map((order) => {
              const statusConfig = STATUS_CONFIG[order.status] || STATUS_CONFIG.confirmed;
              const StatusIcon = statusConfig.icon;

              return (
                <Link key={order.id} href={`/orders/${order.id}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer group">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        {/* Product Image */}
                        <div className="w-20 h-20 bg-gray-50 rounded-md p-2 shrink-0 relative overflow-hidden">
                          <img
                            src={order.image}
                            alt="Order"
                            className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                          />
                        </div>

                        {/* Order Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1 min-w-0">
                              <h3 className="font-bold text-sm text-gray-900 truncate">
                                {order.id}
                              </h3>
                              <p className="text-xs text-gray-500 mt-0.5">
                                {formatDate(order.date)}
                              </p>
                            </div>
                            <Badge className={`${statusConfig.bgColor} ${statusConfig.color} font-bold text-xs`}>
                              <StatusIcon className="w-3 h-3 mr-1 inline" />
                              {statusConfig.label}
                            </Badge>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="text-xs text-gray-500">
                              <span>{order.items} items</span>
                              <span className="mx-2">•</span>
                              <span className="font-bold text-gray-900">৳{order.total}</span>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}

        {/* Statistics Summary */}
        <Card>
          <CardContent className="p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#C82128]" />
              Order Summary
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-3 text-center">
                <p className="text-2xl font-black text-green-600">
                  {MOCK_ORDERS.filter(o => o.status === 'delivered').length}
                </p>
                <p className="text-xs text-gray-600 mt-1 font-bold">Delivered</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-center">
                <p className="text-2xl font-black text-blue-600">
                  {MOCK_ORDERS.filter(o => o.status === 'processing' || o.status === 'out-for-delivery').length}
                </p>
                <p className="text-xs text-gray-600 mt-1 font-bold">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="flex gap-3">
          <Link href="/" className="flex-1">
            <Button variant="outline" className="w-full h-12 border-gray-200 font-bold">
              Continue Shopping
            </Button>
          </Link>
          <Link href="/cart" className="flex-1">
            <Button className="w-full h-12 bg-[#C82128] hover:bg-[#A81A20] text-white font-bold">
              View Cart
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
