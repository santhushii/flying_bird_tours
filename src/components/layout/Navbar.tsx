"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, MessageCircle, ExternalLink } from "lucide-react";
import { FlyingBirdLogo } from "../ui/FlyingBirdLogo";
import { navLinks } from "@/constants/navigation";
import { TRIPADVISOR_URL, PHONE_DISPLAY, PHONE_NUMBER } from "../home/TripAdvisorReviews";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300">
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200/80 py-3 shadow-sm"
            : "bg-white/80 backdrop-blur-md border-b border-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <FlyingBirdLogo className="h-10 sm:h-12 w-auto transition-transform duration-300 group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-semibold text-navy hover:text-purple transition-colors py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            <a
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#00AA6C] hover:text-[#008c58] flex items-center gap-1 transition-colors px-2.5 py-1 rounded-full bg-[#00AA6C]/10 border border-[#00AA6C]/20"
            >
              <span>TripAdvisor</span>
              <ExternalLink size={12} />
            </a>

            <div className="h-5 w-[1px] bg-gray-200 mx-1" />

            <Link href="/book">
              <button className="bg-purple hover:bg-purple/90 text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 shadow-md shadow-purple/20 hover:shadow-lg hover:shadow-purple/30 active:scale-95 cursor-pointer">
                BOOK NOW
              </button>
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="lg:hidden flex items-center gap-2.5">
            <Link href="/book">
              <button className="bg-purple text-white px-4 py-2 rounded-full text-[11px] font-bold tracking-wider shadow-sm">
                BOOK
              </button>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 bg-navy text-white rounded-full hover:bg-navy/85 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-purple/50"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-navy text-white px-6 py-6 flex flex-col gap-5 border-t border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col gap-3.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-display font-semibold text-white/90 hover:text-gold transition-colors tracking-wide uppercase py-1"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <Link
                  href="/book"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center bg-purple text-white py-3 rounded-xl font-bold text-sm shadow-md"
                >
                  Reserve Your Tour / Vehicle
                </Link>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center justify-center gap-2 bg-white/10 text-white/90 py-2.5 rounded-xl font-medium text-xs border border-white/15"
                >
                  <Phone size={14} className="text-gold" />
                  <span>Call: {PHONE_DISPLAY}</span>
                </a>

                <a
                  href={`https://wa.me/94760448292`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-xl font-medium text-xs shadow-sm"
                >
                  <MessageCircle size={14} />
                  <span>Direct WhatsApp Chat</span>
                </a>

                <a
                  href={TRIPADVISOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#00AA6C] text-white py-2.5 rounded-xl font-medium text-xs"
                >
                  <span>Read TripAdvisor Reviews</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
