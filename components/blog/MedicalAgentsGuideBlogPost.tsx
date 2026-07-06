'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRelatedPosts } from '@/lib/blog-posts'
import CtaSection from '@/app/Test-Website/components/CtaSection'

const CURRENT_HREF = '/blog/medical-agents-user-guide'
const relatedPosts = getRelatedPosts(CURRENT_HREF)

const faqItems = [
  {
    q: 'Can I switch a chatbot between General and Medical later?',
    a: 'No. Agent type is set at creation. If you need a Medical version of an existing General chatbot, create a new Medical Agent and migrate content, or contact support.',
  },
  {
    q: 'Do I need a separate BAA for each Medical chatbot?',
    a: 'No. One BAA per organisation covers every Medical Agent you create.',
  },
  {
    q: 'Can I test a Medical Agent before the BAA is signed?',
    a: 'Yes. You can build, configure, and use a Medical Agent internally with no restrictions. The BAA only gates public deployment.',
  },
  {
    q: 'Are encrypted CRM values searchable?',
    a: 'Encrypted values can not be queried by raw value the way unencrypted fields can. That is the trade-off of encryption at rest.',
  },
  {
    q: 'Which models are HIPAA-eligible?',
    a: 'The list is curated by us based on each provider\'s BAA and HIPAA terms. As of April 2026: Claude Opus 4.6, Claude Sonnet 4.6, Claude Haiku 4.5, Gemini 2.5 Pro, Gemini 2.5 Flash, GLM-5, and open-source models like Llama and GPT-OSS. We add to it as more eligible models become available.',
  },
  {
    q: 'I do not see the Medical option when creating a chatbot.',
    a: 'It is available on all plans, but if you do not see it, please contact support at support@a2v2.ai. We may need to enable it for your account.',
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
                width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
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
    <div className="rounded-r-lg p-4 mb-6" style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '3px solid rgba(255,255,255,0.15)' }}>
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
        {children}
      </p>
    </div>
  )
}

/* ── Action callout box ── */
function ActionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl p-4 mb-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
      {children}
    </div>
  )
}

/* ── In-body image with caption ── */
function BodyImage({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div className="w-full mb-6">
      <Image
        src={src}
        alt={alt}
        width={720}
        height={450}
        className="w-full aspect-[16/9] object-cover"
        quality={100}
        unoptimized
      />
      <p className="text-xs italic text-center mt-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
        {caption}
      </p>
    </div>
  )
}

/* ── Shared text styles ── */
const bodyText: React.CSSProperties = { fontSize: 18, lineHeight: 1.75, color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }
const h2Style: React.CSSProperties = { fontSize: 26, fontWeight: 600, color: '#ffffff', marginTop: '3rem', marginBottom: '1rem', lineHeight: 1.3 }
const h3Style: React.CSSProperties = { fontSize: 20, fontWeight: 600, color: '#ffffff', marginTop: '2rem', marginBottom: '0.75rem', lineHeight: 1.3 }
const strongStyle: React.CSSProperties = { color: '#ffffff', fontWeight: 700 }

