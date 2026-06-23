'use client'

import { useEffect } from 'react'
import { SIGN_IN_URL, DEMO_BOOKING_URL } from '@/lib/constants'

export default function HomeVariantTracker({ variant }: { variant: string }) {
  useEffect(() => {
    // Tag this pageview with the A/B variant in GA4
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_variant', { variant })
    }

    // Track CTA clicks via event delegation — no component changes needed
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href') ?? ''

      let cta: string | null = null
      if (href === SIGN_IN_URL) cta = 'get_started'
      else if (href === DEMO_BOOKING_URL) cta = 'book_a_demo'
      if (!cta) return

      if (typeof window.gtag === 'function') {
        window.gtag('event', 'cta_click', { cta, variant })
      }
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', { content_name: cta, variant })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [variant])

  return null
}
