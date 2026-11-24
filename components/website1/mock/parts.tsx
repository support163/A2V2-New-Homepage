import type { CSSProperties } from 'react'
import { cv } from './util'

export const BRAND_NAME = 'Northside Health'

export function BrandMark() {
  return <b>N</b>
}

export function BellIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M6 16v-5a6 6 0 1 1 12 0v5l1.5 2h-15zM10 20.5a2 2 0 0 0 4 0" />
    </svg>
  )
}

export function UserIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
    </svg>
  )
}

export function CalIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <rect x="4" y="5" width="16" height="15" rx="3" />
      <path d="M4 10h16M8 3v4M16 3v4" />
    </svg>
  )
}

export function TopIcons() {
  return (
    <div className="px-ic">
      <span className="sq"><BellIcon /></span>
      <span className="sq"><UserIcon /></span>
    </div>
  )
}

export function Dots() {
  return <span className="dots" />
}

/** Hatched row bar from the reference (.hb). */
export function HbRow({ label, value, note, color, w, style }: { label: string; value?: string; note: string; color: string; w: number; style?: CSSProperties }) {
  return (
    <div className="hb" style={{ ...cv({ '--c': color, '--w': w }), ...style }}>
      <span>
        {label} {value}
        <em>{note}</em>
      </span>
      <i />
    </div>
  )
}

/** HbA1c step chart card (.px-a1c). */
export function A1cChart({ className = 'px-card px-a1c' }: { className?: string }) {
  return (
    <div className={className}>
      <div className="px-ch"><h4>HbA1c</h4><Dots /></div>
      <svg viewBox="0 0 300 120" aria-label="HbA1c trending down from 5.9 to 5.6">
        <defs>
          <pattern id="w1vst" width="5" height="5" patternUnits="userSpaceOnUse">
            <rect width="2" height="5" fill="#f0559c" opacity=".22" />
          </pattern>
        </defs>
        <path d="M0 42H36V34H70V46H104V54H138V50H172V66H206V72H240V84H300V120H0z" fill="url(#w1vst)" />
        <path d="M0 42H36V34H70V46H104V54H138V50H172V66H206V72H240V84H300" fill="none" stroke="#f0559c" strokeWidth="2.2" />
        <circle cx="240" cy="84" r="3.5" fill="#f0559c" />
        <rect x="218" y="52" width="44" height="22" rx="11" fill="#fff" stroke="#e5e5ea" />
        <text x="240" y="67" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11.5" fontWeight="600" fill="#111">5.6%</text>
      </svg>
    </div>
  )
}

const DOT_COLS = [1, 1, 2, 1, 2, 3, 5, 3, 2, 1, 2, 1, 1, 1]

/** Dot-grid check-in card (.px-check). */
export function CheckIns({ className = 'px-card px-check' }: { className?: string }) {
  return (
    <div className={className}>
      <div className="px-ch"><h4>Check-ins</h4><Dots /></div>
      <div className="row">
        <div className="n">41<small>habits done this week</small></div>
        <div className="dotsg">
          <span className="pkl">Best day: <b>Wed</b></span>
          {DOT_COLS.map((n, k) => (
            <div key={k} className={k === 6 ? 'pk' : undefined}>
              {Array.from({ length: n }).map((_, i) => <i key={i} />)}
            </div>
          ))}
        </div>
        <div className="vs">vs last week<b>+6</b></div>
      </div>
    </div>
  )
}
