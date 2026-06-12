'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import {
  ShieldCheck,
  LayoutDashboard, Users, MessageSquare, RefreshCw, Activity, AlertTriangle, Settings,
} from 'lucide-react'

const DURATION = 5000

const TABS = [
  { title: 'Intake', description: 'New patients onboarded automatically, with data captured straight into your CRM.' },
  { title: 'Follow-ups', description: 'Protocol-timed check-ins after every visit and treatment.' },
  { title: 'Refills', description: "Refill scheduling tied to each patient's specific protocol." },
  { title: 'Lab reminders', description: 'Automated nudges when labs are due, with prep instructions.' },
  { title: 'Re-engagement', description: 'Outreach when a patient goes quiet between visits, before they drop off.' },
]

type StatusColor = 'green' | 'yellow' | 'red' | 'blue'
type DashboardContent = {
  title: string
  badge: string | null
  rows: { name: string; detail: string; status: string; statusColor: StatusColor }[]
}

const DASHBOARD_CONTENT: DashboardContent[] = [
  {
    title: 'New Patient Intake',
    badge: '6 pending',
    rows: [
      { name: 'James R.', detail: 'HRT consult', status: 'Form completed', statusColor: 'green' },
      { name: 'Maria S.', detail: 'NAD+ inquiry', status: 'Awaiting intake', statusColor: 'yellow' },
      { name: 'David L.', detail: 'Peptide therapy', status: 'Insurance verification', statusColor: 'blue' },
      { name: 'Emma T.', detail: 'Weight loss consult', status: 'Form completed', statusColor: 'green' },
      { name: 'Carlos M.', detail: 'TRT inquiry', status: 'Awaiting intake', statusColor: 'yellow' },
      { name: 'Rachel B.', detail: 'IV therapy', status: 'Insurance verification', statusColor: 'blue' },
    ],
  },
  {
    title: 'Active Follow-up Sequences',
    badge: null,
    rows: [
      { name: 'Sarah J.', detail: 'HRT Week 6', status: 'Check-in sent 2h ago', statusColor: 'green' },
      { name: 'Michael K.', detail: 'NAD+ Day 2', status: 'Symptom check scheduled', statusColor: 'blue' },
      { name: 'Amy L.', detail: 'Peptide Cycle 1', status: 'Follow-up tomorrow', statusColor: 'yellow' },
      { name: 'Daniel P.', detail: 'TRT Week 4', status: 'Check-in sent 1h ago', statusColor: 'green' },
      { name: 'Olivia S.', detail: 'Semaglutide Week 2', status: 'Symptom check scheduled', statusColor: 'blue' },
      { name: 'Nathan K.', detail: 'NAD+ Day 5', status: 'Follow-up tomorrow', statusColor: 'yellow' },
    ],
  },
  {
    title: 'Upcoming Refills',
    badge: null,
    rows: [
      { name: 'Robert T.', detail: 'Testosterone Cypionate', status: 'Due in 3 days', statusColor: 'yellow' },
      { name: 'Jennifer W.', detail: 'Sermorelin', status: 'Due in 5 days', statusColor: 'blue' },
      { name: 'Lisa M.', detail: 'NAD+ protocol', status: 'Refill confirmed', statusColor: 'green' },
      { name: 'Kevin H.', detail: 'Sermorelin', status: 'Due in 2 days', statusColor: 'yellow' },
      { name: 'Megan F.', detail: 'Estradiol', status: 'Due in 6 days — Reminder sent', statusColor: 'blue' },
      { name: 'Andrew L.', detail: 'BPC-157', status: 'Refill confirmed', statusColor: 'green' },
    ],
  },
  {
    title: 'Lab Schedule',
    badge: null,
    rows: [
      { name: 'Mark D.', detail: 'Hormone panel', status: 'Due this week', statusColor: 'yellow' },
      { name: 'Patricia H.', detail: 'Metabolic panel', status: 'Overdue 4 days', statusColor: 'red' },
      { name: 'Steven R.', detail: 'Follow-up labs', status: 'Scheduled Thursday', statusColor: 'blue' },
      { name: 'Laura W.', detail: 'Thyroid panel', status: 'Due this week — Reminder sent', statusColor: 'yellow' },
      { name: 'James C.', detail: 'Lipid panel', status: 'Overdue 2 days', statusColor: 'red' },
      { name: 'Sophia R.', detail: 'Hormone panel', status: 'Scheduled Friday', statusColor: 'blue' },
    ],
  },
  {
    title: 'At-Risk Patients',
    badge: 'alert',
    rows: [
      { name: 'Karen B.', detail: '18 days inactive', status: 'Re-engagement sent', statusColor: 'blue' },
      { name: 'Thomas G.', detail: 'Missed 2 check-ins', status: 'Flagged for outreach', statusColor: 'yellow' },
      { name: 'Nancy P.', detail: '32 days quiet', status: 'Care team alerted', statusColor: 'red' },
      { name: 'Brian D.', detail: '21 days inactive', status: 'Re-engagement sent', statusColor: 'blue' },
      { name: 'Hannah G.', detail: 'Missed 1 check-in', status: 'Flagged for outreach', statusColor: 'yellow' },
      { name: 'Eric P.', detail: '28 days quiet', status: 'Care team alerted', statusColor: 'red' },
    ],
  },
]

