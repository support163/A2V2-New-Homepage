'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRelatedPosts } from '@/lib/blog-posts'
import CtaBanner from '@/components/CtaBanner'

const CURRENT_HREF = '/blog/wearable-data-gap-longevity-clinics'
const relatedPosts = getRelatedPosts(CURRENT_HREF)

const faqItems = [
  {
    q: 'Can longevity clinics integrate wearable device data from Oura Ring, Whoop, and CGMs?',
    a: 'Yes, but most clinics currently lack the infrastructure. Wearable devices generate thousands of data points daily, but this data typically lives in the patient\u2019s personal app. Purpose-built platforms like A2V2.ai are designed to aggregate wearable data alongside lab results and protocol timelines.',
  },
  {
    q: 'Why is wearable data important for longevity medicine protocols?',
    a: 'Wearable data provides continuous insight into how patients respond to protocols between visits. Sleep quality can indicate rapamycin tolerance. HRV can reflect peptide therapy recovery. Glucose variability can reveal metabolic responses to NAD+ therapy or metformin.',
  },
  {
    q: 'Is it HIPAA-compliant to collect wearable data from patients?',
    a: 'Yes, as long as the platform meets full HIPAA requirements including a signed BAA, end-to-end encryption, and audit logging. Consumer fitness apps are not HIPAA-compliant. A2V2.ai is designed to handle wearable data within a fully compliant environment.',
  },
  {
    q: 'What wearable devices are most useful for longevity clinics?',
    a: 'Oura Ring (sleep, HRV, readiness), Whoop (strain, recovery, sleep), CGMs (glucose variability), Apple Health and Fitbit (activity, heart rate), and Garmin (advanced fitness metrics).',
  },
  {
    q: 'How does wearable data improve patient retention?',
    a: 'Published research suggests patients who see objective evidence of progress are more likely to stay engaged. Wearable data makes invisible progress visible \u2014 a key retention driver in platforms like A2V2.ai.',
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
export default function WearableDataGapBlogPost() {
  const articleUrl =
    'https://www.a2v2.ai/blog/wearable-data-gap-longevity-clinics'
  const articleTitle =
    'Your Patients Are Generating Health Data 24/7 — Your Clinic Is Ignoring All of It'

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
              Your Patients Are Generating Health Data 24/7 — Your Clinic Is Ignoring All of It
            </h1>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              They wear Oura Rings. They strap on Whoop bands. They stick CGMs to their arms. Every night, every workout, every meal produces data that could transform how you manage their protocols. So why isn&apos;t any of it reaching your clinic?
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
                By The A2V2 Team · 11 min read · Mar 18, 2026
              </span>
            </div>

            {/* Share bar */}
            <ShareBar url={articleUrl} title={articleTitle} />
          </header>

          {/* Hero image */}
          <div className="w-full mb-12">
            <Image
              src="/images/Blog-Post4-Heroimage.png"
              alt="Your Patients Are Generating Health Data 24/7"
              width={720}
              height={405}
              className="w-full aspect-[16/9] object-cover"
              priority
            />
          </div>

          {/* Body */}
          <article className="prose-blog">
            <p>
              Your most engaged longevity patients are already doing something remarkable. Without being asked, without being coached, they&apos;re generating a continuous stream of health data every hour of every day.
            </p>

            <p>
              The Oura Ring on their finger is tracking deep sleep duration, heart rate variability, body temperature trends, and readiness scores. The Whoop band on their wrist is measuring strain, recovery, respiratory rate, and sleep performance. The continuous glucose monitor on their arm is logging glucose variability in real time — every spike, every dip, every metabolic response to food, stress, and exercise. Some are syncing Apple Health or Fitbit data. Others are pulling metrics from a Garmin.
            </p>

            <p>
              These patients are producing thousands of clinically relevant data points per week. And right now, virtually all of that data sits locked inside their personal apps, never seen by the clinician managing their NAD+ protocol, their peptide therapy cycle, their hormone optimization program, or their rapamycin regimen.
            </p>

            <p>
              This is the wearable data gap. And for longevity clinics, it may be the biggest missed opportunity in modern medicine.
            </p>

            <h2>The Quarterly Snapshot Problem</h2>

            {/* Quarterly Snapshot image */}
            <div className="my-8">
              <Image
                src="/images/Blog-Post4-The Quarterly Snapshot Problem.png"
                alt="The Quarterly Snapshot Problem"
                width={720}
                height={405}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>

            <p>
              Here is how most longevity clinics operate today. A patient comes in for an appointment. Labs are drawn. Results are reviewed a week or two later. Protocol adjustments are made based on that single snapshot — a blood draw taken on one morning, reflecting one moment in a dynamic, constantly shifting biological system.
            </p>

            <p>
              Then the patient walks out the door. And for the next 60 to 90 days, the clinic has no insight into what&apos;s happening.
            </p>

            <p>
              Is their sleep quality declining — a potential sign they&apos;re not tolerating a rapamycin cycle? No way to know. Is their heart rate variability improving — evidence that a peptide therapy sequence is producing real physiological change? Can&apos;t see it. Is their glucose variability spiking after meals — suggesting the metformin dose needs adjustment or their nutrition plan isn&apos;t holding? Invisible.
            </p>

            <p>
              The clinic is making protocol decisions based on quarterly snapshots in a world where continuous data is already being collected. It&apos;s like managing a stock portfolio by checking the price once every three months and ignoring every trading day in between.
            </p>

            <p>
              Published research on remote patient monitoring consistently shows that continuous data leads to better clinical decisions. A 2024 analysis in the Journal of Medical Internet Research found that wearable-integrated care models were associated with improved treatment adherence and earlier detection of adverse trends. The data exists. The science supports using it. The gap is entirely technological.
            </p>

            <p>
              <Link
                href="/blog/protocol-adherence-crisis-longevity-medicine"
                className="text-primary hover:underline font-medium"
              >
                This visibility gap is also the root cause of the protocol adherence crisis.
              </Link>
            </p>

            <h2>What Wearable Data Actually Reveals About Your Protocols</h2>

            <p>
              The clinical value of wearable data in longevity medicine isn&apos;t abstract. Each device generates specific metrics that map directly onto the protocols longevity clinics manage every day.
            </p>

            <p>
              <strong>Sleep architecture and NAD+ therapy</strong> are deeply connected. Published research suggests that NAD+ plays a critical role in circadian rhythm regulation. An Oura Ring tracking a patient&apos;s deep sleep percentage, REM cycles, and sleep latency over weeks can reveal whether an NAD+ protocol is producing measurable improvements in sleep architecture — or whether dosing and timing need adjustment.
            </p>

            <p>
              <strong>Heart rate variability and peptide therapy</strong> tell a recovery story. HRV is widely recognized as one of the most reliable non-invasive markers of autonomic nervous system function. A patient on a BPC-157 or TB-500 protocol whose Whoop-tracked HRV is trending upward over 30 days is showing objective evidence of improved recovery capacity.
            </p>

            <p>
              <strong>Glucose variability and metabolic protocols</strong> need real-time data. For patients on metformin, GLP-1 agonists, or metabolic optimization programs, a CGM provides what no quarterly blood draw ever could — a continuous picture of how their metabolism responds to food, fasting, exercise, and medication in real time.
            </p>

            <p>
              <strong>Strain and recovery data informs hormone optimization.</strong> Patients on testosterone replacement therapy, estrogen management, or DHEA supplementation are often simultaneously pursuing fitness goals. Whoop strain scores and recovery metrics can reveal whether a hormone protocol is translating into improved physical performance.
            </p>

            <p>
              <strong>Readiness scores and senolytics or rapamycin cycling</strong> offer protocol tolerance insights. An Oura Ring readiness score trending downward during a treatment cycle could indicate the patient isn&apos;t recovering as expected, suggesting a dosing or timing adjustment.
            </p>

            <h2>Why the Gap Still Exists</h2>

            <p>
              If the clinical value is so clear, why aren&apos;t longevity clinics already using wearable data? Three structural barriers keep the gap open.
            </p>

            <p>
              <strong>EHR systems weren&apos;t built for continuous data.</strong> Most electronic health records are designed around encounter-based documentation. Trying to pipe thousands of daily data points from an Oura Ring into a traditional EHR creates more noise than signal. Clinicians need intelligent summaries, trend analysis, and alerts — and their EHR can&apos;t provide that.
            </p>

            <p>
              <strong>Consumer wearable apps don&apos;t speak clinical.</strong> Oura, Whoop, Fitbit, and Apple Health all have their own apps and dashboards. Each uses its own scoring system, its own terminology, its own data format. There&apos;s no translation layer between consumer wellness data and clinical protocol management.
            </p>

            <p>
              <strong>HIPAA compliance creates a real barrier.</strong> Wearable data, once it enters a clinical workflow, becomes Protected Health Information. Any platform aggregating this data must meet full HIPAA requirements. The compliance barrier is the primary reason most clinics have simply left wearable data on the table.
            </p>

            <p>
              <Link
                href="/blog/hipaa-compliant-ai-healthcare"
                className="text-primary hover:underline font-medium"
              >
                The compliance requirements for handling any patient data through AI are strict.
              </Link>
            </p>

            <h2>Closing the Gap — What a Connected Clinic Looks Like</h2>

            {/* Closing the Gap image */}
            <div className="my-8">
              <Image
                src="/images/Blog-Post4-Closing the Gap.png"
                alt="Closing the Gap — What a Connected Clinic Looks Like"
                width={720}
                height={405}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>

            <p>
              This is the problem A2V2.ai is designed to solve.
            </p>

            <p>
              Rather than forcing wearable data into an EHR that wasn&apos;t built for it, A2V2.ai is designed to create an intelligent layer that sits between patient wearables, lab systems, and your clinical workflow. It&apos;s designed to aggregate data from Oura Ring, Whoop, Apple Health, Fitbit, Garmin, and CGM devices alongside lab results from Quest Diagnostics and LabCorp — and map all of it against the specific protocol each patient is following.
            </p>

            <p>
              The result, based on our platform architecture, would look something like this:
            </p>

            <p>
              Instead of raw data dumps, clinicians would see <strong>protocol-contextualized summaries</strong>. A patient on a six-month NAD+ protocol wouldn&apos;t just have an Oura sleep score — they&apos;d have a trend showing how their deep sleep percentage has changed since starting treatment.
            </p>

            <p>
              <strong>Intelligent alerts</strong> are designed to surface what matters. The platform isn&apos;t designed to notify your staff every time a readiness score dips. It&apos;s designed to flag clinically meaningful patterns — a sustained HRV decline over two weeks during a peptide therapy cycle, a glucose variability pattern that suggests medication timing should be reconsidered.
            </p>

            <p>
              <strong>Patient-facing progress visibility</strong> is designed to drive retention. Published adherence research consistently shows that patients who can see objective evidence of their improvement are significantly more likely to stay engaged. A2V2.ai is designed to show patients their own wearable trends in the context of their treatment.
            </p>

            <p>
              And everything is designed to run within a fully HIPAA-compliant environment. Wearable data, lab results, protocol timelines, and patient communications are all designed to be protected by 256-bit AES encryption, role-based access controls, complete audit logging, and a signed BAA.
            </p>

            <p>
              <Link
                href="/ai-for-functional-medicine"
                className="text-primary hover:underline font-medium"
              >
                See how A2V2.ai is designed to work for functional medicine
              </Link>
            </p>

            <h2>The Retention Math Behind Wearable Integration</h2>

            <p>
              Industry estimates suggest that as many as 3 in 4 longevity patients disengage within six months. Based on our retention modeling, a significant portion of that drop-off occurs during what we call the &ldquo;plateau stage&rdquo; — the period between days 15 and 45 when initial treatment excitement fades.
            </p>

            <p>
              Wearable data is designed to close exactly that gap. When a patient can see that their deep sleep increased 18% since starting NAD+ therapy, or that their glucose variability narrowed by 30% since adjusting their metformin timing, the plateau stage transforms from a moment of doubt into a moment of confirmation.
            </p>

            <p>
              Based on published retention data and our modeling, clinics that implement continuous wearable monitoring alongside automated patient engagement could expect to see meaningful improvements in protocol completion rates, patient satisfaction, and downstream revenue. For a practice with 200 active patients at an estimated average annual value of $8,000 to $24,000 per patient, even a modest improvement in retention can translate into hundreds of thousands of dollars in recovered revenue per year.
            </p>

            <p>
              <Link
                href="/blog/silent-revenue-killer-longevity-medicine"
                className="text-primary hover:underline font-medium"
              >
                For the full breakdown of how patient drop-off impacts clinic revenue
              </Link>
            </p>

            <h2>A Quick Audit for Your Practice</h2>

            <div className="my-8 rounded-2xl border border-gray-200 p-8">
              <p className="text-base font-semibold text-text-primary mb-5">
                Answer these five questions to see where your clinic stands:
              </p>
              <ul className="flex flex-col gap-4">
                {[
                  'How many of your active patients wear a health-tracking device?',
                  'When was the last time wearable data informed a protocol decision?',
                  'Can your current systems ingest data from Oura, Whoop, CGMs, or Apple Health?',
                  'Do your patients know their wearable data could improve their treatment?',
                  'Are you handling wearable data in a HIPAA-compliant way?',
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
              If you answered &ldquo;I don&apos;t know&rdquo; to more than two of those, you&apos;re not alone. But the clinics that close this gap now — the ones that build infrastructure for continuous wearable data integration — will have a significant competitive advantage as longevity medicine moves from quarterly snapshots to real-time, data-driven patient management.
            </p>

            <p>
              <Link
                href="/ai-for-hrt-clinics"
                className="text-primary hover:underline font-medium"
              >
                See how A2V2.ai is designed to bring wearable integration, protocol tracking, and patient engagement together for HRT clinics
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
          heading="Find Out How Much Patient Data Your Clinic Is Leaving on the Table"
          subtext="Book a free 30-minute Patient Retention Audit. We'll review your current patient engagement workflow, identify where wearable data could improve protocol outcomes, and model the retention impact for your specific practice. No sales pitch — just a clear picture of the opportunity."
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
