import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PayForAccess — Monetize Your Expertise with AI | A2V2.ai',
  description:
    'Turn your content into passive income. Train an AI on your expertise and let followers pay $4.99 for 24-hour personalized conversations.',
  alternates: {
    canonical: 'https://www.a2v2.ai/features/pay-for-access',
  },
  openGraph: {
    title: 'PayForAccess — Monetize Your Expertise with AI | A2V2.ai',
    description:
      'Turn your content into passive income. Train an AI on your expertise and let followers pay $4.99 for 24-hour personalized conversations.',
    url: 'https://www.a2v2.ai/features/pay-for-access',
    siteName: 'A2V2.ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PayForAccess — Monetize Your Expertise with AI | A2V2.ai',
    description:
      'Turn your content into passive income. Train an AI on your expertise and let followers pay $4.99 for 24-hour personalized conversations.',
  },
}

export default function PayForAccessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
