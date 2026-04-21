'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Layers, UserPlus, DollarSign, Youtube, Instagram } from 'lucide-react'
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

const glassCardStyle: React.CSSProperties = {
  background: 'rgba(0,0,0,0.55)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '12px',
  padding: '20px',
  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
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
        src="/images/hero-background-Image7.jpg"
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
          <span className="text-sm text-white">Pay For Access</span>
        </div>

        <h1
          className="text-3xl md:text-5xl text-white tracking-tight text-center"
          style={{ fontWeight: 600, maxWidth: '700px', lineHeight: 1.15 }}
        >
          Turn your expertise into passive income
        </h1>

        <p
          className="text-lg mt-4 text-center"
          style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '560px' }}
        >
          Train an AI on your content. Followers pay $4.99 for 24-hour personalized access. You earn while you sleep.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={SIGN_IN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: '#ffffff', color: '#0F0E0D' }}
          >
            Apply for Beta Access
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
            <div className="text-3xl font-semibold text-white">$4.99</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Per session</div>
          </div>
          <div data-animate="" className="flex-1 text-center py-8 md:py-4" style={{ transitionDelay: '80ms' }}>
            <div className="text-3xl font-semibold text-white">15 min</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Setup time</div>
          </div>
          <div data-animate="" className="flex-1 text-center py-8 md:py-4" style={{ transitionDelay: '160ms' }}>
            <div className="text-3xl font-semibold text-white">24/7</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>AI availability</div>
          </div>
          <div data-animate="" className="flex-1 text-center py-8 md:py-4" style={{ transitionDelay: '240ms' }}>
            <div className="text-3xl font-semibold text-white">Zero</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Ongoing time</div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 3: Benefit Cards ─── */

