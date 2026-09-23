'use client'

import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { FAQItem } from '@/types/trip'

interface FAQAccordionProps {
  faqs: FAQItem[]
  title?: string
  eyebrow?: string
  className?: string
}

export default function FAQAccordion({
  faqs,
  title = 'Frequently Asked Questions',
  eyebrow = 'GOT QUESTIONS?',
  className = '',
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!faqs || faqs.length === 0) return null

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className={`py-16 bg-dark-bg border-t border-dark-border ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {eyebrow && (
            <span className="text-xs font-bold uppercase tracking-widest text-accent-primary block mb-2">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl font-extrabold text-white">{title}</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx

            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-dark-border overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-dark-elevated/50 transition-colors"
                >
                  <span className="font-bold text-base sm:text-lg text-white flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-accent-primary shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`p-1.5 rounded-full bg-dark-bg transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-accent-primary' : 'text-gray-400'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-gray-300 border-t border-dark-border/40 leading-relaxed animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
