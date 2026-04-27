import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import ModelCatalogBlogPost from '@/components/blog/ModelCatalogBlogPost'

export const metadata: Metadata = {
  title: 'April 2026 Model Catalog Update: More HIPAA-Eligible AI Models, Lower Costs, Zero Downtime | A2V2.ai Blog',
  description:
    'A2V2.ai just expanded its HIPAA-eligible model lineup to include Claude 4.6, Gemini 2.5, and GLM-5. Older models have been retired and auto-migrated. Here is what changed and what it means for your clinic.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/april-2026-model-catalog-update',
  },
  openGraph: {
    title: 'April 2026 Model Catalog Update: More HIPAA-Eligible AI Models, Lower Costs, Zero Downtime',
    description:
      'A2V2.ai just expanded its HIPAA-eligible model lineup to include Claude 4.6, Gemini 2.5, and GLM-5. Older models have been retired and auto-migrated. Here is what changed and what it means for your clinic.',
    url: 'https://www.a2v2.ai/blog/april-2026-model-catalog-update',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'April 2026 Model Catalog Update: More HIPAA-Eligible AI Models, Lower Costs, Zero Downtime | A2V2.ai Blog',
    description:
      'A2V2.ai just expanded its HIPAA-eligible model lineup to include Claude 4.6, Gemini 2.5, and GLM-5. Older models have been retired and auto-migrated. Here is what changed and what it means for your clinic.',
  },
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
            headline: 'April 2026 Model Catalog Update: More HIPAA-Eligible AI Models, Lower Costs, Zero Downtime',
            description:
              'A2V2.ai just expanded its HIPAA-eligible model lineup to include Claude 4.6, Gemini 2.5, and GLM-5. Older models have been retired and auto-migrated.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/blog-post7.png',
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
              },
            },
            datePublished: '2026-04-26',
            dateModified: '2026-04-26',
            url: 'https://www.a2v2.ai/blog/april-2026-model-catalog-update',
            articleSection: "What's New",
            keywords:
              'AI models, HIPAA compliance, Claude 4.6, Gemini 2.5, longevity medicine, Medical Agents, A2V2.ai',
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
                name: 'What AI models does A2V2.ai support for HIPAA-compliant Medical Agents?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'As of April 2026: Claude Opus 4.6, Claude Sonnet 4.6, Claude Haiku 4.5, Gemini 2.5 Pro, Gemini 2.5 Flash, GLM-5, and open-source models including Llama and GPT-OSS.',
                },
              },
              {
                '@type': 'Question',
                name: 'Were any models retired?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. GPT-4.1, GPT-4o, o3, GPT-4.5 and variants replaced by GPT-5.4 family. Claude Opus 4.1 replaced by Claude Opus 4.6. Claude Sonnet 4.5 replaced by Claude Sonnet 4.6. Gemini 2.0 Flash replaced by Gemini 2.5 Flash. All auto-migrated.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need to do anything?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'If you never picked a model, no. If you selected a retired model, open Sandbox, confirm replacement, test prompts, adjust if needed.',
                },
              },
              {
                '@type': 'Question',
                name: 'Did migration change anything besides the model?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Knowledge base, chat history, instructions, temperature, sub-agents, skills, tools, CRM data, parameters, prescriptions. All unchanged. Only the model selection was updated.',
                },
              },
              {
                '@type': 'Question',
                name: 'How did credit costs change?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most went down. Claude Opus 4.6: 10 to 3 credits. Claude Sonnet 4.6: 3 to 2. GLM-5: 2 to 1. Only increase: Gemini 2.5 Pro from 1 to 2 credits.',
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
              { '@type': 'ListItem', position: 2, name: "What's New", item: 'https://www.a2v2.ai/blog?category=What%27s+New' },
              { '@type': 'ListItem', position: 3, name: 'April 2026 Model Catalog Update', item: 'https://www.a2v2.ai/blog/april-2026-model-catalog-update' },
            ],
          }),
        }}
      />
      <main style={{ background: '#0F0E0D' }}>
        <ScrollAnimator />
        <Navbar />
        <ModelCatalogBlogPost />
        <Footer />
      </main>
    </>
  )
}
