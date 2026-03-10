'use client'

import Image from 'next/image'
import { useState } from 'react'

const faqs = [
  {
    question: 'What makes A2V2.ai different from other healthcare AI platforms?',
    answer:
      'A2V2.ai was built exclusively for healthcare from the ground up \u2014 not adapted from a general-purpose AI. We natively support clinical protocols (NAD+, HRT, peptides, supplements), integrate with EHR systems, and use private LLM deployment so your patient data never touches public models.',
  },
  {
    question: 'Can I use ChatGPT or Claude for patient engagement?',
    answer:
      'No \u2014 not safely. ChatGPT, Claude, and Gemini are not HIPAA-compliant for patient data management. Using them for patient communication creates legal liability with potential fines up to $1.5M per violation. A2V2.ai is 100% HIPAA-compliant with private LLM deployment.',
  },
  {
    question: 'Is A2V2.ai HIPAA compliant?',
    answer:
      'Yes. 100% HIPAA-compliant with end-to-end AES-256 encryption, private LLM deployment, BAA provided, quarterly penetration testing, and complete audit logs. Your PHI never leaves your secure environment.',
  },
  {
    question: 'What specialties does A2V2.ai support?',
    answer:
      'Longevity clinics, functional medicine practices, HRT clinics, health optimization practices, executive health programs, and any medical practice that relies on ongoing treatment protocols and long-term patient retention.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Most practices go live in under 2 weeks. Our dedicated implementation team handles EHR integration, protocol mapping, and staff training.',
  },
  {
    question: 'Do we need to replace our existing systems?',
    answer:
      'No. A2V2.ai sits on top of your current stack \u2014 EHR/EMR, lab systems, communication tools, and payment processors. No migrations required.',
  },
  {
    question: 'What does the free audit include?',
    answer:
      'A 30-minute review of your current patient retention, drop-off patterns, revenue impact, and a custom projection showing what A2V2.ai would recover for your specific practice. No pitch, no obligation.',
  },
]

export default function HealthcareAiFAQ() {
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
