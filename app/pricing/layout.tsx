import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — A2V2.ai',
  description:
    'Clone yourself. Scale your time. Choose the plan that fits your needs. Start free, then upgrade on your terms.',
  alternates: {
    canonical: 'https://www.a2v2.ai/pricing',
  },
  openGraph: {
    title: 'Pricing — A2V2.ai',
    description:
      'Clone yourself. Scale your time. Choose the plan that fits your needs. Start free, then upgrade on your terms.',
    url: 'https://www.a2v2.ai/pricing',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — A2V2.ai',
    description:
      'Clone yourself. Scale your time. Choose the plan that fits your needs. Start free, then upgrade on your terms.',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
