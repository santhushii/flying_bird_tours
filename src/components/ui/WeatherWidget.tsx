"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Cloud, CloudRain, Thermometer, MapPin, AlertCircle } from "lucide-react";

const weatherData = [
  { city: "Colombo", temp: "31", status: "Sunny", icon: Sun, advisory: "Perfect for Coastal Excursions" },
  { city: "Ella", temp: "24", status: "Misty", icon: Cloud, advisory: "Ideal for Hiking & Sightseeing" },
  { city: "Galle", temp: "29", status: "Clear Skies", icon: Sun, advisory: "Peak Season for Whale Watching" },
  { city: "Kandy", temp: "27", status: "Cloudy", icon: Cloud, advisory: "Great for Temple Visits" },
  { city: "Trincomalee", temp: "30", status: "Light Rain", icon: CloudRain, advisory: "Monsoon Ending - Clearer Soon" }
];

export function WeatherWidget() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % weatherData.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = weatherData[index];

  return (
    <div className="glass p-6 rounded-[2.5rem] border-white/40 shadow-2xl overflow-hidden relative group/widget">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-2xl -mr-12 -mt-12 group-hover/widget:bg-gold/10 transition-colors" />
      
      <div className="flex items-center justify-between mb-6">
         <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase text-navy/40">
            <Thermometer size={12} className="text-gold" />
            Island Climate
         </div>
         <div className="flex gap-1">
            {weatherData.map((_, i) => (
              <div 
                key={i}
                className={`w-1 h-1 rounded-full transition-all duration-500 ${i === index ? "w-4 bg-gold" : "bg-navy/10"}`}
              />
            ))}
         </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
           key={current.city}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, scale: 0.95 }}
           transition={{ duration: 0.6, ease: "easeOut" }}
           className="relative"
        >
           <div className="flex items-start gap-5">
              <div className="p-4 bg-white/50 rounded-2xl shadow-inner border border-white/50">
                 <current.icon size={32} className="text-gold animate-pulse-slow" />
              </div>
              <div>
                 <div className="flex items-center gap-2 mb-1">
                    <MapPin size={12} className="text-purple" />
                    <h4 className="text-navy font-display font-black text-xl tracking-tight uppercase">{current.city}</h4>
                 </div>
                 <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-display font-black text-navy">{current.temp}°C</span>
                    <span className="text-navy/40 text-[10px] font-bold uppercase tracking-widest">{current.status}</span>
                 </div>
              </div>
           </div>

           <div className="mt-6 flex items-center gap-3 p-4 bg-purple/5 rounded-2xl border border-purple/10">
              <AlertCircle size={16} className="text-purple shrink-0" />
              <div>
                 <span className="block text-[8px] font-black tracking-[0.1em] uppercase text-purple/60">Travel Advisory</span>
                 <p className="text-[11px] font-bold text-navy leading-tight">{current.advisory}</p>
              </div>
           </div>
        </motion.div>
      </AnimatePresence>
      
      <button 
        onClick={() => setIndex((index + 1) % weatherData.length)}
        className="mt-6 w-full py-3 bg-white/10 hover:bg-white text-navy/30 hover:text-navy rounded-xl text-[10px] font-black tracking-widest uppercase transition-all duration-300 border border-transparent hover:border-navy/5"
      >
        View Next City
      </button>
    </div>
  );
}
