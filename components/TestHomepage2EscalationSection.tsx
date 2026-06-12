'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import {
  Zap, AlertCircle, UserCheck,
  LayoutDashboard, Inbox, BookOpen, BarChart2, Send, Users,
  ArrowRight, Check,
} from 'lucide-react'

const POINTS = [
  {
    Icon: Zap,
    title: 'Automated, not autonomous',
    description: 'The AI handles intake, reminders, refills, and follow-ups.',
  },
  {
    Icon: AlertCircle,
    title: 'Every flag routes to your team',
    description: 'Anything clinical is escalated, never decided by AI.',
  },
  {
    Icon: UserCheck,
    title: 'You stay in control',
    description: 'Your providers make every treatment decision.',
  },
]

const SIDEBAR_ICONS = [
  { Icon: LayoutDashboard, active: false },
  { Icon: Inbox,           active: false },
  { Icon: AlertCircle,     active: true  },
  { Icon: BookOpen,        active: false },
  { Icon: BarChart2,       active: false },
  { Icon: Send,            active: false },
  { Icon: Users,           active: false },
]

const WORKFLOW_STATS = [
  { value: '1,665', label: 'Triggered' },
  { value: '97%',   label: 'Escalated' },
  { value: '1,665', label: 'Resolved'  },
  { value: 'View',  label: 'Path analysis' },
]

