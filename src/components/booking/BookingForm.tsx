"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Car, Phone, Send, Info } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { motion } from "framer-motion";

const bookingSchema = z.object({
  vehicleId: z.string().min(1, "Please select a vehicle"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  pickup: z.string().min(3, "Pickup location is required"),
  dropoff: z.string().min(3, "Drop-off location is required"),
  name: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  notes: z.string().optional(),
});


type BookingValues = z.infer<typeof bookingSchema>;

import { useSearchParams } from "next/navigation";

export function BookingForm() {
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      vehicleId: vehicles[0].id,
      pickup: searchParams.get("pickup") || "",
      startDate: searchParams.get("date") || "",
    },
  });

  const vehicleId = useWatch({ control, name: "vehicleId" });
  const selectedVehicle = vehicles.find((v) => v.id === vehicleId) || vehicles[0];


  const onSubmit = (data: BookingValues) => {
    const message = `*New Booking Request from Flying Bird Tours*%0A%0A` +
      `*Customer:* ${data.name}%0A` +
      `*Phone:* ${data.phone}%0A` +
      `*Vehicle:* ${selectedVehicle.name}%0A` +
      `*Dates:* ${data.startDate} to ${data.endDate}%0A` +
      `*Route:* ${data.pickup} -> ${data.dropoff}%0A` +
      `*Notes:* ${data.notes || "None"}`;

    window.open(`https://wa.me/94760448292?text=${message}`, "_blank");
  };


  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        className="glass-dark p-8 rounded-[2rem] border border-white/10"
      >
        <h2 className="text-3xl font-display font-bold text-white mb-8 flex items-center gap-3">
           <Send className="text-primary" />
           Quick Booking
        </h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <label className="text-xs uppercase tracking-widest text-gold font-bold">Select Vehicle</label>
              <select 
                {...register("vehicleId")}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-primary appearance-none"
              >
                {vehicles.map((v) => (
                  <option key={v.id} value={v.id} className="bg-zinc-900">{v.name} ({v.category})</option>
                ))}
              </select>
              {errors.vehicleId && <p className="text-red-500 text-[10px] mt-1">{errors.vehicleId.message}</p>}
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold font-bold">Start Date</label>
              <input type="date" {...register("startDate")} className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold font-bold">End Date</label>
              <input type="date" {...register("endDate")} className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-primary" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold font-bold">Pickup Location</label>
              <input {...register("pickup")} placeholder="e.g. Airport (BIA)" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-primary" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold font-bold">Drop-off Location</label>
              <input {...register("dropoff")} placeholder="e.g. Ella City" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-primary" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <label className="text-xs uppercase tracking-widest text-gold font-bold">Your Name</label>
               <input {...register("name")} placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-primary" />
             </div>
             <div className="space-y-2">
               <label className="text-xs uppercase tracking-widest text-gold font-bold">Phone Number</label>
               <input {...register("phone")} placeholder="+1 234 567 890" className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-primary" />
             </div>
          </div>

          <div className="space-y-2 pt-4">
             <button type="submit" className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-xl shadow-primary/20">
                BOOK VIA WHATSAPP
                <Phone size={18} />
             </button>
          </div>
        </form>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col gap-8"
      >
        <div className="glass p-8 rounded-[2rem] border border-white/10 flex-1">
           <h3 className="text-2xl font-display font-bold mb-6">Booking Details</h3>
           <div className="space-y-6">
              <div className="flex justify-between items-center text-foreground/60">
                 <span className="flex items-center gap-2"><Car size={16} /> Selected Fleet</span>
                 <span className="font-bold">{selectedVehicle.name}</span>
              </div>
              <div className="flex justify-between items-center text-foreground/60">
                 <span className="flex items-center gap-2 font-bold text-primary">Capacity</span>
                 <span className="font-bold">{selectedVehicle.capacity} Persons</span>
              </div>
              <div className="h-px bg-foreground/10" />
              <div className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-widest text-primary font-bold tracking-widest">Inquiry Status</span>
                  <div className="text-xl font-display font-bold text-gold">Direct Confirmation</div>
                  <p className="text-xs text-foreground/40 mt-2 italic">*Submit the form to chat directly with our travel experts about availability and dates.</p>
              </div>
           </div>
        </div>


        <div className="bg-primary/5 border border-primary/20 p-8 rounded-[2rem] flex items-start gap-4">
           <Info className="text-primary mt-1 shrink-0" />
           <div>
              <h4 className="font-bold text-primary mb-2">Why book with us?</h4>
              <ul className="text-sm text-foreground/60 space-y-2">
                 <li>• Experienced English-speaking drivers</li>
                 <li>• Fully insured, air-conditioned vehicles</li>
                 <li>• 24/7 road-side assistance island-wide</li>
              </ul>
           </div>

        </div>
      </motion.div>
    </div>
  );
}
