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

const CURRENT_HREF = '/blog/how-ai-reduces-admin-work-clinic'
const ARTICLE_URL = 'https://www.a2v2.ai/blog/how-ai-reduces-admin-work-clinic'
const ARTICLE_TITLE = 'How AI reduces administrative work in your clinic'

const relatedPosts = getRelatedPosts(CURRENT_HREF, 3)

const faqItems = [
  {
    q: 'What administrative tasks can AI handle in a clinic?',
    a: 'AI is well suited to repetitive admin like patient intake, data entry from documents, scheduling, meeting notes, organizing records, and answering routine patient questions. It handles the busywork so your team can focus on care.',
  },
  {
    q: 'Will AI replace my staff?',
    a: 'No. AI is designed to take repetitive administrative work off your team\'s plate, not replace them. Clinical judgment and patient care stay firmly with your providers.',
  },
  {
    q: 'Can AI really reduce data entry?',
    a: 'Yes. For example, AI can read an uploaded document and automatically fill in the matching form fields, so your team does not have to retype information a patient already provided.',
  },
  {
    q: 'Does AI make clinical decisions?',
    a: 'No. A well-designed AI agent handles routine communication and administrative tasks and escalates anything requiring clinical judgment to your team. Medical decisions always stay with your providers.',
  },
  {
    q: 'How does A2V2 help reduce admin work?',
    a: 'A2V2 brings AI-powered intake, a patient CRM, scheduling with an AI notetaker, and AI agents together in one HIPAA-compliant platform, automating the repetitive tasks that fill your team\'s day.',
  },
]

const intakeItems = [
  'Custom intake forms patients complete themselves',
  'AI that reads uploaded documents and fills in the matching form fields automatically, so nobody retypes what a patient already provided',
  'New conversations that become patient records without manual setup',
]

const schedulingItems = [
  'Calendar sync so availability stays accurate automatically',
  'Direct booking that generates a meeting link and sends the invite',
  'An AI notetaker that records and transcribes booked meetings, so your team can stay present instead of scribbling notes',
]

