import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileNav from "@/components/layout/MobileNav";
import FloatingCart from "@/components/layout/FloatingCart";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shwapno - Best Grocery Online Shop in Bangladesh",
  description: "Shop for groceries, fresh vegetables, fruits and daily needs from Shwapno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <TooltipProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <FloatingCart />
            <main className="flex-1 pb-20 md:pb-0">{children}</main>
            <Footer />
            <MobileNav />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
