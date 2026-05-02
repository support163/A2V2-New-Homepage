'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRelatedPosts } from '@/lib/blog-posts'
import CtaSection from '@/app/Test-Website/components/CtaSection'
import { DEMO_BOOKING_URL } from '@/lib/constants'

const CURRENT_HREF = '/blog/what-is-hipaa-compliant-ai'
const relatedPosts = getRelatedPosts(CURRENT_HREF)

const faqItems = [
  {
    q: 'Is ChatGPT HIPAA compliant?',
    a: 'No. Standard ChatGPT does not offer a BAA, does not guarantee encryption for PHI, and may use data submitted through its interface to train future models. Using ChatGPT with patient data is a HIPAA violation regardless of intent.',
  },
  {
    q: 'What is a Business Associate Agreement (BAA)?',
    a: 'A BAA is a legally required contract between a healthcare provider and any vendor that handles Protected Health Information on their behalf. It defines how the vendor will protect PHI, what happens in case of a breach, and the vendor\'s HIPAA obligations.',
  },
  {
    q: 'Can I use AI for patient communication without violating HIPAA?',
    a: 'Yes, but only if the AI platform is HIPAA compliant. This means the vendor provides a BAA, encrypts data at rest and in transit, restricts data use, offers access controls, and maintains audit trails. A2V2.ai Medical Agents are designed to meet all of these requirements.',
  },
  {
    q: 'Does HIPAA compliance cost extra on A2V2.ai?',
    a: 'No. HIPAA compliance, BAA coverage, and AES-256 encryption are included on every A2V2.ai plan. Security is never a paid upgrade.',
  },
  {
    q: 'What happens if I accidentally send PHI through a non-compliant AI tool?',
    a: 'The transmission itself is a potential HIPAA violation, even if no breach occurs and even if no one outside the vendor sees the data. Penalties range from $100 to $1.5 million per violation depending on the tier. The safest approach is to only use HIPAA-compliant tools for any workflow that might involve patient data.',
  },
  {
    q: 'How do I know which AI models are HIPAA-eligible?',
    a: 'HIPAA eligibility depends on the model provider offering a BAA that covers the use of their model with PHI. A2V2.ai maintains a curated list of HIPAA-eligible models and restricts Medical Agents to only those models. The list is updated as new eligible models become available.',
  },
  {
    q: 'What is the difference between HIPAA-compliant and HIPAA-eligible?',
    a: 'HIPAA-eligible means a model provider has the infrastructure and legal framework (including BAA availability) to support HIPAA-compliant use. HIPAA-compliant means the entire deployment, including the platform, the model, the data handling, and the access controls, meets HIPAA requirements end to end. A2V2.ai provides the compliant environment. We then only allow HIPAA-eligible models to be used within Medical Agents.',
  },
]

/* ── Share bar ── */
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

/* ── FAQ accordion ── */
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

/* ── Note box ── */
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

/* ── Action callout box ── */
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