const recordsItems = [
  'A patient record that pulls conversations, forms, notes, and history into one place',
  'Health parameters tracked over time, so trends are visible without manual charting',
  'Workflow automations that handle routine steps so they do not depend on someone remembering',
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
export default function HowAiReducesAdminWorkBlogPost() {
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
              How AI reduces administrative work in your clinic
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
              Your team did not go into healthcare to do paperwork. Here is how AI takes the repetitive admin off their plate, so they can spend more time on patients.
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
                By The A2V2 Team &middot; 6 min read &middot; July 13, 2026
              </span>
            </div>

            <ShareBar url={ARTICLE_URL} title={ARTICLE_TITLE} />
          </header>

          {/* Hero image */}
          <div className="w-full mb-12">
            <Image
              src="/images/how-ai-reduces-admin-work.png"
              alt="How AI reduces administrative work in your clinic"
              width={720}
              height={405}
              className="w-full aspect-[16/9] object-cover"
              quality={100}
              unoptimized
              priority
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/keep-patient-data-safe-using-ai.png'
              }}
            />
          </div>

          {/* Body */}
          <article>
            <p style={bodyText}>
              Ask anyone who works at a clinic what eats their day, and the answer is rarely the patients. It is the paperwork. Intake forms, data entry, scheduling, chasing down information, writing up notes. The administrative load is enormous, and it pulls skilled people away from the work that actually matters.
            </p>
            <p style={bodyText}>
              AI is genuinely good at this kind of work. Not the clinical judgment, that stays with your team, but the repetitive, time-consuming tasks that fill the gaps between patient care. Here is where it makes the biggest difference.
            </p>

            <h2 style={h2Style}>Patient intake</h2>
            <p style={bodyText}>
              Intake is one of the most repetitive parts of running a clinic. Forms get filled out, data gets typed in, documents get sorted. AI can carry a lot of that load.
            </p>

            <BulletList items={intakeItems} />

            <NoteBox>
              Manual data entry is one of the biggest time sinks in a clinic and one of the easiest to reduce. When a document can populate a form on its own, your team stops being data-entry clerks.
            </NoteBox>

            <h2 style={h2Style}>Scheduling and meetings</h2>
            <p style={bodyText}>
              Coordinating calendars, booking appointments, and writing up what was discussed adds up fast.
            </p>

            <BulletList items={schedulingItems} />

            <h2 style={h2Style}>Patient records and follow-up</h2>
            <p style={bodyText}>
              Keeping records organized and up to date is constant, low-visibility work that still has to happen.
            </p>

            <BulletList items={recordsItems} />

            <h2 style={h2Style}>Answering routine patient questions</h2>
            <p style={bodyText}>
              A large share of patient messages are variations of the same common questions. Your team answers them over and over.
            </p>
            <p style={bodyText}>
              An AI agent can handle those routine questions in your clinic&apos;s voice, freeing your staff from repetitive back-and-forth. And when a question needs clinical judgment, it escalates to your team, so the AI handles the routine while your providers handle the care.
            </p>
            <p style={bodyText}>
              <Link href="/blog/ai-agents-vs-chatbots-healthcare" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See the difference between an AI agent and a chatbot
              </Link>
            </p>

            <h2 style={h2Style}>What AI should not do</h2>
            <p style={bodyText}>
              It is worth being clear about the line. AI is for the administrative load, not clinical decisions.
            </p>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >
              <div
                className="rounded-xl p-5"
                style={{ background: 'rgba(0,0,0,0.025)', border: '1px solid rgba(0,0,0,0.08)' }}
              >
                <p style={{ fontSize: 13, fontWeight: 600, color: '#68655E', fontFamily: I, marginBottom: 12, letterSpacing: '0.4px', textTransform: 'uppercase' }}>
                  AI is great for
                </p>
                <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
                  {['Intake and form collection', 'Data entry from documents', 'Scheduling and booking', 'Meeting notes and transcription', 'Organizing patient records', 'Answering routine patient questions', 'Repetitive workflow steps'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2" style={{ marginBottom: 10, fontSize: 14, color: '#1a1a1a', fontFamily: I, lineHeight: 1.5 }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0F0E0D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-xl p-5"
                style={{ background: 'rgba(239,68,68,0.03)', border: '1px solid rgba(239,68,68,0.12)' }}
              >
                <p style={{ fontSize: 13, fontWeight: 600, color: '#68655E', fontFamily: I, marginBottom: 12, letterSpacing: '0.4px', textTransform: 'uppercase' }}>
                  AI should not
                </p>
                <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
                  {['Make diagnoses', 'Decide treatment plans', 'Replace clinical judgment', 'Take over patient care decisions'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2" style={{ marginBottom: 10, fontSize: 14, color: '#1a1a1a', fontFamily: I, lineHeight: 1.5 }}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#68655E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: 13, lineHeight: 1.6, color: '#68655E', fontFamily: I, marginTop: 14, marginBottom: 0 }}>
                  Those stay with your providers, always.
                </p>
              </div>
            </div>

            <NoteBox>
              The goal is not to remove humans from care. It is to remove busywork from humans, so they have more time for care.
            </NoteBox>

            <h2 style={h2Style}>The payoff</h2>
            <p style={bodyText}>
              When AI takes over the repetitive admin, the effect compounds. Your team spends less time on forms and follow-up logistics and more time with patients. Records stay cleaner. Fewer things slip through the cracks. And you can grow without every new patient meaning proportionally more paperwork.
            </p>
            <p style={bodyText}>
              That is the real promise of AI in a clinic. Not replacing your team, but giving them their time back.
            </p>

            <p style={bodyText}>
              <Link href="/features/patient-intake" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See how AI-powered intake works
              </Link>
              {' '}&middot;{' '}
              <Link href="/features/patient-crm" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Explore the patient CRM
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
              Give your team their time back
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
              Book a demo and see how A2V2 automates the busywork so your team can focus on patients.
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
