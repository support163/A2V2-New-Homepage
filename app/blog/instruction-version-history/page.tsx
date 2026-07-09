import type { Metadata } from 'next'
import InstructionVersionHistoryBlogPost from '@/components/blog/InstructionVersionHistoryBlogPost'

export const metadata: Metadata = {
  title: 'Full Version History for Agent Instructions | A2V2.ai Blog',
  description:
    'A2V2 agents now keep complete version history for their instructions, with the exact version recorded on every response. Experiment freely and roll back changes anytime.',
  keywords:
    'agent instruction version history, AI agent versioning, prompt version control, healthcare AI agent, A2V2 features',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/instruction-version-history',
  },
  openGraph: {
    title: 'Full Version History for Agent Instructions | A2V2.ai Blog',
    description:
      'A2V2 agents now keep complete version history for their instructions, with the exact version recorded on every response. Experiment freely and roll back changes anytime.',
    url: 'https://www.a2v2.ai/blog/instruction-version-history',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Version History for Agent Instructions | A2V2.ai Blog',
    description:
      'A2V2 agents now keep complete version history for their instructions, with the exact version recorded on every response. Experiment freely and roll back changes anytime.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

export default function InstructionVersionHistoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: "Full version history for your agent's instructions",
            description:
              'A2V2 agents now keep complete version history for their instructions, with the exact version recorded on every response. Experiment freely and roll back changes anytime.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/instruction-version-history.png',
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
              },
            },
            datePublished: '2026-07-08',
            dateModified: '2026-07-08',
            url: 'https://www.a2v2.ai/blog/instruction-version-history',
            articleSection: "What's New",
            keywords:
              'agent instruction version history, AI agent versioning, prompt version control, healthcare AI agent, A2V2 features',
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
                name: 'What does version history track?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "It keeps a complete history of your agent's instructions, including both major and minor changes, so you have a full record of how your instructions have evolved.",
                },
              },
              {
                '@type': 'Question',
                name: 'How do I know which instruction version produced a response?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The exact instruction version is recorded on every response your agent gives, so you can always see which version was in effect for any given answer.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I roll back to a previous version?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Because every version is saved, every change is reversible. You can experiment freely and roll back if a change does not work the way you hoped.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where do I find instruction version history?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Go to Agents, select your agent, then Expertise, then Instructions.',
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
              { '@type': 'ListItem', position: 2, name: "What's New", item: "https://www.a2v2.ai/blog?category=What%27s+New" },
              { '@type': 'ListItem', position: 3, name: "Full version history for your agent's instructions", item: 'https://www.a2v2.ai/blog/instruction-version-history' },
            ],
          }),
        }}
      />
      <InstructionVersionHistoryBlogPost />
    </>
  )
}
