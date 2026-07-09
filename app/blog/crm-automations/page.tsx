import type { Metadata } from 'next'
import CrmAutomationsBlogPost from '@/components/blog/CrmAutomationsBlogPost'

export const metadata: Metadata = {
  title: 'More Powerful CRM Automations for Your Clinic | A2V2.ai Blog',
  description:
    "A2V2's latest release adds primary and secondary automations plus state-based automation for greater control over your clinic's workflows, with every action logged for a clear, auditable trail.",
  keywords:
    'CRM automations, healthcare workflow automation, clinic automation, patient workflow, state-based automation, A2V2 features',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/crm-automations',
  },
  openGraph: {
    title: 'More Powerful CRM Automations for Your Clinic | A2V2.ai Blog',
    description:
      "A2V2's latest release adds primary and secondary automations plus state-based automation for greater control over your clinic's workflows, with every action logged for a clear, auditable trail.",
    url: 'https://www.a2v2.ai/blog/crm-automations',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'More Powerful CRM Automations for Your Clinic | A2V2.ai Blog',
    description:
      "A2V2's latest release adds primary and secondary automations plus state-based automation for greater control over your clinic's workflows, with every action logged for a clear, auditable trail.",
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

export default function CrmAutomationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'More powerful CRM automations are here',
            description:
              "A2V2's latest release adds primary and secondary automations plus state-based automation for greater control over your clinic's workflows, with every action logged for a clear, auditable trail.",
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/crm-automations.png',
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
            url: 'https://www.a2v2.ai/blog/crm-automations',
            articleSection: "What's New",
            keywords:
              'CRM automations, healthcare workflow automation, clinic automation, patient workflow, state-based automation, A2V2 features',
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
                name: 'What is the difference between primary and secondary automations?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Primary and secondary automations let you build layered workflows, so you can set a main automated action along with supporting actions, giving you more nuanced control than a single flat set of rules.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is state-based automation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "State-based automation triggers actions based on where a contact is in your process. Instead of running the same way for everyone, your workflows can respond to a contact's current state for more precise control.",
                },
              },
              {
                '@type': 'Question',
                name: 'Are automated actions logged?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Every automated action is recorded, giving you a clear, auditable trail of exactly what ran and when.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where do I set up automations?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Go to Agents, select your agent, then CRM to configure your automations.',
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
              { '@type': 'ListItem', position: 3, name: 'More powerful CRM automations are here', item: 'https://www.a2v2.ai/blog/crm-automations' },
            ],
          }),
        }}
      />
      <CrmAutomationsBlogPost />
    </>
  )
}
