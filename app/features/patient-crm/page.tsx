'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  Home, FileText, Users, Settings, MessageSquare,
  Clock, Activity, TrendingUp, Sparkles,
  ClipboardList, StickyNote, Pill,
  Zap, Layers, ScrollText,
  TrendingDown, Minus,
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

const SIDEBAR_CONTACTS = [
  { Icon: Home,          active: false },
  { Icon: Users,         active: true  },
  { Icon: FileText,      active: false },
  { Icon: MessageSquare, active: false },
  { Icon: Settings,      active: false },
]

const SIDEBAR_HEALTH = [
  { Icon: Home,          active: false },
  { Icon: Users,         active: false },
  { Icon: Activity,      active: true  },
  { Icon: MessageSquare, active: false },
  { Icon: Settings,      active: false },
]

const SIDEBAR_NOTES = [
  { Icon: Home,          active: false },
  { Icon: Users,         active: false },
  { Icon: FileText,      active: true  },
  { Icon: MessageSquare, active: false },
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

/* ── HERO DASHBOARD — contact record overview ── */
function HeroContactDashboard() {
  const TABS = ['General', 'Health', 'Notes', 'Prescriptions']
  const FIELDS = [
    { label: 'Email',        value: 'sarah@email.com' },
    { label: 'Date of Birth', value: '04/12/1989' },
    { label: 'Stage',        value: 'Customer' },
    { label: 'Status',       value: 'Active' },
    { label: 'Primary Goal', value: 'Hormone Optimization' },
    { label: 'Source',       value: 'Chat Intake' },
  ]

  return (
    <DashboardShell sidebar={SIDEBAR_CONTACTS} height={560}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#E8E6E3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#68655E', fontFamily: I }}>SM</span>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Sarah Mitchell</div>
            <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>Patient record</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
            Active
          </span>
          <span style={{ fontSize: 9, background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
            Customer
          </span>
        </div>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex', borderBottom: '1px solid rgba(0,0,0,0.06)',
        padding: '0 16px', flexShrink: 0,
      }}>
        {TABS.map((tab, i) => (
          <div key={tab} style={{
            fontSize: 10, fontWeight: i === 0 ? 600 : 500, fontFamily: I,
            color: i === 0 ? '#0F0E0D' : '#9A9590',
            padding: '8px 10px',
            borderBottom: i === 0 ? '2px solid #0F0E0D' : '2px solid transparent',
            marginBottom: -1,
          }}>
            {tab}
          </div>
        ))}
      </div>

      {/* Fields grid */}
      <div style={{ padding: '14px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px' }}>
        {FIELDS.map(({ label, value }) => (
          <div key={label}>
            <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 3 }}>
              {label}
            </div>
            <div style={{
              fontSize: 11, fontWeight: 500, color: '#0F0E0D', fontFamily: I,
              background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 6, padding: '5px 9px',
            }}>
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* Timeline preview */}
      <div style={{ padding: '0 16px', marginTop: 4 }}>
        <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 8 }}>
          Recent Activity
        </div>
        {[
          { date: 'Jul 8', text: 'Intake form submitted' },
          { date: 'Jul 5', text: 'Consultation note added' },
        ].map(({ date, text }) => (
          <div key={text} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 6 }}>
            <span style={{ fontSize: 9, color: '#9A9590', fontFamily: I, flexShrink: 0, width: 28 }}>{date}</span>
            <span style={{ fontSize: 10, color: '#68655E', fontFamily: I }}>{text}</span>
          </div>
        ))}
      </div>
    </DashboardShell>
  )
}

