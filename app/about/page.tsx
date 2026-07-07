import type { Metadata } from 'next'
import AboutPageContent from '@/components/AboutPageContent'

export const metadata: Metadata = {
  title: 'About A2V2.ai | HIPAA-Compliant AI for Clinics',
  description:
    'A2V2 builds HIPAA-compliant AI that closes the gap between visits, automating the patient lifecycle so clinical teams can focus on care. Learn what we do and what we believe.',
  keywords:
    'about A2V2, HIPAA-compliant AI, healthcare AI company, patient lifecycle automation, longevity clinic software, functional medicine AI',
  alternates: {
    canonical: 'https://www.a2v2.ai/about',
  },
  openGraph: {
    title: 'About A2V2.ai | HIPAA-Compliant AI for Clinics',
    description:
      'A2V2 builds HIPAA-compliant AI that closes the gap between visits, automating the patient lifecycle so clinical teams can focus on care.',
    url: 'https://www.a2v2.ai/about',
    type: 'website',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About A2V2.ai | HIPAA-Compliant AI for Clinics',
    description:
      'A2V2 builds HIPAA-compliant AI that closes the gap between visits, automating the patient lifecycle so clinical teams can focus on care.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About A2V2.ai',
            description:
              'A2V2 builds HIPAA-compliant AI that closes the gap between visits, automating the patient lifecycle so clinical teams can focus on care.',
            url: 'https://www.a2v2.ai/about',
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
              },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'A2V2.ai',
            url: 'https://www.a2v2.ai',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
            },
            sameAs: [
              'https://x.com/A2V2_Ai',
              'https://www.linkedin.com/company/a2v2',
              'https://www.instagram.com/a2v2.ai',
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.a2v2.ai' },
              { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.a2v2.ai/about' },
            ],
          }),
        }}
      />
      <AboutPageContent />
    </>
  )
}
