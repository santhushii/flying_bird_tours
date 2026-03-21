import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { vehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { Info, Shield, Clock, Map } from "lucide-react";

export default function VehiclesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-20 bg-ivory/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
             <span className="text-primary font-display font-medium uppercase tracking-[0.3em] block mb-4">Our Fleet</span>
             <h1 className="text-5xl md:text-8xl font-display font-bold mb-8">LUXURY ON <span className="text-gold italic">WHEELS</span></h1>
             <p className="text-lg text-foreground/50 leading-relaxed mb-12">
               Travel in comfort with our diverse range of fully insured, air-conditioned vehicles. Whether you're a solo traveler or a large group, we have the perfect ride for your Sri Lankan tour.
             </p>
          </div>
        </div>
      </section>

      {/* Benefits / Trust bar */}
      <section className="bg-black py-16">
        <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
           <div className="flex flex-col items-center gap-4">
              <Shield className="text-primary" size={32} />
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Fully Insured</span>
           </div>
           <div className="flex flex-col items-center gap-4">
              <Clock className="text-gold" size={32} />
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold">24/7 Support</span>
           </div>
           <div className="flex flex-col items-center gap-4">
              <Info className="text-primary" size={32} />
              <span className="text-[10px] uppercase font-bold tracking-widest text-primary">English Speaking</span>
           </div>
           <div className="flex flex-col items-center gap-4">
              <Map className="text-gold" size={32} />
              <span className="text-[10px] uppercase font-bold tracking-widest text-gold">Tour Specialists</span>
           </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6 bg-ivory/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {vehicles.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Dynamic CTA */}
      <section className="py-24 text-center bg-background">
         <h2 className="text-3xl font-display font-bold mb-8">Ready to start your journey?</h2>
         <button className="bg-primary text-white border-none px-12 py-5 rounded-full font-bold shadow-2xl hover:scale-105 transition-all">
            BOOK A VEHICLE NOW
         </button>
      </section>

      <Footer />
    </main>
  );
}
