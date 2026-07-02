'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  Bot, Sparkles, SlidersHorizontal,
  Database, FileText, Search,
  Users, Activity,
  ClipboardList, FileUp, Lock,
  Calendar, Video,
  Home, Settings,
} from 'lucide-react'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import TestHomepage2HeroDashboard from '@/components/TestHomepage2HeroDashboard'
import { DEMO_BOOKING_URL, SIGN_IN_URL } from '@/lib/constants'

const H = "'Helvetica Neue', Helvetica, Arial, sans-serif"
const I = "'Inter', sans-serif"

// ── FadeIn ───────────────────────────────────────────────────────────────────

function FadeIn({
  children,
  delay = 0,
  className = '',
  style = {},
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(22px)'
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect() }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return <div ref={ref} className={className} style={style}>{children}</div>
}

// ── Shared helpers ────────────────────────────────────────────────────────────

const NAV_ICONS = [Home, Users, Bot, FileText, Settings]

function Sidebar({ active = 0 }: { active?: number }) {
  return (
    <div style={{
      width: 50,
      background: '#FAFAFA',
      borderRight: '1px solid #F0F0F0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '14px 0',
      gap: 5,
      flexShrink: 0,
    }}>
      <Image src="/favicon.svg" alt="" width={18} height={18} style={{ marginBottom: 8, borderRadius: 4 }} />
      {NAV_ICONS.map((Icon, i) => (
        <div key={i} style={{
          width: 32,
          height: 32,
          borderRadius: 7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: i === active ? '#0F0E0D' : 'transparent',
        }}>
          <Icon size={14} color={i === active ? '#fff' : '#C4C4C4'} />
        </div>
      ))}
    </div>
  )
}

function DashCard({ children, height = 400 }: { children: React.ReactNode; height?: number }) {
  return (
    <div style={{ position: 'relative', width: '100%', overflow: 'hidden', borderRadius: 0, height }}>
      <Image src="/images/Background-website-3.png" alt="" fill style={{ objectFit: 'cover' }} quality={100} unoptimized />
      <div style={{
        position: 'absolute',
        left: 94,
        top: 102,
        right: -280,
        bottom: 0,
        background: '#FFFFFF',
        borderRadius: '10px 10px 0 0',
        display: 'flex',
        overflow: 'hidden',
        boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
      }}>
        {children}
      </div>
    </div>
  )
}

