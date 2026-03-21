"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Compass, MapPin, Search, Calendar, Users, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
export function Hero() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    pickup: "",
    date: "",
    guests: "2"
  });

  const handleSearch = () => {
    const params = new URLSearchParams({
      pickup: formData.pickup,
      date: formData.date,
      guests: formData.guests
    });
    router.push(`/book?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 px-6 overflow-hidden bg-white">
      {/* Background with cinematic depth overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image 
          src="/destinations/sigiriya.png" 
          alt="Sigiriya Rock Fortress"
          fill
          sizes="100vw"
          className="object-cover scale-105 brightness-110 -translate-y-10 transition-all duration-1000"
          priority
          loading="eager"
        />
        {/* Soft, inviting overlays instead of dark ones */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white z-10" />
      </div>

      <div className="container mx-auto relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Text Content - Elegant & Light */}
          <div className="flex-1 space-y-10 lg:pr-12 text-navy">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: "easeOut" }}
             >
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-1 bg-purple rounded-full" />
                   <span className="text-purple font-display font-extrabold tracking-[0.4em] uppercase text-xs">Explore Paradise</span>
                </div>
                
                <h1 className="text-6xl md:text-9xl font-display font-black text-navy leading-[0.9] tracking-tighter mb-10 max-w-4xl">
                   BEYOND <br /> 
                   <span className="text-purple italic">HORIZONS</span>
                </h1>
                
                <p className="max-w-xl text-xl md:text-2xl text-navy/60 leading-relaxed font-medium mb-12">
                   Experience the soul of Sri Lanka with our premium first-class tours. Hand-crafted journeys for the sophisticated traveler.
                </p>

                <div className="flex flex-wrap gap-6 mt-16">
                   <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={() => router.push('/planner')}
                     className="bg-purple text-white px-12 py-5 rounded-2xl font-bold shadow-2xl shadow-purple/30 flex items-center gap-4 text-lg"
                   >
                      PLAN YOUR TRIP
                      <ChevronRight size={22} />
                   </motion.button>
                   <motion.button 
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={() => router.push('/vehicles')}
                     className="bg-white border-2 border-purple/10 text-navy px-12 py-5 rounded-2xl font-bold hover:bg-lavender transition-all text-lg"
                   >
                      EXPLORE FLEET
                   </motion.button>
                </div>
             </motion.div>
          </div>

          {/* Attractive Quick Search Panel - Light & Glassy */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full lg:w-[460px]"
          >
             <div className="glass bg-white/80 p-10 rounded-[3.5rem] border border-white/50 shadow-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple/5 rounded-full blur-3xl -mr-16 -mt-16" />
                
                <div className="flex items-center gap-3 mb-10">
                   <div className="p-3 bg-purple/10 rounded-2xl">
                      <Search className="text-purple" size={20} />
                   </div>
                   <h3 className="text-2xl font-display font-bold text-navy tracking-tight">Quick Reservation</h3>
                </div>
                
                <div className="space-y-6">
                   <div className="bg-lavender/50 p-6 rounded-3xl border border-purple/5 space-y-2 group/input hover:bg-lavender transition-all">
                      <label className="text-[10px] text-purple font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                        <MapPin size={12} /> PICKUP LOCATION
                      </label>
                      <input 
                        type="text" 
                        placeholder="Hotel, Airport or City" 
                        value={formData.pickup}
                        onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                        className="bg-transparent border-none text-navy focus:ring-0 w-full placeholder:text-navy/30 font-bold text-lg" 
                      />
                   </div>

                   <div className="grid grid-cols-2 gap-6">
                      <div className="bg-lavender/50 p-6 rounded-3xl border border-purple/5 space-y-2 group/input hover:bg-lavender transition-all">
                        <label className="text-[10px] text-purple font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                          <Calendar size={12} /> DATE
                        </label>
                        <input 
                          type="date" 
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="bg-transparent border-none text-navy focus:ring-0 w-full text-sm font-bold cursor-pointer" 
                        />
                      </div>
                      <div className="bg-lavender/50 p-6 rounded-3xl border border-purple/5 space-y-2 group/input hover:bg-lavender transition-all">
                        <label className="text-[10px] text-purple font-bold uppercase tracking-[0.2em] flex items-center gap-2">
                          <Users size={12} /> GUESTS
                        </label>
                        <select 
                          value={formData.guests}
                          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                          className="bg-transparent border-none text-navy focus:ring-0 w-full font-bold text-lg cursor-pointer"
                        >
                           {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n} People</option>)}
                        </select>
                      </div>
                   </div>

                   <button 
                     onClick={handleSearch}
                     className="w-full py-5 bg-navy text-white rounded-2xl font-bold shadow-xl shadow-navy/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 text-lg mt-4"
                   >
                      CHECK AVAILABILITY
                   </button>
                   
                   <p className="text-center text-[10px] text-navy/30 font-bold uppercase tracking-widest mt-6">
                     Best Rates Guaranteed &bull; 24/7 Support
                   </p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
