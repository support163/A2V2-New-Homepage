import type { Metadata } from 'next'
import HomepageClient from '../homepage-client'

// ─── Page Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Healthcare AI Platform | HIPAA-Compliant Patient Engagement | A2V2.ai',
  description:
    'A2V2.ai is a HIPAA-compliant AI platform built for longevity clinics, HRT practices, and functional medicine. Automate patient engagement, track treatment adherence, and recover lost revenue with clinical-grade AI.',
  keywords:
    'healthcare AI, HIPAA compliant AI, patient engagement, longevity clinic software, HRT clinic AI, functional medicine AI, clinical workflow automation, patient retention software, healthcare chatbot, medical AI assistant',
  alternates: { canonical: 'https://www.a2v2.ai/home-dark' },
  openGraph: {
    title: 'Healthcare AI Platform | A2V2.ai',
    description:
      'HIPAA-compliant AI engagement built for clinics. Automate patient communication and recover lost revenue.',
    url: 'https://www.a2v2.ai/home-dark',
    siteName: 'A2V2.ai',
    images: [
      {
        url: 'https://www.a2v2.ai/images/og-healthcare.png',
        width: 1200,
        height: 630,
        alt: 'A2V2.ai Healthcare AI Platform',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare AI Platform | A2V2.ai',
    description: 'HIPAA-compliant AI engagement built for clinics.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
    creator: '@A2V2_Ai',
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
}

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'A2V2.ai',
  url: 'https://www.a2v2.ai',
  logo: 'https://www.a2v2.ai/icons/Logo.svg',
  description:
    'HIPAA-compliant AI platform for healthcare patient engagement and creator monetization.',
  sameAs: [
    'https://x.com/A2V2_Ai',
    'https://www.linkedin.com/company/a2v2',
    'https://www.instagram.com/a2v2.ai',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'marci@a2v2.ai',
    contactType: 'Sales',
  },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'A2V2.ai Healthcare Platform',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  description:
    'HIPAA-compliant AI patient engagement platform for longevity clinics, HRT practices, and functional medicine.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free trial available',
  },
  featureList: [
    'HIPAA-compliant AI chat',
    'Automated patient engagement',
    'Treatment protocol tracking',
    'Predictive drop-off analytics',
    'EHR integration',
    'BAA provided',
    'AES-256 encryption',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of practices does A2V2 support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Longevity, HRT, functional medicine, health optimization, and any practice with ongoing treatment protocols.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is A2V2 HIPAA compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. BAA provided, AES-256 encryption, secured LLM access, and complete audit trails.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does implementation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most practices go live in under 2 weeks with our dedicated implementation team.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to replace my EHR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A2V2 sits on top of your existing stack with native integrations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the free audit include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 30-minute review of patient retention, drop-off patterns, and a custom revenue projection.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.a2v2.ai',
    },
  ],
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomeDarkPage() {
  return (
    <>
      <HomepageClient />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
