import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sri Lanka Travel Journal & Insider Tour Guides",
  description: "Read expert Sri Lanka travel tips, scenic train advice, whale watching secrets, and cultural heritage stories from Flying Bird Tours.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Sri Lanka Travel Insights | Flying Bird Tours Journal",
    description: "Authentic travel guides, route tips, and local recommendations for your Sri Lanka holiday.",
    url: "https://flyingbirdtours.com/blog",
  }
};

const posts = [
  { 
    id: "top-10-waterfalls", 
    title: "Top 10 Hidden Waterfalls in Ella", 
    category: "Travel Tips", 
    date: "April 12, 2026", 
    readTime: "5 Min Read",
    img: "/blog/waterfall.png",
    excerpt: "From the majestic Ravana Falls to secluded cascades nestled in lush tea plantations, discover Ella's most breathtaking falls."
  }, 
  { 
    id: "whale-watching", 
    title: "Whale Watching in Mirissa: A Complete Guide", 
    category: "Wildlife", 
    date: "January 15, 2026", 
    readTime: "6 Min Read",
    img: "/blog/whale.png",
    excerpt: "Everything you need to know about spotting blue whales, sperm whales, and dolphins off the southern coast of Sri Lanka."
  }, 
  { 
    id: "kandy-perahera", 
    title: "The Cultural Triangle: Visiting Ancient Cities", 
    category: "Culture", 
    date: "July 20, 2026", 
    readTime: "7 Min Read",
    img: "/blog/kandy.png",
    excerpt: "Step into centuries of heritage across Sigiriya, Kandy, and Polonnaruwa with our cultural route guide."
  }, 
  { 
    id: "train-journeys", 
    title: "Scenic Train Journeys: Tips for Booking", 
    category: "Adventure", 
    date: "March 5, 2026", 
    readTime: "4 Min Read",
    img: "/destinations/kandy.png",
    excerpt: "Insider advice for securing observation class tickets on the iconic blue train through the misty hill country."
  } 
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-36 lg:pt-44 pb-16 bg-slate-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-purple font-display font-bold uppercase tracking-wider text-xs block mb-3">
              Travel Journal &amp; Guides
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-black text-navy mb-6 tracking-tight uppercase">
              INSIGHTS FROM <span className="text-purple italic font-serif font-normal">PARADISE</span>
            </h1>
            <p className="text-base sm:text-lg text-navy/70 leading-relaxed font-medium">
              Discover local secrets, hidden viewpoints, and practical advice curated by our licensed travel team to help you plan an unforgettable Sri Lankan journey.
            </p>
          </div>
        </div>
      </section>
      
      {/* Blog Cards Grid */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {posts.map((post, i) => (
              <div 
                key={i} 
                className="group bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 sm:h-72 w-full bg-slate-100 overflow-hidden">
                    <Image 
                      src={post.img} 
                      alt={`${post.title} - Sri Lanka Travel Guide`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={i < 2}
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute top-4 left-4 bg-navy/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-7">
                    <div className="flex items-center gap-4 text-xs text-navy/50 font-medium mb-3">
                      <span className="flex items-center gap-1.5"><Calendar size={13} className="text-purple" /> {post.date}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full" />
                      <span className="flex items-center gap-1.5"><Clock size={13} className="text-purple" /> {post.readTime}</span>
                    </div>
                    
                    <h2 className="text-2xl font-display font-bold text-navy group-hover:text-purple transition-colors mb-3 leading-snug">
                      {post.title}
                    </h2>

                    <p className="text-navy/70 text-sm leading-relaxed font-medium">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-2">
                  <Link 
                    href={`/blog/${post.id}`} 
                    className="inline-flex items-center gap-2 text-purple font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
