'use client'

import React from 'react'
import { Instagram } from 'lucide-react'
import { siteConfig } from '@/config/site'

interface InstagramButtonProps {
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'floating' | 'icon';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function InstagramButton({
  text = 'Instagram',
  variant = 'primary',
  className = '',
  size = 'md',
}: InstagramButtonProps) {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-xs font-semibold gap-1.5',
    md: 'px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold gap-1.5 sm:gap-2',
    lg: 'px-4.5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-base font-bold gap-2 sm:gap-2.5',
  }

  const iconSizes = {
    sm: 'w-3.5 h-3.5 sm:w-4 sm:h-4',
    md: 'w-4 h-4 sm:w-5 sm:h-5',
    lg: 'w-4 h-4 sm:w-6 sm:h-6',
  }

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:from-purple-500 hover:via-pink-500 hover:to-rose-400 text-white shadow-lg transition-all duration-300 transform active:scale-95',
    secondary:
      'bg-accent-primary hover:bg-opacity-90 text-white shadow-glow-accent transition-all duration-300 transform active:scale-95',
    outline:
      'border border-pink-500/40 hover:border-pink-500 text-pink-400 hover:bg-pink-500/10 transition-all duration-300',
    floating:
      'bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 text-white p-3.5 rounded-full shadow-2xl hover:scale-110 transition-all duration-300',
    icon:
      'p-2.5 rounded-full bg-dark-surface hover:bg-dark-elevated text-pink-400 hover:text-pink-300 border border-dark-border transition-all duration-300',
  }

  if (variant === 'floating') {
    return (
      <a
        href={siteConfig.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        className={`${variantClasses.floating} ${className}`}
      >
        <Instagram className="w-6 h-6" />
      </a>
    )
  }

  return (
    <a
      href={siteConfig.instagramUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full transition-all cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <Instagram className={`${iconSizes[size]} shrink-0`} />
      {text && <span>{text}</span>}
    </a>
  )
}
