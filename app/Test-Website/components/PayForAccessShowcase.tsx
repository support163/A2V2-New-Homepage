'use client'

import { useState, useEffect } from 'react'
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

function AiCloneCard() {
  return (
    <div className="flex flex-col">
      <ModalHeader title="Train your AI" />
      <MiniTabBar items={['YouTube', 'PDF', 'Articles']} />
      <p className="text-[10px] mb-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Add training content</p>
      <p className="text-[10px] mb-2.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
        Upload files to train your AI on your expertise
      </p>
      <div
        className="rounded-lg flex flex-col items-center justify-center py-5 mb-3"
        style={{ border: '1px dashed rgba(255,255,255,0.15)' }}
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          {['MP4', 'PDF', 'DOC', 'TXT'].map((ext) => (
            <div
              key={ext}
              className="text-[8px] font-semibold px-1.5 py-0.5 rounded"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.35)' }}
            >
              {ext}
            </div>
          ))}
        </div>
        <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
          Drag files here or click to browse
        </p>
      </div>
      <ActionRow confirmLabel="Start training" />
    </div>
  )
}

function LeadCaptureCard() {
  return (
    <div className="flex flex-col">
      <ModalHeader title="Lead gate settings" />
      <p className="text-[10px] mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Require before access</p>
      <div className="flex flex-col gap-2 mb-3">
        <div
          className="flex items-center gap-2 rounded-lg px-3 py-2"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="8" r="4" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Full name</span>
        </div>
        <div
          className="flex items-center gap-2 rounded-lg px-3 py-2"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="4" width="20" height="16" rx="2" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
            <path d="M2 8l10 6 10-6" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Email address</span>
        </div>
      </div>
      <p className="text-[10px] mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Session price</p>
      <div
        className="flex items-center gap-2 rounded-lg px-3 py-2"
        style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>$</span>
        <span className="text-xs text-white">4.99</span>
      </div>
      <ActionRow confirmLabel="Save settings" />
    </div>
  )
}

function RevenueCard() {
  const bars = [35, 50, 42, 60, 72, 55, 80, 68]
  return (
    <div className="flex flex-col">
      <ModalHeader title="Earnings snapshot" />
      <MiniTabBar items={['Daily', 'Weekly', 'Monthly']} />
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <p className="text-[9px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Sessions</p>
          <p className="text-lg font-bold text-white">1,247</p>
        </div>
        <div className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <p className="text-[9px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Revenue</p>
          <p className="text-lg font-bold text-white">$6,223</p>
        </div>
      </div>
      <div className="rounded-lg p-2.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div className="flex items-end gap-0.5 h-8 mb-1.5">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background: i === bars.length - 1 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)',
              }}
            />
          ))}
        </div>
        <p className="text-center text-[9px]" style={{ color: 'rgba(255,255,255,0.3)' }}>Last 8 weeks</p>
      </div>
    </div>
  )
}

function AnalyticsCard() {
  const questions = [
    'How do I start a calorie deficit?',
    'Best supplements for recovery?',
    'How often should I train legs?',
    'What should I eat post-workout?',
  ]
  return (
    <div className="flex flex-col">
      <ModalHeader title="Audience insights" />
      <MiniTabBar items={['Questions', 'Demographics', 'Conversions']} />
      <div className="flex flex-col">
        {questions.map((q, i) => (
          <div
            key={i}
            className="flex items-start gap-2.5 py-2"
            style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
          >
            <span className="text-[10px] font-semibold flex-shrink-0" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {i + 1}.
            </span>
            <span className="text-xs text-white">{q}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex justify-center">
        <button
          className="text-[11px] font-medium rounded-full px-4 py-1.5"
          style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.8)' }}
        >
          Export report
        </button>
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
                Pay For Access
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


            {/* Tabs */}
            <style>{`
              @keyframes pfaFillProgress {
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
                        key={`pfa-progress-${activeTab}`}
                        style={{
                          height: '100%',
                          background: 'rgba(255,255,255,0.8)',
                          animation: 'pfaFillProgress 8s linear forwards',
                        }}
                      />
                    )}
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
