import type { Metadata } from 'next'
import HowToReduceNoShowsBlogPost from '@/components/blog/HowToReduceNoShowsBlogPost'

export const metadata: Metadata = {
  title: 'How to Reduce No-Shows at Your Clinic | A2V2.ai Blog',
  description:
    'Most no-shows are preventable. Learn practical ways to reduce missed appointments at your clinic, from reminder timing to easier rescheduling.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/how-to-reduce-no-shows',
  },
  openGraph: {
    title: 'How to Reduce No-Shows at Your Clinic | A2V2.ai Blog',
    description:
      'Most no-shows are preventable. Learn practical ways to reduce missed appointments at your clinic, from reminder timing to easier rescheduling.',
    url: 'https://www.a2v2.ai/blog/how-to-reduce-no-shows',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Reduce No-Shows at Your Clinic | A2V2.ai Blog',
    description:
      'Most no-shows are preventable. Learn practical ways to reduce missed appointments at your clinic, from reminder timing to easier rescheduling.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
  keywords:
    'reduce no-shows, missed appointments clinic, appointment reminders, no-show rate, patient attendance, clinic scheduling',
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
            headline: 'How to reduce no-shows at your clinic',
            description:
              'Most no-shows are preventable. Learn practical ways to reduce missed appointments at your clinic, from reminder timing to easier rescheduling.',
            url: 'https://www.a2v2.ai/blog/how-to-reduce-no-shows',
            datePublished: '2026-09-15',
            author: { '@type': 'Organization', name: 'A2V2.ai', url: 'https://www.a2v2.ai' },
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: { '@type': 'ImageObject', url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg' },
            },
            image: 'https://www.a2v2.ai/images/how-to-reduce-no-shows.png',
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
                name: 'Why do patients no-show?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most commonly they simply forgot. Other frequent reasons are that rescheduling felt like too much hassle, they were not sure the visit was important, or they felt awkward after already missing once.',
                },
              },
              {
                '@type': 'Question',
                name: 'When should appointment reminders be sent?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'More than once, at different distances. One several days ahead gives patients time to reschedule if needed, and one the day before catches the people who forgot.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are text reminders better than email for appointments?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'For short, time-sensitive reminders, texts generally get seen faster because they do not compete with a crowded inbox. Email is better suited to longer instructions and documents.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do cancellation fees reduce no-shows?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'They can help at the margins, but they treat no-shows as a discipline problem when most are caused by forgetting or by rescheduling being too difficult. Fixing reminders and friction usually does more.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does A2V2 help reduce no-shows?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "A2V2 sends automated SMS appointment reminders tied to each patient's schedule, syncs with your calendar, and escalates anything that needs a person to your team.",
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
              { '@type': 'ListItem', position: 3, name: 'How to Reduce No-Shows at Your Clinic', item: 'https://www.a2v2.ai/blog/how-to-reduce-no-shows' },
            ],
          }),
        }}
      />
      <HowToReduceNoShowsBlogPost />
    </>
  )
}
