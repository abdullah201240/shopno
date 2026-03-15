"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { CreditCard, MapPin,User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CheckoutPage() {
  const router = useRouter();
  const { cartItems, cartTotal, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    paymentMethod: "cod",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Set mounted state
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Redirect if cart is empty (only after mounting)
  React.useEffect(() => {
    if (mounted && cartItems.length === 0) {
      router.push("/cart");
    }
  }, [cartItems.length, router, mounted]);

  // Don't render until mounted to prevent flash of redirect
  if (!mounted) {
    return null;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\d{11}$/.test(formData.phone.replace(/-/g, ""))) {
      newErrors.phone = "Enter a valid 11-digit phone number";
    }
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.zipCode.trim()) newErrors.zipCode = "ZIP code is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    clearCart();
    router.push("/order-success");
  };

  const deliveryFee = cartTotal >= 500 ? 0 : 60;
  const discount = cartItems.reduce(
    (acc, curr) => acc + ((curr.originalPrice || curr.price) - curr.price) * curr.quantity,
    0
  );
  const finalTotal = cartTotal + deliveryFee;

  if (cartItems.length === 0) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen pt-8">
     

      <div className="max-w-350 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Left Column - Customer Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <Card className="rounded-none shadow-none border-none">
                <CardContent>
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <User className="w-5 h-5 text-[#C82128]" />
                    Contact Information
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your full name"
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="01XXXXXXXXX"
                          className={errors.phone ? "border-red-500" : ""}
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className={errors.email ? "border-red-500" : ""}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Delivery Address */}
              <Card className="rounded-none shadow-none border-none">
                <CardContent >
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#C82128]" />
                    Delivery Address
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Street Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="House, Road, Area"
                        className={errors.address ? "border-red-500" : ""}
                      />
                      {errors.address && (
                        <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          City <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="Dhaka"
                          className={errors.city ? "border-red-500" : ""}
                        />
                        {errors.city && (
                          <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          ZIP Code <span className="text-red-500">*</span>
                        </label>
                        <Input
                          type="text"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleInputChange}
                          placeholder="1200"
                          className={errors.zipCode ? "border-red-500" : ""}
                        />
                        {errors.zipCode && (
                          <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="rounded-none shadow-none border-none">
                <CardContent >
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#C82128]" />
                    Payment Method
                  </h2>

                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#C82128] transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === "cod"}
                        onChange={handleInputChange}
                        className="w-4 h-4 text-[#C82128]"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Cash on Delivery</div>
                        <div className="text-sm text-gray-500">Pay when you receive your order</div>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#C82128] transition-colors opacity-50 cursor-not-allowed">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        disabled
                        className="w-4 h-4 text-[#C82128]"
                      />
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Credit/Debit Card</div>
                        <div className="text-sm text-gray-500">Coming soon</div>
                      </div>
                    </label>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="rounded-none shadow-none border-none">
                  <CardContent >
                    <h2 className="text-lg font-bold text-gray-900  pb-4">
                      Order Summary
                    </h2>

                    {/* Products List */}
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-3">
                          <div className="w-16 h-16 bg-gray-50 rounded-md p-2 shrink-0 relative">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-contain"
                            />
                            <Badge className="absolute -top-2 -right-2 bg-[#C82128] text-white text-[10px] px-1 py-0.5">
                              {item.quantity}
                            </Badge>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 line-clamp-2">
                              {item.name}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">{item.unit}</p>
                            <p className="text-sm font-bold text-[#C82128] mt-1">
                              ৳{item.price * item.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Price Breakdown */}
                    <div className="border-t border-gray-100 pt-4 space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Subtotal ({cartItems.length} items)</span>
                        <span className="font-medium">৳{cartTotal}</span>
                      </div>

                      <div className="flex justify-between text-sm text-gray-600">
                        <span>Delivery Fee</span>
                        {deliveryFee === 0 ? (
                          <span className="text-green-600 font-bold">Free</span>
                        ) : (
                          <span className="font-medium">৳{deliveryFee}</span>
                        )}
                      </div>

                      {discount > 0 && (
                        <div className="flex justify-between text-sm text-[#C82128]">
                          <span>Discount</span>
                          <span className="font-bold">-৳{discount}</span>
                        </div>
                      )}

                      <div className="border-t border-gray-100 pt-3">
                        <div className="flex justify-between items-end">
                          <span className="text-base font-bold text-gray-900">Total</span>
                          <div className="text-right">
                            <span className="text-2xl font-black text-[#C82128]">
                              ৳{finalTotal}
                            </span>
                            <p className="text-xs text-gray-500 mt-1">
                              VAT included
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full h-12 bg-[#C82128] hover:bg-[#A81A20] text-white font-bold text-base shadow-lg"
                    >
                      Place Order
                    </Button>

                    
                    
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
