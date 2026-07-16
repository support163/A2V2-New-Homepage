import type { Metadata } from 'next'
import EhrDataPage from '@/components/EhrDataPage'

export const metadata: Metadata = {
  title: 'Bring Your EHR and EMR Data Into One Place | A2V2.ai',
  description:
    'A2V2 pulls your existing EHR and EMR data and maps it into your patient records, available for patient and provider review, inside HIPAA-compliant infrastructure.',
  alternates: {
    canonical: 'https://www.a2v2.ai/features/ehr-data',
  },
  openGraph: {
    title: 'Bring Your EHR and EMR Data Into One Place | A2V2.ai',
    description:
      'A2V2 pulls your existing EHR and EMR data and maps it into your patient records, available for patient and provider review, inside HIPAA-compliant infrastructure.',
    url: 'https://www.a2v2.ai/features/ehr-data',
    type: 'website',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bring Your EHR and EMR Data Into One Place | A2V2.ai',
    description:
      'A2V2 pulls your existing EHR and EMR data and maps it into your patient records, available for patient and provider review, inside HIPAA-compliant infrastructure.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
  keywords:
    'EHR data, EMR data, patient data consolidation, healthcare data management, patient records, clinic data platform',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Bring Your EHR and EMR Data Into One Place',
            description:
              'A2V2 pulls your existing EHR and EMR data and maps it into your patient records, available for patient and provider review, inside HIPAA-compliant infrastructure.',
            url: 'https://www.a2v2.ai/features/ehr-data',
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
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://www.a2v2.ai' },
              { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://www.a2v2.ai/features/ehr-data' },
              { '@type': 'ListItem', position: 3, name: 'EHR Data', item: 'https://www.a2v2.ai/features/ehr-data' },
            ],
          }),
        }}
      />
      <EhrDataPage />
    </>
  )
}
