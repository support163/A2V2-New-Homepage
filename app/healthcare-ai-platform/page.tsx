import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import HealthcareAiFAQ from '@/components/healthcare-ai/HealthcareAiFAQ'
import CtaBanner from '@/components/CtaBanner'
import { APP_URL, CHAT_EMBED_URL, DEMO_BOOKING_URL } from '@/lib/constants'
import {
  AlertTriangle,
  Database,
  Users,
  ShieldCheck,
  Shield,
  Lock,
  Server,
  Activity,
  Layers,
  MessageSquare,
  Brain,
  BarChart3,
  ClipboardCheck,
  Plug,
  Settings,
  Zap,
} from 'lucide-react'

const CALENDLY_LINK = DEMO_BOOKING_URL

export const metadata: Metadata = {
  title:
    'Healthcare AI Platform - HIPAA-Compliant Patient Engagement | A2V2.ai',
  description:
    'A2V2.ai is the healthcare AI platform built for clinics that need HIPAA-compliant automation. Engage patients, track treatment protocols, and increase retention — without exposing patient data. Trusted by PrevMed, Revitalized Health, and leading practices.',
  keywords:
    'healthcare AI platform, HIPAA compliant AI, medical AI software, healthcare automation platform, clinical AI solution, patient engagement AI, healthcare artificial intelligence, medical practice AI, clinic AI software, HIPAA AI tool',
  alternates: {
    canonical: 'https://www.a2v2.ai/healthcare-ai-platform',
  },
  openGraph: {
    title:
      'Healthcare AI Platform - HIPAA-Compliant Patient Engagement | A2V2.ai',
    description:
      'A2V2.ai is the healthcare AI platform built for clinics that need HIPAA-compliant automation. Engage patients, track treatment protocols, and increase retention — without exposing patient data.',
    url: 'https://www.a2v2.ai/healthcare-ai-platform',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Healthcare AI Platform - HIPAA-Compliant Patient Engagement | A2V2.ai',
    description:
      'A2V2.ai is the healthcare AI platform built for clinics that need HIPAA-compliant automation. Engage patients, track treatment protocols, and increase retention — without exposing patient data.',
  },
}

/* ───────────────────────── data ───────────────────────── */

const trustBarItems = [
  '100% HIPAA Compliant',
  'ITAR Compliant',
  'PHI Never Shared',
  'Private LLM Deployment Available',
]

const problemCards = [
  {
    title: 'Generic AI Is a Compliance Risk',
    body: 'ChatGPT, Gemini, and other general AI tools are not HIPAA-compliant. Using them for patient communication, scheduling, or data analysis puts your practice at risk of fines up to $1.5M per violation, license loss, and patient lawsuits.',
    icon: AlertTriangle,
  },
  {
    title: 'CRMs Weren\u2019t Built for Clinical Workflows',
    body: 'Salesforce and HubSpot are built for sales teams, not medical practices. They don\u2019t understand treatment protocols, lab tracking, biomarker trends, or the patient engagement patterns that drive retention in healthcare.',
    icon: Database,
  },
  {
    title: 'DIY Automation Breaks at Scale',
    body: 'Stitching together Zapier, email tools, and spreadsheets works for 50 patients. At 200+, it falls apart. Data lives in silos, follow-ups get missed, and your team spends more time managing tools than caring for patients.',
    icon: Users,
  },
]

const credibilityBadges = [
  { label: 'HIPAA Compliant', icon: ShieldCheck },
  { label: 'ITAR Compliant', icon: Shield },
  { label: 'PHI Never Shared', icon: Lock },
  { label: 'Private LLM Deployment', icon: Server },
  { label: 'End-to-End Encryption', icon: Lock },
  { label: 'BAA Provided', icon: ShieldCheck },
]

