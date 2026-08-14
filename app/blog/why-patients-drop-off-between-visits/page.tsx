import type { Metadata } from 'next'
import WhyPatientsDropOffBlogPost from '@/components/blog/WhyPatientsDropOffBlogPost'

export const metadata: Metadata = {
  title: 'Why Patients Drop Off Between Visits (And How to Fix It) | A2V2.ai Blog',
  description:
    'Around half of patients on long-term treatments stop within the first year. Learn why drop-off happens between visits and what clinics can do to keep patients on protocol.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/why-patients-drop-off-between-visits',
  },
  openGraph: {
    title: 'Why Patients Drop Off Between Visits (And How to Fix It) | A2V2.ai Blog',
    description:
      'Around half of patients on long-term treatments stop within the first year. Learn why drop-off happens between visits and what clinics can do to keep patients on protocol.',
    url: 'https://www.a2v2.ai/blog/why-patients-drop-off-between-visits',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Patients Drop Off Between Visits (And How to Fix It) | A2V2.ai Blog',
    description:
      'Around half of patients on long-term treatments stop within the first year. Learn why drop-off happens between visits and what clinics can do to keep patients on protocol.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
  keywords:
    'patient retention, patient drop off, treatment adherence, patient adherence clinic, keep patients on protocol, reduce patient churn, longevity clinic retention',
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
            headline: 'Why patients drop off between visits, and what to do about it',
            description:
              'Around half of patients on long-term treatments stop within the first year. Learn why drop-off happens between visits and what clinics can do to keep patients on protocol.',
            url: 'https://www.a2v2.ai/blog/why-patients-drop-off-between-visits',
            datePublished: '2026-08-14',
            author: { '@type': 'Organization', name: 'A2V2.ai', url: 'https://www.a2v2.ai' },
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: { '@type': 'ImageObject', url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg' },
            },
            image: 'https://www.a2v2.ai/images/why-patients-drop-off-between-visits.png',
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
                name: 'Why do patients stop following their treatment plan?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Usually not because of a single decision. Drop-off tends to come from small gaps between visits, an unanswered question, a lapsed refill, or progress that stops feeling visible. Research on long-term treatments has found roughly half of patients stop within the first year.',
                },
              },
              {
                '@type': 'Question',
                name: 'When are patients most likely to drop off?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Adherence tends to decline noticeably around the six month mark, though the earliest weeks of a protocol also matter because that is when questions and side effects come up and confidence is still forming.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can a clinic improve patient retention?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Focus on consistency between visits. Put a touchpoint at the moments patients typically fall off, remind them about refills before they lapse, show them their progress over time, and answer small questions quickly.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does automating follow-up make care feel impersonal?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It does not have to. Automation handles the timing and the routine touchpoints so they actually happen. Anything requiring clinical judgment should still go to your team, so the human part of care stays human.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does A2V2 help with patient drop-off?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A2V2 automates the routine touchpoints across the patient lifecycle, including check-ins, refill reminders, and answering common questions, while escalating anything clinical to your team.',
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
              { '@type': 'ListItem', position: 3, name: 'Why Patients Drop Off Between Visits', item: 'https://www.a2v2.ai/blog/why-patients-drop-off-between-visits' },
            ],
          }),
        }}
      />
      <WhyPatientsDropOffBlogPost />
    </>
  )
}
