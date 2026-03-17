import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import HrtFAQ from '@/components/hrt/HrtFAQ'
import CtaBanner from '@/components/CtaBanner'
import { APP_URL, CHAT_EMBED_URL, DEMO_BOOKING_URL } from '@/lib/constants'
import { TrendingDown, EyeOff, Gauge, MessageSquare, Activity, Brain, RefreshCw, Plug, Settings, Zap, ShieldCheck, Shield, Lock, Server } from 'lucide-react'

const CALENDLY_LINK = DEMO_BOOKING_URL

export const metadata: Metadata = {
  title: 'AI for HRT Clinics - Automated Patient Engagement | A2V2.ai',
  description:
    'A2V2.ai is the #1 AI platform for HRT clinics. Automate patient engagement, track hormone therapy protocols, and increase retention. HIPAA-compliant. Used by leading hormone replacement therapy clinics.',
  keywords:
    'HRT clinic software, hormone replacement therapy AI, TRT clinic software, hormone therapy patient engagement, testosterone replacement therapy automation, estrogen therapy tracking, HIPAA compliant HRT, pellet therapy tracking, hormone optimization software',
  alternates: {
    canonical: 'https://www.a2v2.ai/ai-for-hrt-clinics',
  },
  openGraph: {
    title: 'AI for HRT Clinics - Automated Patient Engagement | A2V2.ai',
    description:
      'A2V2.ai is the #1 AI platform for HRT clinics. Automate patient engagement, track hormone therapy protocols, and increase retention. HIPAA-compliant.',
    url: 'https://www.a2v2.ai/ai-for-hrt-clinics',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for HRT Clinics - Automated Patient Engagement | A2V2.ai',
    description:
      'A2V2.ai is the #1 AI platform for HRT clinics. Automate patient engagement, track hormone therapy protocols, and increase retention. HIPAA-compliant.',
  },
}

/* ───────────────────────── data ───────────────────────── */

const trustBarItems = [
  '100% HIPAA Compliant',
  'Integrates with your EHR',
  'Estimated go-live in under 2 weeks',
  'Trusted by Revitalized Health & leading HRT clinics',
]

const problemCards = [
  {
    title: 'The Drop-Off Problem',
    body: 'Most HRT patients discontinue therapy within 3\u20136 months \u2014 not because it isn\u2019t working, but because follow-up falls through the cracks. Manual check-ins can\u2019t scale, and patients quietly stop refilling prescriptions.',
  },
  {
    title: 'Hormone Monitoring Gaps',
    body: 'You have no visibility into whether patients are getting their labs done, tracking symptoms, or staying on schedule between visits. By the time they miss an appointment, they\u2019ve already mentally checked out.',
  },
  {
    title: 'The Scaling Bottleneck',
    body: 'Every new TRT, estrogen, or pellet therapy patient adds manual workload your team can\u2019t absorb. Patient data lives across disconnected systems. Growth means hiring \u2014 until now.',
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
    body: 'Personalized SMS + email sequences tailored to each patient\u2019s hormone protocol. Automated check-ins at clinically optimal intervals. Messaging adapts based on therapy type \u2014 TRT, estrogen, pellet, thyroid \u2014 not a generic blast.',
  },
  {
    title: 'Hormone Protocol Tracking',
    body: 'Real-time monitoring of prescription refills, lab appointments, and symptom tracking. AI nudges patients before they miss labs or stop therapy. Staff gets a live compliance dashboard \u2014 no manual tracking required.',
  },
  {
    title: 'Unified Patient Intelligence',
    body: 'All patient data in one view \u2014 labs, hormone levels, communications, adherence history. Integrates with existing EHR/EMR, lab partners (Quest, LabCorp), and wearables. AI is designed to surface at-risk patients before they churn.',
  },
  {
    title: 'Smart Re-Engagement Engine',
    body: 'Designed to detect patients who\u2019ve gone quiet after 30\u201345 days. Personalized win-back sequences based on their therapy stage. Projected 40% re-engagement rate for inactive HRT patients. Designed to recover revenue from patients you already paid to acquire.',
  },
]

