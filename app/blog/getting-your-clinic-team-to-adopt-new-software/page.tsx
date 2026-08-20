import type { Metadata } from 'next'
import GettingClinicTeamToAdoptSoftwareBlogPost from '@/components/blog/GettingClinicTeamToAdoptSoftwareBlogPost'

export const metadata: Metadata = {
  title: 'How to Get Your Clinic Team to Actually Use New Software | A2V2.ai Blog',
  description:
    'New software fails when staff do not adopt it. Learn practical steps for rolling out a new tool in your clinic so your team actually uses it.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/getting-your-clinic-team-to-adopt-new-software',
  },
  openGraph: {
    title: 'How to Get Your Clinic Team to Actually Use New Software | A2V2.ai Blog',
    description:
      'New software fails when staff do not adopt it. Learn practical steps for rolling out a new tool in your clinic so your team actually uses it.',
    url: 'https://www.a2v2.ai/blog/getting-your-clinic-team-to-adopt-new-software',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Get Your Clinic Team to Actually Use New Software | A2V2.ai Blog',
    description:
      'New software fails when staff do not adopt it. Learn practical steps for rolling out a new tool in your clinic so your team actually uses it.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
  keywords:
    'clinic software adoption, staff training new software, healthcare software rollout, medical practice technology adoption, change management clinic',
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
            headline: 'How to get your clinic team to actually use new software',
            description:
              'New software fails when staff do not adopt it. Learn practical steps for rolling out a new tool in your clinic so your team actually uses it.',
            url: 'https://www.a2v2.ai/blog/getting-your-clinic-team-to-adopt-new-software',
            datePublished: '2026-08-20',
            author: { '@type': 'Organization', name: 'A2V2.ai', url: 'https://www.a2v2.ai' },
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: { '@type': 'ImageObject', url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg' },
            },
            image: 'https://www.a2v2.ai/images/getting-your-clinic-team-to-adopt-new-software.png',
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
                name: 'Why do clinics struggle to adopt new software?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Usually because it feels like extra work, the reason for it was never explained, previous tools were abandoned, or the people who use it daily were not involved in choosing it.',
                },
              },
              {
                '@type': 'Question',
                name: 'How long does it take a clinic team to adopt a new tool?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It varies, but the first few weeks decide it. If a tool has not become routine within about a month, it usually gets quietly abandoned.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the best way to train clinic staff on new software?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Short, repeated sessions focused on the specific tasks people do every day, plus one internal person others can ask and a simple one-page reference.',
                },
              },
              {
                '@type': 'Question',
                name: 'Should staff be involved in choosing clinic software?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. The people who use a system daily understand workflow details leadership often does not, and involving them makes adoption significantly more likely.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does A2V2 handle setup and onboarding?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "A2V2 is configured around your clinic's specialty, protocols, and workflows, with hands-on onboarding rather than handing you a login and leaving you to it.",
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
              { '@type': 'ListItem', position: 3, name: 'How to Get Your Clinic Team to Actually Use New Software', item: 'https://www.a2v2.ai/blog/getting-your-clinic-team-to-adopt-new-software' },
            ],
          }),
        }}
      />
      <GettingClinicTeamToAdoptSoftwareBlogPost />
    </>
  )
}
