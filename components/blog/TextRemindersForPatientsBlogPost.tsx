'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Clock, MessageSquare, Volume2, UserCheck, HelpCircle,
  type LucideIcon,
} from 'lucide-react'
import TestHomepage2Navbar from '@/components/TestHomepage2Navbar'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import { getRelatedPosts } from '@/lib/blog-posts'
import { DEMO_BOOKING_URL, SIGN_IN_URL } from '@/lib/constants'

const H = "'Helvetica Neue', Helvetica, Arial, sans-serif"
const I = "'Inter', sans-serif"

const CURRENT_HREF = '/blog/text-reminders-for-patients'
const ARTICLE_URL = 'https://www.a2v2.ai/blog/text-reminders-for-patients'
const ARTICLE_TITLE = 'Why text reminders work better than email for patients'

const relatedPosts = getRelatedPosts(CURRENT_HREF, 3)

const faqItems = [
  {
    q: 'Are text reminders better than email for patients?',
    a: 'For short, time-sensitive messages like appointment reminders and refill nudges, texts are generally more effective because they are seen quickly and do not compete with a crowded inbox. Email is still better for long instructions, documents, and anything that needs careful reading.',
  },
  {
    q: 'Is texting patients HIPAA-compliant?',
    a: 'It can be, when it runs inside compliant infrastructure with a Business Associate Agreement, encryption, and audit trails. Keeping message content minimal is also good practice.',
  },
  {
    q: 'Do I need patient consent to send text reminders?',
    a: 'Generally yes. Automated messaging to patients typically requires their permission, so capturing consent during intake is the practical approach. Confirm the specifics with your own compliance advisor.',
  },
  {
    q: 'How many texts are too many?',
    a: 'There is no fixed number, but every extra message makes the next one easier to ignore. Reserve texts for short, time-sensitive things and leave longer communication to email.',
  },
  {
    q: 'Can text reminders be automated?',
    a: 'Yes. A2V2 sends SMS reminders automatically based on your protocols, so they go out at the right time without your team having to remember.',
  },
]

const worthTexting = [
  'Appointment reminders, sent close enough to matter',
  'Protocol check-ins at the moments that count',
  'Refill nudges before a patient runs out',
  'A quick prompt when something needs their attention',
]

const leaveForEmail = [
  'Long intake instructions and paperwork',
  'Detailed protocol documents',
  'Anything that needs attachments or careful reading',
  'General newsletters and marketing',
]

