"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function PageReveal() {
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setComplete(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          key="reveal"
          className="fixed inset-0 z-[10000] bg-navy flex items-center justify-center pointer-events-none"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-24 h-24 border-2 border-white/20 rounded-full flex items-center justify-center">
              <motion.div
                 className="w-16 h-1 bg-white"
                 animate={{ rotate: 360 }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <span className="text-white/60 font-display font-bold uppercase tracking-[0.4em] text-xs">Flying Bird</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
