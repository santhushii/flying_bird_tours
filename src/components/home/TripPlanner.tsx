"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Palmtree, Mountain, Landmark, Map, Send, RefreshCw, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";


type Interest = "Beaches" | "Wildlife" | "Culture" | "Adventure" | "History";

const itineraryData: Record<string, string[]> = {
  "Short & Sweet (3-5 Days)": [
    "Day 1: Arrival & Colombo City Tour",
    "Day 2: Scenic Train to Kandy & Temple of the Tooth",
    "Day 3: Tea Estates in Ella & Nine Arch Bridge",
    "Day 4: Mirissa Beach & Whale Watching",
    "Day 5: Galle Fort & Departure"
  ],
  "Heritage Explorer (7-10 Days)": [
    "Day 1: Arrival in Negombo",
    "Day 2: Sigiriya Rock Fortress",
    "Day 3: Polonnaruwa Ancient City",
    "Day 4: Anuradhapura Ruins",
    "Day 5: Kandy Religious Heritage",
    "Day 6-7: Ella Highlands & Tea Trails",
    "Day 8-9: Yala Safari & Wildlife",
    "Day 10: Departure from Galle"
  ],
};

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
      setResult(itineraryData[duration === "3-5 Days" ? "Short & Sweet (3-5 Days)" : "Heritage Explorer (7-10 Days)"]);
      setLoading(false);
      setStep(3);
    }, 1500);
  };

  return (
    <div className="glass bg-white/95 p-10 md:p-16 rounded-[4rem] border border-navy/5 shadow-3xl max-w-5xl mx-auto min-h-[600px] flex flex-col justify-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple/5 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy/5 rounded-full blur-3xl -ml-32 -mb-32" />
      
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div 
            key="step1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            className="text-center relative z-10"
          >
            <div className="w-24 h-24 bg-purple/10 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-purple/5">
               <Compass className="w-12 h-12 text-purple animate-spin-slow" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black text-navy mb-4 tracking-tight">How long are you staying?</h2>
            <p className="text-navy/40 mb-12 tracking-[0.3em] uppercase font-bold text-xs">Choose your trip duration</p>
            
            <div className="flex flex-wrap justify-center gap-6">
              {["3-5 Days", "7-14 Days", "14+ Days"].map(d => (
                <button
                  key={d}
                  onClick={() => { setDuration(d); setStep(2); }}
                  className="px-10 py-6 rounded-3xl border border-navy/5 bg-white hover:border-purple hover:text-purple shadow-sm hover:shadow-xl hover:shadow-purple/10 transition-all font-bold text-2xl group"
                >
                  <span className="text-navy group-hover:text-purple">{d}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div 
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="text-center relative z-10"
          >
            <h2 className="text-4xl md:text-5xl font-display font-black text-navy mb-4 tracking-tight">What interests you?</h2>
            <p className="text-navy/40 mb-12 tracking-[0.3em] uppercase font-bold text-xs">Select multiple categories</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
               {[
                 { id: "Beaches", Icon: Palmtree },
                 { id: "Wildlife", Icon: Compass },
                 { id: "Culture", Icon: Landmark },
                 { id: "Adventure", Icon: Mountain },
                 { id: "History", Icon: RefreshCw },
               ].map(({id, Icon}) => (
                 <button
                    key={id}
                    onClick={() => toggleInterest(id as Interest)}
                    className={`flex flex-col items-center gap-6 p-8 rounded-[2.5rem] border transition-all ${
                      interests.includes(id as Interest) 
                        ? "bg-purple border-purple shadow-2xl shadow-purple/30 scale-105 text-white" 
                        : "bg-white border-navy/5 text-navy/40 hover:border-purple hover:text-purple hover:shadow-xl shadow-sm"
                    }`}
                 >
                    <Icon size={36} />
                    <span className="font-extrabold uppercase tracking-widest text-[10px]">{id}</span>
                 </button>
               ))}
            </div>

            <button
               onClick={generateTrip}
               disabled={interests.length === 0 || loading}
               className="bg-navy text-white px-16 py-6 rounded-3xl font-bold text-xl hover:scale-105 active:scale-95 disabled:opacity-50 transition-all flex items-center mx-auto gap-4 shadow-2xl shadow-navy/20"
            >
               {loading ? <RefreshCw className="animate-spin" /> : "GENERATE ITINERARY"}
               <ChevronRight size={24} />
            </button>
          </motion.div>
        )}

        {step === 3 && result && (
          <motion.div 
            key="step3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10"
          >
             <div className="flex justify-between items-end mb-12 border-b border-navy/5 pb-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-display font-black text-navy mb-3 tracking-tight">Your Perfect Trip</h2>
                  <p className="text-purple font-extrabold text-[10px] tracking-[0.4em] uppercase">Sri Lanka: {duration} Voyage</p>
                </div>
                <button 
                   onClick={() => { setInterests([]); setStep(1); }}
                   className="text-navy/30 hover:text-purple transition-colors flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-navy/5 px-6 py-3 rounded-full"
                >
                   <RefreshCw size={14} /> Start Over
                </button>
             </div>

             <div className="space-y-8 pl-4">
                {result.map((item, i) => (
                   <motion.div
                     key={i}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="flex gap-8 group"
                   >
                     <div className="flex flex-col items-center pt-1.5">
                        <div className="w-4 h-4 rounded-full bg-purple border-4 border-white shadow-lg ring-4 ring-purple/5 group-hover:scale-125 transition-transform" />
                        {i !== result.length - 1 && <div className="w-0.5 h-full bg-navy/5 mt-2 min-h-[40px]" />}
                     </div>
                     <div className="text-navy/70 group-hover:text-navy transition-colors font-bold text-xl py-0.5 tracking-tight">
                        {item}
                     </div>
                   </motion.div>
                ))}
             </div>

             <div className="mt-20 flex flex-col md:flex-row gap-6">
                <button 
                  onClick={() => window.location.href = "/book"}
                  className="bg-purple text-white flex-1 py-6 rounded-3xl font-black tracking-widest uppercase text-xs hover:bg-purple/90 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-purple/20"
                >
                   BOOK THIS TRIP
                   <Map size={20} />
                </button>
                <button 
                  onClick={() => setStep(2)}
                  className="bg-navy text-white flex-1 py-6 rounded-3xl font-black tracking-widest uppercase text-xs hover:bg-navy/90 transition-all shadow-2xl shadow-navy/20"
                >
                   CUSTOMIZE FURTHER
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
