"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall, MessageCircle } from "lucide-react";
import Link from "next/link";
import { faqsData } from "@/data/faqs";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-200" id="faq">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple/10 border border-purple/20 text-purple text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle size={14} />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-navy uppercase tracking-tight">
            FREQUENTLY ASKED <span className="text-purple">QUESTIONS</span>
          </h2>
          <div className="w-16 h-1 bg-purple mx-auto mt-4 rounded-full" />
          <p className="text-navy/70 text-base sm:text-lg mt-5 font-medium">
            Everything you need to know about planning your private tour, chauffeur hire, and airport transfers in Sri Lanka.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-navy text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full bg-white border border-gray-200 shrink-0 text-navy transition-transform duration-300 ${isOpen ? "rotate-180 bg-purple text-white border-purple" : ""}`}>
                    <ChevronDown size={16} />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-navy/75 text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-white">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Banner */}
        <div className="mt-12 max-w-3xl mx-auto bg-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl text-white mb-1">Have a specific question or custom route?</h3>
            <p className="text-white/70 text-xs sm:text-sm">Speak directly with our island travel planners via WhatsApp or phone call.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/94760448292"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
            >
              <MessageCircle size={15} />
              <span>WhatsApp Chat</span>
            </a>
            <Link
              href="/book"
              className="px-5 py-3 rounded-xl bg-purple hover:bg-purple/90 text-white font-bold text-xs flex items-center gap-2 transition-colors shadow-sm"
            >
              <PhoneCall size={15} />
              <span>Book Online</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
