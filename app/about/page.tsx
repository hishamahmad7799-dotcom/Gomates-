import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Compass, Heart, Award, Users, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import SectionHeader from '@/components/shared/SectionHeader'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

export const metadata: Metadata = {
  title: `ABOUT US  | ${siteConfig.name}`,
  
  description: `Learn about ${siteConfig.name} - Curated small-group travel company crafting authentic adventures across India.`,
}

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: 'Small Groups Only',
      desc: 'We strictly cap our group size at 12–15 travelers. No massive buses, no rushed tours.',
    },
    {
      icon: ShieldCheck,
      title: 'Safety & Field Protocols',
      desc: 'Oxygen kits, trained trip leads, and 24/7 emergency backing on every high-altitude trail.',
    },
    {
      icon: Heart,
      title: 'Authentic Local Culture',
      desc: 'We support local homestays, native mountain guides, and regional culinary traditions.',
    },
    {
      icon: Award,
      title: 'Uncompromised Quality',
      desc: 'Handpicked boutique stays, comfortable vehicles, and transparent pricing with zero hidden fees.',
    },
  ]

  return (
    <main className="min-h-screen bg-dark-bg pt-28 pb-20">
      {/* Hero Banner */}
      <section className="relative py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-primary bg-accent-primary/10 border border-accent-primary/20 px-4 py-1.5 rounded-full inline-block mb-4">
            OUR STORY & PHILOSOPHY
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight">
            WE CRAFT JOURNEYS FOR <br />
            <span className="text-gradient-accent">CURIOUS WANDERERS</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {siteConfig.name} was born out of a simple passion: to make group travel in India intimate, authentic, safe, and deeply unforgettable.
          </p>
        </div>
      </section>

      {/* Image Showcase & Story */}
      <section className="py-12 bg-dark-surface border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden border border-dark-border">
              <Image
                src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80"
                alt="Group of travelers on mountain trail"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <span className="text-xs font-bold text-accent-primary uppercase tracking-wider block mb-1">
                    ESTABLISHED FOR ADVENTURERS
                  </span>
                  <p className="text-lg font-bold text-white">
                    "Travel is best experienced with good company under starry skies."
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-white">
                Why We Started {siteConfig.name}
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Most group travel in India suffers from overcrowded buses, rigid schedules, and commercialized tourist traps. We wanted to build something completely different.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                At {siteConfig.name}, we curate small, like-minded groups of 12 to 15 travelers. We take you off the beaten track to cold deserts, living root bridges, hidden mountain valleys, and ancient fortresses—backed by local leaders who love the terrain as much as you will.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/#trips"
                  className="px-6 py-3 text-sm font-bold text-white bg-accent-primary hover:bg-accent-secondary rounded-full transition-all inline-flex items-center gap-2"
                >
                  <span>Explore 5 Upcoming Batches</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <WhatsAppButton text="Chat With Us" size="md" variant="outline" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="OUR COMMITMENT"
            title="The 4 Pillars of Our Expeditions"
            subtitle="Every single trip we host abides by these core standards."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => {
              const Icon = val.icon
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl glass-panel border border-dark-border hover:border-accent-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-accent-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
                  <p className="text-sm text-gray-muted leading-relaxed">{val.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-16 bg-dark-surface border-t border-dark-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldCheck className="w-12 h-12 text-accent-emerald mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Safety & High Altitude Standards
          </h2>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-8">
            High altitude trips in regions like Spiti Valley and Ladakh demand serious safety protocols. We carry portable medical oxygen cylinders, pulse oximeters, and certified high-altitude leads on every batch to ensure you stay healthy and comfortable.
          </p>
          <WhatsAppButton text="Ask Safety & Acclimatization Questions" size="lg" variant="primary" />
        </div>
      </section>
    </main>
  )
}
