import { Navbar } from "@/components/layout/Navbar";
import Image from "next/image";
import { Link, Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import NextLink from "next/link";

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Mock data for individual posts
  const post = {
    title: id.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    category: "Travel Guide",
    date: "April 20, 2026",
    img: "https://images.unsplash.com/photo-1559372122-1a97b2d22c22?auto=format&fit=crop&q=80&w=2000",
    content: "Full story content for " + id + " will be added soon. Stay tuned for a detailed experience report from the heart of Sri Lanka."
  };

  return (
    <main className="min-h-screen bg-white text-navy font-sans">
      <Navbar />
      
      <article className="pt-40 pb-32">
        <div className="container mx-auto px-6 max-w-4xl">
           <NextLink href="/blog" className="inline-flex items-center gap-2 text-purple font-bold uppercase tracking-widest text-xs mb-12 hover:gap-4 transition-all">
             <ArrowLeft size={16} /> Back to Journal
           </NextLink>

           <div className="mb-16">
              <span className="bg-purple/10 text-purple text-[10px] font-extrabold px-8 py-3 rounded-full uppercase tracking-widest mb-8 inline-block">
                {post.category}
              </span>
              <h1 className="text-5xl md:text-8xl font-display font-black text-navy leading-[0.9] tracking-tighter uppercase mb-10">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-8 text-[11px] text-navy/40 font-bold uppercase tracking-widest">
                 <span className="flex items-center gap-2"><Calendar size={14} className="text-purple" /> {post.date}</span>
                 <span className="w-1.5 h-1.5 bg-purple/20 rounded-full" />
                 <span className="flex items-center gap-2"><Clock size={14} className="text-purple" /> 12 MIN READ</span>
                 <button className="ml-auto flex items-center gap-2 text-purple hover:text-navy transition-colors">
                    <Share2 size={16} /> SHARE
                 </button>
              </div>
           </div>

           <div className="relative h-[600px] rounded-[4rem] overflow-hidden mb-20 shadow-3xl">
              <Image 
                src={post.img} 
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
           </div>

           <div className="prose prose-2xl prose-navy max-w-none">
              <p className="text-2xl md:text-3xl text-navy/70 leading-relaxed font-medium mb-10 first-letter:text-7xl first-letter:font-black first-letter:text-purple first-letter:mr-3 first-letter:float-left">
                {post.content}
              </p>
              <p className="text-xl md:text-2xl text-navy/60 leading-relaxed mb-10">
                Sri Lanka, often referred to as the Pearl of the Indian Ocean, offers a diverse range of experiences from misty mountains to golden beaches. Our journey through {post.title} was nothing short of magical.
              </p>
              <div className="bg-ivory p-12 rounded-[3rem] border border-purple/5 my-20">
                 <h3 className="text-3xl font-display font-bold text-navy mb-6">Expert Travel Tip</h3>
                 <p className="text-navy/60 font-medium text-lg leading-relaxed italic">
                    "The best time to visit this area is between December and April when the weather is at its clearest and the sunlight hits the landscapes perfectly for photography."
                 </p>
              </div>
           </div>
        </div>
      </article>

      <footer className="py-24 bg-ivory text-navy/20 text-center text-[10px] tracking-[0.5em] uppercase font-bold border-t border-navy/5">
         Flying Bird Tours Sri Lanka &bull; All Rights Reserved &copy; 2026
      </footer>
    </main>
  );
}