function MiniBarChart() {
  const heights = [30, 45, 35, 55, 40, 60, 50, 80]
  return (
    <div className="flex items-end gap-1 mt-3" style={{ height: '40px' }}>
      {heights.map((h, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${h}%`,
            background: i === heights.length - 1 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)',
          }}
        />
      ))}
    </div>
  )
}

function EarningsCard() {
  return (
    <div style={{ ...glassCardStyle, maxWidth: '280px', width: '100%' }}>
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Earnings snapshot</span>
      </div>
      <div className="flex items-center gap-0.5 mb-3 rounded-lg p-0.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
        {['Daily', 'Weekly', 'Monthly'].map((t, i) => (
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
      <div className="grid grid-cols-2 gap-2 mb-1">
        {[
          { label: 'Sessions', value: '1,247' },
          { label: 'Revenue', value: '$6,223' },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</p>
            <p className="text-lg font-bold text-white">{value}</p>
          </div>
        ))}
      </div>
      <MiniBarChart />
    </div>
  )
}

function BetaCard() {
  const items = [
    'Free setup ($500 value)',
    '3 months free ($297 value)',
    'Priority 24-hour support',
    '1:1 onboarding call',
  ]
  return (
    <div style={{ ...glassCardStyle, maxWidth: '280px', width: '100%' }}>
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Beta program</span>
      </div>
      <div className="flex flex-col">
        {items.map((item, i) => (
          <div
            key={item}
            className="flex items-center gap-2 py-2"
            style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
          >
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
              <path d="M3 8l3 3 7-7" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-xs text-white">{item}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 text-center">
        <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Apply now</span>
      </div>
    </div>
  )
}

function BenefitCards() {
  const cards = [
    {
      bg: '/images/Ui-Card-Background1.jpg',
      dot: 'Passive',
      title: 'Passive Income Engine',
      desc: 'Earn $34k to $172k per year (projected) with 100k followers at conservative conversion rates. Zero ongoing time commitment after setup.',
      mockup: <EarningsCard />,
    },
    {
      bg: '/images/Ui-Card-Background2.jpg',
      dot: 'Beta',
      title: 'White-Glove Onboarding',
      desc: 'Free setup, 3 months free, priority support, and 1:1 onboarding. We handle everything so you can focus on creating.',
      mockup: <BetaCard />,
    },
  ]

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div data-animate="" className="text-center mb-14">
          <h2 className="text-3xl text-white" style={{ fontWeight: 600 }}>
            Built for creators. Built for revenue.
          </h2>
          <p className="mt-3 text-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px' }}>
            Everything you need to scale your influence without scaling your time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map(({ bg, dot, title, desc, mockup }, i) => (
            <div
              key={title}
              data-animate=""
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="relative rounded-lg overflow-hidden"
                style={{ height: '400px' }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('${bg}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  {mockup}
                </div>
              </div>
              <div className="pt-5">
                <div className="flex items-center gap-2 mb-2">
                  <span style={gradientDot} />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{dot}</span>
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

/* ─── Section 4: How It Works (Giga-style tabs) ─── */

const workflowTabs = [
  {
    title: 'Train your AI',
    description:
      'Upload your existing content. YouTube videos, courses, PDFs. The AI ingests your knowledge in 24 to 48 hours.',
  },
  {
    title: 'Customize',
    description:
      'Set your pricing, tone, and CTAs. Make the AI sound like you and recommend your courses.',
  },
  {
    title: 'Share your link',
    description:
      'Drop your unique PayForAccess link in your YouTube descriptions, Instagram bio, or TikTok link tree.',
  },
  {
    title: 'Earn passively',
    description:
      'Followers pay $4.99 for 24 hours of personalized AI access. You earn automatically while you sleep.',
  },
]

const summaryItems = [
  { Icon: Layers, title: 'AI Clone', desc: 'Trained on your content' },
  { Icon: UserPlus, title: 'Lead Capture', desc: 'Grows your list' },
  { Icon: DollarSign, title: 'Revenue', desc: '$4.99 per session' },
]

function TrainCard() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Train your AI</span>
      </div>
      <div className="flex items-center gap-0.5 mb-3 rounded-lg p-0.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
        {['YouTube', 'PDF', 'Articles'].map((t, i) => (
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
      <p className="text-[10px] mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Add training content</p>
      <div
        className="flex flex-col items-center justify-center gap-2 rounded-lg py-6"
        style={{ border: '1px dashed rgba(255,255,255,0.15)' }}
      >
        <div className="flex items-center gap-2">
          {['MP4', 'PDF', 'TXT', 'MP3', 'URL'].map((f) => (
            <span
              key={f}
              className="text-[9px] rounded px-1.5 py-0.5"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}
            >
              {f}
            </span>
          ))}
        </div>
        <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>Drag files here or click to browse</p>
      </div>
      <div className="flex items-center justify-between mt-3">
        <button className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Cancel</button>
        <button
          className="text-[11px] font-semibold rounded-full px-4 py-1.5"
          style={{ background: '#ffffff', color: '#000000' }}
        >
          Start training
        </button>
      </div>
    </div>
  )
}

function CustomizeCard() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Customize AI</span>
      </div>
      <div className="flex flex-col gap-2">
        {[
          { label: 'Session price', value: '$4.99' },
          { label: 'AI tone', value: 'Friendly & expert' },
          { label: 'CTA target', value: 'Course upgrade' },
        ].map(({ label, value }) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-lg px-3 py-2"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</span>
            <span className="text-xs text-white">{value}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between mt-3">
        <button className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Cancel</button>
        <button
          className="text-[11px] font-semibold rounded-full px-4 py-1.5"
          style={{ background: '#ffffff', color: '#000000' }}
        >
          Save
        </button>
      </div>
    </div>
  )
}

function ShareCard() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Your unique link</span>
      </div>
      <div
        className="rounded-lg px-3 py-2.5 mb-3 text-xs text-center"
        style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        a2v2.ai/c/yourname
      </div>
      <div className="flex items-center justify-center gap-4 mb-3">
        <Youtube size={16} style={{ color: 'rgba(255,255,255,0.4)' }} />
        <Instagram size={16} style={{ color: 'rgba(255,255,255,0.4)' }} />
        {/* TikTok */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.4)">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.18 8.18 0 0 0 4.78 1.52V6.79a4.85 4.85 0 0 1-1.01-.1z" />
        </svg>
        {/* Twitter/X */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.4)">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.26 5.631 5.905-5.631Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>
      <button
        className="w-full text-sm font-semibold rounded-full py-2"
        style={{ background: '#ffffff', color: '#000000' }}
      >
        Copy link
      </button>
    </div>
  )
}

function EarnCard() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Live earnings</span>
      </div>
      <div className="grid grid-cols-2 gap-2 mb-1">
        {[
          { label: 'Today', value: '$127.42' },
          { label: 'This month', value: '$3,841' },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</p>
            <p className="text-lg font-bold text-white">{value}</p>
          </div>
        ))}
      </div>
      <MiniBarChart />
      <button
        className="mt-3 w-full text-[11px] font-semibold rounded-full py-2"
        style={{ background: '#ffffff', color: '#000000' }}
      >
        View dashboard
      </button>
    </div>
  )
}

const workflowCards = [
  <TrainCard key="0" />,
  <CustomizeCard key="1" />,
  <ShareCard key="2" />,
  <EarnCard key="3" />,
]

function HowItWorksSection() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % workflowTabs.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [activeTab])

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">
          <div data-animate="" className="flex-shrink-0 max-w-[400px]">
            <div className="flex items-center gap-2 mb-3">
              <span style={gradientDot} />
              <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Pay For Access
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl text-white leading-tight" style={{ fontWeight: 600 }}>
              From content to passive income in 4 steps
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

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-[35fr_65fr] gap-8 items-start">

          {/* Left: tabs */}
          <div data-animate="" style={{ transitionDelay: '120ms' }}>
            <p className="text-xl font-semibold text-white">Creator Workflow</p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              The fastest way to monetize your expertise with zero ongoing time commitment.
            </p>
            <div className="mt-4">
              <a
                href={SIGN_IN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white rounded-full px-4 py-1.5 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                Apply now &#8250;
              </a>
            </div>

            <style>{`
              @keyframes pfaFillProgress {
                from { width: 0%; }
                to { width: 100%; }
              }
            `}</style>

            <div className="flex flex-col">
              {workflowTabs.map((tab, i) => (
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
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {tab.description}
                    </p>
                  </div>
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

          {/* Right: card */}
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
                {workflowCards[activeTab]}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── Section 5: Revenue Calculator ─── */

function formatFollowers(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${Math.round(n / 1_000)}k`
  return String(n)
}

function RevenueCalculator() {
  const [followers, setFollowers] = useState(100_000)
  const [conversionRate, setConversionRate] = useState(3)

  const payingFollowers = Math.round(followers * (conversionRate / 100))
  const annualEarnings = Math.round(payingFollowers * 4.99)
  const monthlyEarnings = Math.round(annualEarnings / 12)

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div data-animate="" className="text-center mb-12">
          <h2 className="text-3xl text-white" style={{ fontWeight: 600 }}>
            Calculate your projected earnings
          </h2>
          <p className="mt-3 text-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Based on $4.99 per session and 1 to 5 percent follower conversion
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
          {/* Slider 1 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Your follower count</span>
              <span className="text-2xl font-medium text-white">{formatFollowers(followers)}</span>
            </div>
            <input
              type="range"
              min={10_000}
              max={1_000_000}
              step={10_000}
              value={followers}
              onChange={(e) => setFollowers(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: '#ffffff' }}
            />
          </div>

          {/* Slider 2 */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Expected conversion rate</span>
              <span className="text-2xl font-medium text-white">{conversionRate}%</span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              step={0.5}
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: '#ffffff' }}
            />
          </div>

          {/* Results */}
          <div
            className="grid grid-cols-2 gap-4 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            {[
              { label: 'Projected annual earnings', value: `$${annualEarnings.toLocaleString()}`, sub: 'per year' },
              { label: 'Projected monthly earnings', value: `$${monthlyEarnings.toLocaleString()}`, sub: 'per month' },
            ].map(({ label, value, sub }) => (
              <div
                key={label}
                className="rounded-xl p-5"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <p className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</p>
                <p className="text-2xl font-medium text-white">{value}</p>
                <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{sub}</p>
              </div>
            ))}
          </div>

          {/* Breakdown */}
          <div
            className="flex flex-wrap gap-x-6 gap-y-2 mt-4 pt-4 text-sm"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>
              Sessions/year: <span className="font-medium text-white">{payingFollowers.toLocaleString()}</span>
            </span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>
              Per session: <span className="font-medium text-white">$4.99</span>
            </span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>
              Paying followers: <span className="font-medium text-white">{payingFollowers.toLocaleString()}</span>
            </span>
          </div>

          <p className="mt-4 text-xs text-center" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Revenue projections are estimates based on conversion rate modeling. Actual results may vary.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 6: FAQ ─── */

const faqs = [
  {
    q: 'Will AI replace my personal touch?',
    a: 'No. The AI handles routine Q&A. The DMs you would answer anyway. You own the relationship and focus on high-value 1:1 work.',
  },
  {
    q: 'What if AI gives bad advice?',
    a: 'The AI is trained only on your content. Your expertise, your tone, your methodology. You can review conversations and adjust training anytime.',
  },
  {
    q: 'Why would followers pay when I give free content?',
    a: 'Free content is generic, one-to-many. PayForAccess is personalized, one-to-one. Followers pay for advice specific to their situation.',
  },
  {
    q: 'Will this cannibalize my course or membership sales?',
    a: 'PayForAccess is designed as a top-of-funnel tool. $4.99 gets people in the door, the AI experiences your expertise, and encourages upgrades to your full offerings.',
  },
  {
    q: 'How long does setup take?',
    a: 'About 15 minutes. Upload content, customize AI, share link. AI trains in background (24 to 48 hours). After that, it is designed to run passively.',
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
          style={{
            color: 'rgba(255,255,255,0.4)',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>
      <div
        style={{
          maxHeight: open ? '300px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 250ms ease',
        }}
      >
        <p className="pb-5 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{a}</p>
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
        <p className="mt-6 text-sm mx-auto" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '400px' }}>
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

export default function PayForAccessPage() {
  return (
    <main style={{ background: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>
      <ScrollAnimator />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <BenefitCards />
      <HowItWorksSection />
      <RevenueCalculator />
      <FaqSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
