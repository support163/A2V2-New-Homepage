import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healthcare AI Platform - HIPAA-Compliant Patient Engagement | A2V2.ai',
  description:
    'A2V2.ai is the healthcare AI platform built for clinics that need HIPAA-compliant automation. Engage patients, track treatment protocols, and increase retention without exposing patient data.',
  keywords:
    'healthcare AI platform, HIPAA compliant AI, medical AI software, healthcare automation platform, clinical AI solution, patient engagement AI, healthcare artificial intelligence, medical practice AI, clinic AI software, HIPAA AI tool',
  alternates: {
    canonical: 'https://www.a2v2.ai/solutions/healthcare',
  },
  openGraph: {
    title: 'Healthcare AI Platform - HIPAA-Compliant Patient Engagement | A2V2.ai',
    description:
      'A2V2.ai is the healthcare AI platform built for clinics that need HIPAA-compliant automation. Engage patients, track treatment protocols, and increase retention without exposing patient data.',
    url: 'https://www.a2v2.ai/solutions/healthcare',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare AI Platform - HIPAA-Compliant Patient Engagement | A2V2.ai',
    description:
      'A2V2.ai is the healthcare AI platform built for clinics that need HIPAA-compliant automation. Engage patients, track treatment protocols, and increase retention without exposing patient data.',
  },
}

export default function HealthcareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
