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

const CURRENT_HREF = '/blog/multi-file-upload-in-chat'
const ARTICLE_URL = 'https://www.a2v2.ai/blog/multi-file-upload-in-chat'
const ARTICLE_TITLE = 'Attach more, do more: multi-file upload is here'

const relatedPosts = getRelatedPosts(CURRENT_HREF, 3)

const faqItems = [
  {
    q: 'How many files can a patient attach at once?',
    a: 'Up to 5 files per message. They can mix types, for example a couple of images and a PDF in the same message.',
  },
  {
    q: 'What file types are supported?',
    a: 'Images (PNG, JPG, WEBP, GIF), PDF, Word documents (DOC and DOCX), and plain text (TXT). What the agent can do with each depends on the model it runs on.',
  },
  {
    q: 'What are the size limits?',
    a: 'Up to 5 MB per image or PDF, and up to 2 MB per document that is read as text.',
  },
  {
    q: 'Can my agent read an image of a lab result?',
    a: 'If your agent runs on a vision-capable model, yes. It can read a photo of a lab result or a PDF directly. On a lighter text-focused model, patients can still share PDFs, Word, and text documents.',
  },
  {
    q: 'Is file sharing HIPAA-compliant?',
    a: "Yes. Files shared in chat are handled inside A2V2's HIPAA-compliant infrastructure, with encryption and a Business Associate Agreement in place.",
  },
]

/* ── Share bar (light theme) ── */
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
      <span className="text-sm font-medium" style={{ color: '#68655E', fontFamily: I }}>Share:</span>

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

/* ── Light note box ── */
function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-r-lg p-4 mb-6"
      style={{
        background: 'rgba(0,0,0,0.03)',
        borderLeft: '3px solid #0F0E0D',
      }}
    >
      <p style={{ fontSize: 14, lineHeight: 1.7, color: '#1a1a1a', fontFamily: I, margin: 0 }}>
        {children}
      </p>
    </div>
  )
}

