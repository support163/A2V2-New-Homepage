import type { Metadata } from 'next'
import PatientRetentionMetricsBlogPost from '@/components/blog/PatientRetentionMetricsBlogPost'

export const metadata: Metadata = {
  title: 'The Patient Retention Metrics Worth Actually Tracking | A2V2.ai Blog',
  description:
    'Revenue and appointment counts do not tell you if patients are staying. Learn the retention metrics clinics should track, and how to act on them.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/patient-retention-metrics-to-track',
  },
  openGraph: {
    title: 'The Patient Retention Metrics Worth Actually Tracking | A2V2.ai Blog',
    description:
      'Revenue and appointment counts do not tell you if patients are staying. Learn the retention metrics clinics should track, and how to act on them.',
    url: 'https://www.a2v2.ai/blog/patient-retention-metrics-to-track',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Patient Retention Metrics Worth Actually Tracking | A2V2.ai Blog',
    description:
      'Revenue and appointment counts do not tell you if patients are staying. Learn the retention metrics clinics should track, and how to act on them.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
  keywords:
    'patient retention metrics, clinic KPIs, patient churn rate, healthcare retention measurement, practice metrics, patient adherence tracking',
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
            headline: 'The patient retention metrics worth actually tracking',
            description:
              'Revenue and appointment counts do not tell you if patients are staying. Learn the retention metrics clinics should track, and how to act on them.',
            url: 'https://www.a2v2.ai/blog/patient-retention-metrics-to-track',
            datePublished: '2026-09-04',
            author: { '@type': 'Organization', name: 'A2V2.ai', url: 'https://www.a2v2.ai' },
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: { '@type': 'ImageObject', url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg' },
            },
            image: 'https://www.a2v2.ai/images/patient-retention-metrics-to-track.png',
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
                name: 'What is the most important patient retention metric?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Second visit rate, meaning how many first-time patients return. It captures the most fragile point in the relationship and changes before revenue does.',
                },
              },
              {
                '@type': 'Question',
                name: 'How often should a clinic review retention metrics?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Monthly is enough for most practices. Consistency matters more than frequency, and retention changes take at least a full protocol cycle to appear.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why is revenue a poor measure of retention?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'New patients can mask departing ones. Revenue often looks stable while retention is declining, and by the time it dips the drop-off happened months earlier.',
                },
              },
              {
                '@type': 'Question',
                name: 'What counts as a lapsed patient?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It depends on your protocol lengths. Define a window that reflects how often an engaged patient would normally be seen or heard from, and treat silence past it as a signal.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does A2V2 track patient data over time?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "A2V2's patient CRM tracks configurable health parameters with trends and insights over time, and its automations can flag patients based on where they are in their protocol.",
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
              { '@type': 'ListItem', position: 3, name: 'The Patient Retention Metrics Worth Actually Tracking', item: 'https://www.a2v2.ai/blog/patient-retention-metrics-to-track' },
            ],
          }),
        }}
      />
      <PatientRetentionMetricsBlogPost />
    </>
  )
}
