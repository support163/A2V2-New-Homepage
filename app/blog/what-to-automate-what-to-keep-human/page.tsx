import type { Metadata } from 'next'
import WhatToAutomateBlogPost from '@/components/blog/WhatToAutomateBlogPost'

export const metadata: Metadata = {
  title: 'What to Automate in Your Clinic, and What to Keep Human | A2V2.ai Blog',
  description:
    'Not every clinic task should be automated. Learn a simple framework for deciding what AI should handle and what needs a person.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/what-to-automate-what-to-keep-human',
  },
  openGraph: {
    title: 'What to Automate in Your Clinic, and What to Keep Human | A2V2.ai Blog',
    description:
      'Not every clinic task should be automated. Learn a simple framework for deciding what AI should handle and what needs a person.',
    url: 'https://www.a2v2.ai/blog/what-to-automate-what-to-keep-human',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Automate in Your Clinic, and What to Keep Human | A2V2.ai Blog',
    description:
      'Not every clinic task should be automated. Learn a simple framework for deciding what AI should handle and what needs a person.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
  keywords:
    'what to automate clinic, healthcare automation limits, AI vs human tasks healthcare, clinic workflow automation, medical practice automation',
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
            headline: 'What to automate in your clinic, and what to keep human',
            description:
              'Not every clinic task should be automated. Learn a simple framework for deciding what AI should handle and what needs a person.',
            url: 'https://www.a2v2.ai/blog/what-to-automate-what-to-keep-human',
            datePublished: '2026-09-11',
            author: { '@type': 'Organization', name: 'A2V2.ai', url: 'https://www.a2v2.ai' },
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: { '@type': 'ImageObject', url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg' },
            },
            image: 'https://www.a2v2.ai/images/what-to-automate-what-to-keep-human.png',
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
                name: 'What should a clinic automate first?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The most repetitive, least sensitive task you have, usually appointment reminders, refill nudges, or intake data entry. Get one working well before expanding.',
                },
              },
              {
                '@type': 'Question',
                name: 'What should never be automated in a clinic?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Anything requiring clinical judgment, such as symptoms, dosing, or protocol changes, and anything emotionally sensitive, like difficult results or an upset patient.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I know if a task is safe to automate?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Ask whether it happens the same way every time, whether it requires clinical judgment, and whether a patient would want a human in that moment. It needs to pass all three.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does automation make patient care feel impersonal?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Only when it is applied to the wrong moments or when reaching a person is difficult. Automating logistics while keeping care human usually improves the experience, because patients hear from you more consistently.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does A2V2 decide what to escalate?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A2V2 agents handle routine communication and route anything requiring clinical judgment to your team, with escalation rules you configure for your clinic.',
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
              { '@type': 'ListItem', position: 3, name: 'What to Automate in Your Clinic, and What to Keep Human', item: 'https://www.a2v2.ai/blog/what-to-automate-what-to-keep-human' },
            ],
          }),
        }}
      />
      <WhatToAutomateBlogPost />
    </>
  )
}
