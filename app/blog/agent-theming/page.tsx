import type { Metadata } from 'next'
import AgentThemingBlogPost from '@/components/blog/AgentThemingBlogPost'

export const metadata: Metadata = {
  title: 'Agent Theming: Brand Your AI Agent to Match Your Practice | A2V2.ai Blog',
  description:
    'A2V2 agents now support theming. Style your agent with light, dark, or fully custom colors so it matches your brand and builds patient trust. New agents arrive polished out of the box.',
  keywords:
    'agent theming, branded AI agent, healthcare chatbot branding, custom AI agent colors, white label healthcare AI, A2V2 features',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/agent-theming',
  },
  openGraph: {
    title: 'Agent Theming: Brand Your AI Agent to Match Your Practice',
    description:
      'A2V2 agents now support theming. Style your agent with light, dark, or fully custom colors so it matches your brand and builds patient trust. New agents arrive polished out of the box.',
    url: 'https://www.a2v2.ai/blog/agent-theming',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agent Theming: Brand Your AI Agent to Match Your Practice | A2V2.ai Blog',
    description:
      'A2V2 agents now support theming. Style your agent with light, dark, or fully custom colors so it matches your brand and builds patient trust. New agents arrive polished out of the box.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

export default function AgentThemingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Make it unmistakably yours: agent theming is here',
            description:
              'A2V2 agents now support theming. Style your agent with light, dark, or fully custom colors so it matches your brand and builds patient trust.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/agent-theming.png',
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
              },
            },
            datePublished: '2026-07-06',
            dateModified: '2026-07-06',
            url: 'https://www.a2v2.ai/blog/agent-theming',
            articleSection: "What's New",
            keywords:
              'agent theming, branded AI agent, healthcare chatbot branding, custom AI agent colors, white label healthcare AI, A2V2 features',
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
                name: 'What theming options are available?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You can choose light mode, dark mode, or set fully custom colors to match your brand palette.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do new agents come pre-styled?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Brand-new agents arrive polished out of the box with a clean white background and your A2V2 logo, so they look professional from the start.',
                },
              },
              {
                '@type': 'Question',
                name: "Where do I change my agent's theme?",
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Go to Agents, select your agent, then Agent UI, then Appearance to set your theme and colors.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why does branding my agent matter?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A branded agent builds instant trust. When the chat looks like your practice, patients feel like they are talking to you rather than a generic bot.',
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
              { '@type': 'ListItem', position: 3, name: 'Make it unmistakably yours: agent theming is here', item: 'https://www.a2v2.ai/blog/agent-theming' },
            ],
          }),
        }}
      />
      <AgentThemingBlogPost />
    </>
  )
}
