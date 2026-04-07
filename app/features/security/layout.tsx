import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security — How We Protect Your Data | A2V2.ai',
  description:
    'A2V2.ai is built with HIPAA-compliant infrastructure, AES-256 encryption, and private LLM deployment. Your data never touches public AI models.',
  alternates: {
    canonical: 'https://www.a2v2.ai/features/security',
  },
  openGraph: {
    title: 'Security — How We Protect Your Data | A2V2.ai',
    description:
      'A2V2.ai is built with HIPAA-compliant infrastructure, AES-256 encryption, and private LLM deployment. Your data never touches public AI models.',
    url: 'https://www.a2v2.ai/features/security',
    siteName: 'A2V2.ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Security — How We Protect Your Data | A2V2.ai',
    description:
      'A2V2.ai is built with HIPAA-compliant infrastructure, AES-256 encryption, and private LLM deployment. Your data never touches public AI models.',
  },
}

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
