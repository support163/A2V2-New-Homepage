import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PricingSection from '@/components/PricingSection'
import AddOns from '@/components/AddOns'
import TrustSection from '@/components/TrustSection'
import FAQ from '@/components/FAQ'
import CtaBanner from '@/components/CtaBanner'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'

export const metadata: Metadata = {
  title: 'Pricing — A2V2.ai',
  description:
    'Clone yourself. Scale your time. Choose the plan that fits your needs.',
}

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'A2V2.ai',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://www.a2v2.ai',
  description:
    'AI-powered engagement platform that creates personalized AI clones for automated client and patient engagement.',
  offers: [
    {
      '@type': 'Offer',
      name: 'Free',
      price: '0',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '0',
        priceCurrency: 'USD',
        billingDuration: 'P1M',
      },
      description: '1 AI clone, 100 credits/month, 10 documents per chatbot',
    },
    {
      '@type': 'Offer',
      name: 'Starter',
      price: '19.99',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '19.99',
        priceCurrency: 'USD',
        billingDuration: 'P1M',
      },
      description: '1 AI clone, 1,000 credits/month, 100 documents per chatbot, public access, premium models',
    },
    {
      '@type': 'Offer',
      name: 'Pro',
      price: '39.99',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '39.99',
        priceCurrency: 'USD',
        billingDuration: 'P1M',
      },
      description: '2 AI clones, 2,000 credits/month, unlimited documents, premium models, 3 team members',
    },
    {
      '@type': 'Offer',
      name: 'Enterprise',
      price: '99.99',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '99.99',
        priceCurrency: 'USD',
        billingDuration: 'P1M',
      },
      description: '3 AI clones, 6,000 credits/month, unlimited documents, premium models, 5 team members',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does the AI know what to say?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You are in full control. The AI is trained only on the data you provide — such as your website URL, PDF documents, or YouTube videos. It does not use outside internet knowledge to answer questions about your business, ensuring it stays on brand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the chatbot hallucinate or lie to my audience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We use strict guardrails to minimize hallucinations. If the AI doesn\'t know the answer based on the data you uploaded, it is programmed to say "I don\'t have that information right now" rather than making something up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to know how to code to train it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at all. If you can copy and paste a link or upload a file, you can train your AI. The setup process typically takes less than 5 minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is my data used to train public AI models?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Never. Your data remains isolated in your private environment. We do not sell your data or use your proprietary content to train public models (like ChatGPT).',
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns the conversations/leads the AI collects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You do. All chat logs, collected emails, and phone numbers belong to you. You can export your data at any time.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I embed the chatbot on my existing website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. On the Starter plan and above, we provide a simple code snippet that allows you to add your custom AI chatbot as a widget on your WordPress, Squarespace, or Webflow site.',
      },
    },
  ],
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    <main className="pricing-page">
      <ScrollAnimator />
      <Navbar />
      <PricingSection />
      <AddOns />
      <TrustSection flatDesign />
      <FAQ />
      <CtaBanner />
      <Footer />
    </main>
    </>
  )
}
