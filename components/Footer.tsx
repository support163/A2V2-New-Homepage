import Image from 'next/image'
import Link from 'next/link'

const socialLinks = [
  { href: 'https://facebook.com', icon: '/icons/icon-facebook.svg', label: 'Facebook' },
  { href: 'https://x.com', icon: '/icons/icon-x.svg', label: 'X' },
  { href: 'https://instagram.com', icon: '/icons/icon-instagram.svg', label: 'Instagram' },
  { href: 'https://linkedin.com', icon: '/icons/icon-linkedin.svg', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-surface">
      <div data-animate="" className="mx-auto max-w-[1280px] px-6 md:px-section-x py-8 md:py-section-y">

        {/* Top 4-column grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr_2fr]">

          {/* Column 1 — Logo + tagline */}
          <div>
            <Link href="/">
              <Image
                src="/icons/Logo.svg"
                alt="A2V2.ai"
                width={100}
                height={32}
                className="invert"
              />
            </Link>
            <p className="mt-4 text-sm leading-[22px] text-white/60 max-w-[200px]">
              Turn Your YouTube Videos into a Personal AI Clone
            </p>
          </div>

          {/* Column 2 — About */}
          <div>
            <h4 className="text-btn font-bold text-white">About</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 — Company */}
          <div>
            <h4 className="text-btn font-bold text-white">Company</h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href="https://www.app.a2v2.ai/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="https://www.app.a2v2.ai/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Newsletter + Socials */}
          <div>
            <h4 className="text-btn font-bold text-white">
              Subscribe to our Newsletter
            </h4>
            <div className="mt-4 flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-btn border border-white/20 bg-white/5 px-4 py-[10px] text-sm text-white placeholder-white/40 focus:border-white/40 focus:outline-none"
              />
              <button
                type="button"
                className="whitespace-nowrap rounded-btn bg-white px-btn-x py-btn-y text-btn font-medium text-surface hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </div>

            <div className="mt-6">
              <p className="text-sm font-medium text-white/60">Socials</p>
              <div className="mt-3 flex items-center gap-3">
                {socialLinks.map((s) => (
                  <Link key={s.label} href={s.href} aria-label={s.label} className="flex items-center justify-center">
                    <Image
                      src={s.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="block w-6 h-6 object-contain opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-12 border-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-white/40">©2026 A2V2.ai All rights reserved</p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.app.a2v2.ai/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-white/20">|</span>
            <a
              href="https://www.app.a2v2.ai/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
