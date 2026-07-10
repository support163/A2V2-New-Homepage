'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  Home, FileText, Users, MessageSquare, Settings,
  LayoutList, Stethoscope, Lock, FileUp, Zap, CheckCircle2,
  MailCheck, UserPlus, SlidersHorizontal, Tag, ShieldCheck,
} from 'lucide-react'
import TestHomepage2Navbar from '@/components/TestHomepage2Navbar'
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

function FadeIn({ children, delay = 0, className = '', style = {} }: {
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
    <div ref={ref} className={className} style={{
      ...style,
      opacity: v ? 1 : 0,
      transform: v ? 'none' : 'translateY(20px)',
      transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
    }}>
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
  { badge: 'HIPAA',   title: 'HIPAA Compliant',    desc: 'Built for healthcare from day one. BAA provided on every plan, with full audit trails.' },
  { badge: 'AES-256', title: 'AES-256 Encryption', desc: 'All data encrypted at rest and in transit using industry-standard AES-256 and TLS 1.3.' },
  { badge: 'BAA',     title: 'Secured LLM Access',  desc: 'AI runs under a Business Associate Agreement. Your data is never used to train models.' },
  { badge: 'U.S.',    title: 'U.S. Data Centers',   desc: 'All patient data is stored in U.S.-based data centers with complete access controls.' },
]

const SIDEBAR_FORMS = [
  { Icon: Home,          active: false },
  { Icon: FileText,      active: true  },
  { Icon: Users,         active: false },
  { Icon: MessageSquare, active: false },
  { Icon: Settings,      active: false },
]

const SIDEBAR_CHAT = [
  { Icon: Home,          active: false },
  { Icon: FileText,      active: false },
  { Icon: Users,         active: false },
  { Icon: MessageSquare, active: true  },
  { Icon: Settings,      active: false },
]

type SidebarItem = { Icon: React.ComponentType<{ size?: number; color?: string }>; active: boolean }

function DashboardShell({
  children, sidebar, height = 540,
}: {
  children: React.ReactNode
  sidebar: SidebarItem[]
  height?: number
}) {
  return (
    <div className="relative overflow-hidden" style={{ height, width: '100%' }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/Background-website-3.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />
      <div className="flex" style={{ position: 'absolute', top: 109, left: 149, right: -300, bottom: 0 }}>
        {/* Sidebar */}
        <div style={{
          width: 56, flexShrink: 0, background: '#F5F4F2',
          borderRight: '1px solid rgba(0,0,0,0.06)', borderRadius: '8px 0 0 0',
          padding: '14px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
        }}>
          <div style={{ marginBottom: 14 }}>
            <Image src="/favicon.svg" alt="A2V2" width={22} height={22} style={{ width: 22, height: 22 }} />
          </div>
          {sidebar.map(({ Icon, active }, i) => (
            <div key={i} style={{
              width: 32, height: 32, borderRadius: 7,
              background: active ? '#0F0E0D' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={14} color={active ? '#ffffff' : 'rgba(0,0,0,0.32)'} />
            </div>
          ))}
        </div>
        {/* Main */}
        <div style={{
          flex: 1, background: '#FAFAF8', borderRadius: '0 8px 0 0',
          overflow: 'hidden', display: 'flex', flexDirection: 'column',
        }}>
          {children}
        </div>
      </div>
    </div>
  )
}

/* ── HERO DASHBOARD — completed intake form ── */
function IntakeFormDashboard() {
  const FIELDS = [
    { label: 'Full Name',     value: 'Sarah Mitchell' },
    { label: 'Date of Birth', value: '04/12/1989' },
    { label: 'Gender',        value: 'Female' },
    { label: 'Primary Goal',  value: 'Hormone Optimization' },
    { label: 'Height',        value: "5'6\"" },
    { label: 'Weight',        value: '132 lbs' },
  ]

  return (
    <DashboardShell sidebar={SIDEBAR_FORMS} height={560}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, color: '#9A9590', fontFamily: I }}>Forms</span>
          <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.2)', fontFamily: I }}>/</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>New Patient Intake</span>
        </div>
        <span style={{ fontSize: 10, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
          Completed
        </span>
      </div>

      {/* Section header */}
      <div style={{ padding: '12px 24px 8px 16px', background: '#F5F4F2', borderBottom: '1px solid rgba(0,0,0,0.04)', flexShrink: 0 }}>
        <span style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          Patient Information
        </span>
      </div>

      {/* Fields grid */}
      <div style={{ padding: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 20px', flexShrink: 0 }}>
        {FIELDS.map(({ label, value }) => (
          <div key={label}>
            <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 3 }}>
              {label}
            </div>
            <div style={{
              fontSize: 12, fontWeight: 500, color: '#0F0E0D', fontFamily: I,
              background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 6, padding: '6px 10px',
            }}>
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom action row */}
      <div style={{ marginTop: 'auto', padding: '12px 24px 12px 16px', borderTop: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <span style={{ fontSize: 10, color: '#9A9590', fontFamily: I }}>Submitted Jul 8, 2026</span>
        <div style={{ fontSize: 11, fontWeight: 500, color: '#0F0E0D', fontFamily: I, background: '#F5F4F2', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 6, padding: '5px 12px', cursor: 'pointer' }}>
          View Record
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── FORM BUILDER DASHBOARD ── */
function FormBuilderDashboard() {
  const PALETTE = [
    { label: 'Text Field' },
    { label: 'Number' },
    { label: 'Date' },
    { label: 'Dropdown' },
    { label: 'Checkbox' },
  ]
  const BUILT_FIELDS = [
    { label: 'Full Name',     type: 'Text Field' },
    { label: 'Date of Birth', type: 'Date' },
    { label: 'Primary Goal',  type: 'Dropdown' },
  ]

  return (
    <DashboardShell sidebar={SIDEBAR_FORMS} height={540}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Form Builder</span>
        <span style={{ fontSize: 10, background: '#EFF6FF', color: '#2563EB', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
          New Patient Intake
        </span>
      </div>

      {/* Two-column layout */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        {/* Palette */}
        <div style={{ width: 130, flexShrink: 0, borderRight: '1px solid rgba(0,0,0,0.06)', padding: '12px 0', background: '#F5F4F2' }}>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.5px', textTransform: 'uppercase', padding: '0 12px 8px' }}>
            Fields
          </div>
          {PALETTE.map(({ label }) => (
            <div key={label} style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '7px 12px', cursor: 'grab',
            }}>
              <div style={{ width: 12, display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
                {[0,1,2].map(i => <div key={i} style={{ display: 'flex', gap: 2 }}>{[0,1].map(j => <div key={j} style={{ width: 2, height: 2, borderRadius: '50%', background: 'rgba(0,0,0,0.25)' }} />)}</div>)}
              </div>
              <span style={{ fontSize: 10, color: '#0F0E0D', fontFamily: I }}>{label}</span>
            </div>
          ))}
        </div>

        {/* Form preview */}
        <div style={{ flex: 1, padding: '14px', overflow: 'hidden' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#0F0E0D', fontFamily: I, marginBottom: 12 }}>
            New Patient Intake
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {BUILT_FIELDS.map(({ label, type }) => (
              <div key={label} style={{
                background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: 7, padding: '8px 12px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 500, color: '#0F0E0D', fontFamily: I }}>{label}</div>
                  <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I, marginTop: 1 }}>{type}</div>
                </div>
                <div style={{ width: 16, display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
                  {[0,1,2].map(i => <div key={i} style={{ display: 'flex', gap: 2 }}>{[0,1].map(j => <div key={j} style={{ width: 2, height: 2, borderRadius: '50%', background: 'rgba(0,0,0,0.2)' }} />)}</div>)}
                </div>
              </div>
            ))}
            {/* Add field */}
            <div style={{
              border: '1px dashed rgba(0,0,0,0.18)', borderRadius: 7, padding: '10px 12px',
              textAlign: 'center', color: '#9A9590', fontSize: 10, fontFamily: I, cursor: 'pointer',
            }}>
              + Add field
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── AI FILE EXTRACTION DASHBOARD ── */
function AIExtractionDashboard() {
  const EXTRACTED = [
    { label: 'Full Name',       value: 'Michael Torres' },
    { label: 'Date of Birth',   value: '06/15/1976' },
    { label: 'Primary Concern', value: 'Fatigue, low energy' },
    { label: 'Height',          value: "5'11\"" },
  ]

  return (
    <DashboardShell sidebar={SIDEBAR_FORMS} height={540}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>AI Extraction</span>
        <span style={{ fontSize: 10, background: '#FFFBEB', color: '#D97706', border: '1px solid #FDE68A', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
          Processing
        </span>
      </div>

      {/* Upload row */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
        background: '#FFFFFF',
      }}>
        <div style={{ width: 32, height: 32, borderRadius: 6, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <FileText size={14} color="#2563EB" />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#0F0E0D', fontFamily: I }}>patient_intake.pdf</div>
          <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I, marginTop: 1 }}>2.4 MB</div>
        </div>
        <span style={{ fontSize: 9, background: '#FFFBEB', color: '#D97706', border: '1px solid #FDE68A', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500, flexShrink: 0 }}>
          AI Extracting...
        </span>
      </div>

      {/* Extracted fields */}
      <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {EXTRACTED.map(({ label, value }) => (
          <div key={label} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 7, padding: '8px 10px',
          }}>
            <div>
              <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 2 }}>{label}</div>
              <div style={{ fontSize: 11, fontWeight: 500, color: '#0F0E0D', fontFamily: I }}>{value}</div>
            </div>
            <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500, flexShrink: 0 }}>
              AI Extracted
            </span>
          </div>
        ))}
      </div>

      {/* Action */}
      <div style={{ padding: '0 16px 14px', marginTop: 'auto' }}>
        <div style={{
          background: '#0F0E0D', color: '#ffffff',
          fontSize: 11, fontWeight: 500, fontFamily: I,
          borderRadius: 7, padding: '8px 16px', textAlign: 'center', cursor: 'pointer',
        }}>
          Review and Submit
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── CHAT INTAKE DASHBOARD ── */
function ChatIntakeDashboard() {
  const MESSAGES = [
    { role: 'ai',   text: "Welcome! To get started, please share your email address for verification." },
    { role: 'user', text: "sarah@email.com" },
    { role: 'ai',   text: "Thanks! A verification code has been sent to sarah@email.com." },
    { role: 'user', text: "4721" },
    { role: 'ai',   text: "You are verified. A contact record has been created for you." },
  ]

  return (
    <DashboardShell sidebar={SIDEBAR_CHAT} height={540}>
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>

        {/* Chat panel */}
        <div style={{ width: 220, flexShrink: 0, borderRight: '1px solid rgba(0,0,0,0.06)', display: 'flex', flexDirection: 'column' }}>
          {/* Agent header */}
          <div style={{ padding: '10px 12px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#F5F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Image src="/favicon.svg" alt="A2V2" width={14} height={14} />
            </div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>A2V2 Agent</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ fontSize: 9, color: '#68655E', fontFamily: I }}>Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, padding: '10px', display: 'flex', flexDirection: 'column', gap: 6, overflowY: 'hidden' }}>
            {MESSAGES.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '85%', padding: '6px 9px', fontSize: 10, fontFamily: I, lineHeight: 1.45,
                  borderRadius: msg.role === 'user' ? '12px 12px 3px 12px' : '12px 12px 12px 3px',
                  background: msg.role === 'user' ? '#0F0E0D' : 'rgba(0,0,0,0.05)',
                  color: msg.role === 'user' ? '#ffffff' : '#0F0E0D',
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact created card */}
        <div style={{ flex: 1, padding: '14px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: '#16A34A', fontFamily: I }}>Contact Created</span>
            <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 4, padding: '1px 5px', fontFamily: I }}>Verified</span>
          </div>
          <div style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 8, padding: '12px', marginBottom: 8 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I, marginBottom: 2 }}>Sarah Mitchell</div>
            <div style={{ fontSize: 10, color: '#68655E', fontFamily: I, marginBottom: 8 }}>sarah@email.com</div>
            <div style={{ display: 'flex', gap: 6 }}>
              <span style={{ fontSize: 9, background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500 }}>Lead</span>
              <span style={{ fontSize: 9, background: '#F5F4F2', color: '#68655E', borderRadius: 4, padding: '2px 6px', fontFamily: I }}>Source: Chat</span>
            </div>
          </div>
          <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>Created just now via in-chat intake</div>
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── MAIN PAGE ── */
export default function PatientIntakePage() {
  return (
    <main style={{ background: '#ffffff', fontFamily: H }}>
      <style>{`
        @media (max-width: 880px) {
          .pi-hero-row   { flex-direction: column !important; gap: 28px !important; }
          .pi-hero-right { padding-left: 0 !important; }
          .pi-hero-dash  { display: none !important; }
          .pi-feat-row   { flex-direction: column !important; gap: 40px !important; }
          .pi-feat-col   { flex: 0 0 auto !important; width: 100% !important; }
          .pi-rev-row    { flex-direction: column !important; gap: 40px !important; }
          .pi-rev-text   { order: 1 !important; }
          .pi-rev-dash   { order: 2 !important; }
          .pi-pillars    { flex-direction: column !important; }
          .pi-pillar     { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.08) !important; }
          .pi-pillar:last-child { border-bottom: none !important; }
          .pi-ai-fields  { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <TestHomepage2Navbar />

      {/* ── SECTION 1: HERO ── */}
      <section style={{ background: '#ffffff', paddingTop: 128, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div className="pi-hero-row" style={{ display: 'flex', alignItems: 'flex-start' }}>
              {/* Left: H1 */}
              <div style={{ flex: '0 0 55%' }}>
                <h1
                  className="font-normal leading-[1.05]"
                  style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#0F0E0D', fontFamily: H, maxWidth: 640 }}
                >
                  Patient intake that fills itself in
                </h1>
              </div>
              {/* Right: subtitle + buttons */}
              <div className="pi-hero-right" style={{ flex: '0 0 45%', paddingLeft: 'clamp(0px, 8vw, 128px)' }}>
                <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 470 }}>
                  Build custom intake forms, let AI pull patient data straight from uploaded documents, and turn every conversation into a structured record. All inside HIPAA-compliant infrastructure.
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
                    href={SIGN_IN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={btnGhost}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Hero dashboard */}
          <FadeIn delay={120} className="pi-hero-dash" style={{ marginTop: 64 }}>
            <IntakeFormDashboard />
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: DRAG-AND-DROP FORM BUILDER ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="pi-feat-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            {/* Left: text */}
            <FadeIn className="pi-feat-col" style={{ flex: '0 0 38%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Build the exact forms your clinic needs
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Create custom intake and assessment forms with a simple drag-and-drop builder, no technical setup required.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: LayoutList,   title: 'Drag-and-drop fields',    desc: 'Text, number, checkbox, radio, dropdown, date, and more.' },
                  { Icon: Stethoscope,  title: 'Built for clinical intake', desc: 'Create new-patient forms and advanced assessments alike.' },
                  { Icon: Lock,         title: 'Encrypt sensitive data',    desc: 'Toggle per-form encryption so sensitive fields are protected at rest.' },
                ] as const).map(({ Icon, title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#F5F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={16} color="#0F0E0D" />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{title}</div>
                      <div style={{ fontSize: 14, color: '#68655E', fontFamily: I, marginTop: 3, lineHeight: 1.5 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right: dashboard */}
            <FadeIn className="pi-feat-col" delay={120} style={{ flex: '0 0 58%' }}>
              <FormBuilderDashboard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: AI FILE EXTRACTION (reversed: dashboard left, text right) ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="pi-rev-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            {/* Dashboard left */}
            <FadeIn className="pi-rev-dash pi-feat-col" style={{ flex: '0 0 56%' }}>
              <AIExtractionDashboard />
            </FadeIn>

            {/* Text right */}
            <FadeIn className="pi-rev-text pi-feat-col" delay={120} style={{ flex: '0 0 40%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Let AI do the data entry
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Upload a PDF, Word doc, or intake document and A2V2 extracts the details and fills in the matching form automatically. No more retyping what a patient already gave you.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: FileUp,        title: 'Upload and extract',         desc: 'Drop in a document and the form populates itself.' },
                  { Icon: Zap,           title: 'Faster, more reliable intake', desc: 'Patient details land in the record quickly and dependably.' },
                  { Icon: CheckCircle2,  title: 'Review before it saves',     desc: 'Extracted data becomes a draft submission your team can confirm.' },
                ] as const).map(({ Icon, title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#F5F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={16} color="#0F0E0D" />
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

      {/* ── SECTION 4: IN-CHAT INTAKE ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="pi-feat-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            {/* Left: text */}
            <FadeIn className="pi-feat-col" style={{ flex: '0 0 38%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Turn conversations into records
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                When a patient starts a conversation, your agent can verify their identity by email and automatically create a contact record, so intake begins the moment they reach out.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: MessageSquare, title: 'Chat-based intake',    desc: 'Patients begin intake through a natural conversation.' },
                  { Icon: MailCheck,     title: 'Email verification',   desc: 'Verify the patient by email before assisting.' },
                  { Icon: UserPlus,      title: 'Auto-created records', desc: 'A verified conversation becomes a CRM contact automatically.' },
                ] as const).map(({ Icon, title, desc }) => (
                  <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#F5F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={16} color="#0F0E0D" />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{title}</div>
                      <div style={{ fontSize: 14, color: '#68655E', fontFamily: I, marginTop: 3, lineHeight: 1.5 }}>{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Right: dashboard */}
            <FadeIn className="pi-feat-col" delay={120} style={{ flex: '0 0 58%' }}>
              <ChatIntakeDashboard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: AI-ACCESSIBLE FIELDS ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24" style={{ textAlign: 'center' }}>
          <FadeIn>
            <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 20, maxWidth: 700, margin: '0 auto 20px' }}>
              Your agent reads and writes the right fields
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 640, margin: '0 auto 40px' }}>
              Mark specific form fields as AI-accessible so your agent can read and update exactly the data it should, and nothing it should not. It is precise control over what the AI can touch.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="pi-ai-fields" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, maxWidth: 720, margin: '0 auto' }}>
              {([
                { Icon: SlidersHorizontal, title: 'Field-level access control',         desc: 'Choose exactly which fields your agent can read or write.' },
                { Icon: Tag,               title: 'Stable machine names',                desc: 'Each field has a consistent name your agent uses to reference it.' },
                { Icon: ShieldCheck,       title: 'Precise read and write permissions', desc: 'Grant read, write, or both on a per-field basis.' },
              ] as const).map(({ Icon, title, desc }) => (
                <div key={title} style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 8, background: '#F5F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={22} color="#0F0E0D" />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#0F0E0D', fontFamily: I, textAlign: 'center', maxWidth: 140 }}>{title}</div>
                  <div style={{ fontSize: 14, color: '#68655E', fontFamily: I, lineHeight: 1.55, textAlign: 'center' }}>{desc}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 6: SECURITY ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <FadeIn>
            <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
              Intake data, protected at every step
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 560, marginBottom: 48 }}>
              Every form, every extracted field, every chat record is handled inside A2V2&apos;s HIPAA-compliant infrastructure.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="pi-pillars" style={{ display: 'flex', border: '1px solid rgba(0,0,0,0.08)' }}>
              {PILLARS.map(({ badge, title, desc }, i) => (
                <div
                  key={title}
                  className="pi-pillar"
                  style={{
                    flex: 1,
                    padding: '32px 28px',
                    display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
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
          <FadeIn delay={120} style={{ marginTop: 24 }}>
            <Link
              href="/security"
              style={{ fontSize: 14, fontWeight: 500, color: '#0F0E0D', fontFamily: I, textDecoration: 'underline', textUnderlineOffset: 3, letterSpacing: '-0.2px', transition: 'color 150ms ease' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#2563EB')}
              onMouseLeave={e => (e.currentTarget.style.color = '#0F0E0D')}
            >
              Learn more about our security →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 7: CTA ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-28">
          <FadeIn>
            <div style={{ textAlign: 'center' }}>
              <h2
                className="font-normal leading-[1.05]"
                style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', color: '#0F0E0D', fontFamily: H, maxWidth: 700, margin: '0 auto' }}
              >
                See intake that fills itself in
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 500, margin: '20px auto 36px' }}>
                Book a demo and we will show you AI-powered intake and everything else A2V2 can do for your clinic.
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
                  target="_blank"
                  rel="noopener noreferrer"
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
