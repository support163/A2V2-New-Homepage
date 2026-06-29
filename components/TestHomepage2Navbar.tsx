'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { SIGN_IN_URL, DEMO_BOOKING_URL } from '@/lib/constants'

const FEATURES_ITEMS = [
  { title: 'Pay For Access', description: 'Monetize your expertise', href: '/features/pay-for-access' },
]

const SOLUTIONS_ITEMS = [
  { title: 'Custom Dashboard', description: 'A dashboard built for your clinic', href: '/solutions/custom-dashboard' },
]

const plainLinks = [
  { label: 'Security', href: '/security' },
  { label: 'Blog',     href: '/blog' },
]

function DropdownMenu({ items, triggerRef, onClose, onMouseEnter, onMouseLeave }: {
  items: { title: string; description: string; href: string }[]
  triggerRef: React.RefObject<HTMLButtonElement | null>
  onClose: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}) {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null)

  useEffect(() => {
    const el = triggerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    setPos({ top: rect.bottom + 22, left: rect.left + rect.width / 2 })
  }, [triggerRef])

  if (!pos) return null

  return createPortal(
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: 'fixed',
        top: pos.top,
        left: pos.left,
        transform: 'translateX(-50%)',
        zIndex: 9999,
        background: '#0F0E0D',
        borderRadius: 12,
        padding: 8,
        minWidth: 220,
      }}
    >
      {items.map((item) => (
        <a
          key={item.title}
          href={item.href}
          onClick={onClose}
          style={{
            display: 'block',
            padding: '8px 12px',
            borderRadius: 8,
            textDecoration: 'none',
            transition: 'background 150ms',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          <div style={{ fontSize: 13, fontWeight: 500, color: '#ffffff', fontFamily: "'Inter', sans-serif" }}>
            {item.title}
          </div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', sans-serif", marginTop: 2 }}>
            {item.description}
          </div>
        </a>
      ))}
    </div>,
    document.body
  )
}

