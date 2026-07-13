import type { Metadata } from 'next'
import KeepPatientDataSafeBlogPost from '@/components/blog/KeepPatientDataSafeBlogPost'

export const metadata: Metadata = {
  title: 'How to Keep Patient Data Safe When Using AI | A2V2.ai Blog',
  description:
    'A practical guide for clinics on keeping patient data safe when using AI, covering BAAs, encryption, access controls, and the mistakes to avoid with consumer AI tools.',
  keywords:
    'patient data safety AI, AI patient data security, HIPAA AI, protect patient data, healthcare AI security, secure AI clinic',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/keep-patient-data-safe-using-ai',
  },
  openGraph: {
    title: 'How to Keep Patient Data Safe When Using AI',
    description:
      'A practical guide for clinics on keeping patient data safe when using AI, covering BAAs, encryption, access controls, and the mistakes to avoid with consumer AI tools.',
    url: 'https://www.a2v2.ai/blog/keep-patient-data-safe-using-ai',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Keep Patient Data Safe When Using AI | A2V2.ai Blog',
    description:
      'A practical guide for clinics on keeping patient data safe when using AI, covering BAAs, encryption, access controls, and the mistakes to avoid with consumer AI tools.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

export default function KeepPatientDataSafePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How to keep patient data safe when using AI',
            description:
              'A practical guide for clinics on keeping patient data safe when using AI, covering BAAs, encryption, access controls, and the mistakes to avoid with consumer AI tools.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/keep-patient-data-safe-using-ai.png',
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
            url: 'https://www.a2v2.ai/blog/keep-patient-data-safe-using-ai',
            articleSection: 'Privacy & Trust',
            keywords:
              'patient data safety AI, AI patient data security, HIPAA AI, protect patient data, healthcare AI security, secure AI clinic',
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
                name: 'Can I use ChatGPT with patient data?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not the standard consumer version. It typically does not offer a BAA and may use submitted data to improve its models. For anything involving patient data, use a HIPAA-compliant tool with a BAA in place.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the most important thing for keeping patient data safe with AI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A Business Associate Agreement. It is the legal foundation that makes a vendor responsible for protecting PHI. Without a BAA, an AI tool should never handle patient data.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is it safe to use AI for tasks that do not involve patient data?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Consumer AI is fine for general tasks that do not involve PHI, like drafting marketing content or researching a topic without patient details. The risk comes specifically from putting patient information into non-compliant tools.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I stop my staff from using consumer AI with patient data?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Create a clear AI use policy, train your team on what counts as PHI, and most importantly give them a compliant AI tool that is just as useful. People reach for consumer tools because they help, so provide a safe alternative that helps just as much.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does A2V2 keep patient data safe?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A2V2 runs AI inside HIPAA-compliant infrastructure with a BAA on every plan, AES-256 encryption, secured LLM access where your data is never used for training, audit trails, role-based access controls, and US-based data centers.',
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
              { '@type': 'ListItem', position: 2, name: 'Privacy & Trust', item: 'https://www.a2v2.ai/blog?category=Privacy+%26+Trust' },
              { '@type': 'ListItem', position: 3, name: 'How to keep patient data safe when using AI', item: 'https://www.a2v2.ai/blog/keep-patient-data-safe-using-ai' },
            ],
          }),
        }}
      />
      <KeepPatientDataSafeBlogPost />
    </>
  )
}
