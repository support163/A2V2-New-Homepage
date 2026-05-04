'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts'
import CtaSection from '@/app/Test-Website/components/CtaSection'
import { DEMO_BOOKING_URL } from '@/lib/constants'

const CURRENT_HREF = '/blog/how-to-choose-ai-chatbot-medical-practice'

const relatedPosts = blogPosts.filter((p) =>
  p.href === '/blog/best-ai-tools-longevity-clinics-2026' ||
  p.href === '/blog/chatgpt-vs-hipaa-compliant-ai' ||
  p.href === '/blog/introducing-medical-agents'
)

const faqItems = [
  {
    q: 'What is the most important thing to look for in a medical chatbot?',
    a: 'HIPAA compliance with a BAA included. Everything else is secondary. If the chatbot cannot legally handle patient data, it does not matter how good the features are.',
  },
  {
    q: 'Can I use a general chatbot builder like Intercom or Drift for my practice?',
    a: 'Not for any workflow involving PHI. General chatbot builders are designed for customer support and sales. They typically do not offer BAAs, HIPAA-eligible model selection, or clinical modules. You can use them for non-clinical purposes (general website inquiries, marketing) but not for patient-facing clinical interactions.',
  },
  {
    q: 'How much should a medical chatbot cost?',
    a: 'Purpose-built healthcare platforms range from free tiers to $99 per month. Enterprise solutions start at $25K or more per year. For a typical longevity, HRT, or functional medicine practice, expect to pay $20 to $100 per month for a platform that includes HIPAA compliance, clinical modules, and basic EHR integration.',
  },
  {
    q: 'How long does implementation take?',
    a: 'Purpose-built healthcare platforms typically take 1 to 2 weeks to implement. General chatbot builders adapted for healthcare take 2 to 4 weeks. Enterprise CRM solutions take 2 to 6 months. Custom development takes 3 to 12 months.',
  },
  {
    q: 'Should I choose a chatbot with the most AI models available?',
    a: 'More models is not necessarily better. What matters is whether the platform offers HIPAA-eligible models specifically and whether you can test them in a sandbox before deploying to patients. Having 50 models available but only 3 that are HIPAA-eligible is functionally the same as having 3 models.',
  },
  {
    q: 'Can my chatbot replace my front desk staff?',
    a: 'No, and it should not. A chatbot handles the repetitive, scalable interactions: answering common questions, sending follow-ups, scheduling appointments, capturing leads. Your front desk staff handles the human judgment calls: complex scheduling, insurance questions, upset patients, and in-person coordination. The chatbot frees your staff to focus on the work that requires a human.',
  },
  {
    q: 'What if my patients are not tech-savvy?',
    a: 'Most modern medical chatbots communicate through channels patients already use: SMS text messages and email. Patients do not need to download an app or learn a new interface. If they can read and respond to a text message, they can interact with the chatbot.',
  },
  {
    q: 'Can I switch chatbot providers later if I am not happy?',
    a: 'That depends on data portability. Before signing up, confirm that you can export your conversation logs, patient contacts, CRM data, and configuration settings. If the vendor cannot guarantee data export, switching later will mean starting from scratch.',
  },
]

/* -- Share bar -- */
function ShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const btnStyle = {
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#ffffff',
  }

  return (
    <div className="flex items-center gap-3 mt-6">
      <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Share:</span>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
        style={btnStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.727-8.842L1.064 2.25H8.08l4.262 5.639L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
        style={btnStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
        </svg>
      </a>

      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="flex items-center gap-1.5 px-3 h-9 rounded-full transition-colors text-sm"
        style={btnStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
      >
        {copied ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            Copy link
          </>
        )}
      </button>
    </div>
  )
}

/* -- FAQ accordion -- */
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div data-animate="" className="mt-16 pt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <h2 className="text-[22px] md:text-[28px] font-semibold mb-8" style={{ color: '#ffffff' }}>
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col">
        {faqItems.map((item, i) => (
          <div
            key={i}
            style={{
              borderTop: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-[15px] md:text-base font-semibold leading-snug" style={{ color: '#ffffff' }}>
                {item.q}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-[500px] pb-5' : 'max-h-0'}`}>
              <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* -- Action callout box -- */
function ActionBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-4 mb-3"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {children}
    </div>
  )
}

/* -- Note box -- */
function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-r-lg p-4 mb-6"
      style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '3px solid rgba(255,255,255,0.15)' }}
    >
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
        {children}
      </p>
    </div>
  )
}

