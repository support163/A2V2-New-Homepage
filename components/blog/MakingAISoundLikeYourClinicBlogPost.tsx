'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  MessageSquare, Ban, ArrowUpRight, BookOpen,
  type LucideIcon,
} from 'lucide-react'
import TestHomepage2Navbar from '@/components/TestHomepage2Navbar'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import { getRelatedPosts } from '@/lib/blog-posts'
import { DEMO_BOOKING_URL, SIGN_IN_URL } from '@/lib/constants'

const H = "'Helvetica Neue', Helvetica, Arial, sans-serif"
const I = "'Inter', sans-serif"

const CURRENT_HREF = '/blog/making-ai-sound-like-your-clinic'
const ARTICLE_URL = 'https://www.a2v2.ai/blog/making-ai-sound-like-your-clinic'
const ARTICLE_TITLE = 'How to make an AI agent actually sound like your clinic'

const relatedPosts = getRelatedPosts(CURRENT_HREF, 3)

const faqItems = [
  {
    q: 'Why do AI agents sound generic?',
    a: 'Usually because they have not been given anything specific to work from. An agent with no knowledge of your practice answers from general information, which is where both the generic tone and the wrong answers come from.',
  },
  {
    q: 'What should I give an AI agent to make it sound like my clinic?',
    a: 'Your protocols in the words you use with patients, the answers your team already gives to common questions, your practice philosophy, and any materials you hand patients. Most clinics already have this written somewhere.',
  },
  {
    q: 'How do I stop an AI from answering clinical questions?',
    a: 'Define escalation explicitly in its instructions. Name the categories that must go to a human, such as symptoms, dosing, treatment changes, or an upset patient, and test that it actually escalates before patients use it.',
  },
  {
    q: 'How do I test an AI agent before patients see it?',
    a: 'Run your most common patient questions through it exactly as patients phrase them, try clinical questions it should refuse, ask about something it has no information on, and have a staff member who talks to patients daily review the responses.',
  },
  {
    q: 'Can A2V2 agents be customized to my clinic?',
    a: 'Yes. A2V2 agents take custom instructions, draw on a knowledge base of your own content, and include a playground for testing configurations, plus version history so instruction changes are tracked and reversible.',
  },
]

const instructionPoints: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: MessageSquare,
    title: 'Describe the tone concretely',
    desc: 'Warm and plain-spoken is more useful than professional. Give examples of how you would phrase something.',
  },
  {
    Icon: Ban,
    title: 'Say what it should not do',
    desc: 'Boundaries matter as much as instructions. Name the things it should never attempt to answer.',
  },
  {
    Icon: ArrowUpRight,
    title: 'Define escalation precisely',
    desc: 'Be specific about what goes to a human. Anything clinical, anything about a symptom, anything a patient is upset about.',
  },
  {
    Icon: BookOpen,
    title: 'Point it at your knowledge',
    desc: 'Tell it to answer from your materials rather than general knowledge, and to say it does not know rather than guess.',
  },
]

const knowledgeItems = [
  'Your protocols and how you actually explain them to patients',
  'The answers your team already gives to the questions you hear constantly',
  'Your practice philosophy, in the words you use to describe it',
  'Guidance documents and materials you already hand patients',
]

const testItems = [
  'Take your ten most common patient questions and ask them exactly as patients phrase them',
  'Ask a few clinical questions it should refuse, and confirm it escalates',
  'Ask something it has no information about, and confirm it says so instead of inventing an answer',
  'Have someone who talks to patients daily read the responses and flag anything that sounds off',
]

const reviseItems = [
  'Change one thing at a time so you know what caused a difference',
  'Keep a record of what changed and when',
  'Revisit it after real patient conversations reveal the gaps',
  'Treat it as ongoing, not a one-time setup',
]

