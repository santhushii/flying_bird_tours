"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe, Phone, Mail } from "lucide-react";
import { FlyingBirdLogo } from "../ui/FlyingBirdLogo";

import { navLinks } from "@/constants/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-white/20 py-3 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4 group">
          <FlyingBirdLogo className="w-14 h-14 group-hover:scale-110 transition-transform duration-500" />
          <div className="flex flex-col">
            <span className="font-display font-black text-2xl tracking-tight text-navy transition-colors">
              FLYING BIRD
              <span className="text-purple"> TOURS</span>
            </span>
            <span className="text-[8px] tracking-[0.2em] text-red font-bold uppercase -mt-1">
               Your First Class Travel Partner
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-sm font-semibold hover:text-primary transition-colors group py-2"
            >
              {link.name}
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            </Link>
          ))}
          
          <div className="h-5 w-[1px] bg-foreground/10 mx-2" />

          <Link href="/book">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg shadow-purple/20 hover:shadow-purple/40 transition-all duration-300"
            >
              BOOK NOW
            </motion.button>
          </Link>
        </div>


        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
           <button 
             onClick={() => setIsOpen(!isOpen)}
             className="p-2 rounded-full hover:bg-white/10 transition-colors"
           >
             {isOpen ? <X /> : <Menu />}
           </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden glass-dark backdrop-blur-3xl flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display font-bold hover:text-purple transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.button 
               whileTap={{ scale: 0.95 }}
               className="bg-purple text-white px-8 py-3 rounded-full text-lg font-bold"
            >
              BOOK NOW
            </motion.button>
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-4 rounded-full border border-white/20"
            >
              <X className="w-8 h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
