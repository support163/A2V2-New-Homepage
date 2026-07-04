import type { Metadata } from 'next'
import TestHomepage2Navbar from '@/components/TestHomepage2Navbar'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import BlogContent from '@/components/blog/BlogContent'

export const metadata: Metadata = {
  title: 'Blog | A2V2.ai',
  description:
    'Guides, research, and updates on HIPAA-compliant AI for healthcare clinics — patient retention, protocol automation, and AI-assisted care for HRT, longevity, and functional medicine.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog',
  },
  openGraph: {
    title: 'Blog | A2V2.ai',
    description:
      'Guides, research, and updates on HIPAA-compliant AI for healthcare clinics — patient retention, protocol automation, and AI-assisted care for HRT, longevity, and functional medicine.',
    url: 'https://www.a2v2.ai/blog',
    type: 'website',
    images: [{ url: 'https://www.a2v2.ai/images/og-healthcare.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | A2V2.ai',
    description:
      'Guides, research, and updates on HIPAA-compliant AI for healthcare clinics — patient retention, protocol automation, and AI-assisted care for HRT, longevity, and functional medicine.',
    images: ['https://www.a2v2.ai/images/og-healthcare.png'],
  },
}

export default function BlogPage() {
  return (
    <main style={{ background: '#FFFFFF' }}>
      <TestHomepage2Navbar />
      <BlogContent />
      <TestHomepage2Footer />
    </main>
  )
}