/* ── Dark table ── */
function DarkTable({ headers, rows }: {
  headers: string[]
  rows: (string | { text: string; tint?: 'green' | 'red' | 'yellow' })[][]
}) {
  return (
    <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
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
                const color = tint === 'green'
                  ? 'rgba(16,185,129,0.9)'
                  : tint === 'red'
                  ? 'rgba(239,68,68,0.85)'
                  : tint === 'yellow'
                  ? 'rgba(234,179,8,0.9)'
                  : 'rgba(255,255,255,0.75)'
                return (
                  <td
                    key={ci}
                    style={{
                      padding: '12px 16px',
                      fontSize: 14,
                      color,
                      borderBottom: ri < rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
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
  )
}

/* ── Body text styles ── */
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

/* ── Main component ── */
export default function HipaaCompliantAiBlogPost() {
  const articleUrl = 'https://www.a2v2.ai/blog/what-is-hipaa-compliant-ai'
  const articleTitle = 'What Is HIPAA-Compliant AI? A Guide for Healthcare Providers'

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
          <span>Privacy &amp; Trust</span>
        </div>

        {/* Header */}
        <header className="mb-10">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4"
            style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}
          >
            Privacy &amp; Trust
          </span>
          <h1
            className="text-[28px] md:text-[40px] font-semibold leading-tight tracking-tight"
            style={{ color: '#ffffff' }}
          >
            What Is HIPAA-Compliant AI? A Guide for Healthcare Providers
          </h1>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            AI is transforming healthcare. But most AI tools were never built to handle patient data safely. Here is what HIPAA-compliant AI actually means, why it matters, and how to evaluate whether your AI vendor meets the standard.
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
              By The A2V2 Team · 10 min read · Apr 28, 2026
            </span>
          </div>

          <ShareBar url={articleUrl} title={articleTitle} />
        </header>

        {/* Hero image */}
        <div className="w-full mb-12">
          <Image
            src="/images/blog-post10.png"
            alt="What Is HIPAA-Compliant AI?"
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
            AI adoption in healthcare is accelerating. Clinics are using AI for patient communication, intake automation, appointment scheduling, clinical Q&amp;A, and even treatment adherence tracking. But there is a critical gap between what most AI tools can do and what they are legally allowed to do with patient data.
          </p>
          <p style={bodyText}>
            Most popular AI tools, including ChatGPT, Google Gemini, and standard Claude deployments, were not built to handle Protected Health Information (PHI). Using them in a clinical workflow without the right safeguards is not just risky. It is a federal compliance violation with fines starting at $100 and reaching up to $1.5 million per incident.
          </p>
          <p style={bodyText}>
            This guide breaks down what HIPAA-compliant AI actually means, what to look for in a vendor, and how to deploy AI in your practice without putting your patients or your license at risk.
          </p>

          {/* H2: What Is HIPAA */}
          <h2 style={h2Style} data-animate="">What Is HIPAA and Why Does It Apply to AI?</h2>
          <p style={bodyText}>
            HIPAA (Health Insurance Portability and Accountability Act) is the federal law that governs how Protected Health Information is collected, stored, transmitted, and accessed in the United States. It applies to covered entities (healthcare providers, health plans, clearinghouses) and their business associates (any third-party vendor that handles PHI on their behalf).
          </p>
          <p style={bodyText}>
            When a clinic uses an AI tool to interact with patients, answer clinical questions, process lab results, or manage appointment data, that AI tool is handling PHI. That makes the AI vendor a business associate under HIPAA, and the same rules apply to them as apply to any other vendor with access to patient data.
          </p>
          <p style={{ ...bodyText, marginBottom: '1rem' }}>
            The key requirements that apply to AI vendors:
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. Business Associate Agreement (BAA)</strong> — A legally binding contract between the clinic and the AI vendor defining how PHI will be handled, protected, and reported in case of a breach.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. Encryption standards</strong> — PHI must be encrypted both at rest (stored data) and in transit (data moving between systems). The standard is AES-256 for storage and TLS 1.3 for transmission.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. Access controls</strong> — Only authorized personnel should be able to access PHI. Role-based permissions, authentication, and audit trails are required.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>4. Audit trails</strong> — Every access, modification, and transmission of PHI must be logged and traceable.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>5. Data use restrictions</strong> — PHI can not be used for purposes beyond what the patient consented to. This includes using patient data to train AI models.
            </p>
          </ActionBox>

          {/* H2: Why Most AI Tools Are NOT HIPAA Compliant */}
          <h2 style={{ ...h2Style, marginTop: '3rem' }} data-animate="">Why Most AI Tools Are NOT HIPAA Compliant</h2>
          <p style={bodyText}>
            Here is the uncomfortable truth: the AI tools most people are familiar with were designed for general consumer use, not for regulated healthcare environments.
          </p>

          <DarkTable
            headers={['AI Tool', 'BAA Available?', 'PHI Safe?', 'HIPAA Compliant?']}
            rows={[
              ['ChatGPT (standard)', 'No', { text: 'No', tint: 'red' }, { text: 'No', tint: 'red' }],
              ['Google Gemini (consumer)', 'No', { text: 'No', tint: 'red' }, { text: 'No', tint: 'red' }],
              ['Claude (standard API)', 'No', { text: 'No', tint: 'red' }, { text: 'No', tint: 'red' }],
              ['Microsoft Copilot', 'Enterprise only', { text: 'Depends', tint: 'yellow' }, { text: 'Partial', tint: 'yellow' }],
              ['A2V2.ai Medical Agents', { text: 'Yes, included', tint: 'green' }, { text: 'Yes', tint: 'green' }, { text: 'Yes', tint: 'green' }],
            ]}
          />

          <NoteBox>
            Having an API does not make a tool HIPAA compliant. Having a BAA, encryption, access controls, audit trails, and data use restrictions together is what makes it compliant.
          </NoteBox>

          <p style={bodyText}>
            The most common mistake clinics make is assuming that because a tool is powerful or well-known, it is safe to use with patient data. It is not. When a staff member pastes a patient&apos;s lab results into ChatGPT to summarize them, or asks Google Gemini about a patient&apos;s medication interaction, that data has been transmitted to a third party without a BAA, without encryption guarantees, and potentially into a system that uses that data to train its models.
          </p>
          <p style={bodyText}>
            That is a HIPAA violation. Even if no breach occurs. Even if no one finds out. The violation is the transmission itself.
          </p>

          {/* H2: What Makes AI HIPAA Compliant */}
          <h2 style={h2Style} data-animate="">What Makes AI &quot;HIPAA Compliant&quot;</h2>
          <p style={bodyText}>
            HIPAA-compliant AI is not a certification or a badge you buy. It is a set of technical and legal safeguards that together create a compliant environment for handling PHI. Here is what to look for:
          </p>

          {/* H3: 1. BAA */}
          <h3 style={h3Style}>1. A Signed Business Associate Agreement (BAA)</h3>
          <p style={bodyText}>
            This is the non-negotiable starting point. Without a BAA, no AI vendor should be touching your patient data. Period.
          </p>
          <p style={bodyText}>
            A BAA defines what data the vendor will handle, how they will protect it, what happens in case of a breach, and the vendor&apos;s obligations under HIPAA. If your AI vendor does not offer a BAA or tells you that you do not need one, that is a red flag.
          </p>
          <p style={bodyText}>
            <Link href="/blog/introducing-medical-agents" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              What Is a BAA and why your AI vendor needs one
            </Link>
          </p>

          {/* H3: 2. Encryption */}
          <h3 style={h3Style}>2. Encryption at Rest and in Transit</h3>
          <p style={bodyText}>
            Patient data should be encrypted everywhere. At rest means when it is stored in a database. In transit means when it is being sent between your systems and the AI vendor&apos;s servers.
          </p>
          <p style={bodyText}>
            The industry standard is AES-256 encryption for data at rest and TLS 1.3 for data in transit. Ask your vendor specifically what encryption standards they use. &quot;We use encryption&quot; is not a sufficient answer. You need to know the algorithm and the key management approach.
          </p>

          {/* H3: 3. Data Isolation */}
          <h3 style={h3Style}>3. Data Isolation and Access Controls</h3>
          <p style={bodyText}>
            Your patient data should be isolated from other customers&apos; data. Your staff should have role-based access controls so that a front desk coordinator does not have the same data access as a physician.
          </p>
          <p style={{ ...bodyText, marginBottom: '0.75rem' }}>Look for:</p>
          <ul className="mb-6 pl-5 flex flex-col gap-2" style={{ listStyle: 'disc', color: 'rgba(255,255,255,0.8)' }}>
            <li style={{ fontSize: 18, lineHeight: 1.75 }}>Role-based permissions (admin, provider, staff, viewer)</li>
            <li style={{ fontSize: 18, lineHeight: 1.75 }}>Multi-factor authentication</li>
            <li style={{ fontSize: 18, lineHeight: 1.75 }}>Session timeout and auto-logout</li>
            <li style={{ fontSize: 18, lineHeight: 1.75 }}>IP allowlisting (for enterprise deployments)</li>
          </ul>

          {/* H3: 4. Audit Logging */}
          <h3 style={h3Style}>4. Audit Logging</h3>
          <p style={bodyText}>
            Every time someone accesses, modifies, or transmits PHI through the AI system, it should be logged. These logs should include who accessed the data, when, from where, and what action they took.
          </p>
          <p style={bodyText}>
            Audit logs are not optional under HIPAA. They are required. If your AI vendor can not produce an audit trail for every interaction involving PHI, they are not compliant.
          </p>

          {/* H3: 5. Data Training Restrictions */}
          <h3 style={h3Style}>5. Data Training Restrictions</h3>
          <p style={bodyText}>
            This is the one most clinics overlook. Many AI companies use the data you send through their systems to train and improve their models. For general-purpose AI, this is standard practice. For healthcare AI handling PHI, it is a violation.
          </p>
          <p style={bodyText}>
            Your AI vendor should guarantee in writing (in the BAA or a separate data processing agreement) that your patient data will never be used to train, fine-tune, or improve their AI models.
          </p>
          <NoteBox>
            At A2V2.ai, patient data is never used to train AI models. This is guaranteed in our BAA and enforced at the infrastructure level.
          </NoteBox>

          {/* H3: 6. HIPAA-Eligible Model Selection */}
          <h3 style={h3Style}>6. HIPAA-Eligible Model Selection</h3>
          <p style={bodyText}>
            Not all language models are created equal when it comes to compliance. Some model providers offer HIPAA-eligible deployments with BAA coverage. Others do not.
          </p>
          <p style={bodyText}>
            Your AI platform should restrict medical workflows to models that have been specifically cleared for HIPAA use by their providers. At A2V2, Medical Agents are limited to a curated catalog of HIPAA-eligible models only. The full model catalog is available for General Agents where PHI is not involved.
          </p>
          <p style={bodyText}>
            <Link href="/blog/april-2026-model-catalog-update" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              See the full list of HIPAA-eligible models
            </Link>
          </p>

          {/* H2: The Real Cost */}
          <h2 style={h2Style} data-animate="">The Real Cost of Getting It Wrong</h2>
          <p style={bodyText}>
            HIPAA violations are expensive. And they scale:
          </p>

          <DarkTable
            headers={['Violation Tier', 'Description', 'Penalty Range']}
            rows={[
              ['Tier 1', 'Unaware of violation', '$100 to $50,000 per violation'],
              ['Tier 2', 'Reasonable cause, not willful neglect', '$1,000 to $50,000 per violation'],
              ['Tier 3', 'Willful neglect, corrected', '$10,000 to $50,000 per violation'],
              ['Tier 4', 'Willful neglect, not corrected', '$50,000 to $1,500,000 per violation'],
            ]}
          />

          <p style={bodyText}>
            Beyond fines, a HIPAA breach triggers mandatory notification to affected patients, potential investigation by the Office for Civil Rights (OCR), reputational damage, and possible legal action from patients whose data was exposed.
          </p>
          <p style={bodyText}>
            For a longevity clinic or functional medicine practice with 200 to 500 patients, a single Tier 3 or Tier 4 violation could cost more than the practice&apos;s entire annual revenue.
          </p>
          <NoteBox>
            The question is not whether your clinic can afford HIPAA-compliant AI. The question is whether your clinic can afford to use AI that is not compliant.
          </NoteBox>

          {/* H2: How to Evaluate an AI Vendor */}
          <h2 style={h2Style} data-animate="">How to Evaluate an AI Vendor for HIPAA Compliance</h2>
          <p style={bodyText}>
            Before signing up for any AI tool that will touch patient data, ask these questions:
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. &quot;Do you offer a BAA?&quot;</strong> — If no, stop here. You can not use this vendor for PHI.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. &quot;What encryption do you use at rest and in transit?&quot;</strong> — Look for AES-256 and TLS 1.3 specifically.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. &quot;Is our patient data used to train your models?&quot;</strong> — The only acceptable answer is no, backed by a contractual guarantee.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>4. &quot;What access controls are available?&quot;</strong> — Look for role-based permissions, MFA, and audit logging.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>5. &quot;Which language models are HIPAA-eligible?&quot;</strong> — The vendor should be able to tell you exactly which models are cleared for PHI.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>6. &quot;Where is our data stored?&quot;</strong> — For U.S. healthcare, data should be stored in U.S.-based data centers.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>7. &quot;Can you produce an audit trail for all PHI access?&quot;</strong> — If they hesitate, they are not ready for healthcare.
            </p>
          </ActionBox>

          <p style={{ ...bodyText, marginTop: '1.5rem' }}>
            Any vendor that can answer all seven of these questions clearly and affirmatively is worth evaluating further. Any vendor that stumbles on even one is not ready for clinical use.
          </p>

          {/* H2: How A2V2 Handles HIPAA Compliance */}
          <h2 style={h2Style} data-animate="">How A2V2.ai Handles HIPAA Compliance</h2>
          <p style={bodyText}>
            A2V2 was built for healthcare from day one. Compliance is not an add-on or an enterprise tier. It is the foundation of how the platform works.
          </p>

          <div className="flex flex-col gap-3 mb-8">
            {[
              { label: 'BAA provided', detail: 'on every Medical Agent. One BAA covers your entire organisation.' },
              { label: 'AES-256 encryption at rest', detail: 'with cloud-managed key infrastructure.' },
              { label: 'TLS 1.3 encryption in transit', detail: 'for all data transmission.' },
              { label: 'Per-field CRM encryption', detail: 'for sensitive fields like DOB, SSN, diagnosis codes, and clinical notes.' },
              { label: 'HIPAA-eligible model catalog', detail: 'curated and updated as new models become available.' },
              { label: 'Complete audit trails', detail: 'for every interaction, data access, and system change.' },
              { label: 'U.S.-based data centers', detail: 'only.' },
              { label: 'Patient data never used for AI training.', detail: 'Guaranteed in the BAA and enforced at the infrastructure level.' },
              { label: 'Role-based access controls', detail: 'with configurable permissions for admins, providers, and staff.' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.8)', margin: 0 }}>
                  <strong style={strongStyle}>{item.label}</strong>{' '}{item.detail}
                </p>
              </div>
            ))}
          </div>

          <p style={bodyText}>
            <Link href="/blog/introducing-medical-agents" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              See how Medical Agents work
            </Link>
            {' '}&middot;{' '}
            <Link href="/blog/medical-agents-user-guide" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              Read the Medical Agents user guide
            </Link>
            {' '}&middot;{' '}
            <Link href="/features/security" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              Learn about our security infrastructure
            </Link>
          </p>

          {/* H2: The Bottom Line */}
          <h2 style={h2Style} data-animate="">The Bottom Line</h2>
          <p style={bodyText}>
            AI is going to be part of every healthcare practice within the next few years. The clinics that adopt it early, with the right compliance framework, will have a significant advantage in patient engagement, retention, and operational efficiency.
          </p>
          <p style={bodyText}>
            But adopting AI without understanding the compliance requirements is like building a house without a foundation. It might look good for a while, but it will not hold up when it matters.
          </p>
          <p style={bodyText}>
            If your practice is evaluating AI tools, start with the seven questions above. If your current AI vendor can not answer them, it is time to find one that can.
          </p>
          <p style={bodyText}>
            If you want to see what HIPAA-compliant AI looks like in practice, A2V2 offers a free 30-minute audit where we review your current patient engagement workflow and show you exactly how Medical Agents can fit in. No sales pitch. Just a clear picture of what is possible.
          </p>
          <p style={bodyText}>
            <a href={DEMO_BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              Book your free audit
            </a>
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
