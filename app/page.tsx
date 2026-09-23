import React from 'react'
import { getTrips } from '@/lib/trips'
import Hero from '@/components/home/Hero'
import TripGrid from '@/components/home/TripGrid'
import WhyTravel from '@/components/home/WhyTravel'
import HowItWorks from '@/components/home/HowItWorks'
import Gallery from '@/components/home/Gallery'
import CTA from '@/components/home/CTA'

export const revalidate = 3600 // SSG revalidation every hour

export default async function HomePage() {
  const trips = await getTrips()

  return (
    <main className="min-h-screen bg-dark-bg">
      <Hero />
      <TripGrid trips={trips} />
      <WhyTravel />
      <HowItWorks />
      <Gallery />
      <CTA />
    </main>
  )
}
