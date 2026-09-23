'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Trip } from '@/types/trip'
import SectionHeader from '@/components/shared/SectionHeader'
import TripCard from '@/components/trips/TripCard'

interface TripGridProps {
  trips: Trip[]
}

export default function TripGrid({ trips }: TripGridProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % trips.length)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + trips.length) % trips.length)
  }

  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -35) {
      nextSlide()
    } else if (info.offset.x > 35) {
      prevSlide()
    }
  }

  return (
    <section id="trips" className="py-16 sm:py-20 bg-dark-bg relative overflow-hidden">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[600px] h-[300px] sm:h-[350px] bg-accent-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          eyebrow="UPCOMING ADVENTURES"
          title="Handcrafted Group Expeditions"
          subtitle="Choose your next destination. Every trip is limited to 12–15 spots for an authentic, personal experience."
        />

        {/* 3D Circular Path Swipe Carousel Container */}
        <div className="relative min-h-[440px] sm:min-h-[500px] flex flex-col items-center justify-center pt-2 pb-2">
          {/* Left Arrow Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 md:left-6 z-40 p-2.5 sm:p-3 rounded-full bg-dark-surface/90 border border-dark-border text-white hover:bg-accent-primary hover:border-accent-primary shadow-2xl transition-all duration-300 active:scale-90"
            aria-label="Previous trip"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 md:right-6 z-40 p-2.5 sm:p-3 rounded-full bg-dark-surface/90 border border-dark-border text-white hover:bg-accent-primary hover:border-accent-primary shadow-2xl transition-all duration-300 active:scale-90"
            aria-label="Next trip"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* 3D Circular Stage */}
          <div
            className="relative w-full max-w-[300px] sm:max-w-[420px] md:max-w-[650px] lg:max-w-[800px] h-[450px] sm:h-[500px] flex items-center justify-center overflow-visible"
            style={{ perspective: '1200px' }}
          >
            {trips.map((trip, idx) => {
              // Calculate circular offset distance
              let offset = idx - activeIndex
              const count = trips.length

              // Wrap around offset for continuous circular loop
              if (offset > Math.floor(count / 2)) offset -= count
              if (offset < -Math.floor(count / 2)) offset += count

              const isActive = offset === 0
              const isPrev = offset === -1
              const isNext = offset === 1
              const isVisible = Math.abs(offset) <= 1

              if (!isVisible) return null

              return (
                <motion.div
                  key={trip.id}
                  drag={isActive ? 'x' : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  onDragEnd={handleDragEnd}
                  onClick={() => {
                    if (isNext) nextSlide()
                    if (isPrev) prevSlide()
                  }}
                  initial={false}
                  animate={{
                    x: `${offset * 60}%`,
                    scale: isActive ? 1 : 0.8,
                    rotateY: offset * -25,
                    z: isActive ? 0 : -120,
                    opacity: isActive ? 1 : 0.6,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 26,
                  }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  className={`absolute w-[84vw] max-w-[285px] sm:max-w-[340px] md:max-w-[400px] cursor-pointer select-none ${
                    isActive ? 'z-30' : isPrev ? 'z-20' : 'z-10'
                  }`}
                >
                  <div
                    className={`rounded-2xl transition-all duration-300 ${
                      isActive
                        ? 'ring-2 ring-accent-primary/60 shadow-glow-accent'
                        : 'filter brightness-75 hover:brightness-90'
                    }`}
                  >
                    <TripCard trip={trip} />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Dots Pagination Indicator */}
          <div className="flex items-center justify-center gap-2 mt-5 sm:mt-6 z-40">
            {trips.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to trip ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx
                    ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-accent-primary shadow-glow-accent'
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
