import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security & HIPAA Compliance | A2V2.ai',
  description:
    'A2V2.ai is built for healthcare security: HIPAA compliant, BAA on every plan, AES-256 encryption, secured LLM access, audit trails, and U.S. data centers. Your data is never used to train AI models.',
  alternates: {
    canonical: 'https://www.a2v2.ai/security',
  },
  openGraph: {
    title: 'Security & HIPAA Compliance | A2V2.ai',
    description:
      'A2V2.ai is built for healthcare security: HIPAA compliant, BAA on every plan, AES-256 encryption, secured LLM access, audit trails, and U.S. data centers. Your data is never used to train AI models.',
    url: 'https://www.a2v2.ai/security',
    siteName: 'A2V2.ai',
    images: [
      {
        url: 'https://www.a2v2.ai/images/og-healthcare.png',
        width: 1200,
        height: 630,
        alt: 'A2V2.ai Security and HIPAA Compliance',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security & HIPAA Compliance | A2V2.ai',
    description:
      'A2V2.ai is built for healthcare security: HIPAA compliant, BAA on every plan, AES-256 encryption, secured LLM access, audit trails, and U.S. data centers.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.a2v2.ai/security',
      url: 'https://www.a2v2.ai/security',
      name: 'Security & HIPAA Compliance | A2V2.ai',
      description:
        'A2V2.ai is built for healthcare security: HIPAA compliant, BAA on every plan, AES-256 encryption, secured LLM access, audit trails, and U.S. data centers. Your data is never used to train AI models.',
      isPartOf: { '@id': 'https://www.a2v2.ai/#website' },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.a2v2.ai/security#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Is my patients' data used to train AI models?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "No. Your patient data is never used to train, fine-tune, or improve any AI model. This is contractually guaranteed. AI models are accessed under a Business Associate Agreement, and your data is used only to serve your clinic.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide a Business Associate Agreement (BAA)?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Yes. A BAA is included on every plan, not just enterprise tiers. The BAA makes A2V2 legally responsible for protecting your patients' Protected Health Information across every interaction.",
          },
        },
        {
          '@type': 'Question',
          name: 'How is patient data encrypted?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All data is encrypted at rest using AES-256 and in transit using TLS 1.3. Sensitive fields such as dates of birth, diagnoses, and clinical notes are encrypted at the storage layer with per-field encryption.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is patient data stored?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All patient data is stored in U.S.-based data centers with complete access controls. Your data never leaves the country.',
          },
        },
        {
          '@type': 'Question',
          name: 'Who can access patient data within my clinic?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Access is governed by role-based controls, so your front desk staff, care coordinators, and providers each have appropriate, separate levels of access. Every access event is logged in a complete, timestamped, exportable audit trail.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are you SOC 2 or ISO certified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We do not claim SOC 2, ISO 27001, or GDPR certification. We believe security claims should be precise and verifiable. What we do provide is HIPAA compliance, a BAA on every plan, AES-256 encryption, secured LLM access, audit trails, role-based access controls, and U.S.-based data residency.',
          },
        },
        {
          '@type': 'Question',
          name: 'Which AI models does A2V2 use, and are they compliant?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A2V2 provides access to flagship AI models inside a HIPAA-compliant environment. Only models that are eligible for use with Protected Health Information under a BAA are used for clinical workflows, and every interaction runs through compliant, access-controlled infrastructure.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.a2v2.ai' },
        { '@type': 'ListItem', position: 2, name: 'Security & HIPAA Compliance', item: 'https://www.a2v2.ai/security' },
      ],
    },
  ],
}

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
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
