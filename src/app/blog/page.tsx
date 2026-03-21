import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function BlogPage() {
  const posts = [
    { id: "waterfalls", title: "Top 10 Hidden Waterfalls in Ella", category: "Travel Tips", date: "April 12, 2026", img: "/destinations/ella.png" }, 
    { id: "whale-watching", title: "Whale Watching in Mirissa: A Complete Guide", category: "Wildlife", date: "Jan 15, 2026", img: "/destinations/mirissa.png" }, 
    { id: "ancient-cities", title: "The Cultural Triangle: Visiting Ancient Cities", category: "Culture", date: "July 20, 2026", img: "/destinations/sigiriya.png" }, 
    { id: "train-journeys", title: "Scenic Train Journeys: Tips for Booking", category: "Adventure", date: "March 5, 2026", img: "/destinations/kandy.png" } 
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-48 pb-32 px-6 bg-ivory/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-32">
             <span className="text-purple font-display font-extrabold tracking-[0.4em] block mb-6 text-xs uppercase">Travel Journal</span>
             <h1 className="text-6xl md:text-9xl font-display font-black text-navy leading-none tracking-tighter uppercase">INSIGHTS FROM <br /><span className="text-purple italic">PARADISE</span></h1>
             <p className="text-xl text-navy/50 leading-relaxed font-medium max-w-2xl mt-12">
               Discover the hidden secrets and local tips for your next Sri Lankan adventure. Our travel experts share their best stories.
             </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {posts.map((post, i) => (
              <div key={i} className="group cursor-pointer">
                 <div className="relative h-[450px] rounded-[4rem] overflow-hidden mb-12 shadow-2xl">
                    <Image 
                      src={post.img} 
                      alt={post.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading={i < 2 ? "eager" : "lazy"}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 brightness-90" 
                    />
                    <div className="absolute top-10 left-10 bg-purple text-white text-[10px] font-extrabold px-8 py-3 rounded-full uppercase tracking-widest shadow-2xl">
                      {post.category}
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-8 text-[11px] text-navy/40 font-bold uppercase tracking-widest mb-6">
                    <span className="flex items-center gap-2"><Calendar size={14} className="text-purple" /> {post.date}</span>
                    <span className="w-1.5 h-1.5 bg-purple/20 rounded-full" />
                    <span className="flex items-center gap-2"><Clock size={14} className="text-purple" /> 5 MIN READ</span>
                 </div>
                 
                 <h2 className="text-4xl font-display font-bold group-hover:text-purple transition-colors mb-8 leading-tight max-w-2xl text-navy">{post.title}</h2>
                 
                 <Link href={`/blog/${post.id}`} className="flex items-center gap-4 text-purple font-bold text-sm tracking-[0.2em] uppercase group-hover:gap-6 transition-all">
                    READ STORY
                    <div className="w-10 h-10 rounded-full border border-purple/20 flex items-center justify-center group-hover:bg-purple group-hover:text-white transition-all group-hover:border-purple">
                       <ArrowRight size={18} />
                    </div>
                 </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-24 bg-ivory text-navy/20 text-center text-[10px] tracking-[0.5em] uppercase font-bold border-t border-navy/5">
         Flying Bird Tours Sri Lanka &bull; All Rights Reserved &copy; 2026
      </footer>
    </main>
  );
}
