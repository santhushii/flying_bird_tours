import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { IslandClimate } from "@/components/home/IslandClimate";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { vehicles } from "@/data/vehicles";
import { TripPlanner } from "@/components/home/TripPlanner";
import { TripAdvisorReviews } from "@/components/home/TripAdvisorReviews";
import { FAQSection } from "@/components/home/FAQSection";
import { faqsData } from "@/data/faqs";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import { ArrowRight, Compass, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Flying Bird Tours Sri Lanka | #1 Private Chauffeur & Island Tour Specialist",
  description: "Experience the Pearl of the Indian Ocean with Flying Bird Tours Sri Lanka. Luxury private chauffeur cars, curated tea country & wildlife tours, 5.0 Star rated on TripAdvisor.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Flying Bird Tours Sri Lanka | #1 Rated Chauffeur & Private Tours",
    description: "Book customized Sri Lanka tours with licensed private drivers. 5-Star TripAdvisor reviews, WhatsApp concierge, bespoke itineraries.",
    url: "https://flyingbirdtours.com",
    siteName: "Flying Bird Tours",
    images: [{ url: "/logo-premium.png", width: 1200, height: 630, alt: "Flying Bird Tours Sri Lanka" }],
    type: "website",
  }
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white selection:bg-purple/20 selection:text-purple">
      {/* Clean Global Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      
      {/* Featured Destinations Section */}
      <section className="py-20 lg:py-28 bg-white relative z-10 border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 lg:mb-18">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple/10 border border-purple/20 text-purple text-xs font-bold uppercase tracking-wider mb-4">
              <Compass size={14} />
              <span>Iconic Sri Lanka Highlights</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-navy leading-tight tracking-tight uppercase">
              OUR FEATURED <span className="text-purple">DESTINATIONS</span>
            </h2>
            <div className="w-16 h-1 bg-purple mt-4 rounded-full" />
            <p className="text-navy/70 max-w-2xl mt-5 leading-relaxed text-base sm:text-lg font-medium">
              Explore the timeless heritage citadels, misty tea highlands, and golden beaches of the pearl of the Indian Ocean.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                name: "Ella Highlands", 
                type: "Misty Tea Estates & Nine Arch Bridge", 
                img: "/destinations/ella.png",
                href: "/destinations"
              }, 
              { 
                name: "Galle Fort", 
                type: "UNESCO Living Colonial Heritage", 
                img: "/destinations/galle.png",
                href: "/destinations"
              }, 
              { 
                name: "Sigiriya Citadel", 
                type: "Ancient 5th Century Rock Wonder", 
                img: "/destinations/sigiriya.png",
                href: "/destinations"
              } 
            ].map((dst, i) => (
              <div 
                key={i}
                className="group relative h-[500px] sm:h-[560px] rounded-3xl overflow-hidden shadow-xl flex flex-col justify-end p-7 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
              >
                <Image 
                  src={dst.img} 
                  alt={`${dst.name} - ${dst.type}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="absolute inset-0 object-cover w-full h-full brightness-100 transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Lighter overlay so image is clearly visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
                {/* Top badge */}
                <div className="absolute top-5 left-5 bg-purple/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                  {dst.type}
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 drop-shadow-lg">
                    {dst.name}
                  </h3>
                  <Link 
                    href={dst.href}
                    className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold text-xs uppercase tracking-widest px-4 py-2.5 rounded-xl transition-all border border-white/30 hover:border-white/60"
                  >
                    <span>Explore Destination</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/destinations"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-navy hover:bg-purple text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <span>View All Sri Lanka Destinations</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Prominent, Dedicated Island Climate Section */}
      <IslandClimate />

      {/* Full-Width Immersive Mirissa Image Banner */}
      <section className="relative h-[460px] sm:h-[560px] lg:h-[640px] overflow-hidden">
        <Image
          src="/destinations/mirissa.png"
          alt="Mirissa Beach - Sri Lanka's Pristine Southern Coast"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-90"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1.5 bg-gold/20 border border-gold/40 text-gold text-xs font-bold uppercase tracking-widest rounded-full mb-5">
                South Coast Paradise
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-tight mb-4 drop-shadow-xl">
                WHERE THE OCEAN <br />
                <span className="text-gold italic font-serif font-normal">Meets Serenity</span>
              </h2>
              <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 font-medium">
                From Mirissa&#39;s blue whale watching to Galle&#39;s colonial ramparts — discover Sri Lanka&#39;s breathtaking southern coast with your private chauffeur.
              </p>
              <Link 
                href="/destinations"
                className="inline-flex items-center gap-2.5 bg-purple hover:bg-purple/90 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-purple/30 transition-all text-sm uppercase tracking-wide"
              >
                <span>Discover Destinations</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trip Planner Section */}
      <section className="py-20 lg:py-28 relative bg-slate-50 border-b border-gray-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center mb-14 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple/10 border border-purple/20 text-purple text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles size={14} />
              <span>Smart Itinerary Generator</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-navy leading-tight tracking-tight uppercase">
              AI TRIP <span className="text-purple">NAVIGATOR</span>
            </h2>
            <p className="mt-4 text-navy/70 text-base sm:text-lg font-medium">
              Tell us your preferred vacation length and interests to generate a tailored, route-optimized Sri Lankan journey in seconds.
            </p>
          </div>

          <TripPlanner />
        </div>
      </section>

      {/* Vehicle Showcase Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
            <div>
              <span className="text-purple font-display font-bold tracking-wider uppercase text-xs block mb-2">
                Private Transport Fleet
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-navy leading-tight tracking-tight uppercase">
                LUXURY FLEET <span className="text-purple italic font-serif font-normal">SELECTION</span>
              </h2>
            </div>
            <p className="text-navy/70 max-w-md text-sm sm:text-base leading-relaxed font-medium">
              Choose the ideal vehicle for your holiday. From fuel-efficient sedans to luxury executive vans and group minibuses with licensed chauffeurs.
            </p>
          </div>

          {/* Vehicle Cards Grid - Completely stable and clean */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {vehicles.map((v) => (
              <VehicleCard key={v.id} vehicle={v} />
            ))}
          </div>
          
          <div className="mt-14 flex justify-center">
            <Link 
              href="/vehicles"
              className="bg-navy hover:bg-purple text-white px-8 py-4 rounded-xl font-bold shadow-md transition-colors text-xs tracking-wider uppercase flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Complete Fleet &amp; Specifications</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>


      {/* Review System Section - TripAdvisor Official Integration */}
      <TripAdvisorReviews />

      {/* Blog System Preview */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
            <div>
              <span className="text-purple font-display font-bold tracking-wider uppercase text-xs block mb-2">
                Travel Journal
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black text-navy tracking-tight uppercase">
                LATEST FROM <span className="text-purple">OUR JOURNAL</span>
              </h2>
            </div>
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple hover:text-navy transition-colors"
            >
              <span>Read All Articles</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { 
                title: "Top 10 Hidden Waterfalls in Ella", 
                category: "Travel Tips", 
                date: "April 12, 2026", 
                img: "/blog/waterfall.png", 
                slug: "top-10-waterfalls" 
              },
              { 
                title: "Whale Watching in Mirissa: A Complete Guide", 
                category: "Wildlife", 
                date: "January 15, 2026", 
                img: "/blog/whale.png", 
                slug: "whale-watching" 
              },
              { 
                title: "The Cultural Triangle: Visiting Ancient Cities", 
                category: "Culture", 
                date: "July 20, 2026", 
                img: "/blog/kandy.png", 
                slug: "kandy-perahera" 
              }
            ].map((post, i) => (
              <Link 
                key={i} 
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-72 w-full bg-slate-100 overflow-hidden">
                    <Image 
                      src={post.img} 
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3.5 left-3.5 bg-navy/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-navy group-hover:text-purple transition-colors mb-2 leading-snug">
                      {post.title}
                    </h3>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs text-navy/50 font-medium">
                  <span>{post.date}</span>
                  <div className="flex items-center gap-1 text-purple font-bold">
                    <span>Read Article</span>
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Schema Markup for Google Search Rich Snippets */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqsData.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Frequently Asked Questions */}
      <FAQSection />

      {/* Full-Width Kandy CTA Banner */}
      <section className="relative h-[400px] sm:h-[480px] overflow-hidden">
        <Image
          src="/destinations/kandy.png"
          alt="Kandy Temple of the Tooth Relic - Sri Lanka Cultural Heritage"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <span className="inline-block px-4 py-1.5 bg-gold/25 border border-gold/50 text-gold text-xs font-bold uppercase tracking-widest rounded-full mb-5">
              Book Your Journey
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-tight mb-5 drop-shadow-xl">
              READY TO EXPLORE <br />
              <span className="text-gold italic font-serif font-normal">Sri Lanka?</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto font-medium">
              Our expert chauffeurs are ready to guide you through the island&#39;s most iconic landscapes. Book your private tour today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/book"
                className="inline-flex items-center gap-2.5 bg-purple hover:bg-purple/90 text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-purple/40 transition-all text-sm uppercase tracking-wide"
              >
                <span>Book Now</span>
                <ArrowRight size={16} />
              </Link>
              <Link 
                href="/planner"
                className="inline-flex items-center gap-2.5 bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-wide"
              >
                <span>Plan My Trip</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Global Footer */}
      <Footer />
      
      {/* Clean, Non-obstructive WhatsApp Floating Button */}
      <WhatsAppFloating />
    </main>
  );
}
