'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import SectionHeader from '@/components/shared/SectionHeader'
import { Maximize2, X, MapPin, Grid, Sparkles } from 'lucide-react'

interface GalleryItem {
  id: string
  src: string
  caption: string
  location: string
  heightClass: string
}

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<GalleryItem | null>(null)
  const [showFullGalleryModal, setShowFullGalleryModal] = useState(false)

  const galleryImages: GalleryItem[] = [
    {
      id: '1',
      src: '/images/chandratal/chandratal-2.jpg',
      caption: 'Turquoise Waters of Moon Lake',
      location: 'Chandratal Lake (14,100 ft)',
      heightClass: 'h-48 sm:h-56',
    },
    {
      id: '2',
      src: '/images/chandratal/chandratal-1.jpg',
      caption: 'High Mountain Valley Village',
      location: 'Spiti Valley, Himachal',
      heightClass: 'h-36 sm:h-44',
    },
    {
      id: '3',
      src: '/images/jibhi/jibhi-1.jpg',
      caption: 'Friendships on Mountain Trails',
      location: 'Jibhi Valley, Himachal',
      heightClass: 'h-44 sm:h-52',
    },
    {
      id: '4',
      src: '/images/chandratal/chandratal-4.jpg',
      caption: 'Buddha Statue & Snow Peaks',
      location: 'Langza High Altitude Peak',
      heightClass: 'h-48 sm:h-56',
    },
    {
      id: '5',
      src: '/images/chandratal/chandratal-5.jpg',
      caption: 'Cliffside Monastery Panorama',
      location: 'Key Monastery, Spiti',
      heightClass: 'h-36 sm:h-44',
    },
    {
      id: '6',
      src: '/images/chandratal/chandratal-3.jpg',
      caption: 'Mirror Reflection over Moon Lake',
      location: 'Chandratal Base Camp',
      heightClass: 'h-44 sm:h-52',
    },
    {
      id: '7',
      src: '/images/gallery/hanle.png',
      caption: 'Stargazing Under Cosmic Skies',
      location: 'Hanle Observatory, Ladakh',
      heightClass: 'h-40 sm:h-48',
    },
    {
      id: '8',
      src: '/images/jibhi/jibhi-4.jpg',
      caption: 'Evening Campfire & Smiles',
      location: 'Shoja Pine Forest',
      heightClass: 'h-36 sm:h-44',
    },
  ]

  // Homepage view shows first 6 items in compact single-screen height grid
  const initialImages = galleryImages.slice(0, 6)

  return (
    <section id="gallery" className="py-12 sm:py-16 bg-dark-surface border-t border-dark-border relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="VISUAL STORIES"
          title="MOMENTS FROM OUR ADVENTURES"
          subtitle="Every picture tells a story of friendship, courage, and the mountains."
        />

        {/* Pinterest-Style Compact Multi-Column Grid (Single Screen Fit) */}
        <div className="columns-2 sm:columns-3 lg:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4 mt-6">
          {initialImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setLightboxImage(img)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-dark-border/80 break-inside-avoid shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary/50 ${img.heightClass}`}
            >
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                <span className="text-[10px] font-bold text-accent-primary uppercase tracking-wider flex items-center gap-1 mb-0.5">
                  <MapPin className="w-3 h-3 text-accent-primary" />
                  {img.location}
                </span>
                <h4 className="text-xs font-bold text-white flex items-center justify-between">
                  <span className="line-clamp-1">{img.caption}</span>
                  <Maximize2 className="w-3.5 h-3.5 text-white shrink-0 ml-1" />
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* "View Full Gallery" Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowFullGalleryModal(true)}
            className="inline-flex items-center gap-2 px-7 py-3 text-sm font-bold text-white bg-accent-primary hover:bg-accent-secondary rounded-full shadow-glow-accent transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            <Grid className="w-4 h-4" />
            <span>View Full Gallery</span>
            <Sparkles className="w-4 h-4 text-accent-secondary" />
          </button>
        </div>
      </div>

      {/* Full Gallery Modal */}
      {showFullGalleryModal && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-4 sm:p-6 overflow-y-auto">
          <div className="flex items-center justify-between max-w-7xl mx-auto w-full pb-4 border-b border-dark-border">
            <div>
              <span className="text-xs font-bold text-accent-primary uppercase tracking-wider">
                EXPLORE ALL ADVENTURES
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">Full Photo Gallery</h2>
            </div>
            <button
              onClick={() => setShowFullGalleryModal(false)}
              className="p-2.5 text-white bg-dark-surface border border-dark-border rounded-full hover:bg-accent-primary transition-colors"
              aria-label="Close full gallery"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="max-w-7xl mx-auto w-full py-6">
            <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  onClick={() => setLightboxImage(img)}
                  className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-dark-border break-inside-avoid ${img.heightClass}`}
                >
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                    <span className="text-[10px] font-bold text-accent-primary uppercase tracking-wider flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-accent-primary" />
                      {img.location}
                    </span>
                    <h4 className="text-xs font-bold text-white line-clamp-1">{img.caption}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Single Image View */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-3 text-white bg-dark-surface rounded-full hover:bg-accent-primary transition-colors z-50"
            aria-label="Close preview"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden flex flex-col bg-dark-surface border border-dark-border"
          >
            <div className="relative flex-grow w-full h-full min-h-[300px]">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.caption}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 bg-dark-bg border-t border-dark-border flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-accent-primary uppercase tracking-wider block">
                  {lightboxImage.location}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {lightboxImage.caption}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

