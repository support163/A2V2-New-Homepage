'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Pricing', href: '/pricing' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

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

        {/* Desktop nav links — centered absolutely so they're truly centered regardless of logo/CTA widths */}
        <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-nav-gap list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-btn font-medium text-text-primary hover:text-primary transition-colors"
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
            href="https://www.app.a2v2.ai/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-btn font-medium text-text-primary hover:text-primary transition-colors"
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
            href="https://www.app.a2v2.ai/signin"
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-btn font-medium text-text-primary hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-gray-100">
            <a
              href="https://www.app.a2v2.ai/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-btn font-medium text-text-primary hover:text-primary transition-colors"
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
              href="https://www.app.a2v2.ai/signin"
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
