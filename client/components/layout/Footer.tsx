import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 pt-12 pb-8 border-t">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <div className="relative h-12 w-32">
                <Image
                  src="/shwapno_logo.png"
                  alt="Shopno"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-500 text-sm mb-4">
              Your trusted online grocery store in Bangladesh. Fresh groceries delivered to your doorstep.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="h-9 w-9 flex items-center justify-center rounded bg-gray-100 hover:bg-[#C82128] hover:text-white transition-colors">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-9 w-9 flex items-center justify-center rounded bg-gray-100 hover:bg-[#C82128] hover:text-white transition-colors">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-9 w-9 flex items-center justify-center rounded bg-gray-100 hover:bg-[#C82128] hover:text-white transition-colors">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-9 w-9 flex items-center justify-center rounded bg-gray-100 hover:bg-[#C82128] hover:text-white transition-colors">
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Customer Service</h4>
            <ul className="space-y-2">
              {["Contact Us", "Help Center", "How to Buy", "Returns & Refunds", "Shipping & Delivery"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-[#C82128] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-bold text-lg mb-4">About Shopno</h4>
            <ul className="space-y-2">
              {["Our Story", "Corporate Info", "Career", "Store Locator", "Sustainability"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-500 hover:text-[#C82128] transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Phone className="h-4 w-4 text-[#C82128]" />
                <span>+880 1234-567890</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <Mail className="h-4 w-4 text-[#C82128]" />
                <span>support@shopno.com</span>
              </li>
              <li className="flex items-center gap-3 text-gray-500 text-sm">
                <MapPin className="h-4 w-4 text-[#C82128]" />
                <span>Mirpur, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-200 pt-6 mb-6">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-xs text-gray-400">We accept:</span>
            {["Visa", "Mastercard", "bKash", "Nagad", "COD"].map((method) => (
              <div key={method} className="px-3 py-1 bg-gray-100 rounded text-xs text-gray-500">
                {method}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} SHOPNO. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-[#C82128] text-xs transition-colors">Terms</Link>
            <Link href="#" className="text-gray-400 hover:text-[#C82128] text-xs transition-colors">Privacy</Link>
            <Link href="#" className="text-gray-400 hover:text-[#C82128] text-xs transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;