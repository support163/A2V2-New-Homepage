import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import WhyPatientsQuitBlogPost from '@/components/blog/WhyPatientsQuitBlogPost'

export const metadata: Metadata = {
  title: 'Why 73% of Longevity Patients Quit Their Treatment Protocols | A2V2.ai Blog',
  description:
    '73% of longevity patients disengage within 6 months. The problem is not the treatment. It is what happens between visits. Here are the 7 reasons patients quit and what clinics can do about each one.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/why-longevity-patients-quit-protocols',
  },
  openGraph: {
    title: 'Why 73% of Longevity Patients Quit Their Treatment Protocols',
    description:
      '73% of longevity patients disengage within 6 months. The problem is not the treatment. It is what happens between visits. Here are the 7 reasons patients quit and what clinics can do about each one.',
    url: 'https://www.a2v2.ai/blog/why-longevity-patients-quit-protocols',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why 73% of Longevity Patients Quit Their Treatment Protocols | A2V2.ai Blog',
    description:
      '73% of longevity patients disengage within 6 months. The problem is not the treatment. It is what happens between visits. Here are the 7 reasons patients quit and what clinics can do about each one.',
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
            headline: 'Why 73% of Longevity Patients Quit Their Treatment Protocols',
            description:
              '73% of longevity patients disengage within 6 months. Here are the 7 predictable reasons patients quit and what clinics can do about each one.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/blog-post15.png',
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
            url: 'https://www.a2v2.ai/blog/why-longevity-patients-quit-protocols',
            articleSection: 'Best Practices',
            keywords:
              'longevity patient drop-off, patient protocol adherence, why patients quit treatment, longevity clinic retention, NAD therapy drop-off, HRT patient retention, patient engagement longevity medicine',
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
                name: 'Is the 73% drop-off rate specific to longevity clinics?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The 73% figure comes from industry retention data across longevity and functional medicine practices specifically. General primary care drop-off rates are lower because treatment complexity is lower. Longevity protocols are uniquely demanding on patient adherence, which is why drop-off is higher.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which protocol has the highest drop-off rate?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Multi-protocol patients (those on 3 or more simultaneous interventions) tend to have the highest drop-off rates because the complexity compounds. Among single protocols, long-cycle treatments like HRT (6 to 12 month optimization) and NAD+ maintenance phases tend to have higher attrition than shorter, more intensive protocols.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can better onboarding reduce drop-off?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Better onboarding helps with the first 30 days but does not solve the Month 2 to 6 danger zone. Onboarding sets expectations. Ongoing automated engagement maintains them. You need both.',
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can AI-powered retention show results?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most clinics see measurable retention improvement within the first protocol cycle (6 to 12 weeks) after implementing automated follow-ups. The revenue impact typically becomes visible within 60 days because retained patients continue generating revenue immediately.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does automated follow-up feel impersonal to patients?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Only if it is generic. Protocol-aware automation that references the patient's specific treatment stage, their specific results, and their specific next steps feels personal because the content is genuinely relevant. Patients respond positively to communication that shows the clinic is paying attention to their individual journey.",
                },
              },
              {
                '@type': 'Question',
                name: 'What if a patient left because of cost, not engagement?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Cost-driven attrition is real but is often smaller than clinics assume. When surveyed, most patients who cite cost as the reason actually experienced one or more of the engagement failures described in this article first. Cost becomes the rationalization after the perceived value drops due to poor follow-through.',
                },
              },
              {
                '@type': 'Question',
                name: 'How does this relate to the revenue loss calculator?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'This article explains why patients leave. The revenue loss calculator shows you the dollar impact on your specific clinic. Together they give you the full picture: the causes, the cost, and the projected recovery. Use both to build the case for your team.',
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
              { '@type': 'ListItem', position: 3, name: 'Why 73% of Longevity Patients Quit Their Treatment Protocols', item: 'https://www.a2v2.ai/blog/why-longevity-patients-quit-protocols' },
            ],
          }),
        }}
      />
      <main style={{ background: '#0F0E0D' }}>
        <ScrollAnimator />
        <Navbar />
        <WhyPatientsQuitBlogPost />
        <Footer />
      </main>
    </>
  )
}
