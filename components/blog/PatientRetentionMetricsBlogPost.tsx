'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Calendar, Search, Target, Clock,
  type LucideIcon,
} from 'lucide-react'
import TestHomepage2Navbar from '@/components/TestHomepage2Navbar'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import { getRelatedPosts } from '@/lib/blog-posts'
import { DEMO_BOOKING_URL, SIGN_IN_URL } from '@/lib/constants'

const H = "'Helvetica Neue', Helvetica, Arial, sans-serif"
const I = "'Inter', sans-serif"

const CURRENT_HREF = '/blog/patient-retention-metrics-to-track'
const ARTICLE_URL = 'https://www.a2v2.ai/blog/patient-retention-metrics-to-track'
const ARTICLE_TITLE = 'The patient retention metrics worth actually tracking'

const relatedPosts = getRelatedPosts(CURRENT_HREF, 3)

const faqItems = [
  {
    q: 'What is the most important patient retention metric?',
    a: 'Second visit rate, meaning how many first-time patients return. It captures the most fragile point in the relationship and changes before revenue does.',
  },
  {
    q: 'How often should a clinic review retention metrics?',
    a: 'Monthly is enough for most practices. Consistency matters more than frequency, and retention changes take at least a full protocol cycle to appear.',
  },
  {
    q: 'Why is revenue a poor measure of retention?',
    a: 'New patients can mask departing ones. Revenue often looks stable while retention is declining, and by the time it dips the drop-off happened months earlier.',
  },
  {
    q: 'What counts as a lapsed patient?',
    a: 'It depends on your protocol lengths. Define a window that reflects how often an engaged patient would normally be seen or heard from, and treat silence past it as a signal.',
  },
  {
    q: 'Does A2V2 track patient data over time?',
    a: "A2V2's patient CRM tracks configurable health parameters with trends and insights over time, and its automations can flag patients based on where they are in their protocol.",
  },
]

const howToUseItems: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Calendar,
    title: 'Pick a cadence and keep it',
    desc: 'Monthly is enough for most clinics. Consistency matters more than frequency.',
  },
  {
    Icon: Search,
    title: 'Look for the cluster, not the average',
    desc: 'The useful insight is usually where drop-off concentrates, not the overall rate.',
  },
  {
    Icon: Target,
    title: 'Change one thing at a time',
    desc: 'If you add a week-three check-in and a refill reminder together, you will not know which worked.',
  },
  {
    Icon: Clock,
    title: 'Give it a full protocol cycle',
    desc: 'Retention changes take as long as your protocol does to show up in the numbers.',
  },
]

const protocolItems = [
  'Define the endpoint of each protocol you run',
  'Track how many starters reach it',
  'Note where in the timeline the drop-offs cluster',
]

const skipItems = [
  'Vanity totals that only go up, like all-time patient count',
  'Anything you have no ability to act on',
  'Metrics that take longer to gather than they take to act on',
  'Overly precise scores that obscure what is actually happening',
]

