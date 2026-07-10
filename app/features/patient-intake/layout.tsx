import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI-Powered Patient Intake Software | A2V2.ai',
  description:
    "A2V2's AI-powered patient intake includes a drag-and-drop form builder and AI file extraction that auto-fills forms from uploaded documents, all inside HIPAA-compliant infrastructure.",
  keywords:
    'patient intake software, AI patient intake, automated patient intake, medical intake forms, AI form extraction, healthcare intake, HIPAA intake software',
  alternates: {
    canonical: 'https://www.a2v2.ai/features/patient-intake',
  },
  openGraph: {
    title: 'AI-Powered Patient Intake Software | A2V2.ai',
    description:
      "A2V2's AI-powered patient intake includes a drag-and-drop form builder and AI file extraction that auto-fills forms from uploaded documents, all inside HIPAA-compliant infrastructure.",
    url: 'https://www.a2v2.ai/features/patient-intake',
    siteName: 'A2V2.ai',
    images: [
      {
        url: 'https://www.a2v2.ai/images/og-healthcare.png',
        width: 1200,
        height: 630,
        alt: 'A2V2.ai — AI-Powered Patient Intake',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Patient Intake Software | A2V2.ai',
    description:
      "Drag-and-drop intake forms, AI file extraction, and in-chat intake with email verification — all inside HIPAA-compliant infrastructure.",
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.a2v2.ai/features/patient-intake',
      url: 'https://www.a2v2.ai/features/patient-intake',
      name: 'AI-Powered Patient Intake Software | A2V2.ai',
      description:
        "A2V2's AI-powered patient intake includes a drag-and-drop form builder and AI file extraction that auto-fills forms from uploaded documents, all inside HIPAA-compliant infrastructure.",
      isPartOf: { '@id': 'https://www.a2v2.ai/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://www.a2v2.ai' },
        { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://www.a2v2.ai/features' },
        { '@type': 'ListItem', position: 3, name: 'Patient Intake', item: 'https://www.a2v2.ai/features/patient-intake' },
      ],
    },
  ],
}

export default function PatientIntakeLayout({ children }: { children: React.ReactNode }) {
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
