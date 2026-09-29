import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TripPlanner } from "@/components/home/TripPlanner";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { Shield, Banknote, Clock8 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Trip Planner & Custom Sri Lanka Itinerary Navigator",
  description: "Plan your personalized Sri Lanka holiday in seconds. Custom tailored itineraries for 3-5 days, 7-14 days, or extended vacations with private chauffeur transport.",
  alternates: {
    canonical: "/planner",
  },
  openGraph: {
    title: "AI Sri Lanka Trip Planner | Flying Bird Tours",
    description: "Generate a custom, route-optimized Sri Lankan tour itinerary with private vehicle and driver.",
    url: "https://flyingbirdtours.com/planner",
  }
};

export default function PlannerPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[380px] sm:h-[460px] flex items-center justify-center overflow-hidden bg-slate-100">
        <Image 
          src="/destinations/ella.png" 
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover object-center brightness-95" 
          alt="Sri Lanka Highlands Tea Estates - Custom Tour Itinerary"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-white z-10" />

        <div className="relative z-20 text-center px-4 sm:px-6 mt-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white font-bold tracking-widest uppercase text-xs mb-4">
            <span>Tailor-Made Island Voyages</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white mb-4 tracking-tight uppercase">
            PLAN YOUR <span className="text-gold italic font-serif font-normal">DREAM ESCAPE</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-xl mx-auto">
            Let our smart itinerary navigator generate your perfect Sri Lankan journey with private chauffeur in seconds.
          </p>
        </div>
      </section>

      {/* Interactive Planner Section */}
      <section className="pb-24 px-4 sm:px-6 relative z-30 -mt-16 sm:-mt-20">
        <div className="container mx-auto">
          <TripPlanner />
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-5xl">
          <h2 className="text-2xl sm:text-4xl font-display font-black text-navy mb-14 tracking-tight uppercase">
            Why Plan With Flying Bird Tours?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4 text-center">
              <div className="w-16 h-16 bg-purple/10 rounded-2xl flex items-center justify-center mx-auto text-purple">
                <Shield size={28} />
              </div>
              <h3 className="text-lg font-bold text-navy">Local Expert Guidance</h3>
              <p className="text-navy/65 text-xs sm:text-sm leading-relaxed font-medium">
                Routes designed by licensed local guides who know the quiet viewpoints and cultural etiquette.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4 text-center">
              <div className="w-16 h-16 bg-purple/10 rounded-2xl flex items-center justify-center mx-auto text-purple">
                <Banknote size={28} />
              </div>
              <h3 className="text-lg font-bold text-navy">Transparent Value</h3>
              <p className="text-navy/65 text-xs sm:text-sm leading-relaxed font-medium">
                All-inclusive private vehicle transport with fuel, highway toll charges, and driver stays covered.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm space-y-4 text-center">
              <div className="w-16 h-16 bg-purple/10 rounded-2xl flex items-center justify-center mx-auto text-purple">
                <Clock8 size={28} />
              </div>
              <h3 className="text-lg font-bold text-navy">Flexible Schedules</h3>
              <p className="text-navy/65 text-xs sm:text-sm leading-relaxed font-medium">
                Pace your day freely. Stop for roadside king coconuts or photo moments whenever you wish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
