import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Platform & Features | A2V2.ai',
  description:
    'A2V2 is one HIPAA-compliant platform for your patient relationship: customizable AI agents, a built-in patient CRM, AI-powered intake, knowledge base, and scheduling.',
  alternates: {
    canonical: 'https://www.a2v2.ai/platform',
  },
  openGraph: {
    title: 'Platform & Features | A2V2.ai',
    description:
      'A2V2 is one HIPAA-compliant platform for your patient relationship: customizable AI agents, a built-in patient CRM, AI-powered intake, knowledge base, and scheduling.',
    url: 'https://www.a2v2.ai/platform',
    siteName: 'A2V2.ai',
    images: [
      {
        url: 'https://www.a2v2.ai/images/og-healthcare.png',
        width: 1200,
        height: 630,
        alt: 'A2V2.ai Platform & Features',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Platform & Features | A2V2.ai',
    description:
      'A2V2 is one HIPAA-compliant platform for your patient relationship: customizable AI agents, a built-in patient CRM, AI-powered intake, knowledge base, and scheduling.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.a2v2.ai/platform',
      url: 'https://www.a2v2.ai/platform',
      name: 'Platform & Features | A2V2.ai',
      description:
        'A2V2 is one HIPAA-compliant platform for your patient relationship: customizable AI agents, a built-in patient CRM, AI-powered intake, knowledge base, and scheduling.',
      isPartOf: { '@id': 'https://www.a2v2.ai/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://www.a2v2.ai' },
        { '@type': 'ListItem', position: 2, name: 'Platform', item: 'https://www.a2v2.ai/platform' },
      ],
    },
  ],
}

export default function PlatformLayout({ children }: { children: React.ReactNode }) {
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
