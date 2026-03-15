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
  Hash
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Mock order data - In production, fetch from API
const MOCK_ORDER = {
  id: "ORD-2024-001234",
  orderDate: new Date("2024-01-15T10:30:00"),
  status: "processing", // confirmed, processing, out-for-delivery, delivered, cancelled
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
  {
    key: "confirmed",
    label: "Order Confirmed",
    icon: CheckCircle,
    description: "We've received your order",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    key: "processing",
    label: "Processing",
    icon: Package,
    description: "Getting ready for delivery",
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    key: "out-for-delivery",
    label: "Out for Delivery",
    icon: Truck,
    description: "On the way to you",
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    key: "delivered",
    label: "Delivered",
    icon: CheckCircle,
    description: "Successfully delivered",
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
];

export default function OrderDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.id as string;
  
  // In production, fetch order data based on orderId
  const [order] = useState(MOCK_ORDER);

  const getCurrentStatusIndex = () => {
    const statusIndex = STATUS_STEPS.findIndex(step => step.key === order.status);
    return statusIndex === -1 ? 0 : statusIndex;
  };

  const currentStatusIndex = getCurrentStatusIndex();

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(date));
  };

  const handleDownloadInvoice = () => {
    // In production, generate PDF invoice
    alert("Invoice download feature coming soon!");
  };

  const handleShareOrder = () => {
    if (navigator.share) {
      navigator.share({
        title: `Order ${order.id}`,
        text: `Check my order from SHOPNO`,
        url: window.location.href,
      });
    } else {
      alert("Share feature not supported in this browser");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-350 mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700" />
              <span className="font-bold text-gray-900">Back</span>
            </button>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleShareOrder}
                className="hidden md:flex"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadInvoice}
              >
                <Download className="w-4 h-4 mr-2" />
                Invoice
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-350 mx-auto px-4 py-6 space-y-6">
        {/* Order Status Banner */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h1 className="text-2xl font-black text-gray-900 mb-2">
                  Order Details
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Hash className="w-4 h-4" />
                  <span>Order ID: {order.id}</span>
                </div>
              </div>
              <Badge className="bg-[#C82128] text-white font-bold uppercase">
                {order.status.replace(/-/g, ' ')}
              </Badge>
            </div>

            {/* Progress Tracker */}
            <div className="relative">
              <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 rounded-full" />
              <div 
                className="absolute top-4 left-0 h-1 bg-[#C82128] rounded-full transition-all duration-500"
                style={{ width: `${(currentStatusIndex / (STATUS_STEPS.length - 1)) * 100}%` }}
              />
              
              <div className="relative flex justify-between">
                {STATUS_STEPS.map((step, index) => {
                  const Icon = step.icon;
                  const isCompleted = index <= currentStatusIndex;
                  const isCurrent = index === currentStatusIndex;

                  return (
                    <div key={step.key} className="flex flex-col items-center flex-1">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors ${
                          isCompleted
                            ? 'bg-[#C82128] border-[#C82128] text-white'
                            : 'bg-white border-gray-300 text-gray-400'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="mt-2 text-center hidden md:block">
                        <p className={`text-xs font-bold ${isCompleted ? 'text-gray-900' : 'text-gray-400'}`}>
                          {step.label}
                        </p>
                        <p className="text-[10px] text-gray-500 mt-0.5">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Estimated Delivery */}
            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-xs font-bold text-gray-900">Estimated Delivery</p>
                  <p className="text-sm text-blue-600 font-bold mt-0.5">{order.delivery.estimatedTime}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Items */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Package className="w-5 h-5 text-[#C82128]" />
              Order Items ({order.items.length})
            </h2>

            <div className="space-y-4">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-20 h-20 bg-white rounded-md p-2 shrink-0 relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                    <Badge className="absolute top-1 right-1 bg-[#C82128] text-white text-[10px] px-1.5 py-0.5">
                      x{item.quantity}
                    </Badge>
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${item.id}`}>
                      <h3 className="font-bold text-sm text-gray-900 line-clamp-2 hover:text-[#C82128] transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">{item.unit}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="font-bold text-[#C82128]">৳{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">৳{item.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">
                      ৳{item.price * item.quantity}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Customer Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Delivery Address */}
          <Card>
            <CardContent className="p-4">
              <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#C82128]" />
                Delivery Address
              </h2>
              <div className="space-y-2 text-sm">
                <p className="font-bold text-gray-900">{order.customer.name}</p>
                <p className="text-gray-600">{order.customer.address}</p>
                <p className="text-gray-600">{order.customer.city} - {order.customer.zipCode}</p>
                <div className="flex items-center gap-2 pt-2">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a href={`tel:${order.customer.phone}`} className="text-[#C82128] font-bold hover:underline">
                    {order.customer.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <a href={`mailto:${order.customer.email}`} className="text-[#C82128] font-bold hover:underline">
                    {order.customer.email}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment Information */}
          <Card>
            <CardContent className="p-4">
              <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-[#C82128]" />
                Payment Details
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Payment Method</p>
                  <p className="text-sm font-bold text-gray-900 mt-1">
                    {order.payment.method === 'cod' ? 'Cash on Delivery' : 'Card Payment'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Payment Status</p>
                  <Badge className={`mt-1 ${
                    order.payment.status === 'paid' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {order.payment.status === 'paid' ? 'Paid' : 'Pending'}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase font-bold">Tracking ID</p>
                  <p className="text-sm font-mono font-bold text-gray-900 mt-1">{order.delivery.trackingId}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal ({order.items.reduce((acc, i) => acc + i.quantity, 0)} items)</span>
                <span className="font-medium text-gray-900">৳{order.pricing.subtotal}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Delivery Fee</span>
                {order.pricing.deliveryFee === 0 ? (
                  <span className="text-green-600 font-bold">Free</span>
                ) : (
                  <span className="font-medium text-gray-900">৳{order.pricing.deliveryFee}</span>
                )}
              </div>
              
              {order.pricing.discount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Discount</span>
                  <span className="font-bold text-[#C82128]">-৳{order.pricing.discount}</span>
                </div>
              )}
              
              <Separator />
              
              <div className="flex justify-between items-end">
                <span className="text-base font-bold text-gray-900">Total</span>
                <div className="text-right">
                  <span className="text-2xl font-black text-[#C82128]">৳{order.pricing.total}</span>
                  <p className="text-xs text-gray-500 mt-1">VAT included</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Timeline */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#C82128]" />
              Order Timeline
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C82128] mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-900">Order Placed</p>
                  <p className="text-xs text-gray-500 mt-0.5">{formatDate(order.orderDate)}</p>
                </div>
              </div>
              
              {currentStatusIndex >= 1 && (
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C82128] mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900">Order Confirmed</p>
                    <p className="text-xs text-gray-500 mt-0.5">{formatDate(new Date(order.orderDate.getTime() + 1800000))}</p>
                  </div>
                </div>
              )}
              
              {currentStatusIndex >= 2 && (
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#C82128] mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-bold text-gray-900">Out for Delivery</p>
                    <p className="text-xs text-gray-500 mt-0.5">{formatDate(new Date(order.orderDate.getTime() + 3600000))}</p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="bg-gradient-to-r from-[#C82128]/5 to-[#C82128]/10 border-[#C82128]/20">
          <CardContent className="p-4">
            <div className="text-center">
              <h3 className="text-base font-bold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Have questions about your order? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={`tel:+8801234567890`}>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </Button>
                </a>
                <Link href="/contact">
                  <Button className="w-full sm:w-auto bg-[#C82128] hover:bg-[#A81A20] text-white">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link href="/" className="flex-1">
            <Button variant="outline" className="w-full h-12 border-gray-200 font-bold">
              Continue Shopping
            </Button>
          </Link>
          <Link href="/orders" className="flex-1">
            <Button className="w-full h-12 bg-[#C82128] hover:bg-[#A81A20] text-white font-bold">
              View All Orders
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
