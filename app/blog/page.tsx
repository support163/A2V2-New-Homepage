import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | A2V2.ai',
    description:
      'Guides, research, and updates on HIPAA-compliant AI for healthcare clinics — patient retention, protocol automation, and AI-assisted care for HRT, longevity, and functional medicine.',
  },
}

export default function BlogPage() {
  return (
    <main style={{ background: '#0F0E0D' }}>
      <ScrollAnimator />
      <Navbar />
      <BlogContent />
      <Footer />
    </main>
  )
}
