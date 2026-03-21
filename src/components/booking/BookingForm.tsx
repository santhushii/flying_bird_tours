"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Calendar as CalendarIcon, MapPin, Car, Phone, Send, Info } from "lucide-react";
import { vehicles } from "@/data/vehicles";
import { motion, AnimatePresence } from "framer-motion";
import { format, differenceInDays } from "date-fns";

const bookingSchema = z.object({
  vehicleId: z.string().min(1, "Please select a vehicle"),
  startDate: z.string().min(1, "Start date is required"),
  endDate: z.string().min(1, "End date is required"),
  pickup: z.string().min(3, "Pickup location is required"),
  dropoff: z.string().min(3, "Drop-off location is required"),
  estimatedKm: z.number().min(1, "Please estimate kilometers"),
  name: z.string().min(2, "Full name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  notes: z.string().optional(),
});

type BookingValues = z.infer<typeof bookingSchema>;

import { useSearchParams } from "next/navigation";

export function BookingForm() {
  const searchParams = useSearchParams();
  const [estimate, setEstimate] = useState<number | null>(null);
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      vehicleId: vehicles[0].id,
      estimatedKm: 100,
      pickup: searchParams.get("pickup") || "",
      startDate: searchParams.get("date") || "",
    },
  });

  const watchedFields = watch();

  useEffect(() => {
    const vehicle = vehicles.find((v) => v.id === watchedFields.vehicleId) || vehicles[0];
    setSelectedVehicle(vehicle);

    if (watchedFields.startDate && watchedFields.endDate) {
      const days = differenceInDays(new Date(watchedFields.endDate), new Date(watchedFields.startDate)) + 1;
      if (days > 0) {
        const kmCost = (watchedFields.estimatedKm || 0) * vehicle.pricePerKm;
        const dayCost = days * vehicle.pricePerDay;
        setEstimate(kmCost + dayCost);
      } else {
        setEstimate(null);
      }
    }
  }, [watchedFields.vehicleId, watchedFields.startDate, watchedFields.endDate, watchedFields.estimatedKm]);

  const onSubmit = (data: BookingValues) => {
    const message = `*New Booking Request from Flying Bird Tours*%0A%0A` +
      `*Customer:* ${data.name}%0A` +
      `*Phone:* ${data.phone}%0A` +
      `*Vehicle:* ${selectedVehicle.name}%0A` +
      `*Dates:* ${data.startDate} to ${data.endDate}%0A` +
      `*Route:* ${data.pickup} -> ${data.dropoff}%0A` +
      `*Est. KM:* ${data.estimatedKm}km%0A` +
      `*Est. Total:* Rs. ${estimate?.toLocaleString()}%0A` +
      `*Notes:* ${data.notes || "None"}`;

    window.open(`https://wa.me/94771234567?text=${message}`, "_blank");
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
            <div className="space-y-2">
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

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-gold font-bold">Estimated Kilometers</label>
              <input 
                type="number" 
                {...register("estimatedKm", { valueAsNumber: true })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-primary"
              />
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
           <h3 className="text-2xl font-display font-bold mb-6">Fare Summary</h3>
           <div className="space-y-6">
              <div className="flex justify-between items-center text-foreground/60">
                 <span className="flex items-center gap-2"><Car size={16} /> {selectedVehicle.name}</span>
                 <span className="font-bold">Rs. {selectedVehicle.pricePerDay.toLocaleString()}/day</span>
              </div>
              <div className="flex justify-between items-center text-foreground/60">
                 <span className="flex items-center gap-2"><MapPin size={16} /> Est. Kilometers</span>
                 <span className="font-bold">{watchedFields.estimatedKm || 0} km</span>
              </div>
              <div className="h-px bg-foreground/10" />
              <div className="flex justify-between items-end">
                 <div>
                    <span className="text-xs uppercase tracking-widest text-primary font-bold">Dynamic Estimate</span>
                    <div className="text-4xl font-display font-bold text-gold mt-1">
                       Rs. {estimate ? estimate.toLocaleString() : "---"}
                    </div>
                 </div>
                 <div className="text-right text-[10px] text-foreground/40 leading-tight">
                    *Taxes and extra charges <br /> may apply based on routes
                 </div>
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
                 <li>• Transparent pricing - no hidden costs</li>
              </ul>
           </div>
        </div>
      </motion.div>
    </div>
  );
}
