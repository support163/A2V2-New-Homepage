'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRelatedPosts } from '@/lib/blog-posts'
import CtaBanner from '@/components/CtaBanner'

const CURRENT_HREF = '/blog/lapsed-patient-re-engagement-longevity-clinics'
const relatedPosts = getRelatedPosts(CURRENT_HREF)

const faqItems = [
  {
    q: 'How many lapsed longevity patients can be re-engaged?',
    a: 'Industry data suggests up to 40% of inactive patients can be successfully re-engaged. Key factors are timing (within 30-90 days), personalization (protocol-specific messaging), and removing friction (single-click rebooking).',
  },
  {
    q: 'What is the cost of acquiring a new patient versus re-engaging a lapsed one?',
    a: 'Industry estimates suggest acquiring a new longevity patient costs $500-$2,000. Re-engaging a lapsed patient costs a fraction of that. Since the average patient is worth an estimated $8,000-$24,000/year, re-engagement is one of the highest-ROI activities a clinic can pursue.',
  },
  {
    q: 'Why do longevity patients stop coming back?',
    a: 'Published adherence research identifies: lack of visible progress during the plateau stage, supplement fatigue from managing 10+ compounds daily, missed lab appointments, life disruptions, cost concerns, and lack of proactive clinic communication. Most patients didn\u2019t actively decide to leave \u2014 they drifted because nothing pulled them back.',
  },
  {
    q: 'What is a patient win-back campaign in longevity medicine?',
    a: 'A structured outreach sequence designed to re-engage inactive patients. Effective campaigns reference the patient\u2019s specific protocol, acknowledge the gap without guilt, offer a low-friction return path, and highlight what\u2019s new. A2V2.ai is designed to automate these with protocol-specific personalization.',
  },
  {
    q: 'Is it HIPAA-compliant to send re-engagement messages to lapsed patients?',
    a: 'Yes, but only through HIPAA-compliant channels. Messages referencing treatment history or protocol details must go through a platform with encryption, a signed BAA, and audit logging. A2V2.ai is designed to handle all patient communication within a fully compliant environment.',
  },
]

