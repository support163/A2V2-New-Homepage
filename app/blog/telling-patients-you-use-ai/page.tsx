import type { Metadata } from 'next'
import TellingPatientsYouUseAIBlogPost from '@/components/blog/TellingPatientsYouUseAIBlogPost'

export const metadata: Metadata = {
  title: 'What to Tell Patients When Your Clinic Uses AI | A2V2.ai Blog',
  description:
    'Should you tell patients you use AI? Learn how to be transparent about AI in your clinic in a way that builds trust rather than raising concerns.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/telling-patients-you-use-ai',
  },
  openGraph: {
    title: 'What to Tell Patients When Your Clinic Uses AI | A2V2.ai Blog',
    description:
      'Should you tell patients you use AI? Learn how to be transparent about AI in your clinic in a way that builds trust rather than raising concerns.',
    url: 'https://www.a2v2.ai/blog/telling-patients-you-use-ai',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Tell Patients When Your Clinic Uses AI | A2V2.ai Blog',
    description:
      'Should you tell patients you use AI? Learn how to be transparent about AI in your clinic in a way that builds trust rather than raising concerns.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
  keywords:
    'AI transparency patients, telling patients about AI, AI in healthcare trust, patient communication AI, disclose AI use clinic',
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
            headline: 'What to tell patients when your clinic uses AI',
            description:
              'Should you tell patients you use AI? Learn how to be transparent about AI in your clinic in a way that builds trust rather than raising concerns.',
            url: 'https://www.a2v2.ai/blog/telling-patients-you-use-ai',
            datePublished: '2026-09-07',
            author: { '@type': 'Organization', name: 'A2V2.ai', url: 'https://www.a2v2.ai' },
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: { '@type': 'ImageObject', url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg' },
            },
            image: 'https://www.a2v2.ai/images/telling-patients-you-use-ai.png',
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
                name: 'Do I have to tell patients my clinic uses AI?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Requirements can vary by jurisdiction and situation, so confirm your specific obligations with a qualified professional. As a matter of trust, being upfront is generally the better approach regardless.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do patients usually react to AI in a clinic?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most patients are fine with it once they know a human is still responsible for their care and their information is protected. The negative reaction usually comes from discovering it themselves rather than being told.',
                },
              },
              {
                '@type': 'Question',
                name: "What should a clinic's AI disclosure say?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Keep it to a sentence or two: what the AI helps with, that providers make every clinical decision, that patient information is protected and not used to train AI models, and how to reach a real person.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where should the disclosure go?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'In intake materials, the welcome message when a patient starts a conversation, a short page on your website, and as a consistent answer your staff can give when asked.',
                },
              },
              {
                '@type': 'Question',
                name: "Does A2V2's AI make clinical decisions?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "No. A2V2's agents handle routine communication and escalate anything requiring clinical judgment to your team. Medical decisions stay with your providers.",
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
              { '@type': 'ListItem', position: 3, name: 'What to Tell Patients When Your Clinic Uses AI', item: 'https://www.a2v2.ai/blog/telling-patients-you-use-ai' },
            ],
          }),
        }}
      />
      <TellingPatientsYouUseAIBlogPost />
    </>
  )
}
