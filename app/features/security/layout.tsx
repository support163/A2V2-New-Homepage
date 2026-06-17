import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HIPAA Security & Compliance | A2V2.ai',
  description:
    'A2V2.ai is built for healthcare from the ground up: HIPAA compliance, BAA included, AES-256 encryption, secured LLM access, and complete audit trails. Your patient data is never used for AI training.',
  alternates: {
    canonical: 'https://www.a2v2.ai/features/security',
  },
  openGraph: {
    title: 'HIPAA Security & Compliance | A2V2.ai',
    description:
      'A2V2.ai is built for healthcare from the ground up: HIPAA compliance, BAA included, AES-256 encryption, secured LLM access, and complete audit trails. Your patient data is never used for AI training.',
    url: 'https://www.a2v2.ai/features/security',
    siteName: 'A2V2.ai',
    images: [
      {
        url: 'https://www.a2v2.ai/images/og-healthcare.png',
        width: 1200,
        height: 630,
        alt: 'A2V2.ai Security and Compliance',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HIPAA Security & Compliance | A2V2.ai',
    description:
      'A2V2.ai is built for healthcare from the ground up: HIPAA compliance, BAA included, AES-256 encryption, secured LLM access, and complete audit trails.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
