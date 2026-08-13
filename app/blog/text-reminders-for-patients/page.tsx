import type { Metadata } from 'next'
import TextRemindersForPatientsBlogPost from '@/components/blog/TextRemindersForPatientsBlogPost'

export const metadata: Metadata = {
  title: 'Why Text Reminders Work Better Than Email for Patients | A2V2.ai Blog',
  description:
    'Text reminders get seen when emails get buried. Learn why SMS works better for patient communication, what to send, and how to do it without annoying patients.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/text-reminders-for-patients',
  },
  openGraph: {
    title: 'Why Text Reminders Work Better Than Email for Patients | A2V2.ai Blog',
    description:
      'Text reminders get seen when emails get buried. Learn why SMS works better for patient communication, what to send, and how to do it without annoying patients.',
    url: 'https://www.a2v2.ai/blog/text-reminders-for-patients',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Text Reminders Work Better Than Email for Patients | A2V2.ai Blog',
    description:
      'Text reminders get seen when emails get buried. Learn why SMS works better for patient communication, what to send, and how to do it without annoying patients.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
  keywords:
    'patient text reminders, SMS appointment reminders, reduce no-shows, patient communication, clinic text messaging, appointment reminder best practices',
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
            headline: 'Why text reminders work better than email for patients',
            description:
              'Text reminders get seen when emails get buried. Learn why SMS works better for patient communication, what to send, and how to do it without annoying patients.',
            url: 'https://www.a2v2.ai/blog/text-reminders-for-patients',
            datePublished: '2026-08-13',
            author: { '@type': 'Organization', name: 'A2V2.ai', url: 'https://www.a2v2.ai' },
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: { '@type': 'ImageObject', url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg' },
            },
            image: 'https://www.a2v2.ai/images/text-reminders-for-patients.png',
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
                name: 'Are text reminders better than email for patients?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'For short, time-sensitive messages like appointment reminders and refill nudges, texts are generally more effective because they are seen quickly and do not compete with a crowded inbox. Email is still better for long instructions, documents, and anything that needs careful reading.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is texting patients HIPAA-compliant?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It can be, when it runs inside compliant infrastructure with a Business Associate Agreement, encryption, and audit trails. Keeping message content minimal is also good practice.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need patient consent to send text reminders?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Generally yes. Automated messaging to patients typically requires their permission, so capturing consent during intake is the practical approach. Confirm the specifics with your own compliance advisor.',
                },
              },
              {
                '@type': 'Question',
                name: 'How many texts are too many?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'There is no fixed number, but every extra message makes the next one easier to ignore. Reserve texts for short, time-sensitive things and leave longer communication to email.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can text reminders be automated?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. A2V2 sends SMS reminders automatically based on your protocols, so they go out at the right time without your team having to remember.',
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
              { '@type': 'ListItem', position: 1, name: 'Home',          item: 'https://www.a2v2.ai' },
              { '@type': 'ListItem', position: 2, name: 'Blog',          item: 'https://www.a2v2.ai/blog' },
              { '@type': 'ListItem', position: 3, name: 'Text Reminders for Patients', item: 'https://www.a2v2.ai/blog/text-reminders-for-patients' },
            ],
          }),
        }}
      />
      <TextRemindersForPatientsBlogPost />
    </>
  )
}
