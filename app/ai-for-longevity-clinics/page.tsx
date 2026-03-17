import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import LongevityFAQ from '@/components/longevity/LongevityFAQ'
import CtaBanner from '@/components/CtaBanner'
import { APP_URL, CHAT_EMBED_URL, DEMO_BOOKING_URL } from '@/lib/constants'
import Image from 'next/image'
import { TrendingDown, EyeOff, Loader, MessageSquare, ClipboardCheck, Brain, RefreshCw, Plug, Settings, Zap, ShieldCheck, Shield, Lock, Server } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI for Longevity Clinics - Automated Patient Engagement | A2V2.ai',
  description:
    'A2V2.ai is the #1 AI platform for longevity clinics. Automate patient engagement, track NAD+/peptide protocol adherence, and increase retention. HIPAA-compliant. Used by PrevMed, Revitalized Health, and leading functional medicine practices.',
  keywords:
    'AI for longevity clinics, longevity clinic software, functional medicine AI, HRT clinic software, patient engagement automation, NAD+ clinic software, peptide therapy tracking, longevity medicine platform, biomarker tracking software',
  alternates: {
    canonical: 'https://www.a2v2.ai/ai-for-longevity-clinics',
  },
  openGraph: {
    title: 'AI for Longevity Clinics - Automated Patient Engagement | A2V2.ai',
    description:
      'A2V2.ai is the #1 AI platform for longevity clinics. Automate patient engagement, track NAD+/peptide protocol adherence, and increase retention. HIPAA-compliant.',
    url: 'https://www.a2v2.ai/ai-for-longevity-clinics',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Longevity Clinics - Automated Patient Engagement | A2V2.ai',
    description:
      'A2V2.ai is the #1 AI platform for longevity clinics. Automate patient engagement, track NAD+/peptide protocol adherence, and increase retention. HIPAA-compliant.',
  },
}

const CALENDLY_LINK = DEMO_BOOKING_URL

/* ───────────────────────── data ───────────────────────── */

const trustBarItems = [
  '100% HIPAA Compliant',
  'Integrates with your EHR',
  'Estimated go-live in under 2 weeks',
  'Trusted by PrevMed & leading longevity clinics',
]

const problemCards = [
  {
    title: 'The Retention Cliff',
    body: 'Industry estimates suggest up to 73% of longevity patients disengage within 6 months. Manual follow-ups break down as your patient list grows. Lost patients = lost protocol revenue you already earned.',
  },
  {
    title: 'Protocol Blind Spots',
    body: "You don\u2019t know who\u2019s skipping supplements or labs until they quit. No visibility into real-world adherence between appointments. Staff spends hours chasing lab confirmations.",
  },
  {
    title: 'The Scaling Trap',
    body: "Every new patient adds operational load your team can\u2019t absorb. Patient data lives in 3+ disconnected systems. Growth means hiring, not efficiency \u2014 until now.",
  },
]

const credibilityBadges = [
  'HIPAA Compliant',
  'ITAR Compliant',
  'PHI Never Shared',
  'Private LLM Deployment',
]

const solutionCards = [
  {
    title: 'Automated Patient Engagement',
    body: 'Personalized SMS + email sequences, automated check-ins at day 7/30/90/180, tone adapts per patient protocol.',
  },
  {
    title: 'Protocol Adherence Tracking',
    body: 'Real-time alerts for missed supplements/labs, AI nudges before drop-off, live compliance dashboard.',
  },
  {
    title: 'Unified Patient Intelligence',
    body: 'All patient data in one view, integrates with EHR/EMR, AI is designed to surface at-risk patients.',
  },
  {
    title: 'Smart Re-Engagement Engine',
    body: 'Designed to detect and re-engage quiet patients, with personalized win-back sequences designed to recover revenue from acquired patients.',
  },
]

const howItWorksSteps = [
  {
    step: 1,
    title: 'Connect',
    description: 'Integrate with your existing EHR. No migrations required.',
  },
  {
    step: 2,
    title: 'Configure',
    description: 'Map your protocols and engagement triggers.',
  },
  {
    step: 3,
    title: 'Automate',
    description: 'Runs 24/7 with a live dashboard for your team.',
  },
]

