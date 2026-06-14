'use client'

import Image from 'next/image'
import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const AUTO_ADVANCE_MS = 4000
const IMAGE_ACTIVE_H  = 520
const IMAGE_INACTIVE_H = 360
const TEXT_OFFSET = IMAGE_ACTIVE_H + 16   // 536 — fixed Y for text within column
const COLUMN_ACTIVE_H = TEXT_OFFSET + 120 // 656 — reserves space for text

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
  const [activeIndex, setActiveIndex] = useState(0)
  const [showText, setShowText] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef    = useRef<ReturnType<typeof setInterval> | null>(null)
  const textTimerRef   = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Synchronously hide text before paint so new card never flashes old text
  useLayoutEffect(() => {
    setShowText(false)
  }, [activeIndex])

  // After the card expansion completes (~350ms), fade the text in
  useEffect(() => {
    if (textTimerRef.current) clearTimeout(textTimerRef.current)
    textTimerRef.current = setTimeout(() => setShowText(true), 380)
    return () => {
      if (textTimerRef.current) clearTimeout(textTimerRef.current)
    }
  }, [activeIndex])

  // Auto-advance — resets timer on manual navigation or hover change
  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    if (isHovered) return
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SPECIALTIES.length)
    }, AUTO_ADVANCE_MS)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered, activeIndex])

  const goTo = (index: number) => {
    if (index === activeIndex) return
    setActiveIndex(index)
  }

  const advance = (dir: 1 | -1) => {
    setActiveIndex((prev) => (prev + dir + SPECIALTIES.length) % SPECIALTIES.length)
  }

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
          width: 42, height: 42,
          borderRadius: '50%',
          border: 'none',
          background: 'rgba(0,0,0,0.05)',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
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
          width: 42, height: 42,
          borderRadius: '50%',
          border: 'none',
          background: 'rgba(0,0,0,0.05)',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.08)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.05)')}
      >
        <ArrowRight size={20} color="#0F0E0D" strokeWidth={2.5} />
      </button>
    </div>
  )

  return (
    <section className="w-full" style={{ background: '#ffffff' }}>
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
              fontSize: 16,
              fontWeight: 500,
              color: '#68655E',
              maxWidth: 520,
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-0.3px',
            }}
          >
            A2V2 handles the full patient lifecycle across every type of clinic, from intake to long-term retention.
          </p>
        </div>

        <NavRow />

        {/* Carousel */}
        <div
          className="mt-12"
          style={{ overflow: 'hidden' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          {/* Desktop: 5-card row — fixed gap so cards never shrink or touch */}
          <div className="hidden md:flex items-start justify-center" style={{ gap: 24 }}>
            {SPECIALTIES.map((s, index) => {
              const isActive = index === activeIndex
              return (
                <div
                  key={s.label}
                  onClick={() => !isActive && goTo(index)}
                  style={{
                    // Column wrapper: fixed height reserves space for text so nothing shifts
                    position: 'relative',
                    flexShrink: 0,
                    width: isActive ? 400 : 200,
                    // Jump height instantly — row is always COLUMN_ACTIVE_H because one card is always active
                    height: isActive ? COLUMN_ACTIVE_H : IMAGE_INACTIVE_H,
                    transition: 'width 350ms ease',
                    cursor: isActive ? 'default' : 'pointer',
                  }}
                >
                  {/* Image card — absolutely positioned so text anchor never moves */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0,
                      height: isActive ? IMAGE_ACTIVE_H : IMAGE_INACTIVE_H,
                      borderRadius: 0,
                      overflow: 'hidden',
                      transition: 'height 350ms ease',
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
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, transparent 45%)',
                        pointerEvents: 'none',
                      }}
                    />
                    <span
                      style={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        fontSize: 13,
                        fontWeight: 500,
                        color: '#ffffff',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {s.label}
                    </span>
                  </div>

                  {/* Text — anchored at TEXT_OFFSET, fades in after expansion via showText */}
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        top: TEXT_OFFSET,
                        left: 0,
                        right: 0,
                        opacity: showText ? 1 : 0,
                        transform: showText ? 'translateY(0)' : 'translateY(8px)',
                        transition: showText
                          ? 'opacity 300ms ease, transform 300ms ease'
                          : 'none',
                      }}
                    >
                      <h3
                        style={{
                          fontSize: 18,
                          fontWeight: 600,
                          color: '#0F0E0D',
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {s.title}
                      </h3>
                      <p
                        style={{
                          fontSize: 14,
                          color: '#68655E',
                          marginTop: 8,
                          lineHeight: 1.7,
                          fontFamily: "'Inter', sans-serif",
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

          {/* Mobile: single active card */}
          <div className="md:hidden w-full">
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 360,
                borderRadius: 0,
                overflow: 'hidden',
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
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, transparent 45%)',
                  pointerEvents: 'none',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#ffffff',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {spec.label}
              </span>
            </div>

            {/* Mobile detail */}
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
                  fontSize: 18,
                  fontWeight: 600,
                  color: '#0F0E0D',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {spec.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: '#68655E',
                  marginTop: 8,
                  lineHeight: 1.7,
                  fontFamily: "'Inter', sans-serif",
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
