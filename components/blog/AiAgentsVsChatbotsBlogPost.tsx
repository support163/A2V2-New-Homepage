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

const CURRENT_HREF = '/blog/ai-agents-vs-chatbots-healthcare'
const ARTICLE_URL = 'https://www.a2v2.ai/blog/ai-agents-vs-chatbots-healthcare'
const ARTICLE_TITLE = "AI agents vs. chatbots: what's the difference for healthcare?"

const relatedPosts = getRelatedPosts(CURRENT_HREF, 3)

const faqItems = [
  {
    q: 'What is the main difference between an AI agent and a chatbot?',
    a: 'A chatbot follows a script and returns pre-written answers, while an AI agent understands natural language, can be grounded in your own knowledge, and can take actions. In short, a chatbot answers questions and an AI agent can actually help.',
  },
  {
    q: 'Is an AI agent better than a chatbot?',
    a: 'For simple, fixed tasks a basic chatbot may be enough. For real patient conversations, personalization, and handling more than a few scripted questions, an AI agent is more capable. The right choice depends on what you need it to do.',
  },
  {
    q: 'Does an AI agent handle patient data safely?',
    a: 'It should. Because an AI agent can handle real patient conversations, it must run inside HIPAA-compliant infrastructure with a BAA, encryption, audit trails, and a guarantee that patient data is never used to train AI models.',
  },
  {
    q: 'Can an AI agent make medical decisions?',
    a: 'No. A well-designed AI agent handles routine communication and escalates anything requiring clinical judgment to your team. Medical decisions stay with your providers.',
  },
  {
    q: 'What kind of AI does A2V2 use?',
    a: "A2V2 provides AI agents that can be grounded in your clinic's knowledge, speak in your voice, and run inside HIPAA-compliant infrastructure, with escalation to your team for anything clinical.",
  },
]

