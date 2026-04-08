'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { ChevronDown, MessageSquare, Filter, Calendar, User } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'

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
        src="/images/hero-background-Image4.jpg"
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
          <span className="text-sm text-white">Real Estate AI</span>
        </div>

        <h1
          className="text-3xl md:text-5xl text-white tracking-tight text-center"
          style={{ fontWeight: 600, maxWidth: '720px', lineHeight: 1.15 }}
        >
          Your 24/7 inside sales agent for real estate
        </h1>

        <p
          className="text-lg mt-4 text-center"
          style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '580px' }}
        >
          A2V2.ai qualifies leads, answers listing questions, and schedules private viewings automatically. No missed calls. No lost leads. No extra staff.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.app.a2v2.ai/signin"
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
            <div className="text-3xl font-semibold text-white">100x</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Faster lead response</div>
          </div>
          <div data-animate="" className="flex-1 text-center py-8 md:py-4" style={{ transitionDelay: '80ms' }}>
            <div className="text-3xl font-semibold text-white">24/7</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Lead engagement</div>
          </div>
          <div data-animate="" className="flex-1 text-center py-8 md:py-4" style={{ transitionDelay: '160ms' }}>
            <div className="text-3xl font-semibold text-white">
              <AnimatedNumber target={0} format={() => '0'} />
            </div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Extra staff needed</div>
          </div>
          <div data-animate="" className="flex-1 text-center py-8 md:py-4" style={{ transitionDelay: '240ms' }}>
            <div className="text-3xl font-semibold text-white">Minutes</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>To go live</div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 3: Benefit Cards ─── */

