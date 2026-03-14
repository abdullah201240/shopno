"use client";
import {
  Apple,
  Baby,
  SprayCan,
  Dog,
  Sparkles
} from "lucide-react";
import CategorySidebar from "./CategorySidebar";
import HeroSlider from "./HeroSlider";
import PromoCategorySlider from "./PromoCategorySlider";

const sidebarCategories = [
  {
    name: "Ramadan", icon: Apple, slug: "ramadan",
    subs: []
  },
  {
    name: "Food", icon: Apple, slug: "food",
    subs: [
      { name: "Fruits & Vegetables", slug: "fruits-vegetables", subSubs: ["Fresh Fruits", "Fresh Vegetables", "Dried Fruits"] },
      { name: "Meat & Fish", slug: "meat-fish", subSubs: ["Fresh Meat", "Fish", "Sea Food"] },
      { name: "Eggs", slug: "eggs", subSubs: ["Chicken Eggs", "Duck Eggs", "Quail Eggs"] },
      { name: "Baking Needs", slug: "baking-needs", subSubs: ["Flour", "Yeast", "Baking Powder"] },
      { name: "Beverages", slug: "beverages", subSubs: ["Juice", "Soft Drinks", "Water", "Tea & Coffee"] },
      { name: "Snacks", slug: "snacks", subSubs: ["Chips", "Nuts", "Cookies"] },
      { name: "Frozen", slug: "frozen", subSubs: ["Ice Cream", "Frozen Vegetables", "Frozen Meat"] },
      { name: "Canned Food", slug: "canned-food", subSubs: ["Canned Vegetables", "Canned Fruits", "Canned Meat"] },
      { name: "Ice Cream", slug: "ice-cream", subSubs: ["Cup Ice Cream", "Cone Ice Cream", "Bar Ice Cream"] },
      { name: "Candy & Chocolate", slug: "candy-chocolate", subSubs: ["Chocolate", "Candy", "Gum"] },
      { name: "Dairy", slug: "dairy", subSubs: ["Milk", "Cheese", "Yogurt", "Butter"] },
      { name: "Breakfast", slug: "breakfast", subSubs: ["Cereal", "Oatmeal", "Bread"] },
      { name: "Sauces & Pickles", slug: "sauces-pickles", subSubs: ["Sauce", "Pickles", "Chutney"] },
      { name: "Cooking", slug: "cooking", subSubs: ["Oil", "Spices", "Salt"] }
    ]
  },
  {
    name: "Baby Food & Care", icon: Baby, slug: "baby-food-care",
    subs: [
      { name: "Baby Food", slug: "baby-food", subSubs: ["Formula", "Cerelac", "Baby Snacks"] },
      { name: "Baby Wipes", slug: "baby-wipes", subSubs: ["Wet Wipes", "Dry Wipes", "Baby Towels"] },
      { name: "Baby Bath & Skincare", slug: "baby-bath", subSubs: ["Baby Soap", "Baby Lotion", "Baby Oil"] },
      { name: "Baby Oral Care", slug: "baby-oral", subSubs: ["Toothbrush", "Toothpaste", "Teether"] },
      { name: "Baby Accessories", slug: "baby-accessories", subSubs: ["Bottle", "Pacifier", "Diaper Bag"] }
    ]
  },
  {
    name: "Diapers", icon: Baby, slug: "diapers",
    subs: [
      { name: "Baby Diapers", slug: "baby-diapers", subSubs: ["Newborn", "Small", "Medium", "Large", "XL"] }
    ]
  },
  {
    name: "Home Cleaning", icon: SprayCan, slug: "home-cleaning",
    subs: [
      { name: "Dish Cleaner", slug: "dish-cleaner", subSubs: ["Dish Soap", "Dish Liquid", "Dish Powder"] },
      { name: "Laundry", slug: "laundry", subSubs: ["Detergent", "Fabric Softener", "Bleach"] },
      { name: "Air Fresheners", slug: "air-fresheners", subSubs: ["Spray", "Gel", "Plug-in"] },
      { name: "Floor Glass & Wood Cleaners", slug: "floor-cleaners", subSubs: ["Floor Cleaner", "Glass Cleaner", "Wood Polish"] },
      { name: "Toilet Cleaners", slug: "toilet-cleaners", subSubs: ["In-cistern", "Brush", "Liquid"] },
      { name: "Pest Control", slug: "pest-control", subSubs: ["Mousetrap", "Insect Spray", "Cockroach Killer"] },
      { name: "Trash Supplies", slug: "trash-supplies", subSubs: ["Trash Bag", "Dustbin", "Dustpan"] }
    ]
  },
  {
    name: "Pet Care", icon: Dog, slug: "pet-care",
    subs: [
      { name: "Cat Food", slug: "cat-food", subSubs: ["Dry Food", "Wet Food", "Treats"] }
    ]
  },
  {
    name: "Beauty & Health", icon: Sparkles, slug: "beauty-health",
    subs: [
      { name: "Beauty Care", slug: "beauty-care", subSubs: ["Skincare", "Makeup", "Hair Care"] },
      { name: "Health Care", slug: "health-care", subSubs: ["Vitamins", "Medicine", "First Aid"] }
    ]
  },
  {
    name: "Fashion & Lifestyle", icon: SprayCan, slug: "fashion-lifestyle",
    subs: [
      { name: "Kurtis Tunics & Tops", slug: "kurtis", subSubs: ["Cotton", "Silk", "Synthetic"] },
      { name: "Skirts & Palazzos", slug: "skirts", subSubs: ["Long Skirt", "Short Skirt", "Palazzo"] },
      { name: "Lungi", slug: "lungi", subSubs: ["Cotton Lungi", "Silk Lungi", "Printed Lungi"] }
    ]
  },
  {
    name: "Home & Kitchen", icon: Apple, slug: "home-kitchen",
    subs: [
      { name: "Home Appliance", slug: "home-appliance", subSubs: ["Fan", "Light", "Heater"] },
      { name: "Kitchen Accessories", slug: "kitchen-accessories", subSubs: [" utensils", "Cookware", "Bakeware"] },
      { name: "Kitchen Essentials", slug: "kitchen-essentials", subSubs: ["Plates", "Glasses", "Cutlery"] },
      { name: "Home Accessories", slug: "home-accessories", subSubs: ["Curtains", "Carpets", "Cushions"] },
      { name: "Lights & Electrical", slug: "lights", subSubs: ["LED", "Bulb", "Tube"] },
      { name: "Tools & Hardware", slug: "tools-hardware", subSubs: ["Screwdriver", "Hammer", "Wrench"] }
    ]
  },
  {
    name: "Stationeries", icon: SprayCan, slug: "stationeries",
    subs: [
      { name: "Batteries", slug: "batteries", subSubs: ["AA", "AAA", "Rechargeable"] },
      { name: "Writing & Drawing", slug: "writing", subSubs: ["Pen", "Pencil", "Notebook"] }
    ]
  },
  {
    name: "Toys & Sports", icon: Apple, slug: "toys-sports",
    subs: [
      { name: "Sports & Outdoor", slug: "sports-outdoor", subSubs: ["Cricket", "Football", "Badminton"] },
      { name: "Soft Toys", slug: "soft-toys", subSubs: ["Teddy Bear", "Pillow", "Character"] },
      { name: "Dolls & Plastic Toys", slug: "dolls", subSubs: ["Barbie", "Action Figure", "Plastic Car"] },
      { name: "Learning & Educational Toys", slug: "learning-toys", subSubs: ["Puzzle", "Building Blocks", "Science Kit"] }
    ]
  },
];

