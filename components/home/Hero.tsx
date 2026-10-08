"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Compass } from "lucide-react";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import InstagramButton from "@/components/shared/InstagramButton";


export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-dark-bg">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.03 }}
          transition={{
            duration: 16,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="relative w-full h-full will-change-transform transform-gpu"
        >
          <Image
            src="/images/hero-bg.jpg"
            alt="Hiker trekking high mountain ridge above clouds"
            fill
            priority
            unoptimized
            quality={100}
            sizes="100vw"
            className="object-cover object-[25%_65%] sm:object-[30%_center] md:object-center opacity-85 sm:opacity-90"
          />
        </motion.div>

        {/* Enhanced Contrast Overlays for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-dark-bg/60 pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette from-black/40 via-transparent to-dark-bg/80 pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow Badge - Mobile Optimized Compact White Pill */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1 sm:py-1.5 mb-5 sm:mb-6 rounded-full bg-white/95 border border-white/80 backdrop-blur-md shadow-xl max-w-[92vw] sm:max-w-none">
          <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#DA1526] animate-spin-slow shrink-0" />
          <span className="text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wider sm:tracking-widest text-[#0B0C0E] whitespace-nowrap">
            ADVENTURE <span className="text-[#DA1526]">•</span> FRIENDS <span className="text-[#DA1526]">•</span> MEMORIES
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-tight mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
          LEAVE ROUTINE. <br />
          <span className="text-[#FF1E38] font-black tracking-tight drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
            FIND SOMETHING REAL.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-100 font-medium leading-relaxed mb-10 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Discover curated group adventures across India’s rawest landscapes,
          ancient cultures, and hidden mountain trails with like-minded
          travelers.
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
            <InstagramButton
              text="Instagram"
              size="lg"
              variant="outline"
              className="flex-1 sm:flex-initial justify-center"
            />
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
  );
}




