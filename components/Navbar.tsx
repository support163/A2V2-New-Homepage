'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { APP_URL } from '@/lib/constants'
import { HeartPlus, ChevronDown, Landmark, LandPlot, LockKeyhole, Sparkles } from 'lucide-react'

const navLinks = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
]

const solutionsItems = [
  {
    icon: HeartPlus,
    title: 'Healthcare',
    subtitle: 'For hospitals, biotech, and medicine',
    href: '/solutions/healthcare',
  },
  {
    icon: Landmark,
    title: 'Real Estate',
    subtitle: 'For agents, brokers, and property managers',
    href: '/solutions/real-estate',
  },
]

const featuresItems = [
  {
    icon: LockKeyhole,
    title: 'Pay For Access',
    subtitle: 'Monetize your content with gated access',
    href: '/features/pay-for-access',
  },
]

const pillStyle: React.CSSProperties = {
  background: 'rgba(0, 0, 0, 0.65)',
  backdropFilter: 'blur(16px)',
  WebkitBackdropFilter: 'blur(16px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.15)',
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [featuresOpen, setFeaturesOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false)
  const appUrl = APP_URL

  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  function clearCloseTimer() {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
  }

  function openSolutions() {
    clearCloseTimer()
    setFeaturesOpen(false)
    setSolutionsOpen(true)
  }

  function openFeatures() {
    clearCloseTimer()
    setSolutionsOpen(false)
    setFeaturesOpen(true)
  }

  function closeDropdowns() {
    closeTimeout.current = setTimeout(() => {
      setSolutionsOpen(false)
      setFeaturesOpen(false)
    }, 150)
  }

  useEffect(() => {
    return () => { clearCloseTimer() }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full pointer-events-none">
      {/* Floating pill wrapper */}
      <div className="px-4 md:px-6 pt-4 pointer-events-none">
        <nav
          className="pointer-events-auto relative mx-auto max-w-5xl flex items-center justify-between h-[56px] px-5 rounded-full"
          style={pillStyle}
        >

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/icons/Logo.svg"
              alt="A2V2.ai"
              width={88}
              height={28}
              priority
              className="invert"
            />
          </Link>

          {/* Desktop nav links — centered absolutely */}
          <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 list-none">

            {/* Solutions dropdown */}
            <li
              className="relative"
              onMouseEnter={openSolutions}
              onMouseLeave={closeDropdowns}
            >
              <button
                className="nav-pill flex items-center gap-1 text-btn font-medium px-4 py-2"
                style={{ color: 'rgba(255,255,255,0.85)' }}
                onClick={() => setSolutionsOpen((prev) => !prev)}
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
              >
                Solutions
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] rounded-xl transition-all duration-150 ${
                  solutionsOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
                style={{
                  background: 'rgba(0, 0, 0, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  isolation: 'isolate',
                  zIndex: 60,
                }}
                onMouseEnter={openSolutions}
                onMouseLeave={closeDropdowns}
              >
                <div className="px-5 pt-4 pb-3 flex items-center gap-2">
                  <LandPlot size={14} className="-mt-[3px]" style={{ color: 'rgba(255,255,255,0.4)' }} />
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    Solutions
                  </p>
                </div>
                <div className="py-2">
                  {solutionsItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3.5 px-5 py-2.5 transition-colors"
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      onClick={() => setSolutionsOpen(false)}
                    >
                      <span
                        className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.1)' }}
                      >
                        <item.icon size={18} style={{ color: 'rgba(255,255,255,0.7)' }} />
                      </span>
                      <div>
                        <p className="text-[13px] font-semibold leading-tight text-white">{item.title}</p>
                        <p className="text-[11px] leading-snug mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          {item.subtitle}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Features dropdown */}
            <li
              className="relative"
              onMouseEnter={openFeatures}
              onMouseLeave={closeDropdowns}
            >
              <button
                className="nav-pill flex items-center gap-1 text-btn font-medium px-4 py-2"
                style={{ color: 'rgba(255,255,255,0.85)' }}
                onClick={() => setFeaturesOpen((prev) => !prev)}
                aria-expanded={featuresOpen}
                aria-haspopup="true"
              >
                Features
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${featuresOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[320px] rounded-xl transition-all duration-150 ${
                  featuresOpen
                    ? 'opacity-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 -translate-y-1 pointer-events-none'
                }`}
                style={{
                  background: 'rgba(0, 0, 0, 0.65)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '12px',
                  isolation: 'isolate',
                  zIndex: 60,
                }}
                onMouseEnter={openFeatures}
                onMouseLeave={closeDropdowns}
              >
                <div className="px-5 pt-4 pb-3 flex items-center gap-2">
                  <Sparkles size={14} className="-mt-[3px]" style={{ color: 'rgba(255,255,255,0.4)' }} />
                  <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    Features
                  </p>
                </div>
                <div className="py-2">
                  {featuresItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3.5 px-5 py-2.5 transition-colors"
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                      onClick={() => setFeaturesOpen(false)}
                    >
                      <span
                        className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg"
                        style={{ background: 'rgba(255,255,255,0.1)' }}
                      >
                        <item.icon size={18} style={{ color: 'rgba(255,255,255,0.7)' }} />
                      </span>
                      <div>
                        <p className="text-[13px] font-semibold leading-tight text-white">{item.title}</p>
                        <p className="text-[11px] leading-snug mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          {item.subtitle}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Pricing & Blog */}
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-pill text-btn font-medium px-4 py-2"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop right side */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.app.a2v2.ai/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-pill text-btn font-medium px-4 py-2 transition-colors"
              style={{ color: 'rgba(255,255,255,0.85)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.85)')}
            >
              Sign In
            </a>
            <a
              href={`${appUrl}/signin`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-blue-700 transition-colors"
            >
              Try For Free
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${
                mobileOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-200 ${
                mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>

        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="pointer-events-auto md:hidden px-4 mt-2 pb-4">
          <div
            className="mx-auto max-w-5xl rounded-2xl px-5 py-4 flex flex-col gap-3"
            style={pillStyle}
          >
            {/* Solutions accordion */}
            <div>
              <button
                className="flex items-center gap-1 text-btn font-medium rounded-lg px-3 py-1.5 transition-colors w-full"
                style={{ color: 'rgba(255,255,255,0.85)' }}
                onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                aria-expanded={mobileSolutionsOpen}
              >
                Solutions
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  mobileSolutionsOpen ? 'max-h-[200px] mt-2' : 'max-h-0'
                }`}
              >
                <div className="flex flex-col gap-2 pl-2">
                  {solutionsItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 py-2 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <item.icon size={20} className="flex-shrink-0" style={{ color: 'rgba(255,255,255,0.6)' }} />
                      <div>
                        <p className="text-sm font-semibold text-white leading-tight">{item.title}</p>
                        <p className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.5)' }}>
                          {item.subtitle}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Features accordion */}
            <div>
              <button
                className="flex items-center gap-1 text-btn font-medium rounded-lg px-3 py-1.5 transition-colors w-full"
                style={{ color: 'rgba(255,255,255,0.85)' }}
                onClick={() => setMobileFeaturesOpen((prev) => !prev)}
                aria-expanded={mobileFeaturesOpen}
              >
                Features
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${mobileFeaturesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  mobileFeaturesOpen ? 'max-h-[200px] mt-2' : 'max-h-0'
                }`}
              >
                <div className="flex flex-col gap-2 pl-2">
                  {featuresItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 py-2 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      <item.icon size={20} className="flex-shrink-0" style={{ color: 'rgba(255,255,255,0.6)' }} />
                      <div>
                        <p className="text-sm font-semibold text-white leading-tight">{item.title}</p>
                        <p className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.5)' }}>
                          {item.subtitle}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Pricing & Blog */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-btn font-medium rounded-lg px-3 py-1.5 transition-colors"
                style={{ color: 'rgba(255,255,255,0.85)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              <a
                href={`${appUrl}/signin`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center w-full bg-primary text-white text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-blue-700 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Try For Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
