'use client'

import React, { useState } from 'react'
import { Calendar, MapPin, BedDouble, Utensils, ChevronDown, ChevronUp } from 'lucide-react'
import { Trip } from '@/types/trip'

interface ItineraryProps {
  trip: Trip
}

export default function Itinerary({ trip }: ItineraryProps) {
  // Allow expanding/collapsing all or specific days
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>({
    1: true,
    2: true,
  })

  const toggleDay = (dayNum: number) => {
    setExpandedDays((prev) => ({
      ...prev,
      [dayNum]: !prev[dayNum],
    }))
  }

  const expandAll = () => {
    const allExpanded: Record<number, boolean> = {}
    trip.itinerary.forEach((item) => {
      allExpanded[item.day] = true
    })
    setExpandedDays(allExpanded)
  }

  return (
    <section className="py-20 bg-dark-surface border-t border-dark-border relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-accent-primary block mb-2">
              DAY BY DAY PLAN
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Detailed Itinerary
            </h2>
          </div>

          <button
            onClick={expandAll}
            className="text-xs font-bold uppercase tracking-wider text-accent-primary hover:text-accent-secondary transition-colors underline underline-offset-4"
          >
            Expand All Days
          </button>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-dark-border ml-4 sm:ml-8 space-y-8">
          {trip.itinerary.map((item) => {
            const isExpanded = expandedDays[item.day] ?? false

            return (
              <div key={item.day} className="relative pl-6 sm:pl-10 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-dark-bg border-2 border-accent-primary flex items-center justify-center text-xs font-bold text-accent-primary group-hover:scale-110 group-hover:bg-accent-primary group-hover:text-white transition-all shadow-glow-accent">
                  {item.day}
                </div>

                {/* Day Card */}
                <div className="glass-panel rounded-2xl border border-dark-border overflow-hidden transition-all duration-300">
                  {/* Card Header (Click to Toggle) */}
                  <div
                    onClick={() => toggleDay(item.day)}
                    className="p-5 sm:p-6 flex items-center justify-between cursor-pointer hover:bg-dark-elevated/80 transition-colors"
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent-primary block mb-1">
                        DAY {item.day.toString().padStart(2, '0')}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    <div className="p-2 rounded-full bg-dark-bg text-gray-400 group-hover:text-white transition-colors">
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-accent-primary" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  {isExpanded && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-dark-border/60 text-sm text-gray-300 space-y-4 animate-fadeIn">
                      <p className="leading-relaxed">{item.description}</p>

                      {/* Stay & Meals Pills */}
                      <div className="flex flex-wrap gap-4 pt-3 border-t border-dark-border/40 text-xs text-gray-400">
                        {item.location && (
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-accent-primary" />
                            <span>Location: <strong className="text-white font-medium">{item.location}</strong></span>
                          </div>
                        )}
                        {item.stay && (
                          <div className="flex items-center gap-1.5">
                            <BedDouble className="w-3.5 h-3.5 text-accent-secondary" />
                            <span>Stay: <strong className="text-white font-medium">{item.stay}</strong></span>
                          </div>
                        )}
                        {item.mealsIncluded && (
                          <div className="flex items-center gap-1.5">
                            <Utensils className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Meals: <strong className="text-white font-medium">{item.mealsIncluded}</strong></span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
