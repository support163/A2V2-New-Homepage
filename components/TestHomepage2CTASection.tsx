'use client'

import { useEffect, useRef, useState } from 'react'
import { SIGN_IN_URL, DEMO_BOOKING_URL } from '@/lib/constants'

export default function TestHomepage2CTASection() {
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
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-28 md:py-32">
        <div className="flex flex-col items-center text-center">

          <h2
            className="font-normal leading-[1.05]"
            style={{
              fontSize: 'clamp(32px, 5vw, 60px)',
              color: '#0F0E0D',
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
              maxWidth: 700,
            }}
          >
            Put your patient lifecycle on autopilot
          </h2>

          <p
            style={{
              marginTop: 20,
              fontSize: 16,
              fontWeight: 500,
              color: '#68655E',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-0.3px',
              lineHeight: 1.6,
              maxWidth: 500,
            }}
          >
            See how A2V2 automates intake, follow-ups, refills, and re-engagement for your clinic.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <a
              href={SIGN_IN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm rounded-lg transition-opacity hover:opacity-80 flex items-center justify-center"
              style={{
                background: '#0F0E0D',
                color: '#ffffff',
                padding: '12px 24px',
                textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              Get Started
            </a>
            <a
              href={DEMO_BOOKING_URL}
              className="text-sm rounded-lg transition-opacity hover:opacity-70 flex items-center justify-center"
              style={{
                border: '1px solid #0F0E0D',
                color: '#0F0E0D',
                padding: '12px 24px',
                textDecoration: 'none',
                background: 'transparent',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
              }}
            >
              Book a Demo
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
