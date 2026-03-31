'use client'

import type { ReactNode } from 'react'
import FeatureList, { type FeatureItem } from './FeatureList'

interface FeatureSectionProps {
  number: string
  pill: string
  title: string
  subtitle: string
  bgImage: string
  mockup: ReactNode
  features: FeatureItem[]
  divider?: boolean
  reverse?: boolean
}

export default function FeatureSection({
  number,
  pill,
  title,
  subtitle,
  bgImage,
  mockup,
  features,
  divider = false,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <section className={`bg-white py-14 md:py-20 ${divider ? 'border-t border-gray-100' : ''}`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">

        <div data-animate="" className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono text-gray-400">{number}</span>
            <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
              {pill}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug max-w-[540px]">
            {title}
          </h2>
          <p className="mt-2.5 text-base text-gray-500 max-w-[500px] leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div
          data-animate=""
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          style={{ transitionDelay: '100ms' }}
        >
          {/* Card — always first in DOM so mobile shows it on top */}
          <div className={`relative rounded-xl overflow-hidden ${reverse ? 'md:order-last' : ''}`}>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bgImage})` }}
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative p-8">
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                }}
              >
                {mockup}
              </div>
            </div>
          </div>

          {/* Feature list */}
          <div className={`${reverse ? 'md:order-first' : ''}`}>
            <FeatureList features={features} />
          </div>
        </div>

      </div>
    </section>
  )
}
