import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrainSection from '@/components/TrainSection'
import FeaturesSection from '@/components/FeaturesSection'
import UseCasesSection from '@/components/UseCasesSection'
import TrustSection from '@/components/TrustSection'
import CtaBanner from '@/components/CtaBanner'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.a2v2.ai',
  },
  openGraph: {
    title: 'A2V2.ai — Clone Yourself. Scale Your Influence.',
    description:
      'The all-in-one bio hub that chats like you, captures leads like a CRM, and converts while you sleep.',
    url: 'https://www.a2v2.ai',
    siteName: 'A2V2.ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A2V2.ai — Clone Yourself. Scale Your Influence.',
    description:
      'The all-in-one bio hub that chats like you, captures leads like a CRM, and converts while you sleep.',
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'A2V2.ai',
            url: 'https://www.a2v2.ai',
            logo: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
            description:
              'A2V2.ai is an AI-powered engagement platform that creates personalized AI clones for automated client and patient engagement. Serving healthcare with HIPAA-compliant patient engagement for longevity and preventive medicine practices, and real estate with AI-powered client engagement for agents.',
            sameAs: [
              'https://x.com/A2V2_Ai',
              'https://www.instagram.com/a2v2.ai',
              'https://www.linkedin.com/company/a2v2',
            ],
          }),
        }}
      />
    <main>
      <ScrollAnimator />
      <Navbar />
      <Hero />
      <TrainSection />
      <FeaturesSection />
      <UseCasesSection />
      <TrustSection flatDesign />
      <CtaBanner />
      <Footer />
    </main>
    </>
  )
}
