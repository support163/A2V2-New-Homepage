import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import ProtocolAdherenceBlogPost from '@/components/blog/ProtocolAdherenceBlogPost'

export const metadata: Metadata = {
  title:
    'Why Your NAD+ Patients Quit After 90 Days — The Protocol Adherence Crisis No One Is Tracking | A2V2.ai Blog',
  description:
    'Only 27% of longevity patients complete their full protocol. The problem isn\'t your treatment — it\'s the 89 days between appointments when no one is watching. Here\'s how to fix it.',
  alternates: {
    canonical:
      'https://www.a2v2.ai/blog/protocol-adherence-crisis-longevity-medicine',
  },
  openGraph: {
    title:
      'Why Your NAD+ Patients Quit After 90 Days — The Protocol Adherence Crisis No One Is Tracking',
    description:
      'Only 27% of longevity patients complete their full protocol. The problem isn\'t your treatment — it\'s the 89 days between appointments when no one is watching.',
    url: 'https://www.a2v2.ai/blog/protocol-adherence-crisis-longevity-medicine',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Why Your NAD+ Patients Quit After 90 Days — The Protocol Adherence Crisis | A2V2.ai Blog',
    description:
      'Only 27% of longevity patients complete their full protocol. The problem isn\'t your treatment — it\'s the 89 days between appointments when no one is watching.',
  },
}

export default function ProtocolAdherenceBlogPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline:
              'Why Your NAD+ Patients Quit After 90 Days — The Protocol Adherence Crisis No One Is Tracking',
            description:
              'Only 27% of longevity patients complete their full protocol. The problem isn\'t your treatment — it\'s the 89 days between appointments when no one is watching. Here\'s how to fix it.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
            },
            datePublished: '2026-03-16',
            dateModified: '2026-03-16',
            url: 'https://www.a2v2.ai/blog/protocol-adherence-crisis-longevity-medicine',
            articleSection: 'Best Practices',
            keywords:
              'protocol adherence, NAD+ therapy, peptide therapy, longevity medicine, patient retention, patient engagement, HIPAA compliance, healthcare AI',
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
                name: 'What is the average protocol adherence rate in longevity medicine?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Only about 27% of longevity patients complete their full treatment protocols. The majority disengage within 90 days, with the steepest drop-off between days 30 and 60.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why do patients stop their NAD+ or peptide therapy protocols?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The top reasons are: no visible progress feedback between appointments, supplement fatigue from managing 10+ compounds daily, missed lab appointments, lack of proactive communication during critical windows, and cost concerns that go unaddressed.',
                },
              },
              {
                '@type': 'Question',
                name: 'How can clinics improve protocol adherence?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Implement automated check-ins at critical windows, real-time compliance tracking, biomarker trend analysis, wearable device integration, and predictive alerts. Platforms like A2V2.ai automate all of these while maintaining HIPAA compliance.',
                },
              },
              {
                '@type': 'Question',
                name: 'What does protocol adherence tracking software do?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It monitors patient compliance in real-time across supplement schedules, lab appointments, wearable data, and treatment milestones. It detects early warning signs and triggers personalized re-engagement sequences.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much revenue do clinics lose from poor adherence?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A 200-patient clinic with 73% drop-off loses approximately $2.19M annually. Improving adherence by 20 percentage points can recover over $1M. Clinics using A2V2.ai report $420K-$850K recovered in year one.',
                },
              },
            ],
          }),
        }}
      />
      <main>
        <ScrollAnimator />
        <Navbar />
        <ProtocolAdherenceBlogPost />
        <Footer />
      </main>
    </>
  )
}
