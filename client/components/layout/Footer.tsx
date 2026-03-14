import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-black text-brand-primary tracking-tight">SHOPNO</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Bangladesh's largest retail chain, delivering fresh groceries and lifestyle products right to your doorstep.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-background border hover:border-brand-primary hover:text-brand-primary transition-all">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-background border hover:border-brand-primary hover:text-brand-primary transition-all">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-background border hover:border-brand-primary hover:text-brand-primary transition-all">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Customer Service</h4>
            <ul className="space-y-4">
              {["Contact Us", "Help Center", "How to Buy", "Returns & Refunds", "Shipping & Delivery"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-brand-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-bold text-lg mb-6">About SHOPNO</h4>
            <ul className="space-y-4">
              {["Our Story", "Corporate Info", "Career", "Store Locator", "Sustainability"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-brand-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-brand-primary flex-shrink-0" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-brand-primary flex-shrink-0" />
                <span>support@shopno.com</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-brand-primary flex-shrink-0" />
                <span>Mirpur, Dhaka, Bangladesh</span>
              </li>
            </ul>
            <div className="mt-8">
               <h5 className="font-semibold text-sm mb-3">Download our App</h5>
               <div className="flex gap-2">
                 <div className="h-10 w-28 bg-black rounded-lg border border-white/10 flex items-center px-2 cursor-pointer">
                    <div className="h-6 w-6 bg-white rounded-full mr-2"></div>
                    <div className="text-[10px] text-white">Get it on <br /><span className="text-xs font-bold uppercase">App Store</span></div>
                 </div>
                 <div className="h-10 w-28 bg-black rounded-lg border border-white/10 flex items-center px-2 cursor-pointer">
                    <div className="h-6 w-6 bg-white rounded-full mr-2"></div>
                    <div className="text-[10px] text-white">Get it on <br /><span className="text-xs font-bold uppercase">Play Store</span></div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-muted/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-medium">
            © {new Date().getFullYear()} SHOPNO. All rights reserved.
          </p>
          <div className="flex gap-6 items-center">
             <Link href="#" className="text-muted-foreground hover:text-brand-primary text-xs">Terms of Service</Link>
             <Link href="#" className="text-muted-foreground hover:text-brand-primary text-xs">Privacy Policy</Link>
             <Link href="#" className="text-muted-foreground hover:text-brand-primary text-xs">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
