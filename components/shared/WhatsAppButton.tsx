'use client'

import React from 'react'
import { getWhatsAppUrl } from '@/lib/whatsapp'

interface WhatsAppButtonProps {
  tripName?: string;
  customMessage?: string;
  text?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'floating';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 2.159.684 4.156 1.849 5.795L2.5 21.5l3.829-1.31A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zM4.004 12A7.996 7.996 0 1112 19.996c-1.57 0-3.037-.45-4.281-1.232l-.307-.193-2.26.772.775-2.214-.212-.321A7.954 7.954 0 014.004 12z"/>
    </svg>
  )
}

export default function WhatsAppButton({
  tripName,
  customMessage,
  text = 'Join on WhatsApp',
  variant = 'primary',
  className = '',
  size = 'md',
}: WhatsAppButtonProps) {
  const url = getWhatsAppUrl(tripName, customMessage)

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
      'bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-glow-emerald hover:shadow-lg transition-all duration-300 transform active:scale-95',
    secondary:
      'bg-accent-primary hover:bg-opacity-90 text-white shadow-glow-accent transition-all duration-300 transform active:scale-95',
    outline:
      'border border-emerald-500/40 hover:border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300',
    floating:
      'fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce',
  }

  if (variant === 'floating') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className={`${variantClasses.floating} ${className}`}
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    )
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full transition-all cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <WhatsAppIcon className={`${iconSizes[size]} shrink-0`} />
      <span>{text}</span>
    </a>
  )
}