function LeadPipelineCard() {
  const leads = [
    { initials: 'RS', name: 'Rachel S.', detail: '$650k · Pre-approved', status: 'Hot' },
    { initials: 'MJ', name: 'Marcus J.', detail: '$400k · Exploring', status: 'Warm' },
    { initials: 'TW', name: 'Tanya W.', detail: '$800k · Pre-approved', status: 'Hot' },
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
        <span className="text-sm font-semibold text-white">Lead pipeline</span>
      </div>
      <div className="flex items-center gap-0.5 mb-3 rounded-lg p-0.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
        {['Hot', 'Warm', 'Cold'].map((t, i) => (
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
        {leads.map((l, i) => (
          <div
            key={l.name}
            className="flex items-center gap-2.5 py-2.5"
            style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
          >
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-semibold text-white"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              {l.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white leading-tight">{l.name}</p>
              <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{l.detail}</p>
            </div>
            <span
              className="text-[10px] rounded-full px-2 py-0.5 flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
            >
              {l.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function BioLinkCard() {
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
        <span className="text-sm font-semibold text-white">Bio link profile</span>
      </div>
      <div className="flex flex-col items-center mb-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center mb-1.5"
          style={{ border: '1px solid rgba(255,255,255,0.3)' }}
        >
          <User size={18} style={{ color: 'rgba(255,255,255,0.7)' }} />
        </div>
        <p className="text-sm font-semibold text-white">Sarah Mitchell</p>
        <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Luxury Real Estate</p>
      </div>
      <div className="flex flex-col gap-1.5 mb-3">
        {['742 Oak St · $525k', '1200 Vine Ave · $1.2M'].map((listing) => (
          <div
            key={listing}
            className="rounded-lg px-3 py-2 text-xs text-white"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            {listing}
          </div>
        ))}
      </div>
      <button
        className="w-full text-xs font-medium rounded-full py-2"
        style={{ background: 'rgba(255,255,255,0.12)', color: '#ffffff' }}
      >
        Chat with my AI
      </button>
    </div>
  )
}

function BenefitCards() {
  const cards = [
    {
      bg: '/images/Ui-Card-Background1.jpg',
      dot: 'Leads',
      title: 'Smart Lead Pipeline',
      desc: 'Designed to qualify leads automatically by asking the right questions. Budget, timeline, pre-approval. So you spend time on prospects ready to move.',
      mockup: <LeadPipelineCard />,
    },
    {
      bg: '/images/Ui-Card-Background2.jpg',
      dot: 'Bio Link',
      title: 'Bio Link Lead Machine',
      desc: 'Replace your link tree with an AI-powered profile. Prospects from Instagram, TikTok, and YouTube engage, ask questions, and get qualified in one place.',
      mockup: <BioLinkCard />,
    },
  ]

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div data-animate="" className="text-center mb-14">
          <h2 className="text-3xl text-white" style={{ fontWeight: 600 }}>
            Built for agents who close
          </h2>
          <p className="mt-3 text-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px' }}>
            AI that captures, qualifies, and books while you focus on closing.
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

/* ─── Section 4: Feature Showcase ─── */

const showcaseTabs = [
  {
    title: 'Listing inquiries',
    description:
      'Your AI knows every detail about your properties. Square footage, HOA, schools, parking. Prospects get accurate answers instantly, even at 11 PM.',
  },
  {
    title: 'Lead qualification',
    description:
      'AI asks about budget, timeline, pre-approval, and preferred neighborhoods. You get qualified leads, not tire-kickers.',
  },
  {
    title: 'Viewing scheduler',
    description:
      'When a qualified lead wants to see a property, your AI offers available slots and books directly into your calendar.',
  },
  {
    title: 'Bio link profile',
    description:
      'Your bio link becomes a digital storefront. Engage prospects from Instagram, TikTok, and YouTube in one interactive profile.',
  },
]

const summaryItems = [
  { Icon: MessageSquare, title: '24/7 Response', desc: 'Never miss a lead' },
  { Icon: Filter, title: 'Smart Qualifying', desc: 'Filter for serious buyers' },
  { Icon: Calendar, title: 'Auto Booking', desc: 'Direct calendar integration' },
]

function LiveChatCard() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Live chat</span>
      </div>
      <div className="flex items-center gap-0.5 mb-3 rounded-lg p-0.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
        {['All', 'Active', 'Archived'].map((t, i) => (
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
      <div className="flex flex-col gap-1.5 mb-3">
        <div className="rounded-lg p-2 text-xs text-white" style={{ background: 'rgba(255,255,255,0.08)' }}>
          Is the 3BR on Oak St still available?
        </div>
        <div className="rounded-lg p-2 text-xs text-white ml-4" style={{ background: 'rgba(255,255,255,0.15)' }}>
          Yes! 742 Oak St is still listed. HOA is $285/mo. Want to schedule a viewing?
        </div>
        <div className="rounded-lg p-2 text-xs text-white" style={{ background: 'rgba(255,255,255,0.08)' }}>
          What about parking?
        </div>
        <div className="rounded-lg p-2 text-xs text-white ml-4" style={{ background: 'rgba(255,255,255,0.15)' }}>
          2 garage spots plus guest parking included.
        </div>
      </div>
      <div className="flex items-center justify-between">
        <button className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Close</button>
        <button className="text-[11px] font-semibold rounded-full px-4 py-1.5" style={{ background: '#ffffff', color: '#000000' }}>
          Reply
        </button>
      </div>
    </div>
  )
}

function QualifyLeadCard() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Qualify lead</span>
      </div>
      <div className="flex flex-col gap-2 mb-3">
        {[
          { label: 'Budget', value: '$500k - $750k' },
          { label: 'Timeline', value: '30 days' },
          { label: 'Pre-approved', value: 'Yes' },
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
      <div
        className="flex items-center justify-between rounded-lg px-3 py-2 mb-3"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
      >
        <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Lead score</span>
        <span className="text-sm font-semibold text-white">9/10 — Hot</span>
      </div>
      <div className="flex items-center justify-between">
        <button className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Skip</button>
        <button className="text-[11px] font-semibold rounded-full px-4 py-1.5" style={{ background: '#ffffff', color: '#000000' }}>
          Save lead
        </button>
      </div>
    </div>
  )
}

function ViewingSchedulerCard() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Book viewing</span>
      </div>
      <div className="rounded-lg p-3 mb-3" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <p className="text-sm font-semibold text-white">742 Oak Street, Unit 4B</p>
        <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>3 bed · 2 bath · 1,450 sqft</p>
        <p className="text-sm text-white mt-1">$525,000</p>
      </div>
      <p className="text-[10px] mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Available times</p>
      <div className="flex items-center gap-1.5 mb-3">
        {[
          { label: 'Tue 2 PM', active: false },
          { label: 'Wed 10 AM', active: true },
          { label: 'Thu 4:30 PM', active: false },
        ].map(({ label, active }) => (
          <span
            key={label}
            className="text-[10px] rounded-full px-2.5 py-1"
            style={{
              background: active ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.06)',
              color: active ? '#ffffff' : 'rgba(255,255,255,0.5)',
              border: active ? '1px solid rgba(255,255,255,0.2)' : '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {label}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <button className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Cancel</button>
        <button className="text-[11px] font-semibold rounded-full px-4 py-1.5" style={{ background: '#ffffff', color: '#000000' }}>
          Confirm booking
        </button>
      </div>
    </div>
  )
}

function ProfilePreviewCard() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Profile preview</span>
      </div>
      <div className="flex flex-col items-center mb-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center mb-1.5"
          style={{ border: '1px solid rgba(255,255,255,0.3)' }}
        >
          <User size={18} style={{ color: 'rgba(255,255,255,0.7)' }} />
        </div>
        <p className="text-sm font-semibold text-white">Sarah Mitchell</p>
        <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Luxury Real Estate · Beverly Hills</p>
      </div>
      <div
        className="flex items-center justify-center gap-3 py-2 mb-3 rounded-lg text-[10px]"
        style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)' }}
      >
        <span>142 Listings</span>
        <span>4.9 ★</span>
        <span>12 yrs</span>
      </div>
      <div className="flex flex-col gap-1.5 mb-3">
        {['742 Oak St · $525k', '1200 Vine Ave · $1.2M'].map((listing) => (
          <div
            key={listing}
            className="rounded-lg px-3 py-2 text-xs text-white"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            {listing}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <button className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Edit</button>
        <button className="text-[11px] font-semibold rounded-full px-4 py-1.5" style={{ background: '#ffffff', color: '#000000' }}>
          View live
        </button>
      </div>
    </div>
  )
}

const showcaseCards = [
  <LiveChatCard key="0" />,
  <QualifyLeadCard key="1" />,
  <ViewingSchedulerCard key="2" />,
  <ProfilePreviewCard key="3" />,
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
              <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Real Estate AI
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl text-white leading-tight" style={{ fontWeight: 600 }}>
              Capture, qualify, and book on autopilot
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
            <p className="text-xl font-semibold text-white">Inside Sales Engine</p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              The fastest way to capture leads, qualify buyers, and book viewings without lifting a finger.
            </p>
            <div className="mt-4">
              <a
                href="https://www.app.a2v2.ai/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white rounded-full px-4 py-1.5 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                Try For Free &#8250;
              </a>
            </div>

            <style>{`
              @keyframes reFillProgress {
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
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {tab.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full" style={{ height: '2px', background: 'rgba(255,255,255,0.1)' }}>
                    {activeTab === i && (
                      <div
                        key={`re-progress-${activeTab}`}
                        style={{
                          height: '100%',
                          background: 'rgba(255,255,255,0.8)',
                          animation: 'reFillProgress 8s linear forwards',
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
  const [inquiries, setInquiries] = useState(100)
  const [commission, setCommission] = useState(15000)

  const additionalDeals = Math.round(inquiries * 0.15 * 0.20 * 12)
  const additionalRevenue = Math.round(inquiries * 0.15 * 0.20 * commission * 12)
  const recoveredMonthly = Math.round(inquiries * 0.15)

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div data-animate="" className="text-center mb-12">
          <h2 className="text-3xl text-white" style={{ fontWeight: 600 }}>
            The math on never missing a lead
          </h2>
          <p className="mt-3 text-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>
            See how much revenue you could recover with 24/7 lead engagement
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
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Monthly inquiries</span>
              <span className="text-2xl font-medium text-white">{inquiries}</span>
            </div>
            <input
              type="range"
              min={10}
              max={500}
              step={10}
              value={inquiries}
              onChange={(e) => setInquiries(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: '#ffffff' }}
            />
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>Average commission per deal</span>
              <span className="text-2xl font-medium text-white">${commission.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={5000}
              max={50000}
              step={1000}
              value={commission}
              onChange={(e) => setCommission(Number(e.target.value))}
              className="w-full"
              style={{ accentColor: '#ffffff' }}
            />
          </div>

          <div
            className="grid grid-cols-2 gap-4 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <p className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Estimated additional revenue</p>
              <p className="text-2xl font-medium text-white">${additionalRevenue.toLocaleString()}</p>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>per year</p>
            </div>
            <div className="rounded-xl p-5" style={{ background: 'rgba(255,255,255,0.08)' }}>
              <p className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Estimated additional deals</p>
              <p className="text-2xl font-medium text-white">{additionalDeals}</p>
              <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>per year</p>
            </div>
          </div>

          <div
            className="flex flex-wrap gap-x-6 gap-y-2 mt-4 pt-4 text-sm"
            style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>
              Projected lead capture increase: <span className="font-medium text-white">15%</span>
            </span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>
              Estimated close rate: <span className="font-medium text-white">20%</span>
            </span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>
              Recovered monthly: <span className="font-medium text-white">{recoveredMonthly}</span>
            </span>
          </div>

          <p className="mt-4 text-xs text-center" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Revenue projections are estimates based on industry conversion data. Actual results may vary.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 6: FAQ ─── */

const faqs = [
  {
    q: 'How does the AI know about my listings?',
    a: 'You upload your listing details, property information, and FAQs during setup. You can also paste your website URL and the AI will learn from it. Whenever you add or update a listing, the AI updates automatically.',
  },
  {
    q: 'Can the AI schedule property viewings?',
    a: 'Yes. A2V2.ai is designed to offer available time slots to qualified leads and book viewings directly into your calendar. No back-and-forth coordination needed.',
  },
  {
    q: 'Does it work with my existing real estate tools?',
    a: 'A2V2.ai is designed to work alongside your existing tools. Your website, social media, and calendar. It is not designed to replace your CRM but to handle the front-end lead engagement that feeds into your existing workflow.',
  },
  {
    q: 'Can I customize what the AI says?',
    a: 'Absolutely. You control the tone, the qualification questions, which listings to highlight, and how the AI represents your brand. It sounds like you, not like a generic chatbot.',
  },
  {
    q: 'How is this different from a chatbot on my website?',
    a: 'Most website chatbots are basic Q&A tools with scripted responses. A2V2.ai is an AI that actually understands your listings, qualifies leads intelligently, and books viewings. Plus it lives on your bio link so it works across all your social channels.',
  },
  {
    q: 'How quickly can I get started?',
    a: 'Most agents are live within minutes. Upload your listings, customize your profile, and share your link. No technical setup required.',
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
            href="https://www.app.a2v2.ai/signin"
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
          src="/images/Cta-Background2.png"
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

export default function RealEstatePage() {
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
