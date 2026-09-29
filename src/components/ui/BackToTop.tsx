"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { Magnetic } from "./Magnetic";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed bottom-10 left-10 z-[100]"
        >
          <Magnetic strength={0.3}>
            <button
              onClick={scrollToTop}
              className="w-14 h-14 bg-navy text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-navy/30 hover:bg-purple transition-colors border border-white/10"
              aria-label="Back to top"
            >
              <ChevronUp size={24} />
            </button>
          </Magnetic>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
