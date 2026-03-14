import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin, Heart, Sparkles, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-muted/30 to-muted/50 pt-20 pb-8 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/5 rounded-full blur-3xl translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-brand-primary via-orange-500 to-brand-primary bg-[length:200%_100%] animate-gradient rounded-3xl p-8 md:p-12 mb-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-2">Subscribe to our Newsletter</h3>
              <p className="text-white/80 text-sm md:text-base">Get the latest updates, offers and more</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 md:w-80 px-5 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <button className="px-6 py-3 bg-white text-brand-primary font-bold rounded-xl hover:bg-white/90 transition-all duration-300 hover:shadow-lg active:scale-95 flex items-center gap-2">
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <span className="text-3xl font-black text-brand-primary tracking-tight group-hover:scale-105 inline-block transition-transform duration-300">SHOPNO</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Bangladesh&apos;s largest retail chain, delivering fresh groceries and lifestyle products right to your doorstep.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-xl bg-background border border-border hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-300 hover-lift">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-xl bg-background border border-border hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-300 hover-lift">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-xl bg-background border border-border hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-300 hover-lift">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="h-10 w-10 flex items-center justify-center rounded-xl bg-background border border-border hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-300 hover-lift">
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-primary" />
              Customer Service
            </h4>
            <ul className="space-y-3">
              {["Contact Us", "Help Center", "How to Buy", "Returns & Refunds", "Shipping & Delivery"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-brand-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-primary" />
              About SHOPNO
            </h4>
            <ul className="space-y-3">
              {["Our Story", "Corporate Info", "Career", "Store Locator", "Sustainability"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-brand-primary transition-colors duration-300 text-sm flex items-center gap-2 group">
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand-primary" />
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm text-muted-foreground group">
                <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70">Hotline</p>
                  <span className="font-semibold text-foreground">+880 1234-567890</span>
                </div>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground group">
                <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70">Email</p>
                  <span className="font-semibold text-foreground">support@shopno.com</span>
                </div>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground group">
                <div className="h-10 w-10 rounded-xl bg-brand-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground/70">Address</p>
                  <span className="font-semibold text-foreground">Mirpur, Dhaka</span>
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <h5 className="font-semibold text-sm mb-3">Download our App</h5>
              <div className="flex gap-2">
                <div className="h-11 w-28 bg-black rounded-xl border border-white/10 flex items-center px-2.5 cursor-pointer hover:bg-black/90 transition-all duration-300 hover:scale-105 hover-lift">
                  <div className="h-7 w-7 bg-white rounded-lg mr-2 flex items-center justify-center">
                    <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="text-white">
                    <div className="text-[9px] opacity-70">Download on the</div>
                    <div className="text-xs font-bold -mt-0.5">App Store</div>
                  </div>
                </div>
                <div className="h-11 w-28 bg-black rounded-xl border border-white/10 flex items-center px-2.5 cursor-pointer hover:bg-black/90 transition-all duration-300 hover:scale-105 hover-lift">
                  <div className="h-7 w-7 bg-white rounded-lg mr-2 flex items-center justify-center">
                    <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div className="text-white">
                    <div className="text-[9px] opacity-70">Get it on</div>
                    <div className="text-xs font-bold -mt-0.5">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-border/50 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-4 opacity-60">
            <span className="text-xs font-medium text-muted-foreground">We accept:</span>
            {["Visa", "Mastercard", "bKash", "Nagad", "COD"].map((method) => (
              <div key={method} className="px-4 py-2 bg-background rounded-lg border border-border text-xs font-semibold text-muted-foreground">
                {method}
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs font-medium flex items-center gap-1">
            © {new Date().getFullYear()} SHOPNO. Made with <Heart className="h-3 w-3 text-brand-primary fill-brand-primary animate-pulse" /> in Bangladesh
          </p>
          <div className="flex gap-6 items-center">
            <Link href="#" className="text-muted-foreground hover:text-brand-primary text-xs transition-colors duration-300">Terms of Service</Link>
            <Link href="#" className="text-muted-foreground hover:text-brand-primary text-xs transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="text-muted-foreground hover:text-brand-primary text-xs transition-colors duration-300">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
