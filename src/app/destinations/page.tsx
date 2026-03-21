"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { MapPin, ArrowRight, Star } from "lucide-react";

const destinations = [
  { id: "ella", name: "Ella", region: "Uva Province", text: "Journey to the misty highlands and witness the iconic Nine Arch Bridge surrounded by lush tea plantations.", img: "/destinations/ella.png" }, 
  { id: "kandy", name: "Kandy", region: "Central Province", text: "The spiritual heart of Sri Lanka, home to the sacred Temple of the Tooth and beautiful botanical gardens.", img: "/destinations/kandy.png" }, 
  { id: "sigiriya", name: "Sigiriya", region: "Matale District", text: "Climb the ancient Lion Rock fortress for panoramic views of the jungle and witness world-class frescoes.", img: "/destinations/sigiriya.png" }, 
  { id: "galle", name: "Galle Fort", region: "Southern Province", text: "A UNESCO World Heritage site blending Dutch colonial architecture with tropical coastal charms.", img: "/destinations/galle.png" }, 
  { id: "mirissa", name: "Mirissa", region: "Southern Province", text: "Relax on golden sands, enjoy whale watching, and experience the laid-back surf culture of the south.", img: "/destinations/mirissa.png" }
];

export default function DestinationsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  };

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      
      <section className="pt-48 pb-32 bg-ivory/30 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mb-32"
          >
             <span className="text-primary font-display font-bold uppercase tracking-[0.4em] block mb-6 text-sm">Curated Experiences</span>
             <h1 className="text-6xl md:text-9xl font-display font-bold mb-10 leading-none tracking-tighter">DISCOVER THE <br /><span className="text-gold italic">PEARL</span></h1>
             <p className="text-xl text-foreground/50 leading-relaxed font-medium max-w-2xl">
               Exploring the diverse beauty of Sri Lanka has never been simpler. From the misty mountains to the sun-kissed shores, every destination on our list is a new adventure waiting for you to unfold. 
             </p>
          </motion.div>
          
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            className="space-y-40"
          >
            {destinations.map((dst, i) => (
              <motion.div 
                key={dst.id} 
                variants={fadeInUp}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-20 items-center`}
              >
                <div className="flex-1 group relative rounded-[4rem] overflow-hidden shadow-2xl h-[400px] md:h-[500px] w-full shadow-primary/5">
                   <Image 
                     src={dst.img} 
                     alt={dst.name}
                     fill
                     sizes="(max-width: 1024px) 100vw, 50vw"
                     loading={i < 2 ? "eager" : "lazy"}
                     className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-1000" 
                   />
                   <div className="absolute top-12 left-12 py-4 px-10 glass rounded-full flex items-center gap-3 group-hover:bg-purple transition-all shadow-2xl">
                      <MapPin size={18} className="text-purple group-hover:text-white transition-colors" />
                      <span className="text-xs font-bold uppercase tracking-[0.2em] group-hover:text-white transition-colors text-navy">{dst.region}</span>
                   </div>
                </div>
                
                <div className="flex-1 space-y-10">
                   <div className="flex items-center gap-8">
                      <span className="text-7xl md:text-9xl font-display font-bold text-gold/10 leading-none select-none">0{i+1}</span>
                      <h2 className="text-5xl md:text-7xl font-display font-bold group-hover:text-primary transition-colors tracking-tighter leading-tight">{dst.name}</h2>
                   </div>
                   <p className="text-foreground/60 text-xl leading-relaxed max-w-xl font-medium">
                      {dst.text}
                   </p>
                   <div className="flex flex-wrap gap-8 items-center pt-4">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-white px-12 py-5 rounded-full font-bold flex items-center gap-4 hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 text-lg tracking-wide"
                      >
                         BOOK TOUR HERE
                         <ArrowRight size={22} />
                      </motion.button>
                      <button className="flex items-center gap-3 text-gold font-bold text-sm tracking-[0.2em] uppercase border-b-2 border-gold pb-2 hover:text-primary hover:border-primary transition-all">
                         DESTINATION GUIDE
                      </button>
                   </div>
                   <div className="flex items-center gap-3 pt-4">
                       <Star className="text-gold fill-current" size={16} />
                       <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-foreground/30 italic">Highly Recommended for Heritage Lovers</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quick Footer */}
      <footer className="py-24 bg-ivory text-navy/20 text-center text-[10px] tracking-[0.5em] uppercase font-bold border-t border-navy/5">
         Flying Bird Tours Sri Lanka &bull; All Rights Reserved &copy; 2026
      </footer>
    </main>
  );
}
