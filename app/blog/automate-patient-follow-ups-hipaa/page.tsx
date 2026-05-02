import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import AutomateFollowUpsBlogPost from '@/components/blog/AutomateFollowUpsBlogPost'

export const metadata: Metadata = {
  title: 'How to Automate Patient Follow-Ups Without Violating HIPAA | A2V2.ai Blog',
  description:
    'Learn how to automate patient follow-ups in a HIPAA-compliant way. Covers BAA requirements, encrypted messaging, protocol-timed sequences, and what tools to avoid. A practical guide for clinics.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/automate-patient-follow-ups-hipaa',
  },
  openGraph: {
    title: 'How to Automate Patient Follow-Ups Without Violating HIPAA',
    description:
      'Learn how to automate patient follow-ups in a HIPAA-compliant way. Covers BAA requirements, encrypted messaging, protocol-timed sequences, and what tools to avoid. A practical guide for clinics.',
    url: 'https://www.a2v2.ai/blog/automate-patient-follow-ups-hipaa',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Automate Patient Follow-Ups Without Violating HIPAA | A2V2.ai Blog',
    description:
      'Learn how to automate patient follow-ups in a HIPAA-compliant way. Covers BAA requirements, encrypted messaging, protocol-timed sequences, and what tools to avoid. A practical guide for clinics.',
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
            headline: 'How to Automate Patient Follow-Ups Without Violating HIPAA',
            description:
              'Learn how to automate patient follow-ups in a HIPAA-compliant way. Covers BAA requirements, encrypted messaging, protocol-timed sequences, and what tools to avoid.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/blog-post12.png',
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
            url: 'https://www.a2v2.ai/blog/automate-patient-follow-ups-hipaa',
            articleSection: 'Best Practices',
            keywords:
              'automate patient follow-ups, HIPAA compliant follow-ups, patient follow-up automation, HIPAA patient communication, automated patient engagement, clinical follow-up HIPAA, healthcare follow-up automation',
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
                name: 'Can I use Mailchimp or Constant Contact for patient follow-ups?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Not if the messages contain PHI. Mailchimp and Constant Contact do not offer BAAs and are not HIPAA compliant. Using them for patient communication that references health information, appointments, or treatment details is a violation.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is texting patients a HIPAA violation?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'It can be. Standard SMS from a personal phone or non-compliant platform is a violation if the message contains PHI. You need a HIPAA-compliant messaging platform with a BAA, encryption, and audit trails. Texting generic appointment reminders without health details is lower risk but still best done through a compliant platform.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the minimum necessary standard for patient follow-ups?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'HIPAA requires that you share only the minimum information necessary for the patient to take action. Instead of including lab values and treatment details in a text, direct patients to a secure portal for specifics. Your automated messages should trigger action, not transmit clinical data.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does HIPAA-compliant follow-up automation cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Building from individual compliant components can cost $50K or more with a 3 to 6 month timeline. Purpose-built platforms like A2V2 start at $19.99 per month with implementation in under 2 weeks. The cost of non-compliance (fines up to $1.5M per violation) far exceeds either option.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can AI write my follow-up messages?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, but only through a HIPAA-compliant platform. AI can generate personalized, protocol-aware follow-up content, but the AI must be running on a HIPAA-eligible model with a BAA. Do not paste patient information into ChatGPT, Gemini, or Claude consumer products to draft messages.',
                },
              },
              {
                '@type': 'Question',
                name: 'What if a patient does not respond to automated follow-ups?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'This is where predictive analytics matter. A2V2 Medical Agents are designed to track engagement patterns and flag patients who stop responding 30 to 45 days before they fully disengage, giving your team time for a personal outreach before the patient is lost.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do I need patient consent for automated follow-ups?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Document consent during intake, include opt-out instructions in every automated message, honor opt-out requests immediately, and maintain records of consent for compliance audits. This is required under both HIPAA and telecommunications regulations.',
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
              { '@type': 'ListItem', position: 3, name: 'How to Automate Patient Follow-Ups Without Violating HIPAA', item: 'https://www.a2v2.ai/blog/automate-patient-follow-ups-hipaa' },
            ],
          }),
        }}
      />
      <main style={{ background: '#0F0E0D' }}>
        <ScrollAnimator />
        <Navbar />
        <AutomateFollowUpsBlogPost />
        <Footer />
      </main>
    </>
  )
}
