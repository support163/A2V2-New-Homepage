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
            if (progress < 1) {
              requestAnimationFrame(update)
            } else {
              el.textContent = format(target)
            }
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

const trustItems = [
  'HIPAA Compliant',
  'ITAR Compliant',
  'PHI Never Shared',
  'Private LLM Deployment',
]

export default function StatsRow() {
  return (
    <section className="bg-white border-y border-gray-100 py-16">
      <div className="mx-auto max-w-[900px] px-6">

        {/* Stats */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-0">

          {/* 100% */}
          <div className="flex-1 text-center md:border-r md:border-gray-200">
            <div data-animate="" className="text-[48px] md:text-[56px] font-bold text-gray-900 leading-none">
              <AnimatedNumber target={100} format={(n) => `${Math.floor(n)}%`} />
            </div>
            <div className="text-sm text-gray-500 mt-3 uppercase tracking-wider">HIPAA Compliant</div>
          </div>

          {/* <2 Weeks */}
          <div
            data-animate=""
            className="flex-1 text-center md:border-r md:border-gray-200"
            style={{ transitionDelay: '80ms' }}
          >
            <div className="text-[48px] md:text-[56px] font-bold text-gray-900 leading-none">
              &lt;2 Wks
            </div>
            <div className="text-sm text-gray-500 mt-3 uppercase tracking-wider">Implementation</div>
          </div>

          {/* 24/7 */}
          <div
            data-animate=""
            className="flex-1 text-center md:border-r md:border-gray-200"
            style={{ transitionDelay: '160ms' }}
          >
            <div className="text-[48px] md:text-[56px] font-bold text-gray-900 leading-none">
              24/7
            </div>
            <div className="text-sm text-gray-500 mt-3 uppercase tracking-wider">Patient Engagement</div>
          </div>

          {/* 99.9% */}
          <div
            data-animate=""
            className="flex-1 text-center"
            style={{ transitionDelay: '240ms' }}
          >
            <div className="text-[48px] md:text-[56px] font-bold text-gray-900 leading-none">
              <AnimatedNumber target={99.9} format={(n) => `${n.toFixed(1)}%`} />
            </div>
            <div className="text-sm text-gray-500 mt-3 uppercase tracking-wider">Uptime SLA</div>
          </div>

        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-gray-500">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                <circle cx="8" cy="8" r="8" fill="#2563EB" />
                <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
