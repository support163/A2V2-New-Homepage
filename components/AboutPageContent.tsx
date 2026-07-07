'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
  UserCheck, ShieldCheck, MessageSquare, Scale,
  Check, Home, Users, Bot, FileText, Settings,
} from 'lucide-react'
import TestHomepage2Navbar from '@/components/TestHomepage2Navbar'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import TestHomepage2SpecialtyCarousel from '@/components/TestHomepage2SpecialtyCarousel'
import { DEMO_BOOKING_URL, SIGN_IN_URL } from '@/lib/constants'

const H = "'Helvetica Neue', Helvetica, Arial, sans-serif"
const I = "'Inter', sans-serif"

function FadeIn({
  children, delay = 0, className = '', style = {},
}: {
  children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    el.style.opacity = '0'; el.style.transform = 'translateY(22px)'
    el.style.transition = `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; obs.disconnect() }
    }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return <div ref={ref} className={className} style={style}>{children}</div>
}

const ABOUT_STATS = [
  { target: 50, prefix: '', suffix: '%', sub: 'of patients on long-term treatments drop off within the first year' },
  { target: 150, prefix: '$', suffix: 'B', sub: 'lost annually to missed appointments across US healthcare' },
  { target: 6, prefix: '', suffix: ' months', sub: 'the point where treatment adherence declines dramatically' },
]

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number | null>(null)
  useEffect(() => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    if (!triggered) { setCount(0); return }
    const start = performance.now()
    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current) }
  }, [triggered, target, duration])
  return count
}

function AboutStatItem({ stat, triggered }: { stat: typeof ABOUT_STATS[number]; triggered: boolean }) {
  const count = useCountUp(stat.target, 1800, triggered)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: '#0F0E0D', fontFamily: H, lineHeight: 1.1, letterSpacing: '-1px' }}>
        {stat.prefix}{count}{stat.suffix}
      </span>
      <span style={{ fontSize: 14, fontWeight: 500, color: '#68655E', fontFamily: I, maxWidth: 200, lineHeight: 1.6, marginTop: 12 }}>
        {stat.sub}
      </span>
    </div>
  )
}

function BadgeSVG({ label }: { label: string }) {
  const cx = 35, cy = 35, r = 34, ringR = 29, arcR = 25
  const arcCirc = 2 * Math.PI * arcR, arcLen = arcCirc * 0.22, gapLen = arcCirc * 0.03
  return (
    <svg width={70} height={70} viewBox="0 0 70 70" fill="none">
      <circle cx={cx} cy={cy} r={r} fill="#0F0E0D" />
      <circle cx={cx} cy={cy} r={ringR} stroke="rgba(255,255,255,0.35)" strokeWidth={1} fill="none" />
      <circle cx={cx} cy={cy} r={arcR} stroke="rgba(255,255,255,0.55)" strokeWidth={1} fill="none"
        strokeDasharray={`${arcLen} ${gapLen}`} strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`} />
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fill="#ffffff"
        fontSize={label.length > 4 ? 10 : 11} fontWeight={500}
        fontFamily="'Inter', sans-serif" letterSpacing="0.5">{label}</text>
    </svg>
  )
}

const SECURITY_ITEMS = [
  { title: 'HIPAA Compliant', description: 'Built for healthcare from day one. BAA provided on every plan, with full audit trails.', badge: 'HIPAA' },
  { title: 'AES-256 Encryption', description: 'All data encrypted at rest and in transit using industry-standard AES-256 and TLS 1.3.', badge: 'AES-256' },
  { title: 'Secured LLM Access', description: 'AI runs under a Business Associate Agreement. Your data is never used to train models.', badge: 'BAA' },
  { title: 'U.S. Data Centers', description: 'All patient data is stored in U.S.-based data centers with complete access controls.', badge: 'U.S.' },
]

const VALUES = [
  { icon: UserCheck, title: 'AI supports clinicians, it never replaces them.', body: 'Every clinical decision belongs to your team. Our AI is designed to handle the routine and escalate anything that needs human judgment.' },
  { icon: ShieldCheck, title: 'Security is the foundation, not a feature.', body: 'Patient data deserves the highest standard of protection at every layer, on every plan, from day one.' },
  { icon: MessageSquare, title: 'The space between visits is where care is won or lost.', body: 'Consistent, timely follow-up is not a nice-to-have. It is the difference between a patient who stays and one who disappears.' },
  { icon: Scale, title: 'Say what is true, not what sounds impressive.', body: 'We are precise about what our product does and how it protects data. We would rather earn trust than overstate.' },
]

