'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'

const tabs = [
  {
    id: 'realestate',
    label: 'Real Estate',
    icon: '/icons/house.svg',
    image: '/images/usecase-realestate.png',
    title: 'Your 24/7 Inside Sales Agent.',
    description:
      'Your AI qualifies every lead, answers listing questions, and schedules private viewings — automatically, around the clock.',
  },
  {
    id: 'creators',
    label: 'Creators',
    icon: '/icons/user.svg',
    image: '/images/usecase-creators.png',
    title: 'Scale your personal brand on autopilot.',
    description:
      'Your AI twin engages fans, recommends your products and services, and books high-ticket calls 24/7 — so you can focus on creating.',
  },
  {
    id: 'healthcare',
    label: 'Healthcare',
    icon: '/icons/heart-plus.svg',
    image: '/images/usecase-healthcare.png',
    title: 'Automated intake and triage, fully compliant.',
    description:
      'Securely answer FAQs, pre-screen appointments, and route urgent needs — all within a HIPAA-ready environment.',
  },
]

export default function UseCasesSection() {
  // activeId controls which tab button is highlighted (updates instantly)
  const [activeId, setActiveId] = useState('realestate')
  // shownId controls the actual card content (updates after fade-out)
  const [shownId, setShownId] = useState('realestate')
  const [visible, setVisible] = useState(true)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function switchTab(id: string) {
    if (id === activeId) return
    if (timerRef.current) clearTimeout(timerRef.current)
    setActiveId(id)   // highlight new tab immediately
    setVisible(false) // fade out current content
    timerRef.current = setTimeout(() => {
      setShownId(id)  // swap content while invisible
      setVisible(true) // fade in new content
    }, 220)
  }

  const shown = tabs.find((t) => t.id === shownId)!

  return (
    <section className="bg-background py-8 md:py-section-y">
      <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">

        {/* Heading — centered */}
        <div data-animate="" className="text-center">
          <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
            Powering the next generation of experts.
          </h2>
          <p className="mt-4 text-btn md:text-body-lg text-text-secondary max-w-[680px] mx-auto">
            From viral creators to licensed clinicians, A2V2 adapts to your
            specific workflow. Toggle below to see how our engine transforms to
            meet your industry&apos;s unique demands.
          </p>
        </div>

        {/* Tabs */}
        <div data-animate="" style={{ transitionDelay: '100ms' }} className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 bg-gray-100 rounded-btn p-1 w-full md:w-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`flex flex-1 md:flex-none items-center justify-center gap-2 px-3 md:px-btn-x py-btn-y rounded-btn text-btn font-medium transition-colors ${
                  activeId === tab.id
                    ? 'bg-surface text-white shadow-sm'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                <Image
                  src={tab.icon}
                  alt=""
                  width={16}
                  height={16}
                  className={activeId === tab.id ? 'invert' : 'opacity-50'}
                />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content card */}
        <div data-animate="" style={{ transitionDelay: '200ms' }} className="mt-6 rounded-[20px] bg-surface overflow-hidden flex flex-col md:min-h-[600px]">

          {/* Animated content wrapper */}
          <div
            className={`flex-1 flex flex-col transition-all duration-300 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}
          >
            {/* Image area — mobile: cropped 4:3 fill; desktop: flex-1 with padding */}
            <div className="pt-4 aspect-[4/3] overflow-hidden md:aspect-auto md:flex-1 md:min-h-[420px] md:flex md:items-end md:justify-center md:px-6 md:pt-8">
              <Image
                src={shown.image}
                alt={shown.title}
                width={1200}
                height={540}
                className="w-full h-full object-cover object-center drop-shadow-2xl md:h-auto md:object-contain md:object-bottom"
              />
            </div>

            {/* Text — bottom left */}
            <div className="px-card-p pb-card-p pt-4">
              <h3 className="text-btn md:text-body-lg font-bold text-white">
                {shown.title}
              </h3>
              <p className="mt-2 text-[12px] md:text-btn text-white/60 leading-[22px] max-w-[680px]">
                {shown.description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
