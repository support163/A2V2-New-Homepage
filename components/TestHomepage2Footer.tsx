'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DEMO_BOOKING_URL } from '@/lib/constants'

const socialLinks = [
  { href: 'https://x.com/A2V2_Ai', icon: '/icons/icon-x.svg', label: 'X' },
  { href: 'https://www.instagram.com/a2v2.ai', icon: '/icons/icon-instagram.svg', label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/a2v2', icon: '/icons/icon-linkedin.svg', label: 'LinkedIn' },
]

export default function TestHomepage2Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#ffffff' }}
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-8 py-8 md:py-section-y">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          {/* Column 1 — Logo + tagline + CTA */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/icons/Logo.svg"
                alt="A2V2.ai"
                width={100}
                height={32}
              />
            </Link>
            <p
              className="mt-4 text-sm leading-relaxed max-w-[512px]"
              style={{
                color: '#68655E',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                letterSpacing: '-0.3px',
              }}
            >
              HIPAA-compliant AI agents that manage the full patient lifecycle for your clinic. From intake to retention, your team stays in control.
            </p>
            <a
              href={DEMO_BOOKING_URL}
              className="mt-6 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90"
              style={{
                background: '#0F0E0D',
                color: '#ffffff',
              }}
            >
              Book a Demo
              <ArrowRight size={16} color="#ffffff" />
            </a>
          </div>

          {/* Right columns wrapper */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-[62px]">

            {/* Column 2 — Resources */}
            <div>
              <h4 className="text-btn font-medium" style={{ color: '#0F0E0D', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Resources</h4>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <Link
                    href="/blog"
                    className="text-sm transition-colors"
                    style={{ color: '#68655E', fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '-0.3px' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0F0E0D')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#68655E')}
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 — Company */}
            <div>
              <h4 className="text-btn font-medium" style={{ color: '#0F0E0D', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Company</h4>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <Link
                    href="/about"
                    className="text-sm transition-colors"
                    style={{ color: '#68655E', fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '-0.3px' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0F0E0D')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#68655E')}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-and-conditions"
                    className="text-sm transition-colors"
                    style={{ color: '#68655E', fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '-0.3px' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0F0E0D')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#68655E')}
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm transition-colors"
                    style={{ color: '#68655E', fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '-0.3px' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0F0E0D')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#68655E')}
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div>
              <h4 className="text-btn font-medium" style={{ color: '#0F0E0D', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Contact</h4>
              <ul className="mt-4 flex flex-col gap-3">
                <li>
                  <a
                    href="mailto:support@a2v2.ai"
                    className="text-sm transition-colors"
                    style={{ color: '#68655E', fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '-0.3px' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0F0E0D')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#68655E')}
                  >
                    support@a2v2.ai
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+13232820051"
                    className="text-sm transition-colors"
                    style={{ color: '#68655E', fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '-0.3px' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#0F0E0D')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#68655E')}
                  >
                    323-282-0051
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 5 — Socials */}
            <div>
              <h4 className="text-btn font-medium" style={{ color: '#0F0E0D', fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Socials</h4>
              <div className="mt-4 flex items-center gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={s.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="block w-6 h-6 object-contain invert transition-opacity opacity-50 hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>

          </div>{/* end right columns wrapper */}

        </div>

        {/* Divider */}
        <hr className="my-12" style={{ borderColor: 'rgba(0,0,0,0.08)' }} />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm" style={{ color: 'rgba(0,0,0,0.35)', fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '-0.3px' }}>©2026 A2V2.ai All rights reserved</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm transition-colors"
              style={{ color: 'rgba(0,0,0,0.35)', fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '-0.3px' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0F0E0D')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(0,0,0,0.35)')}
            >
              Privacy Policy
            </Link>
            <span style={{ color: 'rgba(0,0,0,0.15)' }}>|</span>
            <Link
              href="/terms-and-conditions"
              className="text-sm transition-colors"
              style={{ color: 'rgba(0,0,0,0.35)', fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '-0.3px' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0F0E0D')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(0,0,0,0.35)')}
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>

      {/* Large decorative background logo */}
      <div className="relative z-0 flex justify-center -mt-8 pointer-events-none select-none" aria-hidden="true">
        <Image
          src="/icons/Big-A2V2-Logo.svg"
          alt=""
          width={1200}
          height={400}
          className="w-full max-w-[1400px]"
          style={{ filter: 'brightness(0)', opacity: 0.55 }}
        />
      </div>
    </footer>
  )
}
