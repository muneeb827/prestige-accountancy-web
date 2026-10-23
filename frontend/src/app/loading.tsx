export default function Loading() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
      {/* Top Subtle Animated Brand Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-slate-100 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-[#00368C] via-[#2B7EFE] to-[#00368C] w-full animate-pulse" />
      </div>

      {/* Gentle Loading Skeleton */}
      <div className="max-w-xl w-full space-y-4 animate-pulse">
        <div className="h-6 w-32 bg-blue-100/70 rounded-full mx-auto" />
        <div className="h-8 w-3/4 bg-slate-200 rounded-xl mx-auto" />
        <div className="h-4 w-1/2 bg-slate-100 rounded-md mx-auto" />
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="h-28 bg-slate-50 border border-slate-100 rounded-xl" />
          <div className="h-28 bg-slate-50 border border-slate-100 rounded-xl" />
        </div>
      </div>
    </div>
  );
}
