'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
    fbq: (...args: unknown[]) => void
    _fbq: (...args: unknown[]) => void
  }
}

const GA_ID = 'G-14ET1LBXLZ'
const FB_PIXEL_ID = '1095815446062916'

export default function Analytics() {
  useEffect(() => {
    // Google Analytics
    const gaScript = document.createElement('script')
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    gaScript.async = true
    document.head.appendChild(gaScript)

    window.dataLayer = window.dataLayer || []
    window.gtag = function () {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA_ID)

    // Facebook Pixel
    window.fbq = window.fbq || function () {
      // eslint-disable-next-line prefer-rest-params
      (window.fbq as unknown as { queue: unknown[] }).queue.push(arguments)
    }
    if (!window._fbq) window._fbq = window.fbq
    ;(window.fbq as unknown as { push: unknown; loaded: boolean; version: string; queue: unknown[] }).push = window.fbq
    ;(window.fbq as unknown as { loaded: boolean }).loaded = true
    ;(window.fbq as unknown as { version: string }).version = '2.0'
    ;(window.fbq as unknown as { queue: unknown[] }).queue = []

    const fbScript = document.createElement('script')
    fbScript.src = 'https://connect.facebook.net/en_US/fbevents.js'
    fbScript.async = true
    document.head.appendChild(fbScript)

    window.fbq('init', FB_PIXEL_ID)
    window.fbq('track', 'PageView')
  }, [])

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  )
}