/* -- Dark table -- */
type CellValue = string | { text: string; tint?: 'green' | 'red' | 'yellow' }

function DarkTable({ headers, rows }: { headers: string[]; rows: CellValue[][] }) {
  return (
    <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '480px' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.06)' }}>
              {headers.map((h, i) => (
                <th
                  key={i}
                  style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#ffffff',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} style={{ background: ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                {row.map((cell, ci) => {
                  const isObj = typeof cell === 'object'
                  const text = isObj ? cell.text : cell
                  const tint = isObj ? cell.tint : undefined
                  const color =
                    tint === 'green' ? 'rgba(16,185,129,0.9)' :
                    tint === 'red' ? 'rgba(239,68,68,0.85)' :
                    tint === 'yellow' ? 'rgba(234,179,8,0.9)' :
                    'rgba(255,255,255,0.75)'
                  return (
                    <td
                      key={ci}
                      style={{
                        padding: '12px 16px',
                        fontSize: 14,
                        color,
                        fontWeight: ci === 0 ? 500 : 400,
                        borderBottom: ri < rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                        verticalAlign: 'top',
                      }}
                    >
                      {text}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* -- Body text styles -- */
const bodyText: React.CSSProperties = {
  fontSize: 18,
  lineHeight: 1.75,
  color: 'rgba(255,255,255,0.8)',
  marginBottom: '1.5rem',
}

const h2Style: React.CSSProperties = {
  fontSize: 26,
  fontWeight: 600,
  color: '#ffffff',
  marginTop: '3rem',
  marginBottom: '1rem',
  lineHeight: 1.3,
}

const h3Style: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 600,
  color: '#ffffff',
  marginTop: '2rem',
  marginBottom: '0.75rem',
  lineHeight: 1.3,
}

const strongStyle: React.CSSProperties = {
  color: '#ffffff',
  fontWeight: 700,
}

/* -- Main component -- */
export default function AiChatbotMedicalPracticeBlogPost() {
  const articleUrl = 'https://www.a2v2.ai/blog/how-to-choose-ai-chatbot-medical-practice'
  const articleTitle = 'How to Choose an AI Chatbot for Your Medical Practice'

  return (
    <div style={{ background: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>
      <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <Link
            href="/blog"
            className="transition-colors"
            style={{ color: 'rgba(255,255,255,0.7)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
          >
            Blog
          </Link>
          <span>/</span>
          <span>Quick Guides</span>
        </div>

        {/* Header */}
        <header className="mb-10">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4"
            style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}
          >
            Quick Guides
          </span>
          <h1
            className="text-[28px] md:text-[40px] font-semibold leading-tight tracking-tight"
            style={{ color: '#ffffff' }}
          >
            How to Choose an AI Chatbot for Your Medical Practice
          </h1>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            There are hundreds of AI chatbot platforms on the market. Fewer than a dozen are built for healthcare. And only a handful are actually safe to use with patient data. Here is a practical framework for evaluating your options without getting burned.
          </p>

          {/* Author row */}
          <div className="mt-6 flex items-center gap-3">
            <Image
              src="/icons/Solo-Logo-A2V2.svg"
              alt="A2V2"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              By The A2V2 Team &middot; 13 min read &middot; May 3, 2026
            </span>
          </div>

          <ShareBar url={articleUrl} title={articleTitle} />
        </header>

        {/* Hero image */}
        <div className="w-full mb-12">
          <Image
            src="/images/blog-post17.png"
            alt="How to Choose an AI Chatbot for Your Medical Practice"
            width={720}
            height={405}
            className="w-full rounded-xl object-cover"
            quality={100}
            unoptimized
            priority
          />
        </div>

        {/* Body */}
        <article>
          <p style={bodyText}>
            Every medical practice will use an AI chatbot within the next 2 years. The question is not whether to adopt one. The question is whether you will choose the right one or spend 6 months learning why the wrong one is a liability.
          </p>
          <p style={bodyText}>
            The market is flooded. General-purpose chatbot builders, customer support platforms repurposed for healthcare, scrappy startups promising HIPAA compliance, and enterprise solutions that cost more than your annual rent. Each one claims to be perfect for medical practices. Most of them are not.
          </p>
          <p style={bodyText}>
            This guide is a practical, no-nonsense framework for evaluating AI chatbots for your medical practice. No rankings. No affiliate links. Just the criteria that actually matter and the questions that expose whether a vendor is ready for healthcare or just marketing to it.
          </p>

          {/* H2: 6 Criteria */}
          <h2 style={h2Style} data-animate="">The 6 Criteria That Actually Matter</h2>
          <p style={bodyText}>
            Most chatbot comparison articles focus on features: &quot;Does it have a drag-and-drop builder? Can it integrate with Slack? Does it support multiple languages?&quot; Those are fine for a marketing agency. They are irrelevant for a medical practice.
          </p>
          <p style={bodyText}>
            Here are the 6 criteria that determine whether a chatbot is safe, effective, and sustainable for clinical use.
          </p>

          {/* Criterion 1 */}
          <h3 style={h3Style}>Criterion 1 &mdash; HIPAA Compliance (Non-Negotiable)</h3>
          <p style={bodyText}>
            This is not a feature. It is a legal requirement. If your chatbot will interact with patients, collect health information, reference treatment details, or connect to your EHR in any way, it must be HIPAA compliant.
          </p>
          <p style={bodyText}>
            HIPAA compliance is not a checkbox. It is a stack of legal, technical, and operational safeguards that must all be in place simultaneously:
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. Business Associate Agreement (BAA)</strong> &mdash; A signed legal contract defining how the vendor handles PHI. No BAA means no PHI. Period. If a vendor tells you that you do not need a BAA because &quot;the chatbot does not store data&quot; or &quot;the data is anonymized,&quot; walk away.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. Encryption at rest and in transit</strong> &mdash; AES-256 for stored data, TLS 1.3 for data in motion. Ask for specifics. &quot;We use encryption&quot; is not a sufficient answer.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. Audit trails</strong> &mdash; Every interaction involving PHI must be logged with who, what, when, and from where. These logs must be retained and exportable for compliance audits.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>4. Access controls</strong> &mdash; Role-based permissions so your receptionist does not have the same data access as your physician.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>5. Data training restrictions</strong> &mdash; Your patient data must never be used to train the vendor&apos;s AI models. This must be guaranteed in writing, either in the BAA or a separate data processing agreement.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>6. U.S. data residency</strong> &mdash; For U.S. healthcare, patient data should be stored in U.S.-based data centers. If the vendor cannot tell you where your data is stored, that is a problem.
            </p>
          </ActionBox>

          <NoteBox>
            Red flag: any vendor that lists HIPAA compliance as a premium tier or enterprise add-on is telling you that their base product is not compliant. Compliance should be the foundation, not an upsell.
          </NoteBox>

          <p style={bodyText}>
            <Link href="/blog/what-is-hipaa-compliant-ai" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              Deep dive on HIPAA-compliant AI
            </Link>
          </p>

          {/* Criterion 2 */}
          <h3 style={h3Style}>Criterion 2 &mdash; Clinical Awareness (Not Just Chat)</h3>
          <p style={bodyText}>
            Most chatbot platforms were built for customer support or sales. They understand conversations. They do not understand medicine.
          </p>
          <p style={bodyText}>
            A chatbot for a medical practice needs to do more than answer FAQs. It needs to understand that:
          </p>

          <ul className="flex flex-col gap-2 mb-6">
            {[
              'A patient asking about "side effects after my last infusion" is not a complaint. It is a clinical triage moment.',
              'A follow-up 48 hours after an NAD+ session requires different content than a follow-up 48 hours after a blood draw.',
              'A patient on multiple protocols needs coordinated communication, not 3 separate message streams.',
              'Some questions require escalation to a provider, not an AI-generated answer.',
              'Medical terminology, drug names, and protocol references need to be handled accurately, not approximated.',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 17, lineHeight: 1.7, color: 'rgba(255,255,255,0.8)', paddingLeft: '1.25rem', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#ffffff' }}>&#x2022;</span>
                {item}
              </li>
            ))}
          </ul>

          <p style={bodyText}>
            The test is simple: can the chatbot differentiate between a patient asking about parking and a patient reporting chest pressure? If both get the same workflow, the chatbot is not ready for clinical use.
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>What to look for:</strong> Does the platform offer clinical modules (health parameters, medications, prescriptions, lab tracking)? Can you define protocol stages and tie communication to them? Does the AI have an escalation framework for clinical urgency? These are the features that separate a healthcare chatbot from a customer support bot with a stethoscope icon.
            </p>
          </ActionBox>

          {/* Criterion 3 */}
          <h3 style={h3Style}>Criterion 3 &mdash; AI Model Quality and Selection</h3>
          <p style={bodyText}>
            The language model powering your chatbot determines the quality of every patient interaction. Not all models are equal, and for healthcare, not all models are legally usable.
          </p>
          <p style={bodyText}>
            Key questions:
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. Which models are available?</strong> The best platforms offer multiple model options (Claude, GPT, Gemini, open-source) so you can choose based on capability, cost, and compliance requirements.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. Which models are HIPAA-eligible?</strong> Not every model from every provider has BAA coverage. Your platform should curate a list of HIPAA-eligible models and restrict medical workflows to those models only.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. Can you test models before deploying?</strong> A sandbox or testing environment where you can run real patient prompts against different models is essential. Model behavior varies and you need to verify that the responses meet your clinical standards.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>4. How are credit costs structured?</strong> Some models cost 10x more per interaction than others with similar quality. Understand the cost per message before you scale.
            </p>
          </ActionBox>

          <p style={bodyText}>
            <Link href="/blog/april-2026-model-catalog-update" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              See the full HIPAA-eligible model catalog
            </Link>
          </p>

          {/* Criterion 4 */}
          <h3 style={h3Style}>Criterion 4 &mdash; Integration with Your Existing Stack</h3>
          <p style={bodyText}>
            A chatbot that exists in isolation creates more work, not less. It needs to connect to the systems your practice already uses.
          </p>

          <DarkTable
            headers={['Integration', 'Why It Matters', 'Priority']}
            rows={[
              ['EHR/EMR', 'Chatbot actions (scheduling, notes, lab orders) need to flow into your clinical record', { text: 'Critical', tint: 'green' }],
              ['Scheduling/calendar', 'Patients expect to book directly through the chat, not be told to call the front desk', { text: 'High', tint: 'green' }],
              ['Lab systems', 'Automated follow-ups timed to lab results require access to lab data', { text: 'High', tint: 'green' }],
              ['SMS/messaging', 'Multi-channel communication (chat, SMS, email) needs a unified platform', { text: 'High', tint: 'green' }],
              ['Payment processing', 'If patients pay through your platform, the chatbot should be aware of billing status', { text: 'Medium', tint: 'yellow' }],
              ['Wearable devices', 'Continuous health data from Oura, Whoop, CGMs can inform chatbot conversations', { text: 'Nice to have', tint: 'yellow' }],
              ['Custom API', 'For unique workflows or proprietary systems not covered by standard integrations', { text: 'Depends on practice', tint: 'yellow' }],
            ]}
          />

          <NoteBox>
            Ask vendors specifically how many EHR integrations they support and whether they are native integrations or third-party middleware. There is a difference between &quot;we integrate with Epic&quot; (direct) and &quot;you can connect us to Epic through Zapier&quot; (fragile).
          </NoteBox>

          {/* Criterion 5 */}
          <h3 style={h3Style}>Criterion 5 &mdash; Implementation Timeline and Complexity</h3>
          <p style={bodyText}>
            Longevity clinics, HRT practices, and functional medicine offices are typically small teams (5 to 20 staff). They cannot afford 6-month enterprise implementations with dedicated IT consultants.
          </p>

          <DarkTable
            headers={['Vendor Type', 'Typical Implementation', 'Staff Required', 'Realistic for Small Practice?']}
            rows={[
              ['Purpose-built healthcare platform', '1 to 2 weeks', '1 admin + vendor support', { text: 'Yes', tint: 'green' }],
              ['General chatbot builder adapted for healthcare', '2 to 4 weeks', '1 admin + possibly developer', { text: 'Depends', tint: 'yellow' }],
              ['Enterprise CRM with chatbot add-on', '2 to 6 months', 'IT team + implementation consultants', { text: 'No', tint: 'red' }],
              ['Custom development', '3 to 12 months', 'Development team', { text: 'No', tint: 'red' }],
            ]}
          />

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>What to ask:</strong> &quot;How long until we are live with our first patient-facing chatbot? What does the implementation process look like step by step? What do we need to provide? What do you handle?&quot; Any vendor that cannot give you a clear, specific answer to these questions has not done this enough times.
            </p>
          </ActionBox>

          {/* Criterion 6 */}
          <h3 style={h3Style}>Criterion 6 &mdash; Total Cost of Ownership</h3>
          <p style={bodyText}>
            The sticker price is not the real cost. The real cost includes the platform fee, integration costs, staff training time, ongoing maintenance, and the cost of switching if the platform does not work out.
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. Platform fee</strong> &mdash; Monthly subscription. Ranges from free tiers to $99+ per month for healthcare platforms, to $25K+ per year for enterprise CRMs. Make sure you understand what is included and what costs extra.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. Per-message or per-interaction fees</strong> &mdash; Some platforms charge per AI message on top of the subscription. At high patient volumes, this adds up quickly. Ask for the credit cost per message and model your monthly volume.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. Integration costs</strong> &mdash; Are EHR integrations included or do they require paid connectors or developer time?
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>4. Training costs</strong> &mdash; How long does it take your team to learn the platform? Is onboarding included or billed separately?
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>5. Switching costs</strong> &mdash; If the platform does not work out, can you export your data? Your conversation logs? Your patient contacts? Or are you locked in?
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>6. Compliance costs</strong> &mdash; Is HIPAA compliance included or an add-on? Is the BAA included or does it require an enterprise contract?
            </p>
          </ActionBox>

          <NoteBox>
            The cheapest option on paper is often the most expensive in practice. A $20 per month chatbot builder that requires $5,000 in custom development, $2,000 in integration work, and 3 months of staff time to get HIPAA-compliant costs far more than a $40 per month purpose-built platform that works out of the box.
          </NoteBox>

          {/* H2: 12 Questions */}
          <h2 style={h2Style} data-animate="">The 12 Questions to Ask Every Vendor</h2>
          <p style={bodyText}>
            Before signing up for any AI chatbot platform, ask these 12 questions. The answers will tell you whether the vendor is ready for healthcare or just marketing to it.
          </p>

          <p style={{ ...bodyText, fontWeight: 600, color: '#ffffff', marginBottom: '0.75rem' }}>
            COMPLIANCE (questions 1 to 4):
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. &quot;Do you provide a BAA?&quot;</strong> The only acceptable answer is yes, included, for all customers. Not &quot;available on enterprise tier.&quot; Not &quot;we can discuss it.&quot; Included.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. &quot;Is patient data ever used to train your AI models?&quot;</strong> The only acceptable answer is no, guaranteed in writing.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. &quot;What encryption standards do you use at rest and in transit?&quot;</strong> Look for AES-256 and TLS 1.3 specifically. If they say &quot;industry standard&quot; without naming the algorithms, they may not know.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>4. &quot;Can you produce a complete audit trail for every patient interaction?&quot;</strong> If they hesitate, they do not have audit logging. That is a HIPAA requirement, not a nice-to-have.
            </p>
          </ActionBox>

          <p style={{ ...bodyText, fontWeight: 600, color: '#ffffff', marginBottom: '0.75rem', marginTop: '1.5rem' }}>
            CLINICAL CAPABILITY (questions 5 to 8):
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>5. &quot;Can the chatbot differentiate between protocol stages?&quot;</strong> A chatbot that sends the same message to a Week 1 patient and a Week 12 patient is a generic messaging tool, not a clinical assistant.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>6. &quot;How does the chatbot handle clinical escalation?&quot;</strong> When a patient reports something that requires human judgment (adverse reaction, emergency symptoms, medication concern), what happens? Does the chatbot flag it, route it, or just say &quot;please call your doctor&quot;?
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>7. &quot;Does the platform include clinical modules?&quot;</strong> Health parameters, medications, prescriptions, lab tracking, document extraction. These are the features that separate healthcare platforms from general chatbot builders.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>8. &quot;Which AI models are available and which are HIPAA-eligible?&quot;</strong> The vendor should be able to name specific models and explain why each one is or is not eligible for clinical use.
            </p>
          </ActionBox>

          <p style={{ ...bodyText, fontWeight: 600, color: '#ffffff', marginBottom: '0.75rem', marginTop: '1.5rem' }}>
            PRACTICAL (questions 9 to 12):
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>9. &quot;How long until we are live?&quot;</strong> A specific, confident answer (e.g. &quot;most practices are live within 2 weeks&quot;) indicates experience. A vague answer indicates they are figuring it out as they go.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>10. &quot;What EHR systems do you integrate with natively?&quot;</strong> Ask for a list. Ask if the integrations are direct or through middleware. Ask if integration is included in the price.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>11. &quot;Can I export my data if I leave?&quot;</strong> Conversation logs, patient contacts, CRM data, configuration settings. If data is locked in, you are locked in.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>12. &quot;What does pricing look like at 500 patients? At 1,000?&quot;</strong> Understand how costs scale. Some platforms get dramatically more expensive at volume. Others stay flat. Know before you grow.
            </p>
          </ActionBox>

          <div
            className="rounded-2xl p-6 text-center mb-8"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
              &quot;If a vendor cannot answer all 12 of these questions clearly and confidently, they are not ready for your practice. Keep looking.&quot;
            </p>
          </div>

          {/* H2: What Good Looks Like */}
          <h2 style={h2Style} data-animate="">What &quot;Good&quot; Looks Like in Practice</h2>
          <p style={bodyText}>
            To make this concrete, here is what a well-chosen medical chatbot does for a longevity clinic on a typical day:
          </p>

          <DarkTable
            headers={['Time', 'What Happens', 'Without Chatbot']}
            rows={[
              ['7:30 AM', 'AI sends NAD+ post-infusion check-in to 4 patients treated yesterday. 3 respond positively. 1 reports headache. AI reassures and logs the symptom.', 'Nurse manually checks list. Calls 2 of 4. Other 2 get missed.'],
              ['9:00 AM', 'New prospect asks about peptide therapy on website. AI explains the protocol, captures name and email, schedules a consultation.', 'Prospect reads FAQ page, does not convert, leaves.'],
              ['11:00 AM', 'Patient due for 90-day labs gets automated reminder with prep instructions and scheduling link.', 'Front desk remembers to call by Thursday. Maybe.'],
              ['2:00 PM', 'AI flags a patient who has been inactive for 16 days. Care coordinator receives alert and makes a personal call.', 'Patient crosses 30 days of silence before anyone notices.'],
              ['4:30 PM', 'Patient completing HRT Month 2 receives biomarker progress update showing testosterone improvement.', 'Patient wonders if the protocol is working. Considers stopping.'],
              ['8:45 PM', 'Patient asks the chatbot whether it is normal to feel tired on day 3 of a supplement protocol. AI provides guidance and notes the interaction.', 'Patient Googles it. Finds alarming forum posts. Panics.'],
            ]}
          />

          <p style={bodyText}>
            This is not aspirational. This is what protocol-aware, HIPAA-compliant chatbots are designed to deliver today.
          </p>

          {/* H2: Three Categories */}
          <h2 style={h2Style} data-animate="">The Three Categories of Healthcare Chatbots</h2>
          <p style={bodyText}>
            Not all healthcare chatbots are the same. Understanding the categories helps you evaluate what you actually need.
          </p>

          <h3 style={h3Style}>Category 1 &mdash; Scheduling and FAQ Bots</h3>
          <p style={bodyText}>
            These are the simplest. They answer common questions (hours, location, insurance, parking), handle appointment scheduling, and send reminders. They are widely available, relatively inexpensive, and many are HIPAA compliant.
          </p>
          <p style={bodyText}>
            <strong style={strongStyle}>Best for:</strong> Practices that primarily need to reduce front desk call volume and automate scheduling.
          </p>
          <p style={bodyText}>
            <strong style={strongStyle}>Limitations:</strong> No clinical awareness. No protocol tracking. No patient engagement beyond the appointment transaction. They do not reduce drop-off or improve retention.
          </p>

          <h3 style={h3Style}>Category 2 &mdash; Patient Engagement Platforms</h3>
          <p style={bodyText}>
            These go beyond scheduling into the clinical relationship. They send protocol-aware follow-ups, track adherence, detect disengagement, and maintain the patient connection between visits. They typically include CRM functionality, clinical modules, and multi-channel messaging.
          </p>
          <p style={bodyText}>
            <strong style={strongStyle}>Best for:</strong> Practices with complex, long-term protocols (longevity, HRT, functional medicine, health optimization) where patient retention is a revenue-critical metric.
          </p>
          <p style={bodyText}>
            <strong style={strongStyle}>Limitations:</strong> More complex to implement than Category 1. Require protocol mapping and configuration. Higher price point.
          </p>
          <p style={bodyText}>
            A2V2 Medical Agents fall into this category, purpose-built for clinical engagement with HIPAA compliance, protocol awareness, and medical-specific modules.
          </p>

          <h3 style={h3Style}>Category 3 &mdash; Enterprise Clinical AI</h3>
          <p style={bodyText}>
            These are large-scale platforms designed for hospital systems, health networks, and multi-location practices. They include deep EHR integration, population health analytics, clinical decision support, and often require dedicated implementation teams.
          </p>
          <p style={bodyText}>
            <strong style={strongStyle}>Best for:</strong> Organizations with 50+ providers, 10,000+ patients, and dedicated IT departments.
          </p>
          <p style={bodyText}>
            <strong style={strongStyle}>Limitations:</strong> Implementation takes 3 to 12 months. Costs $50K to $500K+ per year. Overkill for practices with 5 to 20 staff.
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>For most longevity, HRT, and functional medicine practices, Category 2 is the right fit.</strong> Complex enough to handle clinical workflows. Simple enough to implement in under 2 weeks. Affordable enough to deliver ROI within 60 days.
            </p>
          </ActionBox>

          {/* H2: Common Mistakes */}
          <h2 style={h2Style} data-animate="">Common Mistakes When Choosing a Medical Chatbot</h2>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. Choosing based on features instead of compliance.</strong> The most feature-rich chatbot on the market is worthless if it cannot handle PHI legally. Compliance first. Features second.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. Buying an enterprise solution for a 10-person practice.</strong> Salesforce Health Cloud is a powerful platform. It is also designed for hospital systems with IT departments. A 200-patient longevity clinic does not need it and cannot implement it efficiently.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. Assuming your EHR&apos;s built-in messaging is sufficient.</strong> Most EHR patient portals send generic messages through clunky interfaces that patients do not check. They are documentation tools, not engagement tools.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>4. Choosing based on a demo instead of a trial.</strong> Demos are rehearsed. Trials are real. Any vendor that will not let you test with real workflows before committing is not confident in their product.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>5. Ignoring switching costs.</strong> Ask about data portability before you sign up, not when you want to leave. If your conversation logs, patient contacts, and configuration cannot be exported, you are building on a platform you can never leave.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>6. Treating the chatbot as a set-and-forget tool.</strong> Even the best AI chatbot requires periodic review. Patient prompts change. Protocols evolve. Your team should review chatbot interactions monthly and adjust training, escalation rules, and messaging as needed.
            </p>
          </ActionBox>

          {/* H2: Decision Framework */}
          <h2 style={h2Style} data-animate="">A Decision Framework</h2>
          <p style={bodyText}>
            If you are evaluating chatbots right now, here is a simple decision tree:
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. Does it have a BAA included on your plan?</strong> If no, stop. Move to the next vendor.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. Can it differentiate between protocol stages?</strong> If no, it is a scheduling bot, not a clinical engagement tool. Fine for Category 1 needs. Not enough for retention.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. Can it be live in under 2 weeks?</strong> If no, assess whether you have the IT resources and timeline for a longer implementation.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>4. Does the total cost (platform plus integration plus training plus per-message fees) fit your budget at your patient volume?</strong> Model 12 months of costs, not just month 1.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>5. Can you export your data if you leave?</strong> If no, factor in the switching risk.
            </p>
          </ActionBox>

          <p style={{ ...bodyText, marginTop: '1.5rem' }}>
            If a vendor passes all 5 checkpoints, it is worth a trial. Run it on your highest-volume protocol for 30 days before committing to a full rollout.
          </p>

          {/* H2: Getting Started */}
          <h2 style={h2Style} data-animate="">Getting Started</h2>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. Define your primary use case.</strong> Are you trying to reduce no-shows (Category 1), improve patient retention (Category 2), or overhaul clinical operations (Category 3)? Your answer determines which category of chatbot to evaluate.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. Run the 12-question evaluation</strong> on your shortlisted vendors. Any vendor that cannot answer all 12 is not ready.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. Request a trial, not a demo.</strong> Test the chatbot with your actual protocols, your actual patient questions, and your actual team. A demo shows you the best case. A trial shows you the real case.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>4. Start with one protocol.</strong> Do not try to automate everything at once. Pick your highest-volume protocol, configure the chatbot, test for 2 to 4 weeks, measure the impact, then expand.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>5. Book a free consultation.</strong> If you want help evaluating your options, A2V2 offers a free 30-minute session where we review your current patient engagement workflow, identify gaps, and show you what a Medical Agent looks like for your specific practice.{' '}
              <a href={DEMO_BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Book a free consultation
              </a>
            </p>
          </ActionBox>

          <p style={{ ...bodyText, marginTop: '1.5rem' }}>
            <Link href="/blog/introducing-medical-agents" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              See how A2V2 Medical Agents work
            </Link>
            {' '}&middot;{' '}
            <Link href="/blog/medical-agents-user-guide" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              Read the Medical Agents user guide
            </Link>
            {' '}&middot;{' '}
            <Link href="/blog/best-ai-tools-longevity-clinics-2026" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              Compare the best AI tools for longevity clinics
            </Link>
          </p>
        </article>

        {/* FAQ */}
        <FAQAccordion />

        {/* Bottom share bar */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <ShareBar url={articleUrl} title={articleTitle} />
        </div>
      </div>

      {/* Related Posts */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-section-x py-16 md:py-20">
        <h2 className="text-[22px] md:text-[28px] font-semibold mb-8" style={{ color: '#ffffff' }}>
          Related Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post, i) => (
            <Link
              key={i}
              href={post.href}
              className="flex flex-col transition-transform duration-200 hover:scale-[1.02]"
            >
              {post.thumbnail ? (
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  width={600}
                  height={450}
                  className="w-full aspect-[4/3] rounded-xl object-cover"
                />
              ) : (
                <div className="w-full aspect-[4/3] rounded-xl" style={{ background: 'rgba(255,255,255,0.06)' }} />
              )}
              <span
                className="inline-flex self-start text-xs px-2.5 py-1 rounded-full mt-4 mb-2"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {post.category}
              </span>
              <h3 className="text-sm font-semibold leading-snug" style={{ color: '#ffffff' }}>
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {post.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: '#ffffff' }}>
                Read Post
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <CtaSection
        heading={
          <>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>Your Patients.</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>Engaged.</span>
            {' '}
            <span style={{ color: '#ffffff' }}>Every Day.</span>
          </>
        }
        subtitle="Automated clinical communication that keeps patients on protocol and revenue in the door."
        subtitleColor="rgba(255,255,255,0.75)"
        subtitleSize="text-base"
        subtitleMaxWidth="550px"
      />
    </div>
  )
}
