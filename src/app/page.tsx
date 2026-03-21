"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FlyingBirdLogo } from "@/components/ui/FlyingBirdLogo";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { vehicles } from "@/data/vehicles";
import { TripPlanner } from "@/components/home/TripPlanner";
import { MapPin, Map, Car, Star, Quote, Mail, Phone, Instagram, Compass, ArrowRight } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
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
    <main className="min-h-screen overflow-x-hidden bg-white">
      <Navbar />
      <Hero />
      
      {/* Featured Destinations Section */}
      <motion.section 
        className="py-32 bg-white relative z-10"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 mb-20 text-center">
             <span className="text-purple font-display font-extrabold tracking-[0.4em] uppercase text-xs">Explore Paradise</span>
             <h2 className="text-5xl md:text-8xl font-display font-black text-navy leading-tight tracking-tighter uppercase">OUR FEATURED <br /> DESTINATIONS</h2>
             <div className="w-24 h-1.5 bg-purple mt-6 rounded-full" />
             <p className="text-center text-navy/50 max-w-2xl mt-10 leading-relaxed text-xl font-medium">
               Explore the hidden gems and iconic landmarks of the pearl of the Indian Ocean.
             </p>
          </motion.div>
          
          <motion.div 
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { name: "Ella", type: "Misty Highlands", img: "/destinations/ella.png" }, 
              { name: "Galle", type: "Colonial Heritage", img: "/destinations/galle.png" }, 
              { name: "Sigiriya", type: "Ancient Wonder", img: "/destinations/sigiriya.png" } 
            ].map((dst, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl hover:shadow-purple/20 transition-all duration-700"
              >
                <Image 
                  src={dst.img} 
                  alt={dst.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="absolute inset-0 object-cover w-full h-full brightness-[0.85] group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10">
                   <h3 className="text-3xl font-display font-bold text-white mb-2">{dst.name}</h3>
                   <p className="text-white/70 text-xs mb-6 font-bold tracking-[0.2em] uppercase">{dst.type}</p>
                   <button className="text-white font-bold text-[10px] tracking-[0.2em] uppercase border-b border-white/30 pb-1 hover:border-white transition-all">
                     EXPLORE DESTINATION
                   </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Trip Planner Section */}
      <motion.section 
        className="py-32 relative bg-background overflow-hidden"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
           <motion.div variants={fadeInUp} className="flex flex-col items-center mb-24 text-center">
              <span className="text-primary font-display font-bold tracking-[0.3em] uppercase mb-6 text-sm">Intelligent Planning</span>
              <h2 className="text-5xl md:text-8xl font-display font-bold leading-tight tracking-tighter">AI TRIP <br /> <span className="text-gold">NAVIGATOR</span></h2>
           </motion.div>
           <motion.div variants={fadeInUp} transition={{ delay: 0.3 }}>
             <TripPlanner />
           </motion.div>
        </div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-float" />
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-gold/15 blur-[120px] rounded-full translate-x-1/2 animate-float" style={{ animationDelay: "2s" }} />
      </motion.section>

      {/* Vehicle Showcase Section */}
      <motion.section 
        className="py-32 bg-ivory/50"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
           <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
              <div className="flex flex-col gap-6">
                 <span className="text-purple font-display font-bold tracking-[0.3em] uppercase text-sm">Your Ride</span>
                 <h2 className="text-5xl md:text-7xl font-display font-semibold text-navy leading-tight tracking-tighter">LUXURY FLEET <br /> <span className="text-purple italic">SELECTION</span></h2>
              </div>
              <p className="text-navy/50 max-w-md text-left leading-relaxed text-lg font-medium">
                 Choose the perfect vehicle for your adventure. From luxury sedans to spacious mini-buses, we define comfort.
              </p>
           </motion.div>

           <motion.div 
             variants={stagger}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
           >
              {vehicles.map((v) => (
                <motion.div key={v.id} variants={fadeInUp}>
                  <VehicleCard vehicle={v} />
                </motion.div>
              ))}
           </motion.div>
           
           <motion.div variants={fadeInUp} className="mt-24 flex justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary/90 text-white px-12 py-5 rounded-full font-bold shadow-2xl shadow-primary/30 transition-all text-lg tracking-wide"
              >
                 VIEW ALL VEHICLES
              </motion.button>
           </motion.div>
        </div>
      </motion.section>

      {/* Review System Section */}
      <motion.section 
        className="py-40 bg-white relative overflow-hidden"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
         <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
            <svg width="100%" height="100%">
               <pattern id="heritage-pattern-v2" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <path d="M60 0 L120 60 L60 120 L0 60 Z" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="60" cy="60" r="15" fill="none" stroke="currentColor" strokeWidth="1" />
               </pattern>
               <rect width="100%" height="100%" fill="url(#heritage-pattern-v2)" />
            </svg>
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <motion.div variants={fadeInUp} className="flex flex-col items-center mb-24 text-center">
               <span className="text-primary font-display font-bold tracking-[0.4em] uppercase mb-6 text-sm">Social Proof</span>
               <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter">GUEST <span className="text-gold">EXPERIENCES</span></h2>
               <div className="flex gap-3 mt-8 text-gold">
                  {[1,2,3,4,5].map(i => <Star key={i} fill="currentColor" size={24} />)}
               </div>
            </motion.div>

            <motion.div 
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
               {[
                 { 
                   name: "Sarah Jenkins", 
                   country: "Australia", 
                   text: "The best tour agency in Sri Lanka! The driver was so professional and the car was immaculate. Our trip to Sigiriya was magical.",
                   avatar: "https://i.pravatar.cc/150?u=sarah"
                 },
                 { 
                   name: "David Mueller", 
                   country: "Germany", 
                   text: "Amazing service! The AI planner helped us find hidden gems we wouldn't have discovered otherwise. Highly recommended.",
                   avatar: "https://i.pravatar.cc/150?u=david"
                 },
                 { 
                   name: "Lakshan Perera", 
                   country: "Local Guide", 
                   text: "As someone who knows the island, I can say Flying Bird truly captures the essence of our culture in their service.",
                   avatar: "https://i.pravatar.cc/150?u=lakshan"
                 }
               ].map((review, i) => (
                 <motion.div 
                   key={i} 
                   variants={fadeInUp}
                   className="glass p-12 rounded-[3.5rem] border border-white/5 shadow-xl hover:border-primary/40 transition-all group relative overflow-hidden"
                 >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />
                    <Quote className="text-primary mb-8 w-10 h-10 group-hover:rotate-12 transition-transform" />
                    <p className="text-foreground/80 italic mb-10 leading-relaxed text-lg">"{review.text}"</p>
                    <div className="flex items-center gap-5">
                       <img src={review.avatar} className="w-14 h-14 rounded-full border-2 border-primary/20 shadow-lg" alt={review.name} />
                       <div>
                          <span className="block font-bold text-lg">{review.name}</span>
                          <span className="text-xs text-primary font-bold uppercase tracking-widest leading-none">{review.country}</span>
                       </div>
                    </div>
                 </motion.div>
               ))}
            </motion.div>
         </div>
      </motion.section>

      {/* Blog System Preview */}
      <motion.section 
        className="py-40 bg-ivory/30 relative overflow-hidden"
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
           <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 relative z-20">
              <div className="flex flex-col gap-6">
                 <span className="text-primary font-display font-bold tracking-[0.3em] uppercase text-sm">Travel Insights</span>
                 <h2 className="text-5xl md:text-8xl font-display font-bold tracking-tighter leading-tight">LATEST FROM <br /> <span className="text-gold">OUR BLOG</span></h2>
              </div>
              <motion.button 
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group text-sm font-bold tracking-[0.3em] uppercase"
                onClick={() => window.location.href = '/blog'}
              >
                 READ ALL POSTS
                 <div className="w-16 h-16 rounded-full border border-navy/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all group-hover:border-primary shadow-xl bg-white">
                    <Compass size={24} />
                 </div>
              </motion.button>
           </motion.div>
           
           <motion.h2 
             variants={fadeInUp} 
             className="text-[12rem] md:text-[20rem] font-display font-black text-primary/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none select-none z-0 pointer-events-none whitespace-nowrap opacity-30"
           >
             OUR BLOG
           </motion.h2>

           <motion.div 
             variants={stagger}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10"
           >
              {[
                { 
                  title: "Top 10 Hidden Waterfalls", 
                  category: "Travel Tips", 
                  date: "April 12, 2026", 
                  img: "/blog/waterfall.png", 
                  slug: "top-10-waterfalls" 
                },
                { 
                  title: "A Guide to Kandy Perahera", 
                  category: "Culture", 
                  date: "July 20, 2026", 
                  img: "/blog/kandy.png", 
                  slug: "kandy-perahera" 
                },
                { 
                  title: "Whale Watching in Mirissa", 
                  category: "Wildlife", 
                  date: "Jan 15, 2026", 
                  img: "/blog/whale.png", 
                  slug: "whale-watching" 
                }
              ].map((post, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp} 
                  className="group cursor-pointer bg-white p-6 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all"
                  onClick={() => window.location.href = `/blog/${post.slug}`}
                >
                   <div className="relative h-72 rounded-[2.5rem] overflow-hidden mb-8 shadow-inner bg-lavender">
                      <Image 
                        src={post.img} 
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                      <div className="absolute top-6 left-6 bg-primary text-white text-[10px] font-bold px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-2xl">
                        {post.category}
                      </div>
                   </div>
                   <div className="px-4 pb-4">
                     <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors leading-tight tracking-tight">{post.title}</h3>
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-[10px] font-bold text-foreground/40 uppercase tracking-[0.2em]">
                           <span>{post.date}</span>
                        </div>
                        <ArrowRight size={18} className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                     </div>
                   </div>
                </motion.div>
              ))}
           </motion.div>
        </div>
      </motion.section>

      {/* Footer / Contact Preview */}
      <Footer />
      
      {/* WhatsApp Button */}
      <motion.a 
        href="https://wa.me/94760448292" 
        target="_blank" 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-10 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all cursor-pointer shadow-[#25D366]/30 group"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          fill="currentColor" 
          className="group-hover:rotate-12 transition-transform"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.345-4.39 10.298-9.885 10.298m8.452-16.141a11.53 11.53 0 00-8.155-3.376C5.895 2.688 1.156 7.427 1.154 12.875c0 1.742.454 3.44 1.317 4.938L1 23l5.228-1.371a11.45 11.45 0 00 5.62 1.463h.005c6.397 0 11.603-5.206 11.606-11.607a11.48 11.48 0 00-3.377-8.21z"/>
        </svg>
        <span className="absolute right-full mr-4 bg-white text-navy text-xs font-bold px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-black/5">Chat with us</span>
      </motion.a>
    </main>
  );
}
