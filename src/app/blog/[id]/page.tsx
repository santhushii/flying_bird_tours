import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, Compass } from "lucide-react";
import NextLink from "next/link";

const blogPostsData: Record<string, { title: string; category: string; date: string; readTime: string; img: string; content: string; tip: string }> = {
  "top-10-waterfalls": {
    title: "Top 10 Hidden Waterfalls in Ella",
    category: "Travel Tips",
    date: "April 12, 2026",
    readTime: "5 Min Read",
    img: "/blog/waterfall.png",
    content: "From the majestic Ravana Falls roaring by the Ella-Wellawaya highway to secluded cascades nestled deep inside emerald Ceylon tea plantations, the Uva province is a paradise for waterfall seekers. Traveling with a private chauffeur gives you the flexibility to stop, take photos, and bathe in fresh natural mountain springs without the rush of public transit.",
    tip: "Visit waterfalls before 11:00 AM for the softest sunlight and fewer crowds. Wear sturdy walking shoes as mist-covered rocks can be slippery."
  },
  "whale-watching": {
    title: "Whale Watching in Mirissa: A Complete Guide",
    category: "Wildlife",
    date: "January 15, 2026",
    readTime: "6 Min Read",
    img: "/blog/whale.png",
    content: "The deep continental shelf off Mirissa and Dondra Head is one of the closest coastal migration channels for blue whales anywhere on Earth. During the peak season from December to April, sightings of blue whales, sperm whales, and super-pods of spinner dolphins are exceptionally high.",
    tip: "Boats depart early around 6:30 AM from Mirissa Harbor. Have our private driver pick you up right from your hotel so you get prime seating on the upper observation deck."
  },
  "kandy-perahera": {
    title: "The Cultural Triangle: Visiting Ancient Cities",
    category: "Culture",
    date: "July 20, 2026",
    readTime: "7 Min Read",
    img: "/blog/kandy.png",
    content: "Sri Lanka's Cultural Triangle connects Anuradhapura, Polonnaruwa, Sigiriya, and the hill capital of Kandy. Here, ancient hydraulic civilization, sacred Buddhist temples, and royal rock citadels have thrived for more than two millennia.",
    tip: "When visiting sacred temples, dress with shoulders and knees covered, and remove footwear before entering the temple precincts."
  },
  "train-journeys": {
    title: "Scenic Train Journeys: Tips for Booking",
    category: "Adventure",
    date: "March 5, 2026",
    readTime: "4 Min Read",
    img: "/destinations/kandy.png",
    content: "The iconic blue train ride winding from Kandy through Nuwara Eliya to Ella is celebrated as one of the world's most scenic rail journeys. Towering eucalyptus groves, misty tea valleys, and viaduct bridges open up outside your window.",
    tip: "Let Flying Bird Tours coordinate your train ticket reservation in advance. Our chauffeur drops you off at the departure station and waits for you with your luggage at the arrival station."
  }
};

export async function generateStaticParams() {
  return [
    { id: "top-10-waterfalls" },
    { id: "whale-watching" },
    { id: "kandy-perahera" },
    { id: "train-journeys" }
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = blogPostsData[id];

  if (!post) {
    return {
      title: "Sri Lanka Travel Article | Flying Bird Tours",
      description: "Read travel stories and advice from Sri Lanka."
    };
  }

  return {
    title: `${post.title} | Sri Lanka Travel Journal`,
    description: post.content.slice(0, 160),
    alternates: {
      canonical: `/blog/${id}`,
    },
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 160),
      url: `https://flyingbirdtours.com/blog/${id}`,
      images: [{ url: post.img }],
    }
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const post = blogPostsData[id] || {
    title: id.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    category: "Travel Guide",
    date: "April 20, 2026",
    readTime: "5 Min Read",
    img: "/blog/waterfall.png",
    content: "Experience the magical wonder of Sri Lanka with Flying Bird Tours. Discover untouched landscapes, vibrant wildlife, and warm local hospitality.",
    tip: "Plan your daily route with an experienced local chauffeur for the safest and most enjoyable experience."
  };

  return (
    <main className="min-h-screen bg-white text-navy font-sans">
      <Navbar />
      
      <article className="pt-32 sm:pt-40 pb-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <NextLink 
            href="/blog" 
            className="inline-flex items-center gap-2 text-purple font-bold uppercase tracking-wider text-xs mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </NextLink>

          <div className="mb-10">
            <span className="bg-purple/10 text-purple text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-black text-navy leading-[1.08] tracking-tight uppercase mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-navy/50 font-medium">
              <span className="flex items-center gap-1.5"><Calendar size={14} className="text-purple" /> {post.date}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="flex items-center gap-1.5"><Clock size={14} className="text-purple" /> {post.readTime}</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="text-navy/70 font-semibold">By Flying Bird Tours Editorial</span>
            </div>
          </div>

          <div className="relative h-[320px] sm:h-[480px] rounded-3xl overflow-hidden mb-12 shadow-lg bg-slate-100 border border-gray-200">
            <Image 
              src={post.img} 
              alt={`${post.title} - Sri Lanka Travel Journal`}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="prose prose-lg prose-slate max-w-none text-navy/80 leading-relaxed font-normal">
            <p className="text-lg sm:text-xl text-navy/90 leading-relaxed mb-6 font-medium">
              {post.content}
            </p>
            <p className="text-base sm:text-lg text-navy/75 leading-relaxed mb-8">
              Sri Lanka, celebrated worldwide as the Pearl of the Indian Ocean, combines incredible biodiversity, tropical warmth, and deep historical warmth. Exploring with a dedicated private chauffeur ensures you travel without stress, navigating scenic routes and pausing at viewpoints at your own pace.
            </p>

            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-gray-200 my-8">
              <div className="flex items-center gap-2 text-purple font-bold text-xs uppercase tracking-wider mb-2">
                <Compass size={16} />
                <span>Expert Travel Recommendation</span>
              </div>
              <p className="text-navy/80 font-medium text-sm sm:text-base leading-relaxed italic">
                &ldquo;{post.tip}&rdquo;
              </p>
            </div>
          </div>

          {/* Bottom Article Actions */}
          <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 mt-12">
            <NextLink 
              href="/planner" 
              className="w-full sm:w-auto bg-purple hover:bg-purple/90 text-white px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-colors shadow-sm"
            >
              Plan A Trip To This Destination
            </NextLink>
            <NextLink 
              href="/vehicles" 
              className="w-full sm:w-auto bg-navy hover:bg-purple text-white px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-colors shadow-sm"
            >
              Explore Our Fleet
            </NextLink>
          </div>
        </div>
      </article>

      <Footer />
      <WhatsAppFloating />
    </main>
  );
}
