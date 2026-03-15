"use client";

import React from "react";
import ImageWithFallback from "@/components/ui/ImageWithFallback";
import Link from "next/link";
import { Plus, Minus, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  unit: string;
  image: string;
  discount?: string;
  deliveryTime?: string;
}

const ProductCard = ({ 
  id,
  name, 
  price, 
  originalPrice, 
  unit, 
  image, 
  discount, 
  deliveryTime = "1-2 hrs" 
}: ProductCardProps) => {
  const { cartItems, addToCart, updateQuantity } = useCart();
  
  const cartItem = cartItems.find(item => item.id === id);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = () => addToCart({ id, name, price, originalPrice, image, unit, quantity: 1 });
  const handleIncrease = () => updateQuantity(id, quantity + 1);
  const handleDecrease = () => updateQuantity(id, quantity - 1);

  return (
    <Card className="group relative overflow-hidden border-none shadow-none rounded-none">
      

      <CardContent>
        {/* Image Section */}
        <div className="relative mb-2 px-2 pt-2">
          <Link href={`/product/${id}`}>
            <AspectRatio ratio={1 / 1} className="overflow-hidden">
              <ImageWithFallback
                src={image}
                alt={name}
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
                sizes="200px"
              />
            </AspectRatio>
          </Link>
          
          {discount && (
            <Badge className="absolute top-2 left-2 bg-[#C82128] text-white font-bold text-[10px] px-1.5 py-0 border-none rounded">
              {discount}
            </Badge>
          )}

          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
             <div className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-full px-2 py-0.5 shadow-sm flex items-center gap-1">
                <Clock className="h-2.5 w-2.5 text-brand-secondary" />
                <span className="text-[9px] font-bold text-gray-500">{deliveryTime}</span>
             </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-0.5 text-center mt-2">
          <Link href={`/product/${id}`}>
            <h3 className="font-bold text-[13px] line-clamp-2 leading-tight h-8 text-gray-800 hover:text-[#C82128] transition-colors">
              {name}
            </h3>
          </Link>
          <p className="text-[10px] text-gray-500 font-bold uppercase">{unit}</p>
          
          <div className="flex flex-col items-center pt-1">
            <span className="text-[#C82128] font-black text-base">৳{price}</span>
            {originalPrice && (
              <span className="text-gray-400 line-through text-[11px]">৳{originalPrice}</span>
            )}
          </div>
        </div>

        {/* Add to Bag Section - Shwapno Style */}
        <div className="mt-3">
          {quantity === 0 ? (
            <Button 
              className="w-full bg-[#C82128] hover:bg-[#C82128]/90 text-white border-none rounded-md font-bold text-xs h-8 shadow-sm transition-all"
              onClick={handleAdd}
            >
              Add to Bag
            </Button>
          ) : (
            <div className="flex items-center justify-between bg-[#C82128] text-white rounded-md h-8 px-1">
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-6 w-6 text-white hover:bg-white/20 rounded-md"
                onClick={handleDecrease}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="font-black text-xs">{quantity}</span>
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-6 w-6 text-white hover:bg-white/20 rounded-md"
                onClick={handleIncrease}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
