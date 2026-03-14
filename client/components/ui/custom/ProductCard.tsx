"use client";

import React from "react";
import Image from "next/image";
import { Plus, Minus, ShoppingBag, Heart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  name, 
  price, 
  originalPrice, 
  unit, 
  image, 
  discount, 
  deliveryTime = "1-2 hrs" 
}: ProductCardProps) => {
  const [quantity, setQuantity] = React.useState(0);
  const [isWishlisted, setIsWishlisted] = React.useState(false);

  return (
    <Card className="group relative overflow-hidden border border-border/50 shadow-sm hover:shadow-premium-lg transition-all duration-500 bg-white rounded-2xl hover:-translate-y-1">
      {/* Wishlist Button */}
      <button 
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-3 right-3 z-20 h-8 w-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white"
      >
        <Heart className={`h-4 w-4 transition-colors duration-300 ${isWishlisted ? 'fill-brand-primary text-brand-primary' : 'text-muted-foreground hover:text-brand-primary'}`} />
      </button>

      <CardContent className="p-3">
        {/* Image Section */}
        <div className="relative mb-3">
          <AspectRatio ratio={1 / 1} className="bg-gradient-to-br from-muted/50 to-muted rounded-xl overflow-hidden">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
            />
            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </AspectRatio>
          
          {/* Discount Badge */}
          {discount && (
            <Badge className="absolute top-2 left-2 bg-gradient-to-r from-brand-primary to-orange-500 text-white font-bold px-2.5 py-1 border-none rounded-lg shadow-md animate-bounce-in">
              {discount}
            </Badge>
          )}

          {/* Delivery Time Badge */}
          <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 shadow-sm">
            <Clock className="h-3 w-3 text-brand-secondary" />
            <span className="text-[10px] font-semibold text-muted-foreground">{deliveryTime}</span>
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-1.5">
          <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">{unit}</p>
          <h3 className="font-bold text-sm line-clamp-2 leading-tight h-10 group-hover:text-brand-primary transition-colors duration-300 cursor-pointer">
            {name}
          </h3>
          
          <div className="flex items-baseline gap-2 pt-0.5">
            <span className="text-brand-primary font-black text-lg">৳{price}</span>
            {originalPrice && (
              <span className="text-muted-foreground line-through text-xs font-medium">৳{originalPrice}</span>
            )}
          </div>
        </div>

        {/* Add to Cart Section */}
        <div className="mt-3">
          {quantity === 0 ? (
            <Button 
              className="w-full bg-gradient-to-r from-brand-primary/10 to-orange-500/10 text-brand-primary hover:from-brand-primary hover:to-orange-500 hover:text-white border-none rounded-xl font-bold gap-2 group/btn transition-all duration-500 h-10 shadow-sm hover:shadow-md"
              onClick={() => setQuantity(1)}
            >
              <ShoppingBag className="h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
              <span>Add to Bag</span>
            </Button>
          ) : (
            <div className="flex items-center justify-between bg-gradient-to-r from-brand-primary to-orange-500 text-white p-1 rounded-xl h-10 animate-scale-in shadow-md">
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-8 w-8 text-white hover:bg-white/20 hover:text-white rounded-lg transition-all duration-200 active:scale-90"
                onClick={() => setQuantity(q => Math.max(0, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-black text-sm min-w-[2rem] text-center">{quantity}</span>
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-8 w-8 text-white hover:bg-white/20 hover:text-white rounded-lg transition-all duration-200 active:scale-90"
                onClick={() => setQuantity(q => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
      </div>
    </Card>
  );
};

export default ProductCard;
