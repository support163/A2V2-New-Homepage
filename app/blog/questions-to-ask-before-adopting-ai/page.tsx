import type { Metadata } from 'next'
import QuestionsToAskAiVendorBlogPost from '@/components/blog/QuestionsToAskAiVendorBlogPost'

export const metadata: Metadata = {
  title: '5 Questions to Ask Before Adopting AI in Your Practice | A2V2.ai Blog',
  description:
    'Evaluating AI for your clinic? Ask these five questions about compliance, data use, escalation, fit, and support before you commit to any vendor.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/questions-to-ask-before-adopting-ai',
  },
  openGraph: {
    title: '5 Questions to Ask Before Adopting AI in Your Practice',
    description:
      'Evaluating AI for your clinic? Ask these five questions about compliance, data use, escalation, fit, and support before you commit to any vendor.',
    url: 'https://www.a2v2.ai/blog/questions-to-ask-before-adopting-ai',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/questions-to-ask-before-adopting-ai.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '5 Questions to Ask Before Adopting AI in Your Practice | A2V2.ai Blog',
    description:
      'Evaluating AI for your clinic? Ask these five questions about compliance, data use, escalation, fit, and support before you commit to any vendor.',
    images: ['https://www.a2v2.ai/images/questions-to-ask-before-adopting-ai.png'],
  },
  keywords:
    'adopting AI healthcare, AI vendor questions, choosing AI for clinic, healthcare AI evaluation, medical practice AI, AI due diligence healthcare',
}

export default function BlogPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: '5 questions to ask before adopting AI in your practice',
            description:
              'Evaluating AI for your clinic? Ask these five questions about compliance, data use, escalation, fit, and support before you commit to any vendor.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/questions-to-ask-before-adopting-ai.png',
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
              },
            },
            datePublished: '2026-07-15',
            dateModified: '2026-07-15',
            url: 'https://www.a2v2.ai/blog/questions-to-ask-before-adopting-ai',
            articleSection: 'Quick Guides',
            keywords:
              'adopting AI healthcare, AI vendor questions, choosing AI for clinic, healthcare AI evaluation, medical practice AI, AI due diligence healthcare',
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
                name: 'What is the most important question to ask an AI vendor in healthcare?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Whether they will sign a Business Associate Agreement. Without a BAA, the tool should never handle patient data, regardless of its other features.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I know if an AI tool is safe for patient data?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ask for a BAA, confirm in writing that your data is never used to train AI models, and check for encryption, audit trails, role-based access controls, and known data storage locations.',
                },
              },
              {
                '@type': 'Question',
                name: 'Should AI make clinical decisions in my practice?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. A responsible AI tool handles routine communication and escalates anything requiring clinical judgment to your team. Medical decisions stay with your providers.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are red flags when evaluating a healthcare AI vendor?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Compliance claims they cannot document, vague answers about data use, no clear escalation path for clinical questions, a rigid product, and pressure to sign before your questions are answered.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does A2V2 answer these questions?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A2V2 includes a BAA on every plan, never uses your data to train AI models, escalates anything clinical to your team, is configured around your clinic\'s specialty and workflows, and includes hands-on onboarding support.',
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
              { '@type': 'ListItem', position: 2, name: 'Quick Guides', item: 'https://www.a2v2.ai/blog?category=Quick+Guides' },
              { '@type': 'ListItem', position: 3, name: '5 questions to ask before adopting AI in your practice', item: 'https://www.a2v2.ai/blog/questions-to-ask-before-adopting-ai' },
            ],
          }),
        }}
      />
      <QuestionsToAskAiVendorBlogPost />
    </>
  )
}