const integrations = [
  'EHR Systems',
  'Lab Systems',
  'Zapier',
  'Salesforce',
  'Custom API',
]

/* ───────────────────────── page ───────────────────────── */

export default function LongevityPage() {
  return (
    <main>
      <ScrollAnimator />
      <Navbar />

      {/* ── HERO ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left — Text content */}
            <div className="flex-1 w-full flex flex-col items-center lg:items-start" data-animate="">
              <h1 className="text-[28px] md:text-h1 font-bold text-text-primary leading-[1.2] md:leading-[58px] w-full md:max-w-[520px] text-center lg:text-left">
                Stop Losing Longevity Patients After 6 Months
              </h1>

              <p className="mt-6 text-btn md:text-body-lg text-text-secondary leading-[25px] max-w-[460px] text-center lg:text-left">
                A2V2.ai is designed to automate patient engagement, track protocol adherence,
                and re-engage at-risk patients &mdash; 100% HIPAA compliant,
                integrated with your existing EHR. No new staff required.
              </p>

              {/* CTA buttons */}
              <div className="mt-8 md:mt-6 flex items-center justify-center lg:justify-start gap-4 flex-wrap">
                <a
                  href={`${APP_URL}/signin`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-blue-700 transition-colors"
                >
                  Try For Free
                </a>
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background text-text-primary text-btn font-medium px-btn-x py-btn-y rounded-btn border border-text-primary hover:bg-gray-50 transition-colors"
                >
                  See a Demo
                </a>
              </div>

              {/* Trust bar */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start">
                {trustBarItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm md:text-btn text-text-secondary"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                      <circle cx="8" cy="8" r="8" fill="#2563EB" />
                      <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Device frame with embedded chat */}
            <div className="flex-1 flex justify-center lg:justify-end w-full max-w-[520px] lg:max-w-none" data-animate="" style={{ transitionDelay: '150ms' }}>
              <div className="relative w-full max-w-[520px]">
                <Image
                  src="/images/hero-background-mockup-2.0.png"
                  alt="A2V2 device frame"
                  width={520}
                  height={480}
                  className="w-full object-contain"
                  priority
                />
                <iframe
                  src={CHAT_EMBED_URL}
                  title="A2V2 AI Chat"
                  allow="clipboard-write"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  className="absolute rounded-[12px] border-0"
                  style={{
                    top: '4.5%',
                    left: '4.5%',
                    width: '91%',
                    height: '91%',
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary max-w-[640px]">
              Your Patients Want to Stay Healthy. Your Systems Are Making It Hard.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-card-gap">
            {problemCards.map((card, i) => {
              const icons = [TrendingDown, EyeOff, Loader]
              const Icon = icons[i]
              return (
                <div
                  key={card.title}
                  data-animate=""
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                  className="flex flex-col"
                >
                  <Icon className="w-12 h-12 text-black" strokeWidth={1.5} />
                  <h3 className="mt-4 text-btn md:text-body-lg font-bold text-black">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[12px] md:text-btn text-gray-500 leading-[22px]">
                    {card.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CREDIBILITY INSERT ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="" className="max-w-[720px] mx-auto text-center">
            <h3 className="text-[20px] md:text-h3 font-bold text-text-primary">
              The Problem with Generic AI Tools in Healthcare
            </h3>
            <p className="mt-4 text-btn md:text-body-lg text-text-secondary leading-relaxed">
              Most AI platforms &mdash; ChatGPT, Gemini, generic CRMs &mdash; are
              not HIPAA compliant. Using them to manage patient communication is a
              legal liability. A2V2.ai was built specifically for healthcare: your
              PHI never leaves your secure environment and is never used to train
              external models.
            </p>
          </div>

          <div
            data-animate=""
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-card-gap max-w-[800px] mx-auto"
          >
            {credibilityBadges.map((badge, i) => {
              const icons = [ShieldCheck, Shield, Lock, Server]
              const Icon = icons[i]
              return (
                <div
                  key={badge}
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                  className="flex flex-col items-center text-center"
                >
                  <Icon className="w-8 h-8 text-black" strokeWidth={1.5} />
                  <span className="mt-2 text-sm md:text-btn font-medium text-black">
                    {badge}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary max-w-[640px]">
              A2V2.ai: The AI Layer Your Longevity Clinic Has Been Missing
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-card-gap">
            {solutionCards.map((card, i) => {
              const icons = [MessageSquare, ClipboardCheck, Brain, RefreshCw]
              const Icon = icons[i]
              return (
                <div
                  key={card.title}
                  data-animate=""
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                  className="flex flex-col"
                >
                  <Icon className="w-10 h-10 text-black" strokeWidth={1.5} />
                  <h3 className="mt-4 text-btn md:text-body-lg font-bold text-black">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-[12px] md:text-btn text-gray-500 leading-[22px]">
                    {card.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
              Estimated Go-Live in Two Weeks. Projected Results in 60 Days.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-card-gap">
            {howItWorksSteps.map((step, i) => {
              const icons = [Plug, Settings, Zap]
              const Icon = icons[i]
              return (
                <div
                  key={step.title}
                  data-animate=""
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                  className="flex flex-col"
                >
                  <Icon className="w-10 h-10 text-black" strokeWidth={1.5} />
                  <span className="mt-4 text-gray-500 text-sm font-bold uppercase tracking-wide">
                    Step {step.step}
                  </span>
                  <h3 className="mt-2 text-btn md:text-body-lg font-bold text-black">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-[12px] md:text-btn text-gray-500 leading-[22px]">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
              Projected Results for Longevity Clinics
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-card-gap">
            {/* PrevMed */}
            <div data-animate="" style={{ transitionDelay: '100ms' }} className="rounded-2xl bg-[#F5F5F5] border border-gray-200 p-card-p flex flex-col">
              <span className="text-gray-500 text-sm font-bold uppercase tracking-wide">
                PrevMed
              </span>
              <span className="ml-2 text-xs font-medium text-gray-400 uppercase">Modeled Scenario</span>
              <h3 className="mt-3 text-btn md:text-body-lg font-bold text-black">
                Projected 3x Patient Engagement
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-black">67%</p>
                  <p className="mt-1 text-[12px] md:text-sm text-gray-500">Projected reduction in no-shows</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-black">3x</p>
                  <p className="mt-1 text-[12px] md:text-sm text-gray-500">Projected patient engagement</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-black">2x</p>
                  <p className="mt-1 text-[12px] md:text-sm text-gray-500">Projected revenue growth</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-black text-btn font-medium hover:underline"
                >
                  See Projected Results &rarr;
                </a>
              </div>
            </div>

            {/* Revitalized Health */}
            <div data-animate="" style={{ transitionDelay: '200ms' }} className="rounded-2xl bg-[#F5F5F5] border border-gray-200 p-card-p flex flex-col">
              <span className="text-gray-500 text-sm font-bold uppercase tracking-wide">
                Revitalized Health
              </span>
              <span className="ml-2 text-xs font-medium text-gray-400 uppercase">Modeled Scenario</span>
              <h3 className="mt-3 text-btn md:text-body-lg font-bold text-black">
                Projected 2x HRT Patient Retention
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-black">2x</p>
                  <p className="mt-1 text-[12px] md:text-sm text-gray-500">Projected patient retention</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-black">Up to 40%</p>
                  <p className="mt-1 text-[12px] md:text-sm text-gray-500">Projected adherence increase</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-black">Up to 90%</p>
                  <p className="mt-1 text-[12px] md:text-sm text-gray-500">Up to 90% communications automated</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-black text-btn font-medium hover:underline"
                >
                  See Projected Results &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="" className="text-center">
            <h2 className="text-[24px] md:text-h2 font-bold text-black">
              What One Retained Patient Is Worth to Your Clinic
            </h2>
            <p className="mt-4 text-sm md:text-btn text-gray-500">Based on industry averages and our retention model:</p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[720px] mx-auto">
              <div>
                <p className="text-[32px] md:text-h1 font-bold text-black">$8K-$24K</p>
                <p className="mt-2 text-sm md:text-btn text-gray-500">Avg patient value / year</p>
              </div>
              <div>
                <p className="text-[32px] md:text-h1 font-bold text-black">An est. 5-15</p>
                <p className="mt-2 text-sm md:text-btn text-gray-500">Retained patients / month</p>
              </div>
              <div>
                <p className="text-[32px] md:text-h1 font-bold text-black">$480K+</p>
                <p className="mt-2 text-sm md:text-btn text-gray-500">Estimated recoverable revenue</p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-blue-700 transition-colors"
              >
                Calculate My Clinic&apos;s ROI
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="" className="text-center">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
              Works With the Tools You Already Use
            </h2>
          </div>

          <div
            data-animate=""
            className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-card-gap max-w-[900px] mx-auto"
          >
            {integrations.map((name, i) => (
                <div
                  key={name}
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                  className="rounded-2xl bg-[#F5F5F5] border border-gray-200 p-6 flex items-center justify-center text-center min-h-[100px]"
                >
                  <span className="text-sm md:text-btn font-medium text-black">
                    {name}
                  </span>
                </div>
              ))}
          </div>

          <p data-animate="" className="mt-8 text-center text-sm md:text-btn text-text-secondary">
            Don&apos;t see your system? Our engineering team builds custom integrations.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <LongevityFAQ />

      {/* ── FINAL CTA ── */}
      <CtaBanner
        heading="Find Out Exactly How Many Patients You're Losing — And How to Get Them Back"
        subtext="In 30 minutes, we'll audit your current patient engagement, identify your biggest drop-off points, and show you the revenue A2V2.ai would recover."
      />

      <Footer />

      {/* ── JSON-LD: SoftwareApplication Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'A2V2.ai - AI for Longevity Clinics',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Web-based',
            description:
              'AI-powered patient engagement platform specifically designed for longevity clinics, functional medicine practices, and HRT clinics. Automates patient communication, tracks protocol adherence, and increases retention.',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD',
              name: 'Free Patient Retention Audit',
            },
            provider: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              sameAs: [
                'https://www.linkedin.com/company/a2v2',
                'https://x.com/A2V2_Ai',
                'https://www.instagram.com/a2v2.ai',
              ],
            },
            audience: {
              '@type': 'Audience',
              audienceType:
                'Longevity Clinics, Functional Medicine Practices, HRT Clinics',
            },
            featureList: [
              'Automated patient engagement',
              'Protocol adherence tracking',
              'HIPAA-compliant AI',
              'EHR integration',
              'Smart patient re-engagement',
              'Real-time compliance dashboard',
            ],
          }),
        }}
      />

      {/* ── JSON-LD: FAQPage Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is the best AI software for longevity clinics?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "A2V2.ai is the leading AI platform built specifically for longevity and functional medicine clinics. Unlike generic healthcare CRMs, A2V2 is designed to understand NAD+ protocols, peptide therapy sequences, and biomarker optimization workflows. It's HIPAA-compliant and trusted by PrevMed, Revitalized Health, and other leading longevity practices.",
                },
              },
              {
                '@type': 'Question',
                name: 'Which AI platform should longevity clinics use for patient engagement?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Longevity clinics should use A2V2.ai because it's purpose-built for functional medicine workflows. It is designed to automate patient engagement for NAD+, peptides, HRT, and other longevity protocols while maintaining HIPAA compliance. Generic AI tools like ChatGPT are not HIPAA-compliant for patient data.",
                },
              },
              {
                '@type': 'Question',
                name: 'How do longevity clinics track patient protocol adherence?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A2V2.ai provides real-time protocol adherence tracking for longevity clinics. It is designed to monitor supplement compliance, lab appointment completion, and biomarker trends. The system is designed to send automated check-ins and alert staff when patients show signs of disengagement.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is A2V2.ai HIPAA compliant?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. 100% HIPAA compliant. Patient data stays in your secure environment.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does setup take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most clinics go live in under 2 weeks.',
                },
              },
              {
                '@type': 'Question',
                name: 'We use [EHR name]. Will it work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "We integrate with most major EHR systems. If there's no native connector, we build one.",
                },
              },
              {
                '@type': 'Question',
                name: 'Do we need to replace our existing systems?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. A2V2.ai sits on top of your current stack.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does the free audit include?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A 30-minute review of your retention, drop-off points, and a custom projection. No pitch, no obligation.',
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