function TopBar({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div style={{ borderBottom: '1px solid #F0F0F0', padding: '9px 16px', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
      <Icon size={13} color="#0F0E0D" />
      <span style={{ fontSize: 11, fontWeight: 600, fontFamily: I, color: '#0F0E0D' }}>{label}</span>
    </div>
  )
}

type PointItem = { icon: React.ElementType; title: string; desc: string }

function Points({ items }: { items: PointItem[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 28 }}>
      {items.map(({ icon: Icon, title, desc }) => (
        <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <div style={{ width: 34, height: 34, borderRadius: 9, background: '#F5F5F5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon size={15} color="#0F0E0D" />
          </div>
          <div>
            <div style={{ fontFamily: I, fontWeight: 600, fontSize: 13, color: '#0F0E0D' }}>{title}</div>
            <div style={{ fontFamily: I, fontWeight: 500, fontSize: 12, color: '#68655E', marginTop: 2, letterSpacing: '-0.2px', lineHeight: 1.5 }}>{desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <>
      <h2 style={{ fontFamily: H, fontWeight: 400, fontSize: 'clamp(28px, 3.5vw, 48px)', lineHeight: 1.05, color: '#0F0E0D', margin: '0 0 16px' }}>
        {title}
      </h2>
      <p style={{ fontFamily: I, fontWeight: 500, fontSize: 15, color: '#68655E', letterSpacing: '-0.3px', lineHeight: 1.65, margin: 0, maxWidth: 400 }}>
        {subtitle}
      </p>
    </>
  )
}

function Buttons() {
  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
      <a
        href={DEMO_BOOKING_URL}
        style={{ display: 'inline-flex', alignItems: 'center', background: '#0F0E0D', color: '#fff', fontFamily: I, fontWeight: 500, fontSize: 14, padding: '10px 24px', borderRadius: 999, textDecoration: 'none', transition: 'opacity 150ms' }}
        onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
        onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
      >
        Book a Demo
      </a>
      <a
        href={SIGN_IN_URL}
        style={{ display: 'inline-flex', alignItems: 'center', color: '#0F0E0D', fontFamily: I, fontWeight: 500, fontSize: 14, padding: '10px 24px', borderRadius: 999, textDecoration: 'none', border: '1px solid rgba(0,0,0,0.18)', background: 'transparent', transition: 'background 150ms' }}
        onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.04)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
      >
        Get Started
      </a>
    </div>
  )
}

// ── Dashboard mockups ─────────────────────────────────────────────────────────

function AgentsDashboard() {
  return (
    <DashCard height={520}>
      <Sidebar active={2} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <TopBar icon={Bot} label="Agent Configuration" />
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
          {/* Config panel */}
          <div style={{ width: 230, borderRight: '1px solid #F0F0F0', padding: 14, display: 'flex', flexDirection: 'column', gap: 14, overflow: 'hidden' }}>
            <div>
              <div style={{ fontSize: 9, fontWeight: 700, fontFamily: I, color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 5 }}>Model</div>
              <div style={{ background: '#F5F5F5', borderRadius: 7, padding: '6px 10px', fontSize: 11, fontFamily: I, fontWeight: 500, color: '#0F0E0D', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                Claude Sonnet 4.6
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 9, fontWeight: 700, fontFamily: I, color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 5 }}>Temperature</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, height: 4, background: '#EBEBEB', borderRadius: 2, position: 'relative' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '35%', background: '#0F0E0D', borderRadius: 2 }} />
                  <div style={{ position: 'absolute', left: '35%', top: '50%', transform: 'translate(-50%,-50%)', width: 10, height: 10, borderRadius: '50%', background: '#0F0E0D', border: '2px solid #fff', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
                </div>
                <span style={{ fontSize: 11, fontFamily: I, color: '#0F0E0D', fontWeight: 600, minWidth: 24 }}>0.35</span>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 9, fontWeight: 700, fontFamily: I, color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 5 }}>Instructions</div>
              <div style={{ background: '#F9F9F9', border: '1px solid #EBEBEB', borderRadius: 7, padding: '8px 10px', fontSize: 10, fontFamily: I, color: '#68655E', lineHeight: 1.55, minHeight: 68 }}>
                You are a health coach for Vitality Clinic. Speak warmly, use first name, stay within your knowledge base, and always recommend booking a consult for medical questions.
              </div>
            </div>
            <div>
              <div style={{ fontSize: 9, fontWeight: 700, fontFamily: I, color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 5 }}>Knowledge</div>
              {['Protocol Guide 2026', 'Patient FAQ.pdf'].map((s) => (
                <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#F5F5F5', borderRadius: 6, padding: '5px 8px', marginBottom: 4 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', flexShrink: 0 }} />
                  <span style={{ fontSize: 10, fontFamily: I, color: '#0F0E0D', fontWeight: 500 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Live preview */}
          <div style={{ flex: 1, background: '#FAFAFA', padding: 14, display: 'flex', flexDirection: 'column', overflow: 'hidden', marginRight: 280 }}>
            <div style={{ fontSize: 9, fontWeight: 700, fontFamily: I, color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 10 }}>Live preview</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{ background: '#0F0E0D', color: '#fff', borderRadius: '12px 12px 2px 12px', padding: '7px 11px', fontSize: 11, fontFamily: I, maxWidth: '85%', lineHeight: 1.5 }}>
                  Hi — I want to learn about your weight management program.
                </div>
              </div>
              <div style={{ display: 'flex' }}>
                <div style={{ background: '#FFFFFF', border: '1px solid #EBEBEB', color: '#0F0E0D', borderRadius: '12px 12px 12px 2px', padding: '7px 11px', fontSize: 11, fontFamily: I, maxWidth: '90%', lineHeight: 1.5 }}>
                  Hi! I'd love to share more. Our program focuses on sustainable results through personalized nutrition coaching. Would you like to book a free consult with our team?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashCard>
  )
}

function KnowledgeDashboard() {
  const sources = [
    { name: 'Protocol Guide 2026',    type: 'File',    done: true },
    { name: 'FAQ — Longevity Program', type: 'Text',    done: true },
    { name: 'Clinic Introduction',    type: 'YouTube', done: true },
    { name: 'Patient Q&A Library',    type: 'Q&A',     done: true },
    { name: 'Supplement Resources',   type: 'Links',   done: true },
  ]
  return (
    <DashCard height={500}>
      <Sidebar active={3} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ borderBottom: '1px solid #F0F0F0', padding: '9px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <Database size={13} color="#0F0E0D" />
            <span style={{ fontSize: 11, fontWeight: 600, fontFamily: I, color: '#0F0E0D' }}>Knowledge Base</span>
          </div>
          <div style={{ background: '#F5F5F5', borderRadius: 6, padding: '4px 10px', fontSize: 10, fontFamily: I, color: '#9CA3AF' }}>Search sources…</div>
        </div>
        <div style={{ flex: 1, padding: '12px 16px', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 64px 80px', gap: '0 12px', paddingBottom: 6, marginBottom: 4, borderBottom: '1px solid #F5F5F5' }}>
            {['Source', 'Type', 'Status'].map(h => (
              <span key={h} style={{ fontSize: 9, fontWeight: 700, fontFamily: I, color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.6px' }}>{h}</span>
            ))}
          </div>
          {sources.map(s => (
            <div key={s.name} style={{ display: 'grid', gridTemplateColumns: '1fr 64px 80px', gap: '0 12px', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #F9F9F9' }}>
              <span style={{ fontSize: 11, fontFamily: I, color: '#0F0E0D', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.name}</span>
              <span style={{ fontSize: 9, fontFamily: I, color: '#68655E', background: '#F5F5F5', borderRadius: 4, padding: '2px 7px', fontWeight: 600, textAlign: 'center' }}>{s.type}</span>
              <span style={{ fontSize: 9, fontFamily: I, color: '#16A34A', background: '#F0FDF4', borderRadius: 4, padding: '2px 7px', fontWeight: 600, textAlign: 'center' }}>Completed</span>
            </div>
          ))}
        </div>
      </div>
    </DashCard>
  )
}

function CRMDashboard() {
  return (
    <DashCard height={520}>
      <Sidebar active={1} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <TopBar icon={Users} label="Contact — Sarah Mitchell" />
        <div style={{ flex: 1, padding: '14px 16px', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{ width: 38, height: 38, borderRadius: '50%', background: '#0F0E0D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ color: '#fff', fontSize: 13, fontFamily: I, fontWeight: 600 }}>SM</span>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, fontFamily: I, color: '#0F0E0D' }}>Sarah Mitchell</div>
              <div style={{ display: 'flex', gap: 5, marginTop: 4 }}>
                <span style={{ fontSize: 9, fontFamily: I, background: '#0F0E0D', color: '#fff', borderRadius: 4, padding: '2px 7px', fontWeight: 600 }}>Customer</span>
                <span style={{ fontSize: 9, fontFamily: I, background: '#F0FDF4', color: '#16A34A', borderRadius: 4, padding: '2px 7px', fontWeight: 600 }}>Active</span>
              </div>
            </div>
          </div>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: 2, borderBottom: '1px solid #F0F0F0', marginBottom: 14 }}>
            {['General', 'Health', 'Notes', 'Prescriptions'].map((t, i) => (
              <div key={t} style={{ padding: '5px 10px', fontSize: 11, fontFamily: I, fontWeight: 500, color: i === 1 ? '#0F0E0D' : '#9CA3AF', borderBottom: i === 1 ? '2px solid #0F0E0D' : '2px solid transparent', cursor: 'pointer', marginBottom: -1 }}>
                {t}
              </div>
            ))}
          </div>
          {/* Health params */}
          <div style={{ fontSize: 10, fontWeight: 700, fontFamily: I, color: '#0F0E0D', marginBottom: 10, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Health Parameters</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            {[
              { label: 'Body Weight',    value: '225 lb',   trend: '↓ 15 lb since intake', color: '#16A34A' },
              { label: 'Blood Pressure', value: '118/76',   trend: 'Normal range',          color: '#16A34A' },
              { label: 'Resting HR',     value: '64 bpm',   trend: '↓ 4 bpm this month',   color: '#16A34A' },
            ].map(p => (
              <div key={p.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 10px', background: '#FAFAFA', borderRadius: 8, border: '1px solid #F0F0F0' }}>
                <span style={{ fontSize: 11, fontFamily: I, color: '#68655E', fontWeight: 500 }}>{p.label}</span>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 12, fontFamily: I, color: '#0F0E0D', fontWeight: 600 }}>{p.value}</div>
                  <div style={{ fontSize: 9, fontFamily: I, color: p.color, fontWeight: 500 }}>{p.trend}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashCard>
  )
}

function IntakeDashboard() {
  const fields = ['Full Name', 'Date of Birth', 'Gender', 'Primary Goal', 'Height', 'Weight']
  return (
    <DashCard height={520}>
      <Sidebar active={3} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <TopBar icon={ClipboardList} label="New Patient Intake" />
        <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
          {/* Fields list */}
          <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 5, overflow: 'hidden' }}>
            <div style={{ fontSize: 9, fontWeight: 700, fontFamily: I, color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 4 }}>Form fields</div>
            {fields.map(f => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 9px', background: '#FAFAFA', borderRadius: 7, border: '1px solid #F0F0F0' }}>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none">
                  <circle cx="2" cy="2"  r="1.5" fill="#D0D0D0"/>
                  <circle cx="6" cy="2"  r="1.5" fill="#D0D0D0"/>
                  <circle cx="2" cy="6"  r="1.5" fill="#D0D0D0"/>
                  <circle cx="6" cy="6"  r="1.5" fill="#D0D0D0"/>
                  <circle cx="2" cy="10" r="1.5" fill="#D0D0D0"/>
                  <circle cx="6" cy="10" r="1.5" fill="#D0D0D0"/>
                </svg>
                <span style={{ fontSize: 11, fontFamily: I, color: '#0F0E0D', fontWeight: 500 }}>{f}</span>
              </div>
            ))}
          </div>
          {/* Palette */}
          <div style={{ width: 108, borderLeft: '1px solid #F0F0F0', padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 9, fontWeight: 700, fontFamily: I, color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 4 }}>Add field</div>
            {['Short text', 'Long text', 'Dropdown', 'Date', 'Number', 'File upload'].map(t => (
              <div key={t} style={{ padding: '5px 7px', fontSize: 10, fontFamily: I, color: '#68655E', background: '#F5F5F5', borderRadius: 6, fontWeight: 500 }}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </DashCard>
  )
}

function MeetingsDashboard() {
  return (
    <DashCard height={500}>
      <Sidebar active={0} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <TopBar icon={Calendar} label="Meetings" />
        <div style={{ flex: 1, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 9, overflow: 'hidden' }}>
          {[
            { name: 'Sarah Mitchell', date: 'Jul 8 · 10:00 AM', status: 'Completed', type: 'Initial Consult',  completed: true  },
            { name: 'James Okafor',   date: 'Jul 10 · 2:30 PM', status: 'Scheduled', type: 'Follow-up',        completed: false },
          ].map(m => (
            <div key={m.name} style={{ padding: '11px 13px', background: '#FAFAFA', borderRadius: 10, border: '1px solid #F0F0F0' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 12, fontFamily: I, color: '#0F0E0D', fontWeight: 600 }}>{m.name}</span>
                <span style={{ fontSize: 9, fontFamily: I, color: m.completed ? '#16A34A' : '#2563EB', background: m.completed ? '#F0FDF4' : '#EFF6FF', borderRadius: 4, padding: '2px 7px', fontWeight: 600 }}>
                  {m.status}
                </span>
              </div>
              <div style={{ fontSize: 10, fontFamily: I, color: '#68655E', marginBottom: m.completed ? 8 : 0 }}>
                {m.date} · {m.type}
              </div>
              {m.completed && (
                <div style={{ padding: '7px 9px', background: '#FFFFFF', borderRadius: 7, border: '1px solid #EBEBEB' }}>
                  <div style={{ fontSize: 9, fontWeight: 700, fontFamily: I, color: '#B0B0B0', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 3 }}>AI Transcript Summary</div>
                  <div style={{ fontSize: 10, fontFamily: I, color: '#68655E', lineHeight: 1.5 }}>
                    Patient progressing well. Discussed nutrition adjustments and lab follow-up. Next check-in in 3 weeks.
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </DashCard>
  )
}

// ── Security badge row ────────────────────────────────────────────────────────

const PILLARS = [
  { badge: 'HIPAA',   title: 'HIPAA Compliant',    desc: 'Built for healthcare from day one. BAA provided on every plan, with full audit trails.' },
  { badge: 'AES-256', title: 'AES-256 Encryption', desc: 'All data encrypted at rest and in transit using industry-standard AES-256 and TLS 1.3.' },
  { badge: 'BAA',     title: 'Secured LLM Access', desc: 'AI runs under a Business Associate Agreement. Your data is never used to train models.' },
  { badge: 'U.S.',    title: 'U.S. Data Centers',  desc: 'All patient data is stored in U.S.-based data centers with complete access controls.' },
]

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

// ── Section divider ───────────────────────────────────────────────────────────

const SY = { paddingTop: 96, paddingBottom: 96 }
const SY_SM = { paddingTop: 80, paddingBottom: 80 }

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PlatformPage() {
  return (
    <div style={{ background: '#FFFFFF', fontFamily: I }}>
      <style>{`
        .feat-hero-dashboard { display: block; }
        .feat-hero-row       { display: flex; align-items: flex-start; gap: 32px; }
        .feat-row            { display: flex; align-items: flex-start; gap: 56px; }
        .feat-row-rev        { display: flex; align-items: flex-start; gap: 56px; flex-direction: row-reverse; }
        .feat-col-text-40    { flex: 0 0 38%; }
        .feat-col-text-45    { flex: 0 0 43%; }
        .feat-col-dash-60    { flex: 0 0 58%; }
        .feat-col-dash-55    { flex: 0 0 53%; }
        @media (max-width: 880px) {
          .feat-hero-dashboard { display: none !important; }
          .feat-hero-row       { flex-direction: column !important; }
          .feat-hero-right     { padding-left: 0 !important; margin-top: 28px; }
          .feat-row            { flex-direction: column !important; }
          .feat-row-rev        { flex-direction: column !important; }
          .feat-col-text-40,
          .feat-col-text-45,
          .feat-col-dash-60,
          .feat-col-dash-55    { flex: 0 0 100% !important; width: 100% !important; }
          .pl-badges-row { flex-direction: column !important; }
          .pl-badge { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.08) !important; }
          .pl-badge:last-child { border-bottom: none !important; }
        }
      `}</style>

      {/* ── SECTION 1 · HERO ──────────────────────────────────────────────── */}
      <section style={{ paddingTop: 128, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div className="feat-hero-row">
              {/* H1 */}
              <div style={{ flex: '0 0 55%' }}>
                <h1 style={{ fontFamily: H, fontWeight: 400, fontSize: 'clamp(34px, 5vw, 64px)', lineHeight: 1.05, color: '#0F0E0D', margin: 0, maxWidth: 640 }}>
                  One platform for your entire patient relationship
                </h1>
              </div>
              {/* Subtitle + buttons */}
              <div className="feat-hero-right" style={{ flex: '0 0 45%', paddingLeft: 96 }}>
                <p style={{ fontFamily: I, fontWeight: 500, fontSize: 16, color: '#68655E', letterSpacing: '-0.3px', lineHeight: 1.65, margin: '0 0 0', maxWidth: 460 }}>
                  A2V2 gives you AI agents, a built-in patient CRM, intelligent intake, and scheduling — all inside HIPAA-compliant infrastructure. Everything your clinic needs to engage patients, in one place.
                </p>
                <Buttons />
              </div>
            </div>
          </FadeIn>

          {/* Hero dashboard */}
          <FadeIn delay={120} className="feat-hero-dashboard" style={{ marginTop: 64 }}>
            <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }} className="px-10 py-32">
              <Image src="/images/Background-website-3.png" alt="" fill style={{ objectFit: 'cover' }} quality={100} unoptimized priority />
              <div className="relative w-full mx-auto max-w-[920px] origin-center md:scale-[1.17]">
                <TestHomepage2HeroDashboard />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2 · AI AGENTS ─────────────────────────────────────────── */}
      <section style={{ ...SY, background: '#FFFFFF' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div className="feat-row">
              {/* Text */}
              <div className="feat-col-text-40">
                <SectionHeading
                  title="AI agents, tuned to your clinic"
                  subtitle="Build and customize AI agents that speak in your clinic's voice, powered by leading models and grounded in your own knowledge."
                />
                <Points items={[
                  { icon: Bot,              title: 'Custom agents',       desc: 'Create agents with their own instructions, knowledge, and behavior.' },
                  { icon: Sparkles,         title: 'Multiple AI models',  desc: 'Choose from leading models like GPT and Claude for each agent.' },
                  { icon: SlidersHorizontal, title: 'Playground & sandbox', desc: 'Test configurations side by side and preview before going live.' },
                ]} />
              </div>
              {/* Dashboard */}
              <div className="feat-col-dash-60">
                <AgentsDashboard />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 3 · KNOWLEDGE BASE ────────────────────────────────────── */}
      <section style={{ ...SY, background: '#FFFFFF' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div className="feat-row">
              {/* Dashboard */}
              <div className="feat-col-dash-60">
                <KnowledgeDashboard />
              </div>
              {/* Text */}
              <div className="feat-col-text-40">
                <SectionHeading
                  title="Grounded in your knowledge"
                  subtitle="Feed your agent your clinic's content so every answer reflects your protocols and philosophy."
                />
                <Points items={[
                  { icon: Database, title: 'Multi-source knowledge', desc: 'Add text, files, YouTube, Q&A, and links.' },
                  { icon: FileText, title: 'Advanced retrieval',     desc: 'Agents are designed to pull accurate answers from your content.' },
                  { icon: Search,   title: 'Organized & searchable', desc: 'Manage sources with status tracking and filters.' },
                ]} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 4 · PATIENT CRM ───────────────────────────────────────── */}
      <section style={{ ...SY, background: '#FFFFFF' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div className="feat-row">
              {/* Text */}
              <div className="feat-col-text-40">
                <SectionHeading
                  title="A patient CRM built in"
                  subtitle="Every conversation becomes a patient record, with the history, forms, and health details your team needs in one place."
                />
                <Points items={[
                  { icon: Users,    title: 'Contact records',           desc: 'Track patients from Lead to Customer with full detail.' },
                  { icon: Activity, title: 'Health parameters',         desc: 'Configure metrics and track trends over time with insights.' },
                  { icon: FileText, title: 'Notes, forms & prescriptions', desc: 'Keep intake forms, notes, medications, and prescriptions on each record.' },
                ]} />
              </div>
              {/* Dashboard */}
              <div className="feat-col-dash-60">
                <CRMDashboard />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 5 · INTELLIGENT INTAKE ───────────────────────────────── */}
      <section style={{ ...SY, background: '#FFFFFF' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div className="feat-row">
              {/* Dashboard */}
              <div className="feat-col-dash-60">
                <IntakeDashboard />
              </div>
              {/* Text */}
              <div className="feat-col-text-40">
                <SectionHeading
                  title="Intake that fills itself in"
                  subtitle="Build custom forms and let AI extract patient data from uploaded documents automatically."
                />
                <Points items={[
                  { icon: ClipboardList, title: 'Drag-and-drop form builder', desc: 'Create custom intake and assessment forms.' },
                  { icon: FileUp,        title: 'AI file extraction',         desc: 'Upload a document and auto-populate a form.' },
                  { icon: Lock,         title: 'Encrypted at rest',           desc: 'Toggle per-form encryption for sensitive data.' },
                ]} />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 6 · MEETINGS & SCHEDULING ────────────────────────────── */}
      <section style={{ ...SY, background: '#FFFFFF' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div className="feat-row">
              {/* Text */}
              <div className="feat-col-text-40">
                <SectionHeading
                  title="Scheduling and meetings, handled"
                  subtitle="Book patients directly, sync your calendar, and let AI capture what happened."
                />
                <Points items={[
                  { icon: Calendar, title: 'Calendar sync',   desc: 'Connect Calendly and Google Calendar across agents.' },
                  { icon: Video,    title: 'Book meetings',   desc: 'Schedule slots that generate a Google Meet link and invite.' },
                  { icon: FileText, title: 'AI notetaker',    desc: 'An AI notetaker is designed to record and transcribe booked meetings.' },
                ]} />
              </div>
              {/* Dashboard */}
              <div className="feat-col-dash-60">
                <MeetingsDashboard />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ── SECTION 8 · SECURITY ──────────────────────────────────────────── */}
      <section style={{ ...SY_SM, background: '#FFFFFF' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div style={{ marginBottom: 48 }}>
              <h2 style={{ fontFamily: H, fontWeight: 400, fontSize: 'clamp(26px, 3vw, 40px)', lineHeight: 1.05, color: '#0F0E0D', margin: '0 0 20px' }}>
                Enterprise-ready and HIPAA-compliant
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'flex-start', marginBottom: 32 }}>
                {[
                  { label: 'Teams & roles',            desc: 'Fine-grained permissions for every team member.' },
                  { label: 'Audit logs',               desc: 'Full history of actions across your workspace.' },
                  { label: 'Scoped API keys',          desc: 'IP allow-listing and per-key permissions.' },
                  { label: 'Usage & billing',          desc: 'Track consumption and manage your subscription.' },
                ].map(item => (
                  <div key={item.label} style={{ textAlign: 'left', maxWidth: 200 }}>
                    <div style={{ fontFamily: I, fontWeight: 600, fontSize: 13, color: '#0F0E0D', marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontFamily: I, fontWeight: 500, fontSize: 12, color: '#68655E', letterSpacing: '-0.2px', lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pl-badges-row" style={{ display: 'flex', border: '1px solid rgba(0,0,0,0.08)', marginBottom: 24 }}>
              {PILLARS.map(({ badge, title, desc }, i) => (
                <div
                  key={title}
                  className="pl-badge"
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
            <div>
              <a
                href="/security"
                style={{ fontFamily: I, fontWeight: 500, fontSize: 13, color: '#68655E', textDecoration: 'underline', textDecorationColor: 'rgba(0,0,0,0.2)', letterSpacing: '-0.2px', transition: 'color 150ms' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#0F0E0D')}
                onMouseLeave={e => (e.currentTarget.style.color = '#68655E')}
              >
                Learn more about our security →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 9 · CTA ───────────────────────────────────────────────── */}
      <section style={{ ...SY, background: '#FFFFFF' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontFamily: H, fontWeight: 400, fontSize: 'clamp(32px, 5vw, 64px)', lineHeight: 1.05, color: '#0F0E0D', margin: '0 auto 20px', maxWidth: 700 }}>
                See the platform in action
              </h2>
              <p style={{ fontFamily: I, fontWeight: 500, fontSize: 16, color: '#68655E', letterSpacing: '-0.3px', lineHeight: 1.65, margin: '0 auto', maxWidth: 480 }}>
                Book a demo and we'll walk you through everything A2V2 is designed to do for your clinic.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginTop: 32 }}>
                <a
                  href={DEMO_BOOKING_URL}
                  style={{ display: 'inline-flex', alignItems: 'center', background: '#0F0E0D', color: '#fff', fontFamily: I, fontWeight: 500, fontSize: 15, padding: '12px 32px', borderRadius: 999, textDecoration: 'none', transition: 'opacity 150ms' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Book a Demo
                </a>
                <a
                  href={SIGN_IN_URL}
                  style={{ display: 'inline-flex', alignItems: 'center', color: '#0F0E0D', fontFamily: I, fontWeight: 500, fontSize: 15, padding: '12px 32px', borderRadius: 999, textDecoration: 'none', border: '1px solid rgba(0,0,0,0.18)', background: 'transparent', transition: 'background 150ms' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.04)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                >
                  Get Started
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <TestHomepage2Footer />
    </div>
  )
}
