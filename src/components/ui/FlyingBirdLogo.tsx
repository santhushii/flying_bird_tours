"use client";

import { motion } from "framer-motion";

export function FlyingBirdLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Navy Crescent */}
      <motion.path
        d="M20,50 C20,75 50,90 85,75 C70,95 30,90 15,60 C5,30 25,5 60,5 C40,5 15,20 15,50 C15,75 40,85 65,80"
        fill="none"
        stroke="#2D2A4E"
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      
      {/* Bird Head & Chest - Red (pointing left) */}
      <motion.path
        d="M25,35 C20,35 15,40 15,45 C15,50 20,60 30,70 L35,65 C30,55 25,45 25,35 Z"
        fill="#E32F2F"
        initial={{ opacity: 0, x: 5 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      
      {/* Main Wing - Purple */}
      <motion.path
        d="M32,45 C35,20 50,10 65,15 C55,25 45,45 35,60 Z"
        fill="#8B3A8E"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
      
      {/* Secondary Wing - Purple */}
      <motion.path
        d="M35,50 C45,35 65,25 80,30 C70,40 55,60 40,75 Z"
        fill="#8B3A8E"
        fillOpacity="0.8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      />
      
      {/* Tail feathers - Purple */}
      <motion.path
        d="M45,75 C60,70 75,75 85,90 C75,85 60,82 50,85 Z"
        fill="#8B3A8E"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.0 }}
      />
    </motion.svg>
  );
}
