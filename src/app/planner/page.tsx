import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { TripPlanner } from "@/components/home/TripPlanner";
import { Shield, Banknote, Clock8 } from "lucide-react";

export default function PlannerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* High-impact header - Lighter & More Premium */}
      <section className="relative h-[550px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy/20 via-transparent to-white z-10" />
        <Image 
          src="/destinations/ella.png" 
          fill
          priority
          sizes="100vw"
          loading="eager"
          className="absolute inset-0 object-cover w-full h-full brightness-110 scale-105" 
          alt="Sri Lanka Highlands"
        />
        <div className="relative z-20 text-center px-6 mt-20">
           <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-1 bg-purple rounded-full" />
              <span className="text-purple font-display font-extrabold tracking-[0.4em] uppercase text-xs">Tailor-Made Journeys</span>
              <div className="w-12 h-1 bg-purple rounded-full" />
           </div>
           <h1 className="text-6xl md:text-9xl font-display font-black text-navy mb-8 tracking-tighter leading-none uppercase">
              PLAN YOUR <br /> 
              <span className="text-purple italic">DREAM ESCAPE</span>
           </h1>
           <p className="text-xl md:text-2xl text-navy/60 font-medium max-w-2xl mx-auto leading-relaxed">
             Let our AI Navigator craft your perfect Sri Lankan adventure in seconds.
           </p>
        </div>
      </section>

      {/* Interactive Planner Section */}
      <section className="pb-32 px-6 relative z-30 -mt-24">
        <div className="container mx-auto">
          <TripPlanner />
        </div>
      </section>

      <section className="py-32 bg-ivory/30">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-black text-navy mb-20 tracking-tight uppercase">Why use our AI Navigator?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
               <div className="space-y-8 group">
                  <div className="w-24 h-24 bg-purple/10 rounded-[2.5rem] flex items-center justify-center mx-auto text-purple shadow-xl shadow-purple/5 group-hover:scale-110 transition-transform">
                     <Shield size={36} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-4">Local Expertise</h3>
                    <p className="text-navy/50 text-base leading-relaxed font-medium">Routes designed by local guides who know every hidden gem in the island.</p>
                  </div>
               </div>
               <div className="space-y-8 group">
                  <div className="w-24 h-24 bg-purple/10 rounded-[2.5rem] flex items-center justify-center mx-auto text-purple shadow-xl shadow-purple/5 group-hover:scale-110 transition-transform">
                     <Banknote size={36} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-4">Smart Budgeting</h3>
                    <p className="text-navy/50 text-base leading-relaxed font-medium">Optimize your route for distance and time, saving you money on transport.</p>
                  </div>
               </div>
               <div className="space-y-8 group">
                  <div className="w-24 h-24 bg-purple/10 rounded-[2.5rem] flex items-center justify-center mx-auto text-purple shadow-xl shadow-purple/5 group-hover:scale-110 transition-transform">
                     <Clock8 size={36} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-4">Real-time Adjustments</h3>
                    <p className="text-navy/50 text-base leading-relaxed font-medium">Flexible itineraries that can be adjusted based on seasonal weather patterns.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <footer className="py-24 bg-white border-t border-navy/5 flex flex-col items-center gap-6">
         <div className="w-px h-12 bg-purple/20 mb-4" />
         <p className="text-navy/20 text-[10px] tracking-[0.5em] uppercase font-bold">Flying Bird Tours Sri Lanka &copy; 2026</p>
      </footer>
    </main>
  );
}
