"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Compass, ShieldCheck, Clock, Award, CheckCircle, Linkedin, MessageCircle, ExternalLink } from "lucide-react";
import { FlyingBirdLogo } from "../ui/FlyingBirdLogo";
import { BackToTop } from "../ui/BackToTop";
import { TRIPADVISOR_URL, LINKEDIN_URL, PHONE_DISPLAY, PHONE_NUMBER } from "../home/TripAdvisorReviews";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  const navGroups = [
    {
      title: "Explore Lanka",
      links: [
        { name: "Home", href: "/" },
        { name: "Destinations", href: "/destinations" },
        { name: "Luxury Fleet", href: "/vehicles" },
        { name: "Trip Planner", href: "/planner" },
        { name: "Travel Journal", href: "/blog" }
      ]
    },
    {
      title: "Reservations & Support",
      links: [
        { name: "Book Tour / Car", href: "/book" },
        { name: "TripAdvisor Reviews", href: TRIPADVISOR_URL, external: true },
        { name: "Direct WhatsApp", href: "https://wa.me/94760448292", external: true },
        { name: "Official LinkedIn", href: LINKEDIN_URL, external: true }
      ]
    }
  ];

  return (
    <footer className="bg-navy text-white pt-20 lg:pt-24 pb-12 relative overflow-hidden border-t border-white/10">
      <BackToTop />
      
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-purple/10 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 pb-16 border-b border-white/10">
          
          {/* Brand Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center group">
              <FlyingBirdLogo className="h-14 w-auto" variant="dark" />
            </Link>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed font-normal max-w-md">
              Crafting bespoke private travel experiences across Sri Lanka. Luxury chauffeured transport, curated cultural itineraries, and authentic pearl-of-the-ocean voyages.
            </p>

            {/* Direct Phone Display */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl max-w-sm">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold block mb-1">24/7 Hotline &amp; WhatsApp</span>
              <a 
                href={`tel:${PHONE_NUMBER}`} 
                className="text-lg font-bold text-white hover:text-gold transition-colors flex items-center gap-2"
              >
                <Phone size={16} className="text-gold shrink-0" />
                <span>{PHONE_DISPLAY}</span>
              </a>
            </div>

            {/* Social / Contact Links */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <a 
                href={TRIPADVISOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 rounded-xl bg-[#00AA6C] hover:bg-[#008C58] text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>TripAdvisor</span>
                <ExternalLink size={12} />
              </a>

              <a 
                href="https://wa.me/94760448292"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle size={14} />
                <span>WhatsApp</span>
              </a>

              <a 
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 px-4 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Navigation Links (4 Cols) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {navGroups.map((group, i) => (
              <div key={i}>
                <h4 className="text-white/40 font-bold mb-5 tracking-[0.2em] uppercase text-xs">{group.title}</h4>
                <ul className="space-y-3">
                  {group.links.map((link, j) => (
                    <li key={j}>
                      {link.external ? (
                        <a 
                          href={link.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm font-medium flex items-center gap-2"
                        >
                          <span className="w-1 h-1 bg-gold/50 rounded-full" />
                          <span>{link.name}</span>
                        </a>
                      ) : (
                        <Link 
                          href={link.href} 
                          className="text-white/70 hover:text-white transition-colors text-xs sm:text-sm font-medium flex items-center gap-2"
                        >
                          <span className="w-1 h-1 bg-gold/50 rounded-full" />
                          <span>{link.name}</span>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Newsletter & Direct Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white/40 font-bold mb-4 tracking-[0.2em] uppercase text-xs">Island Travel Updates</h4>
            <p className="text-white/70 text-xs leading-relaxed">
              Subscribe to receive seasonal travel guides, scenic route updates, and exclusive tour offers.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input 
                  type="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address" 
                  className="w-full bg-white/10 border border-white/15 px-4 py-2.5 rounded-xl text-white focus:outline-none focus:border-gold/60 text-xs font-medium placeholder:text-white/40" 
                />
                <button 
                  type="submit"
                  className="w-full bg-purple hover:bg-purple/90 text-white px-4 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>JOIN NEWSLETTER</span>
                  <Compass size={14} />
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2.5 text-gold border border-gold/20 p-3.5 rounded-xl bg-gold/5">
                <CheckCircle size={18} className="shrink-0" />
                <span className="text-xs font-semibold text-white/90">Thank you for subscribing!</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { icon: ShieldCheck, label: "SLTDA LICENSED", detail: "Registered Travel Agency" },
            { icon: Clock, label: "24/7 SUPPORT", detail: "Hotline & Direct Chat" },
            { icon: Award, label: "TOP RATED SERVICE", detail: "Verified Traveler Reviews" },
            { icon: CheckCircle, label: "PRIVATE FLEET", detail: "Fully Insured Chauffeur" },
          ].map((badge, i) => (
            <div key={i} className="flex gap-3.5 items-center">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 text-gold shrink-0">
                <badge.icon size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold tracking-wider uppercase text-white">{badge.label}</span>
                <span className="text-[10px] text-white/50">{badge.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-medium text-white/50 pt-8 border-t border-white/10 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Flying Bird Tours. All Rights Reserved. Registered in Colombo, Sri Lanka.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <Link href="/vehicles" className="hover:text-white transition-colors">Fleet</Link>
            <span className="w-1 h-1 bg-white/30 rounded-full" />
            <Link href="/book" className="hover:text-white transition-colors">Book Now</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
