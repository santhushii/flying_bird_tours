"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Palmtree, Mountain, Landmark, RefreshCw, ChevronRight, MessageCircle } from "lucide-react";

type Interest = "Beaches" | "Wildlife" | "Culture" | "Adventure" | "History";

const itineraryData: Record<string, string[]> = {
  "Short & Sweet (3-5 Days)": [
    "Day 1: Arrival & Colombo City Tour",
    "Day 2: Scenic Train to Kandy & Temple of the Tooth",
    "Day 3: Tea Estates in Ella & Nine Arch Bridge",
    "Day 4: Mirissa Beach & Whale Watching",
    "Day 5: Galle Fort & Departure"
  ],
  "Heritage Explorer (7-14 Days)": [
    "Day 1: Arrival in Negombo",
    "Day 2: Sigiriya Rock Fortress",
    "Day 3: Polonnaruwa Ancient City",
    "Day 4: Anuradhapura Ruins",
    "Day 5: Kandy Religious Heritage",
    "Day 6-7: Ella Highlands & Tea Trails",
    "Day 8-9: Yala Safari & Wildlife",
    "Day 10: Departure from Galle"
  ],
  "Grand Tour (14+ Days)": [
    "Day 1-2: Colombo & Negombo",
    "Day 3-4: Sigiriya & Dambulla Cave Temple",
    "Day 5-6: Polonnaruwa & Anuradhapura",
    "Day 7-8: Kandy & Temple of the Tooth",
    "Day 9-10: Tea Trails & Ella Highlands",
    "Day 11-12: Yala National Park Safari",
    "Day 13-14: Mirissa Whale Watching",
    "Day 15+: Galle Fort & Unawatuna Beach"
  ],
};

const PHONE = "94760448292";

