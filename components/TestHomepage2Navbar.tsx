'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, FormInput, Users, Bot, DollarSign, LayoutDashboard, BookOpen, FileText } from 'lucide-react'
import { SIGN_IN_URL, DEMO_BOOKING_URL } from '@/lib/constants'

const FEATURES_ITEMS = [
  { title: 'Patient Intake',  description: 'AI intake and file extraction',    href: '/features/patient-intake', Icon: FormInput   },
  { title: 'Patient CRM',     description: 'Records, trends, automations',       href: '/features/patient-crm',    Icon: Users       },
  { title: 'AI Agents',       description: 'Custom agents, your knowledge',    href: '/features/ai-agents',      Icon: Bot         },
  { title: 'Pay For Access',  description: 'Monetize your expertise, safely',  href: '/features/pay-for-access', Icon: DollarSign  },
]

const SOLUTIONS_ITEMS = [
  { title: 'Custom Dashboard', description: 'Built for your clinic',      href: '/solutions/custom-dashboard',       Icon: LayoutDashboard },
]

const RESOURCES_ITEMS = [
  { title: 'Blog', description: 'Updates, guides, best practices', href: '/blog',                             external: false, Icon: BookOpen  },
  { title: 'Docs', description: 'Product documentation',           href: 'https://docs.a2v2.ai/introduction',  external: true,  Icon: FileText  },
]

const plainLinkStyle = {
  fontSize: 14, fontWeight: 500, color: '#0F0E0D',
  textDecoration: 'none', fontFamily: "'Inter', sans-serif",
  padding: '6px 12px', borderRadius: 8,
  background: 'transparent', transition: 'background 150ms',
  display: 'inline-block',
} as const

