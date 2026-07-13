import type { Metadata } from 'next'
import HowAiReducesAdminWorkBlogPost from '@/components/blog/HowAiReducesAdminWorkBlogPost'

export const metadata: Metadata = {
  title: 'How AI Reduces Administrative Work in Your Clinic | A2V2.ai Blog',
  description:
    'AI can take the repetitive admin off your team\'s plate, from intake to scheduling to notes. Here is how clinics use AI to cut busywork and focus on patients.',
  keywords:
    'reduce administrative work healthcare, AI clinic admin, reduce paperwork medical practice, AI healthcare automation, clinic efficiency AI, medical admin automation',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/how-ai-reduces-admin-work-clinic',
  },
  openGraph: {
    title: 'How AI Reduces Administrative Work in Your Clinic',
    description:
      'AI can take the repetitive admin off your team\'s plate, from intake to scheduling to notes. Here is how clinics use AI to cut busywork and focus on patients.',
    url: 'https://www.a2v2.ai/blog/how-ai-reduces-admin-work-clinic',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How AI Reduces Administrative Work in Your Clinic | A2V2.ai Blog',
    description:
      'AI can take the repetitive admin off your team\'s plate, from intake to scheduling to notes. Here is how clinics use AI to cut busywork and focus on patients.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

export default function HowAiReducesAdminWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How AI reduces administrative work in your clinic',
            description:
              'AI can take the repetitive admin off your team\'s plate, from intake to scheduling to notes. Here is how clinics use AI to cut busywork and focus on patients.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/how-ai-reduces-admin-work.png',
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
              },
            },
            datePublished: '2026-07-13',
            dateModified: '2026-07-13',
            url: 'https://www.a2v2.ai/blog/how-ai-reduces-admin-work-clinic',
            articleSection: 'Best Practices',
            keywords:
              'reduce administrative work healthcare, AI clinic admin, reduce paperwork medical practice, AI healthcare automation, clinic efficiency AI, medical admin automation',
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
                name: 'What administrative tasks can AI handle in a clinic?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI is well suited to repetitive admin like patient intake, data entry from documents, scheduling, meeting notes, organizing records, and answering routine patient questions. It handles the busywork so your team can focus on care.',
                },
              },
              {
                '@type': 'Question',
                name: 'Will AI replace my staff?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. AI is designed to take repetitive administrative work off your team\'s plate, not replace them. Clinical judgment and patient care stay firmly with your providers.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI really reduce data entry?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. For example, AI can read an uploaded document and automatically fill in the matching form fields, so your team does not have to retype information a patient already provided.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does AI make clinical decisions?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. A well-designed AI agent handles routine communication and administrative tasks and escalates anything requiring clinical judgment to your team. Medical decisions always stay with your providers.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does A2V2 help reduce admin work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A2V2 brings AI-powered intake, a patient CRM, scheduling with an AI notetaker, and AI agents together in one HIPAA-compliant platform, automating the repetitive tasks that fill your team\'s day.',
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
              { '@type': 'ListItem', position: 1, name: 'Blog', item: 'https://www.a2v2.ai/blog' },
              { '@type': 'ListItem', position: 2, name: 'Best Practices', item: 'https://www.a2v2.ai/blog?category=Best+Practices' },
              { '@type': 'ListItem', position: 3, name: 'How AI reduces administrative work in your clinic', item: 'https://www.a2v2.ai/blog/how-ai-reduces-admin-work-clinic' },
            ],
          }),
        }}
      />
      <HowAiReducesAdminWorkBlogPost />
    </>
  )
}
