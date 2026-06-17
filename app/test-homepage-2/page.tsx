'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import TestHomepage2HeroDashboard from '@/components/TestHomepage2HeroDashboard'
import TestHomepage2TabsSection from '@/components/TestHomepage2TabsSection'
import TestHomepage2SpecialtyCarousel from '@/components/TestHomepage2SpecialtyCarousel'
import TestHomepage2ChatSection from '@/components/TestHomepage2ChatSection'
import TestHomepage2EscalationSection from '@/components/TestHomepage2EscalationSection'
import TestHomepage2SecuritySection from '@/components/TestHomepage2SecuritySection'
import TestHomepage2CTASection from '@/components/TestHomepage2CTASection'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import { SIGN_IN_URL, DEMO_BOOKING_URL } from '@/lib/constants'

const STATS = [
  { target: 50, prefix: '', suffix: '%', sub: 'of patients on long-term treatments drop off within the first year' },
  { target: 150, prefix: '$', suffix: 'B', sub: 'lost annually to missed appointments across US healthcare' },
  { target: 6, prefix: '', suffix: ' months', sub: 'the point where treatment adherence declines dramatically' },
]

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)

    if (!triggered) {
      setCount(0)
      return
    }

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

function StatItem({ stat, triggered }: { stat: typeof STATS[number]; triggered: boolean }) {
  const count = useCountUp(stat.target, 1800, triggered)
  return (
    <div className="flex flex-col">
      <span
        className="leading-tight tracking-tight"
        style={{
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 300,
          color: '#0F0E0D',
          fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        }}
      >
        {stat.prefix}{count}{stat.suffix}
      </span>
      <span
        className="leading-relaxed mt-3"
        style={{
          fontSize: 14,
          fontWeight: 500,
          color: '#68655E',
          maxWidth: 200,
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {stat.sub}
      </span>
    </div>
  )
}

export default function TestHomepage2() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { setTriggered(entry.isIntersecting) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <main style={{ background: '#ffffff', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>

      {/* Hero Section */}
      <section className="w-full">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 pt-32 md:pt-36 pb-20 md:pb-28">

          {/* Top row — headline left, subtitle + buttons right (desktop) / stacked (mobile) */}
          <div
            className="flex flex-col md:grid gap-8 md:gap-10 items-start"
            style={{
              gridTemplateColumns: 'clamp(0px, 55%, 9999px) 1fr',
            }}
          >
            {/* LEFT — H1 */}
            <h1
              className="font-normal tracking-tight leading-[1.05]"
              style={{
                fontSize: 'clamp(26px, 5vw, 60px)',
                color: '#0F0E0D',
                maxWidth: 700,
              }}
            >
              Patient lifecycle automation for modern clinics
            </h1>

            {/* RIGHT — Subtitle + buttons */}
            <div className="pt-0 md:pt-2 pl-0 md:pl-32">
              <p
                className="leading-relaxed"
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: '#68655E',
                  maxWidth: 560,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '-0.3px',
                }}
              >
                HIPAA-compliant AI agents that manage the full patient lifecycle for your clinic. Everything escalates to your team for clinical judgment.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={SIGN_IN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm rounded-lg transition-opacity hover:opacity-80 flex items-center justify-center text-center"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm rounded-lg transition-opacity hover:opacity-70 flex items-center justify-center text-center"
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

          {/*
            Background + Dashboard — scaled together as one visual unit on mobile.
            .bg-dash-outer: full-bleed wrapper that reserves the scaled height in the flow.
            .bg-dash-inner: the 920px fixed-width unit (image + padding + dashboard) that
                            gets scaled down uniformly on mobile via transform: scale().
          */}
          <style>{`
            @media (max-width: 880px) {
              .bg-dash-outer {
                position: relative;
                left: 50%;
                transform: translateX(-50%);
                width: 100vw;
                height: 350px;
                overflow: hidden;
                margin-top: 48px;
              }
              .bg-dash-inner {
                position: absolute;
                width: 920px;
                top: 0;
                left: 50%;
                overflow: hidden;
                transform: translateX(-50%) scale(0.42);
                transform-origin: top center;
              }
            }
            @media (min-width: 881px) {
              .bg-dash-outer { margin-top: 64px; }
              .bg-dash-inner { position: relative; width: 100%; overflow: hidden; }
            }
          `}</style>
          <div className="bg-dash-outer">
            <div className="bg-dash-inner px-10 py-32">
              <Image
                src="/images/Background-website-3.png"
                alt=""
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                unoptimized
                priority
              />
              <div className="relative w-full mx-auto max-w-[920px] origin-center md:scale-[1.17]">
                <TestHomepage2HeroDashboard />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full" style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-24">
          <div
            className="flex flex-col md:grid items-start gap-12"
            style={{ gridTemplateColumns: '30% 1fr' }}
          >

            {/* LEFT — header */}
            <div>
              <h2
                className="font-normal leading-[1.05]"
                style={{
                  fontSize: 'clamp(28px, 4vw, 48px)',
                  color: '#0F0E0D',
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                The cost of silence between visits
              </h2>
            </div>

            {/* RIGHT — stats */}
            <div ref={statsRef} className="flex flex-col md:flex-row md:justify-end gap-12 md:gap-10">
              {STATS.map((stat) => (
                <StatItem key={stat.suffix} stat={stat} triggered={triggered} />
              ))}
            </div>

          </div>
        </div>
      </section>

      <TestHomepage2TabsSection />

      <TestHomepage2SpecialtyCarousel />

      <TestHomepage2ChatSection />

      <TestHomepage2EscalationSection />

      <TestHomepage2SecuritySection />

      <TestHomepage2CTASection />

      <TestHomepage2Footer />
    </main>
  )
}
