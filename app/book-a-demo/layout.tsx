import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Demo | A2V2.ai',
  description:
    'Book a demo of A2V2.ai and see how HIPAA-compliant AI agents automate your clinic\'s patient lifecycle, from intake to retention.',
  alternates: {
    canonical: 'https://www.a2v2.ai/book-a-demo',
  },
  openGraph: {
    title: 'Book a Demo | A2V2.ai',
    description:
      'Book a demo of A2V2.ai and see how HIPAA-compliant AI agents automate your clinic\'s patient lifecycle, from intake to retention.',
    url: 'https://www.a2v2.ai/book-a-demo',
    siteName: 'A2V2.ai',
    images: [
      {
        url: 'https://www.a2v2.ai/images/og-healthcare.png',
        width: 1200,
        height: 630,
        alt: 'A2V2.ai — Book a Demo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Demo | A2V2.ai',
    description:
      'Book a demo of A2V2.ai and see how HIPAA-compliant AI agents automate your clinic\'s patient lifecycle, from intake to retention.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

export default function BookADemoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
