"use client";

import { useState } from "react";
import { Sun, Cloud, Thermometer, Wind, Calendar, Compass, Info, CheckCircle2 } from "lucide-react";

interface RegionClimate {
  region: string;
  destinations: string;
  temp: string;
  bestMonths: string;
  condition: string;
  icon: typeof Sun;
  summary: string;
  highlights: string[];
  advisory: string;
}

const REGIONS_DATA: RegionClimate[] = [
  {
    region: "West & South Coast",
    destinations: "Colombo • Bentota • Galle • Mirissa",
    temp: "29°C - 32°C",
    bestMonths: "December – April",
    condition: "Sunny & Calm Seas",
    icon: Sun,
    summary: "Dry, sunny weather with calm coastal waters. Ideal for beach stays, ocean safaris, and colonial fort walking tours.",
    highlights: ["Blue Whale Watching in Mirissa", "Historic Galle Dutch Fort Walk", "Golden Coast Sunsets"],
    advisory: "Peak tourism season with ideal swimming conditions."
  },
  {
    region: "Central Highlands",
    destinations: "Kandy • Nuwara Eliya • Ella",
    temp: "18°C - 24°C",
    bestMonths: "January – May & August – September",
    condition: "Crisp Mountain Mist",
    icon: Cloud,
    summary: "Cool mountain temperatures with refreshing breezes. Lush green rolling tea hills, waterfalls, and scenic alpine trains.",
    highlights: ["Nine Arch Bridge Train Journeys", "Little Adam's Peak Hiking", "High-Grown Ceylon Tea Tasting"],
    advisory: "Bring a light jacket for cool highland evenings."
  },
  {
    region: "Cultural Triangle",
    destinations: "Sigiriya • Dambulla • Polonnaruwa",
    temp: "28°C - 33°C",
    bestMonths: "Year-Round (Best Jan – September)",
    condition: "Warm & Tropical",
    icon: Sun,
    summary: "Ancient rock citadels, UNESCO cave temples, and elephant gathering sanctuaries set in the historic dry zone heartland.",
    highlights: ["Early Morning Sigiriya Lion Rock Climb", "Minneriya Wild Elephant Safari", "Dambulla Golden Cave Temple"],
    advisory: "Start morning cultural climbs early to avoid midday heat."
  },
  {
    region: "East Coast & Marine Parks",
    destinations: "Trincomalee • Pasikudah • Arugam Bay",
    temp: "28°C - 34°C",
    bestMonths: "May – September",
    condition: "Sunny & Ocean Breezes",
    icon: Wind,
    summary: "Calm, shallow turquoise bays and world-renowned surf breaks while the southwest coast experiences monsoon showers.",
    highlights: ["Pigeon Island Marine Snorkeling", "Arugam Bay Point Surfing", "Swami Rock Coastal Sanctuary"],
    advisory: "Sri Lanka has two opposing monsoons, meaning one coast is always sunny!"
  }
];

export function IslandClimate() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const active = REGIONS_DATA[selectedIdx];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple/10 border border-purple/20 text-purple text-xs font-bold uppercase tracking-wider mb-4">
            <Compass size={14} />
            <span>Sri Lanka Travel Weather Guide</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-navy tracking-tight uppercase">
            ISLAND CLIMATE &amp; <span className="text-purple">BEST TIMES TO VISIT</span>
          </h2>

          <p className="mt-4 text-navy/70 text-base sm:text-lg leading-relaxed font-medium">
            Sri Lanka enjoys warm tropical weather year-round. Because of two alternating weather patterns, whenever you visit, there is always a sun-drenched region waiting for your adventure.
          </p>
        </div>

        {/* Climate Region Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10">
          {REGIONS_DATA.map((item, idx) => {
            const isSelected = selectedIdx === idx;
            return (
              <button
                key={item.region}
                onClick={() => setSelectedIdx(idx)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  isSelected
                    ? "bg-navy text-white border-navy shadow-lg shadow-navy/15 scale-[1.02]"
                    : "bg-white text-navy/70 border-gray-200 hover:border-purple/30 hover:text-navy hover:bg-slate-50"
                }`}
              >
                <item.icon size={16} className={isSelected ? "text-gold" : "text-purple"} />
                <span>{item.region}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Climate Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Temperature & Overview */}
            <div className="lg:col-span-5 bg-navy text-white p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple/15 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-gold">Current Season Status</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-semibold border border-white/15">
                    {active.condition}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-2">
                  {active.region}
                </h3>
                <p className="text-white/70 text-xs sm:text-sm font-medium mb-6">
                  {active.destinations}
                </p>

                <div className="flex items-baseline gap-3 my-6 pb-6 border-b border-white/10">
                  <div className="p-3 bg-white/10 rounded-2xl text-gold">
                    <Thermometer size={28} />
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-display font-black text-white">{active.temp}</span>
                    <span className="block text-[11px] text-white/60 font-semibold mt-0.5">Average Daytime Range</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 space-y-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-white/80">
                  <Calendar size={15} className="text-gold shrink-0" />
                  <span><strong>Prime Window:</strong> {active.bestMonths}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-white/80">
                  <Info size={15} className="text-[#25D366] shrink-0" />
                  <span>{active.advisory}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Highlights & Travel Tips */}
            <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-purple mb-3">Regional Travel Overview</h4>
                <p className="text-navy/80 text-sm sm:text-base leading-relaxed font-medium mb-8">
                  {active.summary}
                </p>

                <h4 className="text-xs uppercase tracking-widest font-bold text-navy mb-4">Recommended Experiences</h4>
                <div className="space-y-3 mb-8">
                  {active.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-navy/75 font-medium">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-navy/60 font-medium text-center sm:text-left">
                  Need personalized seasonal advice for your travel dates?
                </div>
                <a
                  href={`https://wa.me/94760448292?text=Hello%20Flying%20Bird%20Tours!%20I%20would%20like%20advice%20on%20the%20best%20itinerary%20for%20${encodeURIComponent(active.region)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 bg-purple hover:bg-purple/90 text-white rounded-xl text-xs font-bold text-center transition-all duration-200 shadow-sm cursor-pointer"
                >
                  Consult Concierge
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Climate Grid for All Regions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {REGIONS_DATA.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                selectedIdx === idx
                  ? "bg-purple/5 border-purple shadow-md"
                  : "bg-white border-gray-200 hover:border-gray-300 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <item.icon size={22} className="text-purple" />
                <span className="text-xs font-bold text-navy">{item.temp}</span>
              </div>
              <h5 className="font-display font-bold text-navy text-base mb-1">{item.region}</h5>
              <p className="text-xs text-navy/50 font-medium line-clamp-1 mb-2">{item.destinations}</p>
              <span className="text-[11px] font-bold text-purple/90 block">Best: {item.bestMonths}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
