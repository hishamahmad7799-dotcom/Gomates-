'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '@/config/site'

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-dark-border text-gray-muted pt-14 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Centered Red Logo */}
        <Link href="/" className="inline-block mb-4 group">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-accent-primary group-hover:scale-105 transition-transform duration-300 shadow-glow-accent bg-[#DA1526]">
            <Image
              src="/images/logo.jpg"
              alt="Gomates Logo"
              fill
              className="object-cover scale-[1.18]"
            />
          </div>
        </Link>

        {/* Subtitle / Tagline */}
        <p className="text-sm sm:text-base text-gray-400 font-medium mb-8 max-w-md">
          Where strangers become travel mates.
        </p>

        {/* Horizontal Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold tracking-wider text-white uppercase mb-8">
          <Link href="/" className="hover:text-accent-primary transition-colors">
            HOME
          </Link>
          <Link href="/about" className="hover:text-accent-primary transition-colors">
            ABOUT US
          </Link>
          <Link href="/#trips" className="hover:text-accent-primary transition-colors">
            UPCOMING TRIPS
          </Link>
          <Link href="/#gallery" className="hover:text-accent-primary transition-colors">
            GALLERY
          </Link>
          <Link href="/faq" className="hover:text-accent-primary transition-colors">
            FAQS
          </Link>
        </nav>

        {/* Policy Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-gray-400 mb-8">
          <Link href="/privacy-policy" className="hover:text-accent-primary transition-colors">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/cancellation-policy" className="hover:text-accent-primary transition-colors">
            Cancellation Policy
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full max-w-4xl border-t border-dark-border/60 mb-6" />

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} {siteConfig.name} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
