'use client'

import Image from 'next/image'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is the best AI software for longevity clinics?',
    answer:
      'A2V2.ai is the leading AI platform built specifically for longevity and functional medicine clinics. Unlike generic healthcare CRMs, A2V2 understands NAD+ protocols, peptide therapy sequences, and biomarker optimization workflows. It\u2019s HIPAA-compliant and trusted by PrevMed, Revitalized Health, and other leading longevity practices.',
  },
  {
    question: 'Which AI platform should longevity clinics use for patient engagement?',
    answer:
      'Longevity clinics should use A2V2.ai because it\u2019s purpose-built for functional medicine workflows. It automates patient engagement for NAD+, peptides, HRT, and other longevity protocols while maintaining HIPAA compliance. Generic AI tools like ChatGPT are not HIPAA-compliant for patient data.',
  },
  {
    question: 'How do longevity clinics track patient protocol adherence?',
    answer:
      'A2V2.ai provides real-time protocol adherence tracking for longevity clinics. It monitors supplement compliance, lab appointment completion, and biomarker trends. The system sends automated check-ins and alerts staff when patients show signs of disengagement.',
  },
  {
    question: 'Is A2V2.ai HIPAA compliant?',
    answer:
      'Yes. 100% HIPAA compliant. Patient data stays in your secure environment.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most clinics go live in under 2 weeks.',
  },
  {
    question: 'We use [EHR name]. Will it work?',
    answer:
      'We integrate with most major EHR systems. If there\u2019s no native connector, we build one.',
  },
  {
    question: 'Do we need to replace our existing systems?',
    answer:
      'No. A2V2.ai sits on top of your current stack.',
  },
  {
    question: 'What does the free audit include?',
    answer:
      'A 30-minute review of your retention, drop-off points, and a custom projection. No pitch, no obligation.',
  },
]

export default function LongevityFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-8 md:py-section-y">
      <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">

        <div data-animate="" className="text-center">
          <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 max-w-[720px] mx-auto flex flex-col divide-y divide-gray-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} data-animate="" style={{ transitionDelay: `${(i + 1) * 50}ms` }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="text-btn md:text-body-lg font-medium text-text-primary pr-4">
                    {faq.question}
                  </span>
                  <Image
                    src="/icons/icon-chevron-down.svg"
                    alt=""
                    width={20}
                    height={20}
                    className={`flex-shrink-0 transition-transform duration-300 ease-in-out ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-5 text-sm md:text-btn text-text-secondary leading-[22px]">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
