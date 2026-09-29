"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Users, CheckCircle2, Shield, Luggage, ArrowRight, X, Phone, Fuel } from "lucide-react";
import { Vehicle } from "@/types/vehicle";

export function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl hover:border-purple/30 transition-all duration-300 flex flex-col h-full">
        {/* Stable Vehicle Image Container */}
        <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
          <Image
            src={vehicle.image}
            alt={`${vehicle.name} - Luxury Chauffeur Vehicle Sri Lanka`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center"
          />
          
          <div className="absolute top-3.5 left-3.5 z-10">
            <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/95 text-navy shadow-sm border border-gray-200">
              {vehicle.category}
            </span>
          </div>

          <div className="absolute top-3.5 right-3.5 z-10">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase border shadow-sm ${
              vehicle.available 
                ? "border-emerald-200 text-emerald-700 bg-emerald-50/95" 
                : "border-gray-200 text-gray-600 bg-gray-50/95"
            }`}>
              {vehicle.available ? "Ready for Booking" : "On Charter"}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-1 justify-between">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h3 className="text-xl font-display font-bold text-navy">
                {vehicle.name}
              </h3>
              <div className="flex items-center gap-1.5 text-navy/70 text-xs font-semibold">
                <Users size={15} className="text-purple" />
                <span>Up to {vehicle.capacity}</span>
              </div>
            </div>

            <p className="text-xs text-navy/50 font-medium mb-5">
              Includes professional licensed chauffeur, fuel, full insurance &amp; highway tolls.
            </p>

            {/* Key Features List */}
            <div className="space-y-2 mb-6">
              {vehicle.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-navy/80 font-medium">
                  <CheckCircle2 size={14} className="text-purple shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-5 border-t border-gray-100 flex items-center justify-between gap-3 mt-auto">
            <button
              onClick={() => setShowModal(true)}
              className="text-xs font-bold text-navy/70 hover:text-purple transition-colors py-2 px-1 cursor-pointer"
            >
              Specs &amp; Info
            </button>

            <Link
              href={`/book?vehicle=${encodeURIComponent(vehicle.id)}`}
              className="bg-navy hover:bg-purple text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-colors shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <span>Book Ride</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Clean, Stable Specifications Modal */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-navy rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 bg-slate-100">
              <Image
                src={vehicle.image}
                alt={vehicle.name}
                fill
                sizes="500px"
                className="object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 bg-navy/90 text-white text-[11px] font-bold px-3 py-1 rounded-full">
                {vehicle.category}
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold text-navy mb-1">{vehicle.name}</h3>
            <p className="text-xs text-navy/50 font-medium mb-6">
              Official fleet transport for private tours, airport transfers, and island travel.
            </p>

            {/* Specs Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6 text-xs font-medium text-navy/80">
              <div className="p-3 bg-slate-50 rounded-xl border border-gray-100 flex items-center gap-2.5">
                <Users size={16} className="text-purple shrink-0" />
                <span>Capacity: <strong>{vehicle.capacity} Persons</strong></span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-gray-100 flex items-center gap-2.5">
                <Luggage size={16} className="text-purple shrink-0" />
                <span>Luggage: <strong>Full Boot</strong></span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-gray-100 flex items-center gap-2.5">
                <Shield size={16} className="text-emerald-600 shrink-0" />
                <span>Insurance: <strong>Fully Insured</strong></span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-gray-100 flex items-center gap-2.5">
                <Fuel size={16} className="text-gold shrink-0" />
                <span>Included: <strong>Fuel &amp; Driver</strong></span>
              </div>
            </div>

            {/* Features Included */}
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-navy/50 block mb-2">Amenities &amp; Features</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {vehicle.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-navy/70">
                    <CheckCircle2 size={13} className="text-purple shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex gap-3">
              <Link
                href={`/book?vehicle=${encodeURIComponent(vehicle.id)}`}
                onClick={() => setShowModal(false)}
                className="flex-1 bg-purple hover:bg-purple/90 text-white py-3 rounded-xl font-bold text-center text-xs tracking-wider uppercase transition-colors"
              >
                Proceed to Reservation
              </Link>
              <a
                href={`https://wa.me/94760448292?text=Hello%20Flying%20Bird%20Tours!%20I%20would%20like%20to%20inquire%20about%20booking%20the%20${encodeURIComponent(vehicle.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 bg-[#25D366] hover:bg-[#1ebd59] text-white rounded-xl font-bold text-xs flex items-center justify-center transition-colors"
                title="Inquire on WhatsApp"
              >
                <Phone size={14} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
