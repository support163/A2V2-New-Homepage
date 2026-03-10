'use client'

import Image from 'next/image'
import { useState } from 'react'

const faqs = [
  {
    question: 'How is A2V2.ai different from a CRM like Salesforce or HubSpot?',
    answer:
      'Traditional CRMs are built for general sales and marketing. A2V2.ai is purpose-built for functional medicine, with native support for supplement protocols, biomarker tracking, and healthcare-specific compliance.',
  },
  {
    question: 'Is A2V2.ai HIPAA compliant?',
    answer:
      'Yes. 100% HIPAA-compliant. Patient data stays in your secure environment and is never used to train external AI models. We sign a BAA with every client.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most practices go live in under 2 weeks. Our engineering team handles the integration with your existing systems.',
  },
  {
    question: 'Do we need to replace our existing systems?',
    answer:
      'No. A2V2.ai sits on top of your current EHR/EMR, lab systems, and payment processors.',
  },
  {
    question: 'Can we customize messaging and workflows?',
    answer:
      'Absolutely. Every practice is different. We customize tone, frequency, protocols, and workflows to match your practice style.',
  },
  {
    question: 'What does the free audit include?',
    answer:
      'A 30-minute review of your current patient retention, drop-off points, and a custom projection for what A2V2.ai would recover. No pitch, no obligation.',
  },
]

export default function FunctionalMedicineFAQ() {
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
