import Image from 'next/image'
import Link from 'next/link'
import { DEMO_BOOKING_URL } from '@/lib/constants'

const socialLinks = [
  { href: 'https://x.com/A2V2_Ai', icon: '/icons/icon-x.svg', label: 'X' },
  { href: 'https://www.instagram.com/a2v2.ai', icon: '/icons/icon-instagram.svg', label: 'Instagram' },
  { href: 'https://www.linkedin.com/company/a2v2', icon: '/icons/icon-linkedin.svg', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#0F0E0D' }}>
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-section-x py-8 md:py-section-y">

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
                className="invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-[512px]">
              AI-powered engagement for healthcare and creators. Clone yourself, scale your influence, and grow revenue on autopilot.
            </p>
            <a
              href={DEMO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              Book a free audit
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* Right columns wrapper */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-[62px]">

          {/* Column 2 — Resources */}
          <div>
            <h4 className="text-btn font-bold text-white">Resources</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4 className="text-btn font-bold text-white">Company</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 — Socials */}
          <div>
            <h4 className="text-btn font-bold text-white">Socials</h4>
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
                    className="block w-6 h-6 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

          </div>{/* end right columns wrapper */}

        </div>

        {/* Divider */}
        <hr className="my-12 border-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-white/40">©2026 A2V2.ai All rights reserved</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link
              href="/terms-and-conditions"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
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
          className="w-full max-w-[1400px] opacity-[0.20]"
          style={{ filter: 'brightness(2)' }}
        />
      </div>
    </footer>
  )
}
