'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Activity, Sparkles, Bell } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import { SIGN_IN_URL } from '@/lib/constants'

/* ─── Shared ─── */

const gradientDot: React.CSSProperties = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundImage: "url('/images/dot-image.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  flexShrink: 0,
}

function AnimatedNumber({
  target,
  format,
  duration = 2000,
}: {
  target: number
  format: (n: number) => string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.textContent = format(0)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const update = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = format(eased * target)
            if (progress < 1) requestAnimationFrame(update)
            else el.textContent = format(target)
          }
          requestAnimationFrame(update)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, format, duration])

  return <span ref={ref} />
}

/* ─── Section 1: Hero ─── */

function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden -mt-[72px]"
      style={{ background: '#0F0E0D', height: '90vh' }}
    >
      <Image
        src="/images/hero-background-Image8.jpg"
        alt=""
        fill
        className="object-cover"
        quality={100}
        unoptimized
        priority
        style={{ zIndex: 0 }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '220px', background: 'linear-gradient(to bottom, transparent, #0F0E0D)', zIndex: 2 }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div
          className="flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
          style={{ border: '1px solid rgba(255,255,255,0.2)' }}
        >
          <span style={gradientDot} />
          <span className="text-sm text-white">Healthcare AI</span>
        </div>

        <h1
          className="text-3xl md:text-5xl text-white tracking-tight text-center"
          style={{ fontWeight: 600, maxWidth: '720px', lineHeight: 1.15 }}
        >
          The healthcare AI platform actually built for healthcare
        </h1>

        <p
          className="text-lg mt-4 text-center"
          style={{ color: 'rgba(255,255,255,0.95)', maxWidth: '580px' }}
        >
          HIPAA-compliant AI that automates patient engagement, tracks treatment adherence, and scales your practice without compromising compliance.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={SIGN_IN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: '#ffffff', color: '#0F0E0D' }}
          >
            Try For Free
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold transition-colors"
            style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 2: Stats ─── */

function StatsSection() {
  return (
    <section style={{ background: '#0F0E0D' }} className="py-12">
      <div className="mx-auto max-w-[900px] px-6">
        <div
          className="flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <div data-animate="" className="flex-1 text-center py-8 md:py-4">
            <div className="text-3xl font-semibold text-white">
              <AnimatedNumber target={100} format={(n) => `${Math.floor(n)}%`} />
            </div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.75)' }}>HIPAA Compliant</div>
          </div>
          <div data-animate="" className="flex-1 text-center py-8 md:py-4" style={{ transitionDelay: '80ms' }}>
            <div className="text-3xl font-semibold text-white">&lt;2 Weeks</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.75)' }}>Implementation</div>
          </div>
          <div data-animate="" className="flex-1 text-center py-8 md:py-4" style={{ transitionDelay: '160ms' }}>
            <div className="text-3xl font-semibold text-white">
              <AnimatedNumber target={67} format={(n) => `${Math.floor(n)}%`} />
            </div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.75)' }}>Projected no-show reduction</div>
          </div>
          <div data-animate="" className="flex-1 text-center py-8 md:py-4" style={{ transitionDelay: '240ms' }}>
            <div className="text-3xl font-semibold text-white">30-45</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.75)' }}>Day early warning</div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 3: Benefit Cards ─── */

