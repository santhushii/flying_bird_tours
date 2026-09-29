"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FlyingBirdLogo({
  className = "h-12 w-auto",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  // Use logo-premium.png on both variants — the PNG has a white background
  // so on the dark footer we invert it to blend nicely (or keep as-is).
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ position: "relative", display: "flex", alignItems: "center" }}
    >
      <Image
        src="/logo-premium.png"
        alt="Flying Bird Tours Logo"
        width={320}
        height={90}
        className={`h-full w-auto object-contain${variant === "dark" ? " brightness-0 invert" : ""}`}
        priority
      />
    </motion.div>
  );
}
