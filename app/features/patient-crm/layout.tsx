import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare CRM for Clinics | A2V2.ai',
  description:
    "A2V2's patient CRM keeps records, history, health parameter trends, forms, notes, and prescriptions in one place, with workflow automations, inside HIPAA-compliant infrastructure.",
  keywords:
    'healthcare CRM, patient CRM, patient relationship management, medical CRM, patient records software, health parameter tracking, clinic CRM',
  alternates: {
    canonical: 'https://www.a2v2.ai/features/patient-crm',
  },
  openGraph: {
    title: 'Healthcare CRM for Clinics | A2V2.ai',
    description:
      "A2V2's patient CRM keeps records, history, health parameter trends, forms, notes, and prescriptions in one place, with workflow automations, inside HIPAA-compliant infrastructure.",
    url: 'https://www.a2v2.ai/features/patient-crm',
    siteName: 'A2V2.ai',
    images: [
      {
        url: 'https://www.a2v2.ai/images/og-healthcare.png',
        width: 1200,
        height: 630,
        alt: 'A2V2.ai — Healthcare CRM for Clinics',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare CRM for Clinics | A2V2.ai',
    description:
      'Patient records, health parameter trends, intake forms, notes, prescriptions, and CRM automations, inside HIPAA-compliant infrastructure.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.a2v2.ai/features/patient-crm',
      url: 'https://www.a2v2.ai/features/patient-crm',
      name: 'Healthcare CRM for Clinics | A2V2.ai',
      description:
        "A2V2's patient CRM keeps records, history, health parameter trends, forms, notes, and prescriptions in one place, with workflow automations, inside HIPAA-compliant infrastructure.",
      isPartOf: { '@id': 'https://www.a2v2.ai/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://www.a2v2.ai' },
        { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://www.a2v2.ai/features' },
        { '@type': 'ListItem', position: 3, name: 'Patient CRM', item: 'https://www.a2v2.ai/features/patient-crm' },
      ],
    },
  ],
}

export default function PatientCrmLayout({ children }: { children: React.ReactNode }) {
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