function makeWhatsAppUrl(itinerary: string[], duration: string) {
  const lines = itinerary.join(" | ");
  const msg = `Hello Flying Bird Tours! I used your AI Trip Navigator and would like to book this ${duration} Sri Lanka itinerary:\n${lines}\n\nPlease share pricing and availability.`;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`;
}

export function TripPlanner() {
  const [step, setStep] = useState(1);
  const [duration, setDuration] = useState("3-5 Days");
  const [interests, setInterests] = useState<Interest[]>([]);
  const [result, setResult] = useState<string[] | null>(null);
  const [loading, setLoading] = useState(false);

  const toggleInterest = (interest: Interest) => {
    setInterests(prev =>
      prev.includes(interest)
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    );
  };

  const generateTrip = () => {
    setLoading(true);
    setTimeout(() => {
      const key =
        duration === "3-5 Days"
          ? "Short & Sweet (3-5 Days)"
          : duration === "7-14 Days"
          ? "Heritage Explorer (7-14 Days)"
          : "Grand Tour (14+ Days)";
      setResult(itineraryData[key]);
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  const reset = () => { setInterests([]); setResult(null); setStep(1); };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-xl overflow-hidden">

      {/* Progress Bar */}
      <div className="flex border-b border-gray-100">
        {[1, 2, 3].map(s => (
          <div
            key={s}
            className={`flex-1 h-1.5 transition-colors duration-500 ${
              step >= s ? "bg-purple" : "bg-gray-100"
            }`}
          />
        ))}
      </div>

      {/* Step Label */}
      <div className="px-5 sm:px-8 pt-5 pb-3 flex items-center justify-between">
        <span className="text-[10px] font-black uppercase tracking-[0.25em] text-purple">
          Step {step} of 3
        </span>
        {step > 1 && (
          <button
            onClick={reset}
            className="text-[10px] font-bold uppercase tracking-widest text-navy/40 hover:text-purple transition-colors flex items-center gap-1.5"
          >
            <RefreshCw size={11} /> Start Over
          </button>
        )}
      </div>

      {/* Content Area */}
      <div className="px-5 sm:px-8 pb-8 min-h-[380px] sm:min-h-[420px] flex flex-col justify-center">
        <AnimatePresence mode="wait">

          {/* ── Step 1: Duration ── */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="text-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Compass className="w-8 h-8 sm:w-10 sm:h-10 text-purple" style={{ animation: "spin 8s linear infinite" }} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-navy mb-1.5 tracking-tight">
                How long are you staying?
              </h3>
              <p className="text-navy/45 mb-8 text-xs font-bold uppercase tracking-[0.25em]">
                Choose your trip duration
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto">
                {["3-5 Days", "7-14 Days", "14+ Days"].map(d => (
                  <button
                    key={d}
                    onClick={() => { setDuration(d); setStep(2); }}
                    className="group w-full px-5 py-5 rounded-2xl border-2 border-gray-200 bg-white hover:border-purple hover:shadow-lg hover:shadow-purple/10 transition-all font-bold text-lg text-navy hover:text-purple cursor-pointer"
                  >
                    {d}
                    <div className="text-[10px] font-medium text-navy/40 group-hover:text-purple/60 mt-0.5 tracking-wide">
                      {d === "3-5 Days" ? "Quick escape" : d === "7-14 Days" ? "Classic tour" : "Grand journey"}
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── Step 2: Interests ── */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25 }}
              className="text-center"
            >
              <h3 className="text-2xl sm:text-3xl font-display font-black text-navy mb-1.5 tracking-tight">
                What interests you?
              </h3>
              <p className="text-navy/45 mb-7 text-xs font-bold uppercase tracking-[0.25em]">
                Select multiple categories
              </p>

              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-8 max-w-xl mx-auto sm:max-w-none">
                {[
                  { id: "Beaches", Icon: Palmtree },
                  { id: "Wildlife", Icon: Compass },
                  { id: "Culture", Icon: Landmark },
                  { id: "Adventure", Icon: Mountain },
                  { id: "History", Icon: RefreshCw },
                ].map(({ id, Icon }) => (
                  <button
                    key={id}
                    onClick={() => toggleInterest(id as Interest)}
                    className={`flex flex-col items-center gap-3 py-5 px-2 rounded-2xl border-2 transition-all cursor-pointer ${
                      interests.includes(id as Interest)
                        ? "bg-purple border-purple shadow-lg shadow-purple/25 text-white scale-[1.04]"
                        : "bg-white border-gray-200 text-navy/50 hover:border-purple/50 hover:text-purple hover:shadow-md"
                    }`}
                  >
                    <Icon size={26} />
                    <span className="font-bold uppercase tracking-widest text-[9px] sm:text-[10px] leading-none">{id}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={generateTrip}
                disabled={interests.length === 0 || loading}
                className="w-full sm:w-auto bg-navy text-white px-10 py-4 rounded-2xl font-bold text-sm hover:bg-purple disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center mx-auto gap-3 shadow-lg cursor-pointer"
              >
                {loading ? (
                  <><RefreshCw className="animate-spin" size={16} /> Generating...</>
                ) : (
                  <>GENERATE ITINERARY <ChevronRight size={18} /></>
                )}
              </button>
            </motion.div>
          )}

          {/* ── Step 3: Result ── */}
          {step === 3 && result && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-6 pb-5 border-b border-gray-100">
                <h3 className="text-2xl sm:text-3xl font-display font-black text-navy tracking-tight">Your Perfect Trip</h3>
                <p className="text-purple font-extrabold text-[10px] tracking-[0.3em] uppercase mt-1">Sri Lanka &bull; {duration} Voyage</p>
              </div>

              <div className="space-y-4 mb-8 pl-1">
                {result.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex gap-4 group"
                  >
                    <div className="flex flex-col items-center pt-1.5 shrink-0">
                      <div className="w-3.5 h-3.5 rounded-full bg-purple border-2 border-white shadow ring-2 ring-purple/20 group-hover:scale-110 transition-transform" />
                      {i !== result.length - 1 && <div className="w-px flex-1 bg-gray-200 mt-1.5 min-h-[28px]" />}
                    </div>
                    <p className="text-navy/75 group-hover:text-navy transition-colors font-semibold text-sm sm:text-base py-0.5 leading-snug">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={makeWhatsAppUrl(result, duration)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebd59] text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-green-500/20 cursor-pointer"
                >
                  <MessageCircle size={17} />
                  BOOK ON WHATSAPP
                </a>
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 flex items-center justify-center gap-2 bg-navy hover:bg-purple text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg cursor-pointer"
                >
                  CUSTOMIZE FURTHER
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}