/* ── CONTACT RECORD DASHBOARD (Section 2) ── */
function ContactRecordDashboard() {
  const TABS = ['General', 'Health', 'Notes', 'Prescriptions']
  const FIELDS = [
    { label: 'Full Name',     value: 'James Reyes' },
    { label: 'Date of Birth', value: '03/22/1981' },
    { label: 'Stage',        value: 'Customer' },
    { label: 'Status',       value: 'Active' },
    { label: 'Primary Goal',  value: 'Weight Management' },
    { label: 'Joined',        value: 'Jun 14, 2026' },
  ]

  return (
    <DashboardShell sidebar={SIDEBAR_CONTACTS} height={540}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#E0EFF9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#2563EB', fontFamily: I }}>JR</span>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>James Reyes</div>
            <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>Patient record</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>Active</span>
          <span style={{ fontSize: 9, background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>Customer</span>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid rgba(0,0,0,0.06)', padding: '0 16px', flexShrink: 0 }}>
        {TABS.map((tab, i) => (
          <div key={tab} style={{
            fontSize: 10, fontWeight: i === 0 ? 600 : 500, fontFamily: I,
            color: i === 0 ? '#0F0E0D' : '#9A9590',
            padding: '8px 10px',
            borderBottom: i === 0 ? '2px solid #0F0E0D' : '2px solid transparent',
            marginBottom: -1,
          }}>
            {tab}
          </div>
        ))}
      </div>

      {/* Fields grid */}
      <div style={{ padding: '14px 16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px', flexShrink: 0 }}>
        {FIELDS.map(({ label, value }) => (
          <div key={label}>
            <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 3 }}>
              {label}
            </div>
            <div style={{
              fontSize: 11, fontWeight: 500, color: '#0F0E0D', fontFamily: I,
              background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)',
              borderRadius: 6, padding: '5px 9px',
            }}>
              {value}
            </div>
          </div>
        ))}
      </div>

      {/* Stage pipeline */}
      <div style={{ padding: '10px 16px 14px', marginTop: 'auto' }}>
        <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 8 }}>
          Stage
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {['Lead', 'Prospect', 'Trial', 'Customer'].map((s) => (
            <div key={s} style={{
              flex: 1, padding: '5px 0', textAlign: 'center',
              fontSize: 9, fontFamily: I, fontWeight: 500,
              borderRadius: 4,
              background: s === 'Customer' ? '#0F0E0D' : 'rgba(0,0,0,0.05)',
              color: s === 'Customer' ? '#ffffff' : '#9A9590',
            }}>
              {s}
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── HEALTH PARAMETERS DASHBOARD (Section 3) ── */
function HealthParamsDashboard() {
  const PARAMS = [
    { name: 'Body Weight',     value: '152 lbs', TrendIcon: TrendingDown, trendColor: '#16A34A', trendLabel: '-8 lbs',  insight: 'Trending down over 90 days' },
    { name: 'Fasting Glucose', value: '94 mg/dL', TrendIcon: TrendingDown, trendColor: '#16A34A', trendLabel: '-14 pts', insight: 'Improved from 108 at first visit' },
    { name: 'A1c',             value: '5.4%',    TrendIcon: Minus,        trendColor: '#2563EB', trendLabel: 'Stable',  insight: 'Within target range' },
  ]

  return (
    <DashboardShell sidebar={SIDEBAR_HEALTH} height={540}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 11, color: '#9A9590', fontFamily: I }}>James Reyes</span>
          <span style={{ fontSize: 11, color: 'rgba(0,0,0,0.2)', fontFamily: I }}>/</span>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Health Parameters</span>
        </div>
        <span style={{ fontSize: 10, background: '#F5F4F2', color: '#68655E', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
          Last 90 days
        </span>
      </div>

      {/* Parameters list */}
      <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {PARAMS.map(({ name, value, TrendIcon, trendColor, trendLabel, insight }) => (
          <div key={name} style={{
            background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: 8, padding: '12px 14px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{name}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <TrendIcon size={12} color={trendColor} />
                <span style={{ fontSize: 10, fontWeight: 500, color: trendColor, fontFamily: I }}>{trendLabel}</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: 20, fontWeight: 600, color: '#0F0E0D', fontFamily: I, lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I, marginTop: 4 }}>{insight}</div>
              </div>
              {/* Mini trend sparkline */}
              <svg width={72} height={28} viewBox="0 0 72 28" fill="none">
                <polyline
                  points={trendLabel === 'Stable'
                    ? '0,14 14,13 28,15 42,14 56,13 72,14'
                    : '0,24 14,21 28,17 42,13 56,9 72,5'}
                  stroke={trendColor}
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        ))}

        {/* Insight callout */}
        <div style={{
          background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 8,
          padding: '8px 12px', display: 'flex', alignItems: 'flex-start', gap: 8,
        }}>
          <Sparkles size={12} color="#D97706" style={{ flexShrink: 0, marginTop: 1 }} />
          <span style={{ fontSize: 10, color: '#92400E', fontFamily: I, lineHeight: 1.5 }}>
            Weight and glucose both trending in the right direction over 90 days.
          </span>
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── NOTES & PRESCRIPTIONS DASHBOARD (Section 4) ── */
function NotesPrescriptionsDashboard() {
  const TABS = ['General', 'Health', 'Notes', 'Prescriptions']
  const MEDS = [
    { name: 'Testosterone Cypionate', dose: '200mg/mL — 0.5mL IM weekly' },
    { name: 'Anastrozole',            dose: '0.25mg — twice weekly' },
  ]

  return (
    <DashboardShell sidebar={SIDEBAR_NOTES} height={540}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#E0EFF9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 9, fontWeight: 600, color: '#2563EB', fontFamily: I }}>JR</span>
          </div>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>James Reyes</span>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid rgba(0,0,0,0.06)', padding: '0 16px', flexShrink: 0 }}>
        {TABS.map((tab, i) => {
          const active = tab === 'Notes'
          return (
            <div key={tab} style={{
              fontSize: 10, fontWeight: active ? 600 : 500, fontFamily: I,
              color: active ? '#0F0E0D' : '#9A9590',
              padding: '8px 10px',
              borderBottom: active ? '2px solid #0F0E0D' : '2px solid transparent',
              marginBottom: -1,
            }}>
              {tab}
            </div>
          )
        })}
      </div>

      {/* Note */}
      <div style={{ padding: '12px 16px', flexShrink: 0 }}>
        <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 6 }}>
          Jul 8, 2026
        </div>
        <div style={{
          background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 8, padding: '10px 12px',
          fontSize: 11, color: '#0F0E0D', fontFamily: I, lineHeight: 1.6,
        }}>
          Patient reports improved energy levels. Testosterone levels stabilizing. Continue current protocol and recheck labs at next visit.
        </div>
      </div>

      {/* Divider */}
      <div style={{ margin: '0 16px', borderTop: '1px solid rgba(0,0,0,0.06)' }} />

      {/* Prescriptions */}
      <div style={{ padding: '10px 16px 14px' }}>
        <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 8 }}>
          Prescriptions
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
          {MEDS.map(({ name, dose }) => (
            <div key={name} style={{
              background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
              borderRadius: 8, padding: '9px 12px',
              display: 'flex', alignItems: 'center', gap: 10,
            }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: '#F5F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Pill size={13} color="#68655E" />
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{name}</div>
                <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I, marginTop: 1 }}>{dose}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── MAIN PAGE ── */
export default function PatientCrmPage() {
  return (
    <main style={{ background: '#ffffff', fontFamily: H }}>
      <style>{`
        @media (max-width: 880px) {
          .pc-hero-row   { flex-direction: column !important; gap: 28px !important; }
          .pc-hero-right { padding-left: 0 !important; }
          .pc-hero-dash  { display: none !important; }
          .pc-feat-row   { flex-direction: column !important; gap: 40px !important; }
          .pc-feat-col   { flex: 0 0 auto !important; width: 100% !important; }
          .pc-rev-row    { flex-direction: column !important; gap: 40px !important; }
          .pc-rev-text   { order: 1 !important; }
          .pc-rev-dash   { order: 2 !important; }
          .pc-pillars    { flex-direction: column !important; }
          .pc-pillar     { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.08) !important; }
          .pc-pillar:last-child { border-bottom: none !important; }
          .pc-auto-grid  { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <TestHomepage2Navbar />

      {/* ── SECTION 1: HERO ── */}
      <section style={{ background: '#ffffff', paddingTop: 128, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div className="pc-hero-row" style={{ display: 'flex', alignItems: 'flex-start' }}>
              {/* Left: H1 */}
              <div style={{ flex: '0 0 55%' }}>
                <h1
                  className="font-normal leading-[1.05]"
                  style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#0F0E0D', fontFamily: H, maxWidth: 640 }}
                >
                  A patient CRM built for clinics
                </h1>
              </div>
              {/* Right: subtitle + buttons */}
              <div className="pc-hero-right" style={{ flex: '0 0 45%', paddingLeft: 'clamp(0px, 8vw, 128px)' }}>
                <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 470 }}>
                  Every conversation becomes a patient record, complete with history, health parameters, forms, notes, and prescriptions. One place for the full patient relationship, inside HIPAA-compliant infrastructure.
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
          <FadeIn delay={120} className="pc-hero-dash" style={{ marginTop: 64 }}>
            <HeroContactDashboard />
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: PATIENT RECORDS ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="pc-feat-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            {/* Left: text */}
            <FadeIn className="pc-feat-col" style={{ flex: '0 0 38%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Every patient, in one record
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Each patient gets a complete record that your team can see and update at a glance, from first contact through their entire journey.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: Users,    title: 'Contact records',               desc: 'Track patients through stages from Lead to Customer.' },
                  { Icon: Clock,    title: 'Full history',                  desc: 'See the patient\'s timeline and past interactions in one place.' },
                  { Icon: FileText, title: 'Notes, forms, and prescriptions', desc: 'Keep intake forms, notes, medications, and prescriptions on the record.' },
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
            <FadeIn className="pc-feat-col" delay={120} style={{ flex: '0 0 58%' }}>
              <ContactRecordDashboard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: HEALTH PARAMETERS & TRENDS (reversed) ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="pc-rev-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            {/* Dashboard left */}
            <FadeIn className="pc-rev-dash pc-feat-col" style={{ flex: '0 0 55%' }}>
              <HealthParamsDashboard />
            </FadeIn>

            {/* Text right */}
            <FadeIn className="pc-rev-text pc-feat-col" delay={120} style={{ flex: '0 0 41%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Track what matters over time
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Configure the health metrics your clinic cares about and watch them trend across every visit, with insights that surface what is changing.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: Activity,   title: 'Configurable parameters', desc: 'Define the metrics that matter for your protocols.' },
                  { Icon: TrendingUp, title: 'Trends over time',        desc: 'See how each parameter moves across visits.' },
                  { Icon: Sparkles,   title: 'Insights',                desc: 'Surface meaningful changes automatically.' },
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

      {/* ── SECTION 4: NOTES, FORMS & PRESCRIPTIONS ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="pc-feat-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            {/* Left: text */}
            <FadeIn className="pc-feat-col" style={{ flex: '0 0 38%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Everything about the patient, in context
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Intake forms, clinical notes, medications, and prescriptions all live on the patient record, so your team never has to hunt across tools.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: ClipboardList, title: 'Intake forms on the record', desc: 'Submitted forms attach directly to the patient.' },
                  { Icon: StickyNote,    title: 'Notes',                      desc: 'Capture and keep clinical notes in one place.' },
                  { Icon: Pill,          title: 'Medications and prescriptions', desc: 'Track what each patient is on.' },
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
            <FadeIn className="pc-feat-col" delay={120} style={{ flex: '0 0 58%' }}>
              <NotesPrescriptionsDashboard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CRM AUTOMATIONS ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24" style={{ textAlign: 'center' }}>
          <FadeIn>
            <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, margin: '0 auto 20px', maxWidth: 640 }}>
              Let your workflows run themselves
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 640, margin: '0 auto 48px' }}>
              Build primary and secondary automations, trigger actions based on where a patient is in your process with state-based automation, and keep a clear, auditable log of every action.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="pc-auto-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, maxWidth: 720, margin: '0 auto' }}>
              {([
                { id: 'primary', Icon: Zap,        label: <>Primary and secondary<br />automations</>,  desc: 'Chain actions that trigger when a condition is met.' },
                { id: 'state',   Icon: Layers,     label: <>State-based<br />automation</>,             desc: 'Drive actions from where each patient sits in your workflow.' },
                { id: 'logged',  Icon: ScrollText, label: <>Every action<br />logged</>,                desc: 'A clear, auditable record of what ran and when.' },
              ] as { id: string; Icon: React.ComponentType<{ size?: number; color?: string }>; label: React.ReactNode; desc: string }[]).map(({ id, Icon, label, desc }) => (
                <div key={id} style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 8, background: '#F5F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={22} color="#0F0E0D" />
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#0F0E0D', fontFamily: I, textAlign: 'center' }}>{label}</div>
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
            <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(24px, 3vw, 40px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
              Patient data, protected at every layer
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 560, marginBottom: 48 }}>
              Every record, every health parameter, every note and prescription is handled inside A2V2&apos;s HIPAA-compliant infrastructure.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="pc-pillars" style={{ display: 'flex', border: '1px solid rgba(0,0,0,0.08)' }}>
              {PILLARS.map(({ badge, title, desc }, i) => (
                <div
                  key={title}
                  className="pc-pillar"
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
                See the patient CRM in action
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 500, margin: '20px auto 36px' }}>
                Book a demo and we will show you the CRM and everything else A2V2 can do for your clinic.
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
