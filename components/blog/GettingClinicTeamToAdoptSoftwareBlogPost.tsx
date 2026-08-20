'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Clock, HelpCircle, AlertTriangle, Users,
  Zap, Repeat, UserCheck, FileText,
  type LucideIcon,
} from 'lucide-react'
import TestHomepage2Navbar from '@/components/TestHomepage2Navbar'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import { getRelatedPosts } from '@/lib/blog-posts'
import { DEMO_BOOKING_URL, SIGN_IN_URL } from '@/lib/constants'

const H = "'Helvetica Neue', Helvetica, Arial, sans-serif"
const I = "'Inter', sans-serif"

const CURRENT_HREF = '/blog/getting-your-clinic-team-to-adopt-new-software'
const ARTICLE_URL = 'https://www.a2v2.ai/blog/getting-your-clinic-team-to-adopt-new-software'
const ARTICLE_TITLE = 'How to get your clinic team to actually use new software'

const relatedPosts = getRelatedPosts(CURRENT_HREF, 3)

const faqItems = [
  {
    q: 'Why do clinics struggle to adopt new software?',
    a: 'Usually because it feels like extra work, the reason for it was never explained, previous tools were abandoned, or the people who use it daily were not involved in choosing it.',
  },
  {
    q: 'How long does it take a clinic team to adopt a new tool?',
    a: 'It varies, but the first few weeks decide it. If a tool has not become routine within about a month, it usually gets quietly abandoned.',
  },
  {
    q: 'What is the best way to train clinic staff on new software?',
    a: 'Short, repeated sessions focused on the specific tasks people do every day, plus one internal person others can ask and a simple one-page reference.',
  },
  {
    q: 'Should staff be involved in choosing clinic software?',
    a: 'Yes. The people who use a system daily understand workflow details leadership often does not, and involving them makes adoption significantly more likely.',
  },
  {
    q: 'How does A2V2 handle setup and onboarding?',
    a: 'A2V2 is configured around your clinic\'s specialty, protocols, and workflows, with hands-on onboarding rather than handing you a login and leaving you to it.',
  },
]

const resistanceReasons: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Clock,
    title: 'It feels like extra work',
    desc: 'Learning a new system costs time your staff does not have. If the payoff is not obvious in week one, the old way wins.',
  },
  {
    Icon: HelpCircle,
    title: 'Nobody explained the why',
    desc: 'Staff who do not understand what problem the tool solves experience it as one more thing they have been told to do.',
  },
  {
    Icon: AlertTriangle,
    title: 'They have been burned before',
    desc: 'If the last three tools were abandoned after six weeks, your team has learned not to invest in the fourth.',
  },
  {
    Icon: Users,
    title: 'They were not asked',
    desc: 'Software chosen without input from the people who use it daily rarely fits how they actually work.',
  },
]

const trainingPoints: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: Zap,
    title: 'Teach the task, not the tool',
    desc: 'Show how to do the specific job they do every day, not a tour of every feature.',
  },
  {
    Icon: Repeat,
    title: 'Short and repeated beats long and once',
    desc: 'Fifteen minutes three times sticks better than a two-hour session nobody remembers.',
  },
  {
    Icon: UserCheck,
    title: 'Give people a person to ask',
    desc: 'One internal go-to who knows the system removes most of the friction.',
  },
  {
    Icon: FileText,
    title: 'Leave something behind',
    desc: 'A one-page reference beats a manual nobody opens.',
  },
]

const involveItems = [
  'Ask what actually eats their day before you evaluate anything',
  'Include at least one daily user in the demo',
  'Let them ask the vendor their own questions',
  'Take their objections seriously, they are usually specific and correct',
]

const startSmallItems = [
  'Choose one painful, high-frequency task',
  'Get that one thing working well before adding more',
  'Let the early win build appetite for the next piece',
  'Expand only once the first piece is genuinely routine',
]