const goodLooksLikeItems = [
  'A patient would not be surprised to learn it came from your clinic',
  'Answers reflect your protocols, not general health advice',
  'It says it does not know rather than guessing',
  'Clinical questions reach a human quickly',
  'Your staff would sign their name to the responses',
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
export default function MakingAISoundLikeYourClinicBlogPost() {
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
              How to make an AI agent actually sound like your clinic
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
              The fear with AI is that it will sound like a robot reading a script. That is a setup problem, not an AI problem, and it is fixable.
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
              src="/images/making-ai-sound-like-your-clinic.png"
              alt="How to make an AI agent actually sound like your clinic"
              width={720}
              height={405}
              className="w-full aspect-[16/9] object-cover"
              quality={100}
              unoptimized
              priority
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/telling-patients-you-use-ai.png'
              }}
            />
          </div>

          {/* Body */}
          <article>
            <p style={bodyText}>
              The most common objection to AI in a clinic is not compliance. It is tone. Clinic owners picture a patient getting a stiff, generic reply that sounds nothing like the practice they chose, and they decide it is not worth the risk to the relationship.
            </p>
            <p style={bodyText}>
              That worry is reasonable, but the cause is usually setup rather than the technology. An AI agent sounds generic when it has been given nothing specific to work from. Give it your actual content and clear instructions and it stops sounding like a stranger.
            </p>

            <h2 style={h2Style}>Give it your knowledge, not the internet's</h2>
            <p style={bodyText}>
              An agent with no knowledge of your practice will answer from general information. That is where the generic tone comes from, and also where wrong answers come from.
            </p>
            <p style={bodyText}>
              The fix is to feed it your own material.
            </p>
            <BulletList items={knowledgeItems} />
            <NoteBox>
              Most clinics already have this. It exists in intake packets, follow-up emails, and the explanations your team repeats ten times a week. It just has never been written down in one place.
            </NoteBox>

            <h2 style={h2Style}>Write instructions like you are training a new hire</h2>
            <p style={bodyText}>
              The instructions you give an agent are the closest equivalent to onboarding a person. Vague instructions produce vague behavior.
            </p>
            <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              {instructionPoints.map((s, i) => (
                <StepPoint key={i} Icon={s.Icon} title={s.title} desc={s.desc} />
              ))}
            </div>

            <h2 style={h2Style}>The escalation rule matters more than the tone</h2>
            <p style={bodyText}>
              A clinic agent that sounds perfect but answers a clinical question it should not have touched is worse than one that sounds a little plain and hands off correctly.
            </p>
            <p style={bodyText}>
              Get the boundary right first. Anything involving symptoms, dosing, treatment changes, or a worried patient should go to your team, quickly and without the patient feeling bounced.
            </p>
            <p style={bodyText}>
              <Link href="/blog/questions-to-ask-before-adopting-ai" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See what to ask any AI vendor about escalation
              </Link>
            </p>

            <h2 style={h2Style}>Test it before patients do</h2>
            <p style={bodyText}>
              This is the step most clinics skip and then regret. Before an agent talks to a real patient, run it through the conversations you actually get.
            </p>
            <BulletList items={testItems} />
            <NoteBox>
              The person at your front desk will spot a wrong tone faster than anyone else in the building. Have them read the test conversations.
            </NoteBox>

            <h2 style={h2Style}>Expect to revise it</h2>
            <p style={bodyText}>
              The first version will be close but not right. That is normal, and it is why version history matters. You should be able to adjust instructions, see the effect, and roll back if a change makes things worse.
            </p>
            <BulletList items={reviseItems} />

            <h2 style={h2Style}>What good looks like</h2>
            <CheckList items={goodLooksLikeItems} />

            <h2 style={h2Style}>The bottom line</h2>
            <p style={bodyText}>
              An AI agent sounds generic when it has been given nothing specific. Feed it your protocols and your actual answers, write instructions the way you would onboard a new hire, be precise about escalation, test it against real questions before patients see it, and keep revising. Done that way, patients get answers that sound like your practice, because they came from it.
            </p>

            <p style={bodyText}>
              <Link href="/features/ai-agents" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See how A2V2's AI agents work
              </Link>
              {' '}&middot;{' '}
              <Link href="/security" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                How we handle security
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
              An agent that sounds like your practice
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
              Book a demo and see how A2V2 agents are built around your protocols and your voice.
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
