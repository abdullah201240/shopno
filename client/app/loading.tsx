import MainLayout from "@/components/layout/MainLayout";

export default function Loading() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 lg:px-6 py-8">
        {/* Hero Skeleton */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="hidden lg:block w-72 h-[420px] bg-muted/50 rounded-2xl animate-pulse"></div>
          <div className="flex-1 h-[200px] md:h-[420px] bg-muted/50 rounded-2xl animate-pulse"></div>
        </div>
        
        {/* Trust Badges Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-20 bg-muted/50 rounded-2xl animate-pulse"></div>
          ))}
        </div>
        
        {/* Category Grid Skeleton */}
        <div className="py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-muted/50 rounded-xl animate-pulse"></div>
              <div>
                <div className="h-6 w-40 bg-muted/50 rounded-lg animate-pulse mb-2"></div>
                <div className="h-4 w-32 bg-muted/50 rounded-lg animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-3">
                <div className="h-24 w-24 md:h-28 md:w-28 bg-muted/50 rounded-2xl animate-pulse"></div>
                <div className="h-4 w-16 bg-muted/50 rounded-lg animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Products Grid Skeleton */}
        <div className="py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="h-6 w-40 bg-muted/50 rounded-lg animate-pulse mb-2"></div>
              <div className="h-4 w-32 bg-muted/50 rounded-lg animate-pulse"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-muted/50 rounded-2xl p-3 animate-pulse">
                <div className="aspect-square bg-muted rounded-xl mb-3"></div>
                <div className="h-3 w-12 bg-muted rounded mb-2"></div>
                <div className="h-4 w-full bg-muted rounded mb-2"></div>
                <div className="h-4 w-16 bg-muted rounded mb-3"></div>
                <div className="h-9 w-full bg-muted rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
