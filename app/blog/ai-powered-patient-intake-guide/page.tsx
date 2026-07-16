import type { Metadata } from 'next'
import AiPoweredPatientIntakeGuideBlogPost from '@/components/blog/AiPoweredPatientIntakeGuideBlogPost'

export const metadata: Metadata = {
  title: 'AI-Powered Patient Intake: A Guide for Clinics | A2V2.ai Blog',
  description:
    'AI-powered patient intake cuts data entry and speeds up onboarding. Learn how custom forms, AI file extraction, and chat-based intake work, and what to look for.',
  keywords:
    'patient intake software, AI patient intake, automated patient intake, digital intake forms, AI form extraction, medical intake, clinic onboarding',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/ai-powered-patient-intake-guide',
  },
  openGraph: {
    title: 'AI-Powered Patient Intake: A Guide for Clinics',
    description:
      'AI-powered patient intake cuts data entry and speeds up onboarding. Learn how custom forms, AI file extraction, and chat-based intake work, and what to look for.',
    url: 'https://www.a2v2.ai/blog/ai-powered-patient-intake-guide',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/ai-powered-patient-intake-guide.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Patient Intake: A Guide for Clinics | A2V2.ai Blog',
    description:
      'AI-powered patient intake cuts data entry and speeds up onboarding. Learn how custom forms, AI file extraction, and chat-based intake work, and what to look for.',
    images: ['https://www.a2v2.ai/images/ai-powered-patient-intake-guide.png'],
  },
}

export default function AiPoweredPatientIntakeGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI-powered patient intake: a guide for clinics',
            description:
              'AI-powered patient intake cuts data entry and speeds up onboarding. Learn how custom forms, AI file extraction, and chat-based intake work, and what to look for.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/ai-powered-patient-intake-guide.png',
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
              },
            },
            datePublished: '2026-07-14',
            dateModified: '2026-07-14',
            url: 'https://www.a2v2.ai/blog/ai-powered-patient-intake-guide',
            articleSection: 'Best Practices',
            keywords:
              'patient intake software, AI patient intake, automated patient intake, digital intake forms, AI form extraction, medical intake, clinic onboarding',
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
                name: 'What is AI-powered patient intake?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It is intake that uses AI to reduce manual work, through custom digital forms, AI that extracts data from uploaded documents to auto-fill forms, and conversational intake that creates a patient record automatically.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does AI file extraction work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You upload a document like a PDF or Word file, and AI reads it and populates the matching form fields. Your team reviews and confirms the result instead of typing everything by hand.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is AI-powered intake secure?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It should be. Intake data is protected health information, so it needs encryption, a Business Associate Agreement, and control over which fields AI can access.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does AI replace my front desk?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. AI reduces the repetitive data entry involved in intake so your team spends less time typing and more time with patients. Your staff still reviews and manages the process.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does A2V2 handle patient intake?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "A2V2 offers a drag-and-drop form builder, AI file extraction that auto-populates forms from uploaded documents, and conversational intake with email verification that creates a patient record automatically, all inside HIPAA-compliant infrastructure.",
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
              { '@type': 'ListItem', position: 3, name: 'AI-powered patient intake: a guide for clinics', item: 'https://www.a2v2.ai/blog/ai-powered-patient-intake-guide' },
            ],
          }),
        }}
      />
      <AiPoweredPatientIntakeGuideBlogPost />
    </>
  )
}
