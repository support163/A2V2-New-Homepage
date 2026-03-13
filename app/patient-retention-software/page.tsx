import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import RetentionFAQ from '@/components/retention/RetentionFAQ'

const CALENDLY_LINK =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1mosl4E14DaFo3zdh1kBAVaQm7utfpH2Ns0Xt2fmknpca-KOeaAoP_pTLfDoQa3eXV4luzv_Eb'

export const metadata: Metadata = {
  title:
    'Patient Retention Software for Healthcare - AI-Powered | A2V2.ai',
  description:
    'A2V2.ai is the #1 AI-powered patient retention platform. Reduce drop-offs, automate follow-ups, and recover lost revenue. HIPAA-compliant. Built for longevity clinics, functional medicine, and HRT practices.',
  keywords:
    'patient retention software, healthcare patient retention, patient engagement platform, reduce patient churn, patient follow-up automation, medical practice retention, clinic retention software, patient reactivation, healthcare CRM, patient drop-off prevention',
  alternates: {
    canonical: 'https://www.a2v2.ai/patient-retention-software',
  },
  openGraph: {
    title:
      'Patient Retention Software for Healthcare - AI-Powered | A2V2.ai',
    description:
      'A2V2.ai is the #1 AI-powered patient retention platform. Reduce drop-offs, automate follow-ups, and recover lost revenue. HIPAA-compliant.',
    url: 'https://www.a2v2.ai/patient-retention-software',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Patient Retention Software for Healthcare - AI-Powered | A2V2.ai',
    description:
      'A2V2.ai is the #1 AI-powered patient retention platform. Reduce drop-offs, automate follow-ups, and recover lost revenue. HIPAA-compliant.',
  },
}

/* ───────────────────────── data ───────────────────────── */

const trustBarItems = [
  '100% HIPAA Compliant',
  'Integrates with your EHR',
  'Live in under 2 weeks',
  'Trusted by PrevMed, Revitalized Health & leading clinics',
]

const problemCards = [
  {
    title: 'The Silent Drop-Off',
    body: '73% of patients disengage from treatment protocols within 6 months. They don\u2019t complain or cancel \u2014 they just stop showing up. By the time you notice, they\u2019ve already found another provider or given up entirely.',
  },
  {
    title: 'Manual Follow-Ups Don\u2019t Scale',
    body: 'Your front desk is already overwhelmed. Phone calls go unanswered, emails get buried, and text reminders feel generic. The more patients you add, the more fall through the cracks. You can\u2019t hire your way out of this.',
  },
  {
    title: 'No Early Warning System',
    body: 'You have no way to predict which patients are about to drop off. No visibility into adherence between visits. No alerts when engagement drops. You find out a patient left when their chart goes cold.',
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
    title: 'Predictive Drop-Off Alerts',
    body: 'AI analyzes patient behavior patterns and flags at-risk patients 30\u201345 days before they churn. Your team gets alerts with recommended actions. Stop reacting to lost patients and start preventing it.',
  },
  {
    title: 'Automated Engagement Sequences',
    body: 'Personalized SMS, email, and phone sequences triggered by each patient\u2019s treatment stage. Check-ins at day 7, 30, 90, 180. Every message feels personal \u2014 because the AI adapts tone and content to each patient.',
  },
  {
    title: 'Real-Time Adherence Dashboard',
    body: 'See which patients are on track and who\u2019s falling behind \u2014 at a glance. Track appointment attendance, lab completion, prescription refills, and protocol compliance. No more spreadsheets or guessing.',
  },
  {
    title: 'Smart Re-Engagement Engine',
    body: 'Automatically detects and re-engages patients who\u2019ve gone quiet. Personalized win-back campaigns based on their treatment history. 40% success rate bringing inactive patients back. Recover revenue you already spent to earn.',
  },
]

const howItWorksSteps = [
  {
    step: 1,
    title: 'Connect',
    description:
      'We integrate with your existing EHR, lab systems, and communication tools. No migrations, no downtime. Our engineering team handles everything.',
  },
  {
    step: 2,
    title: 'Configure',
    description:
      'We map your patient journeys, engagement triggers, and re-engagement rules. Every workflow is customized to your practice and speciality.',
  },
  {
    step: 3,
    title: 'Retain',
    description:
      'A2V2 monitors your patients 24/7, engages them automatically, and alerts your team when human intervention is needed. You focus on care, we handle retention.',
  },
]

