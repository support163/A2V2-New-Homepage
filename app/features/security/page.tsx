'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { Shield, Lock, Eye } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'

/* ─── Shared styles ─── */

const gradientDot: React.CSSProperties = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundImage: "url('/images/dot-image.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  flexShrink: 0,
}

const glassCard: React.CSSProperties = {
  background: 'rgba(0,0,0,0.55)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '12px',
  padding: '20px',
}

/* ─── Animated counter ─── */

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
      style={{ background: '#0F0E0D', height: '60vh' }}
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
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)', zIndex: 1 }} />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '220px', background: 'linear-gradient(to bottom, transparent, #0F0E0D)', zIndex: 2 }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Label pill */}
        <div
          className="flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
          style={{ border: '1px solid rgba(255,255,255,0.2)' }}
        >
          <span style={gradientDot} />
          <span className="text-sm text-white">Security</span>
        </div>

        <h1
          className="text-3xl md:text-5xl text-white tracking-tight text-center"
          style={{ fontWeight: 600, maxWidth: '700px', lineHeight: 1.15 }}
        >
          Your data security is not an afterthought
        </h1>

        <p
          className="text-lg mt-4 text-center"
          style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '560px' }}
        >
          A2V2.ai is built from the ground up with HIPAA-compliant infrastructure, encrypted data handling, and secured LLM access under a Business Associate Agreement.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.app.a2v2.ai/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: '#ffffff', color: '#0F0E0D' }}
          >
            Get Started
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 2: Stats Row ─── */

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
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>HIPAA Compliant</div>
          </div>

          <div data-animate="" className="flex-1 text-center py-8 md:py-4" style={{ transitionDelay: '80ms' }}>
            <div className="text-3xl font-semibold text-white">AES-256</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Encryption Standard</div>
          </div>

          <div data-animate="" className="flex-1 text-center py-8 md:py-4" style={{ transitionDelay: '160ms' }}>
            <div className="text-3xl font-semibold text-white">Secured</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>LLM Access</div>
          </div>

          <div data-animate="" className="flex-1 text-center py-8 md:py-4" style={{ transitionDelay: '240ms' }}>
            <div className="text-3xl font-semibold text-white">
              <AnimatedNumber target={99.9} format={(n) => `${n.toFixed(1)}%`} />
            </div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Uptime SLA</div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 3: Pillar Cards ─── */

