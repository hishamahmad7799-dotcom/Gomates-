'use client'

import React, { useState } from 'react'
import { MapPin, BedDouble, Utensils, ChevronDown, ChevronUp, Download } from 'lucide-react'
import { Trip, ItineraryItem } from '@/types/trip'

interface ItineraryProps {
  trip: Trip
}

/**
 * Extracts clean bullet points from an itinerary item.
 * Supports explicit `points` array, newline-delimited descriptions,
 * bullet-delimited text, or sentence-based fallback.
 */
function getItineraryPoints(item: ItineraryItem): string[] {
  if (item.points && item.points.length > 0) {
    return item.points
  }

  if (!item.description) return []

  // Check if description has newlines
  if (item.description.includes('\n')) {
    return item.description
      .split('\n')
      .map((line) => line.trim().replace(/^([•\-\*]|\d+\.)\s*/, ''))
      .filter((line) => line.length > 0)
  }

  // Check if description has bullet characters like •
  if (item.description.includes('•')) {
    return item.description
      .split('•')
      .map((s) => s.trim())
      .filter((s) => s.length > 0)
  }

  // If description has multiple sentences, split cleanly into points
  const sentences = item.description
    .split(/(?<=[.?!])\s+(?=[A-Z0-9])/)
    .map((s) => s.trim().replace(/^([•\-\*]|\d+\.)\s*/, ''))
    .filter((s) => s.length > 0)

  if (sentences.length > 1) {
    return sentences
  }

  return [item.description.trim()]
}

export default function Itinerary({ trip }: ItineraryProps) {
  // Expand first two days by default, or Day 0 & Day 1
  const [expandedDays, setExpandedDays] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {}
    trip.itinerary.forEach((item, index) => {
      if (index < 2) {
        initial[item.day] = true
      }
    })
    return initial
  })

  const areAllExpanded =
    trip.itinerary.length > 0 &&
    trip.itinerary.every((item) => expandedDays[item.day])

  const toggleDay = (dayNum: number) => {
    setExpandedDays((prev) => ({
      ...prev,
      [dayNum]: !prev[dayNum],
    }))
  }

  const toggleAll = () => {
    if (areAllExpanded) {
      setExpandedDays({})
    } else {
      const allExpanded: Record<number, boolean> = {}
      trip.itinerary.forEach((item) => {
        allExpanded[item.day] = true
      })
      setExpandedDays(allExpanded)
    }
  }

  const handlePrint = () => {
    // Expand all days so full details appear in the print/PDF view
    const allExpanded: Record<number, boolean> = {}
    trip.itinerary.forEach((item) => {
      allExpanded[item.day] = true
    })
    setExpandedDays(allExpanded)
    setTimeout(() => {
      window.print()
    }, 200)
  }

  const downloadFileName = trip.itineraryPdf
    ? `${trip.name.replace(/[^a-zA-Z0-9\s-]/g, '').trim()}-Itinerary.pdf`
    : 'Gomates-Itinerary.pdf'

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

          {/* Actions: Expand/Collapse & Download */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={toggleAll}
              className="text-xs font-bold uppercase tracking-wider text-accent-primary hover:text-accent-secondary transition-colors underline underline-offset-4"
            >
              {areAllExpanded ? 'Collapse All Days' : 'Expand All Days'}
            </button>

            <span className="text-dark-border text-sm hidden sm:inline" aria-hidden="true">•</span>

            {trip.itineraryPdf ? (
              <a
                href={trip.itineraryPdf}
                download={downloadFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-accent-primary hover:bg-accent-secondary text-white text-xs font-bold uppercase tracking-wider transition-all shadow-glow-accent hover:shadow-lg active:scale-95 group/btn"
              >
                <Download className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform" />
                <span>Download Itinerary</span>
              </a>
            ) : (
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-dark-elevated hover:bg-accent-primary border border-dark-border hover:border-accent-primary text-gray-200 hover:text-white text-xs font-bold uppercase tracking-wider transition-all active:scale-95 group/btn"
              >
                <Download className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform" />
                <span>Download Itinerary</span>
              </button>
            )}
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-dark-border ml-4 sm:ml-8 space-y-8">
          {trip.itinerary.map((item) => {
            const isExpanded = expandedDays[item.day] ?? false
            const points = getItineraryPoints(item)

            return (
              <div key={item.day} className="relative pl-6 sm:pl-10 group">
                {/* Timeline Dot */}
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-dark-bg border-2 border-accent-primary flex items-center justify-center text-xs font-bold text-accent-primary group-hover:scale-110 group-hover:bg-accent-primary group-hover:text-white transition-all shadow-glow-accent select-none">
                  {item.day}
                </div>

                {/* Day Card */}
                <div className="glass-panel rounded-2xl border border-dark-border overflow-hidden transition-all duration-300 hover:border-dark-borderHover">
                  {/* Card Header (Click to Toggle) */}
                  <div
                    onClick={() => toggleDay(item.day)}
                    className="p-5 sm:p-6 flex items-center justify-between cursor-pointer hover:bg-dark-elevated/80 transition-colors select-none"
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-accent-primary block mb-1">
                        DAY {item.day.toString().padStart(2, '0')}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                        {item.title.trim()}
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
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-dark-border/60 space-y-5 animate-fadeIn">
                      {/* Optional Lead Description if separate from points */}
                      {item.description && item.points && item.points.length > 0 && (
                        <p className="text-sm text-gray-300 leading-relaxed font-normal">
                          {item.description}
                        </p>
                      )}

                      {/* Professional Bullet Points */}
                      {points.length > 0 ? (
                        <ul className="space-y-3 pt-1">
                          {points.map((point, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 group/item"
                            >
                              <div className="w-5 h-5 rounded-full bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:border-accent-primary transition-colors">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent-primary group-hover/item:scale-125 transition-transform" />
                              </div>
                              <span className="text-sm text-gray-200 leading-relaxed group-hover/item:text-white transition-colors">
                                {point}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        item.description && (
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {item.description}
                          </p>
                        )
                      )}

                      {/* Stay & Meals Pills */}
                      {(item.location || item.stay || item.mealsIncluded) && (
                        <div className="flex flex-wrap gap-2.5 pt-4 border-t border-dark-border/50 text-xs">
                          {item.location && item.location.trim().toLowerCase() !== 'n/a' && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-bg/80 border border-dark-border/70 text-gray-400">
                              <MapPin className="w-3.5 h-3.5 text-accent-primary shrink-0" />
                              <span>
                                Location:{' '}
                                <strong className="text-white font-medium">
                                  {item.location.trim()}
                                </strong>
                              </span>
                            </div>
                          )}
                          {item.stay && item.stay.trim().toLowerCase() !== 'n/a' && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-bg/80 border border-dark-border/70 text-gray-400">
                              <BedDouble className="w-3.5 h-3.5 text-accent-secondary shrink-0" />
                              <span>
                                Stay:{' '}
                                <strong className="text-white font-medium">
                                  {item.stay.trim()}
                                </strong>
                              </span>
                            </div>
                          )}
                          {item.mealsIncluded && item.mealsIncluded.trim().toLowerCase() !== 'n/a' && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-dark-bg/80 border border-dark-border/70 text-gray-400">
                              <Utensils className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                              <span>
                                Meals:{' '}
                                <strong className="text-white font-medium">
                                  {item.mealsIncluded.trim()}
                                </strong>
                              </span>
                            </div>
                          )}
                        </div>
                      )}
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
