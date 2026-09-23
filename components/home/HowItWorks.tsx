'use client'

import React from 'react'
import SectionHeader from '@/components/shared/SectionHeader'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Trip',
      description: 'Explore our upcoming curated group trips across Jibhi-Shoja-Tirthan valley-Shimla, Udaipur Lakes, or Chandratal Camping.',
    },
    {
      step: '02',
      title: 'Join the Group',
      description: 'Tap "Join on WhatsApp", ask any questions, and confirm your seat with an easy booking deposit.',
    },
    {
      step: '03',
      title: 'Travel & Create Memories',
      description: 'Meet your group captain and fellow travelers on Day 1 and embark on an unforgettable journey.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-dark-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="SIMPLE 3-STEP PROCESS"
          title="How Group Trips Work"
          subtitle="Joining your next adventure takes less than 2 minutes."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl glass-panel border border-dark-border flex flex-col justify-between group hover:border-accent-secondary/50 transition-all duration-300"
            >
              <div>
                <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-accent opacity-80 block mb-6 font-mono">
                  {item.step}
                </span>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <span className="text-2xl text-accent-primary font-bold">→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <WhatsAppButton text="Enquire About Upcoming Batches" size="lg" variant="primary" />
        </div>
      </div>
    </section>
  )
}
