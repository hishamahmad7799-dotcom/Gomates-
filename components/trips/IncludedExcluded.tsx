'use client'

import React from 'react'
import { Check, X } from 'lucide-react'
import { Trip } from '@/types/trip'

interface IncludedExcludedProps {
  trip: Trip
}

export default function IncludedExcluded({ trip }: IncludedExcludedProps) {
  return (
    <section className="py-16 bg-dark-bg border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-emerald block mb-2">
            TRANSPARENT DETAILS
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            What’s Included & Excluded
          </h2>
          <p className="mt-2 text-sm text-gray-muted">
            Zero hidden costs. Everything you need for a seamless trip is clearly listed below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Included Card */}
          <div className="p-8 rounded-2xl glass-panel border border-emerald-500/30 bg-emerald-950/10">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-500/20">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                <Check className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">What Is Included</h3>
                <span className="text-xs text-emerald-400 font-semibold">Covered in trip package</span>
              </div>
            </div>

            <ul className="space-y-4">
              {trip.included.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-200">
                  <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded Card */}
          <div className="p-8 rounded-2xl glass-panel border border-rose-500/20 bg-rose-950/10">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-rose-500/20">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center">
                <X className="w-6 h-6 text-rose-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">What Is Excluded</h3>
                <span className="text-xs text-rose-400 font-semibold">Not covered in package</span>
              </div>
            </div>

            <ul className="space-y-4">
              {trip.excluded.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                  <div className="p-1 rounded bg-rose-500/20 text-rose-400 shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
