'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'

export default function BookADemoPage() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal('ui', {
        styles: { branding: { brandColor: '#0F0E0D' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      <div
        className="mx-auto max-w-[1400px] px-6 md:px-8"
        style={{ paddingTop: 128, paddingBottom: 30 }}
      >
        <div className="text-center">
          <h1
            className="font-normal leading-[1.05]"
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              color: '#0F0E0D',
              fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}
          >
            Book a demo
          </h1>
          <p
            className="mt-4 mx-auto leading-relaxed"
            style={{
              fontSize: 16,
              fontWeight: 500,
              color: '#68655E',
              letterSpacing: '-0.3px',
              maxWidth: 520,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            See how A2V2 automates intake, follow-ups, refills, and re-engagement for your
            clinic. Pick a time that works for you.
          </p>
        </div>

        <div
          className="mx-auto"
          style={{ maxWidth: 1000, minHeight: 700, marginTop: 40 }}
        >
          <Cal
            calLink="marci-marshall-rm5wld/30min"
            style={{ width: '100%', height: '100%', overflow: 'scroll' }}
            config={{ layout: 'month_view' }}
          />
        </div>
      </div>

      <TestHomepage2Footer />
    </div>
  )
}
