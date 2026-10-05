import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { RefreshCw, AlertTriangle, CheckCircle, ArrowLeft, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: `Cancellation & Refund Policy | ${siteConfig.name}`,
  description: `Cancellation and Refund Policy for ${siteConfig.name} group trips. Clear, transparent terms for trip cancellations, reschedules, and seat transfers.`,
}

export default function CancellationPolicyPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-gray-200 pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-primary hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="mb-12 border-b border-dark-border pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 rounded-full bg-accent-primary/10 border border-accent-primary/30">
            <RefreshCw className="w-4 h-4 text-accent-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent-primary">
              TRANSPARENT TERMS
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Cancellation &amp; Refund Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            We understand plans can change. Here is our straightforward, fair cancellation policy for all Gomates expeditions.
          </p>
        </div>

        {/* Policy Highlights / Timeline Table */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-gray-300">
          <section className="p-6 sm:p-8 rounded-2xl glass-panel border border-dark-border">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-accent-primary shrink-0" />
              1. Standard Cancellation Slabs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-dark-elevated border border-dark-border">
                <span className="text-xs font-bold uppercase text-accent-primary block mb-1">30+ Days Before Trip</span>
                <p className="text-2xl font-black text-white mb-2">90% Refund</p>
                <p className="text-xs text-gray-400 leading-normal">
                  Or 100% trip credit voucher valid for 1 full year on any future Gomates trip.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-dark-elevated border border-dark-border">
                <span className="text-xs font-bold uppercase text-accent-primary block mb-1">15 - 30 Days Before Trip</span>
                <p className="text-2xl font-black text-white mb-2">50% Refund</p>
                <p className="text-xs text-gray-400 leading-normal">
                  Or 75% trip credit voucher valid for 6 months.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-dark-elevated border border-dark-border">
                <span className="text-xs font-bold uppercase text-accent-primary block mb-1">Less than 15 Days</span>
                <p className="text-2xl font-black text-white mb-2">No Refund</p>
                <p className="text-xs text-gray-400 leading-normal">
                  Transports, homestays, and permits are 100% pre-booked and committed.
                </p>
              </div>
            </div>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl glass-panel border border-dark-border">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-accent-primary shrink-0" />
              2. Seat Transfer Option (Hassle-Free)
            </h2>
            <p className="text-gray-300 mb-3">
              Unable to make it at the last minute? You can transfer your seat slot to a friend, family member, or colleague at <strong className="text-white">NO extra charge</strong> up to 48 hours prior to departure.
            </p>
            <p className="text-xs text-gray-400">
              Simply inform your Trip Lead via WhatsApp with your replacement traveler&apos;s name and government ID details.
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl glass-panel border border-dark-border">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <AlertTriangle className="w-5 h-5 text-accent-primary shrink-0" />
              3. Weather, Landslides &amp; Force Majeure
            </h2>
            <p className="text-gray-300 mb-3">
              Mountain weather in regions like Himachal, Spiti, and Ladakh can be unpredictable. In the rare event of severe weather, road blockades, or government restrictions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 pl-2">
              <li>Our experienced Trip Lead will arrange safe alternative scenic routes or stays.</li>
              <li>If a trip is cancelled prior to departure due to natural disasters or road blockades, full trip credits (100% voucher value) will be provided for future dates.</li>
            </ul>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl glass-panel border border-dark-border">
            <h2 className="text-xl font-bold text-white mb-4">4. How to Request a Cancellation</h2>
            <p className="text-gray-400 mb-4">
              To process a cancellation or seat transfer, send a direct written message to our team via WhatsApp or Email:
            </p>
            <div className="space-y-1 text-sm font-semibold text-white">
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-accent-primary hover:underline">{siteConfig.email}</a></p>
              <p>WhatsApp Support: <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">{siteConfig.whatsappDisplay}</a></p>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Approved refunds are credited back to your original payment method or bank account within 5–7 working days.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