function DropdownMenu({ items, triggerRef, onClose, onMouseEnter, onMouseLeave }: {
  items: { title: string; description: string; href: string; external?: boolean; Icon: React.ComponentType<{ size?: number; color?: string }> }[]
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
    setPos({ top: rect.bottom + 8, left: rect.left + rect.width / 2 })
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
        background: '#F5F5F5',
        borderRadius: 12,
        padding: 12,
        minWidth: 260,
      }}
    >
      {items.map(({ title, description, href, external, Icon }) => (
        <a
          key={title}
          href={href}
          onClick={onClose}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          style={{
            display: 'flex', alignItems: 'flex-start', gap: 12,
            padding: '10px 12px', borderRadius: 10,
            textDecoration: 'none', transition: 'background 150ms',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
        >
          <div style={{
            width: 38, height: 38, borderRadius: 9, flexShrink: 0,
            background: 'rgba(0,0,0,0.06)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Icon size={17} color="#0F0E0D" />
          </div>
          <div style={{ paddingTop: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0F0E0D', fontFamily: "'Inter', sans-serif", letterSpacing: '-0.1px', marginBottom: 3 }}>
              {title}
            </div>
            <div style={{ fontSize: 12, color: '#68655E', fontFamily: "'Inter', sans-serif", lineHeight: 1.45, whiteSpace: 'nowrap' }}>
              {description}
            </div>
          </div>
        </a>
      ))}
    </div>,
    document.body
  )
}

function FeaturesDropdownMenu({ triggerRef, onClose, onMouseEnter, onMouseLeave }: {
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
    setPos({ top: rect.bottom + 8, left: rect.left + rect.width / 2 })
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
        background: '#F5F5F5',
        borderRadius: 12,
        padding: 12,
        width: 560,
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
        {FEATURES_ITEMS.map(({ title, description, href, Icon }) => (
          <a
            key={title}
            href={href}
            onClick={onClose}
            style={{
              display: 'flex', alignItems: 'flex-start', gap: 12,
              padding: '10px 12px', borderRadius: 10,
              textDecoration: 'none', transition: 'background 150ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <div style={{
              width: 38, height: 38, borderRadius: 9, flexShrink: 0,
              background: 'rgba(0,0,0,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={17} color="#0F0E0D" />
            </div>
            <div style={{ paddingTop: 1 }}>
              <div style={{
                fontSize: 13, fontWeight: 600, color: '#0F0E0D',
                fontFamily: "'Inter', sans-serif", letterSpacing: '-0.1px',
                marginBottom: 3,
              }}>
                {title}
              </div>
              <div style={{ fontSize: 12, color: '#68655E', fontFamily: "'Inter', sans-serif", lineHeight: 1.45 }}>
                {description}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>,
    document.body
  )
}

export default function TestHomepage2Navbar() {
  const [menuOpen,       setMenuOpen]       = useState(false)
  const [featuresOpen,   setFeaturesOpen]   = useState(false)
  const [solutionsOpen,  setSolutionsOpen]  = useState(false)
  const [resourcesOpen,  setResourcesOpen]  = useState(false)

  const featuresTriggerRef  = useRef<HTMLButtonElement>(null)
  const solutionsTriggerRef = useRef<HTMLButtonElement>(null)
  const resourcesTriggerRef = useRef<HTMLButtonElement>(null)
  const featuresTimerRef    = useRef<ReturnType<typeof setTimeout> | null>(null)
  const solutionsTimerRef   = useRef<ReturnType<typeof setTimeout> | null>(null)
  const resourcesTimerRef   = useRef<ReturnType<typeof setTimeout> | null>(null)

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
    setResourcesOpen(false)
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
    setResourcesOpen(false)
    setSolutionsOpen(true)
  }, [cancelSolutionsClose])
  const closeSolutionsNow = useCallback(() => {
    cancelSolutionsClose()
    setSolutionsOpen(false)
  }, [cancelSolutionsClose])

  // ── Resources hover handlers ──
  const cancelResourcesClose = useCallback(() => {
    if (resourcesTimerRef.current !== null) { clearTimeout(resourcesTimerRef.current); resourcesTimerRef.current = null }
  }, [])
  const scheduleResourcesClose = useCallback(() => {
    cancelResourcesClose()
    resourcesTimerRef.current = setTimeout(() => setResourcesOpen(false), 180)
  }, [cancelResourcesClose])
  const openResources = useCallback(() => {
    cancelResourcesClose()
    setFeaturesOpen(false)
    setSolutionsOpen(false)
    setResourcesOpen(true)
  }, [cancelResourcesClose])
  const closeResourcesNow = useCallback(() => {
    cancelResourcesClose()
    setResourcesOpen(false)
  }, [cancelResourcesClose])

  useEffect(() => () => {
    if (featuresTimerRef.current)  clearTimeout(featuresTimerRef.current)
    if (solutionsTimerRef.current) clearTimeout(solutionsTimerRef.current)
    if (resourcesTimerRef.current) clearTimeout(resourcesTimerRef.current)
  }, [])

  return (
    <>
      {/* Full-width fixed white navbar */}
      <div
        className="fixed top-0 left-0 right-0 z-50"
        style={{ background: '#FFFFFF' }}
      >
        <div
          className="mx-auto max-w-[1400px] px-6 md:px-8 flex items-center justify-between"
          style={{ height: 64 }}
        >

          {/* Logo — dark (no filter) */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/icons/Logo.svg"
              alt="A2V2"
              width={90}
              height={28}
              style={{ height: 28, width: 'auto' }}
            />
          </Link>

          {/* Desktop: center links — Features, Solutions, Security, Resources, About */}
          <div className="hidden md:flex items-center gap-1">

            {/* Features dropdown trigger */}
            <button
              ref={featuresTriggerRef}
              onMouseEnter={(e) => { openFeatures(); e.currentTarget.style.background = 'rgba(0,0,0,0.04)' }}
              onMouseLeave={(e) => { scheduleFeaturesClose(); e.currentTarget.style.background = featuresOpen ? 'rgba(0,0,0,0.04)' : 'transparent' }}
              style={{
                display: 'flex', alignItems: 'center', gap: 4,
                fontSize: 14, fontWeight: 500, color: '#0F0E0D',
                background: featuresOpen ? 'rgba(0,0,0,0.04)' : 'transparent',
                border: 'none', cursor: 'pointer',
                padding: '6px 12px', borderRadius: 8,
                fontFamily: "'Inter', sans-serif",
                transition: 'background 150ms',
              }}
            >
              Features
              <ChevronDown
                size={13}
                color="#0F0E0D"
                style={{ transition: 'transform 200ms', transform: featuresOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>

            {/* Solutions dropdown trigger */}
            <button
              ref={solutionsTriggerRef}
              onMouseEnter={(e) => { openSolutions(); e.currentTarget.style.background = 'rgba(0,0,0,0.04)' }}
              onMouseLeave={(e) => { scheduleSolutionsClose(); e.currentTarget.style.background = solutionsOpen ? 'rgba(0,0,0,0.04)' : 'transparent' }}
              style={{
                display: 'flex', alignItems: 'center', gap: 4,
                fontSize: 14, fontWeight: 500, color: '#0F0E0D',
                background: solutionsOpen ? 'rgba(0,0,0,0.04)' : 'transparent',
                border: 'none', cursor: 'pointer',
                padding: '6px 12px', borderRadius: 8,
                fontFamily: "'Inter', sans-serif",
                transition: 'background 150ms',
              }}
            >
              Solutions
              <ChevronDown
                size={13}
                color="#0F0E0D"
                style={{ transition: 'transform 200ms', transform: solutionsOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>

            {/* Security — plain link */}
            <a
              href="/security"
              style={plainLinkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              Security
            </a>

            {/* Resources dropdown trigger */}
            <button
              ref={resourcesTriggerRef}
              onMouseEnter={(e) => { openResources(); e.currentTarget.style.background = 'rgba(0,0,0,0.04)' }}
              onMouseLeave={(e) => { scheduleResourcesClose(); e.currentTarget.style.background = resourcesOpen ? 'rgba(0,0,0,0.04)' : 'transparent' }}
              style={{
                display: 'flex', alignItems: 'center', gap: 4,
                fontSize: 14, fontWeight: 500, color: '#0F0E0D',
                background: resourcesOpen ? 'rgba(0,0,0,0.04)' : 'transparent',
                border: 'none', cursor: 'pointer',
                padding: '6px 12px', borderRadius: 8,
                fontFamily: "'Inter', sans-serif",
                transition: 'background 150ms',
              }}
            >
              Resources
              <ChevronDown
                size={13}
                color="#0F0E0D"
                style={{ transition: 'transform 200ms', transform: resourcesOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            </button>

            {/* About — plain link */}
            <a
              href="/about"
              style={plainLinkStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.04)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              About
            </a>
          </div>

          {/* Right: CTA buttons (desktop) + hamburger (mobile) */}
          <div className="flex items-center gap-2">

            {/* Sign In */}
            <a
              href={SIGN_IN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center justify-center rounded-lg"
              style={{
                fontSize: 14, fontWeight: 500, color: '#0F0E0D',
                padding: '7px 16px', textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
                background: 'transparent', transition: 'background 200ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0,0,0,0.06)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              Sign In
            </a>

            {/* Book a Demo — pill shaped dark button */}
            <a
              href={DEMO_BOOKING_URL}
              className="hidden md:flex items-center justify-center text-center"
              style={{
                fontSize: 14, fontWeight: 500, color: '#ffffff',
                borderRadius: 999,
                padding: '7px 20px', textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
                background: '#0F0E0D',
                transition: 'opacity 150ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.82')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Book a Demo
            </a>

            {/* Hamburger — mobile only, dark bars */}
            <button
              className="md:hidden flex flex-col justify-center items-center gap-[5px]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
            >
              <span style={{ display: 'block', width: 20, height: 2, background: '#0F0E0D', borderRadius: 2, transition: 'transform 200ms, opacity 200ms', transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }} />
              <span style={{ display: 'block', width: 20, height: 2, background: '#0F0E0D', borderRadius: 2, transition: 'opacity 200ms', opacity: menuOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 20, height: 2, background: '#0F0E0D', borderRadius: 2, transition: 'transform 200ms, opacity 200ms', transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile menu — white dropdown */}
        {menuOpen && (
          <div
            className="md:hidden flex flex-col"
            style={{
              background: '#FFFFFF',
              borderTop: '1px solid rgba(0,0,0,0.08)',
              padding: '12px 24px 20px',
            }}
          >
            {/* Features */}
            <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: 8, marginBottom: 4 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(0,0,0,0.35)', fontFamily: "'Inter', sans-serif", padding: '4px 4px 6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Features</div>
              {FEATURES_ITEMS.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ display: 'block', fontSize: 15, fontWeight: 500, color: '#0F0E0D', textDecoration: 'none', fontFamily: "'Inter', sans-serif", padding: '8px 4px' }}
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* Solutions */}
            <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: 8, marginBottom: 4 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(0,0,0,0.35)', fontFamily: "'Inter', sans-serif", padding: '4px 4px 6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Solutions</div>
              {SOLUTIONS_ITEMS.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ display: 'block', fontSize: 15, fontWeight: 500, color: '#0F0E0D', textDecoration: 'none', fontFamily: "'Inter', sans-serif", padding: '8px 4px' }}
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* Resources */}
            <div style={{ borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: 8, marginBottom: 4 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'rgba(0,0,0,0.35)', fontFamily: "'Inter', sans-serif", padding: '4px 4px 6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Resources</div>
              {RESOURCES_ITEMS.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noopener noreferrer' : undefined}
                  style={{ display: 'block', fontSize: 15, fontWeight: 500, color: '#0F0E0D', textDecoration: 'none', fontFamily: "'Inter', sans-serif", padding: '8px 4px' }}
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* Security + About — plain links */}
            {[{ label: 'Security', href: '/security', external: false }, { label: 'About', href: '/about', external: false }].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: 15, fontWeight: 500, color: '#0F0E0D', textDecoration: 'none', fontFamily: "'Inter', sans-serif", padding: '10px 4px', borderBottom: '1px solid rgba(0,0,0,0.06)', display: 'block' }}
              >
                {link.label}
              </a>
            ))}

            {/* Auth buttons */}
            <a
              href={SIGN_IN_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center rounded-lg mt-3"
              style={{ fontSize: 14, fontWeight: 500, color: '#0F0E0D', border: '1px solid rgba(0,0,0,0.15)', padding: '10px 20px', textDecoration: 'none', fontFamily: "'Inter', sans-serif", background: 'transparent' }}
            >
              Sign In
            </a>
            <a
              href={DEMO_BOOKING_URL}
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center mt-2"
              style={{ fontSize: 14, fontWeight: 500, color: '#ffffff', padding: '10px 20px', textDecoration: 'none', fontFamily: "'Inter', sans-serif", background: '#0F0E0D', borderRadius: 999 }}
            >
              Book a Demo
            </a>
          </div>
        )}
      </div>

      {/* Features portal dropdown */}
      {featuresOpen && (
        <FeaturesDropdownMenu
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

      {/* Resources portal dropdown */}
      {resourcesOpen && (
        <DropdownMenu
          items={RESOURCES_ITEMS}
          triggerRef={resourcesTriggerRef}
          onClose={closeResourcesNow}
          onMouseEnter={cancelResourcesClose}
          onMouseLeave={scheduleResourcesClose}
        />
      )}
    </>
  )
}
