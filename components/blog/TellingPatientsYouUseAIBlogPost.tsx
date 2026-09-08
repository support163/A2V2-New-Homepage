'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  UserCheck, Lock, MessageSquare, Stethoscope, Shield, Phone, Feather,
  type LucideIcon,
} from 'lucide-react'
import TestHomepage2Navbar from '@/components/TestHomepage2Navbar'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import { getRelatedPosts } from '@/lib/blog-posts'
import { DEMO_BOOKING_URL, SIGN_IN_URL } from '@/lib/constants'

const H = "'Helvetica Neue', Helvetica, Arial, sans-serif"
const I = "'Inter', sans-serif"

const CURRENT_HREF = '/blog/telling-patients-you-use-ai'
const ARTICLE_URL = 'https://www.a2v2.ai/blog/telling-patients-you-use-ai'
const ARTICLE_TITLE = 'What to tell patients when your clinic uses AI'

const relatedPosts = getRelatedPosts(CURRENT_HREF, 3)

const faqItems = [
  {
    q: 'Do I have to tell patients my clinic uses AI?',
    a: 'Requirements can vary by jurisdiction and situation, so confirm your specific obligations with a qualified professional. As a matter of trust, being upfront is generally the better approach regardless.',
  },
  {
    q: 'How do patients usually react to AI in a clinic?',
    a: 'Most patients are fine with it once they know a human is still responsible for their care and their information is protected. The negative reaction usually comes from discovering it themselves rather than being told.',
  },
  {
    q: "What should a clinic's AI disclosure say?",
    a: 'Keep it to a sentence or two: what the AI helps with, that providers make every clinical decision, that patient information is protected and not used to train AI models, and how to reach a real person.',
  },
  {
    q: 'Where should the disclosure go?',
    a: 'In intake materials, the welcome message when a patient starts a conversation, a short page on your website, and as a consistent answer your staff can give when asked.',
  },
  {
    q: "Does A2V2's AI make clinical decisions?",
    a: "No. A2V2's agents handle routine communication and escalate anything requiring clinical judgment to your team. Medical decisions stay with your providers.",
  },
]

const patientQuestions: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: UserCheck,
    title: 'Is a real person still in charge of my care?',
    desc: 'This is the one that matters most. Patients want to know their provider is still making the decisions and that a human is reachable when something matters.',
  },
  {
    Icon: Lock,
    title: 'Is my health information safe?',
    desc: 'The second concern is where their data goes. A clear answer about protection and privacy settles it.',
  },
]

const howToSayIt: { Icon: LucideIcon; title: string; desc: string }[] = [
  {
    Icon: MessageSquare,
    title: 'Name what it does, simply',
    desc: 'Say it helps with reminders, questions, and paperwork. Avoid describing the technology.',
  },
  {
    Icon: Stethoscope,
    title: 'Be explicit that clinical decisions are human',
    desc: 'State plainly that your providers make every medical decision and that anything clinical goes to your team.',
  },
  {
    Icon: Shield,
    title: 'Say their information is protected',
    desc: 'Mention that it runs on HIPAA-compliant systems and their data is not used to train AI models.',
  },
  {
    Icon: Phone,
    title: 'Tell them how to reach a person',
    desc: 'Knowing a human is one message away removes most of the anxiety.',
  },
  {
    Icon: Feather,
    title: 'Keep it brief',
    desc: 'A sentence or two in your intake materials is usually enough. A long explanation implies there is something to justify.',
  },
]

const whereToPutItems = [
  'In your new patient intake materials',
  'In the welcome message when a patient first starts a conversation',
  'On a short page of your website patients can find',
  "In your staff's answer when a patient asks directly",
]

const trainTeamItems = [
  'Agree on a one or two sentence answer everyone uses',
  'Make sure staff know what the AI does and does not handle',
  'Give them a clear line for when to escalate to a provider',
  'Let them say "I will get someone" rather than guessing',
]