const steps: { Icon: LucideIcon; title: string; desc: string }[] = [
  { Icon: Clock,          title: 'Time it well',                   desc: 'A reminder is only useful if it arrives when the patient can still act on it. Too early and it is forgotten, too late and it is useless.' },
  { Icon: MessageSquare,  title: 'Keep it short',                  desc: 'One idea per message. If it needs three paragraphs, it is an email, not a text.' },
  { Icon: Volume2,        title: 'Do not overdo it',               desc: 'Every extra message makes the next one easier to ignore. Send fewer, better-timed texts.' },
  { Icon: UserCheck,      title: 'Make it feel like your clinic',  desc: 'A text from a real practice reads differently than a generic automated blast. Use your clinic\'s voice.' },
  { Icon: HelpCircle,     title: 'Give them a way to respond',     desc: 'A patient who has a question should know how to reach a human, not hit a dead end.' },
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

/* ── Check list (what to text) ── */
function CheckList({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: '1.5rem' }}>
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3"
          style={{ marginBottom: 14, fontSize: 16, color: '#1a1a1a', fontFamily: I, lineHeight: 1.65 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
            <circle cx="8" cy="8" r="7.5" stroke="rgba(0,0,0,0.15)" />
            <polyline points="4.5,8 7,10.5 11.5,5.5" stroke="#0F0E0D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/* ── X list (what not to text) ── */
function XList({ items }: { items: string[] }) {
  return (
    <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: '1.5rem' }}>
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-start gap-3"
          style={{ marginBottom: 14, fontSize: 16, color: '#68655E', fontFamily: I, lineHeight: 1.65 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
            <circle cx="8" cy="8" r="7.5" stroke="rgba(0,0,0,0.10)" />
            <line x1="5.5" y1="5.5" x2="10.5" y2="10.5" stroke="rgba(0,0,0,0.30)" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="10.5" y1="5.5" x2="5.5" y2="10.5" stroke="rgba(0,0,0,0.30)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>{item}</span>
        </li>
      ))}
    </ul>
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

const listLabel: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
  color: '#68655E',
  fontFamily: I,
  letterSpacing: '0.3px',
  textTransform: 'uppercase',
  marginBottom: 14,
  display: 'block',
}

/* ── Main component ── */
export default function TextRemindersForPatientsBlogPost() {
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
              Why text reminders work better than email for patients
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
              Your reminder is only useful if the patient actually sees it. Here is why texts outperform email for clinic communication, and how to use them without being annoying.
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
                By The A2V2 Team &middot; 5 min read
              </span>
            </div>

            <ShareBar url={ARTICLE_URL} title={ARTICLE_TITLE} />
          </header>

          {/* Hero image */}
          <div className="w-full mb-12">
            <Image
              src="/images/text-reminders-for-patients.png"
              alt="Why text reminders work better than email for patients"
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
              A reminder that never gets read is not a reminder. It is just work your team did for nothing.
            </p>
            <p style={bodyText}>
              That is the quiet problem with email-only patient communication. Your front desk sends the reminder, the system logs it as sent, and the patient never sees it because it landed under a pile of promotions. Then they miss the appointment, and everyone assumes they just did not care.
            </p>
            <p style={bodyText}>
              Text messages solve most of this, and clinics that switch usually notice the difference fast.
            </p>

            <h2 style={h2Style}>Why texts get through when email does not</h2>
            <p style={bodyText}>
              Email has to compete. A patient&apos;s inbox is full of newsletters, receipts, and marketing, and your reminder looks like one more thing to scroll past. Filters and promotions tabs make it worse.
            </p>
            <p style={bodyText}>
              A text does not compete in the same way. It arrives on the lock screen, it is short, and it does not need to be opened and scrolled to be understood. Even a patient who does not reply has almost certainly read it.
            </p>
            <NoteBox>
              The goal is not to abandon email. It is to use the right channel for the right message. Long documents and detailed instructions belong in email. Time-sensitive nudges belong in a text.
            </NoteBox>

            <h2 style={h2Style}>What is worth texting</h2>
            <p style={bodyText}>
              Not every message deserves a text. Overuse is exactly how patients start ignoring you, or opting out entirely. Keep texts for things that are short and time-sensitive.
            </p>
            <span style={listLabel}>Send as a text</span>
            <CheckList items={worthTexting} />

            <p style={bodyText}>
              And what to leave in email:
            </p>
            <span style={listLabel}>Leave in email</span>
            <XList items={leaveForEmail} />

            <h2 style={h2Style}>How to text patients without annoying them</h2>
            <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              {steps.map((s, i) => (
                <StepPoint key={i} Icon={s.Icon} title={s.title} desc={s.desc} />
              ))}
            </div>

            <h2 style={h2Style}>The compliance side</h2>
            <p style={bodyText}>
              Texting patients means handling protected health information, and that changes the requirements. Two things matter.
            </p>
            <p style={bodyText}>
              First, HIPAA. Patient messaging needs to run inside compliant infrastructure with a Business Associate Agreement, encryption, and audit trails, just like any other system that touches patient data.
            </p>
            <p style={bodyText}>
              Second, consent. Automated messaging to patients generally requires their permission, so capturing consent as part of intake matters. This is worth confirming with your own compliance advisor for your situation.
            </p>
            <NoteBox>
              A good rule: if you would not put it on a postcard, be careful how much detail goes in a text. Keep messages minimal and let patients log in for specifics.
            </NoteBox>
            <p style={bodyText}>
              <Link href="/blog/what-is-a-hipaa-compliant-ai-agent" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Learn what makes patient communication HIPAA-compliant
              </Link>
            </p>

            <h2 style={h2Style}>Where automation helps</h2>
            <p style={bodyText}>
              The reason most clinics under-communicate is not that they do not care. It is that manually texting every patient at the right moment is impossible when your front desk is already stretched.
            </p>
            <p style={bodyText}>
              That is what automation is for. Reminders tied to each patient&apos;s protocol go out on their own, at the right time, without anyone remembering to send them. Your team only gets involved when a patient actually needs them.
            </p>

            <h2 style={h2Style}>The bottom line</h2>
            <p style={bodyText}>
              Patients are not ignoring your reminders on purpose. They are just not seeing them. Moving time-sensitive messages to text, keeping them short, timing them well, and automating the routine ones is one of the simplest ways to keep patients on schedule without adding work for your team.
            </p>

            <p style={bodyText}>
              <Link href="/features/patient-messaging" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See how A2V2 handles patient messaging
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

            <p style={{ fontSize: 13, lineHeight: 1.65, color: '#68655E', fontFamily: I, marginTop: '2rem' }}>
              This article is educational and not legal advice. For specific compliance or consent questions, consult a qualified professional.
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
              Reach patients where they actually read
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
              Book a demo and see how A2V2 automates patient reminders for your clinic.
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
