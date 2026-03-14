export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  unit: string;
  discount?: string;
  image: string;
}

export const MOCK_PRODUCTS: Product[] = [
  { id: "1", name: "Fresh Royal Gala Apple", price: 280, originalPrice: 320, unit: "1 kg", discount: "12%", image: "https://images.unsplash.com/photo-1560742124-275138ed499b?w=400&h=400" },
  { id: "2", name: "Premium Organic Bananas", price: 60, unit: "1 dozen", image: "https://images.unsplash.com/photo-1571771894821-ad99025357b0?w=400&h=400" },
  { id: "3", name: "Green Capsicum", price: 45, originalPrice: 55, unit: "250 g", discount: "18%", image: "https://images.unsplash.com/photo-1563513307168-a49629f48ac1?w=400&h=400" },
  { id: "4", name: "Farm Fresh Large Eggs", price: 145, unit: "12 pcs", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400" },
  { id: "5", name: "Fresh Salmon Fillet", price: 1250, originalPrice: 1500, unit: "500 g", discount: "৳250 OFF", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400" },
  { id: "6", name: "Whole Milk - 1L", price: 95, unit: "1 Liter", image: "https://images.unsplash.com/photo-1563636619-e9107da5a76a?w=400&h=400" },
];

export const NEW_ARRIVALS: Product[] = [
  { id: "n1", name: "Blueberries Jumbo Pack", price: 450, unit: "125 g", image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&h=400" },
  { id: "n2", name: "Red Seedless Grapes", price: 380, originalPrice: 420, unit: "500 g", discount: "10%", image: "https://images.unsplash.com/photo-1537640538966-79f369b41f8f?w=400&h=400" },
  { id: "n3", name: "Australian Avocado", price: 220, unit: "1 pc", image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400&h=400" },
  { id: "n4", name: "Broccoli Special", price: 80, originalPrice: 100, unit: "500 g", discount: "20%", image: "https://images.unsplash.com/photo-1452967712862-0cca1839ff27?w=400&h=400" },
  { id: "n5", name: "Thai Sweet Mango", price: 350, unit: "1 kg", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&h=400" },
  { id: "n6", name: "Cherry Tomatoes", price: 65, unit: "250 g", image: "https://images.unsplash.com/photo-1546473427-e1ad6d72370c?w=400&h=400" },
];