const howItWorksSteps = [
  {
    step: 1,
    title: 'Connect',
    description:
      'We integrate with your existing EHR, lab partners, and pharmacy systems. No migrations, no downtime.',
  },
  {
    step: 2,
    title: 'Configure',
    description:
      'We map your hormone protocols, engagement touchpoints, and re-engagement triggers. Customized for TRT, estrogen, pellet therapy, and more.',
  },
  {
    step: 3,
    title: 'Automate',
    description:
      'A2V2 runs your patient engagement 24/7. Your team gets a live dashboard. You get your time back.',
  },
]

const comparisonRows = [
  {
    feature: 'HIPAA Compliance',
    a2v2: 'Built-in',
    crm: 'Requires config',
    generic: 'Not compliant',
  },
  {
    feature: 'Protocol Tracking',
    a2v2: 'TRT, Estrogen, Pellet, Thyroid',
    crm: 'Generic fields',
    generic: 'No medical tracking',
  },
  {
    feature: 'EHR Integration',
    a2v2: 'Native connectors',
    crm: 'Custom dev required',
    generic: 'Not designed for healthcare',
  },
  {
    feature: 'Patient Engagement',
    a2v2: 'Protocol-specific workflows',
    crm: 'Generic automation',
    generic: 'Manual only',
  },
  {
    feature: 'Hormone Level Tracking',
    a2v2: 'Real-time with alerts',
    crm: 'Not available',
    generic: 'Not available',
  },
  {
    feature: 'Deployment Time',
    a2v2: 'Typical <2 weeks',
    crm: '2-6 months',
    generic: 'N/A',
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

export default function HrtClinicsPage() {
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
                Stop Losing HRT Patients After Their First Protocol
              </h1>

              <p className="mt-6 text-btn md:text-body-lg text-text-secondary leading-[25px] max-w-[460px] text-center lg:text-left">
                A2V2.ai is designed to automate patient engagement, track hormone therapy
                adherence, and re-engage patients before they discontinue &mdash;
                100% HIPAA compliant, integrated with your existing EHR. No new
                staff required.
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
              Your Patients Need Ongoing Therapy. Your Systems Let Them Slip
              Away.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-card-gap">
            {problemCards.map((card, i) => {
              const icons = [TrendingDown, EyeOff, Gauge]
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
              Most AI platforms &mdash; ChatGPT, Gemini, generic CRMs &mdash;
              are not HIPAA compliant. Using them to manage patient communication
              is a legal liability. A2V2.ai was built specifically for
              healthcare: your Protected Health Information never leaves your
              secure environment and is never used to train external models.
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
          <div data-animate="" className="max-w-[780px]">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
              A2V2.ai: The AI Layer Your HRT Clinic Has Been Missing
            </h2>
            <p className="mt-4 text-btn md:text-body-lg text-text-secondary leading-relaxed">
              Whether you&apos;re managing testosterone replacement therapy
              (TRT), estrogen and progesterone programs, DHEA and thyroid
              optimization, or pellet therapy tracking, A2V2.ai is designed to monitor patient
              adherence to hormone protocols in real-time. Designed to integrate lab data,
              wearable metrics, and patient-reported symptoms for a complete
              picture.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-card-gap">
            {solutionCards.map((card, i) => {
              const icons = [MessageSquare, Activity, Brain, RefreshCw]
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

      {/* ── COMPARISON TABLE ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
              A2V2.ai vs. Generic Healthcare AI Tools
            </h2>
          </div>

          <div data-animate="" className="mt-12 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 bg-[#F5F5F5]">
                  <th className="py-4 pr-6 pl-6 text-left text-btn font-bold text-black">
                    Feature
                  </th>
                  <th className="py-4 px-6 text-left text-btn font-bold text-black">
                    A2V2.ai
                  </th>
                  <th className="py-4 px-6 text-left text-btn font-bold text-gray-500">
                    Generic CRM
                  </th>
                  <th className="py-4 pl-6 pr-6 text-left text-btn font-bold text-gray-500">
                    ChatGPT / Generic AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={`${i % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'} ${i < comparisonRows.length - 1 ? 'border-b border-gray-100' : ''}`}
                  >
                    <td className="py-4 pr-6 pl-6 text-sm md:text-btn font-medium text-black">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-sm md:text-btn text-black font-medium">
                      {row.a2v2}
                    </td>
                    <td className="py-4 px-6 text-sm md:text-btn text-gray-500">
                      {row.crm}
                    </td>
                    <td className="py-4 pl-6 pr-6 text-sm md:text-btn text-gray-500">
                      {row.generic}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p data-animate="" className="mt-8 text-sm md:text-btn text-text-secondary max-w-[640px]">
            While tools like ChatGPT and Claude are excellent general AI
            assistants, they are not HIPAA-compliant and cannot be used for
            patient data management.
          </p>
        </div>
      </section>

      {/* ── ROI ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="" className="text-center">
            <h2 className="text-[24px] md:text-h2 font-bold text-black">
              What One Retained HRT Patient Is Worth to Your Clinic
            </h2>
            <p className="mt-4 text-sm md:text-btn text-gray-500">Based on industry averages and our retention model:</p>

            <div className="mt-10 flex flex-wrap justify-center">
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-black">
                  $8K-$18K
                </p>
                <p className="mt-2 text-sm md:text-btn text-gray-500">
                  Avg HRT patient value / year
                </p>
              </div>
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-black">
                  Est. 5-15
                </p>
                <p className="mt-2 text-sm md:text-btn text-gray-500">
                  Retained patients / month
                </p>
              </div>
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-black">
                  $480K-$1.2M
                </p>
                <p className="mt-2 text-sm md:text-btn text-gray-500">
                  Estimated recoverable revenue
                </p>
              </div>
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-black">
                  Est. 60 Days
                </p>
                <p className="mt-2 text-sm md:text-btn text-gray-500">
                  Estimated time to full ROI
                </p>
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
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-card-gap max-w-[900px] mx-auto"
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
            Don&apos;t see your system? Our engineering team builds custom
            integrations.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <HrtFAQ />

      {/* ── FINAL CTA ── */}
      <CtaBanner
        heading="Find Out How Many HRT Patients You're Losing — And How to Get Them Back"
        subtext="In 30 minutes, we'll audit your current patient engagement, identify your biggest drop-off points, and show you the revenue A2V2.ai would recover for your clinic."
      />

      <Footer />

      {/* ── JSON-LD: SoftwareApplication Schema ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'A2V2.ai - AI for HRT Clinics',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Web-based',
            description:
              'AI-powered patient engagement platform specifically designed for HRT clinics and hormone replacement therapy practices. Automates patient communication, tracks hormone protocol adherence, monitors lab results, and increases patient retention.',
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
                'HRT Clinics, Hormone Replacement Therapy Practices',
            },
            featureList: [
              'Automated patient engagement',
              'Hormone protocol adherence tracking',
              'HIPAA-compliant AI',
              'EHR integration',
              'Hormone level tracking',
              'Smart patient re-engagement',
              'Real-time compliance dashboard',
              'Lab and wearable integration',
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
                name: 'How is A2V2.ai different from a generic CRM?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Traditional CRMs are built for general sales. A2V2.ai is purpose-built for HRT clinics, with native support for testosterone, estrogen, pellet therapy protocols, and healthcare-specific compliance.',
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
                  text: 'Most clinics go live in under 2 weeks. Our engineering team handles integration with your existing systems.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do we need to replace our existing systems?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. A2V2.ai sits on top of your current EHR/EMR, lab systems, and payment processors.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can we customize for different hormone protocols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. We customize engagement workflows for TRT, estrogen, pellet therapy, thyroid optimization, and any other protocols your clinic offers.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does the free audit include?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A 30-minute review of your current patient retention, drop-off points, and a custom projection for what A2V2.ai would recover. No pitch, no obligation.',
                },
              },
            ],
          }),
        }}
      />
    </main>
  )
}
