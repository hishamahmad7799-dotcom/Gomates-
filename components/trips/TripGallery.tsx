'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Maximize2, X, Camera } from 'lucide-react'
import { Trip } from '@/types/trip'

interface TripGalleryProps {
  trip: Trip
}

export default function TripGallery({ trip }: TripGalleryProps) {
  const [activeImage, setActiveImage] = useState<string | null>(null)

  if (!trip.gallery || trip.gallery.length === 0) return null

  return (
    <section className="py-16 bg-dark-surface border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-accent-primary/10 border border-accent-primary/30">
            <Camera className="w-5 h-5 text-accent-primary" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Trip Gallery</h2>
            <p className="text-xs text-gray-muted">Visual preview of what awaits on this route</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trip.gallery.map((imgUrl, index) => (
            <div
              key={index}
              onClick={() => setActiveImage(imgUrl)}
              className="group relative h-48 sm:h-64 rounded-xl overflow-hidden cursor-pointer border border-dark-border"
            >
              <Image
                src={imgUrl}
                alt={`${trip.name} gallery image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Maximize2 className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 p-3 text-white bg-dark-surface rounded-full hover:bg-accent-primary transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={activeImage}
              alt="Trip gallery enlarged"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  )
}
