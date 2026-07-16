'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TestHomepage2Navbar from '@/components/TestHomepage2Navbar'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import { getRelatedPosts } from '@/lib/blog-posts'
import { DEMO_BOOKING_URL, SIGN_IN_URL } from '@/lib/constants'

const H = "'Helvetica Neue', Helvetica, Arial, sans-serif"
const I = "'Inter', sans-serif"

const CURRENT_HREF = '/blog/ai-powered-patient-intake-guide'
const ARTICLE_URL = 'https://www.a2v2.ai/blog/ai-powered-patient-intake-guide'
const ARTICLE_TITLE = 'AI-powered patient intake: a guide for clinics'

const relatedPosts = getRelatedPosts(CURRENT_HREF, 3)

const faqItems = [
  {
    q: 'What is AI-powered patient intake?',
    a: 'It is intake that uses AI to reduce manual work, through custom digital forms, AI that extracts data from uploaded documents to auto-fill forms, and conversational intake that creates a patient record automatically.',
  },
  {
    q: 'How does AI file extraction work?',
    a: 'You upload a document like a PDF or Word file, and AI reads it and populates the matching form fields. Your team reviews and confirms the result instead of typing everything by hand.',
  },
  {
    q: 'Is AI-powered intake secure?',
    a: 'It should be. Intake data is protected health information, so it needs encryption, a Business Associate Agreement, and control over which fields AI can access.',
  },
  {
    q: 'Does AI replace my front desk?',
    a: 'No. AI reduces the repetitive data entry involved in intake so your team spends less time typing and more time with patients. Your staff still reviews and manages the process.',
  },
  {
    q: 'How does A2V2 handle patient intake?',
    a: 'A2V2 offers a drag-and-drop form builder, AI file extraction that auto-populates forms from uploaded documents, and conversational intake with email verification that creates a patient record automatically, all inside HIPAA-compliant infrastructure.',
  },
]

const formItems = [
  'Build custom intake and assessment forms with the fields you need',
  'Let patients complete them digitally before or during their visit',
  'Capture structured data from the start, not handwriting to decipher',
]

const extractionItems = [
  'Upload a PDF, Word doc, or other document',
  'AI extracts the relevant details and fills the form',
  'The result becomes a draft your team reviews and confirms',
]

const conversationItems = [
  'A patient starts a conversation with your agent',
  'The agent verifies their identity by email',
  'A patient record is created automatically from that conversation',
]

const complianceItems = [
  'Encryption for sensitive intake data',
  'A Business Associate Agreement covering how the data is handled',
  'Control over which fields are accessible to AI and which are not',
]

