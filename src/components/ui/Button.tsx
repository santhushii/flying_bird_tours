"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({ 
  variant = "primary", 
  size = "md", 
  children, 
  className,
  ...props 
}: ButtonProps) {
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 shadow-xl shadow-primary/20",
    secondary: "bg-gold text-black hover:bg-gold/90 shadow-xl shadow-gold/20",
    outline: "border border-white/20 text-white hover:bg-white/5",
    ghost: "text-foreground/60 hover:text-foreground hover:bg-foreground/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-12 py-5 text-lg",
  };

  return (
    <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="w-fit"
    >
        <button
          className={cn(
            "rounded-full font-bold uppercase tracking-widest transition-all cursor-pointer",
            variants[variant],
            sizes[size],
            className
          )}
          {...props}
        >
          {children}
        </button>
    </motion.div>
  );
}

