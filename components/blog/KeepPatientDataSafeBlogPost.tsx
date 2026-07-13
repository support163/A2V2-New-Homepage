'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FileSignature, Lock, Ban, ScrollText, Users, MapPin, type LucideIcon } from 'lucide-react'
import TestHomepage2Navbar from '@/components/TestHomepage2Navbar'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import { getRelatedPosts } from '@/lib/blog-posts'
import { DEMO_BOOKING_URL, SIGN_IN_URL } from '@/lib/constants'

const H = "'Helvetica Neue', Helvetica, Arial, sans-serif"
const I = "'Inter', sans-serif"

const CURRENT_HREF = '/blog/keep-patient-data-safe-using-ai'
const ARTICLE_URL = 'https://www.a2v2.ai/blog/keep-patient-data-safe-using-ai'
const ARTICLE_TITLE = 'How to keep patient data safe when using AI'

const relatedPosts = getRelatedPosts(CURRENT_HREF, 3)

const faqItems = [
  {
    q: 'Can I use ChatGPT with patient data?',
    a: 'Not the standard consumer version. It typically does not offer a BAA and may use submitted data to improve its models. For anything involving patient data, use a HIPAA-compliant tool with a BAA in place.',
  },
  {
    q: 'What is the most important thing for keeping patient data safe with AI?',
    a: 'A Business Associate Agreement. It is the legal foundation that makes a vendor responsible for protecting PHI. Without a BAA, an AI tool should never handle patient data.',
  },
  {
    q: 'Is it safe to use AI for tasks that do not involve patient data?',
    a: 'Yes. Consumer AI is fine for general tasks that do not involve PHI, like drafting marketing content or researching a topic without patient details. The risk comes specifically from putting patient information into non-compliant tools.',
  },
  {
    q: 'How do I stop my staff from using consumer AI with patient data?',
    a: 'Create a clear AI use policy, train your team on what counts as PHI, and most importantly give them a compliant AI tool that is just as useful. People reach for consumer tools because they help, so provide a safe alternative that helps just as much.',
  },
  {
    q: 'How does A2V2 keep patient data safe?',
    a: 'A2V2 runs AI inside HIPAA-compliant infrastructure with a BAA on every plan, AES-256 encryption, secured LLM access where your data is never used for training, audit trails, role-based access controls, and US-based data centers.',
  },
]

interface Safeguard {
  Icon: LucideIcon
  title: string
  description: string
}

const safeguards: Safeguard[] = [
  {
    Icon: FileSignature,
    title: 'A Business Associate Agreement (BAA)',
    description:
      'A signed contract making the vendor legally responsible for protecting PHI. Without one, AI should never touch patient data.',
  },
  {
    Icon: Lock,
    title: 'Strong encryption',
    description:
      'Data should be encrypted with standards like AES-256 when stored and TLS 1.3 when moving across the network.',
  },
  {
    Icon: Ban,
    title: 'No training on your data',
    description:
      'Your patient data should never be used to train or improve AI models. Look for this in writing.',
  },
  {
    Icon: ScrollText,
    title: 'Audit trails',
    description:
      'Every interaction with patient data should be logged, timestamped, and exportable for compliance.',
  },
  {
    Icon: Users,
    title: 'Role-based access',
    description:
      'Staff should only see the data their role requires. Not everyone needs access to everything.',
  },
  {
    Icon: MapPin,
    title: 'Known data location',
    description:
      'You should know where patient data is stored. For US healthcare, that generally means US-based data centers.',
  },
]

