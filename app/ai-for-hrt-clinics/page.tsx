import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import HrtFAQ from '@/components/hrt/HrtFAQ'
import CtaBanner from '@/components/CtaBanner'
import { DEMO_BOOKING_URL } from '@/lib/constants'

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
  'Live in under 2 weeks',
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
    body: 'All patient data in one view \u2014 labs, hormone levels, communications, adherence history. Integrates with existing EHR/EMR, lab partners (Quest, LabCorp), and wearables. AI surfaces at-risk patients before they churn.',
  },
  {
    title: 'Smart Re-Engagement Engine',
    body: 'Detects patients who\u2019ve gone quiet after 30\u201345 days. Personalized win-back sequences based on their therapy stage. 40% success rate re-engaging inactive HRT patients. Recovers revenue from patients you already paid to acquire.',
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
    a2v2: '<2 weeks',
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
          <div data-animate="" className="max-w-[780px]">
            <h1 className="text-[32px] md:text-h1 font-bold text-text-primary leading-tight">
              Stop Losing HRT Patients After Their First Protocol
            </h1>
            <p className="mt-6 text-btn md:text-body-lg text-text-secondary max-w-[680px] leading-relaxed">
              A2V2.ai automates patient engagement, tracks hormone therapy
              adherence, and re-engages patients before they discontinue &mdash;
              100% HIPAA compliant, integrated with your existing EHR. No new
              staff required.
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
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary max-w-[640px]">
              Your Patients Need Ongoing Therapy. Your Systems Let Them Slip
              Away.
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
              A2V2.ai: The AI Layer Your HRT Clinic Has Been Missing
            </h2>
            <p className="mt-4 text-btn md:text-body-lg text-text-secondary leading-relaxed">
              Whether you&apos;re managing testosterone replacement therapy
              (TRT), estrogen and progesterone programs, DHEA and thyroid
              optimization, or pellet therapy tracking, A2V2.ai monitors patient
              adherence to hormone protocols in real-time. Integrate lab data,
              wearable metrics, and patient-reported symptoms for a complete
              picture.
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
              Real HRT Clinics. Measurable Results.
            </h2>
          </div>

          <div className="mt-12 max-w-[640px]">
            <div data-animate="" style={{ transitionDelay: '100ms' }} className="bg-surface rounded-card p-card-p flex flex-col">
              <span className="text-primary text-sm font-bold uppercase tracking-wide">
                Revitalized Health
              </span>
              <h3 className="mt-3 text-btn md:text-body-lg font-bold text-white">
                2x HRT Patient Retention
              </h3>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
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
              A2V2.ai vs. Generic Healthcare AI Tools
            </h2>
          </div>

          <div data-animate="" className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-6 text-left text-btn font-bold text-text-primary">
                    Feature
                  </th>
                  <th className="py-4 px-6 text-left text-btn font-bold text-primary">
                    A2V2.ai
                  </th>
                  <th className="py-4 px-6 text-left text-btn font-bold text-text-secondary">
                    Generic CRM
                  </th>
                  <th className="py-4 pl-6 text-left text-btn font-bold text-text-secondary">
                    ChatGPT / Generic AI
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i < comparisonRows.length - 1 ? 'border-b border-gray-100' : ''}
                  >
                    <td className="py-4 pr-6 text-sm md:text-btn font-medium text-text-primary">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 text-sm md:text-btn text-primary font-medium">
                      {row.a2v2}
                    </td>
                    <td className="py-4 px-6 text-sm md:text-btn text-text-secondary">
                      {row.crm}
                    </td>
                    <td className="py-4 pl-6 text-sm md:text-btn text-text-secondary">
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
          <div data-animate="" className="bg-surface rounded-card p-card-p md:p-[64px] text-center">
            <h2 className="text-[24px] md:text-h2 font-bold text-white">
              What One Retained HRT Patient Is Worth to Your Clinic
            </h2>

            <div className="mt-10 flex flex-wrap justify-center">
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-primary">
                  $8K-$18K
                </p>
                <p className="mt-2 text-sm md:text-btn text-white/60">
                  Avg HRT patient value / year
                </p>
              </div>
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-primary">
                  5-15
                </p>
                <p className="mt-2 text-sm md:text-btn text-white/60">
                  Retained patients / month
                </p>
              </div>
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-primary">
                  $480K-$1.2M
                </p>
                <p className="mt-2 text-sm md:text-btn text-white/60">
                  Recovered annual revenue
                </p>
              </div>
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-primary">
                  60 Days
                </p>
                <p className="mt-2 text-sm md:text-btn text-white/60">
                  To full ROI
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
