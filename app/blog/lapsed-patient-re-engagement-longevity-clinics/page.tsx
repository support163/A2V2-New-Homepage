import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import LapsedPatientBlogPost from '@/components/blog/LapsedPatientBlogPost'

export const metadata: Metadata = {
  title:
    'The Patients You Already Lost Are Your Biggest Revenue Opportunity | A2V2.ai Blog',
  description:
    'Longevity clinics spend thousands acquiring new patients while hundreds of lapsed ones sit untouched in their EHR. Industry data suggests up to 40% of inactive patients can be re-engaged. Here\'s how.',
  alternates: {
    canonical:
      'https://www.a2v2.ai/blog/lapsed-patient-re-engagement-longevity-clinics',
  },
  openGraph: {
    title:
      'The Patients You Already Lost Are Your Biggest Revenue Opportunity',
    description:
      'Longevity clinics spend thousands acquiring new patients while hundreds of lapsed ones sit untouched in their EHR. Industry data suggests up to 40% of inactive patients can be re-engaged. Here\'s how.',
    url: 'https://www.a2v2.ai/blog/lapsed-patient-re-engagement-longevity-clinics',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'The Patients You Already Lost Are Your Biggest Revenue Opportunity | A2V2.ai Blog',
    description:
      'Longevity clinics spend thousands acquiring new patients while hundreds of lapsed ones sit untouched in their EHR. Industry data suggests up to 40% of inactive patients can be re-engaged. Here\'s how.',
  },
}

export default function LapsedPatientBlogPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline:
              'The Patients You Already Lost Are Your Biggest Revenue Opportunity',
            description:
              'Longevity clinics spend thousands acquiring new patients while hundreds of lapsed ones sit untouched in their EHR. Industry data suggests up to 40% of inactive patients can be re-engaged. Here\'s how.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/Blog-Post5-Heroimage.png',
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
              },
            },
            datePublished: '2026-03-19',
            dateModified: '2026-03-19',
            url: 'https://www.a2v2.ai/blog/lapsed-patient-re-engagement-longevity-clinics',
            articleSection: 'Best Practices',
            keywords:
              'lapsed patients, patient re-engagement, longevity medicine, patient retention, win-back campaign, healthcare AI, HIPAA compliance, NAD+ therapy, HRT, peptide therapy',
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
                name: 'How many lapsed longevity patients can be re-engaged?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Industry data suggests up to 40% of inactive patients can be successfully re-engaged. Key factors are timing (within 30-90 days), personalization (protocol-specific messaging), and removing friction (single-click rebooking).',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the cost of acquiring a new patient versus re-engaging a lapsed one?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Industry estimates suggest acquiring a new longevity patient costs $500-$2,000. Re-engaging a lapsed patient costs a fraction of that. Since the average patient is worth an estimated $8,000-$24,000/year, re-engagement is one of the highest-ROI activities a clinic can pursue.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why do longevity patients stop coming back?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Published adherence research identifies: lack of visible progress during the plateau stage, supplement fatigue from managing 10+ compounds daily, missed lab appointments, life disruptions, cost concerns, and lack of proactive clinic communication. Most patients didn\u2019t actively decide to leave \u2014 they drifted because nothing pulled them back.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is a patient win-back campaign in longevity medicine?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A structured outreach sequence designed to re-engage inactive patients. Effective campaigns reference the patient\u2019s specific protocol, acknowledge the gap without guilt, offer a low-friction return path, and highlight what\u2019s new. A2V2.ai is designed to automate these with protocol-specific personalization.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is it HIPAA-compliant to send re-engagement messages to lapsed patients?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, but only through HIPAA-compliant channels. Messages referencing treatment history or protocol details must go through a platform with encryption, a signed BAA, and audit logging. A2V2.ai is designed to handle all patient communication within a fully compliant environment.',
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
                name: 'Best Practices',
                item: 'https://www.a2v2.ai/blog?category=Best+Practices',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'The Patients You Already Lost Are Your Biggest Revenue Opportunity',
                item: 'https://www.a2v2.ai/blog/lapsed-patient-re-engagement-longevity-clinics',
              },
            ],
          }),
        }}
      />
      <main>
        <ScrollAnimator />
        <Navbar />
        <LapsedPatientBlogPost />
        <Footer />
      </main>
    </>
  )
}
