import type { CSSProperties } from 'react'

/** Helper for CSS custom properties in inline styles. */
export function cv(vars: Record<string, string | number>): CSSProperties {
  return vars as unknown as CSSProperties
}