const comparisonRows = [
  { left: 'Monthly revenue', right: 'Second visit rate' },
  { left: 'Appointments booked', right: 'Protocol completion rate' },
  { left: 'New patient count', right: 'Time to first lapse' },
  { left: 'No-show rate', right: 'Refill timeliness' },
  { left: 'Total active patients', right: 'Quiet patient count' },
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
              What most clinics track
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
              What actually tells you about retention
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
                  color: '#68655E',
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
                  color: '#1a1a1a',
                  fontWeight: 500,
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
export default function PatientRetentionMetricsBlogPost() {
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
              The patient retention metrics worth actually tracking
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
              Most clinics track revenue and appointments. Neither tells you whether patients are staying. Here are the numbers that do.
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
              src="/images/patient-retention-metrics-to-track.png"
              alt="The patient retention metrics worth actually tracking"
              width={720}
              height={405}
              className="w-full aspect-[16/9] object-cover"
              quality={100}
              unoptimized
              priority
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/why-patients-drop-off-between-visits.png'
              }}
            />
          </div>

          {/* Body */}
          <article>
            <p style={bodyText}>
              Ask most clinic owners how retention is going and you get a feeling, not a number. That is not carelessness. It is that the numbers most practices track, revenue and appointment volume, do not actually answer the question.
            </p>
            <p style={bodyText}>
              Revenue can look fine while retention quietly collapses, because new patients mask the ones leaving. By the time the revenue dips, the drop-off happened months ago.
            </p>
            <p style={bodyText}>
              Here is what to track instead. None of it requires an analytics team.
            </p>

            <h2 style={h2Style}>Second visit rate</h2>
            <p style={bodyText}>
              Of the patients who start with you, how many come back a second time?
            </p>
            <p style={bodyText}>
              This is the single most useful retention number for a specialty clinic, because it captures the most fragile moment in the whole relationship. A patient who returns once has decided you were worth it. A patient who does not was lost in the first month.
            </p>
            <NoteBox>
              If you only track one thing, track this. It tells you whether your onboarding and first-month follow-up are working, and it moves before revenue does.
            </NoteBox>

            <h2 style={h2Style}>Protocol completion rate</h2>
            <p style={bodyText}>
              Of the patients who start a protocol, how many finish it?
            </p>
            <p style={bodyText}>
              This is where specialty clinics differ from appointment-based practices. Your protocols have a length. Measuring how many patients make it to the end tells you whether people are actually getting the outcome they came for, which is both a clinical question and a retention one.
            </p>
            <BulletList items={protocolItems} />

            <h2 style={h2Style}>Time to first lapse</h2>
            <p style={bodyText}>
              When patients fall off, when does it happen?
            </p>
            <p style={bodyText}>
              Averages hide this. If most of your drop-off happens in week three, that is a very different problem from drop-off at month four, and it calls for a different fix. Finding the cluster tells you exactly where to put a touchpoint.
            </p>

            <h2 style={h2Style}>Refill or reorder timeliness</h2>
            <p style={bodyText}>
              Are patients refilling on schedule, or late, or not at all?
            </p>
            <p style={bodyText}>
              A late refill is one of the earliest visible signals that a patient is drifting, and it shows up well before a missed appointment does. Tracking it turns retention from a lagging measure into an early warning.
            </p>

            <h2 style={h2Style}>Quiet patient count</h2>
            <p style={bodyText}>
              How many active patients have you not seen or heard from in a defined window?
            </p>
            <p style={bodyText}>
              Most clinics have no number for this, which is why lapsed patients go unnoticed for months. Define what "quiet" means for your protocol lengths and count it regularly.
            </p>
            <p style={bodyText}>
              <Link href="/blog/re-engaging-patients-who-went-quiet" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                How to re-engage patients who have gone quiet
              </Link>
            </p>

            <h2 style={h2Style}>A simple comparison</h2>
            <ComparisonTable />

            <h2 style={h2Style}>How to actually use them</h2>
            <p style={bodyText}>
              Numbers you look at once are trivia. Numbers you act on are useful.
            </p>
            <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              {howToUseItems.map((s, i) => (
                <StepPoint key={i} Icon={s.Icon} title={s.title} desc={s.desc} />
              ))}
            </div>
            <NoteBox>
              The point of these metrics is not reporting. It is to find the specific moment patients leave, so you can put something there.
            </NoteBox>

            <h2 style={h2Style}>What you can skip</h2>
            <p style={bodyText}>
              Not every metric earns its tracking time.
            </p>
            <BulletList items={skipItems} />

            <h2 style={h2Style}>The bottom line</h2>
            <p style={bodyText}>
              Retention is measurable without a data team. Second visit rate, protocol completion, when patients lapse, refill timeliness, and how many have gone quiet will tell you more than a revenue chart ever will. Track a few consistently, look for where drop-off clusters, and put a touchpoint there.
            </p>

            <p style={bodyText}>
              <Link href="/features/patient-crm" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                How the patient CRM tracks patients over time
              </Link>
              {' '}&middot;{' '}
              <Link href="/blog/why-patients-drop-off-between-visits" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Why patients drop off between visits
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
              See what is happening between visits
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
              Book a demo and see how A2V2 tracks patients across their whole protocol.
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
