'use client'

import { useEffect, useRef, useState } from 'react'

const ITEMS = [
  {
    title: 'HIPAA Compliant',
    description: 'Built for healthcare from day one. BAA provided on every plan, with full audit trails.',
    badge: 'HIPAA',
  },
  {
    title: 'AES-256 Encryption',
    description: 'All data encrypted at rest and in transit using industry-standard AES-256 and TLS 1.3.',
    badge: 'AES-256',
  },
  {
    title: 'Secured LLM Access',
    description: 'AI runs under a Business Associate Agreement. Your data is never used to train models.',
    badge: 'BAA',
  },
  {
    title: 'U.S. Data Centers',
    description: 'All patient data is stored in U.S.-based data centers with complete access controls.',
    badge: 'U.S.',
  },
]

function BadgeSVG({ label }: { label: string }) {
  const r = 34          // circle radius
  const cx = 35
  const cy = 35
  const ringR = 29      // solid thin ring
  const arcR = 25       // segmented arc ring (inner)
  const arcCirc = 2 * Math.PI * arcR
  const arcLen = arcCirc * 0.22
  const gapLen = arcCirc * 0.03

  return (
    <svg width={70} height={70} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={cx} cy={cy} r={r} fill="#0F0E0D" />
      <circle cx={cx} cy={cy} r={ringR} stroke="rgba(255,255,255,0.35)" strokeWidth={1} fill="none" />
      <circle
        cx={cx} cy={cy} r={arcR}
        stroke="rgba(255,255,255,0.55)"
        strokeWidth={1}
        fill="none"
        strokeDasharray={`${arcLen} ${gapLen}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`}
      />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#ffffff"
        fontSize={label.length > 4 ? 10 : 11}
        fontWeight={500}
        fontFamily="'Inter', sans-serif"
        letterSpacing="0.5"
      >
        {label}
      </text>
    </svg>
  )
}

export default function TestHomepage2SecuritySection() {
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
        @media (min-width: 880px) {
          .sec-top-row {
            flex-direction: row !important;
            align-items: flex-start !important;
            gap: 0 !important;
          }
          .sec-top-row .sec-left { width: 50%; }
          .sec-top-row .sec-right { width: 50%; display: flex; justify-content: flex-end; }
          .sec-items-row {
            flex-direction: row !important;
          }
          .sec-item {
            border-right: 1px solid rgba(0,0,0,0.08) !important;
            border-bottom: none !important;
          }
          .sec-item:last-child {
            border-right: none !important;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-24">

        {/* Top row — header left, subtitle right */}
        <div
          className="sec-top-row"
          style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}
        >
          <div className="sec-left">
            <h2
              className="font-normal leading-[1.05]"
              style={{
                fontSize: 'clamp(28px, 4vw, 48px)',
                color: '#0F0E0D',
                fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                maxWidth: 650,
              }}
            >
              Security is the foundation, not a feature
            </h2>
          </div>

          <div className="sec-right">
            <p
              style={{
                fontSize: 16,
                fontWeight: 500,
                color: '#68655E',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '-0.3px',
                lineHeight: 1.6,
                maxWidth: 600,
              }}
            >
              Every plan includes HIPAA compliance, a Business Associate Agreement, and end-to-end
              encryption. Your patient data is protected at every layer and never used to train AI models.
            </p>
          </div>
        </div>

        {/* Connected row — top + bottom border, vertical dividers between columns */}
        <div
          className="sec-items-row mt-16"
          style={{
            display: 'flex',
            flexDirection: 'column',
            border: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          {ITEMS.map(({ title, description, badge }, i) => (
            <div
              key={title}
              className="sec-item"
              style={{
                flex: 1,
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                borderBottom: i < ITEMS.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
              }}
            >
              <BadgeSVG label={badge} />
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#0F0E0D',
                  fontFamily: "'Inter', sans-serif",
                  marginTop: 20,
                }}
              >
                {title}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: '#68655E',
                  fontFamily: "'Inter', sans-serif",
                  marginTop: 8,
                  lineHeight: 1.6,
                }}
              >
                {description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
