import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | A2V2.ai',
  description:
    "A2V2 pricing is tailored to your clinic's size, patient volume, specialties, and integrations. Every plan includes the full HIPAA-compliant platform. Book a demo for a custom quote.",
  alternates: {
    canonical: 'https://www.a2v2.ai/pricing',
  },
  openGraph: {
    title: 'Pricing | A2V2.ai',
    description:
      "A2V2 pricing is tailored to your clinic's size, patient volume, specialties, and integrations. Every plan includes the full HIPAA-compliant platform. Book a demo for a custom quote.",
    url: 'https://www.a2v2.ai/pricing',
    siteName: 'A2V2.ai',
    images: [
      {
        url: 'https://www.a2v2.ai/images/og-healthcare.png',
        width: 1200,
        height: 630,
        alt: 'A2V2.ai Pricing',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing | A2V2.ai',
    description:
      "A2V2 pricing is tailored to your clinic's size, patient volume, specialties, and integrations. Every plan includes the full HIPAA-compliant platform.",
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.a2v2.ai/pricing',
      url: 'https://www.a2v2.ai/pricing',
      name: 'Pricing | A2V2.ai',
      description:
        "A2V2 pricing is tailored to your clinic's size, patient volume, specialties, and integrations. Every plan includes the full HIPAA-compliant platform.",
      isPartOf: { '@id': 'https://www.a2v2.ai/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',    item: 'https://www.a2v2.ai' },
        { '@type': 'ListItem', position: 2, name: 'Pricing', item: 'https://www.a2v2.ai/pricing' },
      ],
    },
  ],
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
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
