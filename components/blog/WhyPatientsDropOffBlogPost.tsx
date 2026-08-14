'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  HelpCircle, CalendarX, TrendingDown, Clock, Ghost,
  MessageSquare, Repeat, TrendingUp, AlertCircle,
  type LucideIcon,
} from 'lucide-react'
import TestHomepage2Navbar from '@/components/TestHomepage2Navbar'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import { getRelatedPosts } from '@/lib/blog-posts'
import { DEMO_BOOKING_URL, SIGN_IN_URL } from '@/lib/constants'

const H = "'Helvetica Neue', Helvetica, Arial, sans-serif"
const I = "'Inter', sans-serif"

const CURRENT_HREF = '/blog/why-patients-drop-off-between-visits'
const ARTICLE_URL = 'https://www.a2v2.ai/blog/why-patients-drop-off-between-visits'
const ARTICLE_TITLE = 'Why patients drop off between visits, and what to do about it'

const relatedPosts = getRelatedPosts(CURRENT_HREF, 3)

const faqItems = [
  {
    q: 'Why do patients stop following their treatment plan?',
    a: 'Usually not because of a single decision. Drop-off tends to come from small gaps between visits, an unanswered question, a lapsed refill, or progress that stops feeling visible. Research on long-term treatments has found roughly half of patients stop within the first year.',
  },
  {
    q: 'When are patients most likely to drop off?',
    a: 'Adherence tends to decline noticeably around the six month mark, though the earliest weeks of a protocol also matter because that is when questions and side effects come up and confidence is still forming.',
  },
  {
    q: 'How can a clinic improve patient retention?',
    a: 'Focus on consistency between visits. Put a touchpoint at the moments patients typically fall off, remind them about refills before they lapse, show them their progress over time, and answer small questions quickly.',
  },
  {
    q: 'Does automating follow-up make care feel impersonal?',
    a: 'It does not have to. Automation handles the timing and the routine touchpoints so they actually happen. Anything requiring clinical judgment should still go to your team, so the human part of care stays human.',
  },
  {
    q: 'How does A2V2 help with patient drop-off?',
    a: 'A2V2 automates the routine touchpoints across the patient lifecycle, including check-ins, refill reminders, and answering common questions, while escalating anything clinical to your team.',
  },
]

const dropOffMoments: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: HelpCircle,
    title: 'A question goes unanswered',
    desc: 'A patient notices a side effect in week two and is not sure if it is normal. They wait, they wonder, and their confidence quietly erodes.',
  },
  {
    Icon: CalendarX,
    title: 'A refill lapses',
    desc: 'They run out on a Thursday, mean to call, and do not. Two weeks off protocol becomes a month.',
  },
  {
    Icon: TrendingDown,
    title: 'Early results plateau',
    desc: 'The first month felt exciting. Month four feels like nothing is happening, because nobody is showing them what changed.',
  },
  {
    Icon: Clock,
    title: 'The next visit is far away',
    desc: 'There is no touchpoint between now and then, so there is nothing to re-engage them.',
  },
  {
    Icon: Ghost,
    title: 'They just go quiet',
    desc: 'No cancellation, no complaint. They simply stop scheduling, and the clinic often does not notice for months.',
  },
]

const engagementPoints: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: MessageSquare,
    title: 'Reach them when it matters',
    desc: 'A check-in at week two of a protocol is worth more than five at random. Timing beats volume.',
  },
  {
    Icon: Repeat,
    title: 'Make refills automatic to remember',
    desc: 'A nudge before a patient runs out prevents the gap that turns into a lapse.',
  },
  {
    Icon: TrendingUp,
    title: 'Show them their progress',
    desc: 'Patients stay when they can see something is working. Tracking changes over time turns an invisible protocol into visible progress.',
  },
  {
    Icon: HelpCircle,
    title: 'Answer the small questions fast',
    desc: 'Most between-visit questions are routine. Answering them quickly keeps a small worry from becoming a reason to quit.',
  },
  {
    Icon: AlertCircle,
    title: 'Catch the quiet ones early',
    desc: 'A patient who has gone silent needs a prompt before they are gone, not a call six months later.',
  },
]

const missReasons = [
  'Follow-up depends on someone remembering, not on a system',
  'The quietest patients get the least attention',
  'By the time the gap is noticed, the patient is already gone',
  'Nobody has time to check in with everyone who might be drifting',
]

