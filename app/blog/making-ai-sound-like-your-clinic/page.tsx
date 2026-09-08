import type { Metadata } from 'next'
import MakingAISoundLikeYourClinicBlogPost from '@/components/blog/MakingAISoundLikeYourClinicBlogPost'

export const metadata: Metadata = {
  title: 'How to Make an AI Agent Actually Sound Like Your Clinic | A2V2.ai Blog',
  description:
    'Worried AI will sound robotic to your patients? Learn how to give an AI agent your clinic\'s voice, protocols, and judgment about when to escalate.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/making-ai-sound-like-your-clinic',
  },
  openGraph: {
    title: 'How to Make an AI Agent Actually Sound Like Your Clinic | A2V2.ai Blog',
    description:
      'Worried AI will sound robotic to your patients? Learn how to give an AI agent your clinic\'s voice, protocols, and judgment about when to escalate.',
    url: 'https://www.a2v2.ai/blog/making-ai-sound-like-your-clinic',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Make an AI Agent Actually Sound Like Your Clinic | A2V2.ai Blog',
    description:
      'Worried AI will sound robotic to your patients? Learn how to give an AI agent your clinic\'s voice, protocols, and judgment about when to escalate.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
  keywords:
    'AI agent voice, custom AI instructions healthcare, AI knowledge base clinic, personalize AI chatbot, AI tone of voice, healthcare AI setup',
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
            headline: 'How to make an AI agent actually sound like your clinic',
            description:
              'Worried AI will sound robotic to your patients? Learn how to give an AI agent your clinic\'s voice, protocols, and judgment about when to escalate.',
            url: 'https://www.a2v2.ai/blog/making-ai-sound-like-your-clinic',
            datePublished: '2026-09-08',
            author: { '@type': 'Organization', name: 'A2V2.ai', url: 'https://www.a2v2.ai' },
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: { '@type': 'ImageObject', url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg' },
            },
            image: 'https://www.a2v2.ai/images/making-ai-sound-like-your-clinic.png',
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
                name: 'Why do AI agents sound generic?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Usually because they have not been given anything specific to work from. An agent with no knowledge of your practice answers from general information, which is where both the generic tone and the wrong answers come from.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should I give an AI agent to make it sound like my clinic?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Your protocols in the words you use with patients, the answers your team already gives to common questions, your practice philosophy, and any materials you hand patients. Most clinics already have this written somewhere.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I stop an AI from answering clinical questions?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Define escalation explicitly in its instructions. Name the categories that must go to a human, such as symptoms, dosing, treatment changes, or an upset patient, and test that it actually escalates before patients use it.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I test an AI agent before patients see it?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Run your most common patient questions through it exactly as patients phrase them, try clinical questions it should refuse, ask about something it has no information on, and have a staff member who talks to patients daily review the responses.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can A2V2 agents be customized to my clinic?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. A2V2 agents take custom instructions, draw on a knowledge base of your own content, and include a playground for testing configurations, plus version history so instruction changes are tracked and reversible.',
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
              { '@type': 'ListItem', position: 3, name: 'How to Make an AI Agent Actually Sound Like Your Clinic', item: 'https://www.a2v2.ai/blog/making-ai-sound-like-your-clinic' },
            ],
          }),
        }}
      />
      <MakingAISoundLikeYourClinicBlogPost />
    </>
  )
}