function CheckRow({ label, index }: { label: string; index: number }) {
  return (
    <div
      className="flex items-center gap-2 py-2"
      style={{ borderTop: index > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
    >
      <svg width="10" height="10" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
        <path d="M3 8l3 3 7-7" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-xs text-white">{label}</span>
    </div>
  )
}

function StatusRow({ label, tag, index }: { label: string; tag: string; index: number }) {
  return (
    <div
      className="flex items-center justify-between py-2"
      style={{ borderTop: index > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
    >
      <div className="flex items-center gap-2">
        <Lock size={10} style={{ color: 'rgba(255,255,255,0.5)', flexShrink: 0 }} />
        <span className="text-xs text-white">{label}</span>
      </div>
      <span
        className="text-[10px] rounded-full px-2 py-0.5"
        style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
      >
        {tag}
      </span>
    </div>
  )
}

function LabelRow({ label, tag, index }: { label: string; tag: string; index: number }) {
  return (
    <div
      className="flex items-center justify-between py-2"
      style={{ borderTop: index > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
    >
      <span className="text-xs text-white">{label}</span>
      <span
        className="text-[10px] rounded-full px-2 py-0.5"
        style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
      >
        {tag}
      </span>
    </div>
  )
}

function CardGlassHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-3">
      <span style={{ ...gradientDot, width: 10, height: 10 }} />
      <span className="text-sm font-semibold text-white">{title}</span>
    </div>
  )
}

function PillarCards() {
  const cards = [
    {
      bg: '/images/Ui-Card-Background1.jpg',
      dot: 'HIPAA',
      title: 'HIPAA Compliant',
      desc: 'Built for healthcare from day one. BAA provided, PHI never shared with third parties, and full compliance audit trails maintained.',
      mockup: (
        <div>
          <CardGlassHeader title="Compliance status" />
          {['BAA signed and active', 'PHI never shared', 'HIPAA audit passed'].map((item, i) => (
            <CheckRow key={item} label={item} index={i} />
          ))}
          <div className="mt-3 text-center">
            <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>View details</span>
          </div>
        </div>
      ),
    },
    {
      bg: '/images/Ui-Card-Background2.jpg',
      dot: 'Encryption',
      title: 'Encrypted Infrastructure',
      desc: 'All data encrypted with AES-256 at rest and TLS 1.3 in transit. Encryption keys rotated quarterly. U.S.-based data centers only.',
      mockup: (
        <div>
          <CardGlassHeader title="Encryption overview" />
          {[
            { label: 'TLS 1.3 in transit', tag: 'Active' },
            { label: 'AES-256 at rest', tag: 'Active' },
            { label: 'Key rotation', tag: 'Quarterly' },
          ].map(({ label, tag }, i) => (
            <StatusRow key={label} label={label} tag={tag} index={i} />
          ))}
          <div className="mt-3 text-center">
            <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>View details</span>
          </div>
        </div>
      ),
    },
    {
      bg: '/images/Ui-Card-Background3.jpg',
      dot: 'Secured LLM',
      title: 'Secured LLM Access',
      desc: 'Your data is never used to train AI models. All AI processing happens under a Business Associate Agreement (BAA) so your data stays protected.',
      mockup: (
        <div>
          <CardGlassHeader title="LLM access" />
          {[
            { label: 'BAA coverage', tag: 'Active' },
            { label: 'Data training', tag: 'Never' },
            { label: 'Data centers', tag: 'U.S. only' },
          ].map(({ label, tag }, i) => (
            <LabelRow key={label} label={label} tag={tag} index={i} />
          ))}
          <div className="mt-3 text-center">
            <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>View details</span>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div data-animate="" className="text-center mb-14">
          <h2 className="text-3xl text-white" style={{ fontWeight: 600 }}>
            How we protect your data
          </h2>
          <p className="mt-3 text-lg mx-auto" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px' }}>
            Enterprise-grade security across every layer of the platform
          </p>
        </div>

        <style>{`
          .pillar-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
          @media (max-width: 880px) {
            .pillar-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
        <div className="pillar-grid">
          {cards.map(({ bg, dot, title, desc, mockup }, i) => (
            <div
              key={title}
              data-animate=""
              className="pillar-grid-item"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image container */}
              <div
                className="relative rounded-lg overflow-hidden"
                style={{ height: '300px' }}
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
                  <div style={{ ...glassCard, maxWidth: '240px', width: '100%', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
                    {mockup}
                  </div>
                </div>
              </div>

              {/* Text below image */}
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

/* ─── Section 4: Security Feature Showcase ─── */

const showcaseTabs = [
  {
    title: 'Data protection',
    description:
      'All patient and creator data encrypted at rest with AES-256 and in transit with TLS 1.3. No exceptions.',
  },
  {
    title: 'Access controls',
    description:
      'Role-based permissions ensure clinical staff, admins, and providers each have appropriate access levels.',
  },
  {
    title: 'Audit logging',
    description:
      'Every interaction, data access, and system change is logged with timestamps and user attribution.',
  },
  {
    title: 'Infrastructure',
    description:
      'Hosted on U.S.-based data centers with 99.9% uptime SLA. Daily backups with 30-day retention.',
  },
]

function DataProtectionCard() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Data protection</span>
      </div>
      {[
        { label: 'At rest', tag: 'AES-256 Active' },
        { label: 'In transit', tag: 'TLS 1.3 Active' },
        { label: 'Key rotation', tag: 'Quarterly' },
      ].map(({ label, tag }, i) => (
        <div
          key={label}
          className="flex items-center justify-between py-2.5"
          style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
        >
          <span className="text-sm text-white">{label}</span>
          <span className="text-xs rounded-full px-2 py-0.5" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}>{tag}</span>
        </div>
      ))}
    </div>
  )
}

function AccessControlsCard() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Access controls</span>
      </div>
      {[
        { role: 'Admin', access: 'Full access' },
        { role: 'Provider', access: 'Patient data' },
        { role: 'Staff', access: 'Limited access' },
        { role: 'Viewer', access: 'Read only' },
      ].map(({ role, access }, i) => (
        <div
          key={role}
          className="flex items-center justify-between py-2.5"
          style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
        >
          <span className="text-sm text-white">{role}</span>
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{access}</span>
        </div>
      ))}
    </div>
  )
}

function AuditLogCard() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">Audit log</span>
      </div>
      {[
        { time: '2:14 PM', action: 'Patient record accessed' },
        { time: '1:58 PM', action: 'Settings updated' },
        { time: '1:23 PM', action: 'User login' },
        { time: '12:47 PM', action: 'Report exported' },
      ].map(({ time, action }, i) => (
        <div
          key={action}
          className="flex items-center justify-between py-2.5"
          style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
        >
          <span className="text-sm text-white">{action}</span>
          <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{time}</span>
        </div>
      ))}
    </div>
  )
}

function InfrastructureCard() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <span style={{ ...gradientDot, width: 10, height: 10 }} />
        <span className="text-sm font-semibold text-white">System status</span>
      </div>
      {[
        { label: 'Uptime', value: '99.9%' },
        { label: 'Region', value: 'US-East' },
        { label: 'Backups', value: 'Daily' },
        { label: 'Last backup', value: '2h ago' },
      ].map(({ label, value }, i) => (
        <div
          key={label}
          className="flex items-center justify-between py-2.5"
          style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
        >
          <span className="text-sm text-white">{label}</span>
          <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>{value}</span>
        </div>
      ))}
    </div>
  )
}

const showcaseCards = [
  <DataProtectionCard key="0" />,
  <AccessControlsCard key="1" />,
  <AuditLogCard key="2" />,
  <InfrastructureCard key="3" />,
]

const summaryItems = [
  { Icon: Shield, title: 'Zero Trust', desc: 'Every request verified' },
  { Icon: Lock, title: 'Encryption', desc: 'End-to-end protection' },
  { Icon: Eye, title: 'Audit Trails', desc: 'Complete visibility' },
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

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">
          {/* Left: label + heading */}
          <div data-animate="" className="flex-shrink-0 max-w-[400px]">
            <div className="flex items-center gap-2 mb-3">
              <span style={gradientDot} />
              <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Security Infrastructure
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl text-white leading-tight" style={{ fontWeight: 600 }}>
              Built to protect, designed to scale
            </h2>
          </div>

          {/* Right: 3 summary items */}
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

          {/* Left: info + tabs */}
          <div data-animate="" style={{ transitionDelay: '120ms' }}>
            <p className="text-xl font-semibold text-white">Security Engine</p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Comprehensive security built into every layer of the platform.
            </p>
            <div className="mt-4">
              <Link
                href="/solutions/healthcare"
                className="inline-flex items-center gap-1.5 text-sm text-white rounded-full px-4 py-1.5 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                Learn more &#8250;
              </Link>
            </div>

            <style>{`
              @keyframes secFillProgress {
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
                        key={`sec-progress-${activeTab}`}
                        style={{
                          height: '100%',
                          background: 'rgba(255,255,255,0.8)',
                          animation: 'secFillProgress 8s linear forwards',
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
                backgroundImage: "url('/images/Ui-Card-Background4.jpg')",
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

/* ─── Section 5: Compliance Comparison ─── */

function ComplianceSection() {
  const a2v2Items = [
    'HIPAA compliant from day one',
    'Secured LLM under BAA',
    'BAA provided',
    'Data never used for AI training',
    'U.S.-based data centers',
    'Complete audit trails',
  ]

  const genericItems = [
    'Not HIPAA compliant',
    'Public shared infrastructure',
    'No BAA available',
    'May use data for model training',
    'Global data routing',
    'Limited audit capabilities',
  ]

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div data-animate="" className="text-center mb-12">
          <h2 className="text-3xl text-white" style={{ fontWeight: 600 }}>
            Why generic AI is a compliance risk
          </h2>
          <p className="mt-3 text-lg" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Most AI tools were not built for regulated industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* A2V2 card */}
          <div
            data-animate=""
            className="rounded-xl p-8"
            style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <h3 className="text-xl font-semibold text-white mb-6">A2V2.ai</h3>
            <div className="flex flex-col gap-3">
              {a2v2Items.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="8" cy="8" r="7.5" stroke="rgba(255,255,255,0.2)" />
                    <path d="M5 8l2 2 4-4" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-sm text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Generic AI card */}
          <div
            data-animate=""
            className="rounded-xl p-8"
            style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.05)', transitionDelay: '80ms' }}
          >
            <h3 className="text-xl font-semibold mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Generic AI (ChatGPT, Gemini)
            </h3>
            <div className="flex flex-col gap-3">
              {genericItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
                    <circle cx="8" cy="8" r="7.5" stroke="rgba(255,100,100,0.3)" />
                    <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="rgba(255,100,100,0.6)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 6: CTA ─── */

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

export default function SecurityPage() {
  return (
    <main style={{ background: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>
      <ScrollAnimator />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <PillarCards />
      <ShowcaseSection />
      <ComplianceSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
