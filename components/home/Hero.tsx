'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowDown, Compass } from 'lucide-react'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import InstagramButton from '@/components/shared/InstagramButton'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dark-bg">
      {/* Background Image with Dark Vignette & Slow Cinematic Zoom Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="Snow Capped Mountains Sunset"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-55"
          />
        </motion.div>
        {/* Multilayer gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-dark-bg/80" />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-accent-primary/10 border border-accent-primary/30 backdrop-blur-md">
          <Compass className="w-4 h-4 text-accent-primary animate-spin-slow" />
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent-primary">
            ADVENTURE • FRIENDS • MEMORIES
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-none mb-6">
          LEAVE ROUTINE. <br />
          <span className="text-gradient-accent">FIND SOMETHING REAL.</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-300 font-normal leading-relaxed mb-10">
          Discover curated group adventures across India’s rawest landscapes, ancient cultures, and hidden mountain trails with like-minded travelers.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#trips"
            className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-accent-primary hover:bg-accent-secondary rounded-full shadow-glow-accent transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Explore Upcoming Trips</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
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
  )
}
