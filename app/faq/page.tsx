import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  HelpCircle,
  ArrowLeft,
  Users,
  ShieldCheck,
  CreditCard,
  Luggage,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: `Frequently Asked Questions (FAQs) | ${siteConfig.name}`,
  description: `Find answers to common questions about ${siteConfig.name} group trips, safety, payments, packing list, and travel experience.`,
};

export default function FAQPage() {
  const faqs = [
    {
      icon: Users,
      question: "Can I join solo? Who usually travels with Gomates?",
      answer:
        "Absolutely! Over 60% of our travelers join solo. Gomates is built specifically for solo travelers, friends, and small groups aged 18–35+ who want to meet like-minded people. By day 1, strangers become a close-knit squad.",
    },
    {
      icon: ShieldCheck,
      question: "Is it safe for solo female travelers?",
      answer:
        "100% safe. Safety is our top priority. We select verified, safe homestays/resorts with attached bathrooms, assign experienced native trip leads, and maintain an inclusive, respectful group environment on all trips.",
    },
    {
      icon: CreditCard,
      question: "How do I confirm my seat booking?",
      answer:
        "You can reserve your seat with a small advance booking amount (usually ₹2,000 – ₹3,000). The remaining balance can be paid prior to departure or on day 1 of the trip via UPI, Bank Transfer, or Cash.",
    },
    {
      icon: MapPin,
      question: "Where do trips start and end?",
      answer:
        "Most of our Himachal, Uttarakhand, and Spiti trips have pickup points in Aligarh, Delhi, or Chandigarh in comfortable AC Urbania / Tempo Travelers or SUVs. Precise pickup locations and timings are shared in your batch WhatsApp group.",
    },
    {
      icon: Luggage,
      question: "What basic items should I pack for mountain trips?",
      answer:
        "We recommend packing lightweight warm layers (fleece jackets, thermals for night), comfortable trekking or sports shoes, personal toiletries, sunscreen, power bank, and a government photo ID card.",
    },
    {
      icon: HelpCircle,
      question:
        "What happens if a trip is delayed due to weather or landslides?",
      answer:
        "Our mountain leads monitor weather and road conditions continuously. If roads are blocked, alternative scenic routes or safe stays are arranged promptly. Safety always comes first.",
    },
  ];

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
            <HelpCircle className="w-4 h-4 text-accent-primary" />
            <span className="text-xs font-bold uppercase tracking-widest text-accent-primary">
              GOT QUESTIONS? WE&apos;VE GOT ANSWERS
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Everything you need to know about joining a Gomates group adventure.
          </p>
        </div>

        {/* FAQ Cards */}
        <div className="space-y-6">
          {faqs.map((faq, idx) => {
            const IconComp = faq.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl glass-panel border border-dark-border hover:border-accent-primary/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 p-8 rounded-3xl glass-panel border border-dark-border text-center flex flex-col items-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Still have a question?
          </h3>
          <p className="text-sm text-gray-400 mb-6 max-w-md">
            Our team is always here to help you pick the right trip and clear
            all your doubts.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hi!%20I%20have%20a%20question%20about%20Gomates%20trips.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-accent-primary hover:bg-accent-secondary rounded-full shadow-glow-accent transition-all duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