const watchItems = [
  'Check in during the first two weeks, not the first quarter',
  'Ask what is annoying rather than whether it is going well',
  'Fix small friction fast, it is usually a setting, not a flaw',
  'Notice who has stopped using it and find out why',
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
export default function GettingClinicTeamToAdoptSoftwareBlogPost() {
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
              How to get your clinic team to actually use new software
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
              Most software does not fail because it is bad. It fails because nobody uses it. Here is how to roll out a new tool your staff will actually adopt.
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
              src="/images/getting-your-clinic-team-to-adopt-new-software.png"
              alt="How to get your clinic team to actually use new software"
              width={720}
              height={405}
              className="w-full aspect-[16/9] object-cover"
              quality={100}
              unoptimized
              priority
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/patient-engagement-specialty-clinics.png'
              }}
            />
          </div>

          {/* Body */}
          <article>
            <p style={bodyText}>
              Every clinic has a piece of software somebody paid for that nobody opens. It was chosen carefully, demoed well, and approved by someone who was genuinely excited about it. Then it quietly became a login nobody uses.
            </p>
            <p style={bodyText}>
              The tool is rarely the problem. Rollout is. Here is how to do it so the thing you bought actually gets used.
            </p>

            <h2 style={h2Style}>Understand why staff resist</h2>
            <p style={bodyText}>
              Resistance is almost never laziness. It is usually one of a few practical things.
            </p>
            <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              {resistanceReasons.map((s, i) => (
                <StepPoint key={i} Icon={s.Icon} title={s.title} desc={s.desc} />
              ))}
            </div>

            <NoteBox>
              The most common rollout mistake is announcing a tool instead of introducing a problem. Staff adopt solutions. They resist assignments.
            </NoteBox>

            <h2 style={h2Style}>Involve the people who will use it</h2>
            <p style={bodyText}>
              The front desk and care coordinators know things about your daily workflow that never make it into a leadership conversation. Bring them in before you decide, not after.
            </p>
            <BulletList items={involveItems} />

            <h2 style={h2Style}>Start with one thing that clearly helps</h2>
            <p style={bodyText}>
              The fastest way to kill adoption is a full rollout on day one. Pick the single most annoying task the tool can fix and start there.
            </p>
            <p style={bodyText}>
              If your front desk spends hours retyping intake documents, start with that. When they see two minutes of review replace twenty minutes of typing, you have made the case better than any training session could.
            </p>
            <BulletList items={startSmallItems} />

            <h2 style={h2Style}>Make training short and real</h2>
            <p style={bodyText}>
              Long training sessions do not survive contact with a busy clinic. Keep it practical.
            </p>
            <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              {trainingPoints.map((s, i) => (
                <StepPoint key={i} Icon={s.Icon} title={s.title} desc={s.desc} />
              ))}
            </div>

            <h2 style={h2Style}>Watch the first few weeks closely</h2>
            <p style={bodyText}>
              Adoption is decided early. If someone quietly goes back to the old way in week two and nobody notices, that becomes the norm.
            </p>
            <BulletList items={watchItems} />

            <NoteBox>
              Most abandoned software was abandoned in the first month, over something small that nobody mentioned.
            </NoteBox>

            <h2 style={h2Style}>Choose tools that adapt to you</h2>
            <p style={bodyText}>
              Some of this is a purchasing decision, not a rollout one. A rigid tool that forces your team to change how they work will always fight you. One that can be configured to your specialty, your protocols, and your workflow removes most of the resistance before it starts.
            </p>
            <p style={bodyText}>
              It is worth asking any vendor directly: who sets this up, how long does it take, and what happens when we need something changed.
            </p>
            <p style={bodyText}>
              <Link href="/blog/questions-to-ask-before-adopting-ai" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See the questions worth asking any AI vendor
              </Link>
            </p>

            <h2 style={h2Style}>The bottom line</h2>
            <p style={bodyText}>
              Adoption comes down to a few unglamorous things. Involve the people who will use it. Start with one obvious win. Keep training short and practical. Watch the first few weeks. And choose a tool that fits your clinic rather than the other way around. Do that and the software you bought becomes the software your team actually uses.
            </p>

            <p style={bodyText}>
              <Link href="/solutions/custom-dashboard" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See how A2V2 is set up around your clinic
              </Link>
              {' '}&middot;{' '}
              <Link href="/features" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Explore the platform
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
              Software your team will actually use
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
              Book a demo and see how A2V2 is set up around the way your clinic already works.
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
