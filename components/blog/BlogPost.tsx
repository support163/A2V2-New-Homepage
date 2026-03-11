'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DEMO_BOOKING_URL } from '@/lib/constants'

const CALENDLY_LINK = DEMO_BOOKING_URL

const relatedPosts = [
  {
    title: 'From Chatbots to Smart AI Agents: Introducing the New A2V2 Platform',
    description: 'The new A2V2 platform: AI agents built to elevate customer experiences.',
    href: '/blog',
  },
  {
    title: 'From Chatbots to Smart AI Agents: Introducing the New A2V2 Platform',
    description: 'The new A2V2 platform: AI agents built to elevate customer experiences.',
    href: '/blog',
  },
  {
    title: 'From Chatbots to Smart AI Agents: Introducing the New A2V2 Platform',
    description: 'The new A2V2 platform: AI agents built to elevate customer experiences.',
    href: '/blog',
  },
]

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

export default function BlogPost() {
  const articleUrl =
    'https://www.a2v2.ai/blog/silent-revenue-killer-longevity-medicine'
  const articleTitle =
    'The Silent Revenue Killer in Longevity Medicine—and What\'s Finally Fixing It'

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
              The Silent Revenue Killer in Longevity Medicine—and What&apos;s Finally Fixing It
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Most longevity clinics don&apos;t have a patient acquisition problem. They have a patient disappearance problem.
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
                By The A2V2 Team · 8 min read · Mar 11, 2026
              </span>
            </div>

            {/* Share bar */}
            <ShareBar url={articleUrl} title={articleTitle} />
          </header>

          {/* Hero placeholder image */}
          <div className="w-full aspect-[16/9] bg-gray-200 rounded-2xl mb-12" />

          {/* Body */}
          <article className="prose-blog">
            <p>
              You invested in the best protocols. NAD+ drips, cutting-edge peptide therapies, biomarker-driven hormone optimization. Your patients walk out of your clinic feeling better than they have in years. And then… they vanish.
            </p>
            <p>
              No call. No rescheduled appointment. No refill. Just silence.
            </p>
            <p>
              If this sounds familiar, you&apos;re not alone. It&apos;s the most expensive problem in longevity medicine—and almost nobody is talking about it.
            </p>
            <p>
              That number should stop every clinic owner in their tracks. Nearly three out of four patients who trust you with their health, who invest thousands in protocols like BPC-157, TB-500, rapamycin, and testosterone replacement, will quietly walk away before they reach the outcomes they came for.
            </p>
            <p>
              The financial impact is staggering. With the average longevity patient worth $8,000 to $24,000 per year, a 200-patient clinic losing 73% retention can be leaving over $2 million in annual revenue on the table. Not because the treatments don&apos;t work—but because the follow-through breaks down.
            </p>

            <h2>Why Patients Disappear</h2>
            <p>
              Patient drop-off in longevity medicine is a fundamentally different challenge than in traditional healthcare. A patient with strep throat finishes their antibiotics and moves on. But a patient on an NAD+ protocol, a peptide therapy cycle, or a comprehensive hormone optimization plan is on a journey—one that requires months (sometimes years) of consistent engagement.
            </p>
            <p>
              The drop-off isn&apos;t usually dramatic. It starts with a missed supplement dose, then a skipped lab appointment, then a &ldquo;maybe next month&rdquo; that becomes never. By the time your front desk notices, the patient has mentally moved on.
            </p>
            <p>Here&apos;s what&apos;s really happening behind the scenes:</p>
            <p>
              <strong>The engagement gap is real.</strong> Between appointments, patients are on their own. There&apos;s no check-in at day 7 when adherence starts slipping. No nudge at day 30 when the initial excitement fades. No re-engagement at day 90 when they&apos;re questioning whether the protocols are &ldquo;really working.&rdquo;
            </p>
            <p>
              <strong>Manual follow-ups don&apos;t scale.</strong> Your staff is already stretched thin. Calling 200 patients individually, tracking who needs a lab reorder, monitoring who missed their peptide cycle—it&apos;s humanly impossible to do consistently. Things fall through the cracks, and every crack is a patient walking away.
            </p>
            <p>
              <strong>Generic tools make it worse.</strong> Traditional CRMs like Salesforce or HubSpot weren&apos;t built for longevity medicine. They don&apos;t understand NAD+ protocol timelines. They can&apos;t track biomarker trends. They have no concept of peptide therapy sequencing. Trying to force these tools into a longevity workflow creates more administrative burden, not less.
            </p>

            <h2>The Compliance Minefield</h2>
            <p>
              Some clinics have tried to solve this with off-the-shelf AI tools—using ChatGPT or similar platforms to draft patient communications or analyze engagement patterns. The problem? These tools are <strong>not HIPAA-compliant</strong> for patient data management.
            </p>
            <p>
              Every time a staff member pastes patient information into a general-purpose AI tool, they&apos;re creating legal exposure. HIPAA violations can carry fines up to $1.5 million per incident, not to mention the risk to your medical license, your reputation, and the trust your patients placed in you.
            </p>
            <p>
              Longevity medicine sits at a unique intersection: the protocols are complex, the data is sensitive, and the patient relationship is long-term. Solving the retention problem requires a tool that understands all three.
            </p>

            <h2>What a Real Solution Looks Like</h2>
            <p>
              At A2V2.ai, we built something different. Not a repurposed CRM. Not a general-purpose chatbot. A patient engagement platform designed from the ground up for the exact way longevity clinics operate.
            </p>
            <p>
              That philosophy is built into everything we do. Our platform monitors patient behavior in real-time—supplement adherence, lab appointment completion, communication responsiveness, wearable device data—and detects the early signals of disengagement before a patient goes quiet.
            </p>

            <h2>Engagement That Understands Your Protocols</h2>
            <p>
              A2V2.ai doesn&apos;t send generic &ldquo;time for your checkup!&rdquo; reminders. It sends protocol-specific communications tailored to where each patient is in their treatment journey. A patient on week 3 of a peptide therapy cycle gets a different message than someone due for their 90-day NAD+ booster. The tone, timing, and content all adapt automatically.
            </p>

            <h2>Compliance Built In, Not Bolted On</h2>
            <p>
              Every piece of data that flows through A2V2.ai is protected by 256-bit AES encryption at rest and TLS 1.3 in transit. Patient information never leaves your secure environment. It is never used to train external AI models. We sign a Business Associate Agreement with every client, and we undergo regular third-party security audits. HIPAA compliance isn&apos;t an add-on—it&apos;s the foundation.
            </p>

            <h2>Integration Without Disruption</h2>
            <p>
              One of the biggest barriers to adopting new technology in a clinical setting is the fear of ripping out existing systems. A2V2.ai sits on top of what you already have. It connects to your EHR/EMR, your lab partners like Quest and LabCorp, your wearable device ecosystem, and your payment processors. No data migration. No system overhaul. Most clinics go live in under two weeks.
            </p>

            <h2>The Bottom Line</h2>
            <p>
              Longevity medicine is built on long-term relationships. The protocols work—but only when patients stay engaged long enough to experience the results. Every patient who quietly drops off at month three is a failed outcome and lost revenue, regardless of how excellent your clinical work is.
            </p>
            <p>
              The clinics that will thrive in the next decade aren&apos;t necessarily the ones with the most advanced protocols. They&apos;re the ones that solve the engagement problem. The ones that keep patients connected, informed, and on track between appointments. The ones that detect disengagement before it becomes disappearance.
            </p>
            <p>
              That&apos;s the problem A2V2.ai was built to solve. And for the clinics already using it, the results speak for themselves.
            </p>
          </article>

          {/* Bottom share bar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <ShareBar url={articleUrl} title={articleTitle} />
          </div>
        </div>

        {/* ── CTA Banner ── */}
        <div className="bg-background py-8 md:py-section-y">
          <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
            <div className="relative rounded-[20px] bg-primary overflow-hidden flex flex-col md:flex-row md:items-center md:justify-between px-6 py-6 md:px-[96px] md:py-[24px] md:h-[460px] gap-8 md:gap-2">
              {/* Background texture */}
              <Image
                src="/images/cta-background.png"
                alt=""
                fill
                className="object-cover object-center opacity-20 pointer-events-none select-none"
              />
              {/* Left — text + CTA */}
              <div className="relative z-10 flex flex-col items-start max-w-[480px] md:min-w-[50%]">
                <h2 className="text-[24px] md:text-h2 font-bold text-white leading-tight">
                  Find Out What Patient Drop-Off Is Really Costing Your Clinic
                </h2>
                <p className="mt-4 text-btn text-white/70 leading-[22px]">
                  Book a free 30-minute Patient Retention Audit. No sales pitch—just data, insights, and a custom plan for your practice.
                </p>
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 md:mt-8 bg-white text-surface text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-gray-100 transition-colors"
                >
                  Book Your Free Audit →
                </a>
              </div>
              {/* Right — decorative illustration */}
              <div className="hidden md:flex relative z-0 flex-shrink-0 items-center justify-end md:self-stretch overflow-hidden">
                <Image
                  src="/images/cta-decoration.png"
                  alt=""
                  width={400}
                  height={412}
                  className="w-full max-w-[320px] md:h-full md:w-auto md:max-w-none object-contain object-center md:object-right"
                />
              </div>
            </div>
          </div>
        </div>

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
                <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl" />
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
