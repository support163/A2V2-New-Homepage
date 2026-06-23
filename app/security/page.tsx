'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Lock, KeyRound, FileCheck, ShieldCheck, Ban, Server, Home, Activity, ClipboardList, Shield, Settings, ChevronDown } from 'lucide-react'
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

const PILLARS = [
  { badge: 'HIPAA', title: 'HIPAA Compliant', desc: 'Built for healthcare from day one. BAA provided on every plan, with full audit trails.' },
  { badge: 'AES-256', title: 'AES-256 Encryption', desc: 'All data encrypted at rest and in transit using industry-standard AES-256 and TLS 1.3.' },
  { badge: 'BAA', title: 'Secured LLM Access', desc: 'AI runs under a Business Associate Agreement. Your data is never used to train models.' },
  { badge: 'U.S.', title: 'U.S. Data Centers', desc: 'All patient data is stored in U.S.-based data centers with complete access controls.' },
]

const AUDIT_SIDEBAR_ICONS = [
  { Icon: Home,          active: false },
  { Icon: Activity,      active: false },
  { Icon: ClipboardList, active: true  },
  { Icon: Shield,        active: false },
  { Icon: Settings,      active: false },
]

function AuditLogDashboard() {
  const rows = [
    { time: '10:42 AM', action: 'Patient record accessed', user: 'Dr. Martinez', status: 'Logged', sc: '#16A34A', sb: '#DCFCE7' },
    { time: '10:38 AM', action: 'Message sent to patient', user: 'AI Agent', status: 'Encrypted', sc: '#2563EB', sb: '#EFF6FF' },
    { time: '10:31 AM', action: 'Lab result viewed', user: 'Care Coordinator', status: 'Logged', sc: '#16A34A', sb: '#DCFCE7' },
    { time: '10:25 AM', action: 'Refill scheduled', user: 'AI Agent', status: 'Logged', sc: '#16A34A', sb: '#DCFCE7' },
    { time: '10:19 AM', action: 'Data export', user: 'Admin', status: 'BAA covered', sc: '#7C3AED', sb: '#F3E8FF' },
  ]
  return (
    <div className="relative overflow-hidden" style={{ height: 460, width: '100%' }}>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "url('/images/Background-website-3.png')", backgroundSize: 'cover', backgroundPosition: 'center top' }}
      />
      <div className="flex" style={{ position: 'absolute', top: 59, left: 74, right: -300, bottom: 0 }}>
        {/* Sidebar — matches homepage dashboard sidebar */}
        <div style={{
          width: 56, flexShrink: 0,
          background: '#F5F4F2',
          borderRight: '1px solid rgba(0,0,0,0.06)',
          borderRadius: '8px 0 0 0',
          padding: '14px 0',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
        }}>
          <div style={{ marginBottom: 14 }}>
            <Image src="/favicon.svg" alt="A2V2" width={22} height={22} style={{ width: 22, height: 22 }} />
          </div>
          {AUDIT_SIDEBAR_ICONS.map(({ Icon, active }, i) => (
            <div key={i} style={{
              width: 32, height: 32, minWidth: 32, minHeight: 32,
              flexShrink: 0, borderRadius: 7,
              background: active ? '#0F0E0D' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={14} color={active ? '#ffffff' : 'rgba(0,0,0,0.32)'} />
            </div>
          ))}
        </div>
        {/* Main */}
        <div style={{ flex: 1, background: '#FAFAF8', borderRadius: '0 8px 0 0', overflow: 'hidden' }}>
          {/* Topbar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 318px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
            <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Audit Log</span>
            <span style={{ fontSize: 10, background: '#DCFCE7', color: '#16A34A', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
              All systems compliant
            </span>
          </div>
          {/* Column headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 110px 78px', padding: '6px 318px 6px 16px', borderBottom: '1px solid rgba(0,0,0,0.04)', background: '#F5F4F2' }}>
            {['Time', 'Action', 'User', 'Status'].map(h => (
              <span key={h} style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{h}</span>
            ))}
          </div>
          {/* Rows */}
          {rows.map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr 110px 78px', padding: '8px 318px 8px 16px', borderBottom: '1px solid rgba(0,0,0,0.04)', alignItems: 'center' }}>
              <span style={{ fontSize: 10, color: '#9A9590', fontFamily: I }}>{row.time}</span>
              <span style={{ fontSize: 10, color: '#0F0E0D', fontFamily: I, fontWeight: 500 }}>{row.action}</span>
              <span style={{ fontSize: 10, color: '#68655E', fontFamily: I }}>{row.user}</span>
              <span style={{ fontSize: 9, background: row.sb, color: row.sc, borderRadius: 999, padding: '2px 6px', fontFamily: I, fontWeight: 500, textAlign: 'center' }}>{row.status}</span>
            </div>
          ))}
          {/* Footer badges */}
          <div style={{ padding: '10px 16px', display: 'flex', gap: 6 }}>
            <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500 }}>AES-256 encrypted</span>
            <span style={{ fontSize: 9, background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500 }}>BAA active</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function LLMFlowDiagram() {
  return (
    <div className="relative overflow-hidden" style={{ height: 460 }}>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "url('/images/Background-website-3.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="relative flex flex-col items-center justify-center" style={{ height: '100%', padding: '40px' }}>
        {/* Source */}
        <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 10, padding: '14px 28px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', width: '100%', maxWidth: 280 }}>
          <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I, marginBottom: 4, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Patient Data</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Your patient data</div>
        </div>

        {/* Arrow */}
        <div style={{ height: 28, width: 1, background: 'rgba(0,0,0,0.15)' }} />

        {/* Gateway */}
        <div style={{ background: '#0F0E0D', borderRadius: 10, padding: '14px 28px', textAlign: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.2)', width: '100%', maxWidth: 280 }}>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', fontFamily: I, marginBottom: 4, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Secured Access</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#ffffff', fontFamily: I }}>BAA-gated, encrypted LLM access</div>
        </div>

        {/* Two branches */}
        <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
          {/* Blocked */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ height: 28, width: 1, background: 'rgba(239,68,68,0.4)' }} />
            <div style={{ background: '#FEF2F2', border: '1px solid #FECACA', borderRadius: 8, padding: '12px 20px', textAlign: 'center', minWidth: 130 }}>
              <div style={{ fontSize: 14, marginBottom: 3 }}>✗</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#DC2626', fontFamily: I, textDecoration: 'line-through' }}>Model training</div>
              <div style={{ fontSize: 9, color: '#EF4444', fontFamily: I, marginTop: 3 }}>Never used</div>
            </div>
          </div>
          {/* Allowed */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ height: 28, width: 1, background: 'rgba(22,163,74,0.4)' }} />
            <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 8, padding: '12px 20px', textAlign: 'center', minWidth: 130 }}>
              <div style={{ fontSize: 14, marginBottom: 3 }}>✓</div>
              <div style={{ fontSize: 10, fontWeight: 600, color: '#16A34A', fontFamily: I }}>Serve your clinic</div>
              <div style={{ fontSize: 9, color: '#22C55E', fontFamily: I, marginTop: 3 }}>Encrypted response</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FAQ_ITEMS = [
  {
    q: "Is my patients' data used to train AI models?",
    a: "No. Your patient data is never used to train, fine-tune, or improve any AI model. This is contractually guaranteed. AI models are accessed under a Business Associate Agreement, and your data is used only to serve your clinic.",
  },
  {
    q: "Do you provide a Business Associate Agreement (BAA)?",
    a: "Yes. A BAA is included on every plan, not just enterprise tiers. The BAA makes A2V2 legally responsible for protecting your patients' Protected Health Information across every interaction.",
  },
  {
    q: "How is patient data encrypted?",
    a: "All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Sensitive fields such as dates of birth, diagnoses, and clinical notes are encrypted at the storage layer with per-field encryption.",
  },
  {
    q: "Where is patient data stored?",
    a: "All patient data is stored in U.S.-based data centers with complete access controls. Your data never leaves the country.",
  },
  {
    q: "Who can access patient data within my clinic?",
    a: "Access is governed by role-based controls, so your front desk staff, care coordinators, and providers each have appropriate, separate levels of access. Every access event is logged in a complete, timestamped, exportable audit trail.",
  },
  {
    q: "Are you SOC 2 or ISO certified?",
    a: "We do not claim SOC 2, ISO 27001, or GDPR certification. We believe security claims should be precise and verifiable. What we do provide is HIPAA compliance, a BAA on every plan, AES-256 encryption, secured LLM access, audit trails, role-based access controls, and U.S.-based data residency.",
  },
  {
    q: "Which AI models does A2V2 use, and are they compliant?",
    a: "A2V2 provides access to flagship AI models inside a HIPAA-compliant environment. Only models that are eligible for use with Protected Health Information under a BAA are used for clinical workflows, and every interaction runs through compliant, access-controlled infrastructure.",
  },
]

function SecurityFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div style={{ maxWidth: 800, borderTop: '1px solid rgba(0,0,0,0.08)' }}>
      {FAQ_ITEMS.map(({ q, a }, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                padding: '20px 0',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              }}
            >
              <span style={{ fontSize: 15, fontWeight: 600, color: '#0F0E0D', fontFamily: I, lineHeight: 1.45 }}>{q}</span>
              <ChevronDown
                size={18}
                style={{
                  flexShrink: 0,
                  color: '#68655E',
                  transition: 'transform 300ms ease',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>
            <div style={{ overflow: 'hidden', maxHeight: isOpen ? 400 : 0, transition: 'max-height 300ms ease' }}>
              <p style={{ fontSize: 14, color: '#68655E', fontFamily: I, lineHeight: 1.7, paddingBottom: 20, margin: 0 }}>
                {a}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default function SecurityPage() {
  return (
    <main style={{ background: '#ffffff', fontFamily: H }}>
      <style>{`
        @media (max-width: 880px) {
          .sec-hero-row { flex-direction: column !important; gap: 28px !important; }
          .sec-hero-right { padding-left: 0 !important; }
          .sec-items-row { flex-direction: column !important; }
          .sec-item { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.08) !important; }
          .sec-item:last-child { border-bottom: none !important; }
          .sec-data-col, .sec-llm-col { flex: 0 0 auto !important; width: 100% !important; }
          .sec-data-row, .sec-llm-row { flex-direction: column !important; gap: 40px !important; }
        }
      `}</style>

      {/* ── SECTION 1: HERO ── */}
      <section style={{ background: '#ffffff', paddingTop: 128, paddingBottom: 96 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div className="sec-hero-row" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div style={{ flex: '0 0 55%' }}>
                <h1
                  className="font-normal leading-[1.05]"
                  style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#0F0E0D', fontFamily: H, maxWidth: 600 }}
                >
                  Security is the foundation, not a feature
                </h1>
              </div>
              <div className="sec-hero-right" style={{ flex: '0 0 45%', paddingLeft: 'clamp(0px, 8vw, 128px)' }}>
                <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 460 }}>
                  Every plan includes HIPAA compliance, a Business Associate Agreement, and end-to-end
                  encryption. Your patient data is protected at every layer and never used to train AI models.
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
                    href="#approach"
                    style={btnGhost}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Read our approach
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: 4 PILLARS ── */}
      <section id="approach" style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 pb-20 md:pb-24">
          <FadeIn delay={60}>
            <div className="sec-items-row" style={{ display: 'flex', border: '1px solid rgba(0,0,0,0.08)' }}>
              {PILLARS.map(({ badge, title, desc }, i) => (
                <div
                  key={title}
                  className="sec-item"
                  style={{
                    flex: 1,
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    borderRight: i < PILLARS.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                  }}
                >
                  <BadgeSVG label={badge} />
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#0F0E0D', fontFamily: I, marginTop: 20 }}>{title}</div>
                  <div style={{ fontSize: 14, color: '#68655E', fontFamily: I, marginTop: 8, lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 3: DATA PROTECTION ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="sec-data-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            {/* Left text */}
            <FadeIn className="sec-data-col" style={{ flex: '0 0 36%' }}>
              <h2
                className="font-normal leading-[1.05]"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#0F0E0D', fontFamily: H, marginBottom: 20 }}
              >
                Protected at every layer
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                From the moment data enters A2V2, it is encrypted, access-controlled, and logged. Every interaction is covered by your Business Associate Agreement.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: Lock, title: 'Encryption at rest and in transit', desc: 'AES-256 for stored data, TLS 1.3 in motion.' },
                  { Icon: KeyRound, title: 'Per-field encryption', desc: 'Sensitive fields like DOB and diagnoses encrypted at the storage layer.' },
                  { Icon: FileCheck, title: 'Complete audit trails', desc: 'Every data access and message logged, timestamped, and exportable.' },
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
            <FadeIn className="sec-data-col" delay={120} style={{ flex: '0 0 60%' }}>
              <AuditLogDashboard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SECURED LLM ACCESS ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="sec-llm-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            {/* Left diagram */}
            <FadeIn className="sec-llm-col" style={{ flex: '0 0 52%' }}>
              <LLMFlowDiagram />
            </FadeIn>
            {/* Right text */}
            <FadeIn className="sec-llm-col" delay={120} style={{ flex: '0 0 44%' }}>
              <h2
                className="font-normal leading-[1.05]"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#0F0E0D', fontFamily: H, marginBottom: 20 }}
              >
                AI access, without the data risk
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                A2V2 provides access to flagship AI models inside a HIPAA-compliant environment. Every model
                interaction runs under a BAA, and your patient data is never used to train, fine-tune, or
                improve any AI model.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {([
                  { Icon: ShieldCheck, title: 'Models run under a BAA', desc: 'Every AI interaction is covered by your Business Associate Agreement.' },
                  { Icon: Ban, title: 'Never used for training', desc: 'Your patient data is never used to train, fine-tune, or improve any AI model.' },
                  { Icon: Server, title: 'U.S.-based, access-controlled infrastructure', desc: 'All AI processing occurs within U.S. data centers with strict access controls.' },
                ] as const).map(({ Icon, title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#EDECEA', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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

      {/* ── SECTION 5: FAQ ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <FadeIn style={{ textAlign: 'center' }}>
            <h2
              className="font-normal leading-[1.05]"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H }}
            >
              Common security questions
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 520, marginTop: 16, marginLeft: 'auto', marginRight: 'auto' }}>
              The questions clinics ask us most about how A2V2 protects patient data.
            </p>
          </FadeIn>
          <FadeIn delay={80} style={{ marginTop: 48, display: 'flex', justifyContent: 'center' }}>
            <SecurityFAQ />
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 6: CTA ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-28">
          <FadeIn>
            <div style={{ textAlign: 'center' }}>
              <h2
                className="font-normal leading-[1.05]"
                style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', color: '#0F0E0D', fontFamily: H, maxWidth: 700, margin: '0 auto' }}
              >
                Security questions? Let&apos;s talk.
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 500, margin: '20px auto 36px' }}>
                Book a demo and we will walk you through exactly how A2V2 protects your patients&apos; data.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
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
            </div>
          </FadeIn>
        </div>
      </section>

      <TestHomepage2Footer />
    </main>
  )
}