const tableRows: [string, string, string][] = [
  ['How it responds', 'Scripted, pre-written replies', 'Understands and responds in natural language'],
  ['Flexibility', 'Breaks outside its script', 'Handles unexpected questions'],
  ['Knowledge', 'Only what was hard-coded', 'Grounded in your own content and protocols'],
  ['Personalization', 'Generic responses', "Speaks in your clinic's voice"],
  ['Actions', 'Limited or none', 'Can take actions and organize information'],
  ['Escalation', 'Dead ends or basic hand-off', 'Knows when to route to your team'],
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

/* ── Comparison table ── */
function ComparisonTable() {
  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', marginBottom: '1.5rem' }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
          <thead>
            <tr style={{ background: 'rgba(0,0,0,0.03)' }}>
              {['Capability', 'Traditional Chatbot', 'AI Agent'].map((h, i) => (
                <th
                  key={i}
                  style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#0F0E0D',
                    fontFamily: I,
                    borderBottom: '1px solid rgba(0,0,0,0.08)',
                    width: i === 0 ? '28%' : '36%',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map(([capability, chatbot, agent], ri) => (
              <tr key={ri} style={{ background: ri % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.015)' }}>
                <td style={{ padding: '12px 16px', fontSize: 14, fontWeight: 600, color: '#0F0E0D', fontFamily: I, borderBottom: ri < tableRows.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none', verticalAlign: 'top' }}>
                  {capability}
                </td>
                <td style={{ padding: '12px 16px', fontSize: 14, color: '#68655E', fontFamily: I, borderBottom: ri < tableRows.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none', verticalAlign: 'top' }}>
                  {chatbot}
                </td>
                <td style={{ padding: '12px 16px', fontSize: 14, color: '#1a1a1a', fontWeight: 500, fontFamily: I, borderBottom: ri < tableRows.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none', verticalAlign: 'top' }}>
                  {agent}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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

/* ── Checklist item ── */
function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3" style={{ marginBottom: 12, fontSize: 16, color: '#1a1a1a', fontFamily: I, lineHeight: 1.65, listStyle: 'none' }}>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0F0E0D" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}>
        <polyline points="20 6 9 17 4 12" />
      </svg>
      <span>{children}</span>
    </li>
  )
}

/* ── Main component ── */
export default function AiAgentsVsChatbotsBlogPost() {
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
            <span>Quick Guides</span>
          </div>

          {/* Header */}
          <header className="mb-10">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-5"
              style={{ border: '1px solid rgba(0,0,0,0.15)', color: '#0F0E0D', fontFamily: I, letterSpacing: '0.2px' }}
            >
              Quick Guides
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
              AI agents vs. chatbots: what&apos;s the difference for healthcare?
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
              The words get used interchangeably, but they are not the same thing. Understanding the difference helps clinics choose a tool that actually does the job, instead of one that just answers questions.
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
              src="/images/ai-agents-vs-chatbots.png"
              alt="AI agents vs chatbots: what's the difference for healthcare?"
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
              Walk into any conversation about AI in healthcare and you will hear &quot;chatbot&quot; and &quot;AI agent&quot; used as if they mean the same thing. They do not. The difference is not just marketing language, it changes what the tool can actually do for your clinic.
            </p>
            <p style={bodyText}>
              Here is a clear breakdown of what separates the two, and why it matters when you are choosing a tool for patient communication.
            </p>

            <h2 style={h2Style}>What a chatbot does</h2>
            <p style={bodyText}>
              A traditional chatbot follows a script. It recognizes certain questions and returns pre-written answers, usually through a decision tree of if-this-then-that rules. Ask something it was built for and it responds well. Ask something slightly outside its script and it gets stuck or hands you off.
            </p>
            <p style={bodyText}>
              Chatbots are good at narrow, predictable tasks: answering the same handful of common questions, pointing people to a form, or collecting a few pieces of information in a fixed order.
            </p>

            <h2 style={h2Style}>What an AI agent does</h2>
            <p style={bodyText}>
              An AI agent is more capable. Instead of following a rigid script, it understands what someone is actually asking and responds in natural language. It can be given its own instructions, grounded in your specific knowledge, and given the ability to take actions rather than just reply.
            </p>
            <p style={bodyText}>
              In a clinic, that means an AI agent can hold a real conversation with a patient, answer questions in your clinic&apos;s voice, help with tasks, and know when to escalate something to your team.
            </p>

            <h2 style={h2Style}>The key differences</h2>
            <ComparisonTable />

            <h2 style={h2Style}>Why the difference matters for clinics</h2>
            <p style={bodyText}>
              Patient questions are messy and personal. A patient rarely asks a question in the exact way a script expects. They describe how they feel, mention several things at once, or ask a follow-up. A scripted chatbot struggles with that. An AI agent can follow the conversation naturally.
            </p>

            <NoteBox>
              For a clinic, the practical difference is this: a chatbot answers questions, while an AI agent can actually help. One deflects, the other engages.
            </NoteBox>

            <h2 style={h2Style}>But capability raises the stakes</h2>
            <p style={bodyText}>
              Here is the part that matters most in healthcare. Because an AI agent is more capable and can handle real patient conversations, it will inevitably come into contact with protected health information. That makes how it handles data far more important than it is for a simple FAQ bot.
            </p>
            <p style={bodyText}>
              A healthcare AI agent needs to run inside HIPAA-compliant infrastructure: a Business Associate Agreement, encryption, audit trails, access controls, and a guarantee that patient data is never used to train AI models. And it should escalate anything requiring clinical judgment to your team, so the AI supports your staff without ever making a medical decision.
            </p>
            <p style={bodyText}>
              <Link href="/blog/what-is-a-hipaa-compliant-ai-agent" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Learn what makes an AI agent HIPAA-compliant
              </Link>
            </p>

            <h2 style={h2Style}>Which one does your clinic need?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {/* Chatbot may be enough */}
              <div
                className="rounded-xl p-5"
                style={{ background: 'rgba(0,0,0,0.025)', border: '1px solid rgba(0,0,0,0.07)' }}
              >
                <p style={{ fontSize: 14, fontWeight: 600, color: '#68655E', fontFamily: I, marginBottom: 14, letterSpacing: '0.2px', textTransform: 'uppercase' }}>
                  A basic chatbot may be enough if:
                </p>
                <ul style={{ padding: 0, margin: 0 }}>
                  <CheckItem>You only need to answer a few fixed, common questions</CheckItem>
                  <CheckItem>You are automating a simple task like pointing people to a form</CheckItem>
                  <CheckItem>No patient health information is involved</CheckItem>
                </ul>
              </div>

              {/* AI agent is the better fit */}
              <div
                className="rounded-xl p-5"
                style={{ background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.15)' }}
              >
                <p style={{ fontSize: 14, fontWeight: 600, color: '#2563EB', fontFamily: I, marginBottom: 14, letterSpacing: '0.2px', textTransform: 'uppercase' }}>
                  An AI agent is the better fit if:
                </p>
                <ul style={{ padding: 0, margin: 0 }}>
                  {[
                    'You want real, natural conversations with patients',
                    "You need it grounded in your clinic's specific protocols and voice",
                    'It will handle patient information, so compliance matters',
                    'You want it to help with tasks and escalate clinical questions to your team',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3" style={{ marginBottom: 12, fontSize: 16, color: '#1a1a1a', fontFamily: I, lineHeight: 1.65, listStyle: 'none' }}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 3 }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p style={bodyText}>
              For most clinics that want to genuinely support patients rather than just deflect questions, an AI agent is the right tool.
            </p>

            <h2 style={h2Style}>The bottom line</h2>
            <p style={bodyText}>
              A chatbot answers. An AI agent understands, helps, and knows its limits. For healthcare, where conversations are personal and patient data is sensitive, that difference is significant. The right AI agent gives your clinic a tool that can hold a real conversation with patients, stay grounded in your protocols, protect patient data, and escalate anything clinical to your team.
            </p>

            <p style={bodyText}>
              <Link href="/features/ai-agents" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See how A2V2&apos;s AI agents work
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
              See what an AI agent can do for your clinic
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
              Book a demo and we will show you how A2V2&apos;s AI agents handle patient conversations, HIPAA-compliant.
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