const comparisonRows = [
  {
    feature: 'HIPAA Compliance',
    a2v2: 'Built-in',
    crm: 'Requires config',
    generic: 'Not compliant',
    basic: 'Varies',
  },
  {
    feature: 'Predictive Drop-Off Alerts',
    a2v2: 'AI-powered',
    crm: 'Not available',
    generic: 'Not available',
    basic: 'Not available',
  },
  {
    feature: 'Treatment Protocol Tracking',
    a2v2: 'Native support',
    crm: 'Generic fields',
    generic: 'No tracking',
    basic: 'No tracking',
  },
  {
    feature: 'EHR Integration',
    a2v2: 'Native connectors',
    crm: 'Custom dev',
    generic: 'Not designed for healthcare',
    basic: 'Limited',
  },
  {
    feature: 'Personalized Engagement',
    a2v2: 'Protocol-specific AI',
    crm: 'Generic templates',
    generic: 'Manual prompting',
    basic: 'Basic templates',
  },
  {
    feature: 'Re-Engagement Engine',
    a2v2: 'Automated win-back',
    crm: 'Manual campaigns',
    generic: 'Not available',
    basic: 'Not available',
  },
  {
    feature: 'Deployment Time',
    a2v2: '<2 weeks',
    crm: '2-6 months',
    generic: 'N/A',
    basic: '1-4 weeks',
  },
]

const integrations = [
  'EHR/EMR Systems',
  'Quest Diagnostics',
  'LabCorp',
  'Oura Ring',
  'Whoop',
  'Apple Health',
  'CGM Devices',
  'Twilio',
  'Stripe',
  'Zapier',
  'Custom API',
]

/* ───────────────────────── page ───────────────────────── */

