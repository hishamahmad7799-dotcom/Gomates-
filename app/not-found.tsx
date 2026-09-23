import React from 'react'
import Link from 'next/link'
import { Compass, ArrowLeft } from 'lucide-react'
import { siteConfig } from '@/config/site'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-dark-bg flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-accent-primary/10 border border-accent-primary/30 flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 text-accent-primary animate-spin-slow" />
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-accent-primary block mb-2">
          404 ERROR
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          Trail Not Found
        </h1>
        <p className="text-sm text-gray-muted mb-8 leading-relaxed">
          The trip page or route you are looking for does not exist or has been updated.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-accent-primary hover:bg-accent-secondary rounded-full shadow-glow-accent transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </main>
  )
}
