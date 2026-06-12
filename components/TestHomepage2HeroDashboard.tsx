'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import {
  Home, Activity, ClipboardList, FlaskConical, BookOpen,
  ArrowUp, PanelRight, SlidersHorizontal,
  ChevronRight, User, Zap, Brain, Heart, ShieldCheck,
} from 'lucide-react'

// ─── Sidebar ───────────────────────────────────────────────────────────────────
const SIDEBAR_ICONS = [
  { Icon: Home,          active: true,  badge: undefined as string | undefined },
  { Icon: Activity,      active: false, badge: undefined },
  { Icon: ClipboardList, active: false, badge: undefined },
  { Icon: FlaskConical,  active: false, badge: '2' },
  { Icon: BookOpen,      active: false, badge: undefined },
]

// ─── Chat messages ─────────────────────────────────────────────────────────────
type Message = { role: 'ai' | 'patient'; text: string }
const MESSAGES: Message[] = [
  { role: 'ai',      text: 'Hi Sarah! How are you feeling after your NAD+ infusion yesterday?' },
  { role: 'patient', text: 'A little tired and I have a mild headache.' },
  { role: 'ai',      text: "That's completely normal in the first few sessions. Make sure to stay hydrated — aim for 80oz of water today." },
  { role: 'patient', text: 'Okay. Should I be worried?' },
  { role: 'ai',      text: "Not at all. It usually clears up within 24 to 48 hours. I'll note this for Dr. Martinez to review at your next visit." },
  { role: 'patient', text: 'Thank you!' },
]
const DELAYS        = [600, 900, 700, 900, 800, 700]
const TYPING_DURATION = 900

// ─── ScoreCircle ───────────────────────────────────────────────────────────────
function ScoreCircle({ value, color, label, sub }: { value: number; color: string; label: string; sub: string }) {
  const size = 148; const cx = size / 2; const r = 58
  const circ = 2 * Math.PI * r; const fill = (value / 100) * circ
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle cx={cx} cy={cx} r={r} fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth={10} />
          <circle cx={cx} cy={cx} r={r} fill="none" stroke={color} strokeWidth={10}
            strokeDasharray={`${fill} ${circ - fill}`} strokeLinecap="round"
            transform={`rotate(-90 ${cx} ${cx})`} />
        </svg>
        <span style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          fontSize: 38, fontWeight: 700, color: '#0F0E0D', fontFamily: "'Inter', sans-serif",
          letterSpacing: '-1px', lineHeight: 1,
        }}>{value}</span>
      </div>
      <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>{label}</span>
      <span style={{ fontSize: 10, fontWeight: 500, color: 'rgba(0,0,0,0.4)', fontFamily: "'Inter', sans-serif", textAlign: 'center', maxWidth: 110 }}>{sub}</span>
    </div>
  )
}

// ─── Body System circle icon ───────────────────────────────────────────────────
function SysIcon({ color, progress, Icon }: { color: string; progress: number; Icon: React.ElementType }) {
  const size = 32; const cx = 16; const r = 13
  const circ = 2 * Math.PI * r; const fill = progress * circ
  return (
    <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} viewBox="0 0 32 32">
        <circle cx={cx} cy={cx} r={r} fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth={2.5} />
        <circle cx={cx} cy={cx} r={r} fill="none" stroke={color} strokeWidth={2.5}
          strokeDasharray={`${fill} ${circ - fill}`} strokeLinecap="round"
          transform={`rotate(-90 ${cx} ${cx})`} />
      </svg>
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon size={10} color={color} />
      </div>
    </div>
  )
}

// ─── Body system row ───────────────────────────────────────────────────────────
function SysRow({
  color, progress, Icon, name, status, age, ageColor, pct, pill, pillColor,
}: {
  color: string; progress: number; Icon: React.ElementType
  name: string; status: string; age: string; ageColor: string; pct: string
  pill?: string; pillColor?: string
}) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 0' }}>
      <SysIcon color={color} progress={progress} Icon={Icon} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>{name}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 1, flexWrap: 'wrap' }}>
          {status && !pill && (
            <span style={{ fontSize: 9, fontWeight: 500, color: 'rgba(0,0,0,0.45)', fontFamily: "'Inter', sans-serif" }}>{status}</span>
          )}
          {pill && (
            <span style={{
              fontSize: 8, fontWeight: 600, color: pillColor ?? color,
              background: `${pillColor ?? color}18`,
              borderRadius: 999, padding: '1px 6px',
              fontFamily: "'Inter', sans-serif",
            }}>{pill}</span>
          )}
          <span style={{ fontSize: 9, fontWeight: 500, color: 'rgba(0,0,0,0.3)', fontFamily: "'Inter', sans-serif" }}>•</span>
          <span style={{ fontSize: 9, color: ageColor, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{age}</span>
        </div>
      </div>
      <span style={{ fontSize: 10, fontWeight: 600, color: '#0F0E0D', fontFamily: "'Inter', sans-serif", flexShrink: 0 }}>{pct}</span>
      <ChevronRight size={12} color="rgba(0,0,0,0.25)" style={{ flexShrink: 0 }} />
    </div>
  )
}