export default function TestHomepage2Navbar() {
  const [menuOpen,     setMenuOpen]     = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)

  const featuresTriggerRef  = useRef<HTMLButtonElement>(null)
  const solutionsTriggerRef = useRef<HTMLButtonElement>(null)
  const featuresTimerRef    = useRef<ReturnType<typeof setTimeout> | null>(null)
  const solutionsTimerRef   = useRef<ReturnType<typeof setTimeout> | null>(null)

  // ── Features hover handlers ──
  const cancelFeaturesClose = useCallback(() => {
    if (featuresTimerRef.current !== null) { clearTimeout(featuresTimerRef.current); featuresTimerRef.current = null }
  }, [])
  const scheduleFeaturesClose = useCallback(() => {
    cancelFeaturesClose()
    featuresTimerRef.current = setTimeout(() => setFeaturesOpen(false), 180)
  }, [cancelFeaturesClose])
  const openFeatures = useCallback(() => {
    cancelFeaturesClose()
    setSolutionsOpen(false)
    setFeaturesOpen(true)
  }, [cancelFeaturesClose])
  const closeFeaturesNow = useCallback(() => {
    cancelFeaturesClose()
    setFeaturesOpen(false)
  }, [cancelFeaturesClose])

  // ── Solutions hover handlers ──
  const cancelSolutionsClose = useCallback(() => {
    if (solutionsTimerRef.current !== null) { clearTimeout(solutionsTimerRef.current); solutionsTimerRef.current = null }
  }, [])
  const scheduleSolutionsClose = useCallback(() => {
    cancelSolutionsClose()
    solutionsTimerRef.current = setTimeout(() => setSolutionsOpen(false), 180)
  }, [cancelSolutionsClose])
  const openSolutions = useCallback(() => {
    cancelSolutionsClose()
    setFeaturesOpen(false)
    setSolutionsOpen(true)
  }, [cancelSolutionsClose])
  const closeSolutionsNow = useCallback(() => {
    cancelSolutionsClose()
    setSolutionsOpen(false)
  }, [cancelSolutionsClose])

  useEffect(() => () => {
    if (featuresTimerRef.current)  clearTimeout(featuresTimerRef.current)
    if (solutionsTimerRef.current) clearTimeout(solutionsTimerRef.current)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 flex justify-center"
      style={{ paddingTop: 16 }}
    >
      {/* Pill navbar */}
      <nav
        className="w-full flex items-center justify-between rounded-2xl"
        style={{
          maxWidth: 820,
          marginLeft: 24,
          marginRight: 24,
          background: '#0F0E0D',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '10px 20px',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/icons/Logo.svg"
            alt="A2V2"
            width={72}
            height={22}
            style={{ filter: 'brightness(0) invert(1)', height: 22, width: 'auto' }}
          />
        </Link>

        {/* Desktop: center links — Features, Solutions, Security, Blog */}
        <div className="hidden md:flex items-center gap-1">

          {/* Features dropdown trigger */}
          <button
            ref={featuresTriggerRef}
            onMouseEnter={(e) => { openFeatures(); e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
            onMouseLeave={(e) => { scheduleFeaturesClose(); e.currentTarget.style.background = featuresOpen ? 'rgba(255,255,255,0.1)' : 'transparent' }}
            style={{
              display: 'flex', alignItems: 'center', gap: 4,
              fontSize: 14, fontWeight: 500, color: '#ffffff',
              background: featuresOpen ? 'rgba(255,255,255,0.1)' : 'transparent',
              border: 'none', cursor: 'pointer',
              padding: '6px 12px', borderRadius: 8,
              fontFamily: "'Inter', sans-serif",
              transition: 'background 150ms',
            }}
          >
            Features
            <ChevronDown size={13} style={{ transition: 'transform 200ms', transform: featuresOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </button>

          {/* Solutions dropdown trigger */}
          <button
            ref={solutionsTriggerRef}
            onMouseEnter={(e) => { openSolutions(); e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
            onMouseLeave={(e) => { scheduleSolutionsClose(); e.currentTarget.style.background = solutionsOpen ? 'rgba(255,255,255,0.1)' : 'transparent' }}
            style={{
              display: 'flex', alignItems: 'center', gap: 4,
              fontSize: 14, fontWeight: 500, color: '#ffffff',
              background: solutionsOpen ? 'rgba(255,255,255,0.1)' : 'transparent',
              border: 'none', cursor: 'pointer',
              padding: '6px 12px', borderRadius: 8,
              fontFamily: "'Inter', sans-serif",
              transition: 'background 150ms',
            }}
          >
            Solutions
            <ChevronDown size={13} style={{ transition: 'transform 200ms', transform: solutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
          </button>

          {/* Security, Blog */}
          {plainLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 14, fontWeight: 500, color: '#ffffff',
                textDecoration: 'none', fontFamily: "'Inter', sans-serif",
                padding: '6px 12px', borderRadius: 8,
                background: 'transparent', transition: 'background 150ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: CTA buttons (desktop) + hamburger (mobile) */}
        <div className="flex items-center gap-3">
          <a
            href={SIGN_IN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center rounded-lg"
            style={{
              fontSize: 14, fontWeight: 500, color: '#ffffff',
              padding: '7px 16px', textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
              background: 'transparent', transition: 'background 200ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            Sign In
          </a>
          <a
            href={DEMO_BOOKING_URL}
            className="hidden md:flex items-center justify-center rounded-lg transition-colors"
            style={{
              fontSize: 14, fontWeight: 500, color: '#0F0E0D',
              border: 'none', padding: '7px 20px', textDecoration: 'none',
              fontFamily: "'Inter', sans-serif", background: '#ffffff',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#e5e7eb')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#ffffff')}
          >
            Book a Demo
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
          >
            <span style={{ display: 'block', width: 20, height: 2, background: '#ffffff', borderRadius: 2, transition: 'transform 200ms, opacity 200ms', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ display: 'block', width: 20, height: 2, background: '#ffffff', borderRadius: 2, transition: 'opacity 200ms', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', width: 20, height: 2, background: '#ffffff', borderRadius: 2, transition: 'transform 200ms, opacity 200ms', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </nav>

      {/* Features portal dropdown */}
      {featuresOpen && (
        <DropdownMenu
          items={FEATURES_ITEMS}
          triggerRef={featuresTriggerRef}
          onClose={closeFeaturesNow}
          onMouseEnter={cancelFeaturesClose}
          onMouseLeave={scheduleFeaturesClose}
        />
      )}

      {/* Solutions portal dropdown */}
      {solutionsOpen && (
        <DropdownMenu
          items={SOLUTIONS_ITEMS}
          triggerRef={solutionsTriggerRef}
          onClose={closeSolutionsNow}
          onMouseEnter={cancelSolutionsClose}
          onMouseLeave={scheduleSolutionsClose}
        />
      )}

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-6 right-6 rounded-2xl mt-2 flex flex-col"
          style={{ background: '#0F0E0D', padding: '16px 20px', gap: 4 }}
        >
          {/* Features */}
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 8, marginBottom: 4 }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.4)', fontFamily: "'Inter', sans-serif", padding: '4px 4px 8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Features</div>
            {FEATURES_ITEMS.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', fontSize: 15, fontWeight: 500, color: '#ffffff', textDecoration: 'none', fontFamily: "'Inter', sans-serif", padding: '8px 4px' }}
              >
                {item.title}
              </a>
            ))}
          </div>
          {/* Solutions */}
          <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: 8, marginBottom: 4 }}>
            <div style={{ fontSize: 11, fontWeight: 500, color: 'rgba(255,255,255,0.4)', fontFamily: "'Inter', sans-serif", padding: '4px 4px 8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Solutions</div>
            {SOLUTIONS_ITEMS.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{ display: 'block', fontSize: 15, fontWeight: 500, color: '#ffffff', textDecoration: 'none', fontFamily: "'Inter', sans-serif", padding: '8px 4px' }}
              >
                {item.title}
              </a>
            ))}
          </div>
          {/* Security + Blog */}
          {plainLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 15, fontWeight: 500, color: '#ffffff', textDecoration: 'none', fontFamily: "'Inter', sans-serif", padding: '10px 4px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={SIGN_IN_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center rounded-lg mt-3"
            style={{ fontSize: 14, fontWeight: 500, color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)', padding: '10px 20px', textDecoration: 'none', fontFamily: "'Inter', sans-serif", background: 'transparent' }}
          >
            Sign In
          </a>
          <a
            href={DEMO_BOOKING_URL}
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center rounded-lg mt-2"
            style={{ fontSize: 14, fontWeight: 500, color: '#0F0E0D', padding: '10px 20px', textDecoration: 'none', fontFamily: "'Inter', sans-serif", background: '#ffffff' }}
          >
            Book a Demo
          </a>
        </div>
      )}
    </div>
  )
}
