import type { Metadata } from 'next'
import WhatToLookForHealthcareCrmBlogPost from '@/components/blog/WhatToLookForHealthcareCrmBlogPost'

export const metadata: Metadata = {
  title: 'What to Look for in a Healthcare CRM | A2V2.ai Blog',
  description:
    'Choosing a CRM for your clinic? Here is what matters most in a healthcare CRM, from patient records and health tracking to HIPAA compliance and automations.',
  keywords:
    'healthcare CRM, patient CRM, best healthcare CRM, medical CRM, patient relationship management, clinic CRM software, what to look for CRM healthcare',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/what-to-look-for-healthcare-crm',
  },
  openGraph: {
    title: 'What to Look for in a Healthcare CRM',
    description:
      'Choosing a CRM for your clinic? Here is what matters most in a healthcare CRM, from patient records and health tracking to HIPAA compliance and automations.',
    url: 'https://www.a2v2.ai/blog/what-to-look-for-healthcare-crm',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Look for in a Healthcare CRM | A2V2.ai Blog',
    description:
      'Choosing a CRM for your clinic? Here is what matters most in a healthcare CRM, from patient records and health tracking to HIPAA compliance and automations.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

export default function WhatToLookForHealthcareCrmPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'What to look for in a healthcare CRM',
            description:
              'Choosing a CRM for your clinic? Here is what matters most in a healthcare CRM, from patient records and health tracking to HIPAA compliance and automations.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/what-to-look-for-healthcare-crm.png',
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
            url: 'https://www.a2v2.ai/blog/what-to-look-for-healthcare-crm',
            articleSection: 'Quick Guides',
            keywords:
              'healthcare CRM, patient CRM, best healthcare CRM, medical CRM, patient relationship management, clinic CRM software, what to look for CRM healthcare',
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
                name: 'What is a healthcare CRM?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A healthcare CRM is a patient relationship management system built around patient care rather than sales. It keeps patient records, history, health tracking, forms, and communication in one place, with the compliance safeguards healthcare requires.',
                },
              },
              {
                '@type': 'Question',
                name: 'How is a healthcare CRM different from a regular CRM?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A regular CRM is built to manage sales leads and deal stages. A healthcare CRM is built around the patient, tracking health parameters and trends, storing clinical information, and meeting HIPAA requirements that general CRMs do not.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does a healthcare CRM need to be HIPAA-compliant?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Because it holds protected health information, a healthcare CRM should include a Business Associate Agreement, encryption, audit trails, and role-based access controls.',
                },
              },
              {
                '@type': 'Question',
                name: 'What features matter most in a healthcare CRM?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A complete patient record, health parameter tracking with trends, HIPAA compliance, workflow automation, and the ability to customize it to your clinic\'s specialty and workflows.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does A2V2 include a healthcare CRM?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. A2V2 includes a patient CRM with records, history, configurable health parameters and trends, forms, notes, prescriptions, and automations, all inside HIPAA-compliant infrastructure.',
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
              { '@type': 'ListItem', position: 3, name: 'What to look for in a healthcare CRM', item: 'https://www.a2v2.ai/blog/what-to-look-for-healthcare-crm' },
            ],
          }),
        }}
      />
      <WhatToLookForHealthcareCrmBlogPost />
    </>
  )
}
