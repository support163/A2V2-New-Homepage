import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import NadTherapyPatientManagementBlogPost from '@/components/blog/NadTherapyPatientManagementBlogPost'

export const metadata: Metadata = {
  title: 'NAD+ Therapy Patient Management: How to Keep Patients Through the Full Protocol | A2V2.ai Blog',
  description:
    'NAD+ IV therapy has one of the highest drop-off rates in longevity medicine. Here is a session-by-session retention playbook covering side effect management, biomarker tracking, and automated follow-ups that keep patients through the full 6-week cycle.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/nad-therapy-patient-management',
  },
  openGraph: {
    title: 'NAD+ Therapy Patient Management: How to Keep Patients Through the Full Protocol',
    description:
      'NAD+ IV therapy has one of the highest drop-off rates in longevity medicine. Here is a session-by-session retention playbook covering side effect management, biomarker tracking, and automated follow-ups that keep patients through the full 6-week cycle.',
    url: 'https://www.a2v2.ai/blog/nad-therapy-patient-management',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NAD+ Therapy Patient Management: How to Keep Patients Through the Full Protocol | A2V2.ai Blog',
    description:
      'NAD+ IV therapy has one of the highest drop-off rates in longevity medicine. Here is a session-by-session retention playbook covering side effect management, biomarker tracking, and automated follow-ups that keep patients through the full 6-week cycle.',
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
            headline: 'NAD+ Therapy Patient Management: How to Keep Patients Through the Full Protocol',
            description:
              'NAD+ IV therapy has one of the highest drop-off rates in longevity medicine. Here is a session-by-session retention playbook covering side effect management, biomarker tracking, and automated follow-ups that keep patients through the full 6-week cycle.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/blog-post18.png',
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
              },
            },
            datePublished: '2026-05-03',
            dateModified: '2026-05-03',
            url: 'https://www.a2v2.ai/blog/nad-therapy-patient-management',
            articleSection: 'Best Practices',
            keywords:
              'NAD+ therapy patient management, NAD+ IV therapy retention, NAD+ patient drop-off, NAD+ protocol management, NAD+ clinic management, longevity clinic NAD+, NAD+ side effects management, NAD+ patient engagement',
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
                name: 'What is the typical drop-off rate for NAD+ IV therapy?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Industry data suggests that a significant percentage of NAD+ patients do not complete a standard 6-session initial protocol. The primary drop-off window is between sessions 2 and 4, driven mainly by side effects and lack of between-session communication. Exact rates vary by clinic and are not universally reported.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which NAD+ side effects cause the most drop-off?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Headaches and fatigue are the primary drivers because they occur after the patient has left the clinic, when they have no immediate clinical support. Flushing and nausea during the infusion are uncomfortable but less likely to cause drop-off because the clinical team is present to manage them in real time.',
                },
              },
              {
                '@type': 'Question',
                name: 'Should I reduce the NAD+ dose to minimize side effects?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Dose adjustment is a clinical decision for the treating provider. From a retention perspective, a lower dose with fewer side effects that the patient actually completes is better than a higher dose they abandon at session 3. Some clinics start with a lower dose for the first 2 sessions and increase once the patient is adapted.',
                },
              },
              {
                '@type': 'Question',
                name: 'How many automated messages is too many?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'For a 6-session NAD+ protocol over 6 to 8 weeks, 14 to 16 automated touchpoints is appropriate. That averages 2 messages per week. As long as every message is clinically relevant and protocol-specific, patients perceive it as attentive care, not spam. Generic messages without clinical relevance are what annoy patients.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI really handle NAD+ side effect triage?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'AI can handle expected side effect communication and reassurance effectively. It should not make clinical decisions about unexpected or severe symptoms. Every AI-powered check-in should include clear escalation language directing patients to contact the clinical team or emergency services for severe symptoms.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the revenue difference between a patient who completes the protocol and one who drops at session 3?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'For a $500 per session protocol, a patient who drops at session 3 generates $1,500. A patient who completes all 6 sessions and transitions to monthly maintenance generates $3,000 in the initial protocol plus $6,000 per year in maintenance. Over 2 years, that is $15,000 versus $1,500. A 10x difference per patient.',
                },
              },
              {
                '@type': 'Question',
                name: 'How do I implement this if I only have 20 NAD+ patients?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'At 20 patients, you can execute this playbook manually. Create message templates for each touchpoint and have your care coordinator send them on schedule. As you scale past 50 concurrent NAD+ patients, manual execution becomes unreliable and AI automation becomes necessary.',
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
              { '@type': 'ListItem', position: 3, name: 'NAD+ Therapy Patient Management: How to Keep Patients Through the Full Protocol', item: 'https://www.a2v2.ai/blog/nad-therapy-patient-management' },
            ],
          }),
        }}
      />
      <main style={{ background: '#0F0E0D' }}>
        <ScrollAnimator />
        <Navbar />
        <NadTherapyPatientManagementBlogPost />
        <Footer />
      </main>
    </>
  )
}
