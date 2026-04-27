import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import MedicalAgentsBlogPost from '@/components/blog/MedicalAgentsBlogPost'

export const metadata: Metadata = {
  title: 'Introducing Medical Agents: HIPAA-Aware Chatbots Built Into A2V2 | A2V2.ai Blog',
  description:
    'A2V2.ai now offers Medical Agents — HIPAA-aware chatbots with BAA gating, field-level encryption, HIPAA-eligible models, and clinical modules for health parameters, medications, prescriptions, and document extraction.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/introducing-medical-agents',
  },
  openGraph: {
    title: 'Introducing Medical Agents: HIPAA-Aware Chatbots Built Into A2V2',
    description:
      'A2V2.ai now offers Medical Agents — HIPAA-aware chatbots with BAA gating, field-level encryption, HIPAA-eligible models, and clinical modules for health parameters, medications, prescriptions, and document extraction.',
    url: 'https://www.a2v2.ai/blog/introducing-medical-agents',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Introducing Medical Agents: HIPAA-Aware Chatbots Built Into A2V2 | A2V2.ai Blog',
    description:
      'A2V2.ai now offers Medical Agents — HIPAA-aware chatbots with BAA gating, field-level encryption, HIPAA-eligible models, and clinical modules for health parameters, medications, prescriptions, and document extraction.',
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
            headline: 'Introducing Medical Agents: HIPAA-Aware Chatbots, Built Right Into A2V2',
            description:
              'A2V2.ai now offers Medical Agents with BAA gating, field-level encryption, HIPAA-eligible models, and clinical modules for health parameters, medications, prescriptions, and document extraction.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/blog-post8.png',
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
            url: 'https://www.a2v2.ai/blog/introducing-medical-agents',
            articleSection: "What's New",
            keywords:
              'Medical Agents, HIPAA compliance, BAA, field-level encryption, healthcare AI, A2V2.ai, longevity medicine',
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
                name: 'What is the difference between a General Agent and a Medical Agent?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'General Agents are for any non-clinical use case like sales, support, and operations. Medical Agents add HIPAA-aware compliance, BAA gating, field-level encryption, HIPAA-eligible models only, and clinical domain modules for health parameters, medications, prescriptions, and document extraction.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need a BAA to use a Medical Agent?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You can build and test a Medical Agent internally without a BAA. But to deploy it publicly to patients, a signed BAA is required. One BAA covers every Medical Agent in your organisation.',
                },
              },
              {
                '@type': 'Question',
                name: 'What data is encrypted in a Medical Agent?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Any field you mark as sensitive in the Form Builder gets AES-256 field-level encryption. This includes fields like DOB, SSN, diagnosis codes, and clinical notes. Your team sees the data normally when authenticated.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which AI models are available for Medical Agents?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Medical Agents are limited to HIPAA-eligible models only. As of April 2026 this includes Claude Opus 4.6, Claude Sonnet 4.6, Claude Haiku 4.5, Gemini 2.5 Pro, Gemini 2.5 Flash, GLM-5, and open-source models like Llama and GPT-OSS.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does switching to a Medical Agent affect my existing General Agents?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. General Agents are completely unaffected. Medical Agent is a separate agent type you create alongside your existing chatbots. They share the same platform building blocks but with compliance layers added on top.',
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
              { '@type': 'ListItem', position: 3, name: 'Introducing Medical Agents', item: 'https://www.a2v2.ai/blog/introducing-medical-agents' },
            ],
          }),
        }}
      />
      <main style={{ background: '#0F0E0D' }}>
        <ScrollAnimator />
        <Navbar />
        <MedicalAgentsBlogPost />
        <Footer />
      </main>
    </>
  )
}