/* ── Reading progress bar ── */
function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const el = document.documentElement
      const scrollTop = el.scrollTop || document.body.scrollTop
      const scrollHeight = el.scrollHeight - el.clientHeight
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-[64px] left-0 right-0 z-40 h-[3px] bg-gray-200">
      <div
        className="h-full bg-primary transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

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

  return (
    <div className="flex items-center gap-3 mt-6">
      <span className="text-sm font-medium text-text-secondary">Share:</span>

      {/* X / Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-text-primary">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.727-8.842L1.064 2.25H8.08l4.262 5.639L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-text-primary">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
        </svg>
      </a>

      {/* Copy link */}
      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="flex items-center gap-1.5 px-3 h-9 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-sm text-text-primary"
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

/* ── FAQ accordion ── */
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mt-16 pt-12 border-t border-gray-200">
      <h2 className="text-[22px] md:text-[28px] font-bold text-text-primary mb-8">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col gap-4">
        {faqItems.map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-[15px] md:text-base font-semibold text-text-primary leading-snug">
                {item.q}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`flex-shrink-0 text-text-secondary transition-transform duration-200 ${
                  openIndex === i ? 'rotate-180' : ''
                }`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === i ? 'max-h-[500px] pb-5' : 'max-h-0'
              }`}
            >
              <p className="px-6 text-sm md:text-[15px] text-text-secondary leading-relaxed">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Main blog post component ── */
export default function LapsedPatientBlogPost() {
  const articleUrl =
    'https://www.a2v2.ai/blog/lapsed-patient-re-engagement-longevity-clinics'
  const articleTitle =
    'The Patients You Already Lost Are Your Biggest Revenue Opportunity'

  return (
    <>
      <ReadingProgress />

      {/* ── Article ── */}
      <div className="bg-background">
        <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-text-secondary">
            <Link href="/blog" className="hover:text-text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-text-primary">Best Practices</span>
          </div>

          {/* Header */}
          <header className="mb-10">
            <span className="inline-block rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold text-text-primary uppercase tracking-wide mb-4">
              Best Practices
            </span>
            <h1 className="text-[28px] md:text-[40px] font-bold text-text-primary leading-tight tracking-tight">
              The Patients You Already Lost Are Your Biggest Revenue Opportunity
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              You spent thousands to acquire them. They already trust your clinic. They already know your protocols. And right now, hundreds of them are sitting in your EHR doing absolutely nothing.
            </p>

            {/* Author row */}
            <div className="mt-6 flex items-center gap-3">
              <Image
                src="/icons/Solo-Logo-A2V2.svg"
                alt="A2V2"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
              />
              <span className="text-sm text-text-secondary">
                By The A2V2 Team · 11 min read · Mar 19, 2026
              </span>
            </div>

            {/* Share bar */}
            <ShareBar url={articleUrl} title={articleTitle} />
          </header>

          {/* Hero image */}
          <div className="w-full mb-12">
            <Image
              src="/images/Blog-Post5-Heroimage.png"
              alt="The Patients You Already Lost Are Your Biggest Revenue Opportunity"
              width={720}
              height={405}
              className="w-full aspect-[16/9] object-cover"
              priority
            />
          </div>

          {/* Body */}
          <article className="prose-blog">
            <p>
              Open your EHR right now and run a quick filter. Pull up every patient who hasn&apos;t had an appointment, a lab order, or any form of contact in the last 90 days.
            </p>

            <p>
              That list is probably longer than you expected.
            </p>

            <p>
              Now multiply it by $15,000. That&apos;s the industry average annual value of a longevity medicine patient, according to practice management data across the functional medicine and hormone optimization space.
            </p>

            <p>
              If you have 80 inactive patients on that list, you&apos;re looking at an estimated $1.2 million in annual revenue sitting dormant in your system. Not lost to a competitor. Not gone forever. Just... sitting there. Waiting for someone to reach out.
            </p>

            <p>
              Most clinics never do.
            </p>

            <p>
              Instead, they pour money into acquiring new patients. They run Facebook ads, sponsor local events, offer free consultations, and invest in SEO campaigns. Industry estimates suggest that acquiring a single new longevity patient costs between $500 and $2,000 when you factor in marketing spend, staff time, and the free or discounted initial consultation that many practices offer.
            </p>

            <p>
              Meanwhile, the patients who already walked through your door, already trusted you with their health, already started an NAD+ protocol or a hormone optimization program or a peptide therapy cycle, are sitting in a database that nobody is looking at.
            </p>

            <p>
              This is the re-engagement gap. And for most longevity clinics, it represents the single highest-ROI opportunity they&apos;re not pursuing.
            </p>

            <h2>They Didn&apos;t Leave. They Drifted.</h2>

            <p>
              Here is the most important thing to understand about lapsed patients in longevity medicine: the vast majority did not make a conscious decision to quit.
            </p>

            <p>
              They didn&apos;t call your office and say &ldquo;I&apos;m done.&rdquo; They didn&apos;t switch to a competitor. They didn&apos;t decide the protocols were ineffective. In most cases, what happened was far more mundane. Life got in the way.
            </p>

            <p>
              A work trip disrupted their supplement routine and they never got back on track. A busy month meant they postponed their LabCorp requisition &ldquo;until next week,&rdquo; and next week became next month. The initial energy boost from their first NAD+ infusion plateaued, and without anyone from your clinic reaching out to explain that plateaus are normal, doubt crept in. Their BPC-157 supply ran out and reordering felt like one more thing on an already full to-do list.
            </p>

            <p>
              Published adherence research consistently points to the same pattern. Patients who disengage from long-term treatment protocols rarely do so because of dissatisfaction. They disengage because of friction, ambiguity, and silence.
            </p>

            <p>
              This distinction matters enormously for re-engagement. A patient who actively decided to leave requires persuasion. A patient who drifted away requires a nudge. And nudges are cheap, simple, and remarkably effective when done right.
            </p>

            <p>
              <Link
                href="/blog/protocol-adherence-crisis-longevity-medicine"
                className="text-primary hover:underline font-medium"
              >
                Why Your NAD+ Patients Quit After 90 Days
              </Link>
            </p>

            <h2>The Math That Should Change Your Marketing Budget</h2>

            {/* Section image */}
            <div className="my-8">
              <Image
                src="/images/Blog-Post5-The Math That Should Change Your Marketing Budget.png"
                alt="The Math That Should Change Your Marketing Budget"
                width={720}
                height={405}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>

            <p>
              Let&apos;s walk through the economics of re-engagement versus acquisition.
            </p>

            {/* Stat callout box */}
            <div className="my-8 rounded-2xl bg-surface p-8 text-white">
              <p className="text-lg md:text-xl font-bold leading-snug">
                Based on industry estimates, acquiring a new longevity patient costs $500 to $2,000. Re-engaging a lapsed one costs a fraction of that.
              </p>
            </div>

            <p>
              A new patient requires awareness, trust-building, education, and conversion. Every one of those steps costs money and time.
            </p>

            <p>
              A lapsed patient has already cleared every one of those hurdles. They know your name. They&apos;ve met your staff. They understand what NAD+ therapy or testosterone replacement or peptide therapy involves because they&apos;ve already experienced it.
            </p>

            <p>
              Based on our retention modeling, consider a mid-sized longevity clinic with 200 total patients, 80 of whom have gone inactive in the past 6 to 12 months. Industry re-engagement benchmarks suggest that a well-executed win-back campaign can reactivate roughly 30% to 40% of lapsed patients.
            </p>

            <p>
              That&apos;s 24 to 32 patients. At an estimated average value of $15,000 per year, that&apos;s a projected $360,000 to $480,000 in recovered annual revenue. Compare that to acquiring the same number of new patients from scratch at $1,000 per acquisition — $24,000 to $32,000 in marketing spend alone.
            </p>

            <p>
              The return on re-engagement isn&apos;t marginally better than acquisition. It&apos;s an order of magnitude better.
            </p>

            <h2>Why Most Win-Back Attempts Fail</h2>

            <p>
              Some clinics do try to re-engage lapsed patients. Usually it looks like a front desk coordinator pulling a list, making phone calls, and leaving voicemails that go unreturned. Or a mass email blast saying &ldquo;We miss you!&rdquo;
            </p>

            <p>
              These efforts almost always underperform.
            </p>

            <p>
              <strong>Generic outreach feels like spam.</strong> A patient who was on a specific rapamycin cycling protocol does not want to receive the same &ldquo;we miss you&rdquo; email as a patient who came for a single consultation. When every lapsed patient gets the same message, none of them feel seen.
            </p>

            <p>
              <strong>Timing is everything, and manual outreach can&apos;t get it right.</strong> Published healthcare retention data suggests patients contacted within 30 to 45 days of last activity are significantly more responsive than those contacted at 90 or 120 days.
            </p>

            <p>
              <strong>Phone calls are high-effort, low-yield.</strong> People don&apos;t answer calls from numbers they don&apos;t recognize. A front desk coordinator spending 3 hours making calls might connect with 5 or 6 patients.
            </p>

            <p>
              <strong>There&apos;s no system to track what works.</strong> Without tracking and iteration, every re-engagement attempt is a shot in the dark.
            </p>

            <h2>What Effective Re-Engagement Actually Looks Like</h2>

            {/* Section image */}
            <div className="my-8">
              <Image
                src="/images/Blog-Post5-What Effective Re-Engagement Actually Looks Like.png"
                alt="What Effective Re-Engagement Actually Looks Like"
                width={720}
                height={405}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>

            <p>
              A2V2.ai is designed to treat re-engagement as a structured, data-driven, automated system.
            </p>

            <p>
              The platform is designed to detect inactivity early, typically within 30 to 45 days of a patient&apos;s last meaningful touchpoint. Rather than waiting for a staff member to notice, the system is designed to flag the patient automatically and initiate a tailored re-engagement sequence.
            </p>

            <p>
              <strong>Protocol-specific personalization</strong> is at the core. A patient who drifted from an NAD+ protocol receives a different message than one who completed a full HRT cycle but didn&apos;t schedule follow-up labs. The message isn&apos;t &ldquo;we miss you.&rdquo; It&apos;s &ldquo;we noticed you haven&apos;t completed your 90-day labs for your hormone panel.&rdquo;
            </p>

            <p>
              <strong>The tone is designed to be warm, not guilty.</strong> Effective re-engagement acknowledges the gap without judgment, normalizes the difficulty of maintaining protocols, and focuses on making the return frictionless.
            </p>

            <p>
              <strong>Multi-channel sequencing</strong> is designed to meet patients where they are — SMS, email, and patient portal outreach in a coordinated sequence, adjusting based on response patterns.
            </p>

            <p>
              <strong>Everything is designed to run within full HIPAA compliance.</strong> Every message encrypted, logged, and compliant. No PHI exposed to external systems.
            </p>

            <p>
              <strong>The system is designed to learn.</strong> Which messages get the highest response rates? What&apos;s the optimal number of touchpoints? Over time, the platform is designed to optimize based on real engagement data.
            </p>

            <p>
              <Link
                href="/blog/hipaa-compliant-ai-healthcare"
                className="text-primary hover:underline font-medium"
              >
                Your AI Is a HIPAA Violation Waiting to Happen
              </Link>
            </p>

            <h2>The Patients Worth Recovering First</h2>

            <p>
              Not every lapsed patient represents the same opportunity.
            </p>

            <p>
              <strong>High-protocol-value patients</strong> should be at the top. A patient midway through a six-month NAD+ series represents significantly more projected lifetime value than a single-consultation patient.
            </p>

            <p>
              <strong>Recently lapsed patients</strong> respond at higher rates. Published data shows recency is the strongest predictor of re-engagement success.
            </p>

            <p>
              <strong>Patients who showed early engagement signals</strong> before dropping off are strong candidates — they demonstrated commitment and likely need the smallest nudge.
            </p>

            <p>
              <strong>Patients on protocols requiring continuity</strong> benefit most. Hormone optimization, rapamycin cycling, senolytics, and peptide therapy all produce diminishing results when interrupted.
            </p>

            <p>
              <Link
                href="/blog/wearable-data-gap-longevity-clinics"
                className="text-primary hover:underline font-medium"
              >
                Your Patients Are Generating Health Data 24/7
              </Link>
            </p>

            <h2>A Re-Engagement Audit for Your Practice</h2>

            <div className="my-8 rounded-2xl border border-gray-200 p-8">
              <p className="text-base font-semibold text-text-primary mb-5">
                Five steps to quantify your re-engagement opportunity:
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  'Pull your inactive patient list (no activity in 60-120 days). Count them. Multiply by $15,000.',
                  'Segment by protocol type \u2014 NAD+, HRT, peptide therapy, rapamycin, senolytics.',
                  'Check your last outreach attempt \u2014 when was it? Was it generic?',
                  'Audit your compliance \u2014 are you reaching out through HIPAA-compliant channels?',
                  'Calculate your acquisition cost comparison \u2014 if it\u2019s north of $500, re-engagement math wins.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-md border-2 border-gray-300 flex items-center justify-center text-xs font-bold text-text-secondary">
                      {i + 1}
                    </span>
                    <span className="text-sm md:text-[15px] text-text-secondary leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              The clinics that build systematic re-engagement workflows today won&apos;t just recover revenue — they&apos;ll build a compounding advantage. Every patient you bring back is a patient your competitor doesn&apos;t get to acquire.
            </p>

            <p>
              <Link
                href="/blog/silent-revenue-killer-longevity-medicine"
                className="text-primary hover:underline font-medium"
              >
                The Silent Revenue Killer in Longevity Medicine
              </Link>
              {' · '}
              <Link
                href="/ai-for-longevity-clinics"
                className="text-primary hover:underline font-medium"
              >
                AI for Longevity Clinics
              </Link>
            </p>
          </article>

          {/* FAQ Section */}
          <FAQAccordion />

          {/* Bottom share bar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <ShareBar url={articleUrl} title={articleTitle} />
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <CtaBanner
          heading="Find Out How Much Dormant Revenue Is Sitting in Your EHR"
          subtext="Book a free 30-minute Patient Retention Audit. We'll help you estimate the value of your lapsed patient list, identify the highest-priority re-engagement opportunities, and model the projected revenue impact for your practice. No sales pitch. Just math."
        />

        {/* ── Related Posts ── */}
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x py-16 md:py-20">
          <h2 className="text-[22px] md:text-[28px] font-bold text-text-primary mb-8">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, i) => (
              <Link
                key={i}
                href={post.href}
                className="flex flex-col rounded-xl transition-transform duration-200 hover:scale-[1.02]"
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
                  <div className="w-full aspect-[16/9] bg-gray-200" />
                )}
                <h3 className="mt-4 text-sm font-bold text-text-primary leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {post.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-text-primary">
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
      </div>
    </>
  )
}
