'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRelatedPosts } from '@/lib/blog-posts'
import CtaBanner from '@/components/CtaBanner'

const CURRENT_HREF = '/blog/longevity-clinic-staff-burnout-automation'
const relatedPosts = getRelatedPosts(CURRENT_HREF)

const faqItems = [
  {
    q: 'How much time do longevity clinic staff spend on manual follow-ups?',
    a: 'Industry estimates suggest 15 to 25 hours per week across appointment reminders, lab follow-ups, supplement coordination, protocol check-ins, and no-show outreach. For clinics with 200+ active patients on complex protocols, the burden often exceeds what a small team can handle consistently.',
  },
  {
    q: 'Can longevity clinics scale without hiring more staff?',
    a: 'Yes. The bottleneck is usually administrative capacity, not clinical. Automated platforms like A2V2.ai are designed to handle protocol-specific follow-ups, reminders, lab tracking, and re-engagement without additional staff. Industry benchmarks suggest up to 90% reduction in manual follow-up time.',
  },
  {
    q: 'What communication tasks can be automated?',
    a: 'Appointment reminders, no-show follow-ups, lab tracking, supplement refill coordination, protocol milestone check-ins, birthday messages, lapsed patient re-engagement, wearable data alerts, and biomarker notifications. A2V2.ai is designed to handle all of these within HIPAA compliance.',
  },
  {
    q: 'How does staff burnout affect patient retention?',
    a: 'Overwhelmed teams cannot maintain consistent personalized follow-up. Proactive tasks like check-ins, re-engagement, and wearable data review are dropped first. Published research shows communication gaps from capacity limitations are a leading driver of patient disengagement.',
  },
  {
    q: 'What is the cost of hiring versus automating?',
    a: 'A full-time coordinator costs $50,000-$75,000/year with benefits and overhead, with capacity limited to about 50 patient touches per week. Automated platforms are designed to handle far greater volume at lower cost with higher consistency.',
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
export default function StaffBurnoutBlogPost() {
  const articleUrl =
    'https://www.a2v2.ai/blog/longevity-clinic-staff-burnout-automation'
  const articleTitle =
    'Your Front Desk Is Doing the Work of Five People and Patients Are Still Falling Through the Cracks'

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
            <span className="text-text-primary">Quick Guides</span>
          </div>

          {/* Header */}
          <header className="mb-10">
            <span className="inline-block rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold text-text-primary uppercase tracking-wide mb-4">
              Quick Guides
            </span>
            <h1 className="text-[28px] md:text-[40px] font-bold text-text-primary leading-tight tracking-tight">
              Your Front Desk Is Doing the Work of Five People and Patients Are Still Falling Through the Cracks
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              The problem is not your team. They are working harder than ever. The problem is that the system they are working inside was never designed for the complexity of longevity medicine.
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
                By The A2V2 Team · 12 min read · Mar 20, 2026
              </span>
            </div>

            {/* Share bar */}
            <ShareBar url={articleUrl} title={articleTitle} />
          </header>

          {/* Hero image */}
          <div className="w-full mb-12">
            <Image
              src="/images/Blog-Post6-Heroimage.png"
              alt="Your Front Desk Is Doing the Work of Five People and Patients Are Still Falling Through the Cracks"
              width={720}
              height={405}
              className="w-full aspect-[16/9] object-cover"
              priority
            />
          </div>

          {/* Body */}
          <article className="prose-blog">
            <p>
              Walk into most longevity clinics at 2 PM on a Tuesday and you will find the same scene playing out.
            </p>

            <p>
              The front desk coordinator has three browser tabs open: the EHR, the scheduling system, and a spreadsheet she built herself to track which patients need follow-up calls this week. She is on hold with LabCorp trying to track down a missing requisition for a patient whose 90-day hormone panel was due two weeks ago. Her phone is buzzing with a text from a patient asking whether they should take their BPC-157 with or without food. There are 14 voicemails from yesterday she has not had time to return.
            </p>

            <p>
              Meanwhile, the practice manager is trying to figure out why six patients missed their appointments last week and nobody followed up. The physician just realized that a TRT patient who was supposed to get labs drawn four weeks ago never did.
            </p>

            <p>
              Everyone is busy. Everyone is doing their best. And patients are still disappearing.
            </p>

            <p>
              This is not a people problem. This is a systems problem.
            </p>

            {/* Stat callout box */}
            <div className="my-8 rounded-2xl bg-surface p-8 text-white">
              <p className="text-lg md:text-xl font-bold leading-snug">
                Industry estimates suggest that clinical staff at longevity and functional medicine practices spend 15 to 25 hours per week on manual patient communication tasks. That is the equivalent of a half-time employee doing nothing but making calls, sending reminders, and chasing down follow-ups.
              </p>
            </div>

            <h2>The Hidden Workload of Longevity Medicine</h2>

            <p>
              A primary care office managing acute conditions has a relatively straightforward communication workflow. Longevity medicine is nothing like this.
            </p>

            <p>
              A single patient on a comprehensive longevity protocol might require 8 to 12 touchpoints per quarter: day-7 check-in after NAD+ infusion, day-14 supplement adherence confirmation, day-30 lab reminder, lab results follow-up, day-60 milestone message, day-90 appointment reminder, birthday and wellness messages, and re-engagement sequences if they go quiet.
            </p>

            <p>
              For a clinic with 200 active patients, that is roughly 1,600 to 2,400 individual communication events every three months. Every one needs to be personalized because a peptide therapy patient needs different messaging than a rapamycin patient or a complex HRT patient.
            </p>

            <p>
              No spreadsheet can manage this. No front desk team of two or three people can execute this consistently.
            </p>

            <p>
              <Link
                href="/blog/protocol-adherence-crisis-longevity-medicine"
                className="text-primary hover:underline font-medium"
              >
                Why Your NAD+ Patients Quit After 90 Days
              </Link>
            </p>

            <h2>Where the Cracks Actually Appear</h2>

            {/* Section image */}
            <div className="my-8">
              <Image
                src="/images/Blog-Post6-Where the Cracks Actually Appear.png"
                alt="Where the Cracks Actually Appear"
                width={720}
                height={405}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>

            <p>
              The follow-up tasks that get dropped are predictable.
            </p>

            <p>
              <strong>Lab follow-ups are the most common casualty.</strong> A patient gets a lab requisition. They are supposed to go to LabCorp or Quest within two weeks. Many don&apos;t. Unless someone manually tracks every outstanding requisition, those labs simply do not happen.
            </p>

            <p>
              <strong>No-show recovery falls apart after the first attempt.</strong> When a patient misses an appointment, the front desk might call once. If no answer, that&apos;s usually the end of it. No second attempt, no text follow-up, no automated rebooking link.
            </p>

            <p>
              <strong>Supplement adherence goes completely unmonitored.</strong> A patient on a 12-supplement stack is expected to manage all of it on their own. Nobody checks. Nobody asks.
            </p>

            <p>
              <strong>Wearable data sits untouched.</strong> Patients with Oura Rings, Whoop bands, and CGMs generate clinically relevant data daily. No one has the bandwidth to look at it.
            </p>

            <p>
              <strong>Re-engagement outreach is the last priority.</strong> When the front desk is behind on today&apos;s tasks, reaching out to patients who went inactive two months ago never makes the list.
            </p>

            <p>
              <Link
                href="/blog/lapsed-patient-re-engagement-longevity-clinics"
                className="text-primary hover:underline font-medium"
              >
                The Patients You Already Lost Are Your Biggest Revenue Opportunity
              </Link>
            </p>

            <h2>The Hiring Trap</h2>

            <p>
              The instinctive response to an overwhelmed team is to hire. But hiring does not solve a systems problem.
            </p>

            {/* Stat callout box */}
            <div className="my-8 rounded-2xl bg-surface p-8 text-white">
              <p className="text-lg md:text-xl font-bold leading-snug">
                Based on healthcare staffing data, a single full-time coordinator costs $50,000 to $75,000 per year when you factor in benefits and overhead. Even then, manual capacity tops out at roughly 50 meaningful patient touches per week.
              </p>
            </div>

            <p>
              Even with an additional hire, the fundamental constraints remain. You would need three or four additional staff members to cover every touchpoint a 200-patient practice requires. At $150,000 to $300,000 per year, you still have consistency problems because humans get sick, take vacations, and cannot remember protocol details of 200 individual patients.
            </p>

            <h2>What Automation Actually Replaces (and What It Does Not)</h2>

            {/* Section image */}
            <div className="my-8">
              <Image
                src="/images/Blog-Post6-What Automation Actually Replaces.png"
                alt="What Automation Actually Replaces"
                width={720}
                height={405}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>

            <p>
              Automation is not designed to replace human connection. It is designed to replace the high-volume, repetitive tasks so your team can focus on interactions that require a human touch.
            </p>

            <p>
              <strong>Automation is designed to handle:</strong> appointment reminders and no-show follow-ups, lab requisition tracking and reminders, protocol milestone check-ins (day 7, 30, 90, 180), supplement refill coordination, re-engagement sequences for lapsed patients, wearable data monitoring and alerts.
            </p>

            <p>
              <strong>Your staff stays focused on:</strong> answering complex clinical questions, building rapport during in-office visits, having nuanced conversations about treatment expectations, supporting patients through difficult moments.
            </p>

            <p>
              Automation does not replace your team. It is designed to remove the invisible weight that is burning them out.
            </p>

            <p>
              <Link
                href="/blog/wearable-data-gap-longevity-clinics"
                className="text-primary hover:underline font-medium"
              >
                Your Patients Are Generating Health Data 24/7
              </Link>
            </p>

            <h2>The Compliance Layer Matters Here Too</h2>

            <p>
              When clinics improvise with tools not built for healthcare, they create compliance problems. A coordinator texting from a personal phone, a manager using Mailchimp for lab follow-ups, a staff member pasting patient details into ChatGPT — every one creates a HIPAA gap.
            </p>

            <p>
              A2V2.ai is designed to solve the operational and compliance problems simultaneously. Every automated message operates within a fully HIPAA-compliant environment with encryption, BAA, role-based access controls, and audit logging.
            </p>

            <p>
              <Link
                href="/blog/hipaa-compliant-ai-healthcare"
                className="text-primary hover:underline font-medium"
              >
                Your AI Is a HIPAA Violation Waiting to Happen
              </Link>
            </p>

            <h2>What This Looks Like in Practice</h2>

            {/* Before / After comparison */}
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Before */}
              <div className="rounded-2xl border border-gray-200 p-6">
                <p className="text-sm font-bold text-text-primary uppercase tracking-wide mb-4">
                  Before — Current State
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    'Staff spending 15-25 hours/week on manual follow-ups',
                    'Lab follow-up completion estimated at 60-70%',
                    'No-show rate estimated at 20-30%',
                    'Re-engagement happening sporadically if at all',
                    'Patient drop-off estimated at 73% within 6 months (industry data)',
                    'Staff burnout from repetitive workload',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* After */}
              <div className="rounded-2xl border border-gray-200 p-6">
                <p className="text-sm font-bold text-primary uppercase tracking-wide mb-4">
                  Projected After — With A2V2.ai
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    'Manual follow-up time reduced by an estimated 90%',
                    'Lab follow-up completion projected to improve significantly',
                    'No-show rates projected to decrease through multi-channel reminders',
                    'Automated re-engagement designed to run continuously',
                    'Protocol adherence projected to improve through milestone check-ins',
                    'Staff freed to focus on high-value patient interactions',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p>
              Based on our retention modeling, the projected revenue impact of reducing manual follow-up time by 90% and improving protocol adherence is significant. The platform is designed to pay for itself by letting your existing staff operate at a higher capacity — not by replacing them, but by removing the repetitive workload that prevents them from doing what they do best.
            </p>

            <p>
              <Link
                href="/blog/silent-revenue-killer-longevity-medicine"
                className="text-primary hover:underline font-medium"
              >
                The Silent Revenue Killer in Longevity Medicine
              </Link>
            </p>

            <h2>An Operations Audit for Your Clinic</h2>

            <div className="my-8 rounded-2xl border border-gray-200 p-8">
              <p className="text-base font-semibold text-text-primary mb-5">
                Five questions to assess your operational capacity:
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  'How many hours per week does your team spend on follow-up calls, texts, and emails?',
                  'Which tasks get dropped first when the day gets busy?',
                  'How do you currently track which patients need follow-ups?',
                  'Have you ever used personal phones, standard email tools, or general-purpose AI for patient communication?',
                  'If you added 50 new patients next month, could your current team handle it?',
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
              <Link
                href="/ai-for-longevity-clinics"
                className="text-primary hover:underline font-medium"
              >
                AI for Longevity Clinics
              </Link>
              {' · '}
              <Link
                href="/ai-for-hrt-clinics"
                className="text-primary hover:underline font-medium"
              >
                AI for HRT Clinics
              </Link>
              {' · '}
              <Link
                href="/ai-for-functional-medicine"
                className="text-primary hover:underline font-medium"
              >
                AI for Functional Medicine
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
          heading="Find Out What Your Team Could Accomplish if the Busywork Disappeared"
          subtext="Book a free 30-minute Patient Retention Audit. We will walk through your current operational workflow, identify the tasks consuming the most staff time, and model the projected impact of automation on your practice. No sales pitch. Just a clear picture of what is possible."
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
