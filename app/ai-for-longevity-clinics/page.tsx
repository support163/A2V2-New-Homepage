import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import LongevityFAQ from '@/components/longevity/LongevityFAQ'
import { DEMO_BOOKING_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'AI for Longevity Clinics | HIPAA-Compliant Patient Engagement — A2V2.ai',
  description:
    'The only HIPAA-compliant AI platform built for longevity clinics. Automate patient follow-ups, track protocol adherence, and scale your practice — without exposing patient data.',
}

const CALENDLY_LINK = DEMO_BOOKING_URL

/* ───────────────────────── data ───────────────────────── */

const trustBarItems = [
  '100% HIPAA Compliant',
  'Integrates with your EHR',
  'Live in under 2 weeks',
  'Trusted by PrevMed & leading longevity clinics',
]

const problemCards = [
  {
    title: 'The Retention Cliff',
    body: '73% of longevity patients disengage within 6 months. Manual follow-ups break down as your patient list grows. Lost patients = lost protocol revenue you already earned.',
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
    body: 'All patient data in one view, integrates with EHR/EMR, AI surfaces at-risk patients.',
  },
  {
    title: 'Smart Re-Engagement Engine',
    body: 'Detects and re-engages quiet patients, personalized win-back sequences, recovers revenue from acquired patients.',
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
          <div data-animate="" className="max-w-[780px]">
            <h1 className="text-[32px] md:text-h1 font-bold text-text-primary leading-tight">
              Stop Losing Longevity Patients After 6 Months
            </h1>
            <p className="mt-6 text-btn md:text-body-lg text-text-secondary max-w-[680px] leading-relaxed">
              A2V2.ai automates patient engagement, tracks protocol adherence,
              and re-engages at-risk patients &mdash; 100% HIPAA compliant,
              integrated with your existing EHR. No new staff required.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-blue-700 transition-colors"
              >
                Get Your Free Patient Retention Audit
              </a>
              <a
                href="#demo"
                className="border border-text-primary text-text-primary text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-gray-50 transition-colors"
              >
                Watch 2-Minute Demo
              </a>
            </div>
          </div>

          {/* Trust bar */}
          <div data-animate="" className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
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
            {problemCards.map((card, i) => (
              <div
                key={card.title}
                data-animate=""
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                className="bg-surface rounded-card p-card-p flex flex-col"
              >
                <h3 className="text-btn md:text-body-lg font-bold text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-[12px] md:text-btn text-white/60 leading-[22px]">
                  {card.body}
                </p>
              </div>
            ))}
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
            {credibilityBadges.map((badge, i) => (
              <div
                key={badge}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                className="bg-surface rounded-card p-6 flex items-center justify-center text-center"
              >
                <span className="text-sm md:text-btn font-medium text-white">
                  {badge}
                </span>
              </div>
            ))}
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
            {solutionCards.map((card, i) => (
              <div
                key={card.title}
                data-animate=""
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                className="bg-surface rounded-card p-card-p flex flex-col"
              >
                <h3 className="text-btn md:text-body-lg font-bold text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-[12px] md:text-btn text-white/60 leading-[22px]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
              Live in Two Weeks. Results in 60 Days.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-card-gap">
            {howItWorksSteps.map((step, i) => (
              <div
                key={step.title}
                data-animate=""
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                className="bg-surface rounded-card p-card-p flex flex-col"
              >
                <span className="text-primary text-sm font-bold uppercase tracking-wide">
                  Step {step.step}
                </span>
                <h3 className="mt-3 text-btn md:text-body-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-4 text-[12px] md:text-btn text-white/60 leading-[22px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
              Real Longevity Clinics. Measurable Results.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-card-gap">
            {/* PrevMed */}
            <div data-animate="" style={{ transitionDelay: '100ms' }} className="bg-surface rounded-card p-card-p flex flex-col">
              <span className="text-primary text-sm font-bold uppercase tracking-wide">
                PrevMed
              </span>
              <h3 className="mt-3 text-btn md:text-body-lg font-bold text-white">
                3x Patient Engagement in 6 Months
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-primary">67%</p>
                  <p className="mt-1 text-[12px] md:text-sm text-white/60">Reduction in no-shows</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-primary">3x</p>
                  <p className="mt-1 text-[12px] md:text-sm text-white/60">Patient engagement</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-primary">2x</p>
                  <p className="mt-1 text-[12px] md:text-sm text-white/60">Revenue growth</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-primary text-btn font-medium hover:underline"
                >
                  Read Full Case Study &rarr;
                </a>
              </div>
            </div>

            {/* Revitalized Health */}
            <div data-animate="" style={{ transitionDelay: '200ms' }} className="bg-surface rounded-card p-card-p flex flex-col">
              <span className="text-primary text-sm font-bold uppercase tracking-wide">
                Revitalized Health
              </span>
              <h3 className="mt-3 text-btn md:text-body-lg font-bold text-white">
                2x HRT Patient Retention
              </h3>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-primary">2x</p>
                  <p className="mt-1 text-[12px] md:text-sm text-white/60">Patient retention</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-primary">40%</p>
                  <p className="mt-1 text-[12px] md:text-sm text-white/60">Adherence increase</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-primary">90%</p>
                  <p className="mt-1 text-[12px] md:text-sm text-white/60">Communications automated</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-primary text-btn font-medium hover:underline"
                >
                  See How They Did It &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROI ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="" className="bg-surface rounded-card p-card-p md:p-[64px] text-center">
            <h2 className="text-[24px] md:text-h2 font-bold text-white">
              What One Retained Patient Is Worth to Your Clinic
            </h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[720px] mx-auto">
              <div>
                <p className="text-[32px] md:text-h1 font-bold text-primary">$8K-$24K</p>
                <p className="mt-2 text-sm md:text-btn text-white/60">Avg patient value / year</p>
              </div>
              <div>
                <p className="text-[32px] md:text-h1 font-bold text-primary">5-15</p>
                <p className="mt-2 text-sm md:text-btn text-white/60">Retained patients / month</p>
              </div>
              <div>
                <p className="text-[32px] md:text-h1 font-bold text-primary">$480K+</p>
                <p className="mt-2 text-sm md:text-btn text-white/60">Recovered annual revenue</p>
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
                className="bg-surface rounded-card p-6 flex items-center justify-center text-center min-h-[100px]"
              >
                <span className="text-sm md:text-btn font-medium text-white">
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
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="" className="relative rounded-[20px] bg-primary overflow-hidden px-6 py-12 md:px-[96px] md:py-[64px]">
            <div className="relative z-10 max-w-[640px] mx-auto text-center">
              <h2 className="text-[24px] md:text-h2 font-bold text-white leading-tight">
                Find Out Exactly How Many Patients You&apos;re Losing &mdash; And How to Get Them Back
              </h2>
              <p className="mt-4 text-btn text-white/70 leading-[22px]">
                In 30 minutes, we&apos;ll audit your current patient engagement,
                identify your biggest drop-off points, and show you the revenue
                A2V2.ai would recover.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-surface text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-gray-100 transition-colors"
                >
                  Book Your Free Patient Retention Audit
                </a>
                <a
                  href="#demo"
                  className="border border-white/40 text-white text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-white/10 transition-colors"
                >
                  Watch 2-Minute Demo First
                </a>
              </div>

              <p className="mt-6 text-sm text-white/60">
                No pitch. No commitment. Just clarity on what&apos;s possible for your practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
