"use client";

import React from "react";
import Image from "next/image";
import { Plus, Minus, ShoppingBag } from "lucide-react";
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

  return (
    <Card className="group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-300 bg-white rounded-2xl">
      <CardContent className="p-3">
        {/* Image Section */}
        <div className="relative mb-3">
          <AspectRatio ratio={1 / 1} className="bg-muted rounded-xl overflow-hidden">
            <img
              src={image}
              alt={name}
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
            />
          </AspectRatio>
          
          {discount && (
            <Badge className="absolute top-2 left-2 bg-brand-primary text-white font-bold px-2 py-0.5 border-none rounded-lg">
              {discount}
            </Badge>
          )}

          <Badge variant="secondary" className="absolute bottom-2 right-2 bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-muted-foreground border-none shadow-sm">
            {deliveryTime}
          </Badge>
        </div>

        {/* Product Details */}
        <div className="space-y-1">
          <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{unit}</p>
          <h3 className="font-bold text-sm line-clamp-2 leading-tight h-10 group-hover:text-brand-primary transition-colors cursor-pointer">
            {name}
          </h3>
          
          <div className="flex items-center gap-2 pt-1">
            <span className="text-brand-primary font-black text-lg">৳{price}</span>
            {originalPrice && (
              <span className="text-muted-foreground line-through text-xs">৳{originalPrice}</span>
            )}
          </div>
        </div>

        {/* Add to Cart Section */}
        <div className="mt-4">
          {quantity === 0 ? (
            <Button 
              className="w-full bg-brand-primary/10 text-brand-primary hover:bg-brand-primary hover:text-white border-none rounded-xl font-bold gap-2 group/btn transition-all duration-300 h-9"
              onClick={() => setQuantity(1)}
            >
              <ShoppingBag className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
              <span>Add to Bag</span>
            </Button>
          ) : (
            <div className="flex items-center justify-between bg-brand-primary text-white p-1 rounded-xl h-9 animate-in zoom-in-95 duration-200">
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-7 w-7 text-white hover:bg-white/20 hover:text-white rounded-lg"
                onClick={() => setQuantity(q => Math.max(0, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="font-black text-sm">{quantity}</span>
              <Button 
                size="icon" 
                variant="ghost" 
                className="h-7 w-7 text-white hover:bg-white/20 hover:text-white rounded-lg"
                onClick={() => setQuantity(q => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
