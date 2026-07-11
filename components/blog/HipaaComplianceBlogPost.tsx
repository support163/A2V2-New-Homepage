'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRelatedPosts } from '@/lib/blog-posts'
import CtaBanner from '@/components/CtaBanner'
const CURRENT_HREF = '/blog/hipaa-compliant-ai-healthcare'
const relatedPosts = getRelatedPosts(CURRENT_HREF)

const faqItems = [
  {
    q: 'Is ChatGPT HIPAA-compliant for patient communication?',
    a: 'No. ChatGPT, Claude, Gemini, and other general-purpose AI tools are not HIPAA-compliant for handling Protected Health Information. Using them for patient communication creates legal exposure with fines of up to $1.5 million per violation category. Healthcare providers need purpose-built platforms like A2V2.ai that are designed to include BAA agreements, end-to-end encryption, and secured LLM access so patient data is never used to train AI models.',
  },
  {
    q: 'What makes an AI platform HIPAA-compliant?',
    a: 'A truly HIPAA-compliant AI platform requires a signed BAA, end-to-end encryption (AES-256 at rest, TLS 1.3 in transit), secured LLM access (patient data never used to train AI models), role-based access control, complete audit logging, regular third-party security audits, and U.S.-based data centers.',
  },
  {
    q: 'What are the penalties for HIPAA violations involving AI?',
    a: 'Fines can range from $100 to up to $1.5 million per violation category per year. Beyond fines, violations can lead to loss of medical license, patient lawsuits, criminal charges, and reputational damage.',
  },
  {
    q: 'Can longevity clinics use AI for patient engagement without violating HIPAA?',
    a: 'Yes, but only with a purpose-built HIPAA-compliant platform. Clinics managing NAD+ protocols, peptide therapy, HRT programs, and other longevity treatments can safely use AI — as long as the platform meets all HIPAA requirements.',
  },
  {
    q: 'How does A2V2.ai handle patient data differently than ChatGPT?',
    a: 'A2V2.ai is designed from the ground up for healthcare. The platform is designed so that patient data never leaves your secure environment, is never used to train external models, and is protected by 256-bit AES encryption. Every client receives a signed BAA.',
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
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-text-primary"
        >
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
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-text-primary"
        >
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
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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
export default function HipaaComplianceBlogPost() {
  const articleUrl =
    'https://www.a2v2.ai/blog/hipaa-compliant-ai-healthcare'
  const articleTitle =
    "Your AI Is a HIPAA Violation Waiting to Happen — Here's How to Fix It"

  return (
    <>
      <ReadingProgress />

      {/* ── Article ── */}
      <div className="bg-background">
        <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm text-text-secondary">
            <Link
              href="/blog"
              className="hover:text-text-primary transition-colors"
            >
              Blog
            </Link>
            <span>/</span>
            <span className="text-text-primary">Privacy &amp; Trust</span>
          </div>

          {/* Header */}
          <header className="mb-10">
            <span className="inline-block rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold text-text-primary uppercase tracking-wide mb-4">
              Privacy &amp; Trust
            </span>
            <h1 className="text-[28px] md:text-[40px] font-bold text-text-primary leading-tight tracking-tight">
              Your AI Is a HIPAA Violation Waiting to Happen — Here&apos;s How
              to Fix It
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              If your staff has ever pasted patient data into ChatGPT, Claude, or
              Gemini, your clinic is already exposed. Here&apos;s what
              HIPAA-compliant AI actually looks like — and why it matters more
              than you think.
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
                By The A2V2.ai Team · 10 min read · Mar 12, 2026
              </span>
            </div>

            {/* Share bar */}
            <ShareBar url={articleUrl} title={articleTitle} />
          </header>

          {/* Hero image */}
          <div className="w-full mb-12">
            <Image
              src="/images/Blog-Post-photo2.png"
              alt="Your AI Is a HIPAA Violation Waiting to Happen"
              width={720}
              height={405}
              className="w-full aspect-[16/9] object-cover"
              priority
            />
          </div>

          {/* Body */}
          <article className="prose-blog">
            <p>
              Let&apos;s start with a question most longevity clinic owners
              don&apos;t want to answer: Has anyone on your team ever typed
              patient information into ChatGPT?
            </p>
            <p>
              Maybe it was to draft a follow-up message after an NAD+ infusion.
              Maybe it was to summarize lab results before a hormone optimization
              consult. Maybe it was to generate a supplement protocol reminder
              for a patient on BPC-157 and Thymosin Alpha-1. It probably felt
              harmless. The AI gave a great answer. The patient got a better
              message. Everyone won.
            </p>
            <p>Except legally, everyone lost.</p>
            <p>
              The moment Protected Health Information enters a general-purpose AI
              tool, your clinic has created a HIPAA violation. Not a gray area.
              Not a technicality. A violation — with consequences that can reach
              up to $1.5 million per violation category per year.
            </p>
            <p>
              And here&apos;s the part that should concern you: it&apos;s
              happening in clinics everywhere, every single day, and most
              practice owners have no idea.
            </p>

            <h2>Why General-Purpose AI Fails Healthcare</h2>
            <p>
              To understand the problem, you need to understand how tools like
              ChatGPT, Claude, and Gemini actually work under the hood.
            </p>
            <p>
              When your staff types patient information into these platforms,
              that data enters a system designed for the general public. It may
              be stored on servers you have no control over. It may be used to
              improve the model — meaning your patient&apos;s lab values,
              hormone levels, or treatment history could influence responses
              given to other users. There is no Business Associate Agreement.
              There is no guarantee of encryption that meets healthcare
              standards. There is no audit trail showing who accessed what and
              when.
            </p>
            <p>
              For a longevity clinic managing sensitive protocols — testosterone
              replacement therapy dosing, rapamycin cycling schedules, peptide
              therapy sequences, continuous glucose monitor readings, epigenetic
              test results — this isn&apos;t just a compliance issue. It&apos;s
              a trust issue. Your patients shared their most personal health data
              with you, not with a public AI model.
            </p>
            <p>
              The specific risks break down into three categories.
            </p>
            <p>
              <strong>Data exposure</strong> is the most immediate concern.
              General-purpose AI platforms are not designed to isolate healthcare
              data. Patient names, lab values, diagnoses, and treatment plans
              entered into these tools could be stored, processed, or even
              surfaced in ways that violate the HIPAA Privacy Rule.
            </p>
            <p>
              <strong>Training data contamination</strong> is the less obvious
              risk. Many AI platforms use conversation data to improve their
              models. That means your patient&apos;s testosterone levels or NAD+
              dosing schedule could theoretically influence the model&apos;s
              future outputs. This violates the HIPAA minimum necessary standard
              and creates liability you cannot control.
            </p>
            <p>
              <strong>No BAA means no legal protection.</strong> HIPAA requires a
              Business Associate Agreement with any third party that handles PHI.
              ChatGPT, Gemini, and similar tools do not sign BAAs for their
              standard consumer or even most business plans. Without a BAA, your
              clinic bears 100% of the legal liability if patient data is
              exposed.
            </p>
            <p>
              If patient drop-off is already costing your clinic, adding
              compliance risk makes the problem exponentially worse.{' '}
              <Link
                href="/blog/silent-revenue-killer-longevity-medicine"
                className="text-primary hover:underline font-medium"
              >
                The Silent Revenue Killer in Longevity Medicine
              </Link>
            </p>

            <h2>The Real Cost of Getting It Wrong</h2>
            <p>
              HIPAA enforcement isn&apos;t theoretical. The Office for Civil
              Rights has been increasing enforcement actions year over year, and
              AI-related violations are a growing focus area.
            </p>

            {/* Stat callout box */}
            <div className="my-8 rounded-2xl bg-surface px-8 py-8 text-center">
              <p className="text-[28px] md:text-[36px] font-bold text-white leading-tight">
                $1.5 million
              </p>
              <p className="mt-2 text-sm md:text-base text-gray-400 leading-relaxed max-w-[480px] mx-auto">
                The maximum HIPAA fine per violation category, per year. And
                that&apos;s before lawsuits, license reviews, and reputational
                damage.
              </p>
            </div>

            <p>
              The penalty structure is tiered, but even the lowest tier starts at
              $100 per violation for issues the clinic didn&apos;t know about.
              &ldquo;Reasonable cause&rdquo; violations jump to $1,000 minimum.
              Willful neglect that gets corrected still carries a $10,000 minimum
              per violation. And willful neglect left uncorrected hits the
              $50,000 per violation ceiling, capped at $1.5 million per category
              annually.
            </p>
            <p>
              But fines are only the beginning. A HIPAA violation involving AI
              can trigger state medical board investigations. It opens the door
              to patient lawsuits — especially in longevity medicine, where
              patients are often high-net-worth individuals who will pursue legal
              action. It creates mandatory breach notification requirements. And
              the reputational fallout can be practice-ending in a field built
              entirely on trust.
            </p>
            <p>
              Consider the math: a single staff member pasting 10 different
              patients&apos; data into ChatGPT over the course of a month
              creates 10 individual violations. If discovered during an audit or
              breach investigation, even at the lowest penalty tier, that&apos;s
              $1,000 to $500,000 in fines — from one employee&apos;s
              well-intentioned shortcut.
            </p>
            <p>
              Multiply that across a practice with five to ten staff members,
              operating over months or years, and the exposure becomes
              staggering.
            </p>

            <h2>What HIPAA-Compliant AI Actually Requires</h2>
            <p>
              Not every AI platform that claims healthcare compatibility actually
              meets the standard. &ldquo;HIPAA-compliant&rdquo; has become a
              marketing buzzword, and many platforms use it loosely. Here&apos;s
              what the bar actually looks like.
            </p>
            <p>
              A <strong>signed Business Associate Agreement</strong> is
              non-negotiable. This is the legal document that establishes the AI
              vendor as a HIPAA-covered entity and defines their obligations for
              protecting PHI. If a vendor won&apos;t sign a BAA, walk away. No
              exceptions.
            </p>
            <p>
              <strong>End-to-end encryption</strong> must meet specific
              standards. Data at rest needs AES-256 encryption. Data in transit
              needs TLS 1.3. Anything less doesn&apos;t meet current best
              practices for healthcare data protection.
            </p>
            <p>
              <strong>Secured LLM access</strong> means your patient data
              is never used to train AI models. This is the
              single biggest differentiator between general-purpose AI and
              healthcare-grade AI.
            </p>
            <p>
              <strong>Role-based access control</strong> ensures that only
              authorized staff members can access specific patient data.
            </p>
            <p>
              <strong>Complete audit logging</strong> tracks every data access
              event. Who viewed what, when, and from where.
            </p>
            <p>
              <strong>Regular third-party security audits</strong> validate that
              the platform&apos;s security claims hold up under independent
              scrutiny. Independent penetration testing and security reviews confirm that the encryption, access controls, and audit systems perform as designed.
            </p>
            <p>
              <strong>U.S.-based data centers with redundancy</strong> ensure
              that patient data stays within jurisdictions covered by U.S.
              healthcare privacy law.
            </p>
            <p>
              For longevity clinics specifically, compliance needs to work
              alongside complex protocol management.{' '}
              <Link
                href="/ai-for-longevity-clinics"
                className="text-primary hover:underline font-medium"
              >
                Learn how A2V2.ai supports longevity clinics
              </Link>
            </p>

            <h2>The Longevity Medicine Compliance Gap</h2>
            <p>
              Longevity clinics face a unique compliance challenge that
              traditional healthcare practices don&apos;t.
            </p>
            <p>
              A standard primary care office might use AI to draft appointment
              reminders or answer billing questions — relatively low-risk use
              cases with minimal PHI exposure. But a longevity clinic managing
              NAD+ IV therapy protocols, peptide therapy sequences, hormone
              optimization programs, rapamycin cycling, senolytics therapy, and
              continuous glucose monitoring data is handling extraordinarily
              sensitive and complex patient information.
            </p>
            <p>
              The data flowing through a longevity practice is dense. A single
              patient file might include biomarker trend data spanning months,
              wearable device readings, lab results, supplement compliance
              records, and detailed hormone panels with dosing adjustments
              tracked over time.
            </p>
            <p>
              Yet the operational pressure to use AI is real. Longevity practices
              manage far more complex, long-term patient relationships than
              traditional clinics. The follow-up burden is enormous. The protocol
              tracking is intricate. The temptation to &ldquo;just use ChatGPT
              for this one thing&rdquo; is constant.
            </p>
            <p>
              This is exactly the gap that purpose-built healthcare AI was
              designed to fill.
            </p>
            <p>
              HRT clinics face especially complex compliance requirements around
              hormone data.{' '}
              <Link
                href="/ai-for-hrt-clinics"
                className="text-primary hover:underline font-medium"
              >
                Learn how A2V2.ai supports HRT clinics
              </Link>
            </p>

            <h2>How A2V2.ai Solves the Compliance Problem</h2>
            <p>
              A2V2.ai is designed from the ground up for healthcare — not adapted,
              not configured, not patched together from a general-purpose
              platform.
            </p>
            <p>
              The platform is designed so that patient data never leaves your secure environment and is never used
              to train external AI models. Every client receives a signed BAA
              before a single data point is processed. The platform is designed to use 256-bit
              AES encryption at rest and TLS 1.3 in transit. Two-factor
              authentication and role-based access control are designed to protect every staff
              login. Complete audit logs are designed to track every data access event. And
              quarterly penetration testing by third-party security firms
              is designed to validate the entire system.
            </p>
            <p>
              But compliance alone doesn&apos;t solve the operational problem.
              A2V2.ai is designed to automate patient engagement with protocol-specific
              intelligence. A patient on week 2 of a peptide therapy cycle would receive
              different communication than someone due for their quarterly
              hormone panel. A patient whose wearable data shows declining sleep
              quality could receive a proactive check-in. A patient who hasn&apos;t
              completed their lab requisition would receive a gentle, automated nudge.
            </p>
            <p>
              All of this is designed to happen within a fully compliant environment — with no PHI
              exposure, no training data contamination, and no unnecessary legal liability.
            </p>
            <p>
              And because A2V2.ai is designed to integrate directly with your existing
              EHR/EMR, lab partners, wearable devices, and payment processors,
              there&apos;s no data migration and no system overhaul. Most clinics
              can expect to go live in under two weeks.
            </p>
            <p>
              Functional medicine practices managing complex supplement protocols
              face similar challenges.{' '}
              <Link
                href="/ai-for-functional-medicine"
                className="text-primary hover:underline font-medium"
              >
                Learn how A2V2.ai supports functional medicine practices
              </Link>
            </p>

            <h2>A Compliance Checklist for Your Clinic</h2>
            <p>
              Before your next staff meeting, run through this audit of your
              current AI usage:
            </p>

            {/* Checklist */}
            <ul className="my-6 flex flex-col gap-3">
              {[
                'Has any staff member entered patient data into ChatGPT, Claude, Gemini, or any general-purpose AI tool?',
                'Has every AI vendor signed a BAA?',
                'Does your patient communication platform use AES-256 and TLS 1.3 encryption?',
                'Can you confirm your AI tools do NOT use patient data for training?',
                'Do you have role-based access controls limiting who sees what?',
                'Do you have complete audit logs of all data access?',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 mt-0.5 text-primary"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="4"
                      ry="4"
                    />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-text-primary">{item}</span>
                </li>
              ))}
            </ul>

            <p>
              If any of these checks reveal issues, don&apos;t panic — but do
              act. The difference between a corrected violation and willful
              neglect is the difference between a manageable fine and a
              practice-threatening one.
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
          heading="Find Out If Your Clinic's AI Usage Is Putting You at Risk"
          subtext="Book a free 30-minute Patient Retention Audit. We'll review your current tools, identify compliance gaps, and show you what HIPAA-compliant AI looks like in practice. No sales pitch — just clarity."
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
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
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