const checklistItems = [
  'Can you build custom forms for your specialty?',
  'Can AI extract data from uploaded documents to reduce typing?',
  'Can intake happen through conversation, not just static forms?',
  'Is intake data encrypted and covered by a BAA?',
  'Does the extracted data get reviewed before it is saved?',
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

  const btnBase: React.CSSProperties = {
    background: 'rgba(0,0,0,0.05)',
    border: '1px solid rgba(0,0,0,0.10)',
    color: '#0F0E0D',
  }

  return (
    <div className="flex items-center gap-3 mt-6">
      <span style={{ fontSize: 13, fontWeight: 500, color: '#68655E', fontFamily: I }}>Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
        style={btnBase}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.09)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.05)')}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.727-8.842L1.064 2.25H8.08l4.262 5.639L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
        style={btnBase}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.09)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.05)')}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
        </svg>
      </a>
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="flex items-center gap-1.5 px-3 h-9 rounded-full transition-colors text-sm"
        style={{ ...btnBase, fontFamily: I }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.09)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.05)')}
      >
        {copied ? (
          <>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <div className="mt-16 pt-12" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <h2 style={{ fontSize: 28, fontWeight: 400, color: '#0F0E0D', fontFamily: H, marginBottom: 32, lineHeight: 1.2 }}>
        Frequently asked questions
      </h2>
      <div className="flex flex-col">
        {faqItems.map((item, i) => (
          <div
            key={i}
            style={{
              borderTop: i === 0 ? '1px solid rgba(0,0,0,0.08)' : 'none',
              borderBottom: '1px solid rgba(0,0,0,0.08)',
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 text-left"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '20px 0' }}
            >
              <span style={{ fontSize: 15, fontWeight: 500, color: '#0F0E0D', fontFamily: I, lineHeight: 1.4 }}>
                {item.q}
              </span>
              <svg
                width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="#0F0E0D" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                style={{
                  flexShrink: 0,
                  transition: 'transform 300ms',
                  transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              style={{
                overflow: 'hidden',
                maxHeight: openIndex === i ? 500 : 0,
                transition: 'max-height 300ms ease',
              }}
            >
              <p style={{ fontSize: 14, lineHeight: 1.75, color: '#68655E', fontFamily: I, paddingBottom: 20, margin: 0 }}>
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
      style={{ background: 'rgba(0,0,0,0.03)', borderLeft: '3px solid #0F0E0D' }}
    >
      <p style={{ fontSize: 14, lineHeight: 1.7, color: '#1a1a1a', fontFamily: I, margin: 0 }}>
        {children}
      </p>
    </div>
  )
}

/* ── Bullet list ── */
function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: '1.5rem' }}>
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3"
          style={{ marginBottom: 14, fontSize: 16, color: '#1a1a1a', fontFamily: I, lineHeight: 1.65 }}
        >
          <svg
            width="6" height="6" viewBox="0 0 6 6"
            style={{ flexShrink: 0, marginTop: 8 }}
          >
            <circle cx="3" cy="3" r="3" fill="#0F0E0D" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* ── Check list ── */
function CheckList({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: '1.5rem' }}>
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3"
          style={{ marginBottom: 14, fontSize: 16, color: '#1a1a1a', fontFamily: I, lineHeight: 1.65 }}
        >
          <svg
            width="17" height="17" viewBox="0 0 24 24"
            fill="none" stroke="#0F0E0D" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round"
            style={{ flexShrink: 0, marginTop: 3 }}
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* ── Shared text styles ── */
const bodyText: React.CSSProperties = {
  fontSize: 17,
  lineHeight: 1.78,
  color: '#1a1a1a',
  fontFamily: I,
  marginBottom: '1.5rem',
  letterSpacing: '-0.1px',
}

const h2Style: React.CSSProperties = {
  fontSize: 26,
  fontWeight: 400,
  color: '#0F0E0D',
  fontFamily: H,
  marginTop: '2.75rem',
  marginBottom: '1rem',
  lineHeight: 1.2,
}

/* ── Main component ── */
export default function AiPoweredPatientIntakeGuideBlogPost() {
  return (
    <div style={{ background: '#FFFFFF', fontFamily: I }}>
      <TestHomepage2Navbar />

      <div style={{ paddingTop: 88 }}>
        <div className="mx-auto max-w-[720px] px-6 py-12 md:py-20">

          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm" style={{ color: '#68655E', fontFamily: I }}>
            <Link
              href="/blog"
              style={{ color: '#68655E', textDecoration: 'none', transition: 'color 150ms' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0F0E0D')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#68655E')}
            >
              Blog
            </Link>
            <span style={{ color: 'rgba(0,0,0,0.25)' }}>/</span>
            <span>Best Practices</span>
          </div>

          {/* Header */}
          <header className="mb-10">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-5"
              style={{ border: '1px solid rgba(0,0,0,0.15)', color: '#0F0E0D', fontFamily: I, letterSpacing: '0.2px' }}
            >
              Best Practices
            </span>

            <h1
              style={{
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: 400,
                color: '#0F0E0D',
                fontFamily: H,
                lineHeight: 1.05,
                letterSpacing: '-0.5px',
                marginBottom: 20,
              }}
            >
              AI-powered patient intake: a guide for clinics
            </h1>

            <p
              style={{
                fontSize: 18,
                fontWeight: 500,
                color: '#68655E',
                fontFamily: I,
                letterSpacing: '-0.3px',
                lineHeight: 1.6,
                marginBottom: 0,
              }}
            >
              Intake is where patients form their first impression and where your team loses the most time. Here is how AI makes it faster for everyone.
            </p>

            {/* Author row */}
            <div className="mt-6 flex items-center gap-3">
              <Image
                src="/icons/Solo-Logo-A2V2.svg"
                alt="A2V2"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <span style={{ fontSize: 13, color: '#68655E', fontFamily: I }}>
                By The A2V2 Team &middot; 6 min read &middot; July 14, 2026
              </span>
            </div>

            <ShareBar url={ARTICLE_URL} title={ARTICLE_TITLE} />
          </header>

          {/* Hero image */}
          <div className="w-full mb-12">
            <Image
              src="/images/ai-powered-patient-intake-guide.png"
              alt="AI-powered patient intake: a guide for clinics"
              width={720}
              height={405}
              className="w-full aspect-[16/9] object-cover"
              quality={100}
              unoptimized
              priority
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/what-to-look-for-healthcare-crm.png'
              }}
            />
          </div>

          {/* Body */}
          <article>
            <p style={bodyText}>
              Patient intake is a strange bottleneck. It is one of the first things a new patient experiences, so it shapes their impression of your clinic. It is also one of the most tedious, time-consuming tasks your team handles. Paper forms, manual data entry, chasing missing information. AI can fix most of that.
            </p>
            <p style={bodyText}>
              Here is how AI-powered intake works, and what to look for if you are considering it.
            </p>

            <h2 style={h2Style}>The problem with traditional intake</h2>
            <p style={bodyText}>
              Traditional intake is slow on both sides. Patients fill out repetitive forms, often the same information they have given before. Your staff then retypes it all into the system by hand, which is slow and error-prone. Anything a patient forgets means a follow-up call.
            </p>

            <NoteBox>
              Manual data entry is not just tedious, it is where errors creep in. A mistyped date or dosage in a patient record can cause real problems down the line.
            </NoteBox>

            <h2 style={h2Style}>Custom forms patients complete themselves</h2>
            <p style={bodyText}>
              The first piece is digital forms your patients fill out on their own, built for exactly what your clinic needs to know.
            </p>
            <BulletList items={formItems} />

            <h2 style={h2Style}>AI file extraction, the real time-saver</h2>
            <p style={bodyText}>
              This is where AI changes intake the most. Instead of your team retyping information from documents, AI reads the document and fills in the form for you.
            </p>
            <p style={bodyText}>
              A patient sends over a prior lab report, an intake document from another provider, or a PDF of their history. AI extracts the relevant details and populates the matching form fields automatically. Your team reviews and confirms, rather than typing from scratch.
            </p>
            <BulletList items={extractionItems} />

            <NoteBox>
              This is the difference between intake that takes twenty minutes of typing and intake that takes two minutes of reviewing.
            </NoteBox>

            <h2 style={h2Style}>Intake right inside a conversation</h2>
            <p style={bodyText}>
              Intake does not have to be a separate form at all. It can happen naturally in a conversation.
            </p>
            <BulletList items={conversationItems} />

            <h2 style={h2Style}>Keep it compliant</h2>
            <p style={bodyText}>
              Intake data is protected health information from the very first field. However you collect it, it needs to be handled compliantly.
            </p>
            <BulletList items={complianceItems} />
            <p style={bodyText}>
              <Link href="/blog/what-is-a-hipaa-compliant-ai-agent" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Learn what makes intake HIPAA-compliant
              </Link>
            </p>

            <h2 style={h2Style}>What to look for</h2>
            <CheckList items={checklistItems} />

            <h2 style={h2Style}>The bottom line</h2>
            <p style={bodyText}>
              Good intake respects everyone&apos;s time. It lets patients share information easily, spares your team hours of data entry, and keeps the record accurate from day one. AI-powered intake, with custom forms, file extraction, and conversational capture, turns one of the most tedious parts of running a clinic into one of the smoothest.
            </p>

            <p style={bodyText}>
              <Link href="/features/patient-intake" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See how A2V2&apos;s patient intake works
              </Link>
              {' '}&middot;{' '}
              <Link href="/security" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Learn about our security
              </Link>
              {' '}&middot;{' '}
              <a href={DEMO_BOOKING_URL} style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Book a demo
              </a>
            </p>
          </article>

          {/* FAQ */}
          <FAQAccordion />

          {/* Bottom share */}
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
            <ShareBar url={ARTICLE_URL} title={ARTICLE_TITLE} />
          </div>
        </div>

        {/* Related Posts */}
        <div style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#FAFAFA' }}>
          <div className="mx-auto max-w-[1280px] px-6 md:px-16 py-16 md:py-20">
            <h2
              style={{
                fontSize: 24,
                fontWeight: 400,
                color: '#0F0E0D',
                fontFamily: H,
                marginBottom: 32,
              }}
            >
              Related posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post, i) => (
                <Link
                  key={i}
                  href={post.href}
                  className="flex flex-col"
                  style={{ textDecoration: 'none' }}
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
                    <div className="w-full aspect-[16/9]" style={{ background: 'rgba(0,0,0,0.05)' }} />
                  )}
                  <span
                    className="inline-flex self-start text-xs px-2.5 py-1 rounded-full mt-4 mb-2"
                    style={{ border: '1px solid rgba(0,0,0,0.12)', color: '#68655E', fontFamily: I }}
                  >
                    {post.category}
                  </span>
                  <h3
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#0F0E0D',
                      fontFamily: I,
                      lineHeight: 1.4,
                      margin: 0,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p style={{ marginTop: 8, fontSize: 13, lineHeight: 1.6, color: '#68655E', fontFamily: I }}>
                    {post.description}
                  </p>
                  <span
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium"
                    style={{ color: '#0F0E0D', fontFamily: I }}
                  >
                    Read Post
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.07)' }}>
          <div className="mx-auto max-w-[720px] px-6 py-20 md:py-28 text-center">
            <h2
              style={{
                fontSize: 'clamp(32px, 6vw, 52px)',
                fontWeight: 400,
                color: '#0F0E0D',
                fontFamily: H,
                lineHeight: 1.05,
                letterSpacing: '-0.5px',
                marginBottom: 20,
              }}
            >
              See intake that fills itself in
            </h2>
            <p
              style={{
                fontSize: 17,
                fontWeight: 500,
                color: '#68655E',
                fontFamily: I,
                letterSpacing: '-0.3px',
                lineHeight: 1.6,
                marginBottom: 36,
              }}
            >
              Book a demo and we will show you AI-powered intake and everything else A2V2 can do for your clinic.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={DEMO_BOOKING_URL}
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  background: '#0F0E0D', color: '#ffffff',
                  fontSize: 14, fontWeight: 500, fontFamily: I,
                  padding: '11px 24px', borderRadius: 8,
                  textDecoration: 'none', transition: 'opacity 150ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.82')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Book a Demo
              </a>
              <a
                href={SIGN_IN_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  background: 'transparent', color: '#0F0E0D',
                  fontSize: 14, fontWeight: 500, fontFamily: I,
                  padding: '11px 24px', borderRadius: 8,
                  border: '1px solid #0F0E0D',
                  textDecoration: 'none', transition: 'opacity 150ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.65')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <TestHomepage2Footer />
    </div>
  )
}
