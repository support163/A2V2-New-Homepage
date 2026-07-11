import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Scheduling and Meetings for Clinics | A2V2.ai',
  description:
    "A2V2 syncs Calendly and Google Calendar, lets patients book meetings with automatic Google Meet links, and includes an AI notetaker that transcribes your booked meetings, all HIPAA-compliant.",
  keywords:
    'healthcare scheduling software, patient booking, AI meeting notes, AI notetaker, medical appointment scheduling, Google Calendar clinic, Calendly healthcare',
  alternates: {
    canonical: 'https://www.a2v2.ai/features/scheduling',
  },
  openGraph: {
    title: 'Scheduling and Meetings for Clinics | A2V2.ai',
    description:
      "A2V2 syncs Calendly and Google Calendar, lets patients book meetings with automatic Google Meet links, and includes an AI notetaker that transcribes your booked meetings, all HIPAA-compliant.",
    url: 'https://www.a2v2.ai/features/scheduling',
    siteName: 'A2V2.ai',
    images: [
      {
        url: 'https://www.a2v2.ai/images/og-healthcare.png',
        width: 1200,
        height: 630,
        alt: 'A2V2.ai — Scheduling and Meetings for Clinics',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Scheduling and Meetings for Clinics | A2V2.ai',
    description:
      'Calendly and Google Calendar sync, patient booking with automatic Google Meet links, and an AI notetaker for your meetings, all inside HIPAA-compliant infrastructure.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://www.a2v2.ai/features/scheduling',
      url: 'https://www.a2v2.ai/features/scheduling',
      name: 'Scheduling and Meetings for Clinics | A2V2.ai',
      description:
        "A2V2 syncs Calendly and Google Calendar, lets patients book meetings with automatic Google Meet links, and includes an AI notetaker that transcribes your booked meetings, all HIPAA-compliant.",
      isPartOf: { '@id': 'https://www.a2v2.ai/#website' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home',        item: 'https://www.a2v2.ai' },
        { '@type': 'ListItem', position: 2, name: 'Features',    item: 'https://www.a2v2.ai/features' },
        { '@type': 'ListItem', position: 3, name: 'Scheduling',  item: 'https://www.a2v2.ai/features/scheduling' },
      ],
    },
  ],
}

export default function SchedulingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