function PatientQueueCard() {
  const patients = [
    { initials: 'SJ', name: 'Sarah J.', protocol: 'HRT · Week 6', status: 'Sent' },
    { initials: 'MK', name: 'Michael K.', protocol: 'NAD+ · Week 3', status: 'Opened' },
    { initials: 'AL', name: 'Amy L.', protocol: 'Peptide · Week 1', status: 'Scheduled' },
  ]
  return (
    <div
      style={{
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        maxWidth: '280px',
        width: '100%',
      }}
    >
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Patient queue</span>
      </div>
      <div className="flex items-center gap-0.5 mb-3 rounded-lg p-0.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
        {['Active', 'Pending', 'At-risk'].map((t, i) => (
          <div
            key={t}
            className="flex-1 text-center text-[10px] font-medium py-1 rounded-md"
            style={{
              background: i === 0 ? 'rgba(255,255,255,0.12)' : 'transparent',
              color: i === 0 ? '#ffffff' : 'rgba(255,255,255,0.4)',
            }}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        {patients.map((p, i) => (
          <div
            key={p.name}
            className="flex items-center gap-2.5 py-2.5"
            style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-semibold text-white"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              {p.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white leading-tight">{p.name}</p>
              <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.protocol}</p>
            </div>
            <span
              className="text-[10px] rounded-full px-2 py-0.5 flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ComplianceBadgeCard() {
  const items = [
    'HIPAA compliance active',
    'AES-256 encryption enabled',
    'Secured LLM access (BAA)',
    'BAA signed and stored',
  ]
  return (
    <div
      style={{
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
        maxWidth: '280px',
        width: '100%',
      }}
    >
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Security status</span>
      </div>
      <div className="flex flex-col">
        {items.map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-2.5 py-2"
            style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ border: '1px solid rgba(255,255,255,0.3)' }}
            >
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xs text-white">{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 text-center">
        <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>View audit log</span>
      </div>
    </div>
  )
}

function BenefitCards() {
  const cards = [
    {
      bg: '/images/Ui-Card-Background1.jpg',
      dot: 'Retention',
      title: 'Patient Retention Engine',
      desc: 'Recover lost revenue by keeping patients engaged with their treatment protocols. Designed to reduce drop-off by 30 to 45 days of early warning.',
      mockup: <PatientQueueCard />,
    },
    {
      bg: '/images/Ui-Card-Background2.jpg',
      dot: 'Compliance',
      title: 'Built-In HIPAA Compliance',
      desc: '100 percent HIPAA compliant from day one. Secured LLM access under a BAA, end-to-end encryption, and complete audit trails. Your data is never used for AI training.',
      mockup: <ComplianceBadgeCard />,
    },
  ]

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div data-animate="" className="text-center mb-14">
          <h2 className="text-3xl text-white" style={{ fontWeight: 600 }}>
            Built for clinical workflows
          </h2>
          <p className="mt-3 text-lg mx-auto" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '600px' }}>
            AI that understands medicine, not marketing funnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map(({ bg, dot, title, desc, mockup }, i) => (
            <div
              key={title}
              data-animate=""
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative rounded-lg overflow-hidden" style={{ height: '400px' }}>
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: `url('${bg}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  {mockup}
                </div>
              </div>
              <div className="pt-5">
                <div className="flex items-center gap-2 mb-2">
                  <span style={gradientDot} />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{dot}</span>
                </div>
                <h3 className="text-xl text-white" style={{ fontWeight: 600 }}>{title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 4: Feature Showcase ─── */

const showcaseTabs = [
  {
    title: 'Patient engagement',
    description:
      "AI-powered SMS, email, and phone sequences timed to each patient's treatment protocol. Not marketing drip campaigns.",
  },
  {
    title: 'Protocol intelligence',
    description:
      'Native support for NAD+, HRT, peptides, supplements, and biomarker tracking built in.',
  },
  {
    title: 'Predictive analytics',
    description:
      'Designed to flag at-risk patients 30 to 45 days before they drop off. Actionable alerts, not data dumps.',
  },
  {
    title: 'Compliance',
    description:
      'Secured LLM access under a BAA, AES-256 encryption, and complete audit trails. Your patient data is never used for AI training.',
  },
]

const summaryItems = [
  { Icon: Activity, title: 'Engagement', desc: 'Protocol-aware sequences' },
  { Icon: Sparkles, title: 'Intelligence', desc: 'Native clinical protocols' },
  { Icon: Bell, title: 'Alerts', desc: 'Predictive risk warnings' },
]

function EngagementCard() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">New patient sequence</span>
      </div>
      <div className="flex items-center gap-0.5 mb-3 rounded-lg p-0.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
        {['SMS', 'Email', 'Phone'].map((t, i) => (
          <div
            key={t}
            className="flex-1 text-center text-[10px] font-medium py-1 rounded-md"
            style={{
              background: i === 0 ? 'rgba(255,255,255,0.12)' : 'transparent',
              color: i === 0 ? '#ffffff' : 'rgba(255,255,255,0.4)',
            }}
          >
            {t}
          </div>
        ))}
      </div>
      <p className="text-[10px] mb-1" style={{ color: 'rgba(255,255,255,0.75)' }}>Select protocol</p>
      <div
        className="flex items-center justify-between rounded-lg px-3 py-2 mb-3 text-xs"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)' }}
      >
        <span>NAD+ IV Therapy — Week 3</span>
        <span style={{ color: 'rgba(255,255,255,0.4)' }}>▾</span>
      </div>
      <p className="text-[10px] mb-1" style={{ color: 'rgba(255,255,255,0.75)' }}>Timing</p>
      <div
        className="flex items-center justify-between rounded-lg px-3 py-2 text-xs"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)' }}
      >
        <span>48 hours before appointment</span>
        <span style={{ color: 'rgba(255,255,255,0.4)' }}>▾</span>
      </div>
      <div className="flex items-center justify-between mt-3">
        <button className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Cancel</button>
        <button className="text-[11px] font-semibold rounded-full px-4 py-1.5" style={{ background: '#ffffff', color: '#000000' }}>
          Create sequence
        </button>
      </div>
    </div>
  )
}

function ProtocolCard() {
  const protocols = [
    { name: 'NAD+ IV Therapy', count: '8 patients' },
    { name: 'HRT Optimization', count: '14 patients' },
    { name: 'Peptide BPC-157', count: '6 patients' },
  ]
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Active protocols</span>
      </div>
      <div className="flex items-center gap-0.5 mb-3 rounded-lg p-0.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
        {['Active', 'Completed', 'Archived'].map((t, i) => (
          <div
            key={t}
            className="flex-1 text-center text-[10px] font-medium py-1 rounded-md"
            style={{
              background: i === 0 ? 'rgba(255,255,255,0.12)' : 'transparent',
              color: i === 0 ? '#ffffff' : 'rgba(255,255,255,0.4)',
            }}
          >
            {t}
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        {protocols.map((p, i) => (
          <div
            key={p.name}
            className="flex items-center justify-between py-2.5"
            style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
              <span className="text-sm text-white">{p.name}</span>
            </div>
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.count}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 text-center">
        <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>28 active protocols</span>
      </div>
    </div>
  )
}

function RiskAlertsCard() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Risk alerts</span>
      </div>
      <div className="rounded-lg p-3 mb-3" style={{ background: 'rgba(255,100,100,0.1)', border: '1px solid rgba(255,100,100,0.15)' }}>
        <p className="text-sm font-semibold text-white">2 patients flagged</p>
        <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Engagement dropped</p>
      </div>
      {[
        { name: 'Jennifer W.', detail: 'Missed 2 check-ins', time: '2h ago' },
        { name: 'Robert T.', detail: 'Labs overdue 12 days', time: '5h ago' },
      ].map((p) => (
        <div
          key={p.name}
          className="flex items-center justify-between py-2.5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div>
            <p className="text-xs font-semibold text-white">{p.name}</p>
            <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.detail}</p>
          </div>
          <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>{p.time}</span>
        </div>
      ))}
      <div className="flex items-center justify-between mt-3">
        <button className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Dismiss</button>
        <button className="text-[11px] font-semibold rounded-full px-4 py-1.5" style={{ background: '#ffffff', color: '#000000' }}>
          Review
        </button>
      </div>
    </div>
  )
}

function SecurityOverviewCard() {
  const items = [
    'HIPAA compliance active',
    'AES-256 encryption',
    'Secured LLM access (BAA)',
    'BAA signed',
    'Last audit: 14 days ago',
  ]
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Security overview</span>
      </div>
      <div className="flex flex-col">
        {items.map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-2.5 py-2"
            style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ border: '1px solid rgba(255,255,255,0.3)' }}
            >
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xs text-white">{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-center">
        <button
          className="text-[11px] font-medium rounded-full px-4 py-1.5"
          style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}
        >
          View audit log
        </button>
      </div>
    </div>
  )
}

const showcaseCards = [
  <EngagementCard key="0" />,
  <ProtocolCard key="1" />,
  <RiskAlertsCard key="2" />,
  <SecurityOverviewCard key="3" />,
]

function ShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % showcaseTabs.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [activeTab])

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">
          <div data-animate="" className="flex-shrink-0 max-w-[400px]">
            <div className="flex items-center gap-2 mb-3">
              <span style={gradientDot} />
              <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Healthcare Platform
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl text-white leading-tight" style={{ fontWeight: 600 }}>
              AI built for clinical workflows
            </h2>
          </div>

          <div
            data-animate=""
            className="flex flex-row items-stretch flex-shrink-0"
            style={{ transitionDelay: '80ms' }}
          >
            {summaryItems.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className="flex flex-col gap-2 flex-1"
                style={{
                  paddingLeft: i === 0 ? '0' : '20px',
                  paddingRight: i === summaryItems.length - 1 ? '0' : '20px',
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                }}
              >
                <Icon size={16} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.5)' }} />
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[35fr_65fr] gap-8 items-start">

          <div data-animate="" style={{ transitionDelay: '120ms' }}>
            <p className="text-xl font-semibold text-white">Patient Engagement Engine</p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              The fastest way to automate, personalize, and scale clinical patient communication.
            </p>
            <div className="mt-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white rounded-full px-4 py-1.5 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                Book a free audit &#8250;
              </a>
            </div>

            <style>{`
              @keyframes hcFillProgress {
                from { width: 0%; }
                to { width: 100%; }
              }
            `}</style>

            <div className="flex flex-col">
              {showcaseTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className="w-full text-left py-4 transition-all duration-200 relative"
                >
                  <span
                    className="text-sm block"
                    style={{
                      fontWeight: activeTab === i ? 600 : 500,
                      color: activeTab === i ? '#ffffff' : 'rgba(255,255,255,0.4)',
                      transition: 'color 200ms ease',
                    }}
                  >
                    {tab.title}
                  </span>
                  <div
                    style={{
                      maxHeight: activeTab === i ? '200px' : '0px',
                      opacity: activeTab === i ? 1 : 0,
                      marginTop: activeTab === i ? '8px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 300ms ease, opacity 300ms ease, margin 300ms ease',
                    }}
                  >
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                      {tab.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full" style={{ height: '2px', background: 'rgba(255,255,255,0.1)' }}>
                    {activeTab === i && (
                      <div
                        key={`hc-progress-${activeTab}`}
                        style={{
                          height: '100%',
                          background: 'rgba(255,255,255,0.8)',
                          animation: 'hcFillProgress 8s linear forwards',
                        }}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div
            data-animate=""
            className="relative rounded-2xl overflow-hidden"
            style={{ height: '500px', transitionDelay: '160ms' }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/Ui-Card-Background3.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.15)' }} />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div
                className="rounded-xl w-full"
                style={{
                  maxWidth: '300px',
                  padding: '20px',
                  background: 'rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                {showcaseCards[activeTab]}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── Section 5: ROI Calculator ─── */

function RoiCalculator() {
  const [patients, setPatients] = useState(500)
  const [ltv, setLtv] = useState(5000)

  const recoverableRevenue = Math.round(patients * ltv * 0.35)

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div data-animate="" className="text-center mb-12">
          <h2 className="text-3xl text-white" style={{ fontWeight: 600 }}>
            Calculate your projected ROI
          </h2>
          <p className="mt-3 text-lg" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Based on industry retention data and our engagement model
          </p>
        </div>

        <div
          data-animate=""
          className="mx-auto rounded-2xl p-8"
          style={{
            maxWidth: '700px',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>Active patients</span>
              <span className="text-2xl font-medium text-white">{patients.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={50}
              max={2000}
              step={50}
              value={patients}
              onChange={(e) => setPatients(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: '#ffffff' }}
            />
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>Average patient lifetime value</span>
              <span className="text-2xl font-medium text-white">${ltv.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={20000}
              step={500}
              value={ltv}
              onChange={(e) => setLtv(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: '#ffffff' }}
            />
          </div>

          <div
            className="grid grid-cols-2 gap-4 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <p className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Estimated recoverable revenue</p>
              <p className="text-2xl font-medium text-white">${recoverableRevenue.toLocaleString()}</p>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>per year</p>
            </div>
            <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <p className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Projected time to ROI</p>
              <p className="text-2xl font-medium text-white">&lt; 60 days</p>
            </div>
          </div>

          <div
            className="flex flex-wrap gap-x-6 gap-y-2 mt-4 pt-4 text-sm"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            <span style={{ color: 'rgba(255,255,255,0.75)' }}>
              Est. drop-off without AI: <span className="font-medium text-white">73%</span>
            </span>
            <span style={{ color: 'rgba(255,255,255,0.75)' }}>
              Est. drop-off with A2V2: <span className="font-medium text-white">35%</span>
            </span>
            <span style={{ color: 'rgba(255,255,255,0.75)' }}>
              Projected reduction: <span className="font-medium text-white">38%</span>
            </span>
          </div>

          <p className="mt-4 text-xs text-center" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Revenue projections are estimates based on industry retention data and our engagement model. Actual results may vary.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 6: FAQ ─── */

const faqs = [
  {
    q: 'What makes A2V2.ai different from other healthcare AI platforms?',
    a: 'A2V2.ai was built exclusively for healthcare from the ground up. We natively support clinical protocols (NAD+, HRT, peptides, supplements), integrate with EHR systems, and operate under a BAA so your patient data is never used for AI training.',
  },
  {
    q: 'Can I use ChatGPT or Claude for patient engagement?',
    a: 'Not safely. ChatGPT, Claude, and Gemini are not HIPAA compliant for patient data management. Using them for patient communication creates legal liability with potential fines up to $1.5M per violation. A2V2.ai is 100 percent HIPAA compliant with secured LLM access under a BAA.',
  },
  {
    q: 'Is A2V2.ai HIPAA compliant?',
    a: 'Yes. 100 percent HIPAA compliant with end-to-end AES-256 encryption, secured LLM access under a BAA, quarterly penetration testing, and complete audit logs. Your PHI never leaves your secure environment.',
  },
  {
    q: 'What specialties does A2V2.ai support?',
    a: 'Longevity clinics, functional medicine practices, HRT clinics, health optimization practices, executive health programs, and any medical practice that relies on ongoing treatment protocols and long-term patient retention.',
  },
  {
    q: 'How long does implementation take?',
    a: 'Most practices go live in under 2 weeks. Our dedicated implementation team handles EHR integration, protocol mapping, and staff training.',
  },
  {
    q: 'Do we need to replace our existing systems?',
    a: 'No. A2V2.ai sits on top of your current stack. EHR/EMR, lab systems, communication tools, and payment processors. No migrations required.',
  },
  {
    q: 'What does the free audit include?',
    a: 'A 30-minute review of your current patient retention, drop-off patterns, revenue impact, and a custom projection showing what A2V2.ai would recover for your specific practice. No pitch, no obligation.',
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <button
        className="w-full flex items-center justify-between py-5 text-left"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-base font-medium text-white pr-4">{q}</span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 transition-transform duration-200"
          style={{ color: 'rgba(255,255,255,0.4)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>
      <div style={{ maxHeight: open ? '300px' : '0px', overflow: 'hidden', transition: 'max-height 250ms ease' }}>
        <p className="pb-5 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{a}</p>
      </div>
    </div>
  )
}

function FaqSection() {
  return (
    <section style={{ background: '#0F0E0D' }} className="py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div data-animate="" className="text-center mb-12">
          <h2 className="text-3xl text-white" style={{ fontWeight: 600 }}>
            Frequently asked questions
          </h2>
        </div>
        <div data-animate="" className="mx-auto" style={{ maxWidth: '700px' }}>
          {faqs.map(({ q, a }) => (
            <FaqItem key={q} q={q} a={a} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Section 7: CTA ─── */

function CtaSection() {
  return (
    <section style={{ background: '#0F0E0D', marginBottom: '-8px' }}>
      <div data-animate="" className="relative z-10 pt-20 mx-auto max-w-[700px] px-6 text-center">
        <h2 className="text-4xl md:text-6xl text-white tracking-tight leading-tight" style={{ fontWeight: 600 }}>
          Clone Yourself.<br />Scale Your Influence.
        </h2>
        <p className="mt-6 text-base mx-auto" style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '550px' }}>
          Get started in minutes. No credit card required.
        </p>
        <div className="mt-8">
          <a
            href={SIGN_IN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: '#ffffff', color: '#0F0E0D' }}
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden" style={{ marginTop: '-180px', zIndex: 0 }}>
        <Image
          src="/images/Cta-Background3.png"
          alt=""
          width={1920}
          height={800}
          quality={100}
          unoptimized
          className="w-full h-auto pointer-events-none"
          style={{ display: 'block', verticalAlign: 'bottom' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '280px',
            background: 'linear-gradient(to bottom, transparent, #0F0E0D)',
            zIndex: 10,
          }}
        />
      </div>
    </section>
  )
}

/* ─── Page ─── */

export default function HealthcarePage() {
  return (
    <main style={{ background: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>
      <ScrollAnimator />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <BenefitCards />
      <ShowcaseSection />
      <RoiCalculator />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
