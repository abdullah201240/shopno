import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pb-20 md:pb-0">
        {children}
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};

export default MainLayout;
