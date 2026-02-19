'use client'

import Image from 'next/image'
import { useState } from 'react'

const faqs = [
  {
    question: 'How does the AI know what to say?',
    answer:
      'You are in full control. The AI is trained only on the data you provide\u2014such as your website URL, PDF documents, or YouTube videos. It does not use \u201Coutside\u201D internet knowledge to answer questions about your business, ensuring it stays on brand.',
  },
  {
    question: 'Can the chatbot hallucinate or lie to my audience?',
    answer:
      'We use strict \u201Cguardrails\u201D to minimize hallucinations. If the AI doesn\u2019t know the answer based on the data you uploaded, it is programmed to say, \u201CI don\u2019t have that information right now,\u201D rather than making something up.',
  },
  {
    question: 'Do I need to know how to code to train it?',
    answer:
      'Not at all. If you can copy and paste a link or upload a file, you can train your AI. The setup process typically takes less than 5 minutes.',
  },
  {
    question: 'Is my data used to train public AI models?',
    answer:
      'Never. Your data remains isolated in your private environment. We do not sell your data or use your proprietary content to train public models (like ChatGPT).',
  },
  {
    question: 'Who owns the conversations/leads the AI collects?',
    answer:
      'You do. All chat logs, collected emails, and phone numbers belong to you. You can export your data at any time.',
  },
  {
    question: 'Can I embed the chatbot on my existing website?',
    answer:
      'Yes. On the Starter plan and above, we provide a simple code snippet that allows you to add your custom AI chatbot as a widget on your WordPress, Squarespace, or Webflow site.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-background py-8 md:py-section-y">
      <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">

        <div data-animate="" className="text-center">
          <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
            Unsure which plan is right for you?
          </h2>
          <p className="mt-4 text-btn md:text-body-lg text-text-secondary max-w-[600px] mx-auto">
            Every A2V2 subscription includes our Knowledge Training, an AI chatbot builder, and a custom bio‑page. If you still have questions, our team is just a click away.
          </p>
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
