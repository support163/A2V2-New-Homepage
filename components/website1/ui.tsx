import Image from 'next/image'
import type { CSSProperties, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { SIGN_IN_URL, DEMO_BOOKING_URL } from '@/lib/constants'

export const HELV = "'Helvetica Neue', Helvetica, Arial, sans-serif"
export const INTER = "'Inter', sans-serif"
export const INK = '#0F0E0D'
export const MUTED = '#68655E'
export const BRAND_GREEN = '#3FB68B'

export function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <p
      className={center ? 'text-center' : ''}
      style={{
        fontFamily: INTER,
        fontWeight: 500,
        fontSize: 13,
        color: MUTED,
        textTransform: 'uppercase',
        letterSpacing: '0.06em',
        marginBottom: 16,
      }}
    >
      {children}
    </p>
  )
}

export function SectionHeading({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <h2
      className={`font-normal leading-[1.05] text-4xl md:text-5xl ${center ? 'text-center' : ''}`}
      style={{ color: INK, fontFamily: HELV }}
    >
      {children}
    </h2>
  )
}

export function Subtext({ children, center = false, max = 560 }: { children: ReactNode; center?: boolean; max?: number }) {
  return (
    <p
      className={`leading-relaxed ${center ? 'text-center mx-auto' : ''}`}
      style={{ fontSize: 16, fontWeight: 500, color: MUTED, maxWidth: max, fontFamily: INTER, letterSpacing: '-0.3px', marginTop: 20 }}
    >
      {children}
    </p>
  )
}

const btnBase: CSSProperties = {
  padding: '12px 24px',
  textDecoration: 'none',
  fontFamily: INTER,
  fontWeight: 500,
}

export function PrimaryButton({ children = 'Book a Demo', href = DEMO_BOOKING_URL }: { children?: ReactNode; href?: string }) {
  return (
    <a
      href={href}
      className="text-sm rounded-lg transition-opacity hover:opacity-80 flex items-center justify-center text-center"
      style={{ ...btnBase, background: INK, color: '#fff' }}
    >
      {children}
    </a>
  )
}

export function GhostButton({ children = 'Get Started', href = SIGN_IN_URL, external = false }: { children?: ReactNode; href?: string; external?: boolean }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="text-sm rounded-lg transition-opacity hover:opacity-70 flex items-center justify-center text-center"
      style={{ ...btnBase, border: `1px solid ${INK}`, color: INK, background: 'transparent' }}
    >
      {children}
    </a>
  )
}

/** Background-website-3.png container; children are positioned by the caller. */
export function MockFrame({ children, className = '', style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      <Image src="/images/Background-website-3.png" alt="" fill style={{ objectFit: 'cover' }} quality={100} unoptimized />
      {children}
    </div>
  )
}

/** Icon sidebar: favicon on top, one active nav icon. */
export function MockSidebar({ icons, active }: { icons: LucideIcon[]; active: number }) {
  return (
    <div className="flex flex-col items-center gap-2 py-4 shrink-0" style={{ width: 56, borderRight: '1px solid rgba(0,0,0,0.06)', background: '#fff' }}>
      <Image src="/favicon.svg" alt="" width={24} height={26} unoptimized style={{ marginBottom: 12 }} />
      {icons.map((Icon, i) => (
        <div
          key={i}
          className="flex items-center justify-center rounded-lg"
          style={{ width: 36, height: 36, background: i === active ? '#EEF3FA' : 'transparent', color: i === active ? '#2563EB' : '#9A978F' }}
        >
          <Icon size={18} />
        </div>
      ))}
    </div>
  )
}

export function Pill({ children, tone = 'gray' }: { children: ReactNode; tone?: 'gray' | 'green' | 'amber' | 'dark' }) {
  const tones = {
    gray: { bg: '#F0F0F1', fg: '#68655E' },
    green: { bg: '#E3F6EE', fg: '#1E8A63' },
    amber: { bg: '#FDF1DC', fg: '#A8690A' },
    dark: { bg: '#0F0E0D', fg: '#fff' },
  }[tone]
  return (
    <span className="inline-block rounded-full whitespace-nowrap" style={{ background: tones.bg, color: tones.fg, fontFamily: INTER, fontWeight: 500, fontSize: 11, padding: '3px 9px' }}>
      {children}
    </span>
  )
}

export function BrandMark({ size = 24 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center shrink-0 text-white"
      style={{ width: size, height: size, borderRadius: size * 0.28, background: BRAND_GREEN, fontFamily: INTER, fontWeight: 600, fontSize: size * 0.5 }}
    >
      N
    </div>
  )
}
