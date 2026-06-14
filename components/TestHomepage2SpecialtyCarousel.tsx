'use client'

import Image from 'next/image'
import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const AUTO_ADVANCE_MS  = 4000
const CARD_ACTIVE_W    = 400
const CARD_INACTIVE_W  = 200
const GAP              = 24
const IMAGE_ACTIVE_H   = 520
const IMAGE_INACTIVE_H = 360
const TEXT_OFFSET      = IMAGE_ACTIVE_H + 16   // 536 — fixed Y anchor for text
const COLUMN_ACTIVE_H  = TEXT_OFFSET + 120     // 656 — reserves text space in flow

const SPECIALTIES = [
  {
    label: 'HRT Clinics',
    image: '/images/hrt-clininc1.png',
    title: 'Built for hormone optimization',
    description:
      "Refill scheduling tied to each patient's hormone protocol, dosage check-ins, and automated lab draw reminders.",
  },
  {
    label: 'Longevity Clinics',
    image: '/images/longevity-clinics1.png',
    title: 'Keep patients on protocol',
    description:
      'NAD+ and peptide protocol follow-ups, biomarker tracking, and re-engagement when patients go quiet between visits.',
  },
  {
    label: 'Functional Medicine',
    image: '/images/functional-medicine1.png',
    title: 'Coordinate complex protocols',
    description:
      'Multi-protocol coordination, supplement adherence check-ins, and elimination diet support across every phase.',
  },
  {
    label: 'Weight Loss / GLP-1',
    image: '/images/weight-loss1.png',
    title: 'Support every step',
    description:
      'Injection reminders, side effect check-ins, and progress tracking that keeps patients engaged through the program.',
  },
  {
    label: 'IV / Wellness',
    image: '/images/iv-wellness1.png',
    title: 'Drive repeat visits',
    description:
      'Session reminders, membership renewals, and automated rebooking outreach to keep your schedule full.',
  },
]

