'use client'

import Image from 'next/image'
import Link from 'next/link'
import { APP_URL, DEMO_BOOKING_URL } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center -mt-[72px]" style={{ height: '100vh', minHeight: '600px' }}>

      {/* Background image */}
      <Image
        src="/images/hero-background-Image4.jpg"
        alt=""
        fill
        sizes="100vw"
        quality={100}
        unoptimized
        className="object-cover"
        priority
        style={{ zIndex: 0 }}
      />

      {/* Gradient fade at bottom — blends into #FFF9ED */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: '180px',
          background: 'linear-gradient(to bottom, transparent, #0F0E0D)',
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-[720px] px-6 text-center w-full" style={{ zIndex: 3 }}>

        {/* Announcement pill */}
        <div data-animate="">
          <Link
            href="/features/pay-for-access"
            className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-1.5 text-sm text-white/90 hover:border-white/60 hover:text-white transition-colors mb-6 bg-white/10 backdrop-blur-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'radial-gradient(circle at top left, #e8e0d8, #f5c77e, #ef8a3e, #e05a2b)' }} />
            Now live: PayForAccess for creators
            <span className="text-white/60 ml-0.5">&#8250;</span>
          </Link>
        </div>

        {/* H1 */}
        <h1
          data-animate=""
          className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight"
          style={{ transitionDelay: '80ms' }}
        >
          Clone yourself. Scale your influence.
        </h1>

        {/* Subtitle */}
        <p
          data-animate=""
          className="mt-5 text-lg text-white/80 max-w-[560px] mx-auto leading-relaxed"
          style={{ transitionDelay: '160ms' }}
        >
          AI-powered engagement for healthcare practices and content creators. Automate conversations, capture leads, and grow revenue on autopilot.
        </p>

        {/* CTAs */}
        <div
          data-animate=""
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          style={{ transitionDelay: '240ms' }}
        >
          <a
            href={`${APP_URL}/signin`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center bg-primary text-white text-btn font-medium px-btn-x py-btn-y rounded-full hover:bg-blue-700 transition-colors"
          >
            Try For Free
          </a>
          <a
            href={DEMO_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center bg-white/15 text-white text-btn font-medium px-btn-x py-btn-y rounded-full border border-white/40 hover:bg-white/25 transition-colors backdrop-blur-sm"
          >
            Book a Demo
          </a>
        </div>
      </div>

    </section>
  )
}
