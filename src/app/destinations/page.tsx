import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { MapPin, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Top Sri Lanka Tour Destinations | Flying Bird Tours",
  description: "Explore Sri Lanka's finest travel destinations: Ella tea highlands, Galle Dutch Fort, Sigiriya Lion Rock citadel, Kandy cultural temples, and Mirissa beaches with private chauffeur tours.",
  alternates: {
    canonical: "/destinations",
  },
  openGraph: {
    title: "Curated Sri Lanka Tour Destinations | Flying Bird Tours",
    description: "Discover iconic ancient kingdoms, misty mountain trails, and tropical southern coastlines.",
    url: "https://flyingbirdtours.com/destinations",
  }
};

const destinations = [
  { 
    id: "sigiriya", 
    name: "Sigiriya Ancient Citadel", 
    region: "Central Cultural Triangle", 
    text: "Climb the ancient 5th-century Lion Rock fortress rising dramatically 200 meters above tropical jungle plains. Marvel at ancient water gardens and world-famous fresco paintings.", 
    img: "/destinations/sigiriya.png",
    highlights: ["UNESCO World Heritage Site", "Dambulla Cave Temples nearby", "Minneriya Elephant Gathering"]
  },
  { 
    id: "ella", 
    name: "Ella Misty Highlands", 
    region: "Uva Mountain Province", 
    text: "Journey into the refreshing mist of the central highlands. Walk along the architectural marvel of Nine Arch Bridge surrounded by lush Ceylon tea plantations and roaring waterfalls.", 
    img: "/destinations/ella.png",
    highlights: ["Iconic Blue Train Journey", "Little Adam's Peak Hiking", "Ravana Falls & Tea Tasting"]
  }, 
  { 
    id: "kandy", 
    name: "Kandy Sacred Hill Kingdom", 
    region: "Central Province", 
    text: "The spiritual heart of Sri Lanka, cradled by emerald hills and peaceful lakes. Home to the revered Temple of the Sacred Tooth Relic and century-old Royal Botanical Gardens.", 
    img: "/destinations/kandy.png",
    highlights: ["Temple of the Sacred Tooth", "Peradeniya Botanical Gardens", "Kandy Cultural Dance Shows"]
  }, 
  { 
    id: "galle", 
    name: "Galle Historic Fort", 
    region: "Southern Coast", 
    text: "A living 17th-century Dutch colonial fortification surrounded on three sides by the turquoise Indian Ocean. Cobblestone pathways, boutique cafes, jewelry ateliers, and coastal ramparts.", 
    img: "/destinations/galle.png",
    highlights: ["Preserved Colonial Ramparts", "Boutique Oceanfront Villas", "Maritime Museums & Lighthouse"]
  }, 
  { 
    id: "mirissa", 
    name: "Mirissa Ocean Sanctuary", 
    region: "Southern Province", 
    text: "Unwind on golden crescent sands, embark on early morning blue whale watching cruises, and experience the laid-back surf culture and vibrant beach dining of the southern coast.", 
    img: "/destinations/mirissa.png",
    highlights: ["Blue Whale & Dolphin Cruises", "Coconut Tree Hill Panoramic Point", "Secret Beach & Snorkeling"]
  }
];

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Banner */}
      <section className="pt-36 lg:pt-44 pb-16 bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-purple font-display font-bold uppercase tracking-wider text-xs block mb-3">
              Curated Island Itineraries
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-navy mb-6 tracking-tight uppercase">
              DISCOVER THE <span className="text-purple italic font-serif font-normal">PEARL</span>
            </h1>
            <p className="text-base sm:text-lg text-navy/70 leading-relaxed font-medium">
              Sri Lanka holds an extraordinary spectrum of landscapes within a compact tropical island. From ancient UNESCO citadels to misty mountain tea trails and sun-drenched coastal reefs, discover our most requested private tour routes.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto space-y-24 lg:space-y-32 max-w-6xl">
          {destinations.map((dst, i) => (
            <div 
              key={dst.id} 
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
            >
              {/* Image Container */}
              <div className="flex-1 w-full relative rounded-3xl overflow-hidden shadow-lg border border-gray-200 h-[360px] sm:h-[440px] bg-slate-100">
                <Image 
                  src={dst.img} 
                  alt={`${dst.name} - Sri Lanka Private Tour Destination`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={i < 2}
                  className="object-cover object-center" 
                />
                <div className="absolute top-4 left-4 py-2 px-4 bg-white/95 backdrop-blur-md rounded-full flex items-center gap-2 shadow-sm border border-gray-200">
                  <MapPin size={14} className="text-purple" />
                  <span className="text-xs font-bold uppercase tracking-wider text-navy">{dst.region}</span>
                </div>
              </div>
              
              {/* Text Description */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-5xl sm:text-6xl font-display font-black text-purple/20 select-none">
                    0{i + 1}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy tracking-tight">
                    {dst.name}
                  </h2>
                </div>

                <p className="text-navy/70 text-base sm:text-lg leading-relaxed font-medium">
                  {dst.text}
                </p>

                {/* Highlights */}
                <div className="space-y-2.5 pt-1">
                  {dst.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-navy/80 font-medium">
                      <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 items-center pt-3">
                  <Link
                    href={`/book?pickup=${encodeURIComponent(dst.name)}`}
                    className="bg-navy hover:bg-purple text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
                  >
                    <span>Book Route to {dst.name.split(" ")[0]}</span>
                    <ArrowRight size={14} />
                  </Link>
                  <Link
                    href="/planner"
                    className="text-xs font-bold uppercase tracking-wider text-purple hover:text-navy transition-colors py-2"
                  >
                    Plan Custom Itinerary &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-20 bg-slate-50 border-t border-gray-200 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-4xl font-display font-black text-navy mb-4 uppercase tracking-tight">
            Have a Custom Sri Lanka Destination in Mind?
          </h2>
          <p className="text-navy/60 text-sm sm:text-base max-w-xl mx-auto mb-8 font-medium">
            Our private chauffeur drivers take you anywhere on the island on your own schedule.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/book" 
              className="bg-purple hover:bg-purple/90 text-white px-8 py-3.5 rounded-xl font-bold transition-all shadow-md text-xs uppercase tracking-wider"
            >
              Book Custom Tour
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
