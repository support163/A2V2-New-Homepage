'use client'

import Image from 'next/image'
import { useState } from 'react'

type Feature = { text: string; included: boolean }

type Plan = {
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  features: Feature[]
  cta: string
  ctaStyle: 'outline' | 'filled'
  badge?: string
}

const plans: Plan[] = [
  {
    name: 'Free',
    description: 'Individual creators, small YouTubers, or those just getting started.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      { text: '1 AI clone', included: true },
      { text: '100 Credits Per Month', included: true },
      { text: '10 Documents Per Chatbot', included: true },
      { text: '1M Characters Per Chatbot', included: true },
      { text: 'Public Access', included: false },
      { text: 'Access to Premium models', included: false },
      { text: 'No Teams Option', included: false },
    ],
    cta: 'Get Started',
    ctaStyle: 'outline',
  },
  {
    name: 'Starter',
    description: 'Individual creators, small YouTubers, or those just getting started.',
    monthlyPrice: 19.99,
    yearlyPrice: 15.99,
    features: [
      { text: '1 AI clone', included: true },
      { text: '1000 Credits Per Month', included: true },
      { text: '100 Documents Per Chatbot', included: true },
      { text: '15M Characters Per Chatbot', included: true },
      { text: 'Public Access', included: true },
      { text: 'Access to Premium models', included: true },
      { text: 'No Teams Option', included: false },
    ],
    cta: 'Upgrade',
    ctaStyle: 'outline',
    badge: 'Best value',
  },
  {
    name: 'Pro',
    description: 'Growing channels, small businesses, or creators with more content.',
    monthlyPrice: 39.99,
    yearlyPrice: 31.99,
    features: [
      { text: '2 AI clone', included: true },
      { text: '2000 Credits Per Month', included: true },
      { text: 'Unlimited Documents Per Chatbot', included: true },
      { text: '35M Characters Per Chatbot', included: true },
      { text: 'Public Access', included: true },
      { text: 'Access to Premium models', included: true },
      { text: 'Up to 3 team members', included: true },
    ],
    cta: 'Upgrade',
    ctaStyle: 'filled',
    badge: 'Recommended',
  },
  {
    name: 'Enterprise',
    description: 'Large businesses, agencies, or creators with complex content needs.',
    monthlyPrice: 99.99,
    yearlyPrice: 79.99,
    features: [
      { text: '3 AI clone', included: true },
      { text: '6000 Credits Per Month', included: true },
      { text: 'Unlimited Documents Per Chatbot', included: true },
      { text: '35M Characters Per Chatbot', included: true },
      { text: 'Public Access', included: true },
      { text: 'Access to Premium models', included: true },
      { text: 'Up to 5 team members', included: true },
    ],
    cta: 'Upgrade',
    ctaStyle: 'outline',
  },
]

export default function PricingSection() {
  const [yearly, setYearly] = useState(false)

  return (
    <section className="bg-background py-8 md:py-section-y">
      <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">

        {/* Hero heading */}
        <div data-animate="" className="text-center">
          <h1 className="text-[28px] md:text-h1 font-bold text-text-primary leading-[1.2] md:leading-[58px]">
            Clone yourself. Scale<br className="md:hidden" /> your time.
          </h1>
          <p className="mt-4 text-btn md:text-body-lg text-text-secondary max-w-[520px] mx-auto">
            It only takes 2 minutes to set up your personal AI that can talk to thousands of people — for $0. Then upgrade on your terms.
          </p>

          {/* Monthly / Yearly toggle */}
          <div className="mt-8 inline-flex items-center rounded-full bg-gray-100 p-1">
            <button
              onClick={() => setYearly(false)}
              className={`px-6 py-2 rounded-full text-btn font-medium transition-colors ${
                !yearly
                  ? 'bg-white text-text-primary shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-6 py-2 rounded-full text-btn font-medium transition-colors ${
                yearly
                  ? 'bg-white text-text-primary shadow-sm'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing cards grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 min-[1240px]:grid-cols-4 gap-6">
          {plans.map((plan, i) => {
            const price = yearly ? plan.yearlyPrice : plan.monthlyPrice
            return (
              <div
                key={plan.name}
                data-animate=""
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                className="relative flex flex-col rounded-card border border-gray-200 bg-white p-6"
              >
                {/* Plan name + badge inline */}
                <div className="flex items-center gap-2">
                  <h3 className="text-btn md:text-body-lg font-bold text-text-primary">
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-2.5 py-0.5">
                      <Image
                        src="/icons/icon-star.svg"
                        alt=""
                        width={12}
                        height={12}
                      />
                      <span className="text-xs font-medium text-text-primary">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                </div>
                <p className="mt-1 text-[12px] md:text-sm text-text-secondary leading-[18px]">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-[28px] md:text-[32px] font-bold text-text-primary leading-none">
                    ${price === 0 ? '0' : price.toFixed(2)}
                  </span>
                  <span className="text-sm text-text-secondary">/per month</span>
                </div>

                {/* Feature list */}
                <p className="mt-6 text-xs font-semibold text-text-secondary uppercase tracking-wide">
                  {plan.name} plan features:
                </p>
                <ul className="mt-3 flex flex-col gap-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-2.5 min-h-[36px]">
                      <Image
                        src={feature.included ? '/icons/icon-check-blue.svg' : '/icons/icon-x-gray.svg'}
                        alt=""
                        width={16}
                        height={16}
                        className="flex-shrink-0 mt-px"
                      />
                      <span className={`text-sm leading-[18px] ${feature.included ? 'text-text-primary' : 'text-text-secondary'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <a
                  href="https://www.app.a2v2.ai/signin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 block text-center text-btn font-medium px-btn-x py-btn-y rounded-btn transition-colors ${
                    plan.ctaStyle === 'filled'
                      ? 'bg-primary text-white hover:bg-blue-700'
                      : 'border border-gray-300 text-text-primary hover:bg-gray-50'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