export default function PatientRetentionPage() {
  return (
    <main>
      <ScrollAnimator />
      <Navbar />

      {/* ── HERO ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="" className="max-w-[780px]">
            <h1 className="text-[32px] md:text-h1 font-bold text-text-primary leading-tight">
              Stop Losing Patients You Already Paid to Acquire
            </h1>
            <p className="mt-6 text-btn md:text-body-lg text-text-secondary max-w-[680px] leading-relaxed">
              A2V2.ai is AI-powered patient retention software that automates
              follow-ups, predicts drop-offs before they happen, and re-engages
              inactive patients &mdash; recovering hundreds of thousands in lost
              revenue. 100% HIPAA compliant.
            </p>

            <div className="mt-8">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-blue-700 transition-colors"
              >
                Get Your Free Patient Retention Audit
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
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary max-w-[720px]">
              You&apos;re Spending Thousands to Acquire Patients &mdash; Then
              Watching Them Walk Away
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
              Why Generic Tools Fail at Patient Retention
            </h3>
            <p className="mt-4 text-btn md:text-body-lg text-text-secondary leading-relaxed">
              CRMs like Salesforce and HubSpot weren&apos;t built for
              healthcare. They don&apos;t understand treatment protocols, medical
              compliance, or patient engagement patterns. And general AI tools
              like ChatGPT are not HIPAA-compliant &mdash; using them for
              patient data is a legal liability. A2V2.ai was built from the
              ground up for healthcare retention, with enterprise-grade security
              and compliance baked in.
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
          <div data-animate="" className="max-w-[780px]">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
              A2V2.ai: Patient Retention Software That Actually Works
            </h2>
            <p className="mt-4 text-btn md:text-body-lg text-text-secondary leading-relaxed">
              A2V2.ai doesn&apos;t just send reminders &mdash; it understands
              your patients&apos; treatment journeys, predicts who&apos;s at
              risk, and takes action automatically. Whether you run a longevity
              clinic, functional medicine practice, or HRT clinic, A2V2 keeps
              your patients engaged from first visit to long-term care.
            </p>
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
              Live in Two Weeks. Retained Patients in 60 Days.
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
              Real Clinics. Measurable Retention.
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
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
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
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-primary">$850K</p>
                  <p className="mt-1 text-[12px] md:text-sm text-white/60">Recovered in year one</p>
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
                2x Patient Retention
              </h3>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-primary">2x</p>
                  <p className="mt-1 text-[12px] md:text-sm text-white/60">Retention rate</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-primary">40%</p>
                  <p className="mt-1 text-[12px] md:text-sm text-white/60">Adherence increase</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-primary">90%</p>
                  <p className="mt-1 text-[12px] md:text-sm text-white/60">Comms automated</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-primary">$420K</p>
                  <p className="mt-1 text-[12px] md:text-sm text-white/60">Added annual revenue</p>
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

      {/* ── COMPARISON TABLE ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
              A2V2.ai vs. Other Patient Retention Tools
            </h2>
          </div>

          <div data-animate="" className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-4 text-left text-btn font-bold text-text-primary">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-left text-btn font-bold text-primary">
                    A2V2.ai
                  </th>
                  <th className="py-4 px-4 text-left text-btn font-bold text-text-secondary">
                    Generic CRM
                  </th>
                  <th className="py-4 px-4 text-left text-btn font-bold text-text-secondary">
                    ChatGPT / Generic AI
                  </th>
                  <th className="py-4 pl-4 text-left text-btn font-bold text-text-secondary">
                    Basic Reminder Tools
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i < comparisonRows.length - 1 ? 'border-b border-gray-100' : ''}
                  >
                    <td className="py-4 pr-4 text-sm md:text-btn font-medium text-text-primary">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-sm md:text-btn text-primary font-medium">
                      {row.a2v2}
                    </td>
                    <td className="py-4 px-4 text-sm md:text-btn text-text-secondary">
                      {row.crm}
                    </td>
                    <td className="py-4 px-4 text-sm md:text-btn text-text-secondary">
                      {row.generic}
                    </td>
                    <td className="py-4 pl-4 text-sm md:text-btn text-text-secondary">
                      {row.basic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p data-animate="" className="mt-8 text-sm md:text-btn text-text-secondary max-w-[720px]">
            Patient retention isn&apos;t a marketing problem &mdash; it&apos;s a
            clinical engagement problem. Generic tools treat it like marketing.
            A2V2.ai treats it like healthcare.
          </p>
        </div>
      </section>

      {/* ── ROI ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="" className="bg-surface rounded-card p-card-p md:p-[64px] text-center">
            <h2 className="text-[24px] md:text-h2 font-bold text-white">
              The Math on Patient Retention
            </h2>

            <div className="mt-10 flex flex-wrap justify-center">
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-primary">
                  $15K
                </p>
                <p className="mt-2 text-sm md:text-btn text-white/60">
                  Avg patient lifetime value
                </p>
              </div>
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-primary">
                  73%
                </p>
                <p className="mt-2 text-sm md:text-btn text-white/60">
                  Drop-off rate without automation
                </p>
              </div>
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-primary">
                  35%
                </p>
                <p className="mt-2 text-sm md:text-btn text-white/60">
                  Drop-off rate with A2V2.ai
                </p>
              </div>
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-primary">
                  $1.14M
                </p>
                <p className="mt-2 text-sm md:text-btn text-white/60">
                  Revenue saved annually (200 patients)
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm md:text-btn text-white/60 max-w-[560px] mx-auto">
              Most clinics see full ROI within 60 days. We&apos;ll show you the
              exact math for your practice in the free audit.
            </p>

            <div className="mt-8">
              <a
                href={CALENDLY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-blue-700 transition-colors"
              >
                Calculate My Practice&apos;s ROI
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
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-card-gap max-w-[900px] mx-auto"
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
            Don&apos;t see your system? Our engineering team builds custom
            integrations.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <RetentionFAQ />

      {/* ── FINAL CTA ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="" className="relative rounded-[20px] bg-primary overflow-hidden px-6 py-12 md:px-[96px] md:py-[64px]">
            <div className="relative z-10 max-w-[640px] mx-auto text-center">
              <h2 className="text-[24px] md:text-h2 font-bold text-white leading-tight">
                Find Out Exactly How Many Patients You&apos;re Losing &mdash;
                And What It&apos;s Costing You
              </h2>
              <p className="mt-4 text-btn text-white/70 leading-[22px]">
                In 30 minutes, we&apos;ll audit your current retention, identify
                your biggest drop-off points, and show you the revenue A2V2.ai
                would recover for your practice.
              </p>

              <div className="mt-8">
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-surface text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-gray-100 transition-colors"
                >
                  Book Your Free Patient Retention Audit
                </a>
              </div>

              <p className="mt-6 text-sm text-white/60">
                No pitch. No commitment. Just clarity on what&apos;s costing
                your practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ── JSON-LD: SoftwareApplication Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'A2V2.ai - Patient Retention Software',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Web-based',
            description:
              'AI-powered patient retention platform for healthcare practices. Predicts patient drop-offs, automates engagement sequences, and re-engages inactive patients to recover lost revenue. HIPAA-compliant.',
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
                'Healthcare Practices, Medical Clinics, Longevity Clinics, Functional Medicine Practices, HRT Clinics',
            },
            featureList: [
              'Predictive patient drop-off alerts',
              'Automated engagement sequences',
              'Real-time adherence dashboard',
              'Smart re-engagement engine',
              'HIPAA-compliant AI',
              'EHR integration',
              'Treatment protocol tracking',
              'Patient reactivation campaigns',
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
                name: 'What types of clinics is A2V2.ai built for?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A2V2.ai is built for longevity clinics, functional medicine practices, HRT clinics, health optimization practices, and any medical practice that relies on ongoing patient protocols and long-term retention.',
                },
              },
              {
                '@type': 'Question',
                name: "How is this different from my EHR's built-in messaging?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "EHR messaging is basic \u2014 appointment reminders and generic blasts. A2V2.ai uses AI to personalize every message based on each patient's treatment stage, adherence patterns, and engagement history. It predicts drop-offs and acts automatically.",
                },
              },
              {
                '@type': 'Question',
                name: 'Is A2V2.ai HIPAA compliant?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. 100% HIPAA-compliant. Patient data stays in your secure environment and is never used to train external AI models. We sign a BAA with every client.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does setup take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most practices go live in under 2 weeks. Our engineering team handles integration with your existing systems.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do we need to replace our existing systems?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. A2V2.ai sits on top of your current EHR/EMR, lab systems, and payment processors. No migrations required.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does the free audit include?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A 30-minute review of your current patient retention metrics, exact drop-off points, revenue being left on the table, and a custom projection for what A2V2.ai would recover. No pitch, no obligation.',
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
