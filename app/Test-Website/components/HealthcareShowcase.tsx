'use client'

import { useState } from 'react'
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
const innerBg = 'rgba(255,255,255,0.08)'
const avatarBg = 'rgba(255,255,255,0.15)'

function PatientEngagementCard() {
  const patients = [
    { initials: 'SJ', name: 'Sarah J.', protocol: 'HRT Protocol · Week 6', status: 'Sent', sbg: 'rgba(37,99,235,0.3)', sc: '#93c5fd' },
    { initials: 'MK', name: 'Michael K.', protocol: 'NAD+ Protocol · Week 3', status: 'Opened', sbg: 'rgba(22,163,74,0.3)', sc: '#86efac' },
    { initials: 'AL', name: 'Alyssa R.', protocol: 'Peptide Protocol · Week 1', status: 'Scheduled', sbg: 'rgba(217,119,6,0.3)', sc: '#fcd34d' },
    { initials: 'DP', name: 'Derek P.', protocol: 'Biomarker Review · Week 2', status: 'Sent', sbg: 'rgba(37,99,235,0.3)', sc: '#93c5fd' },
  ]
  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Patient Queue</p>
      {patients.map((p) => (
        <div key={p.name} className="flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ background: innerBg }}>
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-semibold flex-shrink-0" style={{ background: avatarBg, color: 'rgba(255,255,255,0.8)' }}>
            {p.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold truncate text-white">{p.name}</p>
            <p className="text-[10px] truncate" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.protocol}</p>
          </div>
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap" style={{ background: p.sbg, color: p.sc }}>
            {p.status}
          </span>
        </div>
      ))}
    </div>
  )
}

function ProtocolCard() {
  const protocols = [
    { name: 'NAD+ Therapy', patients: '48 patients', pct: 76 },
    { name: 'HRT Protocol', patients: '124 patients', pct: 82 },
    { name: 'Peptide Therapy', patients: '31 patients', pct: 61 },
    { name: 'Biomarker Tracking', patients: '89 patients', pct: 45 },
  ]
  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Active Protocols</p>
      {protocols.map((p) => (
        <div key={p.name} className="rounded-xl px-3 py-2.5" style={{ background: innerBg }}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold text-white">{p.name}</span>
            <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.patients}</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.12)' }}>
            <div className="h-full bg-blue-400 rounded-full" style={{ width: `${p.pct}%` }} />
          </div>
          <div className="text-right mt-1">
            <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.pct}% adherence</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function AnalyticsCard() {
  const bars = [85, 78, 70, 62, 58, 50, 44, 35]
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-2.5">
        <div className="rounded-xl p-3" style={{ background: innerBg }}>
          <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Patient retention</p>
          <p className="text-xl font-semibold text-white mt-0.5">87%</p>
          <p className="text-[10px] text-green-400 mt-0.5">+12% vs. baseline</p>
        </div>
        <div className="rounded-xl p-3" style={{ background: innerBg }}>
          <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>At-risk patients</p>
          <p className="text-xl font-semibold text-white mt-0.5">4</p>
          <p className="text-[10px] text-amber-400 mt-0.5">Flagged this week</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {[
          { name: 'Rachel M.', detail: 'No check-in in 18 days' },
          { name: 'James T.', detail: 'Missed 2 protocol milestones' },
        ].map((a) => (
          <div key={a.name} className="flex items-center gap-3 rounded-xl px-3 py-2" style={{ background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.2)' }}>
            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white">{a.name}</p>
              <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.45)' }}>{a.detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-xl p-3" style={{ background: innerBg }}>
        <p className="text-[10px] mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Retention trend (8 weeks)</p>
        <div className="flex items-end gap-1 h-10">
          {bars.map((h, i) => (
            <div key={i} className={`flex-1 rounded-sm ${i === bars.length - 1 ? 'bg-blue-400' : 'bg-blue-400/30'}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ComplianceCard() {
  const items = [
    { label: 'HIPAA Compliant', sub: 'Full BAA provided on all plans' },
    { label: 'AES-256 Encryption', sub: 'Data encrypted at rest and in transit' },
    { label: 'Private LLM', sub: 'Your data never touches public models' },
  ]
  const badges = ['BAA provided', 'Private LLM', 'Audit logs', 'ITAR compliant', 'Pen tested', 'RBAC']
  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Security overview</p>
      {items.map((s) => (
        <div key={s.label} className="flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ background: innerBg }}>
          <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(22,163,74,0.2)' }}>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3 3 7-7" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-white">{s.label}</p>
            <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{s.sub}</p>
          </div>
        </div>
      ))}
      <div className="flex flex-wrap gap-1.5 mt-1">
        {badges.map((b) => (
          <span key={b} className="inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-medium" style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.6)' }}>
            <svg width="8" height="8" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3 3 7-7" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {b}
          </span>
        ))}
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
              <span className="w-2 h-2 rounded-full bg-white flex-shrink-0" />
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>
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

            {/* Divider */}
            <div className="mt-6 mb-2" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />

            {/* Tabs */}
            <div className="flex flex-col">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => switchTab(i)}
                  className="w-full text-left py-4 transition-all duration-200"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}
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
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
              }}
            >
              <div style={{ position: 'relative', height: '300px', overflow: 'hidden' }}>
                {cardContent.map((content, i) => (
                  <div
                    key={i}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      opacity: activeTab === i ? 1 : 0,
                      pointerEvents: activeTab === i ? 'auto' : 'none',
                      transition: 'opacity 300ms ease',
                    }}
                  >
                    {content}
                  </div>
                ))}
              </div>
            </div>
            </div>{/* end flex centering layer */}
          </div>

        </div>
      </div>
    </section>
  )
}
