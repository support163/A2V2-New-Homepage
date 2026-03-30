'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Will AI replace my personal touch?',
    a: "No. AI handles routine Q&A, the DMs you'd answer anyway. You own the relationship. Focus on high-value 1:1 work.",
  },
  {
    q: 'What if AI gives bad advice?',
    a: 'AI is trained only on your content: your expertise, your tone, your methodology. You can review conversations and adjust training anytime. Built-in quality control checks responses before sending.',
  },
  {
    q: 'Why would followers pay when I give free content?',
    a: 'Free content is generic, one-to-many. PayForAccess is personalized, one-to-one. Followers pay for advice specific to their situation, like the difference between watching a workout video and getting a custom plan.',
  },
  {
    q: 'Will this cannibalize my course or membership sales?',
    a: "PayForAccess is designed as a top-of-funnel tool. $4.99 gets people in the door, they experience your expertise, and the AI encourages upgrades to your full offerings. It's built to complement, not compete.",
  },
  {
    q: 'How long does setup take?',
    a: '15 minutes. Upload content, customize AI, share link. AI trains in background (24–48 hours). After that, it\'s designed to run passively.',
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[720px] px-6 md:px-12">

        <h2
          data-animate=""
          className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12"
        >
          Common questions
        </h2>

        <div className="flex flex-col divide-y divide-gray-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} data-animate="" style={{ transitionDelay: `${(i + 1) * 50}ms` }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                >
                  <span className="text-base font-medium text-gray-900 pr-6">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`flex-shrink-0 text-gray-400 transition-transform duration-300 ${
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
                    <p className="pb-5 text-sm text-gray-500 leading-relaxed">
                      {faq.a}
                    </p>
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
