import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import StaffBurnoutBlogPost from '@/components/blog/StaffBurnoutBlogPost'

export const metadata: Metadata = {
  title:
    'Your Front Desk Is Doing the Work of Five People and Patients Are Still Falling Through the Cracks | A2V2.ai Blog',
  description:
    'Longevity clinic staff spend 15+ hours per week on manual follow-ups, and patients still drop off. The problem is not your team. It is the system they are working inside. Here is what needs to change.',
  alternates: {
    canonical:
      'https://www.a2v2.ai/blog/longevity-clinic-staff-burnout-automation',
  },
  openGraph: {
    title:
      'Your Front Desk Is Doing the Work of Five People and Patients Are Still Falling Through the Cracks',
    description:
      'Longevity clinic staff spend 15+ hours per week on manual follow-ups, and patients still drop off. The problem is not your team. It is the system they are working inside. Here is what needs to change.',
    url: 'https://www.a2v2.ai/blog/longevity-clinic-staff-burnout-automation',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Your Front Desk Is Doing the Work of Five People and Patients Are Still Falling Through the Cracks | A2V2.ai Blog',
    description:
      'Longevity clinic staff spend 15+ hours per week on manual follow-ups, and patients still drop off. The problem is not your team. It is the system they are working inside. Here is what needs to change.',
  },
}

export default function StaffBurnoutBlogPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline:
              'Your Front Desk Is Doing the Work of Five People and Patients Are Still Falling Through the Cracks',
            description:
              'Longevity clinic staff spend 15+ hours per week on manual follow-ups, and patients still drop off. The problem is not your team. It is the system they are working inside. Here is what needs to change.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/Blog-Post6-Heroimage.png',
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
              },
            },
            datePublished: '2026-03-20',
            dateModified: '2026-03-20',
            url: 'https://www.a2v2.ai/blog/longevity-clinic-staff-burnout-automation',
            articleSection: 'Quick Guides',
            keywords:
              'staff burnout, clinic automation, longevity medicine, patient follow-up, healthcare AI, HIPAA compliance, patient retention, protocol management',
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
                name: 'How much time do longevity clinic staff spend on manual follow-ups?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Industry estimates suggest 15 to 25 hours per week across appointment reminders, lab follow-ups, supplement coordination, protocol check-ins, and no-show outreach. For clinics with 200+ active patients on complex protocols, the burden often exceeds what a small team can handle consistently.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can longevity clinics scale without hiring more staff?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. The bottleneck is usually administrative capacity, not clinical. Automated platforms like A2V2.ai are designed to handle protocol-specific follow-ups, reminders, lab tracking, and re-engagement without additional staff. Industry benchmarks suggest up to 90% reduction in manual follow-up time.',
                },
              },
              {
                '@type': 'Question',
                name: 'What communication tasks can be automated?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Appointment reminders, no-show follow-ups, lab tracking, supplement refill coordination, protocol milestone check-ins, birthday messages, lapsed patient re-engagement, and biomarker notifications. A2V2.ai is designed to handle all of these within HIPAA compliance. Wearable data monitoring is on the roadmap.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does staff burnout affect patient retention?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Overwhelmed teams cannot maintain consistent personalized follow-up. Proactive tasks like check-ins, re-engagement, and wearable data review are dropped first. Published research shows communication gaps from capacity limitations are a leading driver of patient disengagement.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the cost of hiring versus automating?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A full-time coordinator costs $50,000-$75,000/year with benefits and overhead, with capacity limited to about 50 patient touches per week. Automated platforms are designed to handle far greater volume at lower cost with higher consistency.',
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
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Blog',
                item: 'https://www.a2v2.ai/blog',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Quick Guides',
                item: 'https://www.a2v2.ai/blog?category=Quick+Guides',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Your Front Desk Is Doing the Work of Five People and Patients Are Still Falling Through the Cracks',
                item: 'https://www.a2v2.ai/blog/longevity-clinic-staff-burnout-automation',
              },
            ],
          }),
        }}
      />
      <main>
        <ScrollAnimator />
        <Navbar />
        <StaffBurnoutBlogPost />
        <Footer />
      </main>
    </>
  )
}
