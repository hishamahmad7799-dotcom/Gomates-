'use client'

import React from 'react'
import { Sparkles, CheckCircle2 } from 'lucide-react'
import { Trip } from '@/types/trip'

interface TripOverviewProps {
  trip: Trip
}

export default function TripOverview({ trip }: TripOverviewProps) {
  return (
    <section className="py-16 bg-dark-bg border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Detailed Description */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent-primary block mb-2">
                THE EXPERIENCE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                About This Journey
              </h2>
            </div>

            <p className="text-base text-gray-300 leading-relaxed font-normal">
              {trip.description}
            </p>

            {trip.shortDescription && (
              <div className="p-6 rounded-2xl glass-panel border border-accent-primary/20 bg-accent-primary/5 text-gray-200 text-sm leading-relaxed">
                "{trip.shortDescription}"
              </div>
            )}
          </div>

          {/* Highlights Sidebar / Grid */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent-secondary" />
              <h3 className="text-xl font-bold text-white">Trip Highlights</h3>
            </div>

            <div className="space-y-3">
              {trip.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl glass-panel border border-dark-border hover:border-accent-secondary/40 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent-secondary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-gray-200 leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
