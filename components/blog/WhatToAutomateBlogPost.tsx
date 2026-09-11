'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Repeat, Stethoscope, Heart, AlertTriangle, MessageSquareOff, Layers, EyeOff,
  type LucideIcon,
} from 'lucide-react'
import TestHomepage2Navbar from '@/components/TestHomepage2Navbar'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import { getRelatedPosts } from '@/lib/blog-posts'
import { DEMO_BOOKING_URL, SIGN_IN_URL } from '@/lib/constants'

const H = "'Helvetica Neue', Helvetica, Arial, sans-serif"
const I = "'Inter', sans-serif"

const CURRENT_HREF = '/blog/what-to-automate-what-to-keep-human'
const ARTICLE_URL = 'https://www.a2v2.ai/blog/what-to-automate-what-to-keep-human'
const ARTICLE_TITLE = 'What to automate in your clinic, and what to keep human'

const relatedPosts = getRelatedPosts(CURRENT_HREF, 3)

const faqItems = [
  {
    q: 'What should a clinic automate first?',
    a: 'The most repetitive, least sensitive task you have, usually appointment reminders, refill nudges, or intake data entry. Get one working well before expanding.',
  },
  {
    q: 'What should never be automated in a clinic?',
    a: 'Anything requiring clinical judgment, such as symptoms, dosing, or protocol changes, and anything emotionally sensitive, like difficult results or an upset patient.',
  },
  {
    q: 'How do I know if a task is safe to automate?',
    a: 'Ask whether it happens the same way every time, whether it requires clinical judgment, and whether a patient would want a human in that moment. It needs to pass all three.',
  },
  {
    q: 'Does automation make patient care feel impersonal?',
    a: 'Only when it is applied to the wrong moments or when reaching a person is difficult. Automating logistics while keeping care human usually improves the experience, because patients hear from you more consistently.',
  },
  {
    q: 'How does A2V2 decide what to escalate?',
    a: 'A2V2 agents handle routine communication and route anything requiring clinical judgment to your team, with escalation rules you configure for your clinic.',
  },
]

const testQuestions: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Repeat,
    title: 'Does it happen the same way every time?',
    desc: 'Predictable, repetitive tasks automate well. Anything that depends on reading a situation does not.',
  },
  {
    Icon: Stethoscope,
    title: 'Does it require clinical judgment?',
    desc: "If the answer could change based on a patient's history, symptoms, or risk, it belongs to a person. No exceptions.",
  },
  {
    Icon: Heart,
    title: 'Would a patient want a human here?',
    desc: 'If someone is worried, confused, or upset, an automated reply lands badly no matter how well written it is.',
  },
]

const mistakePoints: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: AlertTriangle,
    title: 'Automating the emotional moments',
    desc: 'Results, setbacks, and anything a patient is anxious about need a person, even when the content is routine.',
  },
  {
    Icon: MessageSquareOff,
    title: 'Hiding the human',
    desc: 'If reaching a person takes five steps, patients stop trying and start leaving.',
  },
  {
    Icon: Layers,
    title: 'Automating everything at once',
    desc: 'Rolling out too much too fast means nobody notices when one piece is going wrong.',
  },
  {
    Icon: EyeOff,
    title: 'Not watching what it sends',
    desc: 'Automated messages still represent your clinic. Someone should be reading what goes out, at least early on.',
  },
]

const handoffItems = [
  'The handoff should be fast, not a queue the patient waits in',
  'The patient should not have to repeat what they already said',
  'Your team should get context, not just an alert',
  'The patient should always be able to ask for a person directly',
]

const startNarrowItems = [
  'Pick the most repetitive, least sensitive task you have',
  'Get it working properly before adding anything else',
  'Watch what it sends for the first few weeks',
  'Expand only into things that pass the three questions above',
]

