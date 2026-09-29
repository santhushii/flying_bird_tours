import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { vehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { Shield, Clock, Map, UserCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Luxury Vehicle Fleet & Private Chauffeur Hire Sri Lanka",
  description: "Browse Flying Bird Tours luxury fleet: air-conditioned sedans, Toyota Axio, Prius hybrid, Hiace KDH vans, and Rosa minibuses with licensed English-speaking drivers.",
  alternates: {
    canonical: "/vehicles",
  },
  openGraph: {
    title: "Luxury Vehicle Fleet & Chauffeur Transport | Flying Bird Tours",
    description: "Modern, fully insured, air-conditioned vehicles for Sri Lanka island tours and airport transfers.",
    url: "https://flyingbirdtours.com/vehicles",
  }
};

export default function VehiclesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-36 lg:pt-44 pb-16 bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-purple font-display font-bold uppercase tracking-wider text-xs block mb-3">
              Private Chauffeured Fleet
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-navy mb-6 tracking-tight uppercase">
              LUXURY ON <span className="text-purple italic font-serif font-normal">WHEELS</span>
            </h1>
            <p className="text-base sm:text-lg text-navy/70 leading-relaxed font-medium">
              Travel across Sri Lanka in total comfort with our modern, fully insured, air-conditioned fleet. Whether you are a solo traveler, a couple, a family, or a large tour party, we provide the perfect ride with experienced English-speaking chauffeurs.
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition Strip */}
      <section className="bg-navy py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center gap-2.5">
            <Shield className="text-emerald-400" size={28} />
            <span className="text-xs uppercase font-bold tracking-wider text-white">Fully Insured Fleet</span>
            <span className="text-[11px] text-white/50">Comprehensive passenger coverage</span>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <Clock className="text-gold" size={28} />
            <span className="text-xs uppercase font-bold tracking-wider text-white">24/7 Roadside Care</span>
            <span className="text-[11px] text-white/50">Island-wide rapid assistance</span>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <UserCheck className="text-purple" size={28} />
            <span className="text-xs uppercase font-bold tracking-wider text-white">Licensed Chauffeurs</span>
            <span className="text-[11px] text-white/50">Polite, English-speaking guides</span>
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <Map className="text-gold" size={28} />
            <span className="text-xs uppercase font-bold tracking-wider text-white">Tolls &amp; Fuel Included</span>
            <span className="text-[11px] text-white/50">Zero unexpected surcharges</span>
          </div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Action CTA */}
      <section className="py-20 text-center bg-slate-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-display font-black text-navy mb-4 uppercase tracking-tight">
            Ready to Reserve Your Chauffeur?
          </h2>
          <p className="text-navy/60 text-sm sm:text-base max-w-xl mx-auto mb-8 font-medium">
            Contact our reservation desk with your flight or hotel details for instant confirmation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/book" 
              className="bg-purple hover:bg-purple/90 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
            >
              <span>Book Vehicle Now</span>
              <ArrowRight size={14} />
            </Link>
            <a
              href="https://wa.me/94760448292?text=Hello%20Flying%20Bird%20Tours!%20I%20would%20like%20to%20inquire%20about%20vehicle%20hire%20rates."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-300 hover:border-purple/40 text-navy px-8 py-4 rounded-xl font-bold transition-all shadow-sm text-xs uppercase tracking-wider"
            >
              Inquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
