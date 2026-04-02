'use client'

import { useEffect, useRef } from 'react'

function AnimatedNumber({
  target,
  format,
  duration = 2000,
}: {
  target: number
  format: (n: number) => string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.textContent = format(0)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const update = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = format(eased * target)
            if (progress < 1) requestAnimationFrame(update)
            else el.textContent = format(target)
          }
          requestAnimationFrame(update)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, format, duration])

  return <span ref={ref} />
}

export default function StatsRow() {
  return (
    <section
      style={{ background: '#0F0E0D' }}
      className="py-12"
    >
      <div className="mx-auto max-w-[900px] px-6">
        <div
          className="flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >

          {/* 2 Product Lines */}
          <div data-animate="" className="flex-1 text-center py-8 md:py-4">
            <div className="text-3xl font-semibold text-white">
              <AnimatedNumber target={2} format={(n) => String(Math.floor(n))} />
            </div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Product Lines</div>
          </div>

          {/* 24/7 — static */}
          <div
            data-animate=""
            className="flex-1 text-center py-8 md:py-4"
            style={{ transitionDelay: '80ms' }}
          >
            <div className="text-3xl font-semibold text-white">24/7</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>AI Engagement</div>
          </div>

          {/* less than 2 Weeks — static */}
          <div
            data-animate=""
            className="flex-1 text-center py-8 md:py-4"
            style={{ transitionDelay: '160ms' }}
          >
            <div className="text-3xl font-semibold text-white">&lt;2 Weeks</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Implementation</div>
          </div>

          {/* 99.9% — animated */}
          <div
            data-animate=""
            className="flex-1 text-center py-8 md:py-4"
            style={{ transitionDelay: '240ms' }}
          >
            <div className="text-3xl font-semibold text-white">
              <AnimatedNumber target={99.9} format={(n) => `${n.toFixed(1)}%`} />
            </div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Uptime SLA</div>
          </div>

        </div>
      </div>
    </section>
  )
}