const comparisonRows = [
  { left: 'Appointment reminders', right: 'Discussing a concerning symptom' },
  { left: 'Refill nudges before a lapse', right: 'Changing a dose or protocol' },
  { left: 'Intake forms and data entry', right: 'Delivering difficult results' },
  { left: 'Routine questions with fixed answers', right: 'A patient who is upset or frustrated' },
  { left: 'Scheduling and rescheduling logistics', right: 'Anything ambiguous or unfamiliar' },
  { left: 'Flagging patients who have gone quiet', right: 'The conversation with that patient' },
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

/* ── Step point ── */
function StepPoint({ Icon, title, desc }: { Icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="flex gap-4 items-start" style={{ marginBottom: 28 }}>
      <div style={{
        width: 36, height: 36, borderRadius: 8,
        background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.07)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <Icon size={15} color="#0F0E0D" />
      </div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 600, color: '#0F0E0D', fontFamily: I, marginBottom: 4, lineHeight: 1.3 }}>
          {title}
        </div>
        <div style={{ fontSize: 16, color: '#1a1a1a', fontFamily: I, lineHeight: 1.65 }}>
          {desc}
        </div>
      </div>
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
          style={{ marginBottom: 12, fontSize: 16, color: '#1a1a1a', fontFamily: I, lineHeight: 1.65 }}
        >
          <span style={{ marginTop: 9, width: 5, height: 5, borderRadius: '50%', background: '#1a1a1a', flexShrink: 0, display: 'inline-block' }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* ── Comparison table ── */
function ComparisonTable() {
  return (
    <div className="w-full overflow-x-auto mb-8" style={{ marginTop: '1.5rem' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: I }}>
        <thead>
          <tr style={{ background: 'rgba(0,0,0,0.03)' }}>
            <th
              style={{
                padding: '12px 16px',
                textAlign: 'left',
                fontSize: 13,
                fontWeight: 600,
                color: '#0F0E0D',
                border: '1px solid rgba(0,0,0,0.08)',
                letterSpacing: '0.1px',
              }}
            >
              Good to automate
            </th>
            <th
              style={{
                padding: '12px 16px',
                textAlign: 'left',
                fontSize: 13,
                fontWeight: 600,
                color: '#0F0E0D',
                border: '1px solid rgba(0,0,0,0.08)',
                letterSpacing: '0.1px',
              }}
            >
              Keep human
            </th>
          </tr>
        </thead>
        <tbody>
          {comparisonRows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? '#FFFFFF' : 'rgba(0,0,0,0.015)' }}>
              <td
                style={{
                  padding: '12px 16px',
                  fontSize: 14,
                  color: '#1a1a1a',
                  fontWeight: 500,
                  border: '1px solid rgba(0,0,0,0.08)',
                  lineHeight: 1.5,
                }}
              >
                {row.left}
              </td>
              <td
                style={{
                  padding: '12px 16px',
                  fontSize: 14,
                  color: '#68655E',
                  border: '1px solid rgba(0,0,0,0.08)',
                  lineHeight: 1.5,
                }}
              >
                {row.right}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
export default function WhatToAutomateBlogPost() {
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
              What to automate in your clinic, and what to keep human
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
              Automating the wrong thing damages trust faster than automating nothing at all. Here is a simple way to draw the line.
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
                By The A2V2 Team &middot; 6 min read
              </span>
            </div>

            <ShareBar url={ARTICLE_URL} title={ARTICLE_TITLE} />
          </header>

          {/* Hero image */}
          <div className="w-full mb-12">
            <Image
              src="/images/what-to-automate-what-to-keep-human.png"
              alt="What to automate in your clinic, and what to keep human"
              width={720}
              height={405}
              className="w-full aspect-[16/9] object-cover"
              quality={100}
              unoptimized
              priority
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/making-ai-sound-like-your-clinic.png'
              }}
            />
          </div>

          {/* Body */}
          <article>
            <p style={bodyText}>
              Most advice about automation in healthcare is a pitch. Automate everything, save hours, grow faster. The trouble is that automating the wrong moment costs more trust than automating ten right ones earns.
            </p>
            <p style={bodyText}>
              A patient who gets an automated reminder about their appointment thinks nothing of it. A patient who gets an automated response to a worried message about a symptom remembers it for a long time.
            </p>
            <p style={bodyText}>
              So the useful question is not how much to automate. It is where the line sits.
            </p>

            <h2 style={h2Style}>A simple test</h2>
            <p style={bodyText}>
              Before automating anything, ask three questions about it.
            </p>
            <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              {testQuestions.map((s, i) => (
                <StepPoint key={i} Icon={s.Icon} title={s.title} desc={s.desc} />
              ))}
            </div>
            <NoteBox>
              If a task is repetitive, carries no clinical judgment, and would not feel cold to receive, it is a good candidate. If any one of those fails, keep it human.
            </NoteBox>

            <h2 style={h2Style}>Where the line usually falls</h2>
            <ComparisonTable />
            <p style={bodyText}>
              The pattern is straightforward. Automate the logistics around care. Keep the care itself.
            </p>

            <h2 style={h2Style}>The handoff matters more than the split</h2>
            <p style={bodyText}>
              Drawing the line is the easy part. What separates a clinic that uses automation well is what happens at the boundary.
            </p>
            <BulletList items={handoffItems} />
            <p style={bodyText}>
              A bad handoff turns good automation into a worse experience than no automation at all.
            </p>
            <p style={bodyText}>
              <Link href="/blog/questions-to-ask-before-adopting-ai" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See what to ask a vendor about escalation
              </Link>
            </p>

            <h2 style={h2Style}>Common mistakes</h2>
            <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              {mistakePoints.map((s, i) => (
                <StepPoint key={i} Icon={s.Icon} title={s.title} desc={s.desc} />
              ))}
            </div>

            <h2 style={h2Style}>Start narrow</h2>
            <p style={bodyText}>
              The clinics that get this right almost always start with one obvious thing, usually reminders or intake, and expand once it is working.
            </p>
            <BulletList items={startNarrowItems} />

            <h2 style={h2Style}>The bottom line</h2>
            <p style={bodyText}>
              Automation belongs around care, not inside it. Reminders, forms, scheduling, and routine questions are safe and genuinely helpful. Symptoms, judgment calls, difficult news, and upset patients are not. Get the split right, make the handoff to a human fast and easy, and automation strengthens the relationship instead of thinning it.
            </p>

            <p style={bodyText}>
              <Link href="/features/ai-agents" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                How our AI agents escalate to your team
              </Link>
              {' '}&middot;{' '}
              <Link href="/blog/how-ai-reduces-admin-work-clinic" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                How AI reduces admin work
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
              Automate the busywork, keep the care
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
              Book a demo and see how A2V2 keeps your team in control of every clinical decision.
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
