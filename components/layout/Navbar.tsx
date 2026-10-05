'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/config/site'
import WhatsAppButton from '@/components/shared/WhatsAppButton'
import InstagramButton from '@/components/shared/InstagramButton'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav border-b border-dark-border py-3 shadow-xl'
          : 'bg-gradient-to-b from-dark-bg/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-accent-primary shadow-glow-accent group-hover:scale-105 transition-transform duration-300 shrink-0 bg-[#DA1526]">
              <Image
                src="/images/logo.jpg"
                alt="Gomates Logo"
                fill
                className="object-cover scale-[1.18]"
                priority
              />
            </div>
            <span className="text-2xl sm:text-3xl font-black tracking-wider text-white">
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-wider text-gray-muted hover:text-white transition-colors"
            >
              HOME
            </Link>
            <Link
              href="/#trips"
              className="text-xs font-bold uppercase tracking-wider text-gray-muted hover:text-white transition-colors"
            >
              UPCOMING TRIPS
            </Link>
            <Link
              href="/about"
              className="text-xs font-bold uppercase tracking-wider text-gray-muted hover:text-white transition-colors"
            >
              ABOUT US
            </Link>
            <Link
              href="/faq"
              className="text-xs font-bold uppercase tracking-wider text-gray-muted hover:text-white transition-colors"
            >
              FAQS
            </Link>
          </nav>

          {/* Desktop CTA: Instagram on Left of WhatsApp */}
          <div className="hidden md:flex items-center gap-3">
            <InstagramButton text="Instagram" size="sm" variant="outline" />
            <WhatsAppButton text="Enquire on WhatsApp" size="sm" variant="primary" />
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-muted hover:text-white hover:bg-dark-surface focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-accent-primary" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-dark-border py-6 px-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-5">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold uppercase tracking-wider text-white hover:text-accent-primary flex items-center justify-between"
            >
              <span>HOME</span>
              <ArrowRight className="w-4 h-4 text-gray-muted" />
            </Link>
            <Link
              href="/#trips"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold uppercase tracking-wider text-white hover:text-accent-primary flex items-center justify-between"
            >
              <span>UPCOMING TRIPS</span>
              <ArrowRight className="w-4 h-4 text-gray-muted" />
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold uppercase tracking-wider text-white hover:text-accent-primary flex items-center justify-between"
            >
              <span>ABOUT US</span>
              <ArrowRight className="w-4 h-4 text-gray-muted" />
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-bold uppercase tracking-wider text-white hover:text-accent-primary flex items-center justify-between"
            >
              <span>FAQS</span>
              <ArrowRight className="w-4 h-4 text-gray-muted" />
            </Link>

            <div className="pt-4 border-t border-dark-border flex flex-col gap-3">
              <InstagramButton
                text="Instagram"
                size="md"
                variant="outline"
                className="w-full justify-center"
              />
              <WhatsAppButton
                text="WhatsApp"
                size="md"
                variant="primary"
                className="w-full justify-center"
              />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
