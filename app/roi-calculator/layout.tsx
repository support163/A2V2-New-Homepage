import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Patient Revenue Recovery Calculator | A2V2.ai',
  description:
    'Calculate how much revenue your clinic loses to patient drop-off and missed follow-ups. See your estimated recovery with A2V2.ai\'s AI patient lifecycle automation.',
  alternates: {
    canonical: 'https://www.a2v2.ai/roi-calculator',
  },
  openGraph: {
    title: 'Patient Revenue Recovery Calculator | A2V2.ai',
    description:
      'Calculate how much revenue your clinic loses to patient drop-off and missed follow-ups. See your estimated recovery with A2V2.ai\'s AI patient lifecycle automation.',
    url: 'https://www.a2v2.ai/roi-calculator',
    siteName: 'A2V2.ai',
    images: [
      {
        url: 'https://www.a2v2.ai/images/og-healthcare.png',
        width: 1200,
        height: 630,
        alt: 'A2V2.ai ROI Calculator',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patient Revenue Recovery Calculator | A2V2.ai',
    description:
      'Calculate how much revenue your clinic loses to patient drop-off and missed follow-ups. See your estimated recovery with A2V2.ai\'s AI patient lifecycle automation.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

export default function RoiCalculatorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
