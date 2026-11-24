import type { Metadata } from 'next'
import Hero from '@/components/website1/Hero'
import StatsSection from '@/components/website1/StatsSection'
import Reveal from '@/components/website1/Reveal'
import { AgentsSection, KnowledgeSection } from '@/components/website1/Sections'
import { HealthSection, PortalSection, FinalCta } from '@/components/website1/Sections2'
import TrainingSection from '@/components/website1/TrainingSection'
import TestHomepage2ChatSection from '@/components/TestHomepage2ChatSection'
import TestHomepage2SpecialtyCarousel from '@/components/TestHomepage2SpecialtyCarousel'
import Website1EscalationSection from '@/components/Website1EscalationSection'
import TestHomepage2SecuritySection from '@/components/TestHomepage2SecuritySection'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import HomeVariantTracker from '@/components/HomeVariantTracker'

export const metadata: Metadata = {
  title: 'A2V2.ai | Your Clinic. Your Portal. Powered by AI Agents.',
  description:
    'A2V2 gives clinics HIPAA-compliant AI agents trained on their own protocols, patient health tracking, and a branded patient portal, with every clinical decision left to your team.',
  alternates: { canonical: 'https://www.a2v2.ai/' },
  openGraph: {
    title: 'A2V2.ai | Your Clinic. Your Portal. Powered by AI Agents.',
    description:
      'A2V2 gives clinics HIPAA-compliant AI agents trained on their own protocols, patient health tracking, and a branded patient portal, with every clinical decision left to your team.',
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
    title: 'A2V2.ai | Your Clinic. Your Portal. Powered by AI Agents.',
    description:
      'A2V2 gives clinics HIPAA-compliant AI agents trained on their own protocols, patient health tracking, and a branded patient portal, with every clinical decision left to your team.',
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <main style={{ background: '#ffffff', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      <Hero />
      <Reveal>
        <StatsSection />
      </Reveal>
      <AgentsSection />
      <KnowledgeSection />
      <TrainingSection />
      <TestHomepage2ChatSection />
      <HealthSection />
      <PortalSection />
      <TestHomepage2SpecialtyCarousel />
      <Website1EscalationSection />
      <TestHomepage2SecuritySection
        heading="Patient data stays private. That's the whole point."
        subtitle="Encrypted, kept in the United States, covered by a BAA, and never used to train AI models."
      />
      <FinalCta />
      <TestHomepage2Footer />
      <HomeVariantTracker variant="home-a" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </main>
  )
}
