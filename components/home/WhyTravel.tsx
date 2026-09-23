'use client'

import React from 'react'
import { Sparkles, Users, Map, ShieldCheck } from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'

export default function WhyTravel() {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Curated Experiences',
      description: 'Hand-picked routes and hidden trails away from tourist traps, giving you raw, unforgettable memories.',
    },
    {
      icon: Users,
      title: 'Small Group Culture',
      description: 'Travel with 10–15 like-minded gomates. Turn strangers into lifelong friends over campfires.',
    },
    {
      icon: Map,
      title: 'Local Immersion',
      description: 'Authentic village homestays, native trip leaders, and regional food curated by locals who know the terrain.',
    },
    {
      icon: ShieldCheck,
      title: 'Hassle-Free Travel',
      description: 'Permits, safety gear, transports, and stay arrangements handled 100% so you can simply live the journey.',
    },
  ]

  return (
    <section className="hidden md:block py-20 bg-dark-surface border-y border-dark-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="WHY TRAVEL WITH US"
          title="Designed For True Gomates"
          subtitle="We craft journeys that focus on authentic connections, safety, and zero travel stress."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div
                key={index}
                className="p-8 rounded-2xl glass-panel border border-dark-border hover:border-accent-primary/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent-primary/20 transition-all">
                  <IconComponent className="w-6 h-6 text-accent-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
