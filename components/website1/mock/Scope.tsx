import { Outfit } from 'next/font/google'
import type { CSSProperties, ReactNode } from 'react'
import './mockups.css'
import './extra.css'

// Outfit is loaded for the mockups only. Its CSS variable is applied on the scope wrapper.
const outfit = Outfit({
  subsets: ['latin'],
  variable: '--w1-outfit',
  display: 'swap',
})

/** Scopes the reference mockup CSS (and its --brand variables) to this subtree. */
export default function Scope({ children, className = '', style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={`w1m ${outfit.variable} ${className}`} style={style}>
      {children}
    </div>
  )
}