const solutionCards = [
  {
    title: 'Clinical-Grade Patient Engagement',
    body: 'AI-powered SMS, email, and phone sequences built around treatment protocols, not marketing funnels. Every touchpoint is clinically timed and personalized to the patient\u2019s therapy stage, adherence history, and communication preferences.',
    icon: MessageSquare,
  },
  {
    title: 'Treatment Protocol Intelligence',
    body: 'Native support for NAD+ therapy, peptide sequences, HRT programs, supplement protocols, and biomarker optimization. The AI understands your clinical workflows \u2014 not just appointment dates.',
    icon: Brain,
  },
  {
    title: 'Predictive Patient Analytics',
    body: 'AI analyzes engagement patterns across your entire patient base and flags at-risk patients 30\u201345 days before they drop off. Your team gets actionable alerts, not data dumps. Prevent churn instead of reacting to it.',
    icon: BarChart3,
  },
  {
    title: 'Enterprise-Grade Compliance',
    body: '100% HIPAA compliant with private LLM deployment. End-to-end AES-256 encryption, BAA provided, quarterly penetration testing, role-based access control, and complete audit logs. Built for practices that take compliance seriously.',
    icon: ClipboardCheck,
  },
]

const howItWorksSteps = [
  {
    step: 1,
    title: 'Connect',
    description:
      'We integrate A2V2.ai with your existing EHR/EMR, lab partners (Quest, LabCorp), wearables (Oura, Whoop, Apple Health, CGM), and communication systems. No migrations, no downtime.',
    icon: Plug,
  },
  {
    step: 2,
    title: 'Configure',
    description:
      'Our team maps your treatment protocols, patient journeys, engagement touchpoints, and compliance rules. Everything is customized to your specialty and workflows.',
    icon: Settings,
  },
  {
    step: 3,
    title: 'Launch',
    description:
      'A2V2 runs 24/7, engaging patients, tracking adherence, and alerting your team when human intervention is needed. Full live dashboard from day one.',
    icon: Zap,
  },
]

