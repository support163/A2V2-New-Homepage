'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  Home, Settings, MessageSquare, Users,
  Clock, PhoneOff, Layers, Eye,
  Zap, AlertCircle, UserCheck, CheckCircle2,
  type LucideIcon,
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

type SidebarItem = { Icon: LucideIcon; active: boolean }

const SIDEBAR_MSG: SidebarItem[] = [
  { Icon: Home,           active: false },
  { Icon: MessageSquare,  active: true  },
  { Icon: Users,          active: false },
  { Icon: Settings,       active: false },
]

const SIDEBAR_RECORD: SidebarItem[] = [
  { Icon: Home,           active: false },
  { Icon: Users,          active: true  },
  { Icon: MessageSquare,  active: false },
  { Icon: Settings,       active: false },
]

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
      <div className="flex" style={{ position: 'absolute', top: 109, left: 149, right: -13, bottom: 0 }}>
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

/* ── HERO DASHBOARD ── */
function HeroMessagingDashboard() {
  const PATIENTS = [
    {
      initials: 'SM', bg: '#E8E6E3', fg: '#68655E',
      name: 'Sarah Mitchell', type: 'Appointment Reminder',
      sub: 'HRT Follow-up · Wed, Jul 9',
      status: 'Delivered', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0',
    },
    {
      initials: 'JR', bg: '#E0EFF9', fg: '#2563EB',
      name: 'James Reyes', type: 'Protocol Check-in',
      sub: 'NAD+ Day 14 · Tue, Jul 8',
      status: 'Delivered', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0',
    },
    {
      initials: 'MC', bg: '#FEF9E7', fg: '#B45309',
      name: 'Maria Chen', type: 'Lab Reminder',
      sub: 'Upload results by Thu, Jul 10',
      status: 'Scheduled', statusBg: '#EFF6FF', statusFg: '#2563EB', statusBorder: '#BFDBFE',
    },
  ]
  return (
    <DashboardShell sidebar={SIDEBAR_MSG} height={560}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Text Reminders</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ fontSize: 9, background: '#F5F4F2', color: '#68655E', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
            This week
          </span>
          <span style={{ fontSize: 9, background: '#F5F4F2', color: '#68655E', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
            All
          </span>
        </div>
      </div>

      {/* Patient list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {PATIENTS.map((p) => (
          <div key={p.name} style={{
            background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: 10, padding: '11px 14px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 9, fontWeight: 600, color: p.fg, fontFamily: I }}>{p.initials}</span>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{p.type}</div>
                  <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I, marginTop: 1 }}>{p.sub}</div>
                </div>
              </div>
              <span style={{ fontSize: 9, background: p.statusBg, color: p.statusFg, border: `1px solid ${p.statusBorder}`, borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
                {p.status}
              </span>
            </div>
          </div>
        ))}

        {/* Message preview */}
        <div style={{
          background: '#F5F4F2', border: '1px solid rgba(0,0,0,0.08)',
          borderRadius: 10, padding: '11px 14px',
        }}>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 7 }}>
            Message preview
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <MessageSquare size={12} color="#2563EB" style={{ flexShrink: 0, marginTop: 1 }} />
            <p style={{ fontSize: 10, color: '#1a1a1a', fontFamily: I, lineHeight: 1.55, margin: 0 }}>
              &ldquo;Hi Sarah, this is a reminder that your HRT follow-up is tomorrow at 2:00 PM. Reply STOP to opt out.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── SCHEDULED REMINDERS DASHBOARD (Section 2) ── */
function ScheduledRemindersDashboard() {
  const TODAY = [
    { initials: 'SM', bg: '#E8E6E3', fg: '#68655E', name: 'Sarah Mitchell', type: 'Appointment Reminder', time: '9:00 AM', status: 'Sent', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0' },
    { initials: 'JR', bg: '#E0EFF9', fg: '#2563EB', name: 'James Reyes',    type: 'Protocol Check-in',   time: '2:00 PM', status: 'Queued', statusBg: '#EFF6FF', statusFg: '#2563EB', statusBorder: '#BFDBFE' },
  ]
  const TOMORROW = [
    { initials: 'MC', bg: '#FEF9E7', fg: '#B45309', name: 'Maria Chen',     type: 'Lab Reminder',        time: '10:00 AM', status: 'Scheduled', statusBg: '#F5F4F2', statusFg: '#68655E', statusBorder: 'rgba(0,0,0,0.1)' },
    { initials: 'AP', bg: '#F0F0FE', fg: '#4F46E5', name: 'Alice Park',     type: 'Refill Reminder',     time: '12:30 PM', status: 'Scheduled', statusBg: '#F5F4F2', statusFg: '#68655E', statusBorder: 'rgba(0,0,0,0.1)' },
    { initials: 'LB', bg: '#FEF2F2', fg: '#DC2626', name: 'Leo Barnes',     type: 'HRT Follow-up',       time: '4:00 PM',  status: 'Scheduled', statusBg: '#F5F4F2', statusFg: '#68655E', statusBorder: 'rgba(0,0,0,0.1)' },
  ]
  const Row = ({ p }: { p: typeof TODAY[0] }) => (
    <div style={{
      background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
      borderRadius: 8, padding: '9px 12px',
      display: 'flex', alignItems: 'center', gap: 9,
    }}>
      <div style={{ width: 22, height: 22, borderRadius: '50%', background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <span style={{ fontSize: 8, fontWeight: 600, color: p.fg, fontFamily: I }}>{p.initials}</span>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{p.type}</div>
        <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I, marginTop: 1 }}>{p.name} &middot; {p.time}</div>
      </div>
      <span style={{ fontSize: 9, background: p.statusBg, color: p.statusFg, border: `1px solid ${p.statusBorder}`, borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500, flexShrink: 0 }}>
        {p.status}
      </span>
    </div>
  )
  return (
    <DashboardShell sidebar={SIDEBAR_MSG} height={540}>
      <div style={{
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Scheduled Reminders</span>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 7 }}>Today</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {TODAY.map((p) => <Row key={p.name} p={p} />)}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 7 }}>Tomorrow</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {TOMORROW.map((p) => <Row key={p.name} p={p} />)}
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── PATIENT RECORD TIMELINE DASHBOARD (Section 3) ── */
function PatientTimelineDashboard() {
  const MESSAGES = [
    { type: 'Appointment Reminder', date: 'Wed, Jul 9 · 8:00 AM', preview: 'Your HRT follow-up is tomorrow at 2:00 PM.', status: 'Delivered', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0' },
    { type: 'Refill Nudge',         date: 'Tue, Jul 1 · 10:00 AM', preview: 'Your HRT refill is due in 7 days. Contact us to reorder.', status: 'Delivered', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0' },
    { type: 'Protocol Check-in',    date: 'Thu, Jun 26 · 9:00 AM', preview: 'How are you feeling on day 14 of your protocol?', status: 'Delivered', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0' },
  ]
  return (
    <DashboardShell sidebar={SIDEBAR_RECORD} height={540}>
      {/* Patient header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#E8E6E3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 9, fontWeight: 600, color: '#68655E', fontFamily: I }}>SM</span>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Sarah Mitchell</div>
            <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>HRT Protocol · Started Jun 2026</div>
          </div>
        </div>
        <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>Active</span>
      </div>

      {/* Message history */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 4 }}>Message history</div>
        {MESSAGES.map((m, i) => (
          <div key={i} style={{
            background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: 9, padding: '10px 12px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <MessageSquare size={10} color="#9A9590" />
                <span style={{ fontSize: 10, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{m.type}</span>
              </div>
              <span style={{ fontSize: 9, background: m.statusBg, color: m.statusFg, border: `1px solid ${m.statusBorder}`, borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
                {m.status}
              </span>
            </div>
            <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I, marginBottom: 5 }}>{m.date}</div>
            <p style={{ fontSize: 10, color: '#68655E', fontFamily: I, lineHeight: 1.5, margin: 0 }}>
              &ldquo;{m.preview}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </DashboardShell>
  )
}

/* ── ESCALATION DASHBOARD (Section 4) ── */
function EscalationDashboard() {
  const AUTO = [
    { initials: 'SM', bg: '#E8E6E3', fg: '#68655E', name: 'Sarah Mitchell', type: 'Appointment Reminder', sent: 'Wed, Jul 9' },
    { initials: 'JR', bg: '#E0EFF9', fg: '#2563EB', name: 'James Reyes',    type: 'Protocol Check-in',   sent: 'Tue, Jul 8' },
    { initials: 'MC', bg: '#FEF9E7', fg: '#B45309', name: 'Maria Chen',     type: 'Lab Reminder',        sent: 'Mon, Jul 7' },
  ]
  return (
    <DashboardShell sidebar={SIDEBAR_MSG} height={540}>
      <div style={{
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Message Activity</span>
      </div>
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Auto-handled */}
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 7 }}>Handled automatically</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {AUTO.map((r) => (
              <div key={r.name} style={{
                background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 8, padding: '9px 12px',
                display: 'flex', alignItems: 'center', gap: 9,
              }}>
                <CheckCircle2 size={13} color="#16A34A" style={{ flexShrink: 0 }} />
                <div style={{ width: 20, height: 20, borderRadius: '50%', background: r.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 7, fontWeight: 600, color: r.fg, fontFamily: I }}>{r.initials}</span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{r.type}</div>
                  <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>{r.name} &middot; Sent {r.sent}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Needs attention */}
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 7 }}>Needs your attention</div>
          <div style={{
            background: '#FFF7ED', border: '1px solid #FED7AA',
            borderRadius: 9, padding: '11px 12px',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <AlertCircle size={13} color="#EA580C" style={{ flexShrink: 0, marginTop: 1 }} />
              <div>
                <div style={{ fontSize: 10, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Clinical question from Alex Park</div>
                <div style={{ fontSize: 9, color: '#68655E', fontFamily: I, marginTop: 3, lineHeight: 1.5 }}>
                  &ldquo;What are my current estrogen levels?&rdquo; &middot; Just now
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 8 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#EA580C' }} />
                  <span style={{ fontSize: 9, fontWeight: 500, color: '#EA580C', fontFamily: I }}>Routed to provider</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── FEATURE POINT ── */
function FeaturePoint({ Icon, title, desc }: { Icon: LucideIcon; title: string; desc: string }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{ width: 36, height: 36, borderRadius: 8, background: '#F5F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={16} color="#0F0E0D" />
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{title}</div>
        <div style={{ fontSize: 14, color: '#68655E', fontFamily: I, marginTop: 3, lineHeight: 1.5 }}>{desc}</div>
      </div>
    </div>
  )
}

/* ── MAIN PAGE ── */
export default function PatientMessagingPage() {
  return (
    <main style={{ background: '#ffffff', fontFamily: H }}>
      <style>{`
        @media (max-width: 880px) {
          .pm-hero-row   { flex-direction: column !important; gap: 28px !important; }
          .pm-hero-right { padding-left: 0 !important; }
          .pm-hero-dash  { display: none !important; }
          .pm-feat-row   { flex-direction: column !important; gap: 40px !important; }
          .pm-feat-col   { flex: 0 0 auto !important; width: 100% !important; }
          .pm-rev-row    { flex-direction: column !important; gap: 40px !important; }
          .pm-rev-text   { order: 1 !important; }
          .pm-rev-dash   { order: 2 !important; }
          .pm-pillars    { flex-direction: column !important; }
          .pm-pillar     { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.08) !important; }
          .pm-pillar:last-child { border-bottom: none !important; }
        }
      `}</style>

      <TestHomepage2Navbar />

      {/* ── SECTION 1: HERO ── */}
      <section style={{ background: '#ffffff', paddingTop: 128, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div className="pm-hero-row" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div style={{ flex: '0 0 55%' }}>
                <h1
                  className="font-normal leading-[1.05]"
                  style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#0F0E0D', fontFamily: H, maxWidth: 640 }}
                >
                  Reach patients where they actually read
                </h1>
              </div>
              <div className="pm-hero-right" style={{ flex: '0 0 45%', paddingLeft: 'clamp(0px, 8vw, 128px)' }}>
                <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 470 }}>
                  Text messages get read. A2V2 sends SMS reminders and updates to your patients automatically, so appointments get kept and protocols stay on track. All inside HIPAA-compliant infrastructure.
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

          <FadeIn delay={120} className="pm-hero-dash" style={{ marginTop: 64 }}>
            <HeroMessagingDashboard />
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: TEXT REMINDERS ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="pm-feat-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            <FadeIn className="pm-feat-col" style={{ flex: '0 0 38%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Reminders that actually get seen
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Email gets buried. A text does not. Send patients the reminders that keep them on schedule and on protocol, without your front desk making a single call.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <FeaturePoint Icon={MessageSquare} title="Text reminders" desc="Send appointment and protocol reminders by SMS." />
                <FeaturePoint Icon={Clock}         title="Timed to your protocols" desc="Reminders go out when they matter, not at random." />
                <FeaturePoint Icon={PhoneOff}      title="No manual calls" desc="Your front desk stops chasing patients by phone." />
              </div>
            </FadeIn>

            <FadeIn className="pm-feat-col" delay={120} style={{ flex: '0 0 58%' }}>
              <ScheduledRemindersDashboard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PATIENT LIFECYCLE (reversed) ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="pm-rev-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            <FadeIn className="pm-rev-dash pm-feat-col" style={{ flex: '0 0 55%' }}>
              <PatientTimelineDashboard />
            </FadeIn>

            <FadeIn className="pm-rev-text pm-feat-col" delay={120} style={{ flex: '0 0 41%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Every message, in context
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Messages are not separate from the patient record, they are part of it. Every text sent lives on the patient&apos;s timeline, so your team always knows what a patient has heard from you.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <FeaturePoint Icon={Users}   title="Tied to the patient record" desc="Every message lives on the patient's timeline." />
                <FeaturePoint Icon={Layers}  title="Part of your workflows"     desc="Messaging works alongside your automations." />
                <FeaturePoint Icon={Eye}     title="Full visibility"            desc="Your team sees what was sent and when." />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: TEAM CONTROL ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="pm-feat-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            <FadeIn className="pm-feat-col" style={{ flex: '0 0 38%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Automated, but never on autopilot
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Messaging handles the routine so your team does not have to, and anything that needs clinical judgment goes straight to a human.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <FeaturePoint Icon={Zap}        title="Routine handled automatically" desc="Reminders and nudges send without your team lifting a finger." />
                <FeaturePoint Icon={AlertCircle} title="Clinical questions escalate"  desc="Anything needing judgment routes to your team." />
                <FeaturePoint Icon={UserCheck}   title="You set the rules"            desc="Your clinic decides what sends and when." />
              </div>
            </FadeIn>

            <FadeIn className="pm-feat-col" delay={120} style={{ flex: '0 0 58%' }}>
              <EscalationDashboard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SECURITY ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <FadeIn>
            <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(24px, 3vw, 40px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
              Patient messaging, HIPAA-compliant
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 560, marginBottom: 48 }}>
              Every reminder, every message, every patient interaction is handled inside A2V2&apos;s HIPAA-compliant infrastructure.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="pm-pillars" style={{ display: 'flex', border: '1px solid rgba(0,0,0,0.08)' }}>
              {PILLARS.map(({ badge, title, desc }, i) => (
                <div
                  key={title}
                  className="pm-pillar"
                  style={{
                    flex: 1, padding: '32px 28px',
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

      {/* ── SECTION 6: CTA ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-28">
          <FadeIn>
            <div style={{ textAlign: 'center' }}>
              <h2
                className="font-normal leading-[1.05]"
                style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', color: '#0F0E0D', fontFamily: H, maxWidth: 700, margin: '0 auto' }}
              >
                Start reaching patients where they are
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 500, margin: '20px auto 36px' }}>
                Book a demo and we will show you patient messaging and everything else A2V2 can do for your clinic.
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