const STATUS_STYLES: Record<StatusColor, { bg: string; color: string }> = {
  green:  { bg: 'rgba(34,197,94,0.12)',  color: 'rgb(22,163,74)'  },
  yellow: { bg: 'rgba(234,179,8,0.12)',  color: 'rgb(161,98,7)'   },
  red:    { bg: 'rgba(239,68,68,0.12)',  color: 'rgb(220,38,38)'  },
  blue:   { bg: 'rgba(59,130,246,0.12)', color: 'rgb(37,99,235)'  },
}

// One icon per slot; active index = activeTab + 1 (slot 0 is always Dashboard)
const SIDEBAR_ICONS = [
  LayoutDashboard,
  Users,         // tab 0 Intake
  MessageSquare, // tab 1 Follow-ups
  RefreshCw,     // tab 2 Refills
  Activity,      // tab 3 Lab reminders
  AlertTriangle, // tab 4 Re-engagement
  Settings,
]

export default function TestHomepage2TabsSection() {
  const [activeTab, setActiveTab]     = useState(0)
  const [progress, setProgress]       = useState(0)
  const [sectionVisible, setSectionVisible] = useState(false)
  const [cycleStarted, setCycleStarted]     = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const rafRef     = useRef<number | null>(null)
  const startRef   = useRef<number | null>(null)

  // Observer fires once — starts cycling and fade-in, then disconnects
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true)
          setCycleStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Single rAF loop drives progress bar + advances tab when it hits 100%
  useEffect(() => {
    if (!cycleStarted) return
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    startRef.current = null
    setProgress(0)

    function tick(ts: number) {
      if (startRef.current === null) startRef.current = ts
      const pct = Math.min((ts - startRef.current) / DURATION, 1)
      setProgress(pct * 100)
      if (pct < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setActiveTab((prev) => (prev + 1) % TABS.length)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current) }
  }, [cycleStarted, activeTab])

  const handleTabClick = (index: number) => {
    if (index === activeTab) return
    setActiveTab(index)
  }

  const content = DASHBOARD_CONTENT[activeTab]
  const activeIconIndex = activeTab + 1

  return (
    <section
      ref={sectionRef}
      className="w-full"
      style={{
        background: '#ffffff',
        opacity: sectionVisible ? 1 : 0,
        transform: sectionVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 600ms ease, transform 600ms ease',
      }}
    >
      <style>{`
        @keyframes tab-dash-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 880px) {
          .tabs-dash-outer {
            position: relative;
            left: 50%;
            transform: translateX(-50%);
            width: 100vw;
            height: 363px;
            overflow: hidden;
          }
          .tabs-dash-inner {
            position: absolute;
            width: 700px;
            height: 660px;
            top: 0;
            left: 50%;
            overflow: hidden;
            transform: translateX(-50%) scale(0.55);
            transform-origin: top center;
          }
        }
        @media (min-width: 881px) {
          .tabs-dash-inner { position: relative; overflow: hidden; }
        }
      `}</style>
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-24">

        {/* Two-column layout */}
        <div
          className="flex flex-col md:grid items-start gap-8"
          style={{ gridTemplateColumns: '44% 1fr' }}
        >

          {/* LEFT — Header + tabs */}
          <div>
            <h2
              className="font-normal leading-[1.05]"
              style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                color: '#0F0E0D',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}
            >
              The full patient lifecycle, automated
            </h2>
            <p
              className="mt-4 leading-relaxed"
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: '#68655E',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '-0.3px',
              }}
            >
              From first contact to long-term retention. AI agents handle every touchpoint and escalate to your team for clinical judgment.
            </p>

            <div className="mt-10">
              {TABS.map((tab, index) => {
                const isActive = index === activeTab
                return (
                  <div
                    key={tab.title}
                    onClick={() => handleTabClick(index)}
                    style={{ cursor: 'pointer', paddingBottom: 14, marginBottom: 2 }}
                  >
                    <p
                      style={{
                        fontSize: 17,
                        fontWeight: 500,
                        color: isActive ? '#0F0E0D' : 'rgba(0,0,0,0.32)',
                        fontFamily: "'Inter', sans-serif",
                        transition: 'color 300ms',
                        marginBottom: isActive ? 6 : 0,
                      }}
                    >
                      {tab.title}
                    </p>
                    {isActive && (
                      <p
                        style={{
                          fontSize: 13,
                          color: '#68655E',
                          fontFamily: "'Inter', sans-serif",
                          lineHeight: 1.6,
                          marginBottom: 10,
                          maxWidth: 340,
                        }}
                      >
                        {tab.description}
                      </p>
                    )}
                    {/* Progress bar track */}
                    <div style={{ height: 2, background: 'rgba(0,0,0,0.08)', borderRadius: 2, overflow: 'hidden' }}>
                      <div
                        style={{
                          height: '100%',
                          background: '#0F0E0D',
                          borderRadius: 2,
                          width: isActive ? `${progress}%` : '0%',
                          transition: 'none',
                        }}
                      />
                    </div>
                  </div>
                )
              })}

              {/* Persistent footer */}
              <div className="mt-8 flex items-center gap-2">
                <ShieldCheck size={15} color="#0F0E0D" style={{ flexShrink: 0 }} />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#0F0E0D',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Everything escalates to your team for clinical judgment.
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — large cut-off dashboard on background image */}
          <div className="tabs-dash-outer">
          <div
            className="tabs-dash-inner"
            style={{ height: 660 }}
          >
            <Image
              src="/images/Background-website-3.png"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
              unoptimized
            />

            {/* Large dashboard — anchored top-left, bleeds off right + bottom */}
            <div
              key={activeTab}
              style={{
                position: 'absolute',
                top: 148,
                left: 140,
                right: 0,
                background: '#ffffff',
                borderRadius: '12px 0 0 12px',
                borderTop: '1px solid rgba(0,0,0,0.08)',
                borderLeft: '1px solid rgba(0,0,0,0.08)',
                borderBottom: '1px solid rgba(0,0,0,0.08)',
                borderRight: 'none',
                boxShadow: '0 8px 40px rgba(0,0,0,0.14)',
                overflow: 'hidden',
                display: 'flex',
                animation: 'tab-dash-in 280ms ease forwards',
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

                {SIDEBAR_ICONS.map((Icon, i) => {
                  const isActive = i === activeIconIndex
                  return (
                    <div
                      key={i}
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 7,
                        background: isActive ? '#0F0E0D' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={13} color={isActive ? '#ffffff' : 'rgba(0,0,0,0.32)'} />
                    </div>
                  )
                })}
              </div>

              {/* Main content */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>

                {/* Top bar */}
                <div
                  style={{
                    padding: '13px 16px 12px',
                    borderBottom: '1px solid rgba(0,0,0,0.06)',
                    flexShrink: 0,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: '#0F0E0D',
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {content.title}
                  </span>

                  {content.badge && content.badge !== 'alert' && (
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 500,
                        color: '#0F0E0D',
                        background: 'rgba(0,0,0,0.06)',
                        borderRadius: 999,
                        padding: '2px 7px',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {content.badge}
                    </span>
                  )}

                  {content.badge === 'alert' && (
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 500,
                        color: STATUS_STYLES.red.color,
                        background: STATUS_STYLES.red.bg,
                        borderRadius: 999,
                        padding: '2px 7px',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      Action needed
                    </span>
                  )}
                </div>

                {/* Rows */}
                <div
                  style={{
                    flex: 1,
                    minHeight: 480,
                    padding: '14px 30px 14px 14px',
                    backgroundColor: 'rgba(0,0,0,0.01)',
                  }}
                >
                  {content.rows.map((row, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '10px 0',
                        borderBottom: i < content.rows.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 10,
                      }}
                    >
                      <div style={{ minWidth: 0 }}>
                        <span
                          style={{
                            fontSize: 11,
                            fontWeight: 600,
                            color: '#0F0E0D',
                            fontFamily: "'Inter', sans-serif",
                            display: 'block',
                          }}
                        >
                          {row.name}
                        </span>
                        <span
                          style={{
                            fontSize: 10,
                            color: 'rgba(0,0,0,0.4)',
                            fontFamily: "'Inter', sans-serif",
                            marginTop: 2,
                            display: 'block',
                          }}
                        >
                          {row.detail}
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 500,
                          fontFamily: "'Inter', sans-serif",
                          padding: '2px 8px',
                          borderRadius: 999,
                          whiteSpace: 'nowrap',
                          flexShrink: 0,
                          background: STATUS_STYLES[row.statusColor].bg,
                          color: STATUS_STYLES[row.statusColor].color,
                        }}
                      >
                        {row.status}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
          </div>{/* tabs-dash-outer */}

        </div>
      </div>
    </section>
  )
}
