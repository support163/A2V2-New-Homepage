'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
  Home, Activity, Users, FileText, Settings, ClipboardList, LayoutGrid,
  Stethoscope, Network, Bot, ShieldCheck,
} from 'lucide-react'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
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

const CD_PILLARS = [
  { badge: 'HIPAA',   title: 'HIPAA Compliant',    desc: 'Built for healthcare from day one. BAA provided on every plan, with full audit trails.' },
  { badge: 'AES-256', title: 'AES-256 Encryption', desc: 'All data encrypted at rest and in transit using industry-standard AES-256 and TLS 1.3.' },
  { badge: 'BAA',     title: 'Secured LLM Access', desc: 'AI runs under a Business Associate Agreement. Your data is never used to train models.' },
  { badge: 'U.S.',    title: 'U.S. Data Centers',  desc: 'All patient data is stored in U.S.-based data centers with complete access controls.' },
]

const HERO_SIDEBAR = [
  { Icon: Home,     active: false },
  { Icon: Activity, active: true  },
  { Icon: Users,    active: false },
  { Icon: FileText, active: false },
  { Icon: Settings, active: false },
]

function Sidebar({ icons }: { icons: { Icon: React.ElementType; active: boolean }[] }) {
  return (
    <div style={{
      width: 56, flexShrink: 0, background: '#F5F4F2',
      borderRight: '1px solid rgba(0,0,0,0.06)', borderRadius: '8px 0 0 0',
      padding: '14px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
    }}>
      <div style={{ marginBottom: 14 }}>
        <Image src="/favicon.svg" alt="A2V2" width={22} height={22} style={{ width: 22, height: 22 }} />
      </div>
      {icons.map(({ Icon, active }, i) => (
        <div key={i} style={{
          width: 32, height: 32, minWidth: 32, minHeight: 32, flexShrink: 0, borderRadius: 7,
          background: active ? '#0F0E0D' : 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon size={14} color={active ? '#ffffff' : 'rgba(0,0,0,0.32)'} />
        </div>
      ))}
    </div>
  )
}

function PatientDashboard() {
  const patients = [
    { name: 'Sarah J.',   detail: 'HRT · Week 6',         status: 'On track',      sc: '#16A34A', sb: '#DCFCE7' },
    { name: 'Michael K.', detail: 'NAD+ · Day 2',          status: 'Check-in sent', sc: '#2563EB', sb: '#EFF6FF' },
    { name: 'Priya S.',   detail: 'Metabolic Reset',       status: 'Labs due',      sc: '#D97706', sb: '#FEF3C7' },
    { name: 'Robert T.',  detail: 'TRT · Refill',          status: 'Reminder sent', sc: '#2563EB', sb: '#EFF6FF' },
    { name: 'Karen B.',   detail: '18 days inactive',      status: 'Flagged',       sc: '#DC2626', sb: '#FEF2F2' },
  ]
  return (
    <div className="relative overflow-hidden cd-hero-dashboard" style={{ height: 680, width: '100%' }}>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "url('/images/Background-website-3.png')", backgroundSize: 'cover', backgroundPosition: 'center top' }}
      />
      <div className="flex" style={{ position: 'absolute', top: 109, left: 149, right: -300, bottom: 0 }}>
        <Sidebar icons={HERO_SIDEBAR} />
        <div style={{ flex: 1, background: '#FAFAF8', borderRadius: '0 8px 0 0', overflow: 'hidden' }}>
          {/* Topbar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 318px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Patient Queue</span>
            <span style={{ fontSize: 10, background: '#EFF6FF', color: '#2563EB', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>5 need attention</span>
          </div>
          {/* Column headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr 100px', padding: '6px 318px 6px 16px', borderBottom: '1px solid rgba(0,0,0,0.04)', background: '#F5F4F2' }}>
            {['Patient', 'Protocol', 'Status'].map(h => (
              <span key={h} style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{h}</span>
            ))}
          </div>
          {/* Patient rows */}
          {patients.map((p, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '100px 1fr 100px', padding: '9px 318px 9px 16px', borderBottom: '1px solid rgba(0,0,0,0.04)', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{p.name}</span>
              <span style={{ fontSize: 10, color: '#68655E', fontFamily: I }}>{p.detail}</span>
              <span style={{ fontSize: 9, background: p.sb, color: p.sc, borderRadius: 999, padding: '2px 7px', fontFamily: I, fontWeight: 500, width: 'fit-content' }}>{p.status}</span>
            </div>
          ))}
          {/* Footer stats */}
          <div style={{ padding: '12px 16px', display: 'flex', gap: 16, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>Active patients</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>14</div>
            </div>
            <div style={{ width: 1, height: 24, background: 'rgba(0,0,0,0.06)' }} />
            <div>
              <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>Avg. engagement</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#16A34A', fontFamily: I }}>94%</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
              <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500 }}>HIPAA active</span>
              <span style={{ fontSize: 9, background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500 }}>AES-256</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const PROTOCOL_SIDEBAR = [
  { Icon: Home,        active: false },
  { Icon: LayoutGrid,  active: false },
  { Icon: FileText,    active: true  },
  { Icon: Users,       active: false },
  { Icon: Settings,    active: false },
]

function ProtocolDashboard() {
  const steps = [
    { name: 'Intake Assessment',  type: 'Automated',       status: 'Active', sc: '#16A34A', sb: '#DCFCE7' },
    { name: 'Week 2 Check-in',    type: 'AI Assisted',     status: 'Active', sc: '#2563EB', sb: '#EFF6FF' },
    { name: 'Lab Review',         type: 'Provider Review', status: 'Active', sc: '#7C3AED', sb: '#F3E8FF' },
    { name: 'Refill Scheduling',  type: 'Automated',       status: 'Active', sc: '#16A34A', sb: '#DCFCE7' },
    { name: 'Monthly Follow-up',  type: 'AI Assisted',     status: 'Active', sc: '#2563EB', sb: '#EFF6FF' },
  ]
  return (
    <div className="relative overflow-hidden" style={{ height: 520, width: '100%' }}>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "url('/images/Background-website-3.png')", backgroundSize: 'cover', backgroundPosition: 'center top' }}
      />
      <div className="flex" style={{ position: 'absolute', top: 90, left: 60, right: -300, bottom: 0 }}>
        <Sidebar icons={PROTOCOL_SIDEBAR} />
        <div style={{ flex: 1, background: '#FAFAF8', borderRadius: '0 8px 0 0', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 318px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>HRT Protocol</span>
            <span style={{ fontSize: 10, background: '#DCFCE7', color: '#16A34A', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>Configured</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 70px', padding: '6px 318px 6px 16px', borderBottom: '1px solid rgba(0,0,0,0.04)', background: '#F5F4F2' }}>
            {['Step', 'Type', 'Status'].map(h => (
              <span key={h} style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{h}</span>
            ))}
          </div>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 120px 70px', padding: '8px 318px 8px 16px', borderBottom: '1px solid rgba(0,0,0,0.04)', alignItems: 'center' }}>
              <span style={{ fontSize: 10, fontWeight: 500, color: '#0F0E0D', fontFamily: I }}>{s.name}</span>
              <span style={{ fontSize: 9, color: '#68655E', fontFamily: I }}>{s.type}</span>
              <span style={{ fontSize: 9, background: s.sb, color: s.sc, borderRadius: 999, padding: '2px 6px', fontFamily: I, fontWeight: 500, textAlign: 'center' }}>{s.status}</span>
            </div>
          ))}
          <div style={{ padding: '10px 16px', display: 'flex', gap: 6 }}>
            <span style={{ fontSize: 9, background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500 }}>Specialty configured</span>
            <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500 }}>BAA active</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const LIFECYCLE_SIDEBAR = [
  { Icon: Home,          active: false },
  { Icon: Activity,      active: true  },
  { Icon: ClipboardList, active: false },
  { Icon: Users,         active: false },
  { Icon: Settings,      active: false },
]

function LifecycleDashboard() {
  const flows = [
    { trigger: 'New intake',   step: 'Welcome message',     agent: 'AI Agent',  status: 'Running', sc: '#16A34A', sb: '#DCFCE7' },
    { trigger: 'Day 14',       step: 'Check-in message',    agent: 'AI Agent',  status: 'Running', sc: '#16A34A', sb: '#DCFCE7' },
    { trigger: 'Lab due',      step: 'Lab order reminder',  agent: 'Automated', status: 'Running', sc: '#16A34A', sb: '#DCFCE7' },
    { trigger: 'Q4 follow-up', step: 'Quarterly check-in',  agent: 'AI Agent',  status: 'Running', sc: '#16A34A', sb: '#DCFCE7' },
    { trigger: 'Clinical flag', step: 'Provider escalation', agent: 'Provider', status: 'Active',  sc: '#7C3AED', sb: '#F3E8FF' },
  ]
  return (
    <div className="relative overflow-hidden" style={{ height: 520, width: '100%' }}>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "url('/images/Background-website-3.png')", backgroundSize: 'cover', backgroundPosition: 'center top' }}
      />
      <div className="flex" style={{ position: 'absolute', top: 90, left: 60, right: -300, bottom: 0 }}>
        <Sidebar icons={LIFECYCLE_SIDEBAR} />
        <div style={{ flex: 1, background: '#FAFAF8', borderRadius: '0 8px 0 0', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 318px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Lifecycle Automation</span>
            <span style={{ fontSize: 10, background: '#DCFCE7', color: '#16A34A', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>4 active flows</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr 80px 68px', padding: '6px 318px 6px 16px', borderBottom: '1px solid rgba(0,0,0,0.04)', background: '#F5F4F2' }}>
            {['Trigger', 'Step', 'Agent', 'Status'].map(h => (
              <span key={h} style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{h}</span>
            ))}
          </div>
          {flows.map((f, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '90px 1fr 80px 68px', padding: '8px 318px 8px 16px', borderBottom: '1px solid rgba(0,0,0,0.04)', alignItems: 'center' }}>
              <span style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>{f.trigger}</span>
              <span style={{ fontSize: 10, fontWeight: 500, color: '#0F0E0D', fontFamily: I }}>{f.step}</span>
              <span style={{ fontSize: 9, color: '#68655E', fontFamily: I }}>{f.agent}</span>
              <span style={{ fontSize: 9, background: f.sb, color: f.sc, borderRadius: 999, padding: '2px 6px', fontFamily: I, fontWeight: 500, textAlign: 'center' }}>{f.status}</span>
            </div>
          ))}
          <div style={{ padding: '10px 16px', display: 'flex', gap: 6 }}>
            <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500 }}>AES-256 encrypted</span>
            <span style={{ fontSize: 9, background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500 }}>Audit trail active</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CustomDashboardPage() {
  return (
    <main style={{ background: '#ffffff', fontFamily: H }}>
      <style>{`
        @media (max-width: 880px) {
          .cd-hero-row  { flex-direction: column !important; gap: 28px !important; }
          .cd-hero-right { padding-left: 0 !important; }
          .cd-hero-dashboard { display: none !important; }
          .cd-what-row  { flex-direction: column !important; gap: 40px !important; }
          .cd-what-col  { flex: 0 0 auto !important; width: 100% !important; }
          .cd-steps     { grid-template-columns: 1fr 1fr !important; }
          .cd-incl-row  { flex-direction: column !important; gap: 40px !important; }
          .cd-incl-col  { flex: 0 0 auto !important; width: 100% !important; }
          .cd-badges-row { flex-direction: column !important; }
          .cd-badge     { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.08) !important; }
          .cd-badge:last-child { border-bottom: none !important; }
        }
        @media (max-width: 600px) {
          .cd-steps { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── SECTION 1: HERO ── */}
      <section style={{ background: '#ffffff', paddingTop: 128, paddingBottom: 0 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div className="cd-hero-row" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div style={{ flex: '0 0 55%' }}>
                <h1
                  className="font-normal leading-[1.05]"
                  style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#0F0E0D', fontFamily: H, maxWidth: 640 }}
                >
                  A custom healthcare dashboard, built for your clinic
                </h1>
              </div>
              <div className="cd-hero-right" style={{ flex: '0 0 45%', paddingLeft: 'clamp(0px, 8vw, 128px)' }}>
                <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 470 }}>
                  We design and build a HIPAA-compliant dashboard tailored to your specialty, your protocols, and the way your team actually works. Bespoke today, with faster self-serve onboarding coming soon.
                </p>
                <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
                  <a
                    href={DEMO_BOOKING_URL}
                    style={btnBlack}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Book a Demo
                  </a>
                  <a
                    href="#how-it-works"
                    style={btnGhost}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    See how it works
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={120} className="cd-hero-dashboard" style={{ marginTop: 56 }}>
            <PatientDashboard />
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: WHAT "CUSTOM" MEANS ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-24">
          <div className="cd-what-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>

            {/* Left text */}
            <FadeIn className="cd-what-col" style={{ flex: '0 0 40%' }}>
              <h2
                className="font-normal leading-[1.05]"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#0F0E0D', fontFamily: H, marginBottom: 20 }}
              >
                Built around your clinic, not a template
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Every clinic runs differently. We tailor your dashboard to your protocols, your patient lifecycle, and your team&apos;s workflows.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: Stethoscope, title: 'Specialty-specific',    desc: 'Configured for HRT, longevity, functional medicine, weight loss, IV, or your mix.' },
                  { Icon: Network,     title: 'Your protocols, mapped', desc: 'Intake, follow-ups, refills, and lab schedules matched to how you treat.' },
                  { Icon: Users,       title: "Your team's roles",      desc: 'Access and views set up for your providers, coordinators, and front desk.' },
                ] as const).map(({ Icon, title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#F5F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={16} style={{ color: '#0F0E0D' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{title}</div>
                      <div style={{ fontSize: 14, color: '#68655E', fontFamily: I, marginTop: 3, lineHeight: 1.5 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right dashboard */}
            <FadeIn className="cd-what-col" delay={120} style={{ flex: '0 0 56%', minWidth: 0 }}>
              <ProtocolDashboard />
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: HOW IT WORKS ── */}
      <section id="how-it-works" style={{ background: '#F9F9F8' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-24">
          <FadeIn style={{ marginBottom: 56 }}>
            <h2
              className="font-normal leading-[1.05]"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#0F0E0D', fontFamily: H }}
            >
              From first call to fully live
            </h2>
          </FadeIn>
          <div className="cd-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 40 }}>
            {[
              { num: '01', title: 'Discovery', desc: 'We learn your specialty, protocols, and goals on a short call.' },
              { num: '02', title: 'Build',      desc: 'We configure your dashboard, automations, and AI agent to match.' },
              { num: '03', title: 'Launch',     desc: 'We onboard your team and go live, usually within a couple of weeks.' },
              { num: '04', title: 'Support',    desc: 'We refine and adjust as your clinic grows.' },
            ].map(({ num, title, desc }, i) => (
              <FadeIn key={num} delay={i * 80}>
                <div>
                  <div
                    style={{ fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, color: '#0F0E0D', fontFamily: H, lineHeight: 1, marginBottom: 16 }}
                  >
                    {num}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 600, color: '#0F0E0D', fontFamily: I, marginBottom: 8 }}>{title}</div>
                  <div style={{ fontSize: 14, color: '#68655E', fontFamily: I, lineHeight: 1.6 }}>{desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHAT'S INCLUDED ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-24">
          <div className="cd-incl-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>

            {/* Left dashboard */}
            <FadeIn className="cd-incl-col" style={{ flex: '0 0 52%', minWidth: 0 }}>
              <LifecycleDashboard />
            </FadeIn>

            {/* Right text */}
            <FadeIn className="cd-incl-col" delay={120} style={{ flex: '0 0 44%' }}>
              <h2
                className="font-normal leading-[1.05]"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#0F0E0D', fontFamily: H, marginBottom: 20 }}
              >
                Everything your clinic needs, configured for you
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Your custom dashboard comes with the full A2V2 platform, set up for your practice.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: Activity,    title: 'Full patient lifecycle automation', desc: 'Intake, follow-ups, refills, lab reminders, re-engagement.' },
                  { Icon: Bot,         title: 'Your own AI care assistant',        desc: 'Patient-facing AI designed to escalate to your team when it matters.' },
                  { Icon: ShieldCheck, title: 'HIPAA-compliant by default',        desc: 'BAA, encryption, audit trails, U.S. data centers.' },
                ] as const).map(({ Icon, title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#F5F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={16} style={{ color: '#0F0E0D' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{title}</div>
                      <div style={{ fontSize: 14, color: '#68655E', fontFamily: I, marginTop: 3, lineHeight: 1.5 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ── SECTION 6: SECURITY TIE-IN ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-24">
          <FadeIn style={{ marginBottom: 48 }}>
            <h2
              className="font-normal leading-[1.05]"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: '#0F0E0D', fontFamily: H }}
            >
              Built on HIPAA-compliant infrastructure
            </h2>
          </FadeIn>
          <FadeIn delay={60}>
            <div className="cd-badges-row" style={{ display: 'flex', border: '1px solid rgba(0,0,0,0.08)' }}>
              {CD_PILLARS.map(({ badge, title, desc }, i) => (
                <div
                  key={title}
                  className="cd-badge"
                  style={{
                    flex: 1,
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    borderRight: i < CD_PILLARS.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                  }}
                >
                  <BadgeSVG label={badge} />
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#0F0E0D', fontFamily: I, marginTop: 20 }}>{title}</div>
                  <div style={{ fontSize: 14, color: '#68655E', fontFamily: I, marginTop: 8, lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
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
                fontSize: 'clamp(36px, 5vw, 72px)',
                color: '#0F0E0D',
                fontFamily: H,
                maxWidth: 700,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Let&apos;s build your clinic&apos;s dashboard
            </h2>
            <p style={{
              fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I,
              letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 500,
              marginTop: 20, marginLeft: 'auto', marginRight: 'auto',
            }}>
              Book a demo and we&apos;ll scope a custom dashboard tailored to your practice.
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
