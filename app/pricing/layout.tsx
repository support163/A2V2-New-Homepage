import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — AI Patient Lifecycle Automation | A2V2.ai',
  description:
    'Simple, transparent pricing for HIPAA-compliant AI patient automation. Automate intake, follow-ups, refill reminders, lab reminders, and re-engagement for your clinic.',
  alternates: {
    canonical: 'https://www.a2v2.ai/pricing',
  },
  openGraph: {
    title: 'Pricing — AI Patient Lifecycle Automation | A2V2.ai',
    description:
      'Simple, transparent pricing for HIPAA-compliant AI patient automation. Automate intake, follow-ups, refill reminders, lab reminders, and re-engagement for your clinic.',
    url: 'https://www.a2v2.ai/pricing',
    siteName: 'A2V2.ai',
    images: [
      {
        url: 'https://www.a2v2.ai/images/og-healthcare.png',
        width: 1200,
        height: 630,
        alt: 'A2V2.ai Pricing',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — AI Patient Lifecycle Automation | A2V2.ai',
    description:
      'Simple, transparent pricing for HIPAA-compliant AI patient automation. Automate intake, follow-ups, refill reminders, lab reminders, and re-engagement for your clinic.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
