import Image from 'next/image'
import { SIGN_IN_URL } from '@/lib/constants'

export default function CtaSection({
  heading,
  subtitle,
  subtitleColor = 'rgba(255,255,255,0.5)',
  subtitleSize = 'text-sm',
  subtitleMaxWidth = '400px',
}: {
  heading?: React.ReactNode
  subtitle?: string
  subtitleColor?: string
  subtitleSize?: string
  subtitleMaxWidth?: string
} = {}) {
  return (
    <section style={{ background: '#0F0E0D', marginBottom: '-8px' }}>

      {/* Text content */}
      <div data-animate="" className="relative z-10 pt-20 mx-auto max-w-[700px] px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight" style={{ lineHeight: '1.35' }}>
          {heading ?? (
            <span className="text-white">Clone Yourself.<br />Scale Your Influence.</span>
          )}
        </h2>
        <p className={`mt-6 ${subtitleSize} mx-auto`} style={{ color: subtitleColor, maxWidth: subtitleMaxWidth }}>
          {subtitle ?? 'AI-powered engagement for healthcare and creators. Get started in minutes.'}
        </p>
        <div className="mt-8">
          <a
            href={SIGN_IN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: '#ffffff', color: '#0F0E0D' }}
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Full image — natural aspect ratio, no cropping */}
      <div className="relative overflow-hidden" style={{ marginTop: '-220px', zIndex: 0 }}>
        <Image
          src="/images/Cta-Background3.png"
          alt=""
          width={1920}
          height={800}
          quality={100}
          unoptimized
          className="w-full h-auto pointer-events-none"
          style={{ display: 'block', verticalAlign: 'bottom' }}
        />
<div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '280px',
            background: 'linear-gradient(to bottom, transparent, #0F0E0D)',
            zIndex: 10,
          }}
        />
      </div>

    </section>
  )
}
