import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTripBySlug, getAllTripSlugs } from '@/lib/trips'
import { siteConfig } from '@/config/site'
import TripHero from '@/components/trips/TripHero'
import TripOverview from '@/components/trips/TripOverview'
import Itinerary from '@/components/trips/Itinerary'
import IncludedExcluded from '@/components/trips/IncludedExcluded'
import TripGallery from '@/components/trips/TripGallery'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import InstagramButton from '@/components/shared/InstagramButton'

interface TripPageProps {
  params: {
    slug: string
  }
}

// SSG: Pre-generate all trip slugs at build time
export async function generateStaticParams() {
  const slugs = await getAllTripSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Dynamic SEO Metadata per trip
export async function generateMetadata({ params }: TripPageProps): Promise<Metadata> {
  const trip = await getTripBySlug(params.slug)

  if (!trip) {
    return {
      title: `Trip Not Found | ${siteConfig.name}`,
    }
  }

  return {
    title: `${trip.name} | ${siteConfig.name}`,
    description: trip.shortDescription,
    openGraph: {
      title: `${trip.name} (${trip.duration}) | ${siteConfig.name}`,
      description: trip.shortDescription,
      images: [{ url: trip.coverImage, width: 1200, height: 630, alt: trip.name }],
    },
  }
}

export default async function TripDetailPage({ params }: TripPageProps) {
  const trip = await getTripBySlug(params.slug)

  if (!trip) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-dark-bg pb-20">
      <TripHero trip={trip} />
      <TripOverview trip={trip} />
      <Itinerary trip={trip} />
      <IncludedExcluded trip={trip} />
      <TripGallery trip={trip} />

      {/* Floating Mobile Sticky Booking Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 glass-nav border-t border-dark-border px-4 py-3 flex items-center justify-between shadow-2xl">
        <div>
          <span className="block text-[10px] uppercase font-bold text-gray-400">Total Price</span>
          <span className="text-lg font-black text-white">{trip.formattedPrice}</span>
        </div>
        <div className="flex items-center gap-2">
          <InstagramButton size="sm" variant="outline" text="Instagram" />
          <WhatsAppButton
            tripName={trip.name}
            text="WhatsApp"
            size="sm"
            variant="primary"
          />
        </div>
      </div>
    </main>
  )
}
