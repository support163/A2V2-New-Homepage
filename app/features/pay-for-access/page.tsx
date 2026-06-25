'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import {
  AlertTriangle, Lock, ShieldOff, PlayCircle, Bot, ShieldCheck,
  Home, MessageSquare, FileText, Users, Settings, Video, HelpCircle,
  Stethoscope, Zap, Heart, Building2, GraduationCap, LayoutGrid, ArrowUp,
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

const CONTENT_SIDEBAR = [
  { Icon: Home,       active: false },
  { Icon: LayoutGrid, active: false },
  { Icon: FileText,   active: true  },
  { Icon: Users,      active: false },
  { Icon: Settings,   active: false },
]

const PFA_CONVERSATION = [
  { role: 'ai'     as const, text: "Hi Jordan! How is week 2 of the Metabolic Reset going?" },
  { role: 'member' as const, text: "Going well, but I've been feeling a bit fatigued." },
  { role: 'ai'     as const, text: "That's a common adjustment in week 2 as your body adapts. Make sure you're hydrating and getting enough electrolytes. It usually passes within a few days." },
  { role: 'member' as const, text: "Good to know. Is that covered in the course?" },
  { role: 'ai'     as const, text: "Yes! Check Module 3, the 'Energy & Adaptation' lesson. It walks through exactly what to expect this week." },
  { role: 'member' as const, text: "Perfect, thank you!" },
  { role: 'ai'     as const, text: "Anytime. I'll flag this for Dr. Lee in case you'd like to discuss it directly." },
]
type PFAMessage = { role: 'ai' | 'member'; text: string; key: number }

const CONTENT_ITEMS = [
  { Icon: Video,       label: '12-Week Metabolic Reset',      type: 'Course' },
  { Icon: FileText,    label: 'Hormone Optimization Protocol', type: 'PDF' },
  { Icon: HelpCircle,  label: 'Longevity Q&A Library',        type: 'Members only' },
]

const PILLARS = [
  { badge: 'HIPAA',   title: 'HIPAA Compliant',      desc: 'Built for healthcare from day one. BAA provided on every plan, with full audit trails.' },
  { badge: 'AES-256', title: 'AES-256 Encryption',   desc: 'All data encrypted at rest and in transit using industry-standard AES-256 and TLS 1.3.' },
  { badge: 'BAA',     title: 'Secured LLM Access',   desc: 'AI runs under a Business Associate Agreement. Your data is never used to train models.' },
  { badge: 'U.S.',    title: 'U.S. Data Centers',    desc: 'All patient data is stored in U.S.-based data centers with complete access controls.' },
]

const WHO = [
  { Icon: Stethoscope,   title: 'Functional medicine practitioners', desc: 'Sell protocols and answer patient questions safely.' },
  { Icon: Zap,           title: 'Longevity & wellness creators',     desc: 'Monetize your following without compliance risk.' },
  { Icon: Heart,         title: 'HRT & hormone health educators',    desc: 'Share programs and guidance under a BAA.' },
  { Icon: Building2,     title: 'Clinics & practices',               desc: 'Offer paid content and AI support to your patient base.' },
  { Icon: GraduationCap, title: 'Coaches & health educators',        desc: 'Turn your expertise into compliant, recurring revenue.' },
]

