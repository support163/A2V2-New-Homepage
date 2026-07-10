'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  Home, Settings, MessageSquare,
  Bot, History, Database, Search, FolderCheck,
  SlidersHorizontal, Eye, CheckCircle,
  AlertCircle, UserCheck, Sparkles,
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
  { badge: 'HIPAA',   title: 'HIPAA Compliant',     desc: 'Built for healthcare from day one. BAA provided on every plan, with full audit trails.' },
  { badge: 'AES-256', title: 'AES-256 Encryption',  desc: 'All data encrypted at rest and in transit using industry-standard AES-256 and TLS 1.3.' },
  { badge: 'BAA',     title: 'Secured LLM Access',  desc: 'AI runs under a Business Associate Agreement. Your data is never used to train models.' },
  { badge: 'U.S.',    title: 'U.S. Data Centers',   desc: 'All patient data is stored in U.S.-based data centers with complete access controls.' },
]

type SidebarItem = { Icon: LucideIcon; active: boolean }

const SIDEBAR_AGENT: SidebarItem[] = [
  { Icon: Home,          active: false },
  { Icon: Bot,           active: true  },
  { Icon: MessageSquare, active: false },
  { Icon: Settings,      active: false },
]

const SIDEBAR_KB: SidebarItem[] = [
  { Icon: Home,          active: false },
  { Icon: Bot,           active: false },
  { Icon: Database,      active: true  },
  { Icon: Settings,      active: false },
]

const SIDEBAR_PLAY: SidebarItem[] = [
  { Icon: Home,              active: false },
  { Icon: Bot,               active: false },
  { Icon: SlidersHorizontal, active: true  },
  { Icon: Settings,          active: false },
]

