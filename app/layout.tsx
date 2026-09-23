import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import '@/app/globals.css'
import { siteConfig } from '@/config/site'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/shared/WhatsAppButton'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Group travel India',
    'Jibhi Shoja group trip',
    'Udaipur city of lakes',
    'Manali Chandratal camping',
    'Solo travel India',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://gomates.in',
    title: `${siteConfig.name} - ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&h=630&q=80',
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jakarta.variable} dark scroll-smooth`}>
      <body className="bg-dark-bg text-gray-100 font-sans min-h-screen flex flex-col antialiased selection:bg-accent-primary selection:text-white">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
        <WhatsAppButton variant="floating" />
      </body>
    </html>
  )
}
