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

export default function StatsRow() {
  return (
    <section className="bg-white border-y border-gray-100 py-16">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-0">

          {/* $4.99 */}
          <div className="flex-1 text-center md:border-r md:border-gray-200">
            <div
              data-animate=""
              className="text-[48px] md:text-[56px] font-bold text-gray-900 leading-none"
            >
              <AnimatedNumber
                target={4.99}
                format={(n) => `$${n.toFixed(2)}`}
              />
            </div>
            <div className="text-sm text-gray-500 mt-3 uppercase tracking-wider">
              per session
            </div>
          </div>

          {/* 15 min */}
          <div className="flex-1 text-center md:border-r md:border-gray-200">
            <div
              data-animate=""
              className="text-[48px] md:text-[56px] font-bold text-gray-900 leading-none"
              style={{ transitionDelay: '100ms' }}
            >
              <AnimatedNumber
                target={15}
                format={(n) => `${Math.floor(n)} min`}
              />
            </div>
            <div className="text-sm text-gray-500 mt-3 uppercase tracking-wider">
              setup time
            </div>
          </div>

          {/* 24/7 — fade in only */}
          <div
            data-animate=""
            className="flex-1 text-center"
            style={{ transitionDelay: '200ms' }}
          >
            <div className="text-[48px] md:text-[56px] font-bold text-gray-900 leading-none">
              24/7
            </div>
            <div className="text-sm text-gray-500 mt-3 uppercase tracking-wider">
              AI availability
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