export default function TestHomepage2EscalationSection() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{
        background: '#ffffff',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 600ms ease, transform 600ms ease',
      }}
    >
      <style>{`
        @media (max-width: 880px) {
          .esc-dash-outer {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            width: 100vw;
            height: 341px;
            overflow: hidden;
          }
          .esc-dash-inner {
            position: absolute;
            width: 700px;
            height: 620px;
            top: 0;
            left: 50%;
            overflow: hidden;
            transform: translateX(-50%) scale(0.55);
            transform-origin: top center;
          }
        }
        @media (min-width: 881px) {
          .esc-dash-inner { position: relative; overflow: hidden; }
        }
      `}</style>
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-24">
        <div
          className="flex flex-col-reverse md:grid gap-12 items-start"
          style={{ gridTemplateColumns: '55% 1fr' }}
        >

          {/* LEFT — large workflow dashboard bleeding off edges */}
          <div className="esc-dash-outer">
          <div
            className="esc-dash-inner"
            style={{ height: 620 }}
          >
            <Image
              src="/images/Background-website-3.png"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
              unoptimized
            />

            {/* Workflow dashboard card — anchored top-left, bleeds right + bottom */}
            <div
              style={{
                position: 'absolute',
                top: 100,
                left: 120,
                width: 860,
                background: '#ffffff',
                borderRadius: 12,
                border: '1px solid rgba(0,0,0,0.08)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.14)',
                overflow: 'hidden',
                display: 'flex',
              }}
            >

              {/* Icon-only sidebar */}
              <div
                style={{
                  width: 52,
                  flexShrink: 0,
                  borderRight: '1px solid rgba(0,0,0,0.06)',
                  background: 'rgba(0,0,0,0.02)',
                  padding: '16px 0',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                {/* Favicon */}
                <div style={{ marginBottom: 12 }}>
                  <Image
                    src="/favicon.svg"
                    alt="A2V2"
                    width={22}
                    height={22}
                    style={{ width: 22, height: 22 }}
                  />
                </div>

                {SIDEBAR_ICONS.map(({ Icon, active }, i) => (
                  <div
                    key={i}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 7,
                      background: active ? '#0F0E0D' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={13} color={active ? '#ffffff' : 'rgba(0,0,0,0.32)'} />
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>

                {/* Top bar */}
                <div
                  style={{
                    padding: '13px 16px 10px',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                    flexShrink: 0,
                  }}
                >
                  {/* Title + Live badge */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: '#0F0E0D',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Patient escalation workflow
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 500,
                        color: '#16a34a',
                        background: 'rgba(34,197,94,0.12)',
                        borderRadius: 999,
                        padding: '2px 7px',
                        fontFamily: "'Inter', sans-serif",
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          background: '#22c55e',
                          display: 'inline-block',
                        }}
                      />
                      Live
                    </span>
                  </div>

                  {/* Stats row */}
                  <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
                    {WORKFLOW_STATS.map(({ value, label }, i) => (
                      <div
                        key={label}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          paddingRight: i < WORKFLOW_STATS.length - 1 ? 18 : 0,
                          borderRight:
                            i < WORKFLOW_STATS.length - 1
                              ? '1px solid rgba(0,0,0,0.07)'
                              : 'none',
                        }}
                      >
                        <span
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: '#0F0E0D',
                            fontFamily: "'Inter', sans-serif",
                            lineHeight: 1.2,
                          }}
                        >
                          {value}
                        </span>
                        <span
                          style={{
                            fontSize: 10,
                            color: 'rgba(0,0,0,0.38)',
                            fontFamily: "'Inter', sans-serif",
                            marginTop: 1,
                          }}
                        >
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Escalation list */}
                <div
                  style={{
                    flex: 1,
                    minHeight: 490,
                    padding: '14px',
                    backgroundColor: 'rgba(0,0,0,0.01)',
                  }}
                >

                  {/* Title bar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: '#0F0E0D',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Escalations
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 500,
                        color: '#E05A2B',
                        background: 'rgba(224,90,43,0.10)',
                        borderRadius: 999,
                        padding: '2px 7px',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      2 new
                    </span>
                  </div>

                  {/* Escalation 1 — urgent */}
                  <div
                    style={{
                      borderLeft: '3px solid #E05A2B',
                      background: 'rgba(224,90,43,0.05)',
                      borderRadius: '0 6px 6px 0',
                      padding: '10px',
                      marginBottom: 8,
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: '#0F0E0D',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Sarah J.
                      </span>
                      <span
                        style={{
                          fontSize: 10,
                          color: 'rgba(0,0,0,0.35)',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        2 min ago
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 11,
                        color: '#0F0E0D',
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: 1.45,
                        margin: '0 0 6px',
                      }}
                    >
                      Patient reported chest pressure and shortness of breath
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <ArrowRight size={10} color="#E05A2B" />
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 500,
                          color: '#E05A2B',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Escalated to Dr. Martinez
                      </span>
                    </div>
                  </div>

                  {/* Escalation 2 — less urgent */}
                  <div
                    style={{
                      border: '1px solid rgba(0,0,0,0.06)',
                      borderRadius: 6,
                      padding: '10px',
                      marginBottom: 8,
                      background: '#ffffff',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          color: '#0F0E0D',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Michael K.
                      </span>
                      <span
                        style={{
                          fontSize: 10,
                          color: 'rgba(0,0,0,0.35)',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        18 min ago
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 11,
                        color: '#0F0E0D',
                        fontFamily: "'Inter', sans-serif",
                        lineHeight: 1.45,
                        margin: '0 0 6px',
                      }}
                    >
                      Asked about adjusting medication dosage
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <ArrowRight size={10} color="rgba(0,0,0,0.35)" />
                      <span
                        style={{
                          fontSize: 10,
                          color: 'rgba(0,0,0,0.35)',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        Escalated to care team
                      </span>
                    </div>
                  </div>

                  {/* Handled automatically */}
                  <div
                    style={{
                      marginTop: 14,
                      paddingTop: 12,
                      borderTop: '1px solid rgba(0,0,0,0.05)',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontSize: 10,
                        fontWeight: 500,
                        color: 'rgba(0,0,0,0.28)',
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase',
                        marginBottom: 8,
                      }}
                    >
                      Handled automatically
                    </span>
                    {['Amy L. — Appointment reminder sent', 'Robert T. — Refill scheduled'].map((item) => (
                      <div
                        key={item}
                        style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}
                      >
                        <Check size={10} color="rgba(0,0,0,0.28)" style={{ flexShrink: 0 }} />
                        <span
                          style={{
                            fontSize: 10,
                            color: 'rgba(0,0,0,0.28)',
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
          </div>{/* esc-dash-outer */}

          {/* RIGHT — header + supporting points */}
          <div>
            <h2
              className="font-normal leading-[1.05]"
              style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                color: '#0F0E0D',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              AI does the work. Your team makes the calls.
            </h2>
            <p
              className="leading-relaxed"
              style={{
                marginTop: 20,
                fontSize: 16,
                fontWeight: 500,
                color: '#68655E',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '-0.3px',
              }}
            >
              A2V2 automates the routine communication that fills your team&apos;s day. The moment
              anything needs clinical judgment, it escalates to your staff with full context.
            </p>

            <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
              {POINTS.map(({ Icon, title, description }) => (
                <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <Icon size={18} color="#0F0E0D" style={{ flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#0F0E0D',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {title}
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        color: '#68655E',
                        fontFamily: "'Inter', sans-serif",
                        marginTop: 3,
                        lineHeight: 1.5,
                      }}
                    >
                      {description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
