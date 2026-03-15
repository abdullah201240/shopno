"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  User,
  Package,
  Heart,
  MapPin,
  Settings,
  LogOut,
  ChevronRight,
  ShoppingBag,
  Clock,
  Award,
  Phone,
  Mail,
  Calendar,
  Edit2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const MOCK_USER = {
  name: "Abdullah Al Sakib",
  email: "abdullah.sakib@example.com",
  phone: "+880 1XXX XXXXXX",
  memberSince: "January 2024",
};

const RECENT_ORDERS = [
  {
    id: "ORD-2024-001234",
    date: "Jan 15, 2024",
    status: "processing",
    items: 3,
    total: 2385,
    image: "/product/65fa9509115075f231ec6e53_Fresh-Instant-Full-Cream-Milk-Powder-500gm_1_220.webp",
  },
  {
    id: "ORD-2024-001233",
    date: "Jan 14, 2024",
    status: "delivered",
    items: 5,
    total: 4250,
    image: "/product/65fa9389115075f231ec4af2_Nescafe-Classic-Coffee-100gm-Glass-Bottle_1_220.webp",
  },
  {
    id: "ORD-2024-001232",
    date: "Jan 13, 2024",
    status: "delivered",
    items: 2,
    total: 1580,
    image: "/product/65fa9503115075f231ec697e_Diploma-Instant-Full-Cream-Milk-Powder-500gm-Foil-Pack_1_220.webp",
  },
];

const SAVED_ADDRESSES = [
  { type: "Home", address: "House #12, Road #5, Dhanmondi, Dhaka - 1209", isDefault: true },
  { type: "Office", address: "Plot #45, Street #12, Gulshan-1, Dhaka - 1212", isDefault: false },
];

const STATUS_COLORS: Record<string, string> = {
  processing: "text-blue-700 bg-blue-50",
  delivered: "text-green-700 bg-green-50",
  "out-for-delivery": "text-orange-700 bg-orange-50",
  confirmed: "text-green-700 bg-green-50",
};

type Tab = "overview" | "orders" | "wishlist" | "addresses" | "settings";

const menuItems: { id: Tab; label: string; icon: any }[] = [
  { id: "overview", label: "Overview", icon: User },
  { id: "orders", label: "My Orders", icon: Package },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "addresses", label: "Saved Addresses", icon: MapPin },
  { id: "settings", label: "Account Settings", icon: Settings },
];

