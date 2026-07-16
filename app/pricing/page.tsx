'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
  Building2, Users, Stethoscope, Plug, Check,
  Home, Activity, FileText, Settings, ClipboardList,
} from 'lucide-react'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import TestHomepage2HeroDashboard from '@/components/TestHomepage2HeroDashboard'
import { DEMO_BOOKING_URL, SIGN_IN_URL } from '@/lib/constants'

const H = "'Helvetica Neue', Helvetica, Arial, sans-serif"
const I = "'Inter', sans-serif"

const btnBlack: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  background: '#0F0E0D', color: '#ffffff', fontSize: 14, fontWeight: 500,
  fontFamily: I, padding: '10px 20px', borderRadius: 8, textDecoration: 'none',
  letterSpacing: '-0.2px', transition: 'opacity 200ms ease',
}

const btnGhost: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  background: 'transparent', color: '#0F0E0D', fontSize: 14, fontWeight: 500,
  fontFamily: I, padding: '10px 20px', borderRadius: 8, border: '1px solid #0F0E0D',
  textDecoration: 'none', letterSpacing: '-0.2px', transition: 'opacity 200ms ease',
}

function FadeIn({
  children, delay = 0, className = '', style = {},
}: {
  children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties
}) {
  const [v, setV] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        opacity: v ? 1 : 0,
        transform: v ? 'none' : 'translateY(20px)',
        transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

function BadgeSVG({ label }: { label: string }) {
  const cx = 35, cy = 35, r = 34, ringR = 29, arcR = 25
  const arcCirc = 2 * Math.PI * arcR
  const arcLen = arcCirc * 0.22
  const gapLen = arcCirc * 0.03
  return (
    <svg width={70} height={70} viewBox="0 0 70 70" fill="none">
      <circle cx={cx} cy={cy} r={r} fill="#0F0E0D" />
      <circle cx={cx} cy={cy} r={ringR} stroke="rgba(255,255,255,0.35)" strokeWidth={1} fill="none" />
      <circle cx={cx} cy={cy} r={arcR} stroke="rgba(255,255,255,0.55)" strokeWidth={1} fill="none"
        strokeDasharray={`${arcLen} ${gapLen}`} strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`} />
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fill="#ffffff"
        fontSize={label.length > 4 ? 10 : 11} fontWeight={500} fontFamily={I} letterSpacing="0.5">
        {label}
      </text>
    </svg>
  )
}

const PR_PILLARS = [
  { badge: 'HIPAA',   title: 'HIPAA Compliant',    desc: 'Built for healthcare from day one. BAA provided on every plan, with full audit trails.' },
  { badge: 'AES-256', title: 'AES-256 Encryption', desc: 'All data encrypted at rest and in transit using industry-standard AES-256 and TLS 1.3.' },
  { badge: 'BAA',     title: 'Secured LLM Access', desc: 'AI runs under a Business Associate Agreement. Your data is never used to train models.' },
  { badge: 'U.S.',    title: 'U.S. Data Centers',  desc: 'All patient data is stored in U.S.-based data centers with complete access controls.' },
]

const FACTORS = [
  { Icon: Building2,   title: 'Clinic size',              desc: 'Solo practice or multi-location group.' },
  { Icon: Users,       title: 'Patient volume',            desc: 'How many patients you manage across protocols.' },
  { Icon: Stethoscope, title: 'Specialties & protocols',   desc: 'The treatments and workflows you run.' },
  { Icon: Plug,        title: 'Integrations',              desc: 'Works with your existing EHR data and tools.' },
]

const INCLUDED = [
  'Full patient lifecycle automation (intake, follow-ups, refills, lab reminders, re-engagement)',
  'Your own patient-facing AI care assistant',
  'Escalation to your team for clinical judgment',
  'HIPAA compliance with a BAA',
  'AES-256 encryption and audit trails',
  'Secured LLM access — data never used for training',
  'U.S.-based data centers',
  'Onboarding and setup support',
]

const PLATFORM_SIDEBAR = [
  { Icon: Home,          active: false },
  { Icon: Activity,      active: true  },
  { Icon: ClipboardList, active: false },
  { Icon: FileText,      active: false },
  { Icon: Settings,      active: false },
]

function PlatformDashboard() {
  const automations = [
    { label: 'Intake welcome',       type: 'AI Agent',  status: 'Running', sc: '#16A34A', sb: '#DCFCE7' },
    { label: 'Week 2 check-in',      type: 'AI Agent',  status: 'Running', sc: '#16A34A', sb: '#DCFCE7' },
    { label: 'Lab order reminder',   type: 'Automated', status: 'Running', sc: '#16A34A', sb: '#DCFCE7' },
    { label: 'Refill scheduling',    type: 'Automated', status: 'Running', sc: '#16A34A', sb: '#DCFCE7' },
    { label: 'Provider escalation',  type: 'Provider',  status: 'Active',  sc: '#7C3AED', sb: '#F3E8FF' },
  ]
  return (
    <div className="relative overflow-hidden" style={{ height: 500, width: '100%' }}>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "url('/images/Background-website-3.png')", backgroundSize: 'cover', backgroundPosition: 'center top' }}
      />
      <div className="flex" style={{ position: 'absolute', top: 90, left: 60, right: -300, bottom: 0 }}>
        <div style={{
          width: 56, flexShrink: 0, background: '#F5F4F2',
          borderRight: '1px solid rgba(0,0,0,0.06)', borderRadius: '8px 0 0 0',
          padding: '14px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
        }}>
          <div style={{ marginBottom: 14 }}>
            <Image src="/favicon.svg" alt="A2V2" width={22} height={22} style={{ width: 22, height: 22 }} />
          </div>
          {PLATFORM_SIDEBAR.map(({ Icon, active }, i) => (
            <div key={i} style={{
              width: 32, height: 32, minWidth: 32, minHeight: 32, flexShrink: 0, borderRadius: 7,
              background: active ? '#0F0E0D' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={14} color={active ? '#ffffff' : 'rgba(0,0,0,0.32)'} />
            </div>
          ))}
        </div>
        <div style={{ flex: 1, background: '#FAFAF8', borderRadius: '0 8px 0 0', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 318px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Automation Overview</span>
            <span style={{ fontSize: 10, background: '#DCFCE7', color: '#16A34A', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>All running</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 90px 68px', padding: '6px 318px 6px 16px', borderBottom: '1px solid rgba(0,0,0,0.04)', background: '#F5F4F2' }}>
            {['Automation', 'Type', 'Status'].map(h => (
              <span key={h} style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{h}</span>
            ))}
          </div>
          {automations.map((a, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 90px 68px', padding: '8px 318px 8px 16px', borderBottom: '1px solid rgba(0,0,0,0.04)', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 500, color: '#0F0E0D', fontFamily: I }}>{a.label}</span>
              <span style={{ fontSize: 9, color: '#68655E', fontFamily: I }}>{a.type}</span>
              <span style={{ fontSize: 9, background: a.sb, color: a.sc, borderRadius: 999, padding: '2px 6px', fontFamily: I, fontWeight: 500, textAlign: 'center' }}>{a.status}</span>
            </div>
          ))}
          <div style={{ padding: '10px 16px', display: 'flex', gap: 6 }}>
            <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500 }}>BAA active</span>
            <span style={{ fontSize: 9, background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500 }}>AES-256 encrypted</span>
            <span style={{ fontSize: 9, background: '#F3E8FF', color: '#7C3AED', border: '1px solid #DDD6FE', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500 }}>Audit trail on</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PricingPage() {
  return (
    <main style={{ background: '#ffffff', fontFamily: H }}>
      <style>{`
        @media (max-width: 880px) {
          .pr-incl-row  { flex-direction: column !important; gap: 40px !important; }
          .pr-incl-col  { flex: 0 0 auto !important; width: 100% !important; }
          .pr-dashboard { display: none !important; }
          .pr-factors   { grid-template-columns: 1fr 1fr !important; }
          .pr-badges-row { flex-direction: column !important; }
          .pr-badge     { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.08) !important; }
          .pr-badge:last-child { border-bottom: none !important; }
          .pr-checklist { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .pr-factors   { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── SECTION 1: HERO ── */}
      <section style={{ background: '#ffffff', paddingTop: 128, paddingBottom: 96 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn style={{ textAlign: 'center' }}>
            <h1
              className="font-normal leading-[1.05]"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#0F0E0D', fontFamily: H, maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}
            >
              Pricing built around your clinic
            </h1>
            <p style={{
              fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I,
              letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 540,
              marginTop: 20, marginLeft: 'auto', marginRight: 'auto',
            }}>
              Every clinic is different, so every plan is too. We tailor pricing to your specialty, your patient volume, and the workflows you need automated.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={DEMO_BOOKING_URL}
                style={btnBlack}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Book a Demo
              </a>
              <a
                href={SIGN_IN_URL}
                style={btnGhost}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Get Started
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: WHY CUSTOM ── */}
      <section style={{ background: '#F9F9F8' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-24">
          <FadeIn>
            <h2
              className="font-normal leading-[1.05]"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#0F0E0D', fontFamily: H, maxWidth: 640, marginBottom: 20 }}
            >
              One price does not fit every clinic
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 600 }}>
              A solo functional medicine practice and a multi-location HRT group have very different needs. Instead of forcing you into a tier that does not fit, we scope pricing to your clinic so you only pay for what you actually use.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 3: WHAT SHAPES YOUR PRICE ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-24">
          <FadeIn style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2
              className="font-normal leading-[1.05]"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: '#0F0E0D', fontFamily: H }}
            >
              What shapes your price
            </h2>
          </FadeIn>
          <div className="pr-factors" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
            {FACTORS.map(({ Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 70}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, background: '#F5F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={20} color="#0F0E0D" />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{title}</div>
                  <div style={{ fontSize: 14, color: '#68655E', fontFamily: I, lineHeight: 1.6 }}>{desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHAT'S INCLUDED ── */}
      <section style={{ background: '#F9F9F8' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-24">
          <div className="pr-incl-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>

            {/* Left — text + checklist */}
            <FadeIn className="pr-incl-col" style={{ flex: '0 0 46%' }}>
              <h2
                className="font-normal leading-[1.05]"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#0F0E0D', fontFamily: H, marginBottom: 20 }}
              >
                Every plan includes the full platform
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                No matter your size, you get the complete A2V2 platform, configured for your clinic.
              </p>
              <div className="pr-checklist" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 24px' }}>
                {INCLUDED.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: '#0F0E0D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Check size={10} color="#ffffff" strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 500, color: '#0F0E0D', fontFamily: I, lineHeight: 1.55 }}>{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right — dashboard mockup */}
            <FadeIn className="pr-incl-col pr-dashboard" delay={120} style={{ flex: '0 0 50%', minWidth: 0 }}>
              <PlatformDashboard />
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── SECTION 5: COMING SOON ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-20">
          <FadeIn style={{ textAlign: 'center' }}>
            <p style={{
              fontSize: 15, fontWeight: 500, color: '#68655E', fontFamily: I,
              letterSpacing: '-0.3px', lineHeight: 1.7,
              maxWidth: 560, marginLeft: 'auto', marginRight: 'auto',
            }}>
              Self-serve plans for smaller clinics are coming later this year. Want to be notified when they launch? Mention it when you book a demo and we will keep you posted.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 6: SECURITY TIE-IN ── */}
      <section style={{ background: '#F9F9F8' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-24">
          <FadeIn style={{ marginBottom: 48, textAlign: 'center' }}>
            <h2
              className="font-normal leading-[1.05]"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: '#0F0E0D', fontFamily: H }}
            >
              Built on HIPAA-compliant infrastructure
            </h2>
          </FadeIn>
          <FadeIn delay={60}>
            <div className="pr-badges-row" style={{ display: 'flex', border: '1px solid rgba(0,0,0,0.08)' }}>
              {PR_PILLARS.map(({ badge, title, desc }, i) => (
                <div
                  key={title}
                  className="pr-badge"
                  style={{
                    flex: 1, padding: '32px 28px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                    borderRight: i < PR_PILLARS.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                    background: '#ffffff',
                  }}
                >
                  <BadgeSVG label={badge} />
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#0F0E0D', fontFamily: I, marginTop: 20 }}>{title}</div>
                  <div style={{ fontSize: 14, color: '#68655E', fontFamily: I, marginTop: 8, lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, textAlign: 'center' }}>
              <a
                href="/security"
                style={{ fontSize: 14, color: '#68655E', fontFamily: I, textDecoration: 'underline', textUnderlineOffset: 3 }}
              >
                Learn more about our security
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 7: CTA ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-24 md:py-32" style={{ textAlign: 'center' }}>
          <FadeIn>
            <h2
              className="font-normal leading-[1.05]"
              style={{
                fontSize: 'clamp(36px, 5vw, 72px)', color: '#0F0E0D', fontFamily: H,
                maxWidth: 700, marginLeft: 'auto', marginRight: 'auto',
              }}
            >
              Let&apos;s find the right plan for your clinic
            </h2>
            <p style={{
              fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I,
              letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 500,
              marginTop: 20, marginLeft: 'auto', marginRight: 'auto',
            }}>
              Book a demo and we will scope pricing tailored to your practice.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 32, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href={DEMO_BOOKING_URL}
                style={btnBlack}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Book a Demo
              </a>
              <a
                href={SIGN_IN_URL}
                style={btnGhost}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Get Started
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <TestHomepage2Footer />
    </main>
  )
}