const SIDEBAR_CHAT: SidebarItem[] = [
  { Icon: Home,          active: false },
  { Icon: Bot,           active: false },
  { Icon: MessageSquare, active: true  },
  { Icon: Settings,      active: false },
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
      <div className="flex" style={{ position: 'absolute', top: 109, left: 149, right: -20, bottom: 0 }}>
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

/* ── HERO AGENT CHAT DASHBOARD ── */
function HeroAgentDashboard() {
  const MESSAGES = [
    { role: 'patient', text: 'What should I expect at my first visit?' },
    { role: 'agent',   text: 'At your first visit, we\'ll review your health history, discuss your goals, and run baseline labs. The appointment is typically 45 minutes. You can bring any previous lab results to share with the provider.' },
    { role: 'patient', text: 'Do I need to fast beforehand?' },
    { role: 'agent',   text: 'Yes, we ask patients to fast for at least 10 hours before the appointment for accurate baseline bloodwork.' },
  ]
  return (
    <DashboardShell sidebar={SIDEBAR_AGENT} height={660}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: '#0F0E0D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Bot size={13} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Intake Agent</div>
            <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>Claude Sonnet 4.6</div>
          </div>
        </div>
        <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
          Active
        </span>
      </div>

      {/* Chat */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {MESSAGES.map((m, i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: m.role === 'patient' ? 'flex-end' : 'flex-start',
          }}>
            <div style={{
              maxWidth: '78%',
              fontSize: 11, fontFamily: I, lineHeight: 1.55,
              padding: '7px 11px', borderRadius: m.role === 'patient' ? '10px 10px 2px 10px' : '10px 10px 10px 2px',
              background: m.role === 'patient' ? '#0F0E0D' : '#FFFFFF',
              color: m.role === 'patient' ? '#ffffff' : '#0F0E0D',
              border: m.role === 'agent' ? '1px solid rgba(0,0,0,0.07)' : 'none',
            }}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input bar */}
      <div style={{
        padding: '10px 16px', borderTop: '1px solid rgba(0,0,0,0.06)',
        display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0,
      }}>
        <div style={{
          flex: 1, background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: 8, padding: '7px 10px',
          fontSize: 11, color: '#9A9590', fontFamily: I,
        }}>
          Ask a question...
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── AGENT CONFIG DASHBOARD (Section 2) ── */
function AgentConfigDashboard() {
  const VERSIONS = ['v4 — current', 'v3', 'v2']
  return (
    <DashboardShell sidebar={SIDEBAR_AGENT} height={540}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: '#0F0E0D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Bot size={13} color="#ffffff" />
          </div>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Intake Agent</span>
        </div>
        <span style={{ fontSize: 9, background: '#F5F4F2', color: '#68655E', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
          Draft
        </span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {/* Model */}
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 6 }}>
            AI Model
          </div>
          <div style={{
            background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: 8, padding: '8px 12px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Sparkles size={12} color="#2563EB" />
              <span style={{ fontSize: 11, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Claude Sonnet 4.6</span>
            </div>
            <span style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>Anthropic</span>
          </div>
        </div>

        {/* Instructions */}
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 6 }}>
            Instructions
          </div>
          <div style={{
            background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.1)',
            borderRadius: 8, padding: '10px 12px',
            fontSize: 11, color: '#0F0E0D', fontFamily: I, lineHeight: 1.6,
            minHeight: 72,
          }}>
            You are the intake agent for Apex Health. You help new patients understand what to expect, answer questions about the first visit and protocols, and guide them through the intake process. Always be warm and professional. If a patient asks about dosing, lab results, or medical decisions, let them know you will connect them with the care team.
          </div>
        </div>

        {/* Version history */}
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 6 }}>
            Version History
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {VERSIONS.map((v, i) => (
              <div key={v} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                background: i === 0 ? '#F5F4F2' : '#FFFFFF',
                border: '1px solid rgba(0,0,0,0.07)', borderRadius: 7,
                padding: '6px 10px',
              }}>
                <History size={11} color={i === 0 ? '#0F0E0D' : '#9A9590'} />
                <span style={{ fontSize: 10, fontWeight: i === 0 ? 600 : 500, color: i === 0 ? '#0F0E0D' : '#68655E', fontFamily: I }}>{v}</span>
                {i === 0 && <span style={{ marginLeft: 'auto', fontSize: 9, background: '#EFF6FF', color: '#2563EB', borderRadius: 999, padding: '1px 7px', fontFamily: I, fontWeight: 500 }}>Active</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── KNOWLEDGE BASE DASHBOARD (Section 3) ── */
function KnowledgeBaseDashboard() {
  const SOURCES = [
    { type: 'Text',    label: 'New patient FAQ',           status: 'Completed' },
    { type: 'Files',   label: 'Protocol documentation.pdf', status: 'Completed' },
    { type: 'YouTube', label: 'Clinic intro video',         status: 'Completed' },
    { type: 'Q&A',     label: 'Common patient questions',   status: 'Completed' },
    { type: 'Links',   label: 'apex-health.com/services',  status: 'Completed' },
  ]
  return (
    <DashboardShell sidebar={SIDEBAR_KB} height={540}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Knowledge Base</span>
        <span style={{ fontSize: 9, background: '#F5F4F2', color: '#68655E', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
          {SOURCES.length} sources
        </span>
      </div>

      {/* Search bar */}
      <div style={{ padding: '12px 16px 8px', flexShrink: 0 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 7,
          background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: 8, padding: '7px 10px',
        }}>
          <Search size={11} color="#9A9590" />
          <span style={{ fontSize: 11, color: '#C4C0BB', fontFamily: I }}>Search sources...</span>
        </div>
      </div>

      {/* Source list */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '4px 16px 14px', display: 'flex', flexDirection: 'column', gap: 7 }}>
        {SOURCES.map(({ type, label, status }) => (
          <div key={label} style={{
            background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: 8, padding: '9px 12px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, minWidth: 0 }}>
              <span style={{
                fontSize: 8, fontWeight: 600, color: '#68655E', fontFamily: I,
                background: '#F5F4F2', borderRadius: 4, padding: '2px 6px',
                flexShrink: 0, letterSpacing: '0.2px',
              }}>
                {type}
              </span>
              <span style={{ fontSize: 11, color: '#0F0E0D', fontFamily: I, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {label}
              </span>
            </div>
            <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500, flexShrink: 0 }}>
              {status}
            </span>
          </div>
        ))}
      </div>
    </DashboardShell>
  )
}

/* ── PLAYGROUND DASHBOARD (Section 4) ── */
function PlaygroundDashboard() {
  const MESSAGES = [
    { role: 'patient', text: 'What are the hours for new patient appointments?' },
    { role: 'agent',   text: 'New patient appointments are available Tuesday through Saturday, 8am to 5pm. You can book directly through our intake link or I can send you the link now.' },
  ]
  return (
    <DashboardShell sidebar={SIDEBAR_PLAY} height={540}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Playground</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Sparkles size={11} color="#2563EB" />
          <span style={{ fontSize: 10, fontWeight: 500, color: '#2563EB', fontFamily: I }}>Claude Sonnet 4.6</span>
        </div>
      </div>

      {/* Config strip */}
      <div style={{
        display: 'flex', gap: 8, padding: '8px 16px',
        borderBottom: '1px solid rgba(0,0,0,0.05)', flexShrink: 0,
      }}>
        {['Intake Agent', 'v4 — current', 'Knowledge Base: on'].map((label) => (
          <span key={label} style={{
            fontSize: 9, fontWeight: 500, color: '#68655E', fontFamily: I,
            background: '#F5F4F2', borderRadius: 6, padding: '3px 8px',
            border: '1px solid rgba(0,0,0,0.07)',
          }}>
            {label}
          </span>
        ))}
      </div>

      {/* Chat preview */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {MESSAGES.map((m, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: m.role === 'patient' ? 'flex-end' : 'flex-start' }}>
            <div style={{
              maxWidth: '78%',
              fontSize: 11, fontFamily: I, lineHeight: 1.55,
              padding: '7px 11px', borderRadius: m.role === 'patient' ? '10px 10px 2px 10px' : '10px 10px 10px 2px',
              background: m.role === 'patient' ? '#0F0E0D' : '#FFFFFF',
              color: m.role === 'patient' ? '#ffffff' : '#0F0E0D',
              border: m.role === 'agent' ? '1px solid rgba(0,0,0,0.07)' : 'none',
            }}>
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div style={{
        padding: '10px 16px', borderTop: '1px solid rgba(0,0,0,0.06)',
        display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0,
      }}>
        <div style={{
          flex: 1, background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: 8, padding: '7px 10px',
          fontSize: 11, color: '#9A9590', fontFamily: I,
        }}>
          Test a patient question...
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── ESCALATION CHAT DASHBOARD (Section 5) ── */
function EscalationDashboard() {
  return (
    <DashboardShell sidebar={SIDEBAR_CHAT} height={540}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: 7, background: '#0F0E0D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Bot size={13} color="#ffffff" />
          </div>
          <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Intake Agent</span>
        </div>
        <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
          Active
        </span>
      </div>

      {/* Chat */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* Routine exchange */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ maxWidth: '78%', fontSize: 11, fontFamily: I, lineHeight: 1.55, padding: '7px 11px', borderRadius: '10px 10px 2px 10px', background: '#0F0E0D', color: '#ffffff' }}>
            What supplements should I stop before my appointment?
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ maxWidth: '78%', fontSize: 11, fontFamily: I, lineHeight: 1.55, padding: '7px 11px', borderRadius: '10px 10px 10px 2px', background: '#FFFFFF', color: '#0F0E0D', border: '1px solid rgba(0,0,0,0.07)' }}>
            Generally, we ask patients to pause biotin, fish oil, and any hormone-related supplements 48 hours before labs. Our intake form will have a full list specific to your protocol.
          </div>
        </div>

        {/* Clinical escalation */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ maxWidth: '78%', fontSize: 11, fontFamily: I, lineHeight: 1.55, padding: '7px 11px', borderRadius: '10px 10px 2px 10px', background: '#0F0E0D', color: '#ffffff' }}>
            My testosterone was 180 last time. Should I start TRT before my visit?
          </div>
        </div>

        {/* Escalation notice */}
        <div style={{
          background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: 10,
          padding: '9px 12px', display: 'flex', alignItems: 'flex-start', gap: 8,
        }}>
          <AlertCircle size={12} color="#D97706" style={{ flexShrink: 0, marginTop: 1 }} />
          <div>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#92400E', fontFamily: I, marginBottom: 3 }}>
              Escalated to care team
            </div>
            <div style={{ fontSize: 10, color: '#92400E', fontFamily: I, lineHeight: 1.5 }}>
              Starting treatment is a clinical decision your provider needs to make after reviewing your labs. I have flagged this for your care team and they will follow up before your visit.
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div style={{
        padding: '10px 16px', borderTop: '1px solid rgba(0,0,0,0.06)',
        display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0,
      }}>
        <div style={{
          flex: 1, background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.1)',
          borderRadius: 8, padding: '7px 10px',
          fontSize: 11, color: '#9A9590', fontFamily: I,
        }}>
          Ask a question...
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── MAIN PAGE ── */
export default function AiAgentsPage() {
  return (
    <main style={{ background: '#ffffff', fontFamily: H }}>
      <style>{`
        @media (max-width: 880px) {
          .aa-hero-row   { flex-direction: column !important; gap: 28px !important; }
          .aa-hero-right { padding-left: 0 !important; }
          .aa-hero-dash  { display: none !important; }
          .aa-feat-row   { flex-direction: column !important; gap: 40px !important; }
          .aa-feat-col   { flex: 0 0 auto !important; width: 100% !important; }
          .aa-rev-row    { flex-direction: column !important; gap: 40px !important; }
          .aa-rev-text   { order: 1 !important; }
          .aa-rev-dash   { order: 2 !important; }
          .aa-pillars    { flex-direction: column !important; }
          .aa-pillar     { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.08) !important; }
          .aa-pillar:last-child { border-bottom: none !important; }
        }
      `}</style>

      <TestHomepage2Navbar />

      {/* ── SECTION 1: HERO ── */}
      <section style={{ background: '#ffffff', paddingTop: 128, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div className="aa-hero-row" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div style={{ flex: '0 0 55%' }}>
                <h1
                  className="font-normal leading-[1.05]"
                  style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#0F0E0D', fontFamily: H, maxWidth: 640 }}
                >
                  AI agents, tuned to your clinic
                </h1>
              </div>
              <div className="aa-hero-right" style={{ flex: '0 0 45%', paddingLeft: 'clamp(0px, 8vw, 128px)' }}>
                <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 470 }}>
                  Build AI agents that speak in your clinic&apos;s voice, powered by leading models and grounded in your own knowledge. They answer patient questions and escalate anything clinical to your team. All inside HIPAA-compliant infrastructure.
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

          <FadeIn delay={120} className="aa-hero-dash" style={{ marginTop: 64 }}>
            <HeroAgentDashboard />
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: CUSTOM AGENTS ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="aa-feat-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            <FadeIn className="aa-feat-col" style={{ flex: '0 0 38%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Agents built around your practice
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Give each agent its own instructions, behavior, and knowledge so it responds the way your clinic would.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: Bot,     title: 'Custom instructions', desc: 'Define exactly how your agent should behave and respond.' },
                  { Icon: Sparkles, title: 'Multiple AI models',  desc: 'Choose from leading models like GPT and Claude for each agent.' },
                  { Icon: History, title: 'Version history',     desc: 'Every instruction change is tracked and reversible.' },
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

            <FadeIn className="aa-feat-col" delay={120} style={{ flex: '0 0 58%' }}>
              <AgentConfigDashboard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: KNOWLEDGE BASE (reversed) ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="aa-rev-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            <FadeIn className="aa-rev-dash aa-feat-col" style={{ flex: '0 0 55%' }}>
              <KnowledgeBaseDashboard />
            </FadeIn>

            <FadeIn className="aa-rev-text aa-feat-col" delay={120} style={{ flex: '0 0 41%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Grounded in your knowledge
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Feed your agent your clinic&apos;s content so every answer reflects your protocols and philosophy, not generic internet information.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: Database,    title: 'Multi-source knowledge', desc: 'Add text, files, YouTube, Q&A, and links.' },
                  { Icon: Search,      title: 'Accurate retrieval',     desc: 'Agents pull answers from your content.' },
                  { Icon: FolderCheck, title: 'Organized and searchable', desc: 'Manage sources with status and filters.' },
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

      {/* ── SECTION 4: PLAYGROUND ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="aa-feat-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            <FadeIn className="aa-feat-col" style={{ flex: '0 0 38%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Test before you go live
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Use the playground to try different models and configurations side by side, preview how your agent responds, and refine it with confidence before any patient sees it.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: SlidersHorizontal, title: 'Compare configurations', desc: 'Test models and settings side by side.' },
                  { Icon: Eye,               title: 'Preview responses',      desc: 'See exactly how your agent will answer.' },
                  { Icon: CheckCircle,       title: 'Refine with confidence', desc: 'Iterate safely, with version history behind you.' },
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

            <FadeIn className="aa-feat-col" delay={120} style={{ flex: '0 0 58%' }}>
              <PlaygroundDashboard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: PATIENT-FACING, TEAM-CONTROLLED (reversed) ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="aa-rev-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            <FadeIn className="aa-rev-dash aa-feat-col" style={{ flex: '0 0 55%' }}>
              <EscalationDashboard />
            </FadeIn>

            <FadeIn className="aa-rev-text aa-feat-col" delay={120} style={{ flex: '0 0 41%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Helpful to patients, accountable to your team
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Your agent handles routine patient questions in your voice, and the moment something needs clinical judgment, it escalates to your team. The AI never makes the medical call.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: MessageSquare, title: 'Answers in your clinic\'s voice', desc: 'Designed to respond the way your clinic would, using your own content.' },
                  { Icon: AlertCircle,   title: 'Escalates anything clinical',     desc: 'Medical decisions, dosing questions, and lab results go to your team.' },
                  { Icon: UserCheck,     title: 'Your team stays in control',      desc: 'The agent never makes clinical calls. That always stays with your providers.' },
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

      {/* ── SECTION 6: SECURITY ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <FadeIn>
            <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(24px, 3vw, 40px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
              Every conversation, HIPAA-compliant
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 560, marginBottom: 48 }}>
              Every agent interaction, every piece of patient data, handled inside A2V2&apos;s HIPAA-compliant infrastructure.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="aa-pillars" style={{ display: 'flex', border: '1px solid rgba(0,0,0,0.08)' }}>
              {PILLARS.map(({ badge, title, desc }, i) => (
                <div
                  key={title}
                  className="aa-pillar"
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
                Build your clinic&apos;s AI agent
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 500, margin: '20px auto 36px' }}>
                Book a demo and we will show you AI agents and everything else A2V2 can do for your clinic.
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
