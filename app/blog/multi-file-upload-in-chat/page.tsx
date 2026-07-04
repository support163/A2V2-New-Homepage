import type { Metadata } from 'next'
import MultiFileUploadBlogPost from '@/components/blog/MultiFileUploadBlogPost'

export const metadata: Metadata = {
  title: 'Multi-File Upload in Chat: Share Lab Reports and Documents with Your AI Agent | A2V2.ai Blog',
  description:
    'A2V2 agents now support multi-file upload in chat. Patients can attach lab reports, scans, PDFs, Word docs, and images, up to 5 files per message, and your agent reads them directly.',
  keywords:
    'multi-file upload, AI healthcare chat, patient document upload, AI lab report reading, HIPAA AI file upload, healthcare AI agent, A2V2 features',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog/multi-file-upload-in-chat',
  },
  openGraph: {
    title: 'Multi-File Upload in Chat: Share Lab Reports and Documents with Your AI Agent',
    description:
      'A2V2 agents now support multi-file upload in chat. Patients can attach lab reports, scans, PDFs, Word docs, and images, up to 5 files per message, and your agent reads them directly.',
    url: 'https://www.a2v2.ai/blog/multi-file-upload-in-chat',
    type: 'article',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-File Upload in Chat: Share Lab Reports and Documents with Your AI Agent | A2V2.ai Blog',
    description:
      'A2V2 agents now support multi-file upload in chat. Patients can attach lab reports, scans, PDFs, Word docs, and images, up to 5 files per message, and your agent reads them directly.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

export default function MultiFileUploadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Attach more, do more: multi-file upload is here',
            description:
              'A2V2 agents now support multi-file upload in chat. Patients can attach lab reports, scans, PDFs, Word docs, and images, up to 5 files per message, and your agent reads them directly.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2.ai Team',
            },
            image: 'https://www.a2v2.ai/images/blog-post7.png',
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
              },
            },
            datePublished: '2026-07-04',
            dateModified: '2026-07-04',
            url: 'https://www.a2v2.ai/blog/multi-file-upload-in-chat',
            articleSection: "What's New",
            keywords:
              'multi-file upload, AI healthcare chat, patient document upload, AI lab report reading, HIPAA AI file upload, healthcare AI agent, A2V2 features',
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
                name: 'How many files can a patient attach at once?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Up to 5 files per message. They can mix types, for example a couple of images and a PDF in the same message.',
                },
              },
              {
                '@type': 'Question',
                name: 'What file types are supported?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Images (PNG, JPG, WEBP, GIF), PDF, Word documents (DOC and DOCX), and plain text (TXT). What the agent can do with each depends on the model it runs on.',
                },
              },
              {
                '@type': 'Question',
                name: 'What are the size limits?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Up to 5 MB per image or PDF, and up to 2 MB per document that is read as text.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can my agent read an image of a lab result?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'If your agent runs on a vision-capable model, yes. It can read a photo of a lab result or a PDF directly. On a lighter text-focused model, patients can still share PDFs, Word, and text documents.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is file sharing HIPAA-compliant?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "Yes. Files shared in chat are handled inside A2V2's HIPAA-compliant infrastructure, with encryption and a Business Associate Agreement in place.",
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
              { '@type': 'ListItem', position: 3, name: 'Attach more, do more: multi-file upload is here', item: 'https://www.a2v2.ai/blog/multi-file-upload-in-chat' },
            ],
          }),
        }}
      />
      <MultiFileUploadBlogPost />
    </>
  )
}
