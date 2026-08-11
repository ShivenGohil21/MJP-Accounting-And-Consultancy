import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Elegant quick blur loading timeout
    const timer = setTimeout(() => {
      setIsFinished(true);
      if (onComplete) onComplete();
    }, 1100);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/75 backdrop-blur-xl select-none px-6"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: [0.96, 1.02, 0.96], opacity: 1 }}
            transition={{
              scale: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              opacity: { duration: 0.4 }
            }}
            className="flex flex-col items-center space-y-6"
          >
            {/* Clean Logo Display */}
            <div className="relative p-4 bg-white/60 backdrop-blur-md rounded-2xl border border-white/80 shadow-lg">
              <img
                src="/mjp_logo.png"
                alt="MJP Society Accounts & Consultancy"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>

            {/* Minimal Subtle Animated Loading Dots */}
            <div className="flex items-center gap-2 pt-1">
              <span className="w-2.5 h-2.5 bg-primary/80 rounded-full animate-bounce [animation-delay:-0.3s]" />
              <span className="w-2.5 h-2.5 bg-primary/80 rounded-full animate-bounce [animation-delay:-0.15s]" />
              <span className="w-2.5 h-2.5 bg-primary/80 rounded-full animate-bounce" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
