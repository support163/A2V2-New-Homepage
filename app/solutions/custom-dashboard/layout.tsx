import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Custom Healthcare Dashboards for Clinics | A2V2.ai',
  description:
    "A2V2 designs and builds custom, HIPAA-compliant healthcare dashboards tailored to your clinic's specialty, protocols, and workflows. Bespoke builds available now.",
  alternates: {
    canonical: 'https://www.a2v2.ai/solutions/custom-dashboard',
  },
  openGraph: {
    title: 'Custom Healthcare Dashboards for Clinics | A2V2.ai',
    description:
      "A2V2 designs and builds custom, HIPAA-compliant healthcare dashboards tailored to your clinic's specialty, protocols, and workflows. Bespoke builds available now.",
    url: 'https://www.a2v2.ai/solutions/custom-dashboard',
    siteName: 'A2V2.ai',
    images: [
      {
        url: 'https://www.a2v2.ai/images/og-healthcare.png',
        width: 1200,
        height: 630,
        alt: 'A2V2.ai Custom Healthcare Dashboards',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Healthcare Dashboards for Clinics | A2V2.ai',
    description:
      "A2V2 designs and builds custom, HIPAA-compliant healthcare dashboards tailored to your clinic's specialty, protocols, and workflows.",
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.a2v2.ai/solutions/custom-dashboard',
      url: 'https://www.a2v2.ai/solutions/custom-dashboard',
      name: 'Custom Healthcare Dashboards for Clinics | A2V2.ai',
      description:
        "A2V2 designs and builds custom, HIPAA-compliant healthcare dashboards tailored to your clinic's specialty, protocols, and workflows.",
      isPartOf: { '@id': 'https://www.a2v2.ai/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',             item: 'https://www.a2v2.ai' },
        { '@type': 'ListItem', position: 2, name: 'Solutions',        item: 'https://www.a2v2.ai/solutions' },
        { '@type': 'ListItem', position: 3, name: 'Custom Dashboard', item: 'https://www.a2v2.ai/solutions/custom-dashboard' },
      ],
    },
    {
      '@type': 'Service',
      '@id': 'https://www.a2v2.ai/solutions/custom-dashboard#service',
      name: 'Custom Healthcare Dashboard',
      description:
        "Bespoke, HIPAA-compliant healthcare dashboard design and build service tailored to your clinic's specialty, protocols, and team workflows.",
      provider: {
        '@type': 'Organization',
        name: 'A2V2.ai',
        url: 'https://www.a2v2.ai',
      },
      serviceType: 'Healthcare Technology',
      areaServed: 'US',
    },
  ],
}

export default function CustomDashboardLayout({ children }: { children: React.ReactNode }) {
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
