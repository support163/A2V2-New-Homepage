import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Agents for Healthcare Clinics | A2V2.ai',
  description:
    'A2V2 lets you build custom AI agents powered by leading models and grounded in your clinic\'s knowledge. They answer patient questions and escalate anything clinical to your team, HIPAA-compliant.',
  keywords:
    'AI agent healthcare, medical AI chatbot, healthcare AI agent, custom AI agent clinic, HIPAA AI chatbot, patient chatbot, AI knowledge base healthcare',
  alternates: {
    canonical: 'https://www.a2v2.ai/features/ai-agents',
  },
  openGraph: {
    title: 'AI Agents for Healthcare Clinics | A2V2.ai',
    description:
      'A2V2 lets you build custom AI agents powered by leading models and grounded in your clinic\'s knowledge. They answer patient questions and escalate anything clinical to your team, HIPAA-compliant.',
    url: 'https://www.a2v2.ai/features/ai-agents',
    siteName: 'A2V2.ai',
    images: [
      {
        url: 'https://www.a2v2.ai/images/og-healthcare.png',
        width: 1200,
        height: 630,
        alt: 'A2V2.ai — AI Agents for Healthcare Clinics',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents for Healthcare Clinics | A2V2.ai',
    description:
      'Custom AI agents grounded in your clinic\'s knowledge, powered by leading models, HIPAA-compliant. Answers patient questions and escalates anything clinical to your team.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.a2v2.ai/features/ai-agents',
      url: 'https://www.a2v2.ai/features/ai-agents',
      name: 'AI Agents for Healthcare Clinics | A2V2.ai',
      description:
        'A2V2 lets you build custom AI agents powered by leading models and grounded in your clinic\'s knowledge. They answer patient questions and escalate anything clinical to your team, HIPAA-compliant.',
      isPartOf: { '@id': 'https://www.a2v2.ai/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://www.a2v2.ai' },
        { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://www.a2v2.ai/features' },
        { '@type': 'ListItem', position: 3, name: 'AI Agents', item: 'https://www.a2v2.ai/features/ai-agents' },
      ],
    },
  ],
}

export default function AiAgentsLayout({ children }: { children: React.ReactNode }) {
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
