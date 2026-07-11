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

const CURRENT_HREF = '/blog/what-is-a-hipaa-compliant-ai-agent'
const ARTICLE_URL = 'https://www.a2v2.ai/blog/what-is-a-hipaa-compliant-ai-agent'
const ARTICLE_TITLE = 'What is a HIPAA-compliant AI agent?'

const relatedPosts = getRelatedPosts(CURRENT_HREF, 3)

const faqItems = [
  {
    q: 'Is ChatGPT HIPAA-compliant?',
    a: 'The standard consumer version is not. It typically does not offer a BAA and may use submitted data to improve its models. Some providers offer separate enterprise or API options with BAA availability, but those are different products from the consumer versions most people use.',
  },
  {
    q: 'What is a BAA and why does it matter?',
    a: "A Business Associate Agreement is a signed legal contract that makes a vendor responsible for protecting your patients' health information. Without a BAA, an AI tool should never handle PHI. It is the foundation of HIPAA compliance.",
  },
  {
    q: 'Does using a HIPAA-compliant AI agent mean my data is used to train AI?',
    a: 'It should not. A HIPAA-compliant AI agent should contractually guarantee that your patient data is never used to train, fine-tune, or improve AI models.',
  },
  {
    q: 'Can an AI agent make medical decisions?',
    a: 'A well-designed AI agent handles routine communication and escalates anything requiring clinical judgment to your team. The AI supports your staff, but medical decisions should always stay with your providers.',
  },
  {
    q: "What makes A2V2's AI agents HIPAA-compliant?",
    a: 'A2V2 runs AI agents inside HIPAA-compliant infrastructure with a BAA on every plan, AES-256 encryption, secured LLM access where your data is never used for training, audit trails, role-based access controls, and US-based data centers.',
  },
]

interface Requirement {
  Icon: LucideIcon
  title: string
  description: string
}

const requirements: Requirement[] = [
  {
    Icon: FileSignature,
    title: 'A Business Associate Agreement (BAA)',
    description:
      'A signed legal contract that makes the vendor responsible for protecting PHI. No BAA means the AI should never touch patient data. This is the single most important requirement.',
  },
  {
    Icon: Lock,
    title: 'Encryption at rest and in transit',
    description:
      'Patient data should be encrypted using standards like AES-256 when stored and TLS 1.3 when moving across the network, so it cannot be read if intercepted.',
  },
  {
    Icon: Ban,
    title: 'No training on your data',
    description:
      'Your patient data should never be used to train, fine-tune, or improve AI models. This should be guaranteed in writing.',
  },
  {
    Icon: ScrollText,
    title: 'Audit trails',
    description:
      'Every interaction involving PHI should be logged, timestamped, and exportable, so you can show exactly who accessed what and when.',
  },
  {
    Icon: Users,
    title: 'Role-based access controls',
    description:
      'Different staff should have different levels of access. Your front desk should not see everything your medical director sees.',
  },
  {
    Icon: MapPin,
    title: 'Known data location',
    description:
      'You should know where patient data is stored. For US healthcare, that generally means US-based data centers.',
  },
]

