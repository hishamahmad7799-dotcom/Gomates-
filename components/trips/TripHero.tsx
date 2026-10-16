"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";
import { Trip } from "@/types/trip";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import InstagramButton from "@/components/shared/InstagramButton";

interface TripHeroProps {
  trip: Trip;
}

export default function TripHero({ trip }: TripHeroProps) {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 min-h-[75vh] flex items-center bg-dark-bg overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={trip.coverImage}
          alt={trip.name}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 scale-105"
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-black/60" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Back Link */}
        <Link
          href="/#trips"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white bg-dark-bg/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-accent-primary" />
          <span>Back to All Trips</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Main Info (Left Side) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-primary bg-accent-primary/20 backdrop-blur-md rounded-full border border-accent-primary/40 shadow-sm">
                {trip.category}
              </span>
              <span className="px-3.5 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/80 backdrop-blur-md rounded-full border border-emerald-500/30">
                {trip.difficulty} Difficulty
              </span>
              {trip.state && (
                <span className="px-3.5 py-1 text-xs font-semibold text-cyan-300 bg-cyan-950/60 backdrop-blur-md rounded-full border border-cyan-500/30 hidden sm:inline-block">
                  {trip.state}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-tight sm:leading-tight mb-4">
              {trip.name}
            </h1>

            {/* Teaser Description */}
            {trip.shortDescription && (
              <p className="text-sm sm:text-base text-gray-300/90 leading-relaxed max-w-2xl mb-6">
                {trip.shortDescription}
              </p>
            )}

            {/* Attractive 4-Card Quick Specs Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5">
              {/* Location Card */}
              <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-dark-bg/70 backdrop-blur-md border border-white/10 hover:border-accent-primary/40 transition-colors">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-accent-primary/15 border border-accent-primary/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-accent-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-400">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block" title={trip.location}>
                    {trip.location.split(",")[0]}
                  </span>
                </div>
              </div>

              {/* Dates Card */}
              <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-dark-bg/70 backdrop-blur-md border border-white/10 hover:border-accent-primary/40 transition-colors">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-accent-primary/15 border border-accent-primary/30 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-accent-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-400">
                    Dates
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                    {trip.startDate === "Coming Soon" || trip.startDate === "To be announced" || trip.endDate === "-" || !trip.endDate
                      ? trip.startDate || "Coming Soon"
                      : `${trip.startDate} – ${trip.endDate}`}
                  </span>
                </div>
              </div>

              {/* Duration Card */}
              <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-dark-bg/70 backdrop-blur-md border border-white/10 hover:border-accent-primary/40 transition-colors">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-accent-primary/15 border border-accent-primary/30 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-accent-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-400">
                    Duration
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                    {trip.duration}
                  </span>
                </div>
              </div>

              {/* Group Size Card */}
              <div className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl bg-dark-bg/70 backdrop-blur-md border border-white/10 hover:border-accent-secondary/40 transition-colors">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-accent-secondary/15 border border-accent-secondary/30 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-accent-secondary" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-400">
                    Group Size
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                    Max {trip.groupSize}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing & CTA Card (Right Side) */}
          <div className="lg:col-span-5 glass-panel p-4 sm:p-6 lg:p-7 rounded-2xl border border-dark-border shadow-2xl">
            <div className="mb-4">
              <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block mb-1">
                Starting from
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-black text-accent-primary">
                  {trip.formattedPrice}
                </span>
                {trip.formattedPrice !== "To be announced" && (
                  <span className="text-sm text-gray-400"></span>
                )}
              </div>
            </div>

            {/* Package Cost Section */}
            <div className="my-4 sm:my-5 pt-4 border-t border-dark-border/60">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-wide mb-2.5 sm:mb-3">
                Package cost
              </h3>

              <div className="overflow-x-auto rounded-xl border border-dark-border/80 bg-dark-bg/80">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-dark-border/80 bg-white/[0.03] text-[9px] sm:text-[11px] font-bold uppercase tracking-wider text-teal-200/80">
                      <th className="py-2.5 px-2.5 sm:px-3.5 whitespace-nowrap">ROOM SHARING</th>
                      <th className="py-2.5 px-2 sm:px-3 text-center whitespace-nowrap">COST (PER PERSON)</th>
                      <th className="py-2.5 px-2.5 sm:px-3.5 text-right whitespace-nowrap">ADVANCE TO BOOK</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-dark-border/40 text-[11px] sm:text-xs">
                    {(trip.costing && trip.costing.length > 0
                      ? trip.costing
                      : [
                          {
                            roomSharing: "Quad Sharing",
                            costPerPerson: "Coming Soon",
                            advanceToBook: "Coming Soon",
                          },
                          {
                            roomSharing: "Triple Sharing",
                            costPerPerson: "Coming Soon",
                            advanceToBook: "Coming Soon",
                          },
                          {
                            roomSharing: "Twin Sharing",
                            costPerPerson: "Coming Soon",
                            advanceToBook: "Coming Soon",
                          },
                        ]
                    ).map((item, idx) => (
                      <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                        <td className="py-2.5 sm:py-3 px-2.5 sm:px-3.5 font-semibold text-white whitespace-nowrap">
                          {item.roomSharing}
                        </td>
                        <td className="py-2.5 sm:py-3 px-2 sm:px-3 text-center font-bold text-accent-primary whitespace-nowrap">
                          {item.costPerPerson}
                        </td>
                        <td className="py-2.5 sm:py-3 px-2.5 sm:px-3.5 text-right font-medium text-gray-300 whitespace-nowrap">
                          {item.advanceToBook}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-3 mb-6 pt-2 border-t border-dark-border/60 text-xs text-gray-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Stays, Transfers & Meals Included</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Local Expedition Leader Included</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <InstagramButton
                size="md"
                variant="outline"
                text="Instagram"
                className="flex-1 justify-center"
              />
              <WhatsAppButton
                tripName={trip.name}
                text="WhatsApp"
                size="md"
                variant="primary"
                className="flex-1 justify-center shadow-glow-emerald"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
