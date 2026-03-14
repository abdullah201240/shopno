"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <MainLayout>
      <div className="container mx-auto px-4 lg:px-6 py-20">
        <div className="max-w-md mx-auto text-center">
          {/* Error Icon */}
          <div className="relative inline-block mb-8">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-red-500/10 to-orange-500/10 flex items-center justify-center">
              <AlertTriangle className="h-12 w-12 text-red-500" />
            </div>
            <div className="absolute -inset-2 rounded-full bg-red-500/5 animate-pulse"></div>
          </div>
          
          {/* Error Message */}
          <h1 className="text-3xl font-black text-foreground mb-3">
            Oops! Something went wrong
          </h1>
          <p className="text-muted-foreground mb-8">
            We apologize for the inconvenience. Please try again or return to the homepage.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={reset}
              className="bg-gradient-to-r from-brand-primary to-orange-500 text-white font-bold px-8 h-12 rounded-xl shadow-premium hover:shadow-glow-primary hover:scale-105 active:scale-95 transition-all duration-300 gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Try Again
            </Button>
            <Button
              variant="outline"
              onClick={() => window.location.href = "/"}
              className="border-border font-bold px-8 h-12 rounded-xl hover:bg-muted transition-all duration-300 gap-2"
            >
              <Home className="h-4 w-4" />
              Go Home
            </Button>
          </div>
          
          {/* Error Code */}
          {error.digest && (
            <p className="mt-8 text-xs text-muted-foreground font-mono">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </div>
    </MainLayout>
  );
}
