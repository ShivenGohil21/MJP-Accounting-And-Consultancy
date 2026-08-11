import React from "react";

export default function PageLoader() {
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center p-8 space-y-4">
      <div className="p-3 bg-white/70 backdrop-blur-md rounded-2xl border border-white/80 shadow-sm">
        <img
          src="/mjp_logo.png"
          alt="Loading..."
          className="h-12 w-auto object-contain animate-pulse"
        />
      </div>
      <div className="flex items-center gap-1.5 pt-1">
        <span className="w-2 h-2 bg-primary/70 rounded-full animate-bounce [animation-delay:-0.3s]" />
        <span className="w-2 h-2 bg-primary/70 rounded-full animate-bounce [animation-delay:-0.15s]" />
        <span className="w-2 h-2 bg-primary/70 rounded-full animate-bounce" />
      </div>
    </div>
  );
}