const comparisonRows = [
  {
    feature: 'HIPAA Compliance',
    a2v2: 'Built-in from day one',
    crm: 'Requires expensive config',
    generic: 'Not compliant',
    diy: 'Your responsibility',
  },
  {
    feature: 'Clinical Protocol Support',
    a2v2: 'NAD+, HRT, peptides, supplements',
    crm: 'Generic fields',
    generic: 'No medical features',
    diy: 'Manual setup',
  },
  {
    feature: 'EHR Integration',
    a2v2: 'Native connectors',
    crm: 'Custom development',
    generic: 'Not possible',
    diy: 'Fragile integrations',
  },
  {
    feature: 'Patient Drop-Off Prediction',
    a2v2: 'AI-powered, 30-45 day early warning',
    crm: 'Not available',
    generic: 'Not available',
    diy: 'Not available',
  },
  {
    feature: 'Deployment Time',
    a2v2: '<2 weeks',
    crm: '2-6 months',
    generic: 'N/A',
    diy: 'Months of DIY',
  },
  {
    feature: 'Private LLM',
    a2v2: 'Yes, your data stays private',
    crm: 'N/A',
    generic: 'No, trains on your data',
    diy: 'N/A',
  },
  {
    feature: 'Dedicated Support',
    a2v2: 'Healthcare specialists',
    crm: 'General support',
    generic: 'Self-service docs',
    diy: 'You\u2019re on your own',
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
  'Garmin',
  'Fitbit',
  'Twilio SMS',
  'HIPAA-Compliant Email',
  'Automated Calling',
  'Stripe',
  'Square',
  'PayPal',
  'REST API',
  'Zapier',
  'Custom Integration',
]

/* ───────────────────────── page ───────────────────────── */

export default function HealthcareAiPlatformPage() {
  return (
    <main>
      <ScrollAnimator />
      <Navbar />

      {/* ── HERO ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 w-full flex flex-col items-center lg:items-start" data-animate="">
              <h1 className="text-[28px] md:text-h1 font-bold text-text-primary leading-[1.2] md:leading-[58px] w-full md:max-w-[520px] text-center lg:text-left">
                The Healthcare AI Platform That&apos;s Actually Built for
                Healthcare
              </h1>
              <p className="mt-6 text-btn md:text-body-lg text-text-secondary leading-[25px] max-w-[460px] text-center lg:text-left">
                Most AI tools weren&apos;t designed for medicine. A2V2.ai is a
                HIPAA-compliant AI platform purpose-built for clinical workflows
                &mdash; automating patient engagement, tracking treatment
                adherence, and scaling your practice without compromising
                compliance.
              </p>

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
                  style={{ top: '4.5%', left: '4.5%', width: '91%', height: '91%' }}
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
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary max-w-[720px]">
              AI Is Transforming Every Industry. Healthcare Got Left Behind.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-card-gap">
            {problemCards.map((card, i) => (
              <div
                key={card.title}
                data-animate=""
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                className="flex flex-col"
              >
                <card.icon className="w-12 h-12 text-black" strokeWidth={1.5} />
                <h3 className="mt-4 text-btn md:text-body-lg font-bold text-black">
                  {card.title}
                </h3>
                <p className="mt-4 text-[12px] md:text-btn text-gray-500 leading-[22px]">
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
              What Makes a Healthcare AI Platform Different
            </h3>
            <p className="mt-4 text-btn md:text-body-lg text-text-secondary leading-relaxed">
              A real healthcare AI platform isn&apos;t just a chatbot with HIPAA
              bolted on. It&apos;s infrastructure built from day one around
              Protected Health Information, clinical workflows, and the specific
              engagement patterns that keep patients on treatment. A2V2.ai uses
              private LLM deployment &mdash; your patient data never touches
              public AI models, never leaves your secure environment, and is
              never used for training.
            </p>
          </div>

          <div
            data-animate=""
            className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-card-gap max-w-[800px] mx-auto"
          >
            {credibilityBadges.map((badge, i) => (
              <div
                key={badge.label}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                className="flex flex-col items-center text-center"
              >
                <badge.icon className="w-8 h-8 text-black" strokeWidth={1.5} />
                <span className="mt-3 text-sm md:text-btn font-medium text-black">
                  {badge.label}
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
              A2V2.ai: Healthcare AI That Understands Medicine
            </h2>
            <p className="mt-4 text-btn md:text-body-lg text-text-secondary leading-relaxed">
              A2V2.ai isn&apos;t a general-purpose AI adapted for healthcare
              &mdash; it was built exclusively for it. From longevity clinics
              managing NAD+ protocols to HRT practices tracking hormone levels
              to functional medicine offices juggling complex supplement stacks,
              A2V2 speaks the language of clinical care.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-card-gap">
            {solutionCards.map((card, i) => (
              <div
                key={card.title}
                data-animate=""
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                className="flex flex-col"
              >
                <card.icon className="w-10 h-10 text-black" strokeWidth={1.5} />
                <h3 className="mt-4 text-btn md:text-body-lg font-bold text-black">
                  {card.title}
                </h3>
                <p className="mt-4 text-[12px] md:text-btn text-gray-500 leading-[22px]">
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
              From Zero to AI-Powered in Two Weeks
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-card-gap">
            {howItWorksSteps.map((step, i) => (
              <div
                key={step.title}
                data-animate=""
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                className="flex flex-col"
              >
                <step.icon className="w-10 h-10 text-black" strokeWidth={1.5} />
                <span className="mt-4 text-gray-500 text-sm font-bold uppercase tracking-wide">
                  Step {step.step}
                </span>
                <h3 className="mt-3 text-btn md:text-body-lg font-bold text-black">
                  {step.title}
                </h3>
                <p className="mt-4 text-[12px] md:text-btn text-gray-500 leading-[22px]">
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
              Trusted by Leading Healthcare Practices
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-card-gap">
            {/* PrevMed */}
            <div data-animate="" style={{ transitionDelay: '100ms' }} className="rounded-2xl bg-[#F5F5F5] border border-gray-200 p-card-p flex flex-col">
              <span className="text-gray-500 text-sm font-bold uppercase tracking-wide">
                PrevMed
              </span>
              <h3 className="mt-3 text-btn md:text-body-lg font-bold text-black">
                3x Patient Engagement in 6 Months
              </h3>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-black">67%</p>
                  <p className="mt-1 text-[12px] md:text-sm text-gray-500">Reduction in no-shows</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-black">3x</p>
                  <p className="mt-1 text-[12px] md:text-sm text-gray-500">Patient engagement</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-black">2x</p>
                  <p className="mt-1 text-[12px] md:text-sm text-gray-500">Revenue growth</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-black">$850K</p>
                  <p className="mt-1 text-[12px] md:text-sm text-gray-500">Recovered in year one</p>
                </div>
              </div>
              <div className="mt-6">
                <a href="#" className="text-black text-btn font-medium hover:underline">
                  Read Full Case Study &rarr;
                </a>
              </div>
            </div>

            {/* Revitalized Health */}
            <div data-animate="" style={{ transitionDelay: '200ms' }} className="rounded-2xl bg-[#F5F5F5] border border-gray-200 p-card-p flex flex-col">
              <span className="text-gray-500 text-sm font-bold uppercase tracking-wide">
                Revitalized Health
              </span>
              <h3 className="mt-3 text-btn md:text-body-lg font-bold text-black">
                2x HRT Patient Retention
              </h3>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-black">2x</p>
                  <p className="mt-1 text-[12px] md:text-sm text-gray-500">Retention rate</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-black">40%</p>
                  <p className="mt-1 text-[12px] md:text-sm text-gray-500">Adherence increase</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-black">90%</p>
                  <p className="mt-1 text-[12px] md:text-sm text-gray-500">Comms automated</p>
                </div>
                <div>
                  <p className="text-[24px] md:text-h3 font-bold text-black">$420K</p>
                  <p className="mt-1 text-[12px] md:text-sm text-gray-500">Added annual revenue</p>
                </div>
              </div>
              <div className="mt-6">
                <a href="#" className="text-black text-btn font-medium hover:underline">
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
              A2V2.ai vs. The Alternatives
            </h2>
          </div>

          <div data-animate="" className="mt-12 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#F5F5F5]">
                  <th className="py-4 pr-4 pl-4 text-left text-btn font-bold text-black">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-left text-btn font-bold text-black">
                    A2V2.ai
                  </th>
                  <th className="py-4 px-4 text-left text-btn font-bold text-gray-500">
                    Generic CRM
                  </th>
                  <th className="py-4 px-4 text-left text-btn font-bold text-gray-500">
                    ChatGPT / Claude / Gemini
                  </th>
                  <th className="py-4 pl-4 pr-4 text-left text-btn font-bold text-gray-500">
                    DIY Automation
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`${i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'} ${i < comparisonRows.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <td className="py-4 pr-4 pl-4 text-sm md:text-btn font-medium text-black">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-sm md:text-btn text-black font-medium">
                      {row.a2v2}
                    </td>
                    <td className="py-4 px-4 text-sm md:text-btn text-gray-500">
                      {row.crm}
                    </td>
                    <td className="py-4 px-4 text-sm md:text-btn text-gray-500">
                      {row.generic}
                    </td>
                    <td className="py-4 pl-4 pr-4 text-sm md:text-btn text-gray-500">
                      {row.diy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p data-animate="" className="mt-8 text-sm md:text-btn text-text-secondary max-w-[720px]">
            The question isn&apos;t whether your practice needs AI &mdash;
            it&apos;s whether you&apos;re using AI that was built for healthcare
            or AI that puts your practice at risk.
          </p>
        </div>
      </section>

      {/* ── ROI ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="" className="text-center">
            <h2 className="text-[24px] md:text-h2 font-bold text-black">
              The ROI of a Real Healthcare AI Platform
            </h2>

            <div className="mt-10 flex flex-wrap justify-center">
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-black">
                  73%
                </p>
                <p className="mt-2 text-sm md:text-btn text-gray-500">
                  Patient drop-off rate without AI
                </p>
              </div>
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-black">
                  35%
                </p>
                <p className="mt-2 text-sm md:text-btn text-gray-500">
                  Drop-off rate with A2V2.ai
                </p>
              </div>
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-black">
                  $1.14M
                </p>
                <p className="mt-2 text-sm md:text-btn text-gray-500">
                  Avg revenue saved annually
                </p>
              </div>
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-black">
                  &lt;60 Days
                </p>
                <p className="mt-2 text-sm md:text-btn text-gray-500">
                  Time to full ROI
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm md:text-btn text-gray-500 max-w-[560px] mx-auto">
              Every month without automated patient engagement is revenue
              walking out the door. We&apos;ll show you exactly how much in a
              free 30-minute audit.
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
              Connects to Your Entire Clinical Stack
            </h2>
          </div>

          <div
            data-animate=""
            className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-card-gap max-w-[1000px] mx-auto"
          >
            {integrations.map((name, i) => (
              <div
                key={name}
                style={{ transitionDelay: `${(i + 1) * 50}ms` }}
                className="rounded-2xl bg-[#F5F5F5] border border-gray-200 p-5 flex items-center justify-center text-center min-h-[80px]"
              >
                <span className="text-sm md:text-btn font-medium text-black">
                  {name}
                </span>
              </div>
            ))}
          </div>

          <p data-animate="" className="mt-8 text-center text-sm md:text-btn text-text-secondary">
            Don&apos;t see your system? Our engineering team builds custom
            integrations &mdash; average turnaround 2-4 weeks.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <HealthcareAiFAQ />

      {/* ── FINAL CTA ── */}
      <CtaBanner
        heading="Your Practice Deserves AI That Was Built for Healthcare"
        subtext="In 30 minutes, we'll show you exactly where you're losing patients, what it's costing you, and how A2V2.ai recovers that revenue — automatically and compliantly."
      />

      <Footer />

      {/* ── JSON-LD: SoftwareApplication Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'A2V2.ai - Healthcare AI Platform',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Web-based',
            description:
              'HIPAA-compliant healthcare AI platform purpose-built for clinical workflows. Automates patient engagement, tracks treatment protocol adherence, predicts patient drop-offs, and increases retention for medical practices.',
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
                'Healthcare Practices, Medical Clinics, Specialty Practices',
            },
            featureList: [
              'Clinical-grade patient engagement',
              'Treatment protocol intelligence',
              'Predictive patient analytics',
              'Enterprise-grade HIPAA compliance',
              'Private LLM deployment',
              'EHR/EMR integration',
              'Real-time adherence dashboard',
              'Smart re-engagement engine',
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
                name: 'What makes A2V2.ai different from other healthcare AI platforms?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A2V2.ai was built exclusively for healthcare from the ground up \u2014 not adapted from a general-purpose AI. We natively support clinical protocols (NAD+, HRT, peptides, supplements), integrate with EHR systems, and use private LLM deployment so your patient data never touches public models.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I use ChatGPT or Claude for patient engagement?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No \u2014 not safely. ChatGPT, Claude, and Gemini are not HIPAA-compliant for patient data management. Using them for patient communication creates legal liability with potential fines up to $1.5M per violation. A2V2.ai is 100% HIPAA-compliant with private LLM deployment.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is A2V2.ai HIPAA compliant?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. 100% HIPAA-compliant with end-to-end AES-256 encryption, private LLM deployment, BAA provided, quarterly penetration testing, and complete audit logs. Your PHI never leaves your secure environment.',
                },
              },
              {
                '@type': 'Question',
                name: 'What specialties does A2V2.ai support?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Longevity clinics, functional medicine practices, HRT clinics, health optimization practices, executive health programs, and any medical practice that relies on ongoing treatment protocols and long-term patient retention.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does implementation take?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most practices go live in under 2 weeks. Our dedicated implementation team handles EHR integration, protocol mapping, and staff training.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do we need to replace our existing systems?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. A2V2.ai sits on top of your current stack \u2014 EHR/EMR, lab systems, communication tools, and payment processors. No migrations required.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does the free audit include?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A 30-minute review of your current patient retention, drop-off patterns, revenue impact, and a custom projection showing what A2V2.ai would recover for your specific practice. No pitch, no obligation.',
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