export default function TestHomepage2SpecialtyCarousel() {
  const [activeIndex, setActiveIndex]       = useState(2)
  const [showText, setShowText]             = useState(false)
  const [isHovered, setIsHovered]           = useState(false)
  const [containerWidth, setContainerWidth] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)
  const intervalRef  = useRef<ReturnType<typeof setInterval> | null>(null)
  const textTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Measure container width synchronously so there is no layout flash on first paint
  useLayoutEffect(() => {
    const el = containerRef.current
    if (el) setContainerWidth(el.clientWidth)
  }, [])

  // Keep width current on resize
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width))
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Synchronously hide text before the next card animates in
  useLayoutEffect(() => {
    setShowText(false)
  }, [activeIndex])

  // Fade text in after slide + expansion finish (~420 ms)
  useEffect(() => {
    if (textTimerRef.current) clearTimeout(textTimerRef.current)
    textTimerRef.current = setTimeout(() => setShowText(true), 420)
    return () => { if (textTimerRef.current) clearTimeout(textTimerRef.current) }
  }, [activeIndex])

  // Auto-advance — pauses on hover, resets on manual navigation
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (isHovered) return
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SPECIALTIES.length)
    }, AUTO_ADVANCE_MS)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isHovered, activeIndex])

  const goTo   = (i: number) => { if (i !== activeIndex) setActiveIndex(i) }
  const advance = (dir: 1 | -1) =>
    setActiveIndex((p) => (p + dir + SPECIALTIES.length) % SPECIALTIES.length)

  // Translate the track so the active card is horizontally centered in the container.
  // All cards to the LEFT of the active card are CARD_INACTIVE_W wide, so:
  //   leftEdge(active) = activeIndex × (CARD_INACTIVE_W + GAP)
  //   center(active)   = leftEdge + CARD_ACTIVE_W / 2
  //   trackX           = containerWidth / 2 − center(active)
  const trackX = containerWidth > 0
    ? containerWidth / 2 - (activeIndex * (CARD_INACTIVE_W + GAP) + CARD_ACTIVE_W / 2)
    : 0

  const spec = SPECIALTIES[activeIndex]

  const NavRow = () => (
    <div className="mt-8 flex items-center justify-center gap-4">
      <style>{`
        @keyframes pillProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>

      <button
        onClick={() => advance(-1)}
        aria-label="Previous"
        style={{
          width: 42, height: 42, borderRadius: '50%', border: 'none',
          background: 'rgba(0,0,0,0.05)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.05)')}
      >
        <ArrowLeft size={20} color="#0F0E0D" strokeWidth={2.5} />
      </button>

      <div className="flex items-center gap-2">
        {SPECIALTIES.map((_, i) => {
          const isActive = i === activeIndex
          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                position: 'relative',
                width: isActive ? 28 : 6,
                height: 6,
                borderRadius: 999,
                background: isActive ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.2)',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                overflow: 'hidden',
                transition: 'width 300ms ease',
                flexShrink: 0,
              }}
            >
              {isActive && (
                <span
                  key={activeIndex}
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, height: '100%',
                    borderRadius: 999,
                    background: '#0F0E0D',
                    animation: `pillProgress ${AUTO_ADVANCE_MS}ms linear forwards`,
                    animationPlayState: isHovered ? 'paused' : 'running',
                  }}
                />
              )}
            </button>
          )
        })}
      </div>

      <button
        onClick={() => advance(1)}
        aria-label="Next"
        style={{
          width: 42, height: 42, borderRadius: '50%', border: 'none',
          background: 'rgba(0,0,0,0.05)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.05)')}
      >
        <ArrowRight size={20} color="#0F0E0D" strokeWidth={2.5} />
      </button>
    </div>
  )

  return (
    <section className="w-full" style={{ background: '#ffffff', overflow: 'hidden' }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-24">

        {/* Header */}
        <div className="text-center">
          <h2
            className="font-normal leading-[1.05]"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              color: '#0F0E0D',
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Every clinic.<br />Every protocol.
          </h2>
          <p
            className="mt-4 mx-auto leading-relaxed"
            style={{
              fontSize: 16, fontWeight: 500, color: '#68655E', maxWidth: 520,
              fontFamily: "'Inter', sans-serif", letterSpacing: '-0.3px',
            }}
          >
            A2V2 handles the full patient lifecycle across every type of clinic, from intake to long-term retention.
          </p>
        </div>

        <NavRow />

        <div
          className="mt-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {/* Desktop: single sliding track — all cards translate together */}
          <div
            ref={containerRef}
            className="hidden md:block"
            style={{ position: 'relative' }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: GAP,
                transform: `translateX(${trackX}px)`,
                transition: 'transform 450ms ease',
                willChange: 'transform',
              }}
            >
              {SPECIALTIES.map((s, index) => {
                const isActive = index === activeIndex
                return (
                  <div
                    key={s.label}
                    onClick={() => !isActive && goTo(index)}
                    style={{
                      position: 'relative',
                      flexShrink: 0,
                      width: isActive ? CARD_ACTIVE_W : CARD_INACTIVE_W,
                      height: isActive ? COLUMN_ACTIVE_H : IMAGE_INACTIVE_H,
                      transition: 'width 400ms ease',
                      cursor: isActive ? 'default' : 'pointer',
                    }}
                  >
                    {/* Image — height expands/contracts with the active state */}
                    <div
                      style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0,
                        height: isActive ? IMAGE_ACTIVE_H : IMAGE_INACTIVE_H,
                        overflow: 'hidden',
                        transition: 'height 400ms ease',
                      }}
                    >
                      <Image
                        src={s.image}
                        alt={s.label}
                        fill
                        style={{ objectFit: 'cover' }}
                        quality={100}
                        unoptimized
                      />
                      <div
                        style={{
                          position: 'absolute', inset: 0,
                          background: 'linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, transparent 45%)',
                          pointerEvents: 'none',
                        }}
                      />
                      <span
                        style={{
                          position: 'absolute', top: 16, left: 16,
                          fontSize: 13, fontWeight: 500, color: '#ffffff',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {s.label}
                      </span>
                    </div>

                    {/* Text — anchored at TEXT_OFFSET, fades in after slide + expansion */}
                    {isActive && (
                      <div
                        style={{
                          position: 'absolute',
                          top: TEXT_OFFSET,
                          left: 0, right: 0,
                          opacity: showText ? 1 : 0,
                          transform: showText ? 'translateY(0)' : 'translateY(8px)',
                          transition: showText
                            ? 'opacity 300ms ease, transform 300ms ease'
                            : 'none',
                        }}
                      >
                        <h3
                          style={{
                            fontSize: 18, fontWeight: 600, color: '#0F0E0D',
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {s.title}
                        </h3>
                        <p
                          style={{
                            fontSize: 14, color: '#68655E', marginTop: 8,
                            lineHeight: 1.7, fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {s.description}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mobile: single active card with arrows below */}
          <div className="md:hidden w-full">
            <div
              style={{
                position: 'relative', width: '100%', height: 360,
                borderRadius: 0, overflow: 'hidden',
              }}
            >
              <Image
                src={spec.image}
                alt={spec.label}
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                unoptimized
              />
              <div
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, transparent 45%)',
                  pointerEvents: 'none',
                }}
              />
              <span
                style={{
                  position: 'absolute', top: 16, left: 16,
                  fontSize: 13, fontWeight: 500, color: '#ffffff',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {spec.label}
              </span>
            </div>

            <div
              style={{
                marginTop: 16,
                opacity: showText ? 1 : 0,
                transform: showText ? 'translateY(0)' : 'translateY(8px)',
                transition: showText ? 'opacity 300ms ease, transform 300ms ease' : 'none',
              }}
            >
              <h3
                style={{
                  fontSize: 18, fontWeight: 600, color: '#0F0E0D',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {spec.title}
              </h3>
              <p
                style={{
                  fontSize: 14, color: '#68655E', marginTop: 8,
                  lineHeight: 1.7, fontFamily: "'Inter', sans-serif",
                }}
              >
                {spec.description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