export default function AccountPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("overview");

  return (
    <div className="min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#C82128] text-white px-4 py-6">
        <div className="max-w-350 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 flex items-center justify-center shrink-0">
              <User className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-black">{MOCK_USER.name}</h1>
              <p className="text-sm text-white/80 flex items-center gap-1.5 mt-0.5">
                <Mail className="w-3.5 h-3.5" /> {MOCK_USER.email}
              </p>
              <p className="text-xs text-white/70 flex items-center gap-1 mt-0.5">
                <Calendar className="w-3 h-3" /> Member since {MOCK_USER.memberSince}
              </p>
            </div>
          </div>
          <button className="flex items-center gap-1.5 text-sm font-bold text-white border border-white/30 px-3 py-1.5 hover:bg-white/10 transition-colors">
            <Edit2 className="w-3.5 h-3.5" /> Edit Profile
          </button>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-56 shrink-0">
          <nav className="border-b lg:border-b-0 border-gray-200 sticky top-20">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-0">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2.5 px-3 py-3 text-sm font-semibold whitespace-nowrap transition-colors border-b-2 lg:border-b-0 lg:border-l-2 w-full ${
                      activeTab === item.id
                        ? "border-[#C82128] text-[#C82128] bg-red-50"
                        : "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="hidden lg:inline">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:block border-t border-gray-200 mt-2 pt-2">
              <a
                href="tel:+8801234567890"
                className="flex items-center gap-2.5 px-3 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
              >
                <Phone className="w-4 h-4" /> Need Help?
              </a>
              <button
                onClick={() => router.push("/")}
                className="w-full flex items-center gap-2.5 px-3 py-3 text-sm font-bold text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">

          {/* Overview */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border border-gray-200 divide-x divide-y md:divide-y-0 divide-gray-200">
                {[
                  { icon: Package, value: 12, label: "Total Orders", color: "text-blue-700" },
                  { icon: Clock, value: 2, label: "Active Orders", color: "text-green-700" },
                  { icon: Heart, value: 8, label: "Wishlist", color: "text-red-600" },
                  { icon: Award, value: 450, label: "Reward Points", color: "text-purple-700" },
                ].map(({ icon: Icon, value, label, color }) => (
                  <div key={label} className="p-4 text-center">
                    <Icon className={`w-5 h-5 ${color} mx-auto mb-2`} />
                    <p className={`text-2xl font-black ${color}`}>{value}</p>
                    <p className="text-xs text-gray-500 font-semibold mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              {/* Recent Orders */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-base font-black text-gray-900">Recent Orders</h2>
                  <Link href="/orders" className="text-sm font-bold text-[#C82128] flex items-center gap-0.5 hover:underline">
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="divide-y divide-gray-100 border border-gray-200">
                  {RECENT_ORDERS.map((order) => (
                    <Link key={order.id} href={`/orders/${order.id}`}>
                      <div className="flex gap-3 p-4 hover:bg-gray-50 transition-colors cursor-pointer group">
                        <div className="w-14 h-14 bg-gray-50 shrink-0 flex items-center justify-center">
                          <img src={order.image} alt="Order" className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-1">
                            <div>
                              <p className="font-bold text-sm text-gray-900">{order.id}</p>
                              <p className="text-xs text-gray-400 mt-0.5">{order.date}</p>
                            </div>
                            <span className={`text-[10px] font-bold px-2 py-0.5 ${STATUS_COLORS[order.status]}`}>
                              {order.status.replace("-", " ").toUpperCase()}
                            </span>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-xs text-gray-500">
                              {order.items} items · <span className="font-bold text-gray-800">৳{order.total}</span>
                            </p>
                            <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Saved Addresses */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-base font-black text-gray-900">Saved Addresses</h2>
                  <button
                    onClick={() => setActiveTab("addresses")}
                    className="text-sm font-bold text-[#C82128] flex items-center gap-0.5 hover:underline"
                  >
                    Manage <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="divide-y divide-gray-100 border border-gray-200">
                  {SAVED_ADDRESSES.map((address, index) => (
                    <div key={index} className="flex items-start gap-3 p-4">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="font-bold text-sm text-gray-900">{address.type}</p>
                          {address.isDefault && (
                            <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{address.address}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === "orders" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-black text-gray-900">My Orders</h2>
                <Link href="/orders">
                  <Button className="bg-[#C82128] hover:bg-[#A81A20] text-white rounded-none h-9 text-sm font-bold">
                    <ShoppingBag className="w-4 h-4 mr-1.5" /> View All Orders
                  </Button>
                </Link>
              </div>
              <div className="border border-gray-200 p-10 text-center">
                <Package className="w-10 h-10 text-gray-200 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-gray-900 mb-1">Manage Your Orders</h3>
                <p className="text-sm text-gray-400 mb-4">Track, return, or reorder from your complete order history</p>
                <Link href="/orders">
                  <Button className="bg-[#C82128] hover:bg-[#A81A20] text-white rounded-none h-9 px-5 text-sm font-bold">
                    Go to Orders Page
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Wishlist Tab */}
          {activeTab === "wishlist" && (
            <div>
              <h2 className="text-base font-black text-gray-900 mb-4">My Wishlist</h2>
              <div className="border border-gray-200 p-10 text-center">
                <Heart className="w-10 h-10 text-gray-200 mx-auto mb-3" />
                <h3 className="text-sm font-bold text-gray-900 mb-1">Your wishlist is empty</h3>
                <p className="text-sm text-gray-400 mb-4">Save your favorite products here for quick access</p>
                <Link href="/">
                  <Button className="bg-[#C82128] hover:bg-[#A81A20] text-white rounded-none h-9 px-5 text-sm font-bold">
                    Browse Products
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {/* Addresses Tab */}
          {activeTab === "addresses" && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-black text-gray-900">Saved Addresses</h2>
                <Button className="bg-[#C82128] hover:bg-[#A81A20] text-white rounded-none h-9 text-sm font-bold">
                  <MapPin className="w-4 h-4 mr-1.5" /> Add New
                </Button>
              </div>
              <div className="border border-gray-200 divide-y divide-gray-100">
                {SAVED_ADDRESSES.map((address, index) => (
                  <div key={index} className="flex items-start justify-between p-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" />
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <p className="font-bold text-sm text-gray-900">{address.type}</p>
                          {address.isDefault && (
                            <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{address.address}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      <button className="text-xs font-bold text-[#C82128] hover:underline">Edit</button>
                      {!address.isDefault && (
                        <button className="text-xs font-bold text-red-500 hover:underline">Delete</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === "settings" && (
            <div>
              <h2 className="text-base font-black text-gray-900 mb-4">Account Settings</h2>
              <div className="border border-gray-200 divide-y divide-gray-100">
                {[
                  { label: "Email Address", value: MOCK_USER.email, action: "Change" },
                  { label: "Phone Number", value: MOCK_USER.phone, action: "Update" },
                  { label: "Password", value: "Last changed 3 months ago", action: "Reset" },
                  { label: "Notification Preferences", value: "Manage email and SMS notifications", action: "Configure" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-bold text-sm text-gray-900">{item.label}</p>
                      <p className="text-sm text-gray-500 mt-0.5">{item.value}</p>
                    </div>
                    <button className="text-sm font-bold text-[#C82128] hover:underline shrink-0 ml-4">
                      {item.action}
                    </button>
                  </div>
                ))}
              </div>

              {/* Mobile sign out */}
              <div className="mt-6 lg:hidden border-t border-gray-200 pt-4">
                <button
                  onClick={() => router.push("/")}
                  className="flex items-center gap-2 text-sm font-bold text-red-600"
                >
                  <LogOut className="w-4 h-4" /> Sign Out
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}