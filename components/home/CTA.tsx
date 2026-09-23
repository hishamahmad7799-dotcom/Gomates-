'use client'

import React from 'react'
import Link from 'next/link'
import { Instagram, ArrowUpRight, Compass } from 'lucide-react'
import { siteConfig } from '@/config/site'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import InstagramButton from '@/components/shared/InstagramButton'

export default function CTA() {
  return (
    <div className="bg-dark-bg">
      {/* Instagram Banner */}
      <section className="py-14 bg-dark-surface border-y border-dark-border text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-accent-secondary inline-flex items-center gap-1.5 mb-3">
            <Instagram className="w-4 h-4 text-accent-secondary" />
            FOLLOW THE JOURNEY
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            See Where We're Going Next
          </h3>
          <p className="text-sm text-gray-muted mb-6">
            Get daily reels, trek updates, and behind-the-scenes trip stories on our Instagram feed.
          </p>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-dark-bg hover:bg-dark-elevated rounded-full border border-dark-border hover:border-accent-secondary/50 transition-all duration-300 group"
          >
            <span>Follow {siteConfig.instagramHandle}</span>
            <ArrowUpRight className="w-4 h-4 text-accent-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* Main Final Hero CTA */}
      <section className="py-24 relative overflow-hidden text-center">
        {/* Background Radial Glow */}
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-16 h-16 rounded-2xl bg-gradient-accent p-0.5 mx-auto mb-6 shadow-glow-accent">
            <div className="w-full h-full bg-dark-bg rounded-[14px] flex items-center justify-center">
              <Compass className="w-8 h-8 text-accent-primary animate-pulse" />
            </div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            READY FOR YOUR <br />
            <span className="text-gradient-accent">NEXT ADVENTURE?</span>
          </h2>

          <p className="text-base sm:text-xl text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed">
            Your next story starts here. Seats are strictly limited to 12-15 gomates per batch.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#trips"
              className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-accent-primary hover:bg-accent-secondary rounded-full shadow-glow-accent transition-all duration-300"
            >
              Explore All Trips
            </Link>
            <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto justify-center">
              <InstagramButton text="Instagram" size="lg" variant="outline" className="flex-1 sm:flex-initial justify-center" />
              <WhatsAppButton
                text="WhatsApp"
                size="lg"
                variant="primary"
                className="flex-1 sm:flex-initial justify-center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