function ContentLibraryDashboard() {
  return (
    <div className="relative overflow-hidden" style={{ height: 730, width: '100%' }}>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "url('/images/Background-website-3.png')", backgroundSize: 'cover', backgroundPosition: 'center top' }}
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
          {CONTENT_SIDEBAR.map(({ Icon, active }, i) => (
            <div key={i} style={{
              width: 32, height: 32, minWidth: 32, minHeight: 32, flexShrink: 0, borderRadius: 7,
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
            <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Content Hub</span>
            <span style={{ fontSize: 10, background: '#EFF6FF', color: '#2563EB', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>847 members</span>
          </div>
          {/* Column header */}
          <div style={{ padding: '8px 318px 6px 16px', background: '#F5F4F2', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
            <span style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.5px', textTransform: 'uppercase' }}>Paywalled Content</span>
          </div>
          {/* Content rows */}
          {CONTENT_ITEMS.map(({ Icon, label, type }, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 318px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
              <div style={{ width: 28, height: 28, borderRadius: 6, background: '#F0EFED', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={12} color="#68655E" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 500, color: '#0F0E0D', fontFamily: I }}>{label}</div>
                <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I, marginTop: 1 }}>{type}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                <Lock size={9} color="#9A9590" />
                <span style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>Members only</span>
              </div>
            </div>
          ))}
          {/* Stats bar */}
          <div style={{ padding: '12px 16px', display: 'flex', gap: 16, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>Members</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>847</div>
            </div>
            <div style={{ width: 1, height: 24, background: 'rgba(0,0,0,0.06)' }} />
            <div>
              <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>This month</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#16A34A', fontFamily: I }}>$2,341</div>
            </div>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 4 }}>
              <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500 }}>BAA active</span>
              <span style={{ fontSize: 9, background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', borderRadius: 4, padding: '2px 6px', fontFamily: I, fontWeight: 500 }}>AES-256</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PFAChatCard() {
  const [messages, setMessages] = useState<PFAMessage[]>([{ ...PFA_CONVERSATION[0], key: 0 }])
  const [isTyping, setIsTyping] = useState(false)
  const [started, setStarted] = useState(false)

  const outerRef = useRef<HTMLDivElement>(null)
  const msgsRef  = useRef<HTMLDivElement>(null)
  const genRef   = useRef(0)

  useEffect(() => {
    const el = outerRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const gen = ++genRef.current
    const valid = () => genRef.current === gen
    const delay = (ms: number) => new Promise<void>((res) => setTimeout(res, ms))

    async function run() {
      setMessages([{ ...PFA_CONVERSATION[0], key: 0 }])
      setIsTyping(false)
      for (let i = 1; i < PFA_CONVERSATION.length; i++) {
        if (!valid()) return
        const msg = PFA_CONVERSATION[i]
        if (msg.role === 'ai') {
          setIsTyping(true)
          await delay(1300)
          if (!valid()) return
          setIsTyping(false)
          await delay(60)
        } else {
          await delay(700)
        }
        if (!valid()) return
        setMessages((prev) => [...prev, { ...msg, key: i }])
        await delay(900)
      }
      await delay(3000)
      if (!valid()) return
      run()
    }

    run()
    return () => { genRef.current++ }
  }, [started])

  useEffect(() => {
    const el = msgsRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, isTyping])

  return (
    <div
      ref={outerRef}
      className="relative overflow-hidden pfa-chat-outer"
      style={{
        height: 760, minHeight: 760, maxHeight: 760,
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        paddingTop: 105, paddingLeft: 28, paddingRight: 28,
      }}
    >
      <style>{`
        @keyframes pfa-msg-in {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pfa-tdot {
          0%, 60%, 100% { transform: translateY(0);    opacity: 0.35; }
          30%            { transform: translateY(-4px); opacity: 1;    }
        }
        .pfa-chat-msg-in { animation: pfa-msg-in 280ms ease forwards; }
        .pfa-chat-tdot   { animation: pfa-tdot 1.1s ease-in-out infinite; }
        .pfa-chat-msgs::-webkit-scrollbar { display: none; }
        .pfa-chat-msgs   { scrollbar-width: none; }
        @media (max-width: 880px) {
          .pfa-chat-outer    { height: 480px !important; min-height: 480px !important; max-height: 480px !important; padding-top: 52px !important; }
          .pfa-chat-gradient { height: 504px !important; min-height: 504px !important; max-height: 504px !important; }
          .pfa-chat-card     { height: 500px !important; min-height: 500px !important; max-height: 500px !important; }
        }
      `}</style>

      <Image
        src="/images/Background-website-3.png"
        alt=""
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        unoptimized
      />

      {/* Gradient border wrapper */}
      <div
        className="pfa-chat-gradient"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 480,
          height: 724,
          minHeight: 724,
          maxHeight: 724,
          flexShrink: 0,
          borderRadius: 20,
          padding: 2,
          background: 'linear-gradient(135deg, #F5A623, #EF8A3E, #E05A2B, #9B5CFF, #7C5CFC)',
          boxShadow: '0 0 40px rgba(239,138,62,0.22), 0 0 70px rgba(124,92,252,0.18)',
        }}
      >
        {/* Chat card */}
        <div
          className="pfa-chat-card"
          style={{
            width: '100%',
            height: 720,
            minHeight: 720,
            maxHeight: 720,
            background: '#ffffff',
            borderRadius: 18,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          {/* Header */}
          <div style={{
            padding: '12px 16px',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
            display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0,
          }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
              <Image src="/images/profile-image1.jpg" alt="Health Expert AI" fill style={{ objectFit: 'cover' }} unoptimized />
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Health Expert AI</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginTop: 2 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ fontSize: 11, color: '#68655E', fontFamily: I }}>Online</span>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={msgsRef}
            className="pfa-chat-msgs"
            style={{
              flex: 1, minHeight: 0, padding: '16px',
              overflowY: 'scroll', display: 'flex', flexDirection: 'column', gap: 10,
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.key}
                className="pfa-chat-msg-in"
                style={{ display: 'flex', justifyContent: msg.role === 'member' ? 'flex-end' : 'flex-start' }}
              >
                <div style={{
                  maxWidth: '75%',
                  padding: '10px 14px',
                  borderRadius: msg.role === 'member' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.role === 'member' ? '#0F0E0D' : 'rgba(0,0,0,0.05)',
                  color: msg.role === 'member' ? '#ffffff' : '#0F0E0D',
                  fontSize: 14,
                  fontFamily: I,
                  lineHeight: 1.5,
                }}>
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{
                  padding: '12px 14px', borderRadius: '18px 18px 18px 4px',
                  background: 'rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', gap: 5,
                }}>
                  {[0, 160, 320].map((d) => (
                    <div
                      key={d}
                      className="pfa-chat-tdot"
                      style={{ width: 7, height: 7, borderRadius: '50%', background: 'rgba(0,0,0,0.4)', animationDelay: `${d}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input bar */}
          <div style={{
            padding: '10px 12px', borderTop: '1px solid rgba(0,0,0,0.06)',
            display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
          }}>
            <div style={{
              flex: 1, borderRadius: 999, background: 'rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.08)', padding: '9px 16px',
              fontSize: 14, color: 'rgba(0,0,0,0.3)', fontFamily: I, userSelect: 'none',
            }}>
              Type a message...
            </div>
            <div style={{
              width: 36, height: 36, borderRadius: '50%', background: '#0F0E0D',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <ArrowUp size={16} color="#ffffff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PayForAccessPage() {
  return (
    <main style={{ background: '#ffffff', fontFamily: H }}>
      <style>{`
        @media (max-width: 880px) {
          .pfa-hero-row { flex-direction: column !important; gap: 28px !important; }
          .pfa-hero-right { padding-left: 0 !important; }
          .pfa-problem-grid { grid-template-columns: 1fr !important; }
          .pfa-how-row { flex-direction: column !important; gap: 40px !important; }
          .pfa-how-col { flex: 0 0 auto !important; width: 100% !important; }
          .pfa-pillars-row { flex-direction: column !important; }
          .pfa-pillar { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.08) !important; }
          .pfa-pillar:last-child { border-bottom: none !important; }
          .pfa-hero-dashboard { display: none !important; }
        }
      `}</style>

      {/* ── SECTION 1: HERO ── */}
      <section style={{ background: '#ffffff', paddingTop: 128, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div className="pfa-hero-row" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div style={{ flex: '0 0 55%' }}>
                <h1
                  className="font-normal leading-[1.05]"
                  style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#0F0E0D', fontFamily: H, maxWidth: 620 }}
                >
                  Monetize your expertise, the HIPAA-safe way
                </h1>
              </div>
              <div className="pfa-hero-right" style={{ flex: '0 0 45%', paddingLeft: 'clamp(0px, 8vw, 128px)' }}>
                <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 470 }}>
                  Pay For Access lets healthcare experts sell their content and answer their audience&apos;s questions through HIPAA-compliant infrastructure. Build authority and revenue without the compliance risk of generic creator tools.
                </p>
                <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
                  <a
                    href={SIGN_IN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={btnBlack}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Get Started
                  </a>
                  <a
                    href={DEMO_BOOKING_URL}
                    style={btnGhost}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Book a Demo
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={120} className="pfa-hero-dashboard" style={{ marginTop: 64 }}>
            <ContentLibraryDashboard />
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <FadeIn>
            <h2
              className="font-normal leading-[1.05]"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#0F0E0D', fontFamily: H, maxWidth: 700, marginBottom: 20 }}
            >
              Generic creator tools were never built for health
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 640, marginBottom: 52 }}>
              Patreon, Kajabi, and Substack are fine for newsletters. But the moment a paying member asks you a health question or shares their symptoms, you have a compliance problem those platforms cannot solve.
            </p>
          </FadeIn>
          <div className="pfa-problem-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
            {([
              { Icon: AlertTriangle, title: 'Health questions create PHI', desc: 'The second a member describes symptoms, you are handling protected health information.', bg: '#FEF2F2', color: '#DC2626' },
              { Icon: Lock,         title: 'No BAA, no protection',        desc: 'Consumer creator platforms do not offer Business Associate Agreements.',                  bg: '#FEF2F2', color: '#DC2626' },
              { Icon: ShieldOff,    title: 'Your liability, not theirs',   desc: 'If member health data is mishandled, the exposure falls on you.',                        bg: '#FEF2F2', color: '#DC2626' },
            ] as const).map(({ Icon, title, desc, bg, color }, i) => (
              <FadeIn key={title} delay={i * 60}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={16} style={{ color }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{title}</div>
                    <div style={{ fontSize: 14, color: '#68655E', fontFamily: I, marginTop: 4, lineHeight: 1.55 }}>{desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: HOW IT WORKS ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="pfa-how-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            {/* Left */}
            <FadeIn className="pfa-how-col" style={{ flex: '0 0 38%' }}>
              <h2
                className="font-normal leading-[1.05]"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#0F0E0D', fontFamily: H, marginBottom: 20 }}
              >
                Sell content. Answer questions. Stay compliant.
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Pay For Access gives you a paywalled hub for your content and a HIPAA-compliant AI agent that answers your audience&apos;s questions in your voice.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                {([
                  { Icon: PlayCircle, title: 'Paywalled content & courses',   desc: 'Sell videos, protocols, guides, and programs behind a secure paywall.' },
                  { Icon: Bot,        title: 'HIPAA-safe AI agent',            desc: 'An AI assistant answers member health questions under a BAA, with escalation when needed.' },
                  { Icon: ShieldCheck, title: 'Compliant by default',         desc: 'BAA, AES-256 encryption, audit trails, and secured LLM access built in.' },
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
            {/* Right */}
            <FadeIn className="pfa-how-col" delay={120} style={{ flex: '0 0 58%' }}>
              <PFAChatCard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHO IT'S FOR ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <FadeIn>
            <h2
              className="font-normal leading-[1.05]"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}
            >
              Built for every kind of health expert
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 560, marginBottom: 48 }}>
              If your audience trusts you with their health, Pay For Access keeps that relationship compliant.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="pfa-pillars-row" style={{ display: 'flex', border: '1px solid rgba(0,0,0,0.08)' }}>
              {WHO.map(({ Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="pfa-pillar"
                  style={{
                    flex: 1,
                    padding: '28px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    borderRight: i < WHO.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                  }}
                >
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: '#F5F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <Icon size={16} style={{ color: '#0F0E0D' }} />
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: '#0F0E0D', fontFamily: I, marginBottom: 6 }}>{title}</div>
                  <div style={{ fontSize: 13, color: '#68655E', fontFamily: I, lineHeight: 1.55 }}>{desc}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 5: SECURITY TIE-IN ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <FadeIn>
            <h2
              className="font-normal leading-[1.05]"
              style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}
            >
              The same security that powers our clinic platform
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 560, marginBottom: 48 }}>
              Pay For Access runs on A2V2&apos;s HIPAA-compliant infrastructure.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="pfa-pillars-row" style={{ display: 'flex', border: '1px solid rgba(0,0,0,0.08)' }}>
              {PILLARS.map(({ badge, title, desc }, i) => (
                <div
                  key={title}
                  className="pfa-pillar"
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
          <FadeIn delay={120} style={{ marginTop: 24 }}>
            <a
              href="/security"
              style={{ fontSize: 14, fontWeight: 500, color: '#0F0E0D', fontFamily: I, textDecoration: 'underline', textUnderlineOffset: 3, letterSpacing: '-0.2px', transition: 'color 150ms ease' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#2563EB')}
              onMouseLeave={e => (e.currentTarget.style.color = '#0F0E0D')}
            >
              Learn more about our security →
            </a>
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
                Turn your expertise into compliant revenue
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 500, margin: '20px auto 36px' }}>
                Start selling your content and answering your audience the HIPAA-safe way.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={SIGN_IN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={btnBlack}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Get Started
                </a>
                <a
                  href={DEMO_BOOKING_URL}
                  style={btnGhost}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Book a Demo
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
