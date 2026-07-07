import type { Metadata } from 'next'
import SmarterContactManagementBlogPost from '@/components/blog/SmarterContactManagementBlogPost'

export const metadata: Metadata = {
  title: 'Faster, Cleaner Contact Management with Smart Duplicate Detection | A2V2.ai Blog',
  description:
    "A2V2's redesigned contact management makes creating and updating patient records effortless, with intelligent phone-number matching that stops duplicate files before they happen.",
  keywords:
    'patient contact management, duplicate patient records, healthcare CRM, patient record management, front desk software, A2V2 features',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/smarter-contact-management',
  },
  openGraph: {
    title: 'Faster, Cleaner Contact Management with Smart Duplicate Detection',
    description:
      "A2V2's redesigned contact management makes creating and updating patient records effortless, with intelligent phone-number matching that stops duplicate files before they happen.",
    url: 'https://www.a2v2.ai/blog/smarter-contact-management',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faster, Cleaner Contact Management with Smart Duplicate Detection | A2V2.ai Blog',
    description:
      "A2V2's redesigned contact management makes creating and updating patient records effortless, with intelligent phone-number matching that stops duplicate files before they happen.",
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

export default function SmarterContactManagementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Faster, cleaner contact management is here',
            description:
              "A2V2's redesigned contact management makes creating and updating patient records effortless, with intelligent phone-number matching that stops duplicate files before they happen.",
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/smarter-contacts.png',
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
              },
            },
            datePublished: '2026-07-07',
            dateModified: '2026-07-07',
            url: 'https://www.a2v2.ai/blog/smarter-contact-management',
            articleSection: "What's New",
            keywords:
              'patient contact management, duplicate patient records, healthcare CRM, patient record management, front desk software, A2V2 features',
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
                name: 'How does duplicate detection work?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'As you type a phone number when adding a contact, A2V2 intelligently matches it against your existing records and surfaces any match instantly, so you can link to the existing patient instead of creating a duplicate.',
                },
              },
              {
                '@type': 'Question',
                name: 'Where do I add or edit a contact?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Go to Agents, select your agent, then CRM, then Contacts, then Add Contact. The redesigned experience makes creating and updating records quick and effortless.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does this change affect my existing contacts?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. Your existing contacts stay exactly as they are. The redesigned experience and duplicate detection simply make adding and updating records going forward faster and cleaner.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why do duplicate patient records matter?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Duplicates split a patient's history across two files, which causes confusion, makes follow-up harder, and clutters your data. Catching them at the point of entry keeps each patient's history in one place.",
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
              { '@type': 'ListItem', position: 3, name: 'Faster, cleaner contact management is here', item: 'https://www.a2v2.ai/blog/smarter-contact-management' },
            ],
          }),
        }}
      />
      <SmarterContactManagementBlogPost />
    </>
  )
}