const promoCategories = [
  { name: "Honey", image: "/catagory/65f1547b733cb673c88fc6a3_Honey (1)_300.webp" },
  { name: "Baby Food", image: "/catagory/65ffaf59d2372028beccb0a7_baby food & care_300.webp" },
  { name: "Shampoo", image: "/catagory/66b826195c414d20bf52e59b_Shampoo_300.png" },
  { name: "Conditioner", image: "/catagory/66b82633367d9a39bc43ec05_Conditioner_300.png" },
  { name: "Home Cleaning", image: "/catagory/661f4e01c15481a97eed7698_Home Cleaning_300.png" },
  { name: "Fashion", image: "/catagory/6682c9ddae2c9abd70f18c50_fashion and lifestyle_300.png" },
  { name: "Milk", image: "/catagory/6682cb180a54717fc7e72781_Liquid & UHT Milk 2_300.png" },
  { name: "Toys & Sports", image: "/catagory/66010b23933e34c33990225c_Toys & Sports _300.webp" },
  { name: "Spices", image: "/catagory/660112dd4744fb420cd5934b_spices_300.webp" },
  { name: "Fresh Fruit", image: "/catagory/6621025ad66f7762f1e65133_Fresh-Fruit_300.webp" },
];

const banners = [
  { image: "/poster/1.png", alt: "Daily Needs Promo" },
  { image: "/poster/2.png", alt: "Fresh Fruits Promo" },
  { image: "/poster/3.png", alt: "Meat Special Promo" }
];

const HomeHero = () => {
  return (
    <section className="relative z-0 w-full px-0 lg:px-6">
      <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 h-auto w-full">
        {/* Left Sidebar - Hidden on lg and below handled in CategorySidebar */}
        <CategorySidebar categories={sidebarCategories} />

        {/* Right Content Area */}
        <div className="flex-1 flex flex-col gap-2 min-h-fit lg:h-137.5 p-0 lg:p-0">
          {/* Slider Section */}
          <div className="h-auto aspect-video sm:h-87.5">
            <HeroSlider banners={banners} />
          </div>

          {/* Promo Category Row - Slider */}
          <div className="block">
            <PromoCategorySlider categories={promoCategories} />
          </div>
        </div>
      </div>

      


    </section>
  );
};

export default HomeHero;
