"use client";

import { useState } from "react";
import { MapPin, ArrowRight, Clock, Car, Compass, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface LocationSpot {
  id: string;
  name: string;
  category: string;
  region: string;
  x: number; // percentage on SVG
  y: number; // percentage on SVG
  image: string;
  description: string;
  durationFromAirport: string;
  popularFor: string[];
}

const SRI_LANKA_DESTINATIONS: LocationSpot[] = [
  {
    id: "colombo",
    name: "Colombo & Negombo",
    category: "International Hub & Coastal Gateway",
    region: "Western Province",
    x: 26,
    y: 65,
    image: "/destinations/galle.png",
    description: "The primary international gateway, luxury beachside Negombo hotels, and historic colonial commerce in Colombo.",
    durationFromAirport: "20 - 45 Mins from Airport",
    popularFor: ["VIP Airport Pickups", "Galle Face Green", "National Museum"]
  },
  {
    id: "kandy",
    name: "Kandy Cultural Capital",
    category: "UNESCO World Heritage & Hill Kingdom",
    region: "Central Province",
    x: 50,
    y: 57,
    image: "/blog/kandy.png",
    description: "The sacred Temple of the Tooth Relic, serene Kandy Lake, and lush Peradeniya Royal Botanical Gardens in the misty hills.",
    durationFromAirport: "3.5 Hours via Express Chauffeur",
    popularFor: ["Temple of the Sacred Tooth", "Traditional Dance Shows", "Royal Botanical Gardens"]
  },
  {
    id: "sigiriya",
    name: "Sigiriya & Dambulla",
    category: "Ancient Citadel & Cultural Triangle",
    region: "Matale District",
    x: 51,
    y: 43,
    image: "/destinations/sigiriya.png",
    description: "The iconic 5th-century Lion Rock fortress rising 200m above the jungle, paired with the ancient Dambulla Cave Temples.",
    durationFromAirport: "4.0 Hours via Kurunegala Route",
    popularFor: ["Lion Rock Fortress Climb", "Dambulla Golden Cave Temple", "Minneriya Wild Elephant Safari"]
  },
  {
    id: "ella",
    name: "Ella & Nuwara Eliya",
    category: "Misty Tea Highlands & Waterfalls",
    region: "Uva & Central Highlands",
    x: 62,
    y: 69,
    image: "/destinations/ella.png",
    description: "World-famous Nine Arch Bridge, breathtaking Little Adam's Peak trails, and high-grown Ceylon tea estates.",
    durationFromAirport: "5.5 Hours Scenic Highland Drive",
    popularFor: ["Nine Arch Bridge", "Ravana Waterfall", "Scenic Tea Factory Tours"]
  },
  {
    id: "galle",
    name: "Galle Dutch Fort",
    category: "17th Century UNESCO Heritage",
    region: "Southern Province",
    x: 33,
    y: 87,
    image: "/destinations/galle.png",
    description: "Preserved living Dutch fortress with cobblestone alleys, boutique villas, lighthouse vistas, and turquoise ocean waves.",
    durationFromAirport: "2.0 Hours via Southern Expressway",
    popularFor: ["Historic Fort Ramparts", "Maritime Museum", "Lighthouse & Sunset Point"]
  },
  {
    id: "mirissa",
    name: "Mirissa & Weligama",
    category: "Ocean Safari & Surfing Bay",
    region: "Southern Coast",
    x: 42,
    y: 91,
    image: "/blog/whale.png",
    description: "Renowned blue whale & dolphin watching capital, coconut tree hill, and pristine crescent golden beaches.",
    durationFromAirport: "2.5 Hours via Southern Expressway",
    popularFor: ["Blue Whale Watching Cruises", "Beginner Surf Lessons", "Coconut Tree Hill"]
  },
  {
    id: "yala",
    name: "Yala National Park",
    category: "Premier Leopard & Wildlife Safari",
    region: "Southern / Uva Border",
    x: 73,
    y: 83,
    image: "/destinations/sigiriya.png",
    description: "The highest leopard density in the world, wild elephants, sloth bears, and saltwater lagoons along the untamed coast.",
    durationFromAirport: "4.5 Hours via Highway & Hambantota",
    popularFor: ["Jeep Leopard Safaris", "Wild Elephant Herds", "Bird Sanctuary Lagoons"]
  },
  {
    id: "trincomalee",
    name: "Trincomalee & Pigeon Island",
    category: "Eastern Pristine Marine Haven",
    region: "Eastern Province",
    x: 71,
    y: 33,
    image: "/blog/waterfall.png",
    description: "Deep natural harbor, turquoise shallow beaches at Nilaveli, coral reef snorkeling at Pigeon Island, and Koneswaram Temple.",
    durationFromAirport: "5.5 Hours across Island Plains",
    popularFor: ["Pigeon Island Marine Snorkeling", "Koneswaram Cliff Temple", "Nilaveli Quiet Beaches"]
  }
];

// Geographically accurate vector path of the island of Sri Lanka
// Projected precisely to match true coastline contours (Jaffna peninsula, Mannar, Trincomalee Bay, Batticaloa, Hambantota curve, Dondra Head, Galle, Colombo, Kalpitiya)
const ACCURATE_SRI_LANKA_PATH = `
  M 40.5 4.8 
  C 42 4.2, 45 4.5, 46 6.5
  C 47 8.5, 45 11, 43 13.5
  C 41 16, 38 18, 35 20
  C 31 22, 28 24, 27 26.5
  C 26 29, 28 32, 29 35
  C 26 38, 24 43, 24 48
  C 24 53, 25 58, 25.5 63
  C 26 68, 27 73, 28.5 78
  C 30 83, 31.5 86, 33.5 88.5
  C 35 90.5, 38 92.5, 41 93.5
  C 44 94.2, 48 94, 52 92.5
  C 56 91, 62 88, 67 85
  C 72 82, 76 78, 77.5 74
  C 79 70, 78.5 66, 77 62
  C 75.5 58, 74 54, 73.5 50
  C 73 46, 75 42, 74 38
  C 73 34, 70 31, 67 28
  C 64 25, 61 22, 57 19
  C 53 16, 49 13, 46 10
  C 43 7, 39 5.4, 40.5 4.8 Z
`;

export function SriLankaMap() {
  const [selectedSpot, setSelectedSpot] = useState<LocationSpot>(SRI_LANKA_DESTINATIONS[0]);

  return (
    <section className="w-full bg-navy text-white rounded-3xl lg:rounded-[3rem] p-6 sm:p-10 lg:p-14 shadow-2xl border border-white/10 relative overflow-hidden">
      {/* Subtle Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest mb-3">
            <Compass size={14} className="text-gold" />
            <span>Island-Wide Private Chauffeur Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black tracking-tight text-white uppercase">
            EXPLORE OUR <span className="text-gold">NETWORK</span>
          </h2>
        </div>

        <p className="text-white/70 text-xs sm:text-sm max-w-lg font-medium leading-relaxed">
          Flying Bird Tours covers all major international routes, cultural heritage sites, national parks, and coastal hubs across Sri Lanka. Select any destination to view route details.
        </p>
      </div>

      {/* Interactive Network Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Interactive Destination Directory */}
        <div className="lg:col-span-5 space-y-2.5 order-2 lg:order-1">
          <span className="text-[11px] font-bold uppercase tracking-widest text-white/50 block mb-2">
            Select A Key Destination Point ({SRI_LANKA_DESTINATIONS.length} Hubs)
          </span>

          <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
            {SRI_LANKA_DESTINATIONS.map((spot) => {
              const isSelected = selectedSpot.id === spot.id;
              return (
                <button
                  key={spot.id}
                  onClick={() => setSelectedSpot(spot)}
                  className={`w-full p-3.5 sm:p-4 rounded-2xl border transition-all text-left flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-purple text-white border-purple shadow-lg shadow-purple/25"
                      : "bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl shrink-0 ${isSelected ? "bg-white text-purple" : "bg-white/10 text-gold"}`}>
                      <MapPin size={16} />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm tracking-tight text-white">{spot.name}</h3>
                      <p className={`text-xs ${isSelected ? "text-white/80" : "text-white/50"}`}>{spot.region}</p>
                    </div>
                  </div>

                  <ArrowRight size={14} className={`transition-transform shrink-0 ${isSelected ? "translate-x-0.5 text-white" : "opacity-40 text-white"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: Accurate Map Vector & Selected Hub Card */}
        <div className="lg:col-span-7 flex flex-col md:flex-row gap-6 items-center justify-center order-1 lg:order-2">
          
          {/* Geographically Accurate Vector Map */}
          <div className="w-full max-w-[320px] h-[380px] sm:h-[420px] bg-white/5 rounded-3xl border border-white/10 p-4 flex items-center justify-center relative shadow-inner">
            <svg 
              viewBox="0 0 100 100" 
              className="w-full h-full filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.6)]"
              aria-label="Geographically accurate map of Sri Lanka"
            >
              {/* Coastline Contour */}
              <path
                d={ACCURATE_SRI_LANKA_PATH}
                fill="rgba(255, 255, 255, 0.07)"
                stroke="#C5A059"
                strokeWidth="1.2"
                className="transition-colors"
              />

              {/* Highway Network Paths (Expressway & Main Arterials) */}
              <path
                d="M 26 65 L 50 57 L 51 43 M 50 57 L 62 69 M 26 65 L 33 87 L 42 91 L 73 83 M 51 43 L 71 33"
                fill="none"
                stroke="#8B3A8E"
                strokeWidth="0.8"
                strokeDasharray="2 1.5"
                opacity="0.6"
              />

              {/* Accurate Destination Markers */}
              {SRI_LANKA_DESTINATIONS.map((spot) => {
                const isActive = selectedSpot.id === spot.id;
                return (
                  <g 
                    key={spot.id} 
                    onClick={() => setSelectedSpot(spot)}
                    className="cursor-pointer group"
                  >
                    {/* Active Halo */}
                    {isActive && (
                      <circle
                        cx={spot.x}
                        cy={spot.y}
                        r="6"
                        fill="none"
                        stroke="#C5A059"
                        strokeWidth="0.8"
                        opacity="0.75"
                      />
                    )}

                    {/* Marker Dot */}
                    <circle
                      cx={spot.x}
                      cy={spot.y}
                      r={isActive ? 3.5 : 2.2}
                      fill={isActive ? "#C5A059" : "#8B3A8E"}
                      stroke="#FFFFFF"
                      strokeWidth={isActive ? 0.9 : 0.5}
                      className="transition-all duration-200"
                    />

                    {/* Clean Label */}
                    <text
                      x={spot.x + (spot.x > 50 ? 4 : -4)}
                      y={spot.y + 1}
                      textAnchor={spot.x > 50 ? "start" : "end"}
                      fill={isActive ? "#FFFFFF" : "rgba(255,255,255,0.75)"}
                      fontSize="3.4"
                      fontWeight={isActive ? "bold" : "normal"}
                      className="select-none pointer-events-none"
                    >
                      {spot.name.split(" ")[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Detailed Selected Destination Hub Card */}
          <div className="w-full md:w-[300px] bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-3xl flex flex-col justify-between shadow-xl">
            <div>
              <div className="relative h-36 w-full rounded-2xl overflow-hidden mb-4 bg-slate-900 border border-white/10">
                <Image
                  src={selectedSpot.image}
                  alt={selectedSpot.name}
                  fill
                  sizes="300px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 text-gold text-[10px] font-bold uppercase tracking-wider">
                  {selectedSpot.region}
                </div>
              </div>

              <h4 className="text-xl font-display font-bold text-white mb-1.5 leading-snug">
                {selectedSpot.name}
              </h4>

              <p className="text-white/70 text-xs leading-relaxed mb-4 font-medium">
                {selectedSpot.description}
              </p>

              <div className="space-y-2 mb-4 text-xs text-white/80">
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-gold shrink-0" />
                  <span>{selectedSpot.durationFromAirport}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Car size={14} className="text-purple shrink-0" />
                  <span>Dedicated Private Chauffeur Fleet</span>
                </div>
              </div>

              <div className="space-y-1.5 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 block">Key Highlights</span>
                {selectedSpot.popularFor.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                    <CheckCircle2 size={12} className="text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={`https://wa.me/94760448292?text=Hello%20Flying%20Bird%20Tours!%20I%20would%20like%20to%20inquire%20about%20private%20chauffeur%20travel%20to%20${encodeURIComponent(selectedSpot.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-xl font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <span>Book Route via WhatsApp</span>
              <ArrowRight size={13} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
