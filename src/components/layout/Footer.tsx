"use client";

import { motion } from "framer-motion";
import { Instagram, Phone, Mail, Compass } from "lucide-react";
import { FlyingBirdLogo } from "../ui/FlyingBirdLogo";

export function Footer() {
  return (
    <footer className="bg-white text-navy pt-40 pb-16 border-t border-navy/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-10">
              <FlyingBirdLogo className="w-12 h-12" />
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tighter">FLYING BIRD</span>
                <span className="text-[7px] tracking-[0.15em] uppercase text-red font-bold -mt-1">Your First Class Travel Partner</span>
              </div>
            </div>
            <p className="text-navy/40 text-base leading-relaxed mb-10 font-medium">
              Your premium gateway to the paradise island of Sri Lanka. We curate experiences that last a lifetime.
            </p>
            <div className="flex gap-5">
               <motion.div whileHover={{ y: -5 }} className="w-12 h-12 rounded-2xl border border-navy/10 flex items-center justify-center hover:border-purple transition-colors cursor-pointer bg-white"><Instagram size={20} className="text-navy" /></motion.div>
               <motion.div whileHover={{ y: -5 }} className="w-12 h-12 rounded-2xl border border-navy/10 flex items-center justify-center hover:border-purple transition-colors cursor-pointer bg-white"><Phone size={20} className="text-navy" /></motion.div>
            </div>
          </div>
          
          <div>
            <h4 className="text-navy font-bold mb-10 tracking-[0.3em] uppercase text-xs">Explore</h4>
            <ul className="space-y-4 text-navy/50 text-sm font-semibold">
              <li className="hover:text-purple transition-colors cursor-pointer">Destinations</li>
              <li className="hover:text-purple transition-colors cursor-pointer">Vehicle Fleet</li>
              <li className="hover:text-purple transition-colors cursor-pointer">Trip Planner</li>
              <li className="hover:text-purple transition-colors cursor-pointer">Travel Blog</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-navy font-bold mb-10 tracking-[0.3em] uppercase text-xs">Quick Support</h4>
            <ul className="space-y-4 text-navy/50 text-sm font-semibold">
              <li className="hover:text-purple transition-colors cursor-pointer">FAQ</li>
              <li className="hover:text-purple transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-purple transition-colors cursor-pointer">Terms of Service</li>
              <li className="hover:text-purple transition-colors cursor-pointer">Contact Us</li>
            </ul>
          </div>
          
          <div>
             <h4 className="text-navy font-bold mb-10 tracking-[0.3em] uppercase text-xs">Get In Touch</h4>
             <p className="text-navy/40 text-sm mb-8 font-medium">Receive curated travel tips and exclusive local deals.</p>
             <div className="flex flex-col gap-4">
                <input type="text" placeholder="Email Address" className="bg-lavender/50 border border-navy/5 px-6 py-4 rounded-2xl focus:outline-none focus:border-purple w-full text-sm font-medium transition-all shadow-sm" />
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-navy text-white py-4 rounded-2xl hover:bg-navy/90 transition-all font-bold tracking-widest uppercase text-xs flex items-center justify-center gap-2 shadow-xl shadow-navy/20"
                >
                  Subscribe Now <Mail size={16} />
                </motion.button>
             </div>
          </div>
        </div>
        
        <div className="border-t border-navy/5 pt-16 flex flex-col md:flex-row justify-between items-center gap-8 text-navy/40">
           <p className="text-[10px] tracking-[0.5em] uppercase font-bold">&copy; 2026 Flying Bird Tours Sri Lanka. All Rights Reserved. Created by Santhushie Nallaperuma</p>
           <div className="flex items-center gap-10 text-[10px] tracking-[0.5em] uppercase font-bold">
              <span className="hover:text-purple transition-colors cursor-default">Designed for Paradise</span>
              <span className="w-1.5 h-1.5 bg-navy/10 rounded-full" />
              <span className="hover:text-purple transition-colors cursor-default">Premium Experience</span>
           </div>
        </div>
      </div>
    </footer>
  );
}