const PLATFORM_FEATURES = [
  'AI agents tuned to your clinic',
  'A built-in patient CRM',
  'AI-powered intake and file extraction',
  'Scheduling and meeting support',
  'HIPAA-compliant by design',
]


const CONTACT_ROWS = [
  { name: 'Sarah M.', tag: 'NAD+ Protocol', status: 'Active', dot: '#22C55E' },
  { name: 'James K.', tag: 'HRT, Week 8', status: 'Follow-up due', dot: '#F59E0B' },
  { name: 'Elena R.', tag: 'GLP-1 Onboarding', status: 'Active', dot: '#22C55E' },
  { name: 'David P.', tag: 'Longevity Panel', status: 'Awaiting labs', dot: '#6366F1' },
  { name: 'Priya N.', tag: 'Functional Eval', status: 'Active', dot: '#22C55E' },
]

export default function AboutPageContent() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [statsTriggered, setStatsTriggered] = useState(false)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { setStatsTriggered(entry.isIntersecting) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh' }}>
      <style>{`
        @media (min-width: 880px) {
          .about-platform-row { flex-direction: row !important; align-items: center !important; gap: 64px !important; }
          .about-platform-dash { display: block !important; }
          .about-values-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .about-value-item { border-bottom: none !important; }
          .about-value-item:nth-child(odd) { border-right: 1px solid rgba(0,0,0,0.08) !important; }
          .about-value-item:nth-child(-n+2) { border-bottom: 1px solid rgba(0,0,0,0.08) !important; }
          .about-sec-badges { flex-direction: row !important; }
          .about-sec-badge { border-right: 1px solid rgba(0,0,0,0.08) !important; border-bottom: none !important; }
          .about-sec-badge:last-child { border-right: none !important; }
          .about-problem-row { display: grid !important; grid-template-columns: 3fr 1fr !important; align-items: flex-start !important; gap: 80px !important; flex-direction: unset !important; }
          .about-problem-row .about-problem-left { max-width: none; }
          .about-problem-row .about-problem-right { margin-left: 0 !important; }
        }
      `}</style>

      <TestHomepage2Navbar />

      {/* ── SECTION 1: HERO ─────────────────────────────────────────────── */}
      <section style={{ background: '#FFFFFF', paddingTop: 128, paddingBottom: 96 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <h1
              style={{
                fontSize: 'clamp(36px, 5vw, 72px)',
                fontWeight: 400, color: '#0F0E0D', fontFamily: H,
                lineHeight: 1.05, letterSpacing: '-1px', maxWidth: 820, margin: 0,
              }}
            >
              Care shouldn&apos;t stop at the exam room door
            </h1>
            <p
              style={{
                marginTop: 20, fontSize: 17, fontWeight: 500,
                color: '#68655E', fontFamily: I, letterSpacing: '-0.3px',
                lineHeight: 1.65, maxWidth: 560,
              }}
            >
              A2V2 exists to close the gap between visits, where patients are lost, revenue slips away, and clinical teams run out of hours in the day. We build HIPAA-compliant AI that handles the routine so your team can focus on care.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: THE PROBLEM ────────────────────────────────────────── */}
      <section style={{ background: '#FFFFFF', paddingTop: 80, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <div
            className="about-problem-row"
            style={{ display: 'flex', flexDirection: 'column', gap: 48 }}
          >
            {/* Left — header + body */}
            <div className="about-problem-left" style={{ flex: 1 }}>
              <FadeIn>
                <h2
                  style={{
                    fontSize: 'clamp(28px, 4vw, 56px)',
                    fontWeight: 400, color: '#0F0E0D', fontFamily: H,
                    lineHeight: 1.05, letterSpacing: '-0.5px', margin: 0,
                  }}
                >
                  The care is excellent. The follow-through is impossible.
                </h2>
              </FadeIn>
              <FadeIn delay={100}>
                <div style={{ marginTop: 24 }}>
                  <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.7, margin: 0 }}>
                    Inside the exam room, clinics do extraordinary work. But most of a patient&apos;s journey happens outside of it, in the weeks between appointments where questions go unanswered, refills lapse, and protocols quietly fall apart.
                  </p>
                  <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.7, margin: '16px 0 0' }}>
                    Around half of patients on long-term treatments drop off within the first year, and it is rarely because the treatment failed. It is because no one had the hours to follow up at the right moment. A2V2 was built to give clinics those hours back.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right — stats stacked vertically, flush to right edge */}
            <div
              ref={statsRef}
              className="about-problem-right"
              style={{ display: 'flex', flexDirection: 'column', gap: 40, marginLeft: 'auto' }}
            >
              {ABOUT_STATS.map((stat) => (
                <AboutStatItem key={stat.suffix} stat={stat} triggered={statsTriggered} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT WE BELIEVE ────────────────────────────────────── */}
      <section style={{ background: '#FFFFFF', paddingTop: 80, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 56px)',
              fontWeight: 400, color: '#0F0E0D', fontFamily: H,
              lineHeight: 1.05, letterSpacing: '-0.5px', margin: '0 0 48px',
            }}
          >
            What we believe
          </h2>
          <div
            className="about-values-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr' }}
          >
            {VALUES.map(({ icon: Icon, title, body }, i) => (
              <div
                key={title}
                className="about-value-item"
                style={{
                  padding: '36px 32px',
                  borderBottom: i < VALUES.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                }}
              >
                <Icon size={24} color="#0F0E0D" strokeWidth={1.5} />
                <div style={{ marginTop: 20, fontSize: 16, fontWeight: 600, color: '#0F0E0D', fontFamily: I, lineHeight: 1.4 }}>
                  {title}
                </div>
                <div style={{ marginTop: 10, fontSize: 14, fontWeight: 500, color: '#68655E', fontFamily: I, lineHeight: 1.65, letterSpacing: '-0.2px' }}>
                  {body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHAT WE DO ─────────────────────────────────────────── */}
      <section style={{ background: '#FFFFFF', paddingTop: 80, paddingBottom: 80, overflow: 'hidden' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <div
            className="about-platform-row"
            style={{ display: 'flex', flexDirection: 'column', gap: 48 }}
          >
            {/* Left */}
            <FadeIn style={{ flexShrink: 0, flex: '0 0 38%', maxWidth: 520 }}>
              <h2
                style={{
                  fontSize: 'clamp(26px, 3.5vw, 52px)',
                  fontWeight: 400, color: '#0F0E0D', fontFamily: H,
                  lineHeight: 1.05, letterSpacing: '-0.5px', margin: 0,
                }}
              >
                One platform for the whole patient relationship
              </h2>
              <p style={{ marginTop: 20, fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.65 }}>
                A2V2 brings AI agents, a built-in patient CRM, intelligent intake, and scheduling together inside HIPAA-compliant infrastructure, so clinics can automate the busywork without losing the human touch.
              </p>
              <ul style={{ marginTop: 24, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {PLATFORM_FEATURES.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <Check size={16} color="#0F0E0D" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 14, fontWeight: 500, color: '#0F0E0D', fontFamily: I, lineHeight: 1.5 }}>{f}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {/* Right — dashboard mockup, hidden on mobile */}
            <div
              className="about-platform-dash"
              style={{ flex: '1 1 0', minWidth: 0, overflow: 'hidden', display: 'none' }}
            >
              <div style={{ position: 'relative', width: '100%', height: 440, overflow: 'hidden' }}>
                <Image src="/images/Background-website-3.png" alt="" fill style={{ objectFit: 'cover' }} quality={100} unoptimized />
                <div style={{
                  position: 'absolute', left: 80, top: 88, right: -200, bottom: 0,
                  background: '#FFFFFF', borderRadius: '10px 10px 0 0',
                  display: 'flex', overflow: 'hidden',
                  boxShadow: '0 4px 32px rgba(0,0,0,0.10)',
                }}>
                  {/* Sidebar */}
                  <div style={{
                    width: 46, background: '#FAFAFA', borderRight: '1px solid #F0F0F0',
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    padding: '12px 0', gap: 4, flexShrink: 0,
                  }}>
                    <Image src="/favicon.svg" alt="" width={16} height={16} style={{ marginBottom: 8, borderRadius: 4 }} />
                    {([Home, Users, Bot, FileText, Settings] as React.ElementType[]).map((Icon, i) => (
                      <div key={i} style={{
                        width: 30, height: 30, borderRadius: 7,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        background: i === 1 ? '#0F0E0D' : 'transparent',
                      }}>
                        <Icon size={13} color={i === 1 ? '#fff' : '#C4C4C4'} />
                      </div>
                    ))}
                  </div>
                  {/* Contacts panel */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                    <div style={{ borderBottom: '1px solid #F0F0F0', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                      <Users size={12} color="#0F0E0D" />
                      <span style={{ fontSize: 10, fontWeight: 600, fontFamily: I, color: '#0F0E0D' }}>Contacts</span>
                    </div>
                    <div style={{ padding: '8px 14px', borderBottom: '1px solid #F0F0F0', flexShrink: 0 }}>
                      <div style={{ background: '#F5F5F5', borderRadius: 6, padding: '5px 10px', display: 'flex', alignItems: 'center', gap: 6 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', border: '1.5px solid #C4C4C4' }} />
                        <span style={{ fontSize: 9, color: '#C4C4C4', fontFamily: I }}>Search contacts…</span>
                      </div>
                    </div>
                    {CONTACT_ROWS.map((row, i) => (
                      <div key={i} style={{
                        padding: '10px 14px', borderBottom: '1px solid #F5F5F5',
                        display: 'flex', alignItems: 'center', gap: 10,
                        background: i === 0 ? 'rgba(0,0,0,0.02)' : 'transparent',
                        flexShrink: 0,
                      }}>
                        <div style={{
                          width: 26, height: 26, borderRadius: '50%', background: '#EBEBEB',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                        }}>
                          <span style={{ fontSize: 9, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>
                            {row.name.split(' ').map((n) => n[0]).join('')}
                          </span>
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 10, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{row.name}</div>
                          <div style={{ fontSize: 9, color: '#68655E', fontFamily: I, marginTop: 1 }}>{row.tag}</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                          <div style={{ width: 5, height: 5, borderRadius: '50%', background: row.dot }} />
                          <span style={{ fontSize: 9, color: '#68655E', fontFamily: I }}>{row.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SPECIALTY CAROUSEL ────────────────────────────────── */}
      <TestHomepage2SpecialtyCarousel />

      {/* ── SECTION 6: SECURITY ───────────────────────────────────────────── */}
      <section style={{ background: '#FFFFFF', paddingTop: 80, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <h2
              style={{
                fontSize: 'clamp(24px, 3.5vw, 48px)',
                fontWeight: 400, color: '#0F0E0D', fontFamily: H,
                lineHeight: 1.05, letterSpacing: '-0.5px', margin: 0,
              }}
            >
              Built on HIPAA-compliant infrastructure
            </h2>
          </FadeIn>
          <FadeIn delay={100}>
            <div
              className="about-sec-badges"
              style={{
                display: 'flex', flexDirection: 'column',
                border: '1px solid rgba(0,0,0,0.08)', marginTop: 48,
              }}
            >
              {SECURITY_ITEMS.map(({ title, description, badge }, i) => (
                <div
                  key={title}
                  className="about-sec-badge"
                  style={{
                    flex: 1, padding: '28px 24px',
                    display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                    borderBottom: i < SECURITY_ITEMS.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                  }}
                >
                  <BadgeSVG label={badge} />
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#0F0E0D', fontFamily: I, marginTop: 16 }}>{title}</div>
                  <div style={{ fontSize: 13, color: '#68655E', fontFamily: I, marginTop: 6, lineHeight: 1.6 }}>{description}</div>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 20, fontSize: 13, fontWeight: 500, color: '#68655E', fontFamily: I }}>
              <a href="/security" style={{ color: '#0F0E0D', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Learn more about our security →
              </a>
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 7: CTA ────────────────────────────────────────────────── */}
      <section style={{ background: '#FFFFFF', paddingTop: 96, paddingBottom: 128 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8" style={{ textAlign: 'center' }}>
          <FadeIn>
            <h2
              style={{
                fontSize: 'clamp(32px, 5vw, 72px)',
                fontWeight: 400, color: '#0F0E0D', fontFamily: H,
                lineHeight: 1.05, letterSpacing: '-1px',
                maxWidth: 700, margin: '0 auto',
              }}
            >
              Let&apos;s give your clinic its hours back
            </h2>
            <p style={{
              fontSize: 17, fontWeight: 500, color: '#68655E', fontFamily: I,
              letterSpacing: '-0.3px', lineHeight: 1.6,
              maxWidth: 500, margin: '20px auto 0',
            }}>
              Book a demo and see how A2V2 automates the patient lifecycle for your practice.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, marginTop: 32 }}>
              <a
                href={DEMO_BOOKING_URL}
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 500, color: '#ffffff',
                  background: '#0F0E0D', borderRadius: 999,
                  padding: '11px 28px', textDecoration: 'none', fontFamily: I,
                  transition: 'opacity 150ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.82')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Book a Demo
              </a>
              <a
                href={SIGN_IN_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, fontWeight: 500, color: '#0F0E0D',
                  background: 'transparent', borderRadius: 999,
                  border: '1px solid rgba(0,0,0,0.18)',
                  padding: '11px 28px', textDecoration: 'none', fontFamily: I,
                  transition: 'border-color 150ms',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.4)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(0,0,0,0.18)')}
              >
                Get Started
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <TestHomepage2Footer />
    </div>
  )
}
