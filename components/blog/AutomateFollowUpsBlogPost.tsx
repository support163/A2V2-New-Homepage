'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRelatedPosts } from '@/lib/blog-posts'
import CtaSection from '@/app/Test-Website/components/CtaSection'
import { DEMO_BOOKING_URL } from '@/lib/constants'

const CURRENT_HREF = '/blog/automate-patient-follow-ups-hipaa'
const relatedPosts = getRelatedPosts(CURRENT_HREF)

const faqItems = [
  {
    q: 'Can I use Mailchimp or Constant Contact for patient follow-ups?',
    a: 'Not if the messages contain PHI. Mailchimp and Constant Contact do not offer BAAs and are not HIPAA compliant. Using them for patient communication that references health information, appointments, or treatment details is a violation.',
  },
  {
    q: 'Is texting patients a HIPAA violation?',
    a: 'It can be. Standard SMS from a personal phone or non-compliant platform is a violation if the message contains PHI. You need a HIPAA-compliant messaging platform with a BAA, encryption, and audit trails. Texting generic appointment reminders without health details is lower risk but still best done through a compliant platform.',
  },
  {
    q: 'What is the minimum necessary standard for patient follow-ups?',
    a: 'HIPAA requires that you share only the minimum information necessary for the patient to take action. Instead of including lab values and treatment details in a text, direct patients to a secure portal for specifics. Your automated messages should trigger action, not transmit clinical data.',
  },
  {
    q: 'How much does HIPAA-compliant follow-up automation cost?',
    a: 'Building from individual compliant components can cost $50K or more with a 3 to 6 month timeline. Purpose-built platforms like A2V2 start at $19.99 per month with implementation in under 2 weeks. The cost of non-compliance (fines up to $1.5M per violation) far exceeds either option.',
  },
  {
    q: 'Can AI write my follow-up messages?',
    a: 'Yes, but only through a HIPAA-compliant platform. AI can generate personalized, protocol-aware follow-up content, but the AI must be running on a HIPAA-eligible model with a BAA. Do not paste patient information into ChatGPT, Gemini, or Claude consumer products to draft messages.',
  },
  {
    q: 'What if a patient does not respond to automated follow-ups?',
    a: 'This is where predictive analytics matter. A2V2 Medical Agents are designed to track engagement patterns and flag patients who stop responding 30 to 45 days before they fully disengage, giving your team time for a personal outreach before the patient is lost.',
  },
  {
    q: 'Do I need patient consent for automated follow-ups?',
    a: 'Yes. Document consent during intake, include opt-out instructions in every automated message, honor opt-out requests immediately, and maintain records of consent for compliance audits. This is required under both HIPAA and telecommunications regulations.',
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
type CellValue = string | { text: string; tint?: 'green' | 'red' | 'yellow' }

function DarkTable({ headers, rows }: { headers: string[]; rows: CellValue[][] }) {
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
export default function AutomateFollowUpsBlogPost() {
  const articleUrl = 'https://www.a2v2.ai/blog/automate-patient-follow-ups-hipaa'
  const articleTitle = 'How to Automate Patient Follow-Ups Without Violating HIPAA'

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
          <span>Best Practices</span>
        </div>

        {/* Header */}
        <header className="mb-10">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4"
            style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}
          >
            Best Practices
          </span>
          <h1
            className="text-[28px] md:text-[40px] font-semibold leading-tight tracking-tight"
            style={{ color: '#ffffff' }}
          >
            How to Automate Patient Follow-Ups Without Violating HIPAA
          </h1>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Patient follow-ups are where retention is won or lost. But automating them with the wrong tools turns a clinical best practice into a federal compliance violation. Here is how to do it safely.
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
              By The A2V2 Team · 10 min read · May 2, 2026
            </span>
          </div>

          <ShareBar url={articleUrl} title={articleTitle} />
        </header>

        {/* Hero image */}
        <div className="w-full mb-12">
          <Image
            src="/images/blog-post12.png"
            alt="How to Automate Patient Follow-Ups Without Violating HIPAA"
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
            The follow-up is where patient retention is decided. Not the first appointment. Not the intake form. The follow-up.
          </p>
          <p style={bodyText}>
            A patient finishes their NAD+ infusion. They go home. Three days later, they have a mild headache. They are not sure if it is normal. They think about calling the clinic, but it is 8 PM. They decide to wait. A week passes. They forget about the next session. Two weeks later, they are gone.
          </p>
          <p style={bodyText}>
            That pattern repeats across 73% of longevity patients within 6 months. Not because the treatment failed. Because nobody followed up at the right moment.
          </p>
          <p style={bodyText}>
            The obvious solution is automation. Set up a system that sends the right message at the right time so your staff does not have to track every patient manually. The problem is that most of the tools clinics reach for when they think &quot;automation&quot; were never built to handle patient data safely.
          </p>
          <p style={bodyText}>
            This guide walks through how to automate patient follow-ups the right way: clinically effective, operationally efficient, and fully HIPAA compliant.
          </p>

          {/* H2: Why Manual Follow-Ups Break Down */}
          <h2 style={h2Style} data-animate="">Why Manual Follow-Ups Break Down</h2>
          <p style={bodyText}>
            Most clinics start with good intentions. The front desk has a list. The nurse practitioner sends a text. Someone checks a spreadsheet. It works when you have 30 patients. It falls apart at 100.
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. Staff bandwidth is finite.</strong> A clinic with 200 active patients across 3 to 4 protocols can not manually track every follow-up window. Touchpoints get missed. Patients slip through.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. Timing matters more than content.</strong> A follow-up 48 hours after an NAD+ infusion is clinically relevant. The same message 2 weeks later is noise. Manual systems can not maintain that precision across hundreds of patients.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. Inconsistency creates liability.</strong> When follow-up depends on who remembered to send it, some patients get excellent care and others get none. That inconsistency is both a retention problem and a documentation problem.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>4. Staff burnout is real.</strong> Administrative communication is one of the top drivers of burnout in clinical staff. Every follow-up text sent manually is time taken from direct patient care.
            </p>
          </ActionBox>

          <p style={{ ...bodyText, marginTop: '1.5rem' }}>
            The math is simple: if your clinic has 200 patients across 4 protocol stages, each needing 2 to 3 touchpoints per stage, that is 1,600 to 2,400 individual communications per cycle. No human team can execute that reliably.
          </p>

          {/* H2: The HIPAA Problem */}
          <h2 style={h2Style} data-animate="">The HIPAA Problem with Most Automation Tools</h2>
          <p style={bodyText}>
            Here is where clinics get into trouble. The instinct is to grab whatever tool is fastest: a Mailchimp drip sequence, a Twilio script, a ChatGPT-powered bot, a generic CRM workflow.
          </p>
          <p style={bodyText}>
            Every one of those can be a HIPAA violation if it touches patient data without the right safeguards.
          </p>
          <p style={{ ...bodyText, marginBottom: '0.75rem' }}>
            HIPAA applies the moment your automation references anything that could identify a patient and their health information. That includes:
          </p>
          <ul className="mb-6 pl-5 flex flex-col gap-2" style={{ listStyle: 'disc', color: 'rgba(255,255,255,0.8)' }}>
            {[
              'Patient name combined with any health-related information',
              'Appointment dates or treatment details',
              'Lab results or medication references',
              'Protocol stage or treatment plan details',
              'Any message that connects an identifiable person to a health condition',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 18, lineHeight: 1.75 }}>{item}</li>
            ))}
          </ul>

          <NoteBox>
            A text that says &quot;Hi Sarah, your NAD+ follow-up is in 3 days&quot; contains PHI. Sarah&apos;s name is linked to a specific treatment. That message must travel through HIPAA-compliant infrastructure with a BAA covering every vendor in the chain.
          </NoteBox>

          {/* H2: What HIPAA Requires */}
          <h2 style={h2Style} data-animate="">What HIPAA Requires for Automated Follow-Ups</h2>
          <p style={bodyText}>
            To automate patient follow-ups legally, every component in the chain must meet HIPAA requirements. Not just the software. The entire data flow.
          </p>

          {/* H3: 1. BAA */}
          <h3 style={h3Style}>1. Every Vendor Needs a BAA</h3>
          <p style={bodyText}>
            Every tool that touches PHI in your automation chain needs a signed Business Associate Agreement. That includes your messaging platform, your CRM, your AI tool, and any integration layer connecting them.
          </p>

          <DarkTable
            headers={['Tool Type', 'BAA Required?', 'Common Non-Compliant Examples']}
            rows={[
              ['SMS/messaging platform', { text: 'Yes', tint: 'green' }, 'Standard Twilio (no BAA), personal iMessage, WhatsApp'],
              ['Email platform', { text: 'Yes', tint: 'green' }, 'Mailchimp, standard Gmail, Constant Contact'],
              ['CRM', { text: 'Yes', tint: 'green' }, 'HubSpot (no HIPAA tier), Notion, Airtable'],
              ['AI/chatbot', { text: 'Yes', tint: 'green' }, 'ChatGPT (consumer), Google Gemini (consumer), standard Claude'],
              ['Integration layer', { text: 'Yes', tint: 'green' }, 'Standard Zapier (no HIPAA plan), Make.com'],
            ]}
          />

          <NoteBox>
            A single non-compliant link in the chain makes the entire automation non-compliant. If your CRM is HIPAA compliant but your SMS provider is not, you have a violation.
          </NoteBox>

          {/* H3: 2. Encryption */}
          <h3 style={h3Style}>2. Encryption End to End</h3>
          <p style={bodyText}>
            Every message containing PHI must be encrypted in transit and at rest. This means:
          </p>
          <ul className="mb-6 pl-5 flex flex-col gap-2" style={{ listStyle: 'disc', color: 'rgba(255,255,255,0.8)' }}>
            {[
              'The message content is encrypted when it leaves your system (TLS 1.3)',
              'The message content is encrypted when stored in any database along the way (AES-256)',
              'Encryption keys are managed securely with rotation policies',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 18, lineHeight: 1.75 }}>{item}</li>
            ))}
          </ul>
          <p style={bodyText}>
            SMS is a particularly tricky channel. Standard SMS is not encrypted end to end. HIPAA-compliant SMS requires a vendor that provides an encrypted messaging layer on top of the carrier network, typically through a platform like HIPAA-compliant Twilio or a purpose-built clinical messaging tool.
          </p>

          {/* H3: 3. Minimum Necessary */}
          <h3 style={h3Style}>3. Minimum Necessary Standard</h3>
          <p style={bodyText}>
            HIPAA&apos;s &quot;minimum necessary&quot; rule means your automated messages should contain only the information the patient needs to take action. No more.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <div
              className="rounded-xl p-4"
              style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: 'rgba(239,68,68,0.85)' }}>
                Too much information
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                &quot;Hi Sarah, your testosterone levels came back at 685 ng/dL which is in the optimal range. Your next HRT injection is scheduled for Monday at 10 AM with Dr. Martinez. Please remember to fast for 12 hours before your lab draw on Friday.&quot;
              </p>
            </div>
            <div
              className="rounded-xl p-4"
              style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)' }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: 'rgba(16,185,129,0.9)' }}>
                Minimum necessary
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                &quot;Hi Sarah, you have an upcoming appointment on Monday at 10 AM. Please log into your patient portal for details and preparation instructions.&quot;
              </p>
            </div>
          </div>

          <p style={bodyText}>
            The left message contains specific lab values, treatment details, and provider names. If intercepted, it exposes significant PHI. The right message tells the patient what they need to know (they have an appointment) and directs them to a secure channel for details.
          </p>

          {/* H3: 4. Audit Trails */}
          <h3 style={h3Style}>4. Audit Trails for Every Automated Message</h3>
          <p style={bodyText}>
            Every automated follow-up must be logged: what was sent, to whom, when, through which channel, and what the content was. These logs need to be retained and accessible for compliance audits.
          </p>
          <p style={bodyText}>
            If your automation tool does not produce audit trails, you have no way to prove compliance in the event of an investigation.
          </p>

          {/* H3: 5. Consent */}
          <h3 style={h3Style}>5. Patient Consent and Opt-Out</h3>
          <p style={bodyText}>
            Patients must consent to receiving automated communications, and they must have a clear way to opt out at any time. This means:
          </p>
          <ul className="mb-6 pl-5 flex flex-col gap-2" style={{ listStyle: 'disc', color: 'rgba(255,255,255,0.8)' }}>
            {[
              'Documenting consent during intake (paper or digital)',
              'Including opt-out instructions in every automated message',
              'Honoring opt-out requests immediately across all channels',
              'Maintaining records of consent and opt-out for each patient',
            ].map((item, i) => (
              <li key={i} style={{ fontSize: 18, lineHeight: 1.75 }}>{item}</li>
            ))}
          </ul>

          {/* H2: How to Build */}
          <h2 style={h2Style} data-animate="">How to Build a HIPAA-Compliant Follow-Up System</h2>
          <p style={bodyText}>
            Here is the practical framework. There are two approaches: build it yourself from compliant components, or use a platform that handles compliance natively.
          </p>

          {/* H3: Option 1 */}
          <h3 style={h3Style}>Option 1: Build It Yourself (Higher Control, Higher Complexity)</h3>
          <p style={bodyText}>
            You select and connect individual HIPAA-compliant tools:
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. HIPAA-compliant CRM</strong> to store patient data and protocol stages (Salesforce Health Cloud with HIPAA configuration, or similar)
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. HIPAA-compliant messaging</strong> for SMS and email (Twilio with BAA, Paubox for email)
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. HIPAA-compliant integration layer</strong> to connect them (Zapier HIPAA plan or custom API integrations)
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>4. HIPAA-compliant AI</strong> for intelligent message generation (Claude or GPT through a BAA-gated platform, not consumer versions)
            </p>
          </ActionBox>

          <p style={{ ...bodyText, marginTop: '1.5rem' }}>
            This approach gives you full control but requires significant technical overhead: BAAs with each vendor, integration maintenance, encryption verification across every connection, and ongoing compliance monitoring. Budget $50K or more and 3 to 6 months for implementation.
          </p>

          {/* H3: Option 2 */}
          <h3 style={h3Style}>Option 2: Use a Purpose-Built Platform (Faster, Simpler, Compliance Built In)</h3>
          <p style={bodyText}>
            A platform designed for clinical follow-ups handles the compliance stack for you. One vendor, one BAA, one system that handles patient data, messaging, AI, CRM, and audit trails in a single HIPAA-compliant environment.
          </p>
          <p style={bodyText}>
            This is the approach A2V2 was built for. Medical Agents are designed to provide:
          </p>

          <div className="flex flex-col gap-3 mb-8">
            {[
              { label: 'Protocol-aware follow-up sequences', detail: 'that trigger based on treatment stage, not arbitrary dates' },
              { label: 'HIPAA-compliant messaging', detail: '(SMS and email) through a single BAA' },
              { label: 'Per-field CRM encryption', detail: 'for sensitive patient data' },
              { label: 'HIPAA-eligible AI models', detail: 'for intelligent, personalized follow-up content' },
              { label: 'Complete audit trails', detail: 'for every automated message' },
              { label: 'Role-based access controls', detail: 'for clinical staff' },
              { label: 'Patient consent management', detail: 'and opt-out handling' },
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
            Implementation timeline: under 2 weeks for most clinics.
          </p>
          <p style={bodyText}>
            <Link href="/blog/introducing-medical-agents" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              See how Medical Agents work
            </Link>
          </p>

          {/* H2: Protocol-Aware */}
          <h2 style={h2Style} data-animate="">What Protocol-Aware Follow-Ups Actually Look Like</h2>
          <p style={bodyText}>
            The key difference between generic automation and clinical follow-up is protocol awareness. A generic system sends reminders on a fixed schedule. A protocol-aware system sends the right message based on where the patient is in their treatment.
          </p>

          <DarkTable
            headers={['Protocol Stage', 'Timing', 'Follow-Up Action']}
            rows={[
              ['NAD+ IV, Day 2 post-infusion', '48 hours after session', 'Symptom check-in: headache, fatigue, hydration reminder'],
              ['NAD+ IV, Week 3 of 6', 'Day before session 3', 'Appointment reminder, lab prep instructions'],
              ['HRT, Month 2', '14 days after dose adjustment', 'Dosage check-in: side effects, mood, energy'],
              ['HRT, Month 3', '7 days before lab draw', 'Lab appointment reminder, fasting instructions'],
              ['Peptide BPC-157, Cycle 1 End', 'Day after final dose', 'Protocol completion check-in, next steps'],
              ['Supplements, Month 1', '21 days after starting', 'Adherence check: still taking daily? Any issues?'],
              ['Any protocol, 30 days inactive', 'Triggered by inactivity', 'Re-engagement: schedule a check-in with your care team'],
            ]}
          />

          <p style={bodyText}>
            This is what A2V2 Medical Agents are designed to automate. Each touchpoint is timed to clinical milestones, not marketing cadences. The content is specific to what the patient is experiencing at that stage. And every message flows through HIPAA-compliant infrastructure with a full audit trail.
          </p>

          {/* H2: Common Mistakes */}
          <h2 style={h2Style} data-animate="">Common Mistakes to Avoid</h2>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. Using personal phones for patient texts.</strong> Staff texting patients from their personal phones is a HIPAA violation. No BAA, no encryption, no audit trail, and the data persists on a personal device outside your control.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. Copying patient data into ChatGPT or Gemini.</strong> Summarizing a patient&apos;s status in ChatGPT to draft a follow-up message transmits PHI to a non-compliant third party. Even if the output is never seen by anyone else, the transmission is the violation.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. Using email without encryption.</strong> Standard Gmail and Outlook do not encrypt emails end to end. If you are sending follow-up emails containing PHI, you need an encrypted email service with a BAA (like Paubox).
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>4. No opt-out mechanism.</strong> Every automated patient message must include a way for the patient to stop receiving them. &quot;Reply STOP&quot; for SMS. Unsubscribe link for email. This is both a HIPAA requirement and a CAN-SPAM/TCPA requirement.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>5. No documentation of consent.</strong> If a patient complains about receiving automated messages and you can not produce a record of their consent, you have a problem. Document consent during intake and store it.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>6. Assuming your EHR handles it.</strong> Most EHR systems are built for clinical documentation, not patient engagement automation. They may store data compliantly, but they do not send protocol-aware follow-ups or provide AI-powered re-engagement.
            </p>
          </ActionBox>

          {/* H2: ROI */}
          <h2 style={h2Style} data-animate="">The ROI of Getting It Right</h2>
          <p style={bodyText}>
            Automating follow-ups is not just a compliance exercise. It is a revenue strategy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            {[
              {
                label: 'Patient retention',
                detail: 'Reducing drop-off from 73% to 35% (projected) on a 200-patient clinic with $5,000 average patient value recovers an estimated $380,000 per year.',
              },
              {
                label: 'Staff time recovered',
                detail: 'Automating 1,600+ follow-up touchpoints per protocol cycle frees clinical staff to focus on direct patient care instead of administrative messaging.',
              },
              {
                label: 'No-show reduction',
                detail: 'Clinics using automated reminders report up to 67% reduction in no-shows (projected). Each no-show costs $200 or more in lost revenue and wasted provider time.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-4"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <p className="text-sm font-semibold mb-2" style={{ color: '#ffffff' }}>{item.label}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{item.detail}</p>
              </div>
            ))}
          </div>

          <p style={bodyText}>
            <Link href="/roi-calculator" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              Calculate your clinic&apos;s projected ROI
            </Link>
          </p>

          {/* H2: Getting Started */}
          <h2 style={h2Style} data-animate="">Getting Started</h2>
          <p style={bodyText}>
            If your clinic is currently doing follow-ups manually or using non-compliant tools, here is the path forward:
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. Audit your current tools.</strong> List every tool that touches patient data in your follow-up workflow. Check if each one has a signed BAA with your practice. If any tool does not, stop using it for PHI immediately.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. Map your follow-up touchpoints.</strong> For each protocol your clinic runs, list the follow-up moments that matter (post-treatment check-ins, lab reminders, adherence checks, re-engagement triggers). This becomes your automation blueprint.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. Choose your approach.</strong> Build from compliant components (higher control, higher cost, longer timeline) or adopt a purpose-built platform (faster, simpler, compliance included).
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>4. Start with one protocol.</strong> Do not try to automate everything at once. Pick your highest-volume protocol (usually HRT or NAD+), build and test the follow-up sequence, verify compliance, then expand.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>5. Book a free audit.</strong> If you want a second opinion on your current setup, A2V2 offers a free 30-minute review of your follow-up workflow, compliance posture, and retention gaps.
            </p>
          </ActionBox>

          <p style={{ ...bodyText, marginTop: '1.5rem' }}>
            <a href={DEMO_BOOKING_URL} style={{ color: '#2563EB', textDecoration: 'underline' }}>
              Book your free audit
            </a>
            {' '}&middot;{' '}
            <Link href="/solutions/healthcare" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              See how A2V2 automates clinical follow-ups
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
