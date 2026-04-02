'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Layers, UserPlus, DollarSign } from 'lucide-react'

/* ─── Types ─── */
interface Tab {
  title: string
  description: string
}

/* ─── Data ─── */
const summaryCards = [
  { Icon: Layers, title: 'AI Clone', desc: 'Trained on your content' },
  { Icon: UserPlus, title: 'Lead Capture', desc: 'Grows your list automatically' },
  { Icon: DollarSign, title: 'Passive Income', desc: '$4.99 per session, 24/7' },
]

const tabs: Tab[] = [
  {
    title: 'AI clone',
    description:
      'Train an AI on your content. It answers questions in your voice, tone, and methodology, 24/7.',
  },
  {
    title: 'Lead capture',
    description:
      'Every conversation captures name and email before granting access. Your list grows on autopilot.',
  },
  {
    title: 'Revenue engine',
    description:
      'Followers pay $4.99 for 24-hour access. You earn passive income while you sleep.',
  },
  {
    title: 'Analytics',
    description:
      'Track sessions, revenue, top questions, and conversion rates in real time.',
  },
]

/* ─── Glass card content ─── */
const innerBg = 'rgba(255,255,255,0.08)'

function AiCloneCard() {
  const steps = [
    { num: 1, label: 'Classify', sub: 'Determine complexity', done: true },
    { num: 2, label: 'Plan', sub: 'Build response strategy', done: true },
    { num: 3, label: 'Execute', sub: 'Generate personalized answer', done: false, active: true },
    { num: 4, label: 'Analyze', sub: 'Quality control check', done: false },
  ]
  return (
    <div className="flex flex-col gap-2.5">
      <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>AI Pipeline</p>
      {steps.map((step) => (
        <div key={step.num} className="flex items-center gap-3 rounded-xl px-3 py-2.5" style={{ background: innerBg }}>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
            style={{
              background: step.done ? 'rgba(22,163,74,0.2)' : step.active ? 'rgba(37,99,235,0.2)' : 'rgba(255,255,255,0.06)',
              color: step.done ? '#86efac' : step.active ? '#93c5fd' : 'rgba(255,255,255,0.3)',
            }}
          >
            {step.done ? (
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8l3 3 7-7" stroke="#86efac" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : step.num}
          </div>
          <div>
            <p className="text-xs font-semibold" style={{ color: step.done ? 'rgba(255,255,255,0.7)' : step.active ? '#93c5fd' : 'rgba(255,255,255,0.3)' }}>
              {step.label}
            </p>
            <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{step.sub}</p>
          </div>
          {step.active && (
            <span className="ml-auto text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(37,99,235,0.2)', color: '#93c5fd' }}>
              Processing
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

function LeadCaptureCard() {
  return (
    <div className="flex flex-col gap-3 max-w-[300px] mx-auto">
      <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>Lead Capture Form</p>
      <div className="rounded-xl p-4 flex flex-col gap-3" style={{ background: innerBg }}>
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.1)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-white">Chat with Alex</p>
            <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Access expires in 24h</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="rounded-lg px-3 py-2 text-xs" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)' }}>
            Full name
          </div>
          <div className="rounded-lg px-3 py-2 text-xs" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)' }}>
            Email address
          </div>
        </div>
        <button className="w-full bg-blue-600 text-white text-xs font-semibold rounded-lg py-2 hover:bg-blue-700 transition-colors">
          Start chatting for $4.99
        </button>
        <div className="flex items-center justify-center gap-1">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="11" width="18" height="11" rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.35)' }}>Secured by Stripe</span>
        </div>
      </div>
    </div>
  )
}

function RevenueCard() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Earnings Summary</p>
      <div className="rounded-xl p-3 flex flex-col gap-2" style={{ background: innerBg }}>
        {[
          { label: 'Followers', val: '100,000' },
          { label: 'Conversion rate', val: '3%' },
          { label: 'Price per session', val: '$4.99' },
        ].map((r) => (
          <div key={r.label} className="flex items-center justify-between">
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{r.label}</span>
            <span className="text-xs font-semibold text-white">{r.val}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <div className="rounded-xl p-3" style={{ background: 'rgba(37,99,235,0.15)' }}>
          <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>Monthly (est.)</p>
          <p className="text-lg font-semibold text-blue-400 mt-0.5">$14,970</p>
        </div>
        <div className="rounded-xl p-3" style={{ background: innerBg }}>
          <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>Annual (proj.)</p>
          <p className="text-lg font-semibold text-white mt-0.5">$179,640</p>
        </div>
      </div>
      <p className="text-[10px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.3)' }}>
        Projections based on industry conversion data. Actual results may vary.
      </p>
    </div>
  )
}

function AnalyticsCard() {
  const bars = [40, 55, 48, 62, 70, 58, 75, 65]
  const topQ = ['How should I structure my offer?', 'What tools do you recommend?', 'How do I grow on Instagram?']
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-2.5">
        <div className="rounded-xl p-3" style={{ background: innerBg }}>
          <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Sessions</p>
          <p className="text-xl font-semibold text-white">1,247</p>
          <p className="text-[10px] text-green-400 mt-0.5">+18% this week</p>
        </div>
        <div className="rounded-xl p-3" style={{ background: innerBg }}>
          <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Revenue (est.)</p>
          <p className="text-xl font-semibold text-white">$6,223</p>
          <p className="text-[10px] text-green-400 mt-0.5">+22% this week</p>
        </div>
      </div>
      <div className="rounded-xl p-3" style={{ background: innerBg }}>
        <p className="text-[10px] mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Sessions (last 8 weeks)</p>
        <div className="flex items-end gap-1 h-10">
          {bars.map((h, i) => (
            <div key={i} className={`flex-1 rounded-sm ${i === bars.length - 1 ? 'bg-blue-400' : 'bg-blue-400/30'}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className="rounded-xl p-3" style={{ background: innerBg }}>
        <p className="text-[10px] mb-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>Top questions</p>
        <div className="flex flex-col gap-1">
          {topQ.map((q) => (
            <p key={q} className="text-[10px] truncate" style={{ color: 'rgba(255,255,255,0.65)' }}>{q}</p>
          ))}
        </div>
      </div>
    </div>
  )
}

const cardContent = [
  <AiCloneCard key="0" />,
  <LeadCaptureCard key="1" />,
  <RevenueCard key="2" />,
  <AnalyticsCard key="3" />,
]

/* ─── Main component ─── */
export default function PayForAccessShowcase() {
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
                PayForAccess
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Turn followers into revenue, automatically
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
        <div className="grid grid-cols-1 md:grid-cols-[65fr_35fr] gap-8 items-start">

          {/* Left: card with per-tab background crossfade */}
          <div
            data-animate=""
            className="relative rounded-2xl overflow-hidden"
            style={{ height: '500px', transitionDelay: '160ms' }}
          >
            {/* Per-tab background images (reversed order) — crossfade via opacity */}
            {[
              '/images/Ui-Card-Background4.jpg',
              '/images/Ui-Card-Background3.jpg',
              '/images/Ui-Card-Background2.jpg',
              '/images/Ui-Card-Background1.jpg',
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

          {/* Right: product info + tabs */}
          <div data-animate="" style={{ transitionDelay: '120ms' }}>
            <p className="text-xl font-semibold text-white">Creator Revenue Engine</p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              The fastest way to monetize your expertise with zero ongoing time commitment.
            </p>
            <div className="mt-4">
              <Link
                href="/features/pay-for-access"
                className="inline-flex items-center gap-1.5 text-sm text-white rounded-full px-4 py-1.5 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                Explore PayForAccess &#8250;
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

        </div>
      </div>
    </section>
  )
}
