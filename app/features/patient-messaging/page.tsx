import type { Metadata } from 'next'
import PatientMessagingPage from '@/components/PatientMessagingPage'

export const metadata: Metadata = {
  title: 'SMS Patient Messaging and Text Reminders for Clinics | A2V2.ai',
  description:
    'A2V2 sends automated SMS reminders and updates to your patients, tied to their record and your protocols, inside HIPAA-compliant infrastructure.',
  alternates: {
    canonical: 'https://www.a2v2.ai/features/patient-messaging',
  },
  openGraph: {
    title: 'SMS Patient Messaging and Text Reminders for Clinics | A2V2.ai',
    description:
      'A2V2 sends automated SMS reminders and updates to your patients, tied to their record and your protocols, inside HIPAA-compliant infrastructure.',
    url: 'https://www.a2v2.ai/features/patient-messaging',
    type: 'website',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SMS Patient Messaging and Text Reminders for Clinics | A2V2.ai',
    description:
      'A2V2 sends automated SMS reminders and updates to your patients, tied to their record and your protocols, inside HIPAA-compliant infrastructure.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
  keywords:
    'patient text reminders, SMS patient messaging, healthcare SMS, appointment reminder texts, clinic text messaging, HIPAA SMS, patient communication software',
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
            name: 'SMS Patient Messaging and Text Reminders for Clinics',
            description:
              'A2V2 sends automated SMS reminders and updates to your patients, tied to their record and your protocols, inside HIPAA-compliant infrastructure.',
            url: 'https://www.a2v2.ai/features/patient-messaging',
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
              { '@type': 'ListItem', position: 2, name: 'Features', item: 'https://www.a2v2.ai/features/patient-messaging' },
              { '@type': 'ListItem', position: 3, name: 'Patient Messaging', item: 'https://www.a2v2.ai/features/patient-messaging' },
            ],
          }),
        }}
      />
      <PatientMessagingPage />
    </>
  )
}