/* ── Light table ── */
function LightTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(0,0,0,0.08)', marginBottom: '1.5rem' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: 'rgba(0,0,0,0.03)' }}>
            {headers.map((h, i) => (
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
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.015)' }}>
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  style={{
                    padding: '12px 16px',
                    fontSize: 14,
                    color: '#1a1a1a',
                    fontFamily: I,
                    lineHeight: 1.6,
                    borderBottom: ri < rows.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ── FAQ accordion (light theme) ── */
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mt-16 pt-12" style={{ borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      <h2
        style={{
          fontSize: 28,
          fontWeight: 400,
          color: '#0F0E0D',
          fontFamily: H,
          marginBottom: 32,
          lineHeight: 1.2,
        }}
      >
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
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '20px 0' }}
            >
              <span style={{ fontSize: 15, fontWeight: 500, color: '#0F0E0D', fontFamily: I, lineHeight: 1.4 }}>
                {item.q}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0F0E0D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                maxHeight: openIndex === i ? 400 : 0,
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

/* ── Body text / heading styles ── */
const bodyText: React.CSSProperties = {
  fontSize: 17,
  lineHeight: 1.78,
  color: '#1a1a1a',
  fontFamily: I,
  marginBottom: '1.5rem',
  letterSpacing: '-0.1px',
}

const h2Style: React.CSSProperties = {
  fontSize: 24,
  fontWeight: 400,
  color: '#0F0E0D',
  fontFamily: H,
  marginTop: '2.75rem',
  marginBottom: '1rem',
  lineHeight: 1.2,
}

/* ── Main component ── */
export default function MultiFileUploadBlogPost() {
  return (
    <div style={{ background: '#FFFFFF', fontFamily: I }}>
      <TestHomepage2Navbar />

      {/* Article */}
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
            <span>What&apos;s New</span>
          </div>

          {/* Header */}
          <header className="mb-10">
            {/* Category pill */}
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-medium mb-5"
              style={{
                border: '1px solid rgba(0,0,0,0.15)',
                color: '#0F0E0D',
                fontFamily: I,
                letterSpacing: '0.2px',
              }}
            >
              What&apos;s New
            </span>

            <h1
              style={{
                fontSize: 'clamp(28px, 5vw, 42px)',
                fontWeight: 400,
                color: '#0F0E0D',
                fontFamily: H,
                lineHeight: 1.08,
                letterSpacing: '-0.5px',
                marginBottom: 20,
              }}
            >
              Attach more, do more: multi-file upload is here
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
              Your patients can now share lab reports, scans, and documents right inside the chat. Your agent reads them directly, so the important details land in the conversation and the record without the back and forth.
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
                By The A2V2 Team &middot; 4 min read
              </span>
            </div>

            <ShareBar url={ARTICLE_URL} title={ARTICLE_TITLE} />
          </header>

          {/* Hero image */}
          <div className="w-full mb-12">
            <Image
              src="/images/multi-file-upload-in-chat.png"
              alt="Multi-file upload in chat"
              width={720}
              height={405}
              className="w-full rounded-xl object-cover"
              quality={100}
              unoptimized
              priority
            />
          </div>

          {/* Body */}
          <article>
            <p style={bodyText}>
              Great conversations often start with a document. A lab result a patient wants explained. A scan they have a question about. An intake form from another provider. Until now, sharing those in chat meant one file at a time or describing them in words. Not anymore.
            </p>
            <p style={bodyText}>
              Today we are rolling out multi-file upload in chat. Your patients can attach several files in a single message, and your agent reads them directly, so the details that matter show up right in the conversation.
            </p>

            <h2 style={h2Style}>What patients can share</h2>
            <p style={bodyText}>
              With multi-file upload, a patient can attach several files at once instead of sending them one by one.
            </p>

            <LightTable
              headers={['What', 'Details']}
              rows={[
                ['File types', 'Images (PNG, JPG, WEBP, GIF), PDF, Word (DOC and DOCX), and plain text (TXT)'],
                ['How many', 'Up to 5 files per message'],
                ['Size limits', 'Up to 5 MB per image or PDF, and up to 2 MB per document read as text'],
              ]}
            />

            <h2 style={h2Style}>Your agent adapts to the model you choose</h2>
            <p style={bodyText}>
              What your agent can do with an attachment depends on the AI model it runs on, and A2V2 handles that automatically.
            </p>

            <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: '1.5rem' }}>
              {[
                {
                  heading: 'On a vision-capable model:',
                  text: 'a patient can snap a photo of a lab result or drop in a PDF, and the agent reads it directly.',
                },
                {
                  heading: 'On a lighter text-focused model:',
                  text: 'patients can still share PDFs, Word documents, and text files.',
                },
              ].map(({ heading, text }, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    marginBottom: 16,
                    fontSize: 17,
                    color: '#1a1a1a',
                    fontFamily: I,
                    lineHeight: 1.7,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: '#0F0E0D',
                      flexShrink: 0,
                      marginTop: 10,
                    }}
                  />
                  <span>
                    <strong style={{ fontWeight: 600, color: '#0F0E0D' }}>{heading}</strong>{' '}
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <NoteBox>
              You choose the model that fits your use case, and your agent adapts automatically. No extra setup, no toggles to manage per conversation.
            </NoteBox>

            <h2 style={h2Style}>Why it matters for your clinic</h2>
            <p style={bodyText}>
              The moment a patient can hand your agent the actual document, the conversation gets faster and more useful.
            </p>

            <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: '1.5rem' }}>
              {[
                'Fewer back-and-forth messages trying to describe what is on a page',
                'Richer context for the agent to work from, so answers are more relevant',
                'The important details are captured in the conversation instead of lost in a patient\'s inbox',
                'A smoother experience that feels like talking to your practice, not filling out a portal',
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 12,
                    marginBottom: 14,
                    fontSize: 17,
                    color: '#1a1a1a',
                    fontFamily: I,
                    lineHeight: 1.7,
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0F0E0D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, marginTop: 4 }}
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 style={h2Style}>Where to find it</h2>
            <p style={bodyText}>
              It is already live. Inside any agent chat, tap the attach icon, choose up to five files, and send. That is it.
            </p>
            <p style={bodyText}>
              Every file shared in chat is handled inside A2V2&apos;s HIPAA-compliant infrastructure, with encryption and a Business Associate Agreement in place. As always, anything that needs clinical judgment escalates to your team.
            </p>

            <p style={{ ...bodyText, marginBottom: 0 }}>
              <Link href="/platform" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                See how our platform works
              </Link>
              {', '}
              <Link href="/security" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                learn about our security
              </Link>
              {', or '}
              <a href={DEMO_BOOKING_URL} style={{ color: '#2563EB', textDecoration: 'underline' }}>
                book a demo
              </a>
              {' '}to see it live.
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
        <div
          style={{ borderTop: '1px solid rgba(0,0,0,0.07)', background: '#FAFAFA' }}
        >
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
                      height={450}
                      className="w-full aspect-[4/3] rounded-xl object-cover"
                    />
                  ) : (
                    <div
                      className="w-full aspect-[4/3] rounded-xl"
                      style={{ background: 'rgba(0,0,0,0.05)' }}
                    />
                  )}
                  <span
                    className="inline-flex self-start text-xs px-2.5 py-1 rounded-full mt-4 mb-2"
                    style={{
                      border: '1px solid rgba(0,0,0,0.12)',
                      color: '#68655E',
                      fontFamily: I,
                    }}
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
                  <p
                    style={{
                      marginTop: 8,
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: '#68655E',
                      fontFamily: I,
                    }}
                  >
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
        <div
          style={{ background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.07)' }}
        >
          <div
            className="mx-auto max-w-[720px] px-6 py-20 md:py-28 text-center"
          >
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
              See it in your own agent
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
              Book a demo and we will show you multi-file upload and everything else A2V2 can do for your clinic.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={DEMO_BOOKING_URL}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#0F0E0D',
                  color: '#ffffff',
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: I,
                  padding: '11px 24px',
                  borderRadius: 8,
                  textDecoration: 'none',
                  transition: 'opacity 150ms',
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
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'transparent',
                  color: '#0F0E0D',
                  fontSize: 14,
                  fontWeight: 500,
                  fontFamily: I,
                  padding: '11px 24px',
                  borderRadius: 8,
                  border: '1px solid #0F0E0D',
                  textDecoration: 'none',
                  transition: 'opacity 150ms',
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
