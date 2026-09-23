'use client'

import React from 'react'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {eyebrow && (
        <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-widest text-accent-primary bg-accent-primary/10 border border-accent-primary/20 rounded-full">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-gray-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
