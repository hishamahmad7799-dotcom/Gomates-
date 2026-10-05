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
    <section className="relative pt-28 pb-16 min-h-[70vh] flex items-end bg-dark-bg overflow-hidden">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
          {/* Main Info */}
          <div className="lg:col-span-2">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-primary bg-accent-primary/20 backdrop-blur-md rounded-full border border-accent-primary/40">
                {trip.category}
              </span>
              <span className="px-3.5 py-1 text-xs font-semibold text-emerald-400 bg-emerald-950/80 backdrop-blur-md rounded-full border border-emerald-500/30">
                {trip.difficulty} Difficulty
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-4">
              {trip.name}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent-primary shrink-0" />
                <span className="font-semibold text-white">
                  {trip.location}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent-primary shrink-0" />
                <span>
                  {trip.startDate === "To be announced"
                    ? "Dates: To be announced"
                    : `${trip.startDate} – ${trip.endDate}`}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent-primary shrink-0" />
                <span>{trip.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-accent-secondary shrink-0" />
                <span>Max {trip.groupSize}</span>
              </div>
            </div>
          </div>

          {/* Pricing & CTA Card */}
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-dark-border shadow-2xl">
            <div className="mb-4">
              <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block mb-1">
                All-Inclusive Trip Fare
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

            <div className="space-y-3 mb-6 pt-4 border-t border-dark-border/60 text-xs text-gray-300">
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
