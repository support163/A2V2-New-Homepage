'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRelatedPosts } from '@/lib/blog-posts'
import CtaBanner from '@/components/CtaBanner'

const CURRENT_HREF = '/blog/protocol-adherence-crisis-longevity-medicine'
const relatedPosts = getRelatedPosts(CURRENT_HREF)

const faqItems = [
  {
    q: 'What is the average protocol adherence rate in longevity medicine?',
    a: 'Only about 27% of longevity patients complete their full treatment protocols. The majority disengage within 90 days, with the steepest drop-off between days 30 and 60.',
  },
  {
    q: 'Why do patients stop their NAD+ or peptide therapy protocols?',
    a: 'The top reasons are: no visible progress feedback between appointments, supplement fatigue from managing 10+ compounds daily, missed lab appointments, lack of proactive communication during critical windows, and cost concerns that go unaddressed.',
  },
  {
    q: 'How can clinics improve protocol adherence?',
    a: 'Implement automated check-ins at critical windows, real-time compliance tracking, biomarker trend analysis, wearable device integration, and predictive alerts. Platforms like A2V2.ai automate all of these while maintaining HIPAA compliance.',
  },
  {
    q: 'What does protocol adherence tracking software do?',
    a: 'It monitors patient compliance in real-time across supplement schedules, lab appointments, wearable data, and treatment milestones. It detects early warning signs and triggers personalized re-engagement sequences.',
  },
  {
    q: 'How much revenue do clinics lose from poor adherence?',
    a: 'A 200-patient clinic with 73% drop-off loses approximately $2.19M annually. Improving adherence by 20 percentage points can recover over $1M. Clinics using A2V2.ai report $420K-$850K recovered in year one.',
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
export default function ProtocolAdherenceBlogPost() {
  const articleUrl =
    'https://www.a2v2.ai/blog/protocol-adherence-crisis-longevity-medicine'
  const articleTitle =
    'Why Your NAD+ Patients Quit After 90 Days — The Protocol Adherence Crisis No One Is Tracking'

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
              Why Your NAD+ Patients Quit After 90 Days — The Protocol Adherence Crisis No One Is Tracking
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              The problem isn&apos;t your protocols. It&apos;s the 89 days between appointments when no one is paying attention.
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
                By The A2V2 Team · 12 min read · Mar 16, 2026
              </span>
            </div>

            {/* Share bar */}
            <ShareBar url={articleUrl} title={articleTitle} />
          </header>

          {/* Hero image */}
          <div className="w-full mb-12">
            <Image
              src="/images/Blog-Post3-MainHeroImage.png"
              alt="Why Your NAD+ Patients Quit After 90 Days"
              width={720}
              height={405}
              className="w-full rounded-2xl object-cover"
              priority
            />
          </div>

          {/* Body */}
          <article className="prose-blog">
            <p>
              Picture this. A new patient walks into your clinic. They&apos;ve done the research. They&apos;re excited about NAD+ therapy. They&apos;ve committed to a six-month protocol that includes IV infusions, a stack of supplements, quarterly labs, and follow-up hormone panels. They leave your office feeling like they&apos;re finally taking control of their health.
            </p>

            <p>
              <strong>Day 7:</strong> They complete their first at-home supplement routine perfectly.
            </p>
            <p>
              <strong>Day 14:</strong> They miss one dose but get back on track.
            </p>
            <p>
              <strong>Day 30:</strong> The initial energy boost from their first NAD+ infusion starts to plateau. They wonder if it&apos;s still working. They don&apos;t call your office. They just... wonder.
            </p>
            <p>
              <strong>Day 45:</strong> The supplement bottles pile up on the counter. They forget whether they took their BPC-157 this morning. Their LabCorp requisition sits unopened on the kitchen table.
            </p>
            <p>
              <strong>Day 60:</strong> They skip their second infusion appointment. Not intentionally. They just didn&apos;t reschedule after a busy week.
            </p>
            <p>
              <strong>Day 90:</strong> Gone. No call, no cancellation, no explanation. Your front desk doesn&apos;t notice for another three weeks.
            </p>

            <p>
              This isn&apos;t a hypothetical. This is the most common patient journey in longevity medicine. And it&apos;s happening inside your clinic right now.
            </p>

            {/* Stat callout box */}
            <div className="my-8 rounded-2xl bg-surface px-8 py-8 text-center">
              <p className="text-[28px] md:text-[36px] font-bold text-white leading-tight">
                Only 27% of longevity patients complete their full treatment protocol.
              </p>
              <p className="mt-2 text-sm md:text-base text-gray-400 leading-relaxed max-w-[540px] mx-auto">
                The other 73% disengage within the first six months — most of them between days 30 and 90.
              </p>
            </div>

            <p>
              That means for every 10 patients you onboard onto a NAD+ program, a peptide therapy cycle, a hormone optimization plan, or a rapamycin regimen, seven of them will quietly abandon treatment before they ever reach the outcomes you designed the protocol to deliver.
            </p>
            <p>
              This isn&apos;t a clinical failure. It&apos;s an engagement failure. And it&apos;s the single most expensive problem in longevity medicine.
            </p>

            <h2>The Five Stages of Protocol Collapse</h2>
            <p>
              After studying engagement patterns across longevity, HRT, and functional medicine practices, we&apos;ve identified five predictable stages that nearly every disengaging patient moves through. The window to intervene is narrow — and most clinics miss it entirely.
            </p>

            {/* Five Stages infographic */}
            <div className="my-8">
              <Image
                src="/images/Blog-Post3-The Five Stages of Protocol Collapse.png"
                alt="The Five Stages of Protocol Collapse"
                width={720}
                height={405}
                className="w-full rounded-2xl object-cover"
              />
            </div>

            <p>
              <strong>Stage 1 — The Honeymoon (Days 1–14).</strong> Everything is new. The patient is motivated, compliant, and optimistic. Supplement adherence is near-perfect. They&apos;re reading about their protocol, texting friends about it, maybe even posting on social media. This stage gives clinics a false sense of security.
            </p>
            <p>
              <strong>Stage 2 — The Plateau (Days 15–30).</strong> The initial burst of enthusiasm fades. The patient&apos;s body is adapting but visible results are subtle. They start asking themselves whether this is really working. If no one from your clinic reaches out during this window, doubt starts to compound. This is the first critical intervention point — and it&apos;s the one most clinics miss completely.
            </p>
            <p>
              <strong>Stage 3 — The Drift (Days 31–60).</strong> Supplement doses get skipped. Not all of them, just one here and there. A patient managing Thymosin Alpha-1, DHEA, a multivitamin stack, and a testosterone cream starts dropping the &ldquo;less important&rdquo; ones first. Lab appointments get postponed. Wearable devices go uncharged. The patient isn&apos;t unhappy — they&apos;re just drifting.
            </p>
            <p>
              <strong>Stage 4 — The Silent Exit (Days 61–90).</strong> The patient misses a scheduled infusion or follow-up. They don&apos;t call to reschedule. Your office might leave a voicemail that goes unreturned. Internally, the patient has already decided to &ldquo;take a break&rdquo; — which, in longevity medicine, almost always means permanently.
            </p>
            <p>
              <strong>Stage 5 — The Ghost (Days 90+).</strong> The patient is gone. They haven&apos;t canceled — they&apos;ve just stopped. Their file sits dormant in your EHR. If someone on your team notices three months later and calls, the patient will say something polite like &ldquo;I&apos;ve been meaning to come back in&rdquo; — and never does.
            </p>

            <p>
              The entire collapse takes roughly 90 days. But the real damage happens in Stage 2 and Stage 3, between days 15 and 60. That&apos;s the window where a single well-timed intervention can reset the patient&apos;s commitment.
            </p>

            <p>
              The financial impact of this collapse is staggering.{' '}
              <Link
                href="/blog/silent-revenue-killer-longevity-medicine"
                className="text-primary hover:underline font-medium"
              >
                The Silent Revenue Killer in Longevity Medicine
              </Link>
            </p>

            <h2>Why Clinics Can&apos;t See It Happening</h2>
            <p>
              The protocol adherence crisis is invisible by design. Here&apos;s why.
            </p>
            <p>
              <strong>Your EHR shows appointments, not behavior.</strong> Electronic health records track what happens inside your clinic — visits, lab orders, prescriptions. They don&apos;t track what happens between visits. They can&apos;t tell you that a patient hasn&apos;t taken their BPC-157 in two weeks, that their continuous glucose monitor has been disconnected for 10 days, or that their Oura Ring sleep scores are declining.
            </p>
            <p>
              <strong>Manual check-ins can&apos;t scale.</strong> Even the most dedicated front-desk team can realistically follow up with 20 to 30 patients per week. A clinic with 200 active patients on complex protocols would need to make hundreds of personalized touches per month. No human team can do this consistently.
            </p>
            <p>
              <strong>Generic CRMs don&apos;t understand protocols.</strong> Salesforce can tell you a patient hasn&apos;t responded to an email. It can&apos;t tell you that a patient on week 6 of a rapamycin cycling protocol is at the exact point where adherence historically drops 40%.
            </p>
            <p>
              The result is a massive blind spot. Between the day a patient leaves your office and the day they&apos;re scheduled to return, you have almost zero insight into whether they&apos;re following the protocol you designed.
            </p>

            <h2>What Protocol-Aware AI Changes</h2>
            <p>
              The solution isn&apos;t more staff. It isn&apos;t a better CRM. It&apos;s AI that actually understands longevity medicine protocols.
            </p>
            <p>
              A2V2.ai was built specifically for this problem. The platform monitors patient behavior across every touchpoint — supplement compliance, lab completion, appointment attendance, wearable device data from Oura Ring, Whoop, Apple Health, Fitbit, Garmin, and CGM devices — and maps it against the specific protocol each patient is following.
            </p>
            <p>
              <strong>Automated check-ins at critical windows</strong> reach patients at day 7, 14, 30, 60, 90, and 180. These aren&apos;t generic messages. A patient on a peptide therapy cycle gets communication specific to their protocol.
            </p>
            <p>
              <strong>Real-time adherence dashboards</strong> give your clinical team a single view of every patient&apos;s compliance status. At-risk patients are surfaced automatically so your team can intervene during Stage 2 or Stage 3.
            </p>
            <p>
              <strong>Biomarker trend analysis</strong> turns invisible progress into visible motivation. A2V2.ai pulls lab data from Quest, LabCorp, and specialized longevity labs and shows patients how their biomarkers are trending over time.
            </p>
            <p>
              <strong>Predictive re-engagement</strong> catches patients before they ghost — identifying early disengagement signals and triggering personalized win-back sequences.
            </p>

            <p>
              All of this runs within a fully HIPAA-compliant environment.{' '}
              <Link
                href="/blog/hipaa-compliant-ai-healthcare"
                className="text-primary hover:underline font-medium"
              >
                Your AI Is a HIPAA Violation Waiting to Happen
              </Link>
            </p>

            <h2>The Protocols That Benefit Most</h2>
            <p>
              Not every treatment carries the same adherence risk. The most vulnerable protocols are complex, long-duration, and require the most patient initiative between appointments.
            </p>

            <ul className="my-6 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-text-primary" />
                <div>
                  <strong>NAD+ IV therapy protocols</strong> — spaced out infusions with at-home supplement stacks create long gaps where patients drift
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-text-primary" />
                <div>
                  <strong>Peptide therapy sequences (BPC-157, TB-500, Thymosin Alpha-1)</strong> — precise dosing schedules that are easy to fall behind on
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-text-primary" />
                <div>
                  <strong>HRT programs (testosterone, estrogen, progesterone, DHEA, thyroid)</strong> — ongoing monitoring where patients lose motivation once initial symptoms improve
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-text-primary" />
                <div>
                  <strong>Rapamycin cycling</strong> — counterintuitive cycling schedules that confuse patients without regular guidance
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-text-primary" />
                <div>
                  <strong>Senolytics therapy, metformin, GLP-1 agonist programs</strong> — long timelines where results are gradual and invisible without biomarker tracking
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-text-primary" />
                <div>
                  <strong>Complex supplement stacks (10+ compounds)</strong> — where drift hits hardest because patients self-prioritize and drop &ldquo;less important&rdquo; supplements
                </div>
              </li>
            </ul>

            <p>
              See how A2V2.ai supports{' '}
              <Link
                href="/ai-for-hrt-clinics"
                className="text-primary hover:underline font-medium"
              >
                HRT clinics
              </Link>
              {' '}and{' '}
              <Link
                href="/ai-for-functional-medicine"
                className="text-primary hover:underline font-medium"
              >
                functional medicine practices
              </Link>
              .
            </p>

            <h2>What Results Look Like</h2>

            {/* Before / After comparison */}
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Before */}
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  Before
                </h3>
                <ul className="flex flex-col gap-3 text-sm text-text-secondary leading-relaxed">
                  <li>73% protocol drop-off rate within 6 months</li>
                  <li>No visibility into patient behavior between visits</li>
                  <li>Staff spending 15+ hours/week on manual follow-ups</li>
                  <li>$2.19M revenue loss annually (200-patient clinic)</li>
                  <li>At-risk patients discovered weeks after they&apos;ve left</li>
                </ul>
              </div>

              {/* After */}
              <div className="rounded-2xl border border-gray-200 p-6">
                <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                  After
                </h3>
                <ul className="flex flex-col gap-3 text-sm text-text-secondary leading-relaxed">
                  <li>35% drop-off rate — cut in half</li>
                  <li>Real-time compliance monitoring across all protocols</li>
                  <li>90% reduction in manual follow-up time</li>
                  <li>$850K+ recovered revenue within 12 months</li>
                  <li>67% reduction in appointment no-shows</li>
                  <li>40% increase in protocol completion rates</li>
                  <li>Zero additional staff required</li>
                </ul>
              </div>
            </div>

            <p>
              One HRT practice that implemented A2V2.ai doubled their patient retention rate within six months and generated $420K in additional revenue from patients who would have otherwise disappeared after their initial protocol.
            </p>

            <p>
              See how A2V2.ai helps{' '}
              <Link
                href="/ai-for-longevity-clinics"
                className="text-primary hover:underline font-medium"
              >
                longevity clinics
              </Link>
              {' '}retain more patients and recover lost revenue.
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
          heading="See Exactly Where Your Patients Are Dropping Off"
          subtext="Book a free 30-minute Patient Retention Audit. We'll map your protocol adherence gaps, identify the stages where your patients disengage, and show you exactly how much revenue is walking out the door. No sales pitch — just data."
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
                    height={450}
                    className="w-full aspect-[4/3] rounded-xl object-cover"
                  />
                ) : (
                  <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl" />
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
