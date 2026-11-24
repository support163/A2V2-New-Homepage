import type { CSSProperties, ReactNode } from 'react'
import { MockFrame } from '../ui'
import Scope from './Scope'

/**
 * Background-website-3.png container with a FIXED height (overflow hidden).
 * The card inside is cut off at the right edge and runs off the bottom edge.
 * h = [<880px, 880+, 1024+, 1280+] frame heights in px.
 */
export default function Frame({ children, h }: { children: ReactNode; h: [number, number, number, number] }) {
  const vars = { '--h-sm': `${h[0]}px`, '--h-md': `${h[1]}px`, '--h-lg': `${h[2]}px`, '--h-xl': `${h[3]}px` } as unknown as CSSProperties
  return (
    <MockFrame className="w-full w1-frame" style={vars}>
      <div className="relative w1-in pl-6 md:pl-12" style={{ paddingRight: 0 }}>
        <Scope>{children}</Scope>
      </div>
    </MockFrame>
  )
}
