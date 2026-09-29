import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/booking/BookingForm";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Private Tour & Chauffeur Service Sri Lanka",
  description: "Reserve your private car, van, or custom Sri Lanka island tour with Flying Bird Tours. Instant WhatsApp concierge and direct quote booking.",
  alternates: {
    canonical: "/book",
  },
  openGraph: {
    title: "Book Private Chauffeur & Island Tour | Flying Bird Tours",
    description: "Fast, transparent booking for airport pickups, private fleet charters, and custom island tours.",
    url: "https://flyingbirdtours.com/book",
  }
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      {/* Hero Banner Area */}
      <section className="relative h-[340px] sm:h-[420px] w-full flex items-center justify-center overflow-hidden bg-slate-900">
        <Image
          src="/destinations/sigiriya.png"
          alt="Reserve Island Journey with Flying Bird Tours"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/80 z-10" />

        <div className="relative z-20 text-center px-4 sm:px-6 mt-16 max-w-2xl">
          <span className="text-gold font-display font-bold tracking-widest uppercase mb-3 block text-xs">
            Direct Reservation Desk
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-white mb-4 uppercase tracking-tight">
            RESERVE YOUR <span className="text-gold italic font-serif font-normal">ISLAND JOURNEY</span>
          </h1>
          <p className="text-white/80 text-xs sm:text-sm font-medium">
            Fill out the details below to receive an instant WhatsApp itinerary confirmation and fixed quote.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-30 -mt-14 sm:-mt-16">
        <div className="container mx-auto max-w-5xl">
          <Suspense fallback={
            <div className="h-[500px] w-full bg-white rounded-3xl border border-gray-200 flex items-center justify-center text-navy font-bold text-sm">
              Loading Reservation Form...
            </div>
          }>
            <BookingForm />
          </Suspense>
        </div>
      </section>
      
      {/* Testimonial Feature (No decorative star marks) */}
      <section className="py-16 pb-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
            <Award size={14} />
            <span>Verified Guest Experience</span>
          </div>

          <p className="text-lg sm:text-2xl italic font-serif text-navy/80 leading-relaxed mb-6">
            &ldquo;Booking was remarkably smooth. Our driver picked us up right outside Colombo Airport customs on time, vehicle was brand new, and he knew all the scenic viewpoints across Ella and Kandy.&rdquo;
          </p>

          <div className="flex items-center justify-center gap-3">
            <div className="w-11 h-11 rounded-full bg-purple/10 flex items-center justify-center text-purple font-bold text-sm">
              EW
            </div>
            <div className="text-left">
              <span className="block font-bold text-navy text-sm">Emma &amp; David Wilson</span>
              <span className="text-xs text-navy/50 font-medium">10-Day Island Chauffeur Tour • London, UK</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
