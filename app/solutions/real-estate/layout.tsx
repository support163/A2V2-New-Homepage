import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI for Real Estate Agents - Automated Lead Engagement | A2V2.ai',
  description:
    'A2V2.ai is the AI-powered platform built for real estate agents. Qualify leads 24/7, answer listing questions automatically, and never lose a prospect to a missed call again. Your AI inside sales agent that works around the clock.',
  keywords:
    'real estate AI, real estate lead engagement, AI for realtors, real estate chatbot, listing inquiry automation, real estate lead capture, AI inside sales agent, real estate CRM alternative, automated lead follow-up real estate',
  alternates: {
    canonical: 'https://www.a2v2.ai/solutions/real-estate',
  },
  openGraph: {
    title: 'AI for Real Estate Agents - Automated Lead Engagement | A2V2.ai',
    description:
      'A2V2.ai is the AI-powered platform built for real estate agents. Qualify leads 24/7, answer listing questions automatically, and never lose a prospect to a missed call again.',
    url: 'https://www.a2v2.ai/solutions/real-estate',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Real Estate Agents - Automated Lead Engagement | A2V2.ai',
    description:
      'A2V2.ai is the AI-powered platform built for real estate agents. Qualify leads 24/7, answer listing questions automatically, and never lose a prospect to a missed call again.',
  },
}

export default function RealEstateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