/* ── Main component ── */
export default function MedicalAgentsGuideBlogPost() {
  const articleUrl = 'https://www.a2v2.ai/blog/medical-agents-user-guide'
  const articleTitle = 'Medical Agents User Guide: Everything You Need to Get Started'

  return (
    <div style={{ background: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>
      <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <Link
            href="/blog"
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
          <h1 className="text-[28px] md:text-[40px] font-semibold leading-tight tracking-tight" style={{ color: '#ffffff' }}>
            Medical Agents User Guide: Everything You Need to Get Started
          </h1>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Two types of agents are now available: General and Medical. Here is how to create a Medical Agent, set up HIPAA compliance, manage health parameters, prescriptions, and field-level encryption.
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
              By The A2V2 Team · 12 min read · Apr 26, 2026
            </span>
          </div>

          <ShareBar url={articleUrl} title={articleTitle} />
        </header>

        {/* Hero image */}
        <div className="w-full mb-12">
          <Image
            src="/images/blog-post9/blog-post9-heroimage.png"
            alt="Medical Agents User Guide"
            width={720}
            height={405}
            className="w-full aspect-[16/9] object-cover"
            quality={100}
            unoptimized
            priority
          />
        </div>

        {/* Body */}
        <article>
          <p style={bodyText}>
            We have split chatbot creation into two clear paths so you can pick the right level of compliance for the job. Existing chatbots in your account are unchanged. They continue to work exactly as before, and we have automatically classified them as General. Nothing you have today needs migration.
          </p>

          {/* H2: What's New */}
          <h2 style={h2Style} data-animate="">What&apos;s New</h2>
          <p style={bodyText}>
            When you create a new chatbot, you will now see a one-time choice between two agent types:
          </p>

          {/* Two agent type boxes side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p style={{ ...bodyText, marginBottom: 0 }}>
                <strong style={strongStyle}>General Agent</strong> — the chatbot you have been building all along. Full feature set, works for any domain (sales, support, HR, education, marketing, real estate), no compliance overhead.
              </p>
            </div>
            <div className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p style={{ ...bodyText, marginBottom: 0 }}>
                <strong style={strongStyle}>Medical Agent</strong> — a HIPAA-aware chatbot built for clinical and healthcare teams. Includes everything a General Agent has, plus medical-specific modules (Parameters, Medications, Prescriptions), HIPAA-eligible language models, and per-field encryption for sensitive contact data.
              </p>
            </div>
          </div>

          <p style={bodyText}>
            You make the choice once, at the moment you create the chatbot. The agent type can not be changed later, so pick deliberately.
          </p>

          {/* H2: When to Choose Medical */}
          <h2 style={h2Style} data-animate="">When to Choose Medical</h2>
          <p style={bodyText}>Choose Medical if your chatbot will:</p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>Handle Protected Health Information (PHI)</strong> — patient records, prescriptions, conditions, medications.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>Power a clinical workflow</strong> — symptom intake, triage, follow-ups, prescription refills, lab-result conversations.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>Be deployed publicly to patients</strong> — this requires a signed Business Associate Agreement (see below).
            </p>
          </ActionBox>

          <NoteBox>Choose General for everything else.</NoteBox>

          {/* H2: Creating a Medical Agent */}
          <h2 style={h2Style} data-animate="">Creating a Medical Agent Step by Step</h2>

          <p style={bodyText}>
            <strong style={strongStyle}>Step 1.</strong> From the dashboard, click <strong style={strongStyle}>+ New Agent</strong>. The agent-type chooser appears.
          </p>
          <BodyImage
            src="/images/blog-post9/blog-post9-1.webp"
            alt="New Agent type selection"
            caption="New Agent — type selection"
          />

          <p style={bodyText}>
            <strong style={strongStyle}>Step 2.</strong> Pick <strong style={strongStyle}>Medical Agent</strong>. If your organisation has not completed a BAA yet, an acknowledgment checkbox appears confirming the BAA requirement. Tick it to proceed.
          </p>
          <BodyImage
            src="/images/blog-post9/blog-post9-2.webp"
            alt="Medical Agent BAA acknowledgment step"
            caption="Medical Agent — BAA acknowledgment step"
          />

          <p style={bodyText}>
            <strong style={strongStyle}>Step 3.</strong> Name your agent and click <strong style={strongStyle}>Create</strong>. That is it. Your Medical Agent is ready.
          </p>

          <p style={bodyText}>
            <strong style={strongStyle}>Step 4.</strong> Inside the new chatbot, the sidebar reflects its Medical type. You will see two new entries under CRM (Parameters and Medications) and a BAA Agreement badge in the bottom-left footer showing your current status (Not Signed, In Progress, or Active). The Sandbox model picker is also pre-set to a HIPAA-eligible model with a HIPAA badge.
          </p>
          <BodyImage
            src="/images/blog-post9/blog-post9-3.webp"
            alt="Medical chatbot sidebar showing BAA badge, CRM modules, and HIPAA model"
            caption="Medical chatbot sidebar — BAA badge, CRM modules, HIPAA model"
          />

          {/* H2: BAA */}
          <h2 style={h2Style} data-animate="">About the Business Associate Agreement (BAA)</h2>

          <p style={bodyText}>
            A BAA is the agreement that lets A2V2 process PHI on your behalf in a HIPAA-compliant manner. You only need one per organisation, not per chatbot.
          </p>
          <p style={bodyText}>
            <strong style={strongStyle}>How to get one signed:</strong> when you create your first Medical Agent and tick the acknowledgment, our compliance team is automatically notified. Someone from A2V2 will reach out to walk you through the agreement and finalise signing. There is no self-service signing inside the dashboard today. Once it is signed and recorded on our side, your BAA badge flips to Active and your Medical Agents can be published.
          </p>
          <BodyImage
            src="/images/blog-post9/blog-post9-4.webp"
            alt="Medical chatbot sidebar showing BAA Active status"
            caption="Medical chatbot sidebar — BAA Active"
          />

          <NoteBox>
            If you would rather kick off a BAA before creating an agent, email{' '}
            <a href="mailto:support@a2v2.ai" style={{ color: '#2563EB' }}>support@a2v2.ai</a>
            {' '}and we will start the conversation.
          </NoteBox>

          {/* H2: Going Live */}
          <h2 style={h2Style} data-animate="">Going Live with a Medical Agent</h2>

          <p style={bodyText}>
            When a Medical Agent&apos;s BAA is still Not Signed or In Progress, you can build, test, and use it internally. What you can not do is make it public to your end users until the BAA is Active.
          </p>

          <NoteBox>
            The publish dialog itself currently does not show the BAA status. If you click Publish on a Medical Agent before your BAA is Active, the platform will block the action with an error explaining that the BAA must be completed first. We are improving this dialog to surface BAA status inline. For now, glance at the BAA Agreement badge in your chatbot sidebar before clicking Publish.
          </NoteBox>

          {/* H2: Medical-Only Modules */}
          <h2 style={h2Style} data-animate="">Medical-Only Modules</h2>

          <h3 style={h3Style}>Parameters (Health Metrics)</h3>
          <p style={bodyText}>
            Each Medical Agent gets a default Health Parameters schema seeded at creation. Common vitals and clinical values your team likely tracks (Blood Pressure, Heart Rate, Body Temperature, Respiratory Rate, SpO2, BMI, HbA1c, Total Cholesterol, and more). You can extend it with custom fields under CRM, then Parameters, including unit categories, validation rules, and field types.
          </p>
          <BodyImage
            src="/images/blog-post9/blog-post9-5.webp"
            alt="CRM Parameters with seeded health metrics"
            caption="CRM — Parameters with seeded health metrics"
          />

          <h3 style={h3Style}>Medications</h3>
          <p style={bodyText}>
            The Medications catalog lives at the organisation level, not per-chatbot. All Medical Agents in your org share one catalog. Search, add, edit, and remove medicines under CRM, then Medications. Useful for dosage references, brand/generic mappings, and prescription building blocks.
          </p>
          <BodyImage
            src="/images/blog-post9/blog-post9-6.webp"
            alt="CRM Medications catalog"
            caption="CRM — Medications catalog"
          />

          <h3 style={h3Style}>Prescriptions</h3>
          <p style={bodyText}>
            Prescriptions are available inside each contact&apos;s detail view in CRM. Open a contact, switch to the Prescriptions tab to view, create, and manage prescriptions for that individual. Each prescription captures the medication, dose/form, doses per day, duration, start date, timing instructions, and notes. The system computes a Runs Out date automatically.
          </p>
          <BodyImage
            src="/images/blog-post9/blog-post9-7.webp"
            alt="Contact Prescriptions tab"
            caption="Contact — Prescriptions tab"
          />

          <NoteBox>
            Today there is not a single top-level Prescriptions screen aggregating everyone. If that is something you would find useful, let us know.
          </NoteBox>

          <h3 style={h3Style}>Document Extraction</h3>
          <p style={bodyText}>
            Medical Agents can upload documents (lab reports, prescriptions, medical letters) and have them parsed into structured data your team can review and ingest into the contact record. The AI File Extraction button is available on the Add Health Reading form, so a fresh lab report can populate the contact&apos;s health metrics in one step.
          </p>

          {/* H2: Working with a Medical Contact */}
          <h2 style={h2Style} data-animate="">Working with a Medical Contact</h2>

          <p style={bodyText}>
            The Medical Agent&apos;s CRM extends the standard contact view with three medical-specific tabs: Health, Notes, and Prescriptions. Here is what each looks like in practice.
          </p>

          <p style={bodyText}>
            <strong style={strongStyle}>Contact overview (General tab):</strong> all the standard CRM fields are still there. Name, DOB, contact info, address, external reference ID for cross-referencing with your existing patient management system.
          </p>
          <BodyImage
            src="/images/blog-post9/blog-post9-8.webp"
            alt="Contact details General tab"
            caption="Contact details — General tab"
          />

          <p style={bodyText}>
            <strong style={strongStyle}>Health tab:</strong> every reading you record (manually or from a parsed document) is timestamped, status-tagged (Normal / Abnormal / Critical based on your Parameter ranges), and click-through to history charts. Each reading also has a Source tag (Manual / AI Extraction / etc.) for audit traceability.
          </p>
          <BodyImage
            src="/images/blog-post9/blog-post9-9.webp"
            alt="Contact Health tab with recorded vitals"
            caption="Contact — Health tab with recorded vitals"
          />

          <p style={bodyText}>
            <strong style={strongStyle}>Notes tab:</strong> rich-text clinical notes attached to the contact. Supports headings, lists, links, and basic formatting. Each note is timestamped with author for audit.
          </p>
          <BodyImage
            src="/images/blog-post9/blog-post9-10.webp"
            alt="Contact Notes tab"
            caption="Contact — Notes tab"
          />

          <p style={bodyText}>
            <strong style={strongStyle}>Adding a prescription:</strong> the prescription dialog autocompletes from your org&apos;s medicine catalog, auto-fills the medication&apos;s default Form and Dose, and lets you specify Doses Per Day, Duration, Total Quantity, Start Date, Timing Instructions, and Notes.
          </p>
          <BodyImage
            src="/images/blog-post9/blog-post9-11.webp"
            alt="Add Prescription dialog"
            caption="Add Prescription dialog"
          />

          {/* H2: Per-Field CRM Encryption */}
          <h2 style={h2Style} data-animate="">Per-Field CRM Encryption (Medical Only)</h2>

          <p style={bodyText}>
            Medical Agents can mark individual CRM fields as encrypted. The CRM, then Fields screen has an extra Encrypted column that is hidden for General Agents.
          </p>
          <BodyImage
            src="/images/blog-post9/blog-post9-12.webp"
            alt="CRM Fields with the Encrypted column"
            caption="CRM — Fields with the Encrypted column"
          />

          <p style={bodyText}>
            You can also enable encryption form-wide in the Form Builder. Every field on that form will be encrypted at rest. Look for the lock icon and the Encrypt form data toggle when creating or editing a form.
          </p>
          <BodyImage
            src="/images/blog-post9/blog-post9-13.webp"
            alt="Form Builder Encrypt form data toggle"
            caption="Form Builder — Encrypt form data toggle"
          />

          {/* Encryption notes callout */}
          <div className="rounded-xl p-5 mb-6" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <p style={{ ...bodyText, marginBottom: '1rem' }}>
              <strong style={strongStyle}>A few important notes on encryption:</strong>
            </p>
            <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
              {[
                'Encryption is per field (or per form), not all-or-nothing. You choose exactly which fields hold sensitive data.',
                'Encryption is permanent. Once you enable it on a field, you can not disable it again. The platform will show you a confirmation dialog the first time.',
                'Encrypted values are decrypted on demand for authenticated users in your org. Your team continues to see the values normally. The encryption is at the storage layer.',
                'Existing CRM data flagged as critical is migrated and encrypted automatically when you adopt Medical.',
                'Any field can be encrypted. Common picks are date of birth, SSN/national ID, diagnosis codes, free-text clinical notes, and any contact identifier tied to PHI, but the choice is yours field by field.',
              ].map((item, i) => (
                <li key={i} style={{ ...bodyText, marginBottom: '0.5rem', listStyleType: 'disc' }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* H2: Choosing a Language Model */}
          <h2 style={h2Style} data-animate="">Choosing a Language Model</h2>

          <p style={bodyText}>
            Medical Agents are restricted to a curated list of HIPAA-eligible models. When you open the model picker in Sandbox or chatbot settings, you will see only the eligible options, each marked with a HIPAA badge. We update this list as more eligible models become available. New options will appear in your picker automatically.
          </p>
          <p style={bodyText}>
            General Agents are unaffected. You can still pick from the full model catalog there.
          </p>
          <p style={bodyText}>
            See the{' '}
            <Link href="/blog/april-2026-model-catalog-update" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              April 2026 Model Catalog Update
            </Link>
            {' '}for the full current HIPAA-eligible lineup.
          </p>

          {/* H2: What Changed for Existing Chatbots */}
          <h2 style={h2Style} data-animate="">What Changed for Existing Chatbots</h2>

          <p style={bodyText}>
            Nothing you need to do. Every chatbot you created before this update has been automatically classified as General. None of the Medical-only features (BAA gate, encryption toggle, Parameters/Medications nav, HIPAA model filter) appear on your existing chatbots. Your operators will not notice anything different in the agents they already use.
          </p>

          <NoteBox>
            If you want to convert an existing General chatbot into a Medical one, please reach out. There is not a self-service promote to Medical path in the dashboard today.
          </NoteBox>

          <p style={bodyText}>
            Read more:{' '}
            <Link href="/blog/introducing-medical-agents" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              Introducing Medical Agents
            </Link>
            {' '}and{' '}
            <Link href="/blog/hipaa-compliant-ai-healthcare" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              HIPAA-compliant AI
            </Link>
            .
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
                  height={338}
                  className="w-full aspect-[16/9] object-cover"
                />
              ) : (
                <div className="w-full aspect-[16/9]" style={{ background: 'rgba(255,255,255,0.06)' }} />
              )}
              <span
                className="inline-flex self-start text-xs px-2.5 py-1 rounded-full mt-4 mb-2"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)' }}
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