const whatNotToDoItems = [
  'Do not oversell it as a feature patients should be impressed by',
  'Do not let an AI message imply it is a specific provider speaking',
  'Do not use vague reassurance like "we take privacy seriously" instead of specifics',
  'Do not make finding a human harder than finding the AI',
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
export default function TellingPatientsYouUseAIBlogPost() {
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
              What to tell patients when your clinic uses AI
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
              Patients notice. Being straightforward about how AI supports their care builds more trust than staying quiet about it, and it is easier than most clinics expect.
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
              src="/images/telling-patients-you-use-ai.png"
              alt="What to tell patients when your clinic uses AI"
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
              Clinics adopting AI tend to land in one of two places. Some avoid mentioning it entirely, worried patients will feel like they are being handed off to a machine. Others mention it constantly, as if the technology is the selling point.
            </p>
            <p style={bodyText}>
              Both miss. Patients do not care that you use AI. They care about two things: whether a human is still responsible for their care, and whether their information is safe. Answer those clearly and the conversation is usually over in a sentence.
            </p>

            <h2 style={h2Style}>Why saying nothing is the riskier choice</h2>
            <p style={bodyText}>
              Patients notice when a message arrives at an odd hour or an answer comes back instantly. If they work it out on their own, the discovery frames the whole thing as something you were hiding.
            </p>
            <NoteBox>
              The concern is almost never that a clinic uses AI. It is the feeling of having been quietly handed to a machine without being told.
            </NoteBox>
            <p style={bodyText}>
              Being upfront costs you very little and removes the possibility of that reaction entirely.
            </p>

            <h2 style={h2Style}>The two questions patients actually have</h2>
            <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              {patientQuestions.map((s, i) => (
                <StepPoint key={i} Icon={s.Icon} title={s.title} desc={s.desc} />
              ))}
            </div>
            <p style={bodyText}>
              Everything else is detail. If your explanation answers these two, you are done.
            </p>

            <h2 style={h2Style}>How to say it</h2>
            <p style={bodyText}>
              Keep it short, plain, and free of technical language.
            </p>
            <div style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>
              {howToSayIt.map((s, i) => (
                <StepPoint key={i} Icon={s.Icon} title={s.title} desc={s.desc} />
              ))}
            </div>

            <h2 style={h2Style}>A simple example</h2>
            <p style={bodyText}>
              You do not need a policy document. Something like this covers it:
            </p>
            <NoteBox>
              We use secure, HIPAA-compliant AI to help with reminders, scheduling, and answering routine questions, so our team has more time for your care. Your provider makes every clinical decision, anything medical goes straight to our staff, and your information is never used to train AI systems. You can always reach a real person by replying or calling us.
            </NoteBox>
            <p style={bodyText}>
              That is the whole disclosure. Put it in your intake packet, on a page of your website, or in your welcome message.
            </p>

            <h2 style={h2Style}>Where to put it</h2>
            <CheckList items={whereToPutItems} />

            <h2 style={h2Style}>Train your team to answer it the same way</h2>
            <p style={bodyText}>
              Patients will ask the front desk before they ask anyone else. If three staff members give three different answers, that inconsistency does more damage than the question ever would.
            </p>
            <BulletList items={trainTeamItems} />

            <h2 style={h2Style}>What not to do</h2>
            <BulletList items={whatNotToDoItems} />

            <p style={bodyText}>
              <Link href="/blog/what-is-a-hipaa-compliant-ai-agent" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Learn what makes an AI agent HIPAA-compliant
              </Link>
            </p>

            <h2 style={h2Style}>The bottom line</h2>
            <p style={bodyText}>
              Transparency about AI is simpler than it sounds. Patients want to know a human is still responsible and their information is protected. Say both clearly, keep it short, make a person easy to reach, and make sure your whole team says the same thing. Handled that way, using AI tends to increase trust rather than threaten it, because it shows you thought about it.
            </p>

            <p style={bodyText}>
              <Link href="/security" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See how A2V2 handles security
              </Link>
              {' '}&middot;{' '}
              <Link href="/features/ai-agents" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                How our AI agents escalate to your team
              </Link>
              {' '}&middot;{' '}
              <a href={DEMO_BOOKING_URL} style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Book a demo
              </a>
            </p>

            <p style={{ fontSize: 13, lineHeight: 1.65, color: '#68655E', fontFamily: I, marginTop: '2rem' }}>
              This article is educational and not legal advice. Disclosure requirements can vary, so consult a qualified professional about your specific obligations.
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
              AI your patients can trust
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
