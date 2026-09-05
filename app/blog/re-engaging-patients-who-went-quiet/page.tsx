import type { Metadata } from 'next'
import ReEngagingPatientsWhoWentQuietBlogPost from '@/components/blog/ReEngagingPatientsWhoWentQuietBlogPost'

export const metadata: Metadata = {
  title: 'How to Re-Engage Patients Who Have Gone Quiet | A2V2.ai Blog',
  description:
    'Patients who stop scheduling are often still reachable. Learn how to identify lapsed patients and win them back without sounding pushy.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/re-engaging-patients-who-went-quiet',
  },
  openGraph: {
    title: 'How to Re-Engage Patients Who Have Gone Quiet | A2V2.ai Blog',
    description:
      'Patients who stop scheduling are often still reachable. Learn how to identify lapsed patients and win them back without sounding pushy.',
    url: 'https://www.a2v2.ai/blog/re-engaging-patients-who-went-quiet',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Re-Engage Patients Who Have Gone Quiet | A2V2.ai Blog',
    description:
      'Patients who stop scheduling are often still reachable. Learn how to identify lapsed patients and win them back without sounding pushy.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
  keywords:
    'patient re-engagement, lapsed patients, win back patients, patient reactivation, inactive patients clinic, patient churn',
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
            headline: 'How to re-engage patients who have gone quiet',
            description:
              'Patients who stop scheduling are often still reachable. Learn how to identify lapsed patients and win them back without sounding pushy.',
            url: 'https://www.a2v2.ai/blog/re-engaging-patients-who-went-quiet',
            datePublished: '2026-09-03',
            author: { '@type': 'Organization', name: 'A2V2.ai', url: 'https://www.a2v2.ai' },
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: { '@type': 'ImageObject', url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg' },
            },
            image: 'https://www.a2v2.ai/images/re-engaging-patients-who-went-quiet.png',
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
                name: 'When is a patient considered lapsed?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It depends on your specialty and protocol length. Define a window that reflects how often an engaged patient would normally be seen or heard from, then treat silence beyond that window as a signal.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should a patient re-engagement message say?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Keep it short and human. Ask how they are doing before asking them to book, avoid anything that sounds like guilt, and give one simple next step.',
                },
              },
              {
                '@type': 'Question',
                name: 'How many times should you follow up with a lapsed patient?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Two or three attempts spread over time is reasonable. Beyond that, persistence tends to hurt rather than help, and anyone who opts out should be removed immediately.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is it easier to win back a patient or find a new one?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Re-engaging a former patient is generally easier, since they already know your clinic and chose it once. The relationship exists, it just went unattended.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does A2V2 help with re-engagement?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A2V2 can flag patients who have gone quiet, trigger check-ins automatically based on where a patient is in their protocol, and escalate anything clinical to your team.',
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
              { '@type': 'ListItem', position: 3, name: 'How to Re-Engage Patients Who Have Gone Quiet', item: 'https://www.a2v2.ai/blog/re-engaging-patients-who-went-quiet' },
            ],
          }),
        }}
      />
      <ReEngagingPatientsWhoWentQuietBlogPost />
    </>
  )
}
