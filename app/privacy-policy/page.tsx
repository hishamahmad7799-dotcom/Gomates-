import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.name}`,
  description: `Privacy Policy for ${siteConfig.name}. Learn how we handle and protect your personal information on our group trips.`,
}

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="w-4 h-4 text-accent-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent-primary">
              LEGAL & TRANSPARENCY
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Last Updated: September 2026 • Effective for all Gomates trips & website visitors.
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="space-y-10 text-sm sm:text-base leading-relaxed text-gray-300">
          <section className="p-6 sm:p-8 rounded-2xl glass-panel border border-dark-border">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <Eye className="w-5 h-5 text-accent-primary shrink-0" />
              1. Information We Collect
            </h2>
            <p className="mb-4">
              To provide safe, seamless, and memorable group travel experiences, {siteConfig.name} collects essential information when you enquire or register for a trip:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 pl-2">
              <li><strong className="text-white">Personal Contact Details:</strong> Full Name, Email Address, Phone Number, and City of residence.</li>
              <li><strong className="text-white">Identity Verification & Permits:</strong> Government ID details (Aadhaar, Passport) strictly required for high-altitude inner-line permits (e.g., Spiti, Ladakh, Jalori Pass).</li>
              <li><strong className="text-white">Emergency Contacts:</strong> Name and phone number of your designated emergency contact person.</li>
              <li><strong className="text-white">Health & Medical Needs:</strong> Basic fitness declaration and dietary or medical requirements relevant to mountain trips.</li>
            </ul>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl glass-panel border border-dark-border">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-accent-primary shrink-0" />
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use collected details solely for trip operations and passenger safety:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-400 pl-2">
              <li>Organizing transport, hotel bookings, homestays, and local lead assignments.</li>
              <li>Procuring official government forest & border permits for restricted travel zones.</li>
              <li>Adding you to the official batch WhatsApp group prior to departure for coordination.</li>
              <li>Reaching out in case of weather delays, itinerary updates, or emergency situations.</li>
            </ul>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl glass-panel border border-dark-border">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-accent-primary shrink-0" />
              3. Data Protection & Third-Party Sharing
            </h2>
            <p className="mb-4">
              Your privacy is paramount to us. <strong className="text-white">{siteConfig.name} NEVER sells, rents, or trades your personal information with any commercial marketing third parties.</strong>
            </p>
            <p className="text-gray-400">
              Information is shared strictly on a need-to-know basis with official local authorities (forest department, magistrate permit offices) and trip leads solely for securing legal entry permits and ensuring traveler safety.
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl glass-panel border border-dark-border">
            <h2 className="text-xl font-bold text-white mb-4">4. Photography & Media Content</h2>
            <p className="text-gray-400">
              During group trips, our team may capture photos and short videos for group memories and community updates. If you prefer not to appear in public community photos or social channels, simply inform your Trip Captain before departure.
            </p>
          </section>

          <section className="p-6 sm:p-8 rounded-2xl glass-panel border border-dark-border">
            <h2 className="text-xl font-bold text-white mb-4">5. Contact Us Regarding Your Data</h2>
            <p className="mb-4 text-gray-400">
              If you have any questions, concerns, or requests regarding this Privacy Policy or wish to update your stored contact details, feel free to reach out to us:
            </p>
            <div className="space-y-1 text-sm font-semibold text-white">
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="text-accent-primary hover:underline">{siteConfig.email}</a></p>
              <p>WhatsApp: <a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-accent-primary hover:underline">{siteConfig.whatsappDisplay}</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
