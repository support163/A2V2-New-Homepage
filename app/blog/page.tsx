import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import BlogContent from '@/components/blog/BlogContent'

export const metadata: Metadata = {
  title: 'Blog | A2V2.ai',
  description:
    'Explore news, updates, and guides on how to turn your bio into an AI-powered engagement tool.',
  alternates: {
    canonical: 'https://www.a2v2.ai/blog',
  },
  openGraph: {
    title: 'Blog | A2V2.ai',
    description:
      'Explore news, updates, and guides on how to turn your bio into an AI-powered engagement tool.',
    url: 'https://www.a2v2.ai/blog',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | A2V2.ai',
    description:
      'Explore news, updates, and guides on how to turn your bio into an AI-powered engagement tool.',
  },
}

export default function BlogPage() {
  return (
    <main>
      <ScrollAnimator />
      <Navbar />
      <BlogContent />
      <Footer />
    </main>
  )
}
