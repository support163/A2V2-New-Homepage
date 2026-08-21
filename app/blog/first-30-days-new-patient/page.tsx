import type { Metadata } from 'next'
import First30DaysNewPatientBlogPost from '@/components/blog/First30DaysNewPatientBlogPost'

export const metadata: Metadata = {
  title: 'The First 30 Days Decide Whether a Patient Stays | A2V2.ai Blog',
  description:
    'The month after a patient starts treatment shapes whether they stick with it. Learn what to do in the first 30 days to keep new patients engaged and on protocol.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/first-30-days-new-patient',
  },
  openGraph: {
    title: 'The First 30 Days Decide Whether a Patient Stays | A2V2.ai Blog',
    description:
      'The month after a patient starts treatment shapes whether they stick with it. Learn what to do in the first 30 days to keep new patients engaged and on protocol.',
    url: 'https://www.a2v2.ai/blog/first-30-days-new-patient',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The First 30 Days Decide Whether a Patient Stays | A2V2.ai Blog',
    description:
      'The month after a patient starts treatment shapes whether they stick with it. Learn what to do in the first 30 days to keep new patients engaged and on protocol.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
  keywords:
    'new patient onboarding, patient retention first month, patient adherence early, clinic onboarding process, keep new patients engaged',
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
            headline: 'The first 30 days decide whether a patient stays',
            description:
              'The month after a patient starts treatment shapes whether they stick with it. Learn what to do in the first 30 days to keep new patients engaged and on protocol.',
            url: 'https://www.a2v2.ai/blog/first-30-days-new-patient',
            datePublished: '2026-08-21',
            author: { '@type': 'Organization', name: 'A2V2.ai', url: 'https://www.a2v2.ai' },
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: { '@type': 'ImageObject', url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg' },
            },
            image: 'https://www.a2v2.ai/images/first-30-days-new-patient.png',
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
                name: 'Why do new patients stop treatment in the first month?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Usually because they are unsure what is normal, results have not appeared yet, the instructions have faded, and the cost feels most real before any benefit is visible. Most of that is solved by communication rather than clinical changes.',
                },
              },
              {
                '@type': 'Question',
                name: 'When should a clinic check in with a new patient?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Around week one, to catch early confusion, and again around week three, when doubt tends to peak. A reminder before the first refill also prevents an early lapse.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should be included in new patient onboarding?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A written summary of the protocol, what to expect and what is normal, when to reach out, an easy way to ask questions, and a recorded baseline you can point back to later.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can a small clinic do this without more staff?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Design the first 30 days once as a defined sequence and let it run automatically off each patient's start date, with anything clinical routed to your team.",
                },
              },
              {
                '@type': 'Question',
                name: 'How does A2V2 support the first 30 days?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A2V2 automates protocol-timed check-ins and refill reminders, answers routine patient questions, tracks health parameters so you have a baseline, and escalates anything clinical to your team.',
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
              { '@type': 'ListItem', position: 3, name: 'The First 30 Days Decide Whether a Patient Stays', item: 'https://www.a2v2.ai/blog/first-30-days-new-patient' },
            ],
          }),
        }}
      />
      <First30DaysNewPatientBlogPost />
    </>
  )
}
