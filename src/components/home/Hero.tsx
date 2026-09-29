"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { MapPin, Search, Calendar, Users, ChevronRight, Phone, Star } from "lucide-react";

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
    <section className="relative min-h-[100svh] lg:min-h-screen flex items-end lg:items-center pt-20 pb-10 lg:pb-0 overflow-hidden">

      {/* === BACKGROUND IMAGE vivid and visible === */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Aerial view of Sigiriya Rock Fortress at golden sunset - Sri Lanka"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 40%" }}
        />
        {/* Left text-readability wash - much lighter */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/45 to-transparent" />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-navy/15" />
        {/* Warm sunset tone echo */}
        <div
          className="absolute inset-0 mix-blend-multiply opacity-20"
          style={{ background: "radial-gradient(ellipse at 70% 40%, rgba(197,160,89,0.55) 0%, transparent 65%)" }}
        />
      </div>

      {/* Purple brand shimmer */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 15% 55%, rgba(139,58,142,0.22) 0%, transparent 55%)" }}
      />

      {/* Floating ambient orbs */}
      <div className="absolute top-28 left-[8%] w-56 h-56 rounded-full bg-purple/10 blur-3xl z-[1] animate-float pointer-events-none" />
      <div
        className="absolute bottom-28 right-[12%] w-40 h-40 rounded-full bg-gold/10 blur-2xl z-[1] pointer-events-none"
        style={{ animation: "float 8s ease-in-out infinite 2s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Hero Text */}
          <div className="lg:col-span-7 space-y-5 lg:space-y-7">

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/25 text-white font-semibold text-xs tracking-widest uppercase backdrop-blur-md shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span>Boutique Island Tours &amp; Private Chauffeur</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black text-white leading-[1.0] tracking-tight">
              <span style={{ textShadow: "0 2px 30px rgba(0,0,0,0.55)" }}>BEYOND</span>
              <br />
              <span
                className="italic font-serif font-normal"
                style={{ color: "#C5A059", textShadow: "0 2px 20px rgba(197,160,89,0.65), 0 0 60px rgba(197,160,89,0.3)" }}
              >
                HORIZONS
              </span>
            </h1>

            <p
              className="max-w-xl text-base sm:text-lg md:text-xl text-white/90 leading-relaxed font-medium"
              style={{ textShadow: "0 1px 12px rgba(0,0,0,0.5)" }}
            >
              Experience the authentic soul of Sri Lanka with our premium private chauffeur tours.
              Hand-crafted itineraries, luxury vehicles, and personalized island adventures.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => router.push("/planner")}
                className="group relative overflow-hidden bg-purple hover:bg-purple/90 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-purple/40 hover:shadow-xl hover:shadow-purple/60 transition-all flex items-center gap-2.5 text-sm sm:text-base cursor-pointer"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <span className="relative">PLAN YOUR TRIP</span>
                <ChevronRight size={18} className="relative group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:+94760448292"
                className="flex items-center gap-2.5 text-white border border-white/35 hover:border-white/70 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl font-bold transition-all text-sm cursor-pointer"
              >
                <Phone size={16} />
                <span>+94 76 044 8292</span>
              </a>
            </div>

            <div className="pt-5 flex flex-wrap gap-6 text-xs text-white/75 font-semibold border-t border-white/20 max-w-lg">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/60" />
                <span>SLTDA Registered Agency</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple shadow-sm shadow-purple/60" />
                <span>English-Speaking Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold shadow-sm shadow-gold/60" />
                <span>TripAdvisor 5.0 Rated</span>
              </div>
            </div>
          </div>

          {/* Reservation Card */}
          <div className="lg:col-span-5 w-full max-w-lg mx-auto lg:max-w-none">
            <div className="relative">
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-purple/40 via-gold/20 to-purple/10 blur-xl opacity-70" />

              <div className="relative bg-white/97 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-white/40 shadow-2xl">
                <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
                  <div className="p-2.5 bg-purple/10 rounded-xl text-purple">
                    <Search size={20} />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-bold text-navy">Quick Reservation</h2>
                    <p className="text-xs text-navy/50 font-medium">Check private driver &amp; vehicle availability</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1 bg-gold/10 border border-gold/20 px-2.5 py-1 rounded-full">
                    <Star size={11} className="fill-gold text-gold" />
                    <span className="text-[10px] font-bold text-gold">5.0</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-50 hover:bg-slate-100/80 p-4 rounded-2xl border border-gray-200 hover:border-purple/30 transition-all">
                    <label className="text-[10px] text-purple font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <MapPin size={12} /> PICKUP LOCATION
                    </label>
                    <input
                      type="text"
                      placeholder="Colombo Airport, Hotel, or City"
                      value={formData.pickup}
                      onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                      className="bg-transparent border-none text-navy focus:outline-none focus:ring-0 w-full placeholder:text-navy/35 font-semibold text-sm sm:text-base"
                    />
                  </div>

                  <div className="bg-slate-50 hover:bg-slate-100/80 p-4 rounded-2xl border border-gray-200 hover:border-purple/30 transition-all">
                    <label className="text-[10px] text-purple font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <Calendar size={12} /> START DATE
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="bg-transparent border-none text-navy focus:outline-none focus:ring-0 w-full font-semibold text-sm sm:text-base cursor-pointer"
                    />
                  </div>

                  <div className="bg-slate-50 hover:bg-slate-100/80 p-4 rounded-2xl border border-gray-200 hover:border-purple/30 transition-all">
                    <label className="text-[10px] text-purple font-bold uppercase tracking-wider flex items-center gap-1.5 mb-1">
                      <Users size={12} /> TRAVELERS
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="bg-transparent border-none text-navy focus:outline-none focus:ring-0 w-full font-semibold text-sm sm:text-base cursor-pointer"
                    >
                      <option value="1">1 Person (Solo Traveler)</option>
                      <option value="2">2 People (Couple / Pair)</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People (Family Sedan / Van)</option>
                      <option value="5">5 - 7 People (Spacious Van)</option>
                      <option value="8">8 - 14 People (Minibus)</option>
                      <option value="15">15+ People (Tour Coach)</option>
                    </select>
                  </div>

                  <button
                    onClick={handleSearch}
                    className="w-full py-4 bg-navy hover:bg-purple text-white rounded-2xl font-bold shadow-lg shadow-navy/20 hover:shadow-purple/30 transition-all duration-300 flex items-center justify-center gap-2 text-base mt-2 cursor-pointer"
                  >
                    <span>CHECK AVAILABILITY &amp; RATES</span>
                    <ChevronRight size={18} />
                  </button>

                  <p className="text-center text-[11px] text-navy/50 font-medium">
                    Direct WhatsApp confirmation &bull; Transparent pricing &bull; No hidden fees
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-20" />
    </section>
  );
}