// ─── Range bar (BMI / Glucose / A1c) ──────────────────────────────────────────
function RangeBar({
  name, value, unit, min, max, healthyLo, healthyHi, leftLabel, centerLabel, rightLabel,
}: {
  name: string; value: number; unit: string
  min: number; max: number; healthyLo: number | null; healthyHi: number
  leftLabel: string; centerLabel: string; rightLabel: string
}) {
  const total     = max - min
  const loWidth   = healthyLo !== null ? ((healthyLo - min) / total) * 100 : 0
  const greenWidth = ((healthyHi - (healthyLo ?? min)) / total) * 100
  const markerPct = ((value - min) / total) * 100

  return (
    <div style={{ padding: '7px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 5 }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>{name}</span>
        <span style={{ fontSize: 10, fontWeight: 600, color: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>
          {value} <span style={{ fontWeight: 500, color: 'rgba(0,0,0,0.4)', fontSize: 9 }}>{unit}</span>
        </span>
      </div>
      {/* Bar */}
      <div style={{ position: 'relative', height: 6, display: 'flex', borderRadius: 999, overflow: 'hidden' }}>
        {loWidth > 0 && (
          <div style={{ width: `${loWidth}%`, background: '#f59e0b', flexShrink: 0 }} />
        )}
        <div style={{ width: `${greenWidth}%`, background: '#22c55e', flexShrink: 0 }} />
        <div style={{ flex: 1, background: '#f59e0b' }} />
        {/* Marker */}
        <div style={{
          position: 'absolute', top: -1, bottom: -1,
          left: `${Math.min(Math.max(markerPct, 1), 99)}%`,
          width: 2, background: '#0F0E0D', borderRadius: 1,
          transform: 'translateX(-50%)',
        }} />
      </div>
      {/* Labels */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 3 }}>
        <span style={{ fontSize: 8, fontWeight: 500, color: 'rgba(0,0,0,0.3)', fontFamily: "'Inter', sans-serif" }}>{leftLabel}</span>
        <span style={{ fontSize: 8, fontWeight: 500, color: 'rgba(0,0,0,0.3)', fontFamily: "'Inter', sans-serif" }}>{centerLabel}</span>
        <span style={{ fontSize: 8, fontWeight: 500, color: 'rgba(0,0,0,0.3)', fontFamily: "'Inter', sans-serif" }}>{rightLabel}</span>
      </div>
    </div>
  )
}

// ─── Thin divider ──────────────────────────────────────────────────────────────
const Divider = () => <div style={{ height: 1, background: 'rgba(0,0,0,0.06)', margin: '0 -2px' }} />

// ─── Typing dots ───────────────────────────────────────────────────────────────
function TypingDots() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 3, padding: '8px 12px' }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{
          width: 5, height: 5, borderRadius: '50%', background: 'rgba(0,0,0,0.3)',
          display: 'inline-block',
          animation: `typingBounce 1s ease-in-out ${i * 0.15}s infinite`,
        }} />
      ))}
    </div>
  )
}

