import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import MedicalAgentsGuideBlogPost from '@/components/blog/MedicalAgentsGuideBlogPost'

export const metadata: Metadata = {
  title: 'Medical Agents User Guide: HIPAA-Compliant Chatbots on A2V2.ai | A2V2.ai Blog',
  description:
    'Step-by-step guide to creating and configuring Medical Agents on A2V2.ai. Learn how to set up HIPAA compliance, BAA signing, health parameters, medications, prescriptions, document extraction, and per-field CRM encryption.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/medical-agents-user-guide',
  },
  openGraph: {
    title: 'Medical Agents User Guide: HIPAA-Compliant Chatbots on A2V2.ai',
    description:
      'Step-by-step guide to creating and configuring Medical Agents on A2V2.ai. Learn how to set up HIPAA compliance, BAA signing, health parameters, medications, prescriptions, document extraction, and per-field CRM encryption.',
    url: 'https://www.a2v2.ai/blog/medical-agents-user-guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medical Agents User Guide: HIPAA-Compliant Chatbots on A2V2.ai | A2V2.ai Blog',
    description:
      'Step-by-step guide to creating and configuring Medical Agents on A2V2.ai. Learn how to set up HIPAA compliance, BAA signing, health parameters, medications, prescriptions, document extraction, and per-field CRM encryption.',
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
            headline: 'Medical Agents User Guide: Everything You Need to Get Started',
            description:
              'Step-by-step guide to creating and configuring Medical Agents on A2V2.ai, including HIPAA compliance, BAA signing, health parameters, prescriptions, and per-field CRM encryption.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/blog-post9/blog-post9-heroimage.png',
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
            url: 'https://www.a2v2.ai/blog/medical-agents-user-guide',
            articleSection: 'Quick Guides',
            keywords:
              'Medical Agents, HIPAA compliance, BAA, field-level encryption, health parameters, prescriptions, document extraction, A2V2.ai',
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
                name: 'Can I switch a chatbot between General and Medical later?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Agent type is set at creation. If you need a Medical version of an existing General chatbot, create a new Medical Agent and migrate content, or contact support.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need a separate BAA for each Medical chatbot?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. One BAA per organisation covers every Medical Agent you create.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can I test a Medical Agent before the BAA is signed?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. You can build, configure, and use a Medical Agent internally with no restrictions. The BAA only gates public deployment.',
                },
              },
              {
                '@type': 'Question',
                name: 'Are encrypted CRM values searchable?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Encrypted values can not be queried by raw value the way unencrypted fields can. That is the trade-off of encryption at rest.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which models are HIPAA-eligible?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'As of April 2026: Claude Opus 4.6, Claude Sonnet 4.6, Claude Haiku 4.5, Gemini 2.5 Pro, Gemini 2.5 Flash, GLM-5, and open-source models like Llama and GPT-OSS.',
                },
              },
              {
                '@type': 'Question',
                name: 'I do not see the Medical option when creating a chatbot.',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It is available on all plans, but if you do not see it, please contact support at support@a2v2.ai. We may need to enable it for your account.',
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
              { '@type': 'ListItem', position: 3, name: 'Medical Agents User Guide', item: 'https://www.a2v2.ai/blog/medical-agents-user-guide' },
            ],
          }),
        }}
      />
      <main style={{ background: '#0F0E0D' }}>
        <ScrollAnimator />
        <Navbar />
        <MedicalAgentsGuideBlogPost />
        <Footer />
      </main>
    </>
  )
}
