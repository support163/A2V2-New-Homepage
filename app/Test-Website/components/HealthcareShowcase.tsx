'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Shield, Zap, Bell } from 'lucide-react'

/* ─── Types ─── */
interface Tab {
  title: string
  description: string
}

/* ─── Data ─── */
const summaryCards = [
  { Icon: Shield, title: 'HIPAA Compliant', desc: 'Built-in from day one' },
  { Icon: Zap, title: 'Protocol Intelligence', desc: 'Understands clinical workflows' },
  { Icon: Bell, title: 'Predictive Alerts', desc: 'Flag at-risk patients early' },
]

const tabs: Tab[] = [
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
      'Flag at-risk patients 30 to 45 days before they drop off. Actionable alerts, not data dumps.',
  },
  {
    title: 'Compliance',
    description:
      'Private LLM deployment, AES-256 encryption, BAA provided. Your patient data never touches public models.',
  },
]

/* ─── Glass card content ─── */
const gradientDot: React.CSSProperties = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundImage: "url('/images/dot-image.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  flexShrink: 0,
}

function ModalHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-3">
      <div style={gradientDot} />
      <span className="text-sm font-semibold text-white">{title}</span>
    </div>
  )
}

function MiniTabBar({ items, active = 0 }: { items: string[]; active?: number }) {
  return (
    <div className="flex items-center gap-0.5 mb-3 rounded-lg p-0.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
      {items.map((t, i) => (
        <div
          key={t}
          className="flex-1 text-center text-[10px] font-medium py-1 rounded-md"
          style={{
            background: i === active ? 'rgba(255,255,255,0.12)' : 'transparent',
            color: i === active ? '#ffffff' : 'rgba(255,255,255,0.4)',
          }}
        >
          {t}
        </div>
      ))}
    </div>
  )
}

function ActionRow({ cancelLabel = 'Cancel', confirmLabel }: { cancelLabel?: string; confirmLabel: string }) {
  return (
    <div className="flex items-center justify-between mt-3">
      <button className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{cancelLabel}</button>
      <button
        className="text-[11px] font-semibold rounded-lg px-3 py-1.5"
        style={{ background: '#ffffff', color: '#000000' }}
      >
        {confirmLabel}
      </button>
    </div>
  )
}

function PatientEngagementCard() {
  return (
    <div className="flex flex-col">
      <ModalHeader title="New patient sequence" />
      <MiniTabBar items={['SMS', 'Email', 'Phone']} />
      <p className="text-[10px] mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Select protocol</p>
      <div
        className="flex items-center justify-between rounded-lg px-3 py-2 mb-3 text-xs"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)' }}
      >
        <span>NAD+ IV Therapy — Week 3</span>
        <span style={{ color: 'rgba(255,255,255,0.4)' }}>▾</span>
      </div>
      <p className="text-[10px] mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Timing</p>
      <div
        className="flex items-center justify-between rounded-lg px-3 py-2 text-xs"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)' }}
      >
        <span>Send 48 hours before appointment</span>
        <span style={{ color: 'rgba(255,255,255,0.4)' }}>▾</span>
      </div>
      <ActionRow confirmLabel="Create sequence" />
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
      <ModalHeader title="Protocol overview" />
      <MiniTabBar items={['Active', 'Completed', 'Archived']} />
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

function AnalyticsCard() {
  return (
    <div className="flex flex-col">
      <ModalHeader title="Patient risk alert" />
      <div
        className="rounded-lg p-3 mb-3"
        style={{ background: 'rgba(255,100,100,0.1)', border: '1px solid rgba(255,100,100,0.15)' }}
      >
        <p className="text-sm font-semibold text-white">2 patients flagged</p>
        <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Engagement dropped below threshold
        </p>
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
      <ActionRow cancelLabel="Dismiss" confirmLabel="Review patients" />
    </div>
  )
}

function ComplianceCard() {
  const items = [
    'HIPAA compliance active',
    'AES-256 encryption enabled',
    'Private LLM deployed',
    'BAA signed and stored',
    'Last pen test: 14 days ago',
  ]
  return (
    <div className="flex flex-col">
      <ModalHeader title="Security status" />
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
          View full audit log
        </button>
      </div>
    </div>
  )
}

const cardContent = [
  <PatientEngagementCard key="0" />,
  <ProtocolCard key="1" />,
  <AnalyticsCard key="2" />,
  <ComplianceCard key="3" />,
]

/* ─── Main component ─── */
export default function HealthcareShowcase() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [activeTab])

  function switchTab(i: number) {
    if (i === activeTab) return
    setActiveTab(i)
  }

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">

        {/* ── Top row ── */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">

          {/* Left: label + heading */}
          <div data-animate="" className="flex-shrink-0 max-w-[400px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundImage: "url('/images/dot-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Healthcare Platform
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Built for clinical workflows, not marketing funnels
            </h2>
          </div>

          {/* Right: 3 summary items */}
          <div
            data-animate=""
            className="flex flex-row items-stretch flex-shrink-0"
            style={{ transitionDelay: '80ms' }}
          >
            {summaryCards.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className="flex flex-col gap-2 flex-1"
                style={{
                  paddingLeft: i === 0 ? '0' : '20px',
                  paddingRight: i === summaryCards.length - 1 ? '0' : '20px',
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

        {/* ── Bottom two-column layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-[35fr_65fr] gap-8 items-start">

          {/* Left: product info + tabs */}
          <div data-animate="" style={{ transitionDelay: '120ms' }}>
            <p className="text-xl font-semibold text-white">Patient Engagement Engine</p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              The fastest way to automate, personalize, and scale patient communication.
            </p>
            <div className="mt-4">
              <Link
                href="/solutions/healthcare"
                className="inline-flex items-center gap-1.5 text-sm text-white rounded-full px-4 py-1.5 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                Explore Healthcare &#8250;
              </Link>
            </div>


            {/* Tabs */}
            <style>{`
              @keyframes hcFillProgress {
                from { width: 0%; }
                to { width: 100%; }
              }
            `}</style>
            <div className="flex flex-col">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => switchTab(i)}
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
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {tab.description}
                    </p>
                  </div>
                  {/* Progress line */}
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

          {/* Right: card with per-tab background crossfade */}
          <div
            data-animate=""
            className="relative rounded-2xl overflow-hidden"
            style={{ height: '500px', transitionDelay: '160ms' }}
          >
            {/* Per-tab background images — crossfade via opacity */}
            {[
              '/images/Ui-Card-Background1.jpg',
              '/images/Ui-Card-Background2.jpg',
              '/images/Ui-Card-Background3.jpg',
              '/images/Ui-Card-Background4.jpg',
            ].map((src, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: activeTab === i ? 1 : 0,
                  transition: 'opacity 300ms ease',
                }}
              />
            ))}

            {/* Dark tint */}
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.15)' }} />

            {/* Flex centering layer */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
            {/* Floating glass card */}
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
              {cardContent[activeTab]}
            </div>
            </div>{/* end flex centering layer */}
          </div>

        </div>
      </div>
    </section>
  )
}
