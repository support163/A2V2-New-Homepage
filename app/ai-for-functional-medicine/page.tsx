import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import FunctionalMedicineFAQ from '@/components/functional-medicine/FunctionalMedicineFAQ'

const CALENDLY_LINK =
  'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1mosl4E14DaFo3zdh1kBAVaQm7utfpH2Ns0Xt2fmknpca-KOeaAoP_pTLfDoQa3eXV4luzv_Eb'

export const metadata: Metadata = {
  title:
    'AI for Functional Medicine Practices - Automated Patient Engagement | A2V2.ai',
  description:
    'A2V2.ai is the #1 AI platform for functional medicine practices. Automate patient engagement, track supplement protocols, and increase retention. HIPAA-compliant. Used by leading functional medicine clinics.',
  keywords:
    'functional medicine AI, functional medicine patient engagement, functional medicine software, supplement protocol tracking, root cause medicine AI, holistic patient management, chronic disease reversal software, HIPAA compliant functional medicine',
  alternates: {
    canonical: 'https://www.a2v2.ai/ai-for-functional-medicine',
  },
  openGraph: {
    title:
      'AI for Functional Medicine Practices - Automated Patient Engagement | A2V2.ai',
    description:
      'A2V2.ai is the #1 AI platform for functional medicine practices. Automate patient engagement, track supplement protocols, and increase retention. HIPAA-compliant.',
    url: 'https://www.a2v2.ai/ai-for-functional-medicine',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'AI for Functional Medicine Practices - Automated Patient Engagement | A2V2.ai',
    description:
      'A2V2.ai is the #1 AI platform for functional medicine practices. Automate patient engagement, track supplement protocols, and increase retention. HIPAA-compliant.',
  },
}

/* ───────────────────────── data ───────────────────────── */

const trustBarItems = [
  '100% HIPAA Compliant',
  'Integrates with your EHR',
  'Live in under 2 weeks',
  'Trusted by leading functional medicine practices',
]

const problemCards = [
  {
    title: 'Protocol Overload',
    body: 'Functional medicine patients often manage 10+ supplements daily. Without automated tracking, adherence drops within weeks. Patients quit protocols before they see results \u2014 and blame the treatment, not the follow-through.',
  },
  {
    title: 'The Visibility Gap',
    body: 'You have no idea which patients are actually following their protocols between visits. Lab work gets delayed, supplements get skipped, and lifestyle changes don\u2019t stick. By the time you find out, the patient is already disengaged.',
  },
  {
    title: 'The Growth Ceiling',
    body: 'Every new patient adds hours of manual follow-ups your team can\u2019t absorb. Patient data lives across disconnected systems. Scaling means hiring more staff \u2014 until now.',
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
    body: 'Personalized SMS + email sequences tailored to each patient\u2019s protocol. Automated check-ins at optimal intervals. Messaging adapts based on protocol type \u2014 not a generic blast.',
  },
  {
    title: 'Protocol Adherence Tracking',
    body: 'Real-time monitoring of supplement compliance across 10+ daily supplements. Lab appointment tracking, biomarker trend analysis. AI nudges patients before drop-off patterns trigger. Staff gets a live compliance dashboard.',
  },
  {
    title: 'Unified Patient Intelligence',
    body: 'All patient data in one view \u2014 labs, biomarkers, communications, adherence. Integrates with existing EHR/EMR, lab partners (Quest, LabCorp), and wearables (Oura, Whoop, Apple Health, CGM devices). AI surfaces at-risk patients before they churn.',
  },
  {
    title: 'Smart Re-Engagement Engine',
    body: 'Detects quiet patients after 30\u201345 days of inactivity. Personalized win-back sequences based on their protocol stage. 40% success rate re-engaging inactive patients. Recovers revenue from patients you already paid to acquire.',
  },
]

