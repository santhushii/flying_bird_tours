"use client";

import { motion } from "framer-motion";
import { Users, Gauge, Info, CheckCircle } from "lucide-react";
import Image from "next/image";
import { Vehicle } from "@/types/vehicle";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="glass group relative p-5 rounded-3xl overflow-hidden shadow-xl"
    >
      <div className="relative h-48 w-full mb-6 rounded-2xl overflow-hidden">
        {/* Placeholder image layer */}
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
        
        <Image
          src={vehicle.image}
          alt={vehicle.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        <div className="absolute top-4 right-4 z-10">
           <span className={`px-4 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border ${
             vehicle.available ? "border-primary text-primary bg-primary/10" : "border-red-500 text-red-500 bg-red-500/10"
           }`}>
             {vehicle.available ? "Available" : "Booked"}
           </span>
        </div>
      </div>

      <div className="px-1">
        <div className="flex justify-between items-start mb-2">

          <h3 className="text-xl font-display font-bold group-hover:text-primary transition-colors">{vehicle.name}</h3>
          <div className="flex items-center gap-1 text-foreground/60">
             <Users size={14} />
             <span className="text-sm font-bold">{vehicle.capacity}</span>
          </div>
        </div>
        
        <p className="text-xs text-foreground/40 mb-6 uppercase tracking-widest font-bold">{vehicle.category}</p>

        <div className="space-y-3 mb-8">
           {vehicle.features.slice(0, 2).map((feature, idx) => (
             <div key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                <CheckCircle size={14} className="text-primary" />
                {feature}
             </div>
           ))}
        </div>

        <div className="flex justify-between items-end border-t border-white/10 pt-6">
           <div className="flex flex-col">
              <span className="text-[10px] uppercase text-foreground/40 font-bold tracking-widest">Base Rate</span>
              <span className="text-xl font-bold font-display text-gold">Rs. {vehicle.pricePerDay.toLocaleString()}<span className="text-xs font-normal text-foreground/40 ml-1">/day</span></span>
           </div>
           <button className="bg-primary text-white p-3 rounded-2xl hover:bg-primary/80 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
              <Info size={18} />
           </button>
        </div>
      </div>
    </motion.div>
  );
}