const checklist = [
  'A BAA included on every plan, not just enterprise tiers',
  'Clear encryption standards (AES-256 at rest, TLS 1.3 in transit)',
  'A written guarantee that your data is never used to train AI models',
  'Complete, exportable audit trails',
  'Role-based access controls',
  'Known, US-based data storage',
  'A clear escalation path so clinical decisions stay with your team',
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
export default function HipaaCompliantAiAgentBlogPost() {
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
              What is a HIPAA-compliant AI agent?
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
              AI can transform how clinics communicate with patients, but only if it handles protected health information the right way. Here is what makes an AI agent HIPAA-compliant, and what to look for before you let one near patient data.
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
                By The A2V2 Team &middot; 6 min read &middot; July 10, 2026
              </span>
            </div>

            <ShareBar url={ARTICLE_URL} title={ARTICLE_TITLE} />
          </header>

          {/* Hero image */}
          <div className="w-full mb-12">
            <Image
              src="/images/what-is-hipaa-compliant-ai-agent.png"
              alt="What is a HIPAA-compliant AI agent?"
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
              AI is quickly becoming part of how clinics run, from answering patient questions to organizing records. But healthcare is not like other industries. The moment an AI touches patient information, it enters the world of HIPAA, and most AI tools were never built for that.
            </p>
            <p style={bodyText}>
              So what actually makes an AI agent HIPAA-compliant? It comes down to the legal and technical safeguards around the AI, not the AI itself.
            </p>

            <h2 style={h2Style}>First, what is an AI agent?</h2>
            <p style={bodyText}>
              An AI agent is software that can understand a request and act on it, often through natural conversation. In a clinic, an AI agent might answer a patient&apos;s question, help with intake, or organize information into a record. The difference between an AI agent and a basic chatbot is that an agent can be given its own instructions, knowledge, and the ability to take actions, rather than just returning scripted replies.
            </p>

            <h2 style={h2Style}>&quot;HIPAA-compliant&quot; actually means</h2>
            <p style={bodyText}>
              HIPAA is a US law that protects patients&apos; health information. When people say an AI agent is HIPAA-compliant, they mean it handles protected health information, or PHI, under the safeguards HIPAA requires.
            </p>

            <NoteBox>
              PHI is any health information tied to an identifiable person. A patient&apos;s name alongside their symptoms, treatment, or appointment details is PHI. The moment an AI processes that, HIPAA applies.
            </NoteBox>

            <p style={bodyText}>
              The important thing to understand: HIPAA compliance is not a feature of the AI model. The same underlying model can be compliant or not depending entirely on the infrastructure and legal agreements around it.
            </p>

            <h2 style={h2Style}>What makes an AI agent HIPAA-compliant</h2>
            <p style={bodyText}>
              A HIPAA-compliant AI agent has a specific set of legal and technical protections in place. Here is what to look for.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {requirements.map(({ Icon, title, description }, i) => (
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

            <h2 style={h2Style}>Why most AI tools are not HIPAA-compliant</h2>
            <p style={bodyText}>
              Consumer AI tools like the standard versions of popular chatbots are built for general use, not healthcare. They typically do not offer a BAA, may use submitted data to improve their models, and give you no audit trail or access controls. That makes them a compliance risk the moment a staff member pastes patient information into them.
            </p>

            <NoteBox>
              The problem is rarely the quality of the AI. It is that consumer tools were never built to handle patient data under HIPAA. The same capable models can be used compliantly when they run inside the right infrastructure.
            </NoteBox>

            <h2 style={h2Style}>How a HIPAA-compliant AI agent is different</h2>
            <p style={bodyText}>
              A HIPAA-compliant AI agent runs capable AI models inside compliant infrastructure. The model answers the patient&apos;s question, but every step happens under a BAA, with encryption, audit logging, and access controls around it. And because a well-designed agent escalates anything requiring clinical judgment to your team, the AI handles the routine while your providers stay in control of every medical decision.
            </p>

            <h2 style={h2Style}>What clinics should look for</h2>

            <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: '1.5rem' }}>
              {checklist.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  style={{ marginBottom: 14, fontSize: 16, color: '#1a1a1a', fontFamily: I, lineHeight: 1.65 }}
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0F0E0D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, marginTop: 3 }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p style={bodyText}>
              <Link href="/security" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Learn how A2V2 handles security
              </Link>
              {' '}&middot;{' '}
              <Link href="/features/ai-agents" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See how our AI agents work
              </Link>
              {' '}&middot;{' '}
              <a href={DEMO_BOOKING_URL} style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Book a demo
              </a>
            </p>

            <h2 style={h2Style}>The bottom line</h2>
            <p style={bodyText}>
              A HIPAA-compliant AI agent is not a different kind of AI. It is a capable AI model wrapped in the legal and technical protections that patient data requires: a BAA, encryption, audit trails, access controls, known data storage, and a guarantee your data is never used for training. When those pieces are in place, clinics get the benefit of AI without putting patient trust or compliance at risk.
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
              See a HIPAA-compliant AI agent in action
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
              Book a demo and we will show you how A2V2 keeps patient data safe while automating your clinic&apos;s busywork.
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
