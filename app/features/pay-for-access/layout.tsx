import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pay-Per-Session Patient Access | A2V2.ai',
  description:
    'Enable patients to access your clinic\'s AI care assistant on demand. HIPAA-compliant, available 24/7, and fully integrated into your patient communication workflow.',
  alternates: {
    canonical: 'https://www.a2v2.ai/features/pay-for-access',
  },
  openGraph: {
    title: 'Pay-Per-Session Patient Access | A2V2.ai',
    description:
      'Enable patients to access your clinic\'s AI care assistant on demand. HIPAA-compliant, available 24/7, and fully integrated into your patient communication workflow.',
    url: 'https://www.a2v2.ai/features/pay-for-access',
    siteName: 'A2V2.ai',
    images: [
      {
        url: 'https://www.a2v2.ai/images/og-healthcare.png',
        width: 1200,
        height: 630,
        alt: 'A2V2.ai Pay For Access',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pay-Per-Session Patient Access | A2V2.ai',
    description:
      'Enable patients to access your clinic\'s AI care assistant on demand. HIPAA-compliant, available 24/7, and fully integrated into your patient communication workflow.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

export default function PayForAccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
