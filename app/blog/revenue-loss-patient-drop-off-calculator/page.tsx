import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import RevenueDropOffBlogPost from '@/components/blog/RevenueDropOffBlogPost'

export const metadata: Metadata = {
  title: 'How Much Revenue Are You Losing to Patient Drop-Off? Calculator Included | A2V2.ai Blog',
  description:
    '73% of longevity patients disengage within 6 months. Use our calculator to see exactly how much revenue your clinic is losing to patient drop-off and what AI-powered retention could recover.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/revenue-loss-patient-drop-off-calculator',
  },
  openGraph: {
    title: 'How Much Revenue Are You Losing to Patient Drop-Off? Calculator Included',
    description:
      '73% of longevity patients disengage within 6 months. Use our calculator to see exactly how much revenue your clinic is losing to patient drop-off and what AI-powered retention could recover.',
    url: 'https://www.a2v2.ai/blog/revenue-loss-patient-drop-off-calculator',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Revenue Are You Losing to Patient Drop-Off? Calculator Included | A2V2.ai Blog',
    description:
      '73% of longevity patients disengage within 6 months. Use our calculator to see exactly how much revenue your clinic is losing to patient drop-off and what AI-powered retention could recover.',
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
            headline: 'How Much Revenue Are You Losing to Patient Drop-Off?',
            description:
              '73% of longevity patients disengage within 6 months. Use our calculator to see exactly how much revenue your clinic is losing and what AI-powered retention could recover.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/blog-post14.png',
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
              },
            },
            datePublished: '2026-05-02',
            dateModified: '2026-05-02',
            url: 'https://www.a2v2.ai/blog/revenue-loss-patient-drop-off-calculator',
            articleSection: 'Best Practices',
            keywords:
              'patient drop-off revenue loss, patient retention calculator, longevity clinic revenue, patient attrition healthcare, clinic revenue calculator, patient churn cost, healthcare retention ROI',
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
                name: 'How much revenue does the average longevity clinic lose to patient drop-off?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Based on industry data showing 73% drop-off rates, a 200-patient clinic with $5,000 average patient value loses an estimated $730,000 per year. Clinics with higher patient values ($8,000 to $12,000) lose proportionally more. Use our calculator to model your specific numbers.',
                },
              },
              {
                '@type': 'Question',
                name: 'Why is the drop-off rate so high in longevity medicine?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Longevity protocols are complex and long-term. Patients are managing multiple interventions (NAD+, peptides, HRT, supplements, lab schedules) with minimal structured support between visits. The cognitive load combined with lack of timely follow-up creates natural drop-off points.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI really reduce drop-off from 73% to 35%?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'That is a projected target based on our engagement model. The reduction comes from three mechanisms: protocol-timed check-ins that prevent disengagement triggers, predictive flagging that catches at-risk patients early, and automated re-engagement sequences that recover patients before they are permanently lost. Actual results vary by clinic.',
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can a clinic see ROI from AI-powered retention?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We project most clinics see ROI within 60 days. The math is straightforward: if you retain even 5 additional patients per month at $5,000 annual value, that is $25,000 in recovered revenue per month against a platform cost starting at $19.99 per month.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does this require replacing our current EHR or CRM?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. A2V2 is designed to sit on top of your existing clinical stack. It integrates with your current systems and adds the engagement and retention layer that most EHRs and CRMs do not provide.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is the calculator free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. No sign-up required. You can model different revenue scenarios, patient volumes, and conversion rates in about 60 seconds.',
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
              { '@type': 'ListItem', position: 2, name: 'Best Practices', item: 'https://www.a2v2.ai/blog?category=Best+Practices' },
              { '@type': 'ListItem', position: 3, name: 'How Much Revenue Are You Losing to Patient Drop-Off?', item: 'https://www.a2v2.ai/blog/revenue-loss-patient-drop-off-calculator' },
            ],
          }),
        }}
      />
      <main style={{ background: '#0F0E0D' }}>
        <ScrollAnimator />
        <Navbar />
        <RevenueDropOffBlogPost />
        <Footer />
      </main>
    </>
  )
}