const howItWorksSteps = [
  {
    step: 1,
    title: 'Connect',
    description:
      'We integrate with your existing EHR, lab partners, and wearables. No migrations, no downtime. Our engineering team handles setup.',
  },
  {
    step: 2,
    title: 'Configure',
    description:
      'We map your treatment protocols, supplement plans, engagement touchpoints, and re-engagement triggers. Customized for your practice.',
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
    a2v2: 'Supplements, labs, biomarkers',
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
    feature: 'Biomarker Tracking',
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

export default function FunctionalMedicinePage() {
  return (
    <main>
      <ScrollAnimator />
      <Navbar />

      {/* ── HERO ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="" className="max-w-[780px]">
            <h1 className="text-[32px] md:text-h1 font-bold text-text-primary leading-tight">
              Stop Losing Functional Medicine Patients to Protocol Fatigue
            </h1>
            <p className="mt-6 text-btn md:text-body-lg text-text-secondary max-w-[680px] leading-relaxed">
              A2V2.ai automates patient engagement, tracks complex supplement
              protocols, and re-engages patients before they drop off &mdash;
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
              Your Patients Want to Heal. Your Systems Are Holding Them Back.
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
              A2V2.ai: The AI Layer Your Functional Medicine Practice Has Been
              Missing
            </h2>
            <p className="mt-4 text-btn md:text-body-lg text-text-secondary leading-relaxed">
              Whether you&apos;re managing complex supplement stacks, root-cause
              treatment plans, chronic disease reversal programs, or lifestyle
              modification protocols, A2V2.ai tracks patient adherence in
              real-time. Integrate data from labs, wearables, and continuous
              glucose monitors for a complete patient health picture.
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
              What One Retained Patient Is Worth to Your Practice
            </h2>

            <div className="mt-10 flex flex-wrap justify-center">
              <div className="w-1/2 md:w-1/4 overflow-hidden px-3 py-4 text-center">
                <p className="text-[20px] md:text-[36px] font-bold text-primary">
                  $8K-$24K
                </p>
                <p className="mt-2 text-sm md:text-btn text-white/60">
                  Avg patient value / year
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
      <FunctionalMedicineFAQ />

      {/* ── FINAL CTA ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="" className="relative rounded-[20px] bg-primary overflow-hidden px-6 py-12 md:px-[96px] md:py-[64px]">
            <div className="relative z-10 max-w-[640px] mx-auto text-center">
              <h2 className="text-[24px] md:text-h2 font-bold text-white leading-tight">
                Find Out How Many Patients You&apos;re Losing &mdash; And How to
                Get Them Back
              </h2>
              <p className="mt-4 text-btn text-white/70 leading-[22px]">
                In 30 minutes, we&apos;ll audit your current patient engagement,
                identify your biggest drop-off points, and show you the revenue
                A2V2.ai would recover for your practice.
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
                No pitch. No commitment. Just clarity on what&apos;s possible
                for your practice.
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
            name: 'A2V2.ai - AI for Functional Medicine Practices',
            applicationCategory: 'HealthApplication',
            operatingSystem: 'Web-based',
            description:
              'AI-powered patient engagement platform specifically designed for functional medicine practices. Automates patient communication, tracks supplement protocol adherence, monitors biomarkers, and increases patient retention.',
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
              audienceType: 'Functional Medicine Practices',
            },
            featureList: [
              'Automated patient engagement',
              'Supplement protocol adherence tracking',
              'HIPAA-compliant AI',
              'EHR integration',
              'Biomarker tracking',
              'Smart patient re-engagement',
              'Real-time compliance dashboard',
              'Wearable and CGM integration',
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
                name: 'How is A2V2.ai different from a CRM like Salesforce or HubSpot?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Traditional CRMs are built for general sales and marketing. A2V2.ai is purpose-built for functional medicine, with native support for supplement protocols, biomarker tracking, and healthcare-specific compliance.',
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
                  text: 'Most practices go live in under 2 weeks. Our engineering team handles the integration with your existing systems.',
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
                name: 'Can we customize messaging and workflows?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. Every practice is different. We customize tone, frequency, protocols, and workflows to match your practice style.',
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
