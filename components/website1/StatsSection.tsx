'use client'

import { useState, useEffect, useRef } from 'react'
import { HELV, INK, MUTED, INTER } from './ui'

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
      const progress = Math.min((now - start) / duration, 1)
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current !== null) cancelAnimationFrame(rafRef.current) }
  }, [triggered, target, duration])

  return count
}

function StatItem({ stat, triggered }: { stat: (typeof STATS)[number]; triggered: boolean }) {
  const count = useCountUp(stat.target, 1800, triggered)
  return (
    <div className="flex flex-col">
      <span className="leading-tight tracking-tight" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300, color: INK, fontFamily: HELV }}>
        {stat.prefix}{count}{stat.suffix}
      </span>
      <span className="leading-relaxed mt-3" style={{ fontSize: 14, fontWeight: 500, color: MUTED, maxWidth: 200, fontFamily: INTER }}>
        {stat.sub}
      </span>
    </div>
  )
}

export default function StatsSection() {
  const statsRef = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setTriggered(entry.isIntersecting), { threshold: 0.3 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="w-full" style={{ background: '#fff' }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-28">
        <div className="flex flex-col md:grid items-start gap-12" style={{ gridTemplateColumns: '30% 1fr' }}>
          <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: INK, fontFamily: HELV }}>
            The cost of silence between visits
          </h2>
          <div ref={statsRef} className="flex flex-col md:flex-row md:justify-end gap-12 md:gap-10">
            {STATS.map((stat) => (
              <StatItem key={stat.suffix} stat={stat} triggered={triggered} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
