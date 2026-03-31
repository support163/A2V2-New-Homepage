'use client'

import Image from 'next/image'
import { useState } from 'react'

const faqs = [
  {
    question: 'How does the AI know about my listings?',
    answer:
      'You upload your listing details, property information, and FAQs during setup. You can also paste your website URL and the AI will learn from it. Whenever you add or update a listing, the AI updates automatically.',
  },
  {
    question: 'Can the AI schedule property viewings?',
    answer:
      'Yes. A2V2.ai is designed to offer available time slots to qualified leads and book viewings directly into your calendar. No back-and-forth coordination needed.',
  },
  {
    question: 'Does it work with my existing real estate tools?',
    answer:
      'A2V2.ai is designed to work alongside your existing tools: your website, social media, and calendar. It\u2019s not designed to replace your CRM but to handle the front-end lead engagement that feeds into your existing workflow.',
  },
  {
    question: 'Can I customize what the AI says?',
    answer:
      'Absolutely. You control the tone, the qualification questions, which listings to highlight, and how the AI represents your brand. It sounds like you, not like a generic chatbot.',
  },
  {
    question: 'How is this different from a chatbot on my website?',
    answer:
      'Most website chatbots are basic Q&A tools with scripted responses. A2V2.ai is an AI that actually understands your listings, qualifies leads intelligently, and books viewings. Plus it lives on your bio link so it works across all your social channels, not just your website.',
  },
  {
    question: 'How quickly can I get started?',
    answer:
      'Most agents are live within minutes. Upload your listings, customize your profile, and share your link. No technical setup required.',
  },
]

export default function RealEstateFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-8 md:py-section-y">
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
