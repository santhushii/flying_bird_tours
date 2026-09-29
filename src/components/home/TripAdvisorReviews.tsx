"use client";

import Image from "next/image";
import { ExternalLink, MessageSquarePlus, Award, Heart } from "lucide-react";

export const TRIPADVISOR_URL = "https://www.tripadvisor.com/Attraction_Review-g293962-d15147226-Reviews-Flying_Bird_Tours-Colombo_Western_Province.html";
export const PHONE_NUMBER = "+94760448292";
export const PHONE_DISPLAY = "+94 76 044 8292";
export const LINKEDIN_URL = "https://www.linkedin.com/in/flying-bird-tours-8597261a7/";

const reviewsData = [
  {
    id: 1,
    author: "Elena & Marco R.",
    location: "Milan, Italy",
    date: "February 2026",
    title: "Unforgettable 10-Day Private Tour of Sri Lanka",
    review: "Flying Bird Tours exceeded all our expectations! From picking us up at Colombo Airport to driving us safely through Sigiriya, Kandy, Ella, and Mirissa. Immaculate vehicle, extremely polite chauffeur, and great local knowledge.",
    score: "5.0 Rating",
    badge: "Verified Traveler",
    photo: "/destinations/sigiriya.png"
  },
  {
    id: 2,
    author: "James & Sarah Watson",
    location: "London, United Kingdom",
    date: "January 2026",
    title: "First Class Chauffeur & Flawless Service",
    review: "We booked a private luxury van for our family of 6. The vehicle was brand new, super comfortable with AC, and our driver was always punctual and courteous. Flying Bird Tours is by far the best travel company in Sri Lanka!",
    score: "5.0 Rating",
    badge: "Family Vacation",
    photo: "/destinations/ella.png"
  },
  {
    id: 3,
    author: "Dr. Hans Weber",
    location: "Zurich, Switzerland",
    date: "December 2025",
    title: "Highly Professional & Reliable Travel Partner",
    review: "Top tier hospitality! Flying Bird Tours arranged our coastal trip to Galle and Yala Safari seamlessly. Quick communication on WhatsApp (+94 76 044 8292) and genuine 5-star service. Highly recommend!",
    score: "5.0 Rating",
    badge: "Solo Traveler",
    photo: "/destinations/galle.png"
  }
];

const travelerPhotos = [
  { title: "Sigiriya Lion Rock Fortress", location: "Cultural Triangle", img: "/destinations/sigiriya.png" },
  { title: "Nine Arch Bridge & Tea Estates", location: "Ella Highlands", img: "/destinations/ella.png" },
  { title: "Dutch Fort Heritage", location: "Galle Southern Coast", img: "/destinations/galle.png" },
  { title: "Mirissa Ocean & Wildlife", location: "Southern Province", img: "/blog/whale.png" },
];

export function TripAdvisorReviews() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 bg-[#00AA6C]/10 border border-[#00AA6C]/25 text-[#00AA6C] px-4 py-1.5 rounded-full font-bold text-xs tracking-wider uppercase mb-5">
            <Award size={15} />
            <span>Official TripAdvisor Excellence Partner</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-display font-black text-navy uppercase tracking-tight max-w-4xl">
            RATED 5.0 EXCELLENCE ON <span className="text-[#00AA6C]">TRIPADVISOR</span>
          </h2>

          <p className="mt-4 text-navy/70 text-base sm:text-lg max-w-2xl font-medium">
            Read real guest reviews from travelers around the globe who explored Sri Lanka with Flying Bird Tours.
          </p>

          {/* TripAdvisor Score Summary Box */}
          <div className="mt-8 bg-slate-50 border border-gray-200 p-6 sm:p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl w-full shadow-md">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-[#00AA6C] text-white rounded-2xl flex items-center justify-center font-black text-2xl shadow-sm">
                5.0
              </div>
              <div className="text-left">
                <div className="text-navy font-bold text-base sm:text-lg">Excellent • 180+ Verified Reviews</div>
                <div className="text-xs text-navy/50 font-medium">Flying Bird Tours — Colombo &amp; Island-Wide Private Chauffeur</div>
              </div>
            </div>

            <a
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#00AA6C] hover:bg-[#008c58] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
            >
              <span>View TripAdvisor Page</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {reviewsData.map((rev) => (
            <div
              key={rev.id}
              className="bg-white border border-gray-200 rounded-3xl p-7 shadow-md hover:shadow-xl hover:border-[#00AA6C]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#00AA6C] px-2.5 py-1 rounded-md bg-[#00AA6C]/10">
                    {rev.score}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                    {rev.badge}
                  </span>
                </div>

                <h3 className="font-bold text-navy text-base sm:text-lg mb-3 leading-snug">
                  &ldquo;{rev.title}&rdquo;
                </h3>

                <p className="text-navy/70 text-xs sm:text-sm leading-relaxed mb-6 italic">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-navy">{rev.author}</div>
                  <div className="text-navy/50 text-[11px]">{rev.location} • {rev.date}</div>
                </div>
                <a
                  href={TRIPADVISOR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00AA6C] font-bold flex items-center gap-1 hover:underline text-[11px]"
                >
                  <span>Verified</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Review Invitation Box */}
        <div className="bg-navy text-white rounded-3xl p-8 sm:p-12 mb-16 lg:mb-20 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#00AA6C]/15 blur-3xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest mb-3">
                <Heart size={15} className="text-gold" />
                <span>Guest Testimonials</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black tracking-tight">
                Traveled with Flying Bird Tours recently?
              </h3>
              <p className="text-white/70 text-sm sm:text-base max-w-xl mt-2 font-medium">
                Your feedback inspires fellow travelers! Share your experience directly on our official TripAdvisor page.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <a
                href={TRIPADVISOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00AA6C] hover:bg-[#008C58] text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
              >
                <MessageSquarePlus size={16} />
                <span>Write a Review</span>
              </a>

              <a
                href="https://wa.me/94760448292"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Direct WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Traveler Photo Moments */}
        <div className="text-center">
          <span className="text-purple font-display font-bold tracking-[0.25em] uppercase text-xs">Authentic Moments</span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-navy uppercase tracking-tight mt-1 mb-10">
            TRAVELER PHOTO HIGHLIGHTS
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {travelerPhotos.map((photo, i) => (
              <a
                key={i}
                href={TRIPADVISOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md border border-gray-200 flex flex-col justify-end p-5 cursor-pointer"
              >
                <Image
                  src={photo.img}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="relative z-10 text-left">
                  <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-1 block">{photo.location}</span>
                  <div className="text-white font-bold text-sm sm:text-base leading-snug flex items-center justify-between">
                    <span>{photo.title}</span>
                    <ExternalLink size={13} className="shrink-0 opacity-70" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
