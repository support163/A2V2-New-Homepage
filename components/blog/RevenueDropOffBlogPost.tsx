'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRelatedPosts } from '@/lib/blog-posts'
import CtaSection from '@/app/Test-Website/components/CtaSection'
import { DEMO_BOOKING_URL } from '@/lib/constants'

const CURRENT_HREF = '/blog/revenue-loss-patient-drop-off-calculator'
const relatedPosts = getRelatedPosts(CURRENT_HREF)

const faqItems = [
  {
    q: 'How much revenue does the average longevity clinic lose to patient drop-off?',
    a: 'Based on industry data showing 73% drop-off rates, a 200-patient clinic with $5,000 average patient value loses an estimated $730,000 per year. Clinics with higher patient values ($8,000 to $12,000) lose proportionally more. Use our calculator to model your specific numbers.',
  },
  {
    q: 'Why is the drop-off rate so high in longevity medicine?',
    a: 'Longevity protocols are complex and long-term. Patients are managing multiple interventions (NAD+, peptides, HRT, supplements, lab schedules) with minimal structured support between visits. The cognitive load combined with lack of timely follow-up creates natural drop-off points.',
  },
  {
    q: 'Can AI really reduce drop-off from 73% to 35%?',
    a: 'That is a projected target based on our engagement model. The reduction comes from three mechanisms: protocol-timed check-ins that prevent disengagement triggers, predictive flagging that catches at-risk patients early, and automated re-engagement sequences that recover patients before they are permanently lost. Actual results vary by clinic.',
  },
  {
    q: 'How quickly can a clinic see ROI from AI-powered retention?',
    a: 'We project most clinics see ROI within 60 days. The math is straightforward: if you retain even 5 additional patients per month at $5,000 annual value, that is $25,000 in recovered revenue per month against a platform cost starting at $19.99 per month.',
  },
  {
    q: 'Does this require replacing our current EHR or CRM?',
    a: 'No. A2V2 is designed to sit on top of your existing clinical stack. It integrates with your current systems and adds the engagement and retention layer that most EHRs and CRMs do not provide.',
  },
  {
    q: 'Is the calculator free?',
    a: 'Yes. No sign-up required. You can model different revenue scenarios, patient volumes, and conversion rates in about 60 seconds.',
  },
]

