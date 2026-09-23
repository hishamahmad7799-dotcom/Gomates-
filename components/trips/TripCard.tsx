'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, MapPin, ArrowRight, Users } from 'lucide-react'
import { Trip } from '@/types/trip'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

interface TripCardProps {
  trip: Trip
}

export default function TripCard({ trip }: TripCardProps) {
  return (
    <div className="group rounded-2xl glass-panel glass-panel-hover overflow-hidden flex flex-col h-full border border-dark-border">
      {/* Image Banner Container */}
      <div className="relative h-44 sm:h-60 md:h-72 w-full overflow-hidden">
        <Image
          src={trip.coverImage}
          alt={trip.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          priority={false}
        />
        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-black/30" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none">
          <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold text-white bg-dark-bg/80 backdrop-blur-md rounded-full border border-white/10">
            {trip.category}
          </span>
          <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold text-emerald-400 bg-emerald-950/80 backdrop-blur-md rounded-full border border-emerald-500/30">
            {trip.difficulty}
          </span>
        </div>

        {/* Bottom Image Overlay Location */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg">
          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-accent-primary" />
          <span>{trip.location}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-base sm:text-xl font-bold text-white group-hover:text-accent-primary transition-colors line-clamp-1 mb-1.5 sm:mb-2">
          <Link href={`/trips/${trip.slug}`}>
            {trip.name}
          </Link>
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-gray-muted line-clamp-2 mb-4 sm:mb-6 leading-relaxed">
          {trip.shortDescription}
        </p>

        {/* Metadata Pill Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 py-2.5 px-3 sm:py-3 sm:px-3.5 mb-4 sm:mb-6 rounded-xl bg-dark-bg/70 border border-dark-border text-[11px] sm:text-xs text-gray-300">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-accent-primary shrink-0" />
            <span className="truncate">{trip.startDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-accent-primary shrink-0" />
            <span className="truncate">{trip.duration}</span>
          </div>
          <div className="flex items-center gap-2 col-span-2 pt-1 border-t border-dark-border/40">
            <Users className="w-4 h-4 text-accent-secondary shrink-0" />
            <span className="truncate">Group: {trip.groupSize}</span>
          </div>
        </div>

        {/* Price & Action Row */}
        <div className="mt-auto pt-4 border-t border-dark-border flex items-center justify-between gap-3">
          <div>
            <span className="block text-[10px] uppercase font-bold tracking-wider text-gray-muted">Starting From</span>
            <span className="text-xl font-extrabold text-white">
              {trip.formattedPrice}
              <span className="text-xs font-normal text-gray-400"> /person</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/trips/${trip.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-dark-elevated hover:bg-accent-primary/20 hover:text-accent-primary rounded-xl border border-dark-border transition-all duration-300 group/btn"
            >
              <span>View Trip</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