const startingChecklist = [
  'Identify the two or three moments in your protocols where patients most often fall off',
  'Put a consistent touchpoint at each of those moments',
  'Make refills something the patient is reminded about, not something they must remember',
  'Give patients an easy way to ask a small question without booking a visit',
  'Flag patients who have gone quiet before their next appointment, not after',
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

/* ── Step point (icon + bold title + description) ── */
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

/* ── Simple bullet list ── */
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
export default function WhyPatientsDropOffBlogPost() {
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
              Why patients drop off between visits, and what to do about it
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
              Most patients who quit a protocol do not decide to quit. They drift. Here is why it happens in the weeks between appointments, and how clinics close that gap.
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
              src="/images/why-patients-drop-off-between-visits.png"
              alt="Why patients drop off between visits, and what to do about it"
              width={720}
              height={405}
              className="w-full aspect-[16/9] object-cover"
              quality={100}
              unoptimized
              priority
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/text-reminders-for-patients.png'
              }}
            />
          </div>

          {/* Body */}
          <article>
            <p style={bodyText}>
              Ask a clinic owner why a patient stopped coming and you will usually get a guess. They lost interest. It was too expensive. They moved. Sometimes that is true. More often, nothing dramatic happened at all. The patient simply drifted.
            </p>
            <p style={bodyText}>
              Research on treatment adherence has found that roughly half of patients on long-term treatments stop within the first year, and adherence tends to fall off noticeably around the six month mark. That is not a story about patients who stopped caring. It is a story about what happens in the weeks when nobody is talking to them.
            </p>

            <NoteBox>
              The care inside the exam room is rarely the problem. The problem is the ninety-something percent of the patient journey that happens outside of it.
            </NoteBox>

            <h2 style={h2Style}>What drop-off actually looks like</h2>
            <p style={bodyText}>
              Drop-off is rarely a decision. It is a sequence of small moments that nobody catches.
            </p>
            <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              {dropOffMoments.map((s, i) => (
                <StepPoint key={i} Icon={s.Icon} title={s.title} desc={s.desc} />
              ))}
            </div>

            <h2 style={h2Style}>Why clinics miss it</h2>
            <p style={bodyText}>
              None of this is a failure of care. It is a failure of bandwidth.
            </p>
            <p style={bodyText}>
              Following up with every patient at the exact moment they need it would take a dedicated person per handful of patients. Most clinics do not have that, so follow-up becomes whatever the front desk can squeeze in between everything else. The patients who need it most are frequently the quietest ones, which means they are the easiest to overlook.
            </p>
            <BulletList items={missReasons} />

            <h2 style={h2Style}>What actually keeps patients engaged</h2>
            <p style={bodyText}>
              The fix is not more effort from your team. It is consistency that does not depend on effort.
            </p>
            <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              {engagementPoints.map((s, i) => (
                <StepPoint key={i} Icon={s.Icon} title={s.title} desc={s.desc} />
              ))}
            </div>

            <h2 style={h2Style}>Where automation fits</h2>
            <p style={bodyText}>
              This is where automation earns its place. Not to replace the relationship, but to make it consistent.
            </p>
            <p style={bodyText}>
              An AI agent can handle the routine touchpoints, the protocol check-ins, the refill reminders, the common questions, at the right moment for each patient, without your team having to track it manually. And when something needs clinical judgment, it goes to your team. The AI covers the consistency; your providers cover the care.
            </p>
            <NoteBox>
              The goal is not to automate the relationship. It is to make sure the relationship does not depend on someone remembering.
            </NoteBox>
            <p style={bodyText}>
              <Link href="/blog/how-ai-reduces-admin-work-clinic" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See how AI reduces admin work in a clinic
              </Link>
            </p>

            <h2 style={h2Style}>A simple starting point</h2>
            <p style={bodyText}>
              If you want to reduce drop-off without overhauling anything, start here:
            </p>
            <CheckList items={startingChecklist} />

            <h2 style={h2Style}>The bottom line</h2>
            <p style={bodyText}>
              Patients rarely quit because the treatment failed. They quit because the space between visits was empty, and in that space a question went unanswered, a refill lapsed, or progress stopped feeling real. Clinics that close that gap keep more patients on protocol, and it has far less to do with working harder than with being consistent.
            </p>

            <p style={bodyText}>
              <Link href="/features/patient-crm" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See how A2V2 automates the patient lifecycle
              </Link>
              {' '}&middot;{' '}
              <Link href="/features/patient-messaging" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                How patient messaging works
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
              Close the gap between visits
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
              Book a demo and see how A2V2 keeps patients engaged without adding work for your team.
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
