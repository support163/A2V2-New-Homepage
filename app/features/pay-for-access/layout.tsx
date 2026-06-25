import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pay For Access: Monetize Your Health Expertise, HIPAA-Compliant | A2V2.ai',
  description:
    'Pay For Access lets healthcare experts sell paywalled content and answer their audience’s questions through HIPAA-compliant infrastructure. Build authority and revenue without the compliance risk of generic creator tools.',
  alternates: {
    canonical: 'https://www.a2v2.ai/features/pay-for-access',
  },
  openGraph: {
    title: 'Pay For Access: Monetize Your Health Expertise, HIPAA-Compliant | A2V2.ai',
    description:
      'Pay For Access lets healthcare experts sell paywalled content and answer their audience’s questions through HIPAA-compliant infrastructure. Build authority and revenue without the compliance risk of generic creator tools.',
    url: 'https://www.a2v2.ai/features/pay-for-access',
    siteName: 'A2V2.ai',
    images: [
      {
        url: 'https://www.a2v2.ai/images/og-healthcare.png',
        width: 1200,
        height: 630,
        alt: 'A2V2.ai Pay For Access — HIPAA-Compliant Creator Monetization',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pay For Access: Monetize Your Health Expertise, HIPAA-Compliant | A2V2.ai',
    description:
      'Sell paywalled content and answer your audience’s health questions through HIPAA-compliant infrastructure.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.a2v2.ai/features/pay-for-access',
      url: 'https://www.a2v2.ai/features/pay-for-access',
      name: 'Pay For Access: Monetize Your Health Expertise, HIPAA-Compliant | A2V2.ai',
      description:
        'Pay For Access lets healthcare experts sell paywalled content and answer their audience’s questions through HIPAA-compliant infrastructure.',
      isPartOf: { '@id': 'https://www.a2v2.ai/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.a2v2.ai' },
        { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://www.a2v2.ai/features' },
        { '@type': 'ListItem', position: 3, name: 'Pay For Access', item: 'https://www.a2v2.ai/features/pay-for-access' },
      ],
    },
  ],
}

export default function PayForAccessLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