const teamHabits = [
  'Create a clear policy on which AI tools are approved and which are off-limits',
  'Train every staff member on what counts as PHI',
  'Make it a rule that patient data only goes into approved, compliant tools',
  'Review your AI use periodically to catch risky habits early',
  'When in doubt, leave patient details out of the prompt',
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
export default function KeepPatientDataSafeBlogPost() {
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
            <span>Privacy &amp; Trust</span>
          </div>

          {/* Header */}
          <header className="mb-10">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-5"
              style={{ border: '1px solid rgba(0,0,0,0.15)', color: '#0F0E0D', fontFamily: I, letterSpacing: '0.2px' }}
            >
              Privacy &amp; Trust
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
              How to keep patient data safe when using AI
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
              AI can save your clinic hours, but only if patient data stays protected. Here is a practical guide to using AI without putting patient trust or compliance at risk.
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
              src="/images/keep-patient-data-safe-using-ai.png"
              alt="How to keep patient data safe when using AI"
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
              AI is quickly becoming part of daily life in clinics, from answering patient questions to organizing records and drafting communication. Used well, it saves hours. Used carelessly, it can put your patients&apos; most sensitive information at risk.
            </p>
            <p style={bodyText}>
              The good news is that keeping patient data safe with AI is not complicated once you know what to look for. Here is a practical guide.
            </p>

            <h2 style={h2Style}>Understand what counts as patient data</h2>
            <p style={bodyText}>
              Before anything else, it helps to know exactly what you are protecting. Protected health information, or PHI, is any health information tied to an identifiable person. A name next to a symptom, a treatment, an appointment, or a lab result is PHI.
            </p>

            <NoteBox>
              The moment identifiable patient information goes into an AI tool, you are responsible for how that tool handles it. That is true even if you are only asking the AI to summarize or rephrase something.
            </NoteBox>

            <h2 style={h2Style}>The biggest mistake: using consumer AI with patient data</h2>
            <p style={bodyText}>
              The most common way patient data gets exposed is also the easiest to avoid. A staff member pastes patient information into a consumer AI tool to get a quick summary or a drafted message. It feels harmless, but consumer tools typically offer no Business Associate Agreement, may use the data to improve their models, and give you no record of what happened.
            </p>
            <p style={bodyText}>
              The fix is simple: never put patient information into a consumer AI tool. Use a tool built for healthcare instead.
            </p>

            <h2 style={h2Style}>What a safe AI setup looks like</h2>
            <p style={bodyText}>
              If AI is going to touch patient data, it needs specific protections in place. Here is your checklist.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {safeguards.map(({ Icon, title, description }, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(0,0,0,0.025)', border: '1px solid rgba(0,0,0,0.07)' }}
                >
                  <div
                    className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg"
                    style={{ background: 'rgba(0,0,0,0.05)' }}
                  >
                    <Icon size={18} strokeWidth={1.75} color="#0F0E0D" />
                  </div>
                  <div>
                    <p style={{ fontSize: 15, fontWeight: 600, color: '#0F0E0D', fontFamily: I, margin: '0 0 4px' }}>
                      {i + 1}. {title}
                    </p>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: '#68655E', fontFamily: I, margin: 0 }}>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 style={h2Style}>Build simple habits for your team</h2>
            <p style={bodyText}>
              Technology is only half of it. The other half is how your team uses AI day to day.
            </p>

            <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: '1.5rem' }}>
              {teamHabits.map((item, i) => (
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

            <NoteBox>
              Most data exposure is not malicious. It happens when a well-meaning staff member reaches for a familiar consumer tool. A clear policy and a compliant alternative prevent it.
            </NoteBox>

            <h2 style={h2Style}>Give your team a compliant tool they will actually use</h2>
            <p style={bodyText}>
              Here is the part clinics often miss. If you take away consumer AI without giving staff a compliant alternative, they will keep using it quietly because it is useful. The goal is not to ban AI, it is to give your team AI that is both useful and safe.
            </p>
            <p style={bodyText}>
              A HIPAA-compliant AI platform runs capable AI models inside the right infrastructure: a BAA, encryption, audit trails, and access controls at every step. Your team gets the same speed and help, and patient data stays protected.
            </p>
            <p style={bodyText}>
              <Link href="/blog/what-is-a-hipaa-compliant-ai-agent" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Learn what makes an AI agent HIPAA-compliant
              </Link>
            </p>

            <h2 style={h2Style}>The bottom line</h2>
            <p style={bodyText}>
              Keeping patient data safe with AI comes down to a few clear rules: know what counts as PHI, never use consumer AI with patient data, choose a tool with a BAA and real security safeguards, and give your team clear habits and a compliant alternative. Do that, and your clinic gets the benefit of AI without putting patient trust or compliance at risk.
            </p>

            <p style={bodyText}>
              <Link href="/security" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See how A2V2 handles security
              </Link>
              {' '}&middot;{' '}
              <Link href="/features/ai-agents" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                How A2V2&apos;s AI agents work
              </Link>
              {' '}&middot;{' '}
              <a href={DEMO_BOOKING_URL} style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Book a demo
              </a>
            </p>

            <p style={{ fontSize: 13, lineHeight: 1.7, color: '#68655E', fontFamily: I, marginTop: '2rem', marginBottom: 0 }}>
              This article is educational and not legal advice. For specific compliance questions, consult a qualified professional.
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
              Give your team AI that keeps data safe
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
              Book a demo and we will show you how A2V2 protects patient data while automating your clinic&apos;s busywork.
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
