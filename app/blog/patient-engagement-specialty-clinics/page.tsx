import type { Metadata } from 'next'
import PatientEngagementSpecialtyClinicsBlogPost from '@/components/blog/PatientEngagementSpecialtyClinicsBlogPost'

export const metadata: Metadata = {
  title: 'Why Patient Engagement Is Different at Specialty Clinics | A2V2.ai Blog',
  description:
    'HRT, longevity, functional medicine, and weight loss clinics run long protocols with ongoing patients. Learn what that means for patient engagement and retention.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/patient-engagement-specialty-clinics',
  },
  openGraph: {
    title: 'Why Patient Engagement Is Different at Specialty Clinics | A2V2.ai Blog',
    description:
      'HRT, longevity, functional medicine, and weight loss clinics run long protocols with ongoing patients. Learn what that means for patient engagement and retention.',
    url: 'https://www.a2v2.ai/blog/patient-engagement-specialty-clinics',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Patient Engagement Is Different at Specialty Clinics | A2V2.ai Blog',
    description:
      'HRT, longevity, functional medicine, and weight loss clinics run long protocols with ongoing patients. Learn what that means for patient engagement and retention.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
  keywords:
    'specialty clinic patient engagement, HRT clinic retention, longevity clinic patients, functional medicine patient communication, GLP-1 patient adherence, wellness clinic software',
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Why patient engagement is different at specialty clinics',
            description:
              'HRT, longevity, functional medicine, and weight loss clinics run long protocols with ongoing patients. Learn what that means for patient engagement and retention.',
            url: 'https://www.a2v2.ai/blog/patient-engagement-specialty-clinics',
            datePublished: '2026-08-19',
            author: { '@type': 'Organization', name: 'A2V2.ai', url: 'https://www.a2v2.ai' },
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: { '@type': 'ImageObject', url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg' },
            },
            image: 'https://www.a2v2.ai/images/patient-engagement-specialty-clinics.png',
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How is patient engagement different at a specialty clinic?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Specialty clinics like HRT, longevity, functional medicine, and weight loss practices run long protocols, so most of the patient relationship happens between visits. Engagement has to cover those months, not just the appointments.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why do specialty clinic patients stop treatment?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Usually from small gaps rather than a decision. Questions go unanswered, refills lapse, or slow progress starts to feel like no progress. Each of those happens between visits.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should a specialty clinic track for each patient?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Where the patient is in their protocol, the health parameters relevant to their treatment and how those are trending, and whether they have gone quiet since their last contact.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can patient engagement be automated without feeling impersonal?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, when automation handles the timing and the routine touchpoints while anything clinical still routes to your team. The consistency improves and the human part of care stays human.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which clinics does A2V2 work with?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A2V2 is built for specialty practices including HRT and hormone clinics, longevity and anti-aging, functional and integrative medicine, weight loss and GLP-1 programs, and IV therapy and wellness clinics.',
                },
              },
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
              { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.a2v2.ai/blog' },
              { '@type': 'ListItem', position: 3, name: 'Why Patient Engagement Is Different at Specialty Clinics', item: 'https://www.a2v2.ai/blog/patient-engagement-specialty-clinics' },
            ],
          }),
        }}
      />
      <PatientEngagementSpecialtyClinicsBlogPost />
    </>
  )
}
