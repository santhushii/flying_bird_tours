"use client";

import { useState } from "react";
import { X, MessageCircle, Send, Phone } from "lucide-react";

export function WhatsAppFloating() {
  const [expanded, setExpanded] = useState(false);

  const phoneRaw = "+94760448292";
  const defaultWhatsAppUrl = "https://wa.me/94760448292?text=Hello%20Flying%20Bird%20Tours!%20I%20would%20like%20to%20inquire%20about%20a%20private%20tour%20/%20chauffeur%20service.";

  const quickInquiries = [
    {
      label: "Custom Tour Itinerary",
      message: "Hello Flying Bird Tours! I would like to plan a custom Sri Lanka tour itinerary."
    },
    {
      label: "Luxury Fleet Quote",
      message: "Hello Flying Bird Tours! I need a quote for luxury vehicle chauffeur transport."
    },
    {
      label: "Airport Transfer Pickup",
      message: "Hello Flying Bird Tours! I would like to book an airport pickup / drop-off transfer."
    },
    {
      label: "General Inquiry",
      message: "Hello Flying Bird Tours! I have a general inquiry about traveling in Sri Lanka."
    }
  ];

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Sleek, Non-intrusive Quick Inquiry Modal */}
      {expanded && (
        <div className="bg-navy text-white p-5 rounded-3xl shadow-2xl border border-white/15 max-w-[calc(100vw-2.5rem)] w-[320px] relative overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-pulse" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">WhatsApp Support</span>
            </div>

            <button 
              onClick={() => setExpanded(false)}
              className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Close dialog"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-white/70 text-xs font-medium mb-3">
            Choose a quick topic to connect with our travel team:
          </p>

          {/* Quick Topic Buttons */}
          <div className="space-y-2 mb-4">
            {quickInquiries.map((item, index) => {
              const url = `https://wa.me/94760448292?text=${encodeURIComponent(item.message)}`;
              return (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/40 text-white text-xs font-semibold transition-all group"
                >
                  <span className="group-hover:text-white transition-colors">{item.label}</span>
                  <Send size={13} className="text-[#25D366] shrink-0" />
                </a>
              );
            })}
          </div>

          {/* Action Links */}
          <div className="space-y-2 pt-2 border-t border-white/10">
            <a
              href={defaultWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd59] text-white p-2.5 rounded-xl font-bold text-xs transition-colors shadow-md w-full"
            >
              <MessageCircle size={15} />
              <span>Start Direct Chat</span>
            </a>

            <a
              href={`tel:${phoneRaw}`}
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white/90 border border-white/15 p-2 rounded-xl font-semibold text-xs transition-colors w-full"
            >
              <Phone size={13} />
              <span>Call: +94 76 044 8292</span>
            </a>
          </div>
        </div>
      )}

      {/* Clean, Minimal Circular WhatsApp Floating Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="bg-[#25D366] hover:bg-[#1ebd59] text-white w-14 h-14 rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95 flex items-center justify-center border-2 border-white/40 cursor-pointer"
        aria-label="Connect on WhatsApp"
        title="Chat on WhatsApp"
      >
        {expanded ? (
          <X size={24} />
        ) : (
          <MessageCircle size={28} className="fill-white text-[#25D366]" />
        )}
      </button>
    </div>
  );
}