/* -- Share bar -- */
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

  const btnStyle = {
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#ffffff',
  }

  return (
    <div className="flex items-center gap-3 mt-6">
      <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Share:</span>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
        style={btnStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.727-8.842L1.064 2.25H8.08l4.262 5.639L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
        style={btnStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
        </svg>
      </a>

      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="flex items-center gap-1.5 px-3 h-9 rounded-full transition-colors text-sm"
        style={btnStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
      >
        {copied ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

/* -- FAQ accordion -- */
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div data-animate="" className="mt-16 pt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <h2 className="text-[22px] md:text-[28px] font-semibold mb-8" style={{ color: '#ffffff' }}>
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col">
        {faqItems.map((item, i) => (
          <div
            key={i}
            style={{
              borderTop: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-[15px] md:text-base font-semibold leading-snug" style={{ color: '#ffffff' }}>
                {item.q}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-[500px] pb-5' : 'max-h-0'}`}>
              <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* -- Note box -- */
function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-r-lg p-4 mb-6"
      style={{ background: 'rgba(255,255,255,0.04)', borderLeft: '3px solid rgba(255,255,255,0.15)' }}
    >
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
        {children}
      </p>
    </div>
  )
}

/* -- Action callout box -- */
function ActionBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-4 mb-3"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      {children}
    </div>
  )
}

/* -- Dark table -- */
type CellValue = string | { text: string; tint?: 'green' | 'red' | 'yellow' }

function DarkTable({ headers, rows }: { headers: string[]; rows: CellValue[][] }) {
  return (
    <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '480px' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.06)' }}>
              {headers.map((h, i) => (
                <th
                  key={i}
                  style={{
                    padding: '12px 16px',
                    textAlign: 'left',
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#ffffff',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} style={{ background: ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                {row.map((cell, ci) => {
                  const isObj = typeof cell === 'object'
                  const text = isObj ? cell.text : cell
                  const tint = isObj ? cell.tint : undefined
                  const color =
                    tint === 'green' ? 'rgba(16,185,129,0.9)' :
                    tint === 'red' ? 'rgba(239,68,68,0.85)' :
                    tint === 'yellow' ? 'rgba(234,179,8,0.9)' :
                    'rgba(255,255,255,0.75)'
                  return (
                    <td
                      key={ci}
                      style={{
                        padding: '12px 16px',
                        fontSize: 14,
                        color,
                        fontWeight: ci === 0 ? 500 : 400,
                        borderBottom: ri < rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                        verticalAlign: 'top',
                      }}
                    >
                      {text}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/* -- Body text styles -- */
const bodyText: React.CSSProperties = {
  fontSize: 18,
  lineHeight: 1.75,
  color: 'rgba(255,255,255,0.8)',
  marginBottom: '1.5rem',
}

const h2Style: React.CSSProperties = {
  fontSize: 26,
  fontWeight: 600,
  color: '#ffffff',
  marginTop: '3rem',
  marginBottom: '1rem',
  lineHeight: 1.3,
}

const h3Style: React.CSSProperties = {
  fontSize: 20,
  fontWeight: 600,
  color: '#ffffff',
  marginTop: '2rem',
  marginBottom: '0.75rem',
  lineHeight: 1.3,
}

const strongStyle: React.CSSProperties = {
  color: '#ffffff',
  fontWeight: 700,
}

/* -- Main component -- */
export default function RevenueDropOffBlogPost() {
  const articleUrl = 'https://www.a2v2.ai/blog/revenue-loss-patient-drop-off-calculator'
  const articleTitle = 'How Much Revenue Are You Losing to Patient Drop-Off?'

  return (
    <div style={{ background: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>
      <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">

        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <Link
            href="/blog"
            className="transition-colors"
            style={{ color: 'rgba(255,255,255,0.7)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
          >
            Blog
          </Link>
          <span>/</span>
          <span>Best Practices</span>
        </div>

        {/* Header */}
        <header className="mb-10">
          <span
            className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4"
            style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}
          >
            Best Practices
          </span>
          <h1
            className="text-[28px] md:text-[40px] font-semibold leading-tight tracking-tight"
            style={{ color: '#ffffff' }}
          >
            How Much Revenue Are You Losing to Patient Drop-Off?
          </h1>
          <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            73% of longevity patients disengage within 6 months. That is not a retention problem. That is a revenue crisis hiding in plain sight. Here is how to calculate exactly what it is costing your clinic, and what to do about it.
          </p>

          {/* Author row */}
          <div className="mt-6 flex items-center gap-3">
            <Image
              src="/icons/Solo-Logo-A2V2.svg"
              alt="A2V2"
              width={32}
              height={32}
              className="w-8 h-8 object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
              By The A2V2 Team &middot; 9 min read &middot; May 2, 2026
            </span>
          </div>

          <ShareBar url={articleUrl} title={articleTitle} />
        </header>

        {/* Hero image */}
        <div className="w-full mb-12">
          <Image
            src="/images/blog-post14.png"
            alt="How Much Revenue Are You Losing to Patient Drop-Off?"
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
            Most clinic owners know they lose patients. What they do not know is exactly how much money walks out the door with each one.
          </p>
          <p style={bodyText}>
            When a longevity patient drops off after month 3 of a 12-month protocol, that is not just a missed appointment. That is 9 months of lost treatment revenue. Multiply that by 50, 100, or 200 patients per year and the number gets uncomfortable fast.
          </p>
          <p style={bodyText}>
            The industry data is stark: 73% of longevity patients disengage from their treatment protocols within 6 months. Not because the treatment is not working. Because the follow-up is not happening.
          </p>
          <p style={bodyText}>
            This post breaks down the math, shows you how to calculate your own clinic&apos;s exposure, and links to our interactive calculator so you can see the numbers for your specific situation.
          </p>

          {/* H2: The Math */}
          <h2 style={h2Style} data-animate="">The Math Most Clinics Have Never Done</h2>
          <p style={bodyText}>Let us start with a simple example.</p>

          <div
            className="rounded-xl p-5 mb-6"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <p className="text-sm font-semibold mb-3" style={{ color: '#ffffff' }}>Example clinic:</p>
            <ul className="flex flex-col gap-1.5">
              {[
                '200 active patients',
                'Average patient value: $5,000 per year',
                'Annual drop-off rate: 73%',
                'Patients lost per year: 146',
                'Revenue lost: $730,000',
              ].map((item, i) => (
                <li key={i} style={{ fontSize: 15, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                  &#x2022; {item}
                </li>
              ))}
            </ul>
          </div>

          <p style={bodyText}>
            That is nearly three-quarters of a million dollars in recoverable revenue, gone. Not because patients were dissatisfied. Because nobody followed up at the right moment.
          </p>
          <p style={bodyText}>Now adjust the variables for your clinic:</p>

          <DarkTable
            headers={['Active Patients', 'Avg. Patient Value', '73% Drop-Off Loss', '35% Drop-Off Loss (with AI)', 'Estimated Recovery']}
            rows={[
              ['100', '$5,000', '$365,000', '$175,000', { text: '$190,000', tint: 'green' }],
              ['200', '$5,000', '$730,000', '$350,000', { text: '$380,000', tint: 'green' }],
              ['300', '$8,000', '$1,752,000', '$840,000', { text: '$912,000', tint: 'green' }],
              ['500', '$8,000', '$2,920,000', '$1,400,000', { text: '$1,520,000', tint: 'green' }],
              ['200', '$12,000', '$1,752,000', '$840,000', { text: '$912,000', tint: 'green' }],
              ['500', '$12,000', '$4,380,000', '$2,100,000', { text: '$2,280,000', tint: 'green' }],
            ]}
          />

          <NoteBox>
            These are projections based on industry retention data and our engagement model. The 35% target drop-off rate is based on what AI-powered retention is designed to achieve. Actual results may vary.
          </NoteBox>

          {/* H2: Why 73% */}
          <h2 style={h2Style} data-animate="">Why 73% Drop Off (and Why It Is Not Their Fault)</h2>
          <p style={bodyText}>
            Patient drop-off in longevity medicine is uniquely high because the protocols are uniquely complex.
          </p>
          <p style={bodyText}>
            A patient on an NAD+ IV therapy protocol might have weekly infusions for 6 weeks, followed by bi-weekly maintenance, with lab work at specific intervals, supplement stacks to manage daily, and lifestyle adjustments to track. That is a lot of moving pieces for someone who also has a job, a family, and 47 other things competing for their attention.
          </p>
          <p style={bodyText}>
            The drop-off is not about dissatisfaction. It is about cognitive load and lack of timely support.
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. They forget.</strong> Not the treatment itself, but the ancillary steps. The lab appointment. The supplement refill. The follow-up call they were supposed to schedule. One missed step creates a gap. The gap becomes inertia. Inertia becomes drop-off.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. They experience side effects and have nobody to ask.</strong> A mild headache after an NAD+ infusion is normal. But if a patient does not know that, and the clinic does not check in for two weeks, the patient convinces themselves something is wrong and does not come back.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. They do not see progress.</strong> Longevity medicine works on long timescales. A patient three months into an HRT protocol may not feel dramatically different yet. Without proactive communication about what is happening biologically, they lose motivation.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>4. They are overwhelmed by the protocol complexity.</strong> When a patient is on multiple simultaneous protocols (HRT plus peptides plus supplements plus biomarker monitoring), the sheer volume of instructions creates paralysis. They default to doing nothing.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>5. Life happens.</strong> A busy month, a vacation, a family emergency. Without automated touchpoints that gently re-engage them, a temporary pause becomes a permanent exit.
            </p>
          </ActionBox>

          <p style={{ ...bodyText, marginTop: '1.5rem' }}>
            The common thread: every one of these drop-off triggers is preventable with the right follow-up at the right time.
          </p>

          {/* H2: Compound Cost */}
          <h2 style={h2Style} data-animate="">The Compound Cost of Drop-Off</h2>
          <p style={bodyText}>
            The direct revenue loss is only the beginning. Patient drop-off compounds in ways most clinics do not account for.
          </p>

          <h3 style={h3Style}>1. Lost Lifetime Value</h3>
          <p style={bodyText}>
            A longevity patient who stays engaged for 3 or more years is worth $15,000 to $72,000 depending on your pricing model. A patient who drops off at month 4 is worth $1,500 to $4,000. The lifetime value gap is 5 to 10x.
          </p>

          <h3 style={h3Style}>2. Wasted Acquisition Cost</h3>
          <p style={bodyText}>
            If you spend $500 to $2,000 acquiring a new patient (marketing, consultations, lab work, intake), that investment is wasted when they drop off in the first protocol cycle. You paid to acquire them, ran the initial workup, and lost them before the return materialized.
          </p>

          <h3 style={h3Style}>3. Negative Word of Mouth</h3>
          <p style={bodyText}>
            Patients who drop off do not just leave quietly. They tell their friends. Not &quot;the treatment did not work&quot; but &quot;I did not hear from them&quot; or &quot;I felt like a number.&quot; That passive negative sentiment suppresses referrals, which are the lowest-cost acquisition channel for longevity clinics.
          </p>

          <h3 style={h3Style}>4. Staff Demoralization</h3>
          <p style={bodyText}>
            Your clinical team invested time in these patients. Building treatment plans, running labs, explaining protocols. When patients disappear, it is demoralizing. Over time, staff start investing less in new patients because they expect drop-off. It becomes a self-fulfilling cycle.
          </p>

          <h3 style={h3Style}>5. Missed Upsell and Cross-Sell</h3>
          <p style={bodyText}>
            An engaged patient is open to adding protocols. Peptide therapy on top of HRT. Supplement optimization alongside NAD+. Executive health panels for comprehensive monitoring. A disengaged patient buys nothing additional. The expansion revenue that should come from your existing base evaporates.
          </p>

          {/* H2: Calculator CTA */}
          <h2 style={h2Style} data-animate="">Calculate Your Own Numbers</h2>
          <p style={bodyText}>
            We built an interactive calculator that lets you plug in your specific clinic variables and see the projected revenue impact of reducing patient drop-off.
          </p>

          <div
            className="rounded-2xl p-8 mb-8 text-center"
            style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
          >
            <p className="text-2xl font-semibold mb-3" style={{ color: '#ffffff' }}>
              Revenue Impact Calculator
            </p>
            <p className="text-base mb-6" style={{ color: 'rgba(255,255,255,0.6)', maxWidth: 420, margin: '0 auto 1.5rem' }}>
              Plug in your patient count, average patient value, and see how much revenue you could recover with AI-powered retention.
            </p>
            <Link
              href="/roi-calculator"
              className="inline-block rounded-full px-8 py-3 text-base font-semibold transition-opacity hover:opacity-90"
              style={{ background: '#ffffff', color: '#000000' }}
            >
              Open the Calculator
            </Link>
            <p className="text-sm mt-3" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Free. No sign-up required. Takes 60 seconds.
            </p>
          </div>

          <p style={bodyText}>
            The calculator models two revenue engines: new patient conversion and existing patient retention. You can adjust your revenue model (monthly subscription, annual membership, per-appointment, or medication markup), set your patient volume, and see the projected annual impact.
          </p>
          <p style={bodyText}>
            <Link href="/roi-calculator" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              Try the Revenue Impact Calculator
            </Link>
          </p>

          {/* H2: 35% vs 73% */}
          <h2 style={h2Style} data-animate="">What 35% Drop-Off Looks Like (Instead of 73%)</h2>
          <p style={bodyText}>
            Reducing drop-off from 73% to 35% does not require a miracle. It requires consistent, timely, protocol-aware follow-up that your team physically can not do manually at scale.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
            <div
              className="rounded-xl p-5"
              style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.15)' }}
            >
              <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(239,68,68,0.85)' }}>
                Without automated follow-up
              </p>
              <ul className="flex flex-col gap-1.5">
                {[
                  '200 active patients',
                  '73% annual drop-off',
                  '146 patients lost per year',
                  '$730,000 in lost revenue',
                  'Staff manually tracking spreadsheets',
                  'Follow-ups missed during busy weeks',
                  'Side effect questions go unanswered for days',
                  'Disengaged patients leave silently',
                ].map((item, i) => (
                  <li key={i} className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    &#x2022; {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="rounded-xl p-5"
              style={{ background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)' }}
            >
              <p className="text-sm font-semibold mb-3" style={{ color: 'rgba(16,185,129,0.9)' }}>
                With AI-powered retention
              </p>
              <ul className="flex flex-col gap-1.5">
                {[
                  '200 active patients',
                  '35% annual drop-off (projected)',
                  '70 patients lost per year',
                  '$350,000 in lost revenue',
                  '76 additional patients retained',
                  '$380,000 in estimated recovered revenue',
                  'Automated protocol-timed touchpoints',
                  'At-risk patients flagged 30 to 45 days early',
                ].map((item, i) => (
                  <li key={i} className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    &#x2022; {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* H2: How AI Retention Works */}
          <h2 style={h2Style} data-animate="">How AI-Powered Retention Works</h2>
          <p style={bodyText}>
            The key is not sending more messages. It is sending the right message at the right clinical moment.
          </p>

          <DarkTable
            headers={['Drop-Off Trigger', 'When It Happens', 'What AI Does']}
            rows={[
              ['Post-treatment side effects', '24 to 72 hours after session', 'Automated check-in asking about symptoms. AI reassures on common side effects and escalates anything unusual to the care team.'],
              ['Missed lab appointment', 'Day of scheduled lab', 'Reminder sent morning of. If not confirmed, follow-up 24 hours later with rescheduling options.'],
              ['Supplement non-adherence', '2 to 3 weeks into protocol', 'Adherence check-in. AI asks if patient is still taking daily supplements and addresses any issues.'],
              ['Protocol fatigue', 'Month 2 to 3', 'Progress update sharing biomarker improvements. Reinforces that the protocol is working even if the patient does not feel it yet.'],
              ['Communication gap', '30 plus days of no interaction', 'At-risk alert triggered. Re-engagement sequence with personalized message from care team.'],
              ['Life interruption', 'Any time', 'Gentle re-engagement after missed appointment. No guilt, just options to resume.'],
            ]}
          />

          <p style={bodyText}>
            This is what A2V2 Medical Agents are designed to automate. Each touchpoint is timed to clinical milestones, the content is specific to the patient&apos;s protocol stage, and every message flows through HIPAA-compliant infrastructure.
          </p>
          <p style={bodyText}>
            <Link href="/blog/automate-patient-follow-ups-hipaa" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              See how Medical Agents handle follow-ups
            </Link>
          </p>

          {/* H2: Clinics That Get This Right */}
          <h2 style={h2Style} data-animate="">The Clinics That Get This Right</h2>
          <p style={bodyText}>
            The clinics with the lowest drop-off rates share three characteristics:
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. They follow up within 48 hours of every session.</strong> Not a generic &quot;how are you doing&quot; but a protocol-specific check-in that shows the patient their care team is paying attention.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. They proactively address the Month 2 to 3 danger zone.</strong> This is when most drop-off happens. The initial excitement fades, results are not yet visible, and the protocol feels like a chore. Clinics that push targeted progress updates and biomarker improvements through this window retain significantly more patients.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. They detect disengagement before it becomes permanent.</strong> By the time a patient stops answering calls, it is usually too late. The best clinics flag inactivity at 14 days and trigger re-engagement at 21 days, well before the 45 to 60 day point where most patients are gone for good.
            </p>
          </ActionBox>

          <p style={{ ...bodyText, marginTop: '1.5rem' }}>
            All three of these require either a very large clinical staff with perfect execution or an AI system designed to do it automatically.
          </p>

          {/* H2: What This Means for Revenue */}
          <h2 style={h2Style} data-animate="">What This Means for Your Revenue</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[
              { number: '$480K to $2.19M', label: 'Estimated annual revenue at risk per clinic' },
              { number: '76 to 190', label: 'Patients recoverable per year (200 to 500 patient base)' },
              { number: '< 60 days', label: 'Projected time to ROI with AI retention' },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl p-6 text-center"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <p className="text-3xl font-semibold" style={{ color: '#ffffff' }}>{item.number}</p>
                <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.label}</p>
              </div>
            ))}
          </div>

          <NoteBox>
            Revenue projections are estimates based on industry retention data and our engagement model. Actual results depend on clinic operations, patient mix, and protocol complexity.
          </NoteBox>

          {/* H2: Next Steps */}
          <h2 style={h2Style} data-animate="">Next Steps</h2>
          <p style={bodyText}>
            If you have read this far, the math is either confirming something you already suspected or revealing a problem you did not know the size of. Either way, here are the practical next steps:
          </p>

          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>1. Run the numbers for your clinic.</strong> Use our free calculator to see your specific revenue exposure. It takes 60 seconds and requires no sign-up.{' '}
              <Link href="/roi-calculator" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Open the Revenue Impact Calculator
              </Link>
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>2. Audit your current follow-up process.</strong> Map every touchpoint in your highest-volume protocol. How many are automated? How many depend on staff remembering? Where are the gaps?
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>3. Identify your Month 2 to 3 danger zone.</strong> Pull your patient data and look at when most drop-off happens. Is it after the initial protocol cycle? After the first lab review? After insurance stops covering? Knowing the trigger point tells you where to focus.
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>4. Book a free retention audit.</strong> We will review your patient retention data, identify where drop-off is happening, and project what recovery looks like with AI-powered engagement. 30 minutes. No sales pitch. Just the math.{' '}
              <a href={DEMO_BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Book your free retention audit
              </a>
            </p>
          </ActionBox>
          <ActionBox>
            <p style={{ ...bodyText, marginBottom: 0 }}>
              <strong style={strongStyle}>5. Talk to your team.</strong> Ask your front desk, your NPs, and your care coordinators where patients fall through the cracks. They know. They have been trying to patch the gaps manually. Giving them the tools to automate it changes everything.
            </p>
          </ActionBox>

          <p style={{ ...bodyText, marginTop: '1.5rem' }}>
            <Link href="/blog/automate-patient-follow-ups-hipaa" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              How to automate follow-ups without violating HIPAA
            </Link>
            {' '}&middot;{' '}
            <Link href="/blog/best-ai-tools-longevity-clinics-2026" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              Best AI tools for longevity clinics
            </Link>
            {' '}&middot;{' '}
            <Link href="/blog/silent-revenue-killer-longevity-medicine" style={{ color: '#2563EB', textDecoration: 'underline' }}>
              The silent revenue killer in longevity medicine
            </Link>
          </p>
        </article>

        {/* FAQ */}
        <FAQAccordion />

        {/* Bottom share bar */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <ShareBar url={articleUrl} title={articleTitle} />
        </div>
      </div>

      {/* Related Posts */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-section-x py-16 md:py-20">
        <h2 className="text-[22px] md:text-[28px] font-semibold mb-8" style={{ color: '#ffffff' }}>
          Related Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post, i) => (
            <Link
              key={i}
              href={post.href}
              className="flex flex-col transition-transform duration-200 hover:scale-[1.02]"
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
                <div className="w-full aspect-[4/3] rounded-xl" style={{ background: 'rgba(255,255,255,0.06)' }} />
              )}
              <span
                className="inline-flex self-start text-xs px-2.5 py-1 rounded-full mt-4 mb-2"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.7)',
                }}
              >
                {post.category}
              </span>
              <h3 className="text-sm font-semibold leading-snug" style={{ color: '#ffffff' }}>
                {post.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {post.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: '#ffffff' }}>
                Read Post
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <CtaSection
        heading={
          <>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>Your Patients.</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>Engaged.</span>
            {' '}
            <span style={{ color: '#ffffff' }}>Every Day.</span>
          </>
        }
        subtitle="Automated clinical communication that keeps patients on protocol and revenue in the door."
        subtitleColor="rgba(255,255,255,0.75)"
        subtitleSize="text-base"
        subtitleMaxWidth="550px"
      />
    </div>
  )
}
