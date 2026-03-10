'use client'

import Image from 'next/image'
import { useState } from 'react'

const faqs = [
  {
    question: 'What types of clinics is A2V2.ai built for?',
    answer:
      'A2V2.ai is built for longevity clinics, functional medicine practices, HRT clinics, health optimization practices, and any medical practice that relies on ongoing patient protocols and long-term retention.',
  },
  {
    question: 'How is this different from my EHR\u2019s built-in messaging?',
    answer:
      'EHR messaging is basic \u2014 appointment reminders and generic blasts. A2V2.ai uses AI to personalize every message based on each patient\u2019s treatment stage, adherence patterns, and engagement history. It predicts drop-offs and acts automatically.',
  },
  {
    question: 'Is A2V2.ai HIPAA compliant?',
    answer:
      'Yes. 100% HIPAA-compliant. Patient data stays in your secure environment and is never used to train external AI models. We sign a BAA with every client.',
  },
  {
    question: 'How long does setup take?',
    answer:
      'Most practices go live in under 2 weeks. Our engineering team handles integration with your existing systems.',
  },
  {
    question: 'Do we need to replace our existing systems?',
    answer:
      'No. A2V2.ai sits on top of your current EHR/EMR, lab systems, and payment processors. No migrations required.',
  },
  {
    question: 'What does the free audit include?',
    answer:
      'A 30-minute review of your current patient retention metrics, exact drop-off points, revenue being left on the table, and a custom projection for what A2V2.ai would recover. No pitch, no obligation.',
  },
]

export default function RetentionFAQ() {
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
