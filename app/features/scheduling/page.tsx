'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  Home, Settings, MessageSquare,
  Calendar, Check, Layers,
  CalendarPlus, Video, Mail,
  Mic, FileText, Users,
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

const SIDEBAR_CALENDAR: SidebarItem[] = [
  { Icon: Home,     active: false },
  { Icon: Calendar, active: true  },
  { Icon: Mic,      active: false },
  { Icon: Settings, active: false },
]

const SIDEBAR_BOOKING: SidebarItem[] = [
  { Icon: Home,         active: false },
  { Icon: Calendar,     active: false },
  { Icon: CalendarPlus, active: true  },
  { Icon: Settings,     active: false },
]

const SIDEBAR_TRANSCRIPT: SidebarItem[] = [
  { Icon: Home,     active: false },
  { Icon: Calendar, active: false },
  { Icon: Mic,      active: true  },
  { Icon: Settings, active: false },
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
function HeroSchedulingDashboard() {
  const MEETINGS = [
    { name: 'Sarah Mitchell', initials: 'SM', bg: '#E8E6E3', fg: '#68655E', title: 'Initial Consultation', date: 'Wed, Jul 9 · 2:00 PM', status: 'Scheduled', statusBg: '#EFF6FF', statusFg: '#2563EB', statusBorder: '#BFDBFE' },
    { name: 'James Reyes',    initials: 'JR', bg: '#E0EFF9', fg: '#2563EB', title: 'Follow-up Review',     date: 'Thu, Jul 10 · 10:00 AM', status: 'Completed', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0' },
  ]
  return (
    <DashboardShell sidebar={SIDEBAR_CALENDAR} height={560}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Meetings</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <span style={{ fontSize: 9, background: '#F5F4F2', color: '#68655E', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
            This week
          </span>
          <span style={{ fontSize: 9, background: '#F5F4F2', color: '#68655E', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
            All meetings
          </span>
        </div>
      </div>

      {/* Meetings list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {MEETINGS.map((m) => (
          <div key={m.name} style={{
            background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: 10, padding: '12px 14px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: m.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 9, fontWeight: 600, color: m.fg, fontFamily: I }}>{m.initials}</span>
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{m.title}</div>
                  <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I, marginTop: 1 }}>{m.name}</div>
                </div>
              </div>
              <span style={{ fontSize: 9, background: m.statusBg, color: m.statusFg, border: `1px solid ${m.statusBorder}`, borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
                {m.status}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <Calendar size={10} color="#9A9590" />
                <span style={{ fontSize: 10, color: '#68655E', fontFamily: I }}>{m.date}</span>
              </div>
              {m.status === 'Scheduled' && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Video size={10} color="#2563EB" />
                  <span style={{ fontSize: 9, color: '#2563EB', fontFamily: I, fontWeight: 500 }}>meet.google.com/...</span>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Quick-book prompt */}
        <div style={{
          background: '#F5F4F2', border: '1px dashed rgba(0,0,0,0.12)',
          borderRadius: 10, padding: '10px 14px',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <CalendarPlus size={13} color="#9A9590" />
          <span style={{ fontSize: 11, color: '#9A9590', fontFamily: I }}>Let a patient book their own slot...</span>
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── CALENDAR SYNC DASHBOARD (Section 2) ── */
function CalendarSyncDashboard() {
  const SOURCES = [
    { name: 'Calendly',         sub: 'Availability sync',   color: '#006BFF', letter: 'C' },
    { name: 'Google Calendar',  sub: 'Invites and events',  color: '#EA4335', letter: 'G' },
  ]
  const SLOTS = [
    { day: 'Mon, Jul 7',  times: ['9:00 AM', '11:00 AM', '2:00 PM'] },
    { day: 'Tue, Jul 8',  times: ['10:00 AM', '3:30 PM'] },
    { day: 'Wed, Jul 9',  times: ['9:00 AM', '1:00 PM', '4:00 PM'] },
  ]
  return (
    <DashboardShell sidebar={SIDEBAR_CALENDAR} height={540}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Calendar & Availability</span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Connected sources */}
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 7 }}>
            Connected calendars
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {SOURCES.map(({ name, sub, color, letter }) => (
              <div key={name} style={{
                background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 9, padding: '9px 12px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: '#ffffff', fontFamily: I }}>{letter}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{name}</div>
                    <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I, marginTop: 1 }}>{sub}</div>
                  </div>
                </div>
                <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
                  Connected
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Open slots */}
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 7 }}>
            Available this week
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {SLOTS.map(({ day, times }) => (
              <div key={day} style={{
                background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 8, padding: '8px 12px',
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <span style={{ fontSize: 10, fontWeight: 600, color: '#0F0E0D', fontFamily: I, width: 68, flexShrink: 0 }}>{day}</span>
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {times.map((t) => (
                    <span key={t} style={{ fontSize: 9, background: '#EFF6FF', color: '#2563EB', borderRadius: 5, padding: '2px 7px', fontFamily: I, fontWeight: 500 }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── BOOKED MEETING DASHBOARD (Section 3) ── */
function BookedMeetingDashboard() {
  const STAGES = ['Scheduled', 'In Progress', 'Completed']
  return (
    <DashboardShell sidebar={SIDEBAR_BOOKING} height={540}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#E8E6E3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 9, fontWeight: 600, color: '#68655E', fontFamily: I }}>SM</span>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Initial Consultation</div>
            <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>Sarah Mitchell</div>
          </div>
        </div>
        <span style={{ fontSize: 9, background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
          Scheduled
        </span>
      </div>

      {/* Details */}
      <div style={{ padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
        {/* Date / time */}
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 5 }}>Date and time</div>
          <div style={{
            background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: 7, padding: '8px 12px',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <Calendar size={12} color="#68655E" />
            <span style={{ fontSize: 11, fontWeight: 500, color: '#0F0E0D', fontFamily: I }}>Thu, Jul 10, 2026 · 10:00 AM</span>
            <span style={{ fontSize: 9, color: '#9A9590', fontFamily: I, marginLeft: 'auto' }}>45 min</span>
          </div>
        </div>

        {/* Google Meet link */}
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 5 }}>Meeting link</div>
          <div style={{
            background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.08)',
            borderRadius: 7, padding: '8px 12px',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <Video size={12} color="#2563EB" />
            <span style={{ fontSize: 11, fontWeight: 500, color: '#2563EB', fontFamily: I }}>meet.google.com/rkx-bvyz-qpt</span>
          </div>
        </div>

        {/* Calendar invite */}
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 5 }}>Calendar invite</div>
          <div style={{
            background: '#F0FDF4', border: '1px solid #BBF7D0',
            borderRadius: 7, padding: '8px 12px',
            display: 'flex', alignItems: 'center', gap: 8,
          }}>
            <Mail size={12} color="#16A34A" />
            <span style={{ fontSize: 11, fontWeight: 500, color: '#16A34A', fontFamily: I }}>Invite sent to patient</span>
          </div>
        </div>

        {/* Stage pipeline */}
        <div style={{ marginTop: 'auto' }}>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.4px', textTransform: 'uppercase', marginBottom: 7 }}>Status</div>
          <div style={{ display: 'flex', gap: 4 }}>
            {STAGES.map((s) => (
              <div key={s} style={{
                flex: 1, padding: '5px 0', textAlign: 'center',
                fontSize: 9, fontFamily: I, fontWeight: 500, borderRadius: 4,
                background: s === 'Scheduled' ? '#0F0E0D' : 'rgba(0,0,0,0.05)',
                color: s === 'Scheduled' ? '#ffffff' : '#9A9590',
              }}>
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── TRANSCRIPT DASHBOARD (Section 4) ── */
function TranscriptDashboard() {
  const TRANSCRIPT = [
    { speaker: 'Provider', text: 'Thanks for coming in today, Sarah. How have you been feeling since we last spoke?' },
    { speaker: 'Sarah',    text: 'Better overall. The fatigue has improved quite a bit since we adjusted the protocol.' },
    { speaker: 'Provider', text: "That's great to hear. Let's look at your latest labs and go from there." },
  ]
  return (
    <DashboardShell sidebar={SIDEBAR_TRANSCRIPT} height={540}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: '#0F0E0D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Mic size={12} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Initial Consultation</div>
            <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>Jul 9, 2026 · Sarah Mitchell</div>
          </div>
        </div>
        <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
          Completed
        </span>
      </div>

      {/* Sub-header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '8px 16px', borderBottom: '1px solid rgba(0,0,0,0.05)', flexShrink: 0,
      }}>
        <span style={{ fontSize: 9, background: '#F5F4F2', color: '#68655E', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 5, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
          AI Notetaker
        </span>
        <span style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>Transcript ready</span>
      </div>

      {/* Transcript */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {TRANSCRIPT.map((line, i) => (
          <div key={i} style={{
            background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: 8, padding: '9px 12px',
          }}>
            <div style={{ fontSize: 9, fontWeight: 700, color: line.speaker === 'Provider' ? '#0F0E0D' : '#2563EB', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 4 }}>
              {line.speaker}
            </div>
            <div style={{ fontSize: 11, color: '#0F0E0D', fontFamily: I, lineHeight: 1.55 }}>
              {line.text}
            </div>
          </div>
        ))}

        {/* Fade indicator */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '6px 0',
        }}>
          <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.06)' }} />
          <span style={{ fontSize: 9, color: '#C4C0BB', fontFamily: I }}>Transcript continues</span>
          <div style={{ flex: 1, height: 1, background: 'rgba(0,0,0,0.06)' }} />
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── MAIN PAGE ── */
export default function SchedulingPage() {
  return (
    <main style={{ background: '#ffffff', fontFamily: H }}>
      <style>{`
        @media (max-width: 880px) {
          .sc-hero-row   { flex-direction: column !important; gap: 28px !important; }
          .sc-hero-right { padding-left: 0 !important; }
          .sc-hero-dash  { display: none !important; }
          .sc-feat-row   { flex-direction: column !important; gap: 40px !important; }
          .sc-feat-col   { flex: 0 0 auto !important; width: 100% !important; }
          .sc-rev-row    { flex-direction: column !important; gap: 40px !important; }
          .sc-rev-text   { order: 1 !important; }
          .sc-rev-dash   { order: 2 !important; }
          .sc-pillars    { flex-direction: column !important; }
          .sc-pillar     { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.08) !important; }
          .sc-pillar:last-child { border-bottom: none !important; }
        }
      `}</style>

      <TestHomepage2Navbar />

      {/* ── SECTION 1: HERO ── */}
      <section style={{ background: '#ffffff', paddingTop: 128, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div className="sc-hero-row" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div style={{ flex: '0 0 55%' }}>
                <h1
                  className="font-normal leading-[1.05]"
                  style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#0F0E0D', fontFamily: H, maxWidth: 640 }}
                >
                  Scheduling and meetings, handled
                </h1>
              </div>
              <div className="sc-hero-right" style={{ flex: '0 0 45%', paddingLeft: 'clamp(0px, 8vw, 128px)' }}>
                <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 470 }}>
                  Sync your calendar, let patients book directly, and let AI capture what happened. From the first booking to the meeting notes, it all lives inside HIPAA-compliant infrastructure.
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

          <FadeIn delay={120} className="sc-hero-dash" style={{ marginTop: 64 }}>
            <HeroSchedulingDashboard />
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: CALENDAR SYNC ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="sc-feat-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            <FadeIn className="sc-feat-col" style={{ flex: '0 0 38%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Your calendar, always in sync
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Connect Calendly and Google Calendar so your availability stays accurate across every agent, and nobody ever books a slot you do not have.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: Calendar, title: 'Calendar sync',       desc: 'Connect Calendly and Google Calendar.' },
                  { Icon: Check,    title: 'Accurate availability', desc: 'Your open times stay up to date automatically.' },
                  { Icon: Layers,   title: 'Across every agent',  desc: 'Availability applies consistently to your agents.' },
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

            <FadeIn className="sc-feat-col" delay={120} style={{ flex: '0 0 58%' }}>
              <CalendarSyncDashboard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: BOOK MEETINGS (reversed) ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="sc-rev-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            <FadeIn className="sc-rev-dash sc-feat-col" style={{ flex: '0 0 55%' }}>
              <BookedMeetingDashboard />
            </FadeIn>

            <FadeIn className="sc-rev-text sc-feat-col" delay={120} style={{ flex: '0 0 41%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Booking that just works
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Patients pick a time and A2V2 handles the rest, generating a Google Meet link and sending the calendar invite automatically.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: CalendarPlus, title: 'Direct booking',    desc: 'Patients schedule an open slot themselves.' },
                  { Icon: Video,        title: 'Google Meet link',  desc: 'Every booking creates a meeting link.' },
                  { Icon: Mail,         title: 'Automatic invites', desc: 'A calendar invite goes out on booking.' },
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

      {/* ── SECTION 4: AI NOTETAKER ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="sc-feat-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            <FadeIn className="sc-feat-col" style={{ flex: '0 0 38%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Let AI take the notes
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                An AI notetaker joins your booked meetings, records them, and produces a transcript, so nothing important gets lost and your team can stay present in the conversation.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: Mic,      title: 'Records your meetings',   desc: 'The AI notetaker captures booked meetings.' },
                  { Icon: FileText, title: 'Automatic transcripts',   desc: 'Get a written record of what was said.' },
                  { Icon: Users,    title: 'Stay present',            desc: 'Focus on the patient, not on note-taking.' },
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

            <FadeIn className="sc-feat-col" delay={120} style={{ flex: '0 0 58%' }}>
              <TranscriptDashboard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SECURITY ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <FadeIn>
            <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(24px, 3vw, 40px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
              Every meeting, HIPAA-compliant
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 560, marginBottom: 48 }}>
              Every booking, every recording, every transcript is handled inside A2V2&apos;s HIPAA-compliant infrastructure.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="sc-pillars" style={{ display: 'flex', border: '1px solid rgba(0,0,0,0.08)' }}>
              {PILLARS.map(({ badge, title, desc }, i) => (
                <div
                  key={title}
                  className="sc-pillar"
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
                See scheduling in action
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 500, margin: '20px auto 36px' }}>
                Book a demo and we will show you scheduling and everything else A2V2 can do for your clinic.
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