// ─── Chat panel ────────────────────────────────────────────────────────────────
function ChatPanel() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [showTyping,   setShowTyping]   = useState(false)
  const [started,      setStarted]      = useState(false)
  const wrapperRef  = useRef<HTMLDivElement>(null)
  const scrollRef   = useRef<HTMLDivElement>(null)
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([])

  useEffect(() => {
    const el = wrapperRef.current; if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect() } }, { threshold: 0.3 }
    )
    obs.observe(el); return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    timeoutsRef.current.forEach(clearTimeout); timeoutsRef.current = []
    let elapsed = 0
    MESSAGES.forEach((msg, i) => {
      elapsed += DELAYS[i]
      if (msg.role === 'ai') {
        const t1 = setTimeout(() => setShowTyping(true), elapsed)
        elapsed += TYPING_DURATION
        const t2 = setTimeout(() => { setShowTyping(false); setVisibleCount(i + 1) }, elapsed)
        timeoutsRef.current.push(t1, t2)
      } else {
        const t = setTimeout(() => setVisibleCount(i + 1), elapsed)
        timeoutsRef.current.push(t)
      }
    })
    return () => timeoutsRef.current.forEach(clearTimeout)
  }, [started])

  useEffect(() => {
    const el = scrollRef.current; if (!el) return
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [visibleCount, showTyping])

  return (
    <div ref={wrapperRef} className="hero-dash-chat" style={{
      flexShrink: 0, margin: 8, width: 272,
      display: 'flex', flexDirection: 'column',
      border: '1px solid rgba(0,0,0,0.08)',
      borderRadius: 20,
      background: '#ffffff',
      padding: '12px 12px 10px', overflow: 'hidden',
    }}>
      <style>{`
        @keyframes typingBounce {
          0%,60%,100% { transform:translateY(0); opacity:0.4; }
          30% { transform:translateY(-4px); opacity:1; }
        }
      `}</style>

      <div style={{ display: 'contents' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <Image src="/favicon.svg" alt="" width={16} height={16} style={{ width: 16, height: 16 }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>Care Assistant</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
              <span style={{ fontSize: 9, color: '#22c55e', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Online</span>
            </div>
          </div>
          <PanelRight size={14} color="#0F0E0D" style={{ cursor: 'pointer', flexShrink: 0 }} />
        </div>

        {/* Messages */}
        <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 8, scrollbarWidth: 'none' }}>
          {MESSAGES.slice(0, visibleCount).map((msg, i) => (
            <div key={i} style={{
              alignSelf: msg.role === 'patient' ? 'flex-end' : 'flex-start',
              maxWidth: '92%',
              width: 'fit-content',
              background: msg.role === 'patient' ? '#0F0E0D' : 'rgba(0,0,0,0.05)',
              color: msg.role === 'patient' ? '#ffffff' : '#0F0E0D',
              borderRadius: msg.role === 'patient' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
              padding: '7px 10px', fontSize: 10, fontWeight: 500, fontFamily: "'Inter', sans-serif", lineHeight: 1.55,
              wordBreak: 'break-word',
              animation: 'fadeSlideIn 250ms ease',
            }}>{msg.text}</div>
          ))}
          {showTyping && (
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <div style={{ background: 'rgba(0,0,0,0.05)', borderRadius: '16px 16px 16px 4px', display: 'inline-flex' }}>
                <TypingDots />
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div style={{
          marginTop: 10, flexShrink: 0,
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '5px 5px 5px 10px',
          border: '2px solid transparent',
          borderRadius: 12,
          background: 'linear-gradient(#ffffff, #ffffff) padding-box, linear-gradient(135deg, #EF8A3E, #F5A623, #9BC4E2, #7FB3D5) border-box',
        }}>
          <div style={{ display: 'contents' }}>
            <span style={{ flex: 1, fontSize: 10, fontWeight: 500, color: 'rgba(0,0,0,0.28)', fontFamily: "'Inter', sans-serif" }}>Ask a question</span>
            <SlidersHorizontal size={11} color="rgba(0,0,0,0.28)" style={{ flexShrink: 0 }} />
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#0F0E0D', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: 'pointer' }}>
              <ArrowUp size={12} color="#ffffff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main export ───────────────────────────────────────────────────────────────
export default function TestHomepage2HeroDashboard() {
  return (
    <>
      <style>{`
        .hero-dash-chat { display: flex; }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div style={{
        background: '#ffffff', borderRadius: 12,
        border: '1px solid rgba(0,0,0,0.08)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
        overflow: 'visible', display: 'flex', flexDirection: 'row',
        width: '100%', minHeight: 565,
      }}>

        {/* ── Sidebar ── */}
        <div style={{
          width: 56, flexShrink: 0,
          borderRight: '1px solid rgba(0,0,0,0.06)',
          background: 'rgba(0,0,0,0.02)', borderRadius: '12px 0 0 12px',
          padding: '14px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
        }}>
          <div style={{ marginBottom: 14 }}>
            <Image src="/favicon.svg" alt="A2V2" width={22} height={22} style={{ width: 22, height: 22 }} />
          </div>
          {SIDEBAR_ICONS.map(({ Icon, active, badge }, i) => (
            <div key={i} style={{ position: 'relative' }}>
              <div style={{ width: 30, height: 30, borderRadius: 7, background: active ? '#0F0E0D' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon size={13} color={active ? '#ffffff' : 'rgba(0,0,0,0.32)'} />
              </div>
              {badge && <span style={{ position: 'absolute', top: -3, right: -4, background: '#E05A2B', color: '#fff', borderRadius: 999, fontSize: 7, fontWeight: 700, padding: '1px 4px', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>{badge}</span>}
            </div>
          ))}
        </div>

        {/* ── Main Content ── */}
        <div style={{ flex: 1, minWidth: 0, padding: 14, display: 'flex', flexDirection: 'column', gap: 10, overflow: 'hidden' }}>

          {/* Patient header */}
          <div style={{ borderRadius: 8, border: '1px solid rgba(0,0,0,0.07)', padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
              <Image src="/images/profile-image1.jpg" alt="Priya Sharma" fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>Priya Sharma</div>
              <div style={{ fontSize: 10, fontWeight: 500, color: 'rgba(0,0,0,0.45)', fontFamily: "'Inter', sans-serif" }}>Age 54 · Female · Program 4/9</div>
            </div>
            <div style={{ fontSize: 10, fontWeight: 500, color: 'rgba(0,0,0,0.35)', fontFamily: "'Inter', sans-serif", textAlign: 'right', flexShrink: 0, lineHeight: 1.5 }}>
              Good morning,<br />07 Jun 2026
            </div>
          </div>


          {/* Body Systems */}
          <div style={{ borderRadius: 8, border: '1px solid rgba(0,0,0,0.07)', padding: '4px 12px 8px', flex: 1, overflowY: 'auto', scrollbarWidth: 'none' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0 4px' }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>Body Systems</span>
              <span style={{ fontSize: 9, fontWeight: 500, color: '#68655E', background: 'rgba(0,0,0,0.05)', borderRadius: 999, padding: '2px 8px', fontFamily: "'Inter', sans-serif", letterSpacing: '0.3px', textTransform: 'uppercase' }}>Phenotypic Age 49</span>
            </div>

            <Divider />
            <SysRow color="#22c55e" progress={0.85} Icon={User}       name="General Health"   status="Good standing" age="Body Age 49"     ageColor="#14b8a6" pct="0.9%" />
            <Divider />
            <SysRow color="#f59e0b" progress={0.52} Icon={Zap}        name="Metabolic Health" status=""              age="Metabolic Age 58" ageColor="#14b8a6" pct="7.2%" pill="Needs focus" pillColor="#f59e0b" />
            <Divider />
            <RangeBar name="BMI"              value={27.4} unit="kg/m²" min={15}  max={40}  healthyLo={18.5} healthyHi={25}  leftLabel="Under"  centerLabel="Healthy 18.5–25"  rightLabel="Over" />
            <Divider />
            <RangeBar name="Fasting Glucose"  value={104}  unit="mg/dL" min={70}  max={140} healthyLo={null} healthyHi={100} leftLabel="70"     centerLabel="Normal <100"      rightLabel="140" />
            <Divider />
            <RangeBar name="Hemoglobin A1c"   value={5.8}  unit="%"     min={4.0} max={7.0} healthyLo={null} healthyHi={5.7} leftLabel="4.0"    centerLabel="Normal <5.7"      rightLabel="7.0" />
            <Divider />
            <SysRow color="#eab308" progress={0.65} Icon={Brain}      name="Brain Health"     status="Stable"        age="Brain Age 52"    ageColor="#14b8a6" pct="3.1%" />
            <Divider />
            <SysRow color="#ef4444" progress={0.72} Icon={Heart}      name="Heart Health"     status=""              age="Heart Age 61"    ageColor="#14b8a6" pct="9.4%" pill="Watch" pillColor="#ef4444" />
            <Divider />
            <SysRow color="#22c55e" progress={0.88} Icon={ShieldCheck} name="Immune Health"   status="Strong"        age="Immune Age 47"   ageColor="#14b8a6" pct="2.0%" />
          </div>

        </div>

        {/* ── Chat Panel ── */}
        <ChatPanel />

      </div>
    </>
  )
}
