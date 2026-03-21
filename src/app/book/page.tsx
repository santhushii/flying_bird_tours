import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { BookingForm } from "@/components/booking/BookingForm";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-ivory/20 dark:bg-black/40">
      <Navbar />
      
      {/* Hero Banner Area */}
      <section className="relative h-[400px] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img src="https://images.unsplash.com/photo-1546708973-b339540b5162?w=1600" className="absolute inset-0 object-cover w-full h-full brightness-75 scale-105" />
        <div className="relative z-20 text-center px-6">
           <span className="text-gold font-display font-medium tracking-[0.3em] uppercase mb-4 block">Secure Your Trip</span>
           <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-6">RESERVE YOUR <br /> <span className="text-primary">ISLAND JOURNEY</span></h1>
           <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-24 px-6 relative z-30 -mt-10">
        <div className="container mx-auto">
          <Suspense fallback={<div className="h-[600px] w-full flex items-center justify-center text-navy font-bold">LOADING FORM...</div>}>
            <BookingForm />
          </Suspense>
        </div>
      </section>
      
      {/* Testimonial / Trust Seal */}
      <section className="py-20 mb-20">
         <div className="container mx-auto px-6 flex flex-col items-center">
            <div className="max-w-2xl text-center">
               <div className="flex justify-center gap-1 text-gold mb-6">
                  {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-2xl">&#9733;</span>)}
               </div>
               <p className="text-xl md:text-2xl italic font-display text-foreground/70 leading-relaxed mb-8">
                  "Booking was incredibly easy! The price was fair, and our driver Kapila was amazing. He knew every hidden gem in Ella."
               </p>
               <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-200" />
                  <div className="text-left">
                     <span className="block font-bold">Emma Wilson</span>
                     <span className="text-xs text-foreground/40 uppercase tracking-widest font-bold">Tourist from UK</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Basic Footer */}
      <footer className="py-12 border-t border-black/5 flex flex-col items-center gap-4">
         <p className="text-foreground/40 text-[10px] tracking-widest uppercase">&copy; 2026 Flying Bird Tours Sri Lanka</p>
      </footer>
    </main>
  );
}
