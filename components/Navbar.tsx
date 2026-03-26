'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { APP_URL } from '@/lib/constants'
import { HeartPulse, ChevronDown, Building, LayoutGrid } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
]

const solutionsItems = [
  {
    icon: HeartPulse,
    title: 'Healthcare',
    subtitle: 'For hospitals, biotech, and medicine',
    href: '/solutions/healthcare',
  },
  {
    icon: Building,
    title: 'Real Estate',
    subtitle: 'For agents, brokers, and property managers',
    href: '/solutions/real-estate',
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const appUrl = APP_URL

  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  function openSolutions() {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current)
      closeTimeout.current = null
    }
    setSolutionsOpen(true)
  }

  function closeSolutions() {
    closeTimeout.current = setTimeout(() => {
      setSolutionsOpen(false)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (closeTimeout.current) clearTimeout(closeTimeout.current)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-gray-100">
      <nav className="relative mx-auto max-w-[1280px] px-6 md:px-section-x flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/icons/Logo.svg"
            alt="A2V2.ai"
            width={100}
            height={32}
            priority
          />
        </Link>

        {/* Desktop nav links — centered absolutely */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-nav-gap list-none">
          {/* Home */}
          <li>
            <Link
              href="/"
              className="text-btn font-medium text-text-primary hover:bg-gray-100 rounded-lg px-3 py-1.5 transition-colors"
            >
              Home
            </Link>
          </li>

          {/* Solutions dropdown */}
          <li
            className="relative"
            onMouseEnter={openSolutions}
            onMouseLeave={closeSolutions}
          >
            <button
              className="flex items-center gap-1 text-btn font-medium text-text-primary hover:bg-gray-100 rounded-lg px-3 py-1.5 transition-colors"
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
              className={`absolute top-full left-0 mt-2 w-[320px] bg-white border border-[#e5e5e5] rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-150 ${
                solutionsOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto'
                  : 'opacity-0 -translate-y-1 pointer-events-none'
              }`}
              onMouseEnter={openSolutions}
              onMouseLeave={closeSolutions}
            >
              {/* Header */}
              <div className="px-5 pt-4 pb-3 flex items-center gap-2">
                <LayoutGrid size={14} className="text-text-secondary -mt-[3px]" />
                <p className="text-xs font-medium text-text-secondary uppercase tracking-wider">
                  Solutions
                </p>
              </div>
              <div className="mx-5 border-t border-gray-200" />

              {/* Items */}
              <div className="py-2">
                {solutionsItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-3.5 px-5 py-2.5 hover:bg-gray-50 transition-colors"
                    onClick={() => setSolutionsOpen(false)}
                  >
                    <span className="flex-shrink-0 w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100">
                      <item.icon size={18} className="text-text-secondary" />
                    </span>
                    <div>
                      <p className="text-[13px] font-semibold text-[#5D5D5D] leading-tight">
                        {item.title}
                      </p>
                      <p className="text-[11px] text-text-secondary leading-snug mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {/* Pricing & Blog */}
          {navLinks.filter((l) => l.label !== 'Home').map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-btn font-medium text-text-primary hover:bg-gray-100 rounded-lg px-3 py-1.5 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Sign In */}
          <a
            href={`${appUrl}/signin`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-btn font-medium text-text-primary hover:bg-gray-100 rounded-lg px-3 py-1.5 transition-colors"
          >
            Sign In
            <Image
              src="/icons/icon-chevron-down.svg"
              alt=""
              width={16}
              height={16}
            />
          </a>

          {/* Try For Free */}
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
            className={`block h-0.5 w-6 bg-text-primary transition-transform duration-200 ${
              mobileOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text-primary transition-opacity duration-200 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text-primary transition-transform duration-200 ${
              mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {/* Home */}
          <Link
            href="/"
            className="text-btn font-medium text-text-primary hover:bg-gray-100 rounded-lg px-3 py-1.5 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          {/* Solutions accordion */}
          <div>
            <button
              className="flex items-center gap-1 text-btn font-medium text-text-primary hover:bg-gray-100 rounded-lg px-3 py-1.5 transition-colors w-full"
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
                    className="flex items-center gap-3 py-2 hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    <item.icon size={20} className="flex-shrink-0 text-text-primary" />
                    <div>
                      <p className="text-sm font-semibold text-text-primary leading-tight">
                        {item.title}
                      </p>
                      <p className="text-xs text-text-secondary leading-snug">
                        {item.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing & Blog */}
          {navLinks.filter((l) => l.label !== 'Home').map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-btn font-medium text-text-primary hover:bg-gray-100 rounded-lg px-3 py-1.5 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="flex flex-col gap-3 pt-2 border-t border-gray-100">
            <a
              href={`${appUrl}/signin`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-btn font-medium text-text-primary hover:bg-gray-100 rounded-lg px-3 py-1.5 transition-colors"
            >
              Sign In
              <Image
                src="/icons/icon-chevron-down.svg"
                alt=""
                width={16}
                height={16}
              />
            </a>
            <a
              href={`${appUrl}/signin`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center bg-primary text-white text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-blue-700 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Try For Free
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
