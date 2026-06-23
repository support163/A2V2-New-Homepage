import type { Metadata } from 'next'
import TestHomepage2 from './test-homepage-2/page'
import HomeVariantTracker from '@/components/HomeVariantTracker'

// ─── Page Metadata ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Patient Lifecycle Automation for Modern Clinics | A2V2.ai',
  description:
    'A2V2.ai is a HIPAA-compliant AI platform built for longevity clinics, HRT practices, and functional medicine. Automate the full patient lifecycle — intake, engagement, follow-ups, and escalation — with clinical-grade AI agents.',
  keywords:
    'healthcare AI, HIPAA compliant AI, patient lifecycle automation, longevity clinic software, HRT clinic AI, functional medicine AI, clinical workflow automation, patient retention software, healthcare chatbot, medical AI assistant',
  alternates: { canonical: 'https://www.a2v2.ai/' },
  openGraph: {
    title: 'Patient Lifecycle Automation | A2V2.ai',
    description:
      'HIPAA-compliant AI agents that manage the full patient lifecycle for modern clinics. Everything escalates to your team for clinical judgment.',
    url: 'https://www.a2v2.ai',
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
    title: 'Patient Lifecycle Automation | A2V2.ai',
    description:
      'HIPAA-compliant AI agents that manage the full patient lifecycle for modern clinics.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
    creator: '@A2V2_Ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
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
    'HIPAA-compliant AI platform for patient lifecycle automation in longevity, HRT, and functional medicine clinics.',
  sameAs: [
    'https://x.com/A2V2_Ai',
    'https://www.linkedin.com/company/a2v2',
    'https://www.instagram.com/a2v2.ai',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'support@a2v2.ai',
    contactType: 'Sales',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'A2V2.ai',
  url: 'https://www.a2v2.ai',
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'A2V2.ai Healthcare Platform',
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  description:
    'HIPAA-compliant AI patient lifecycle automation platform for longevity clinics, HRT practices, and functional medicine.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Free trial available',
  },
  featureList: [
    'HIPAA-compliant AI agents',
    'Full patient lifecycle automation',
    'Automated patient engagement',
    'Treatment protocol tracking',
    'Clinical escalation workflows',
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

export default function HomePage() {
  return (
    <>
      <TestHomepage2 />
      <HomeVariantTracker variant="home-a" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
