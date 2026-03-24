import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import BlogPost from '@/components/blog/BlogPost'

export const metadata: Metadata = {
  title: 'The Silent Revenue Killer in Longevity Medicine | A2V2.ai Blog',
  description:
    'The majority of longevity patients disengage within 6 months. Learn why patients disappear and how AI-powered engagement is designed to solve the retention crisis in longevity medicine.',
  alternates: {
    canonical:
      'https://www.a2v2.ai/blog/silent-revenue-killer-longevity-medicine',
  },
  openGraph: {
    title:
      'The Silent Revenue Killer in Longevity Medicine—and What\'s Finally Fixing It',
    description:
      'The majority of longevity patients disengage within 6 months. Learn why patients disappear and how AI-powered engagement is designed to solve the retention crisis in longevity medicine.',
    url: 'https://www.a2v2.ai/blog/silent-revenue-killer-longevity-medicine',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'The Silent Revenue Killer in Longevity Medicine | A2V2.ai Blog',
    description:
      'The majority of longevity patients disengage within 6 months. Learn why patients disappear and how AI-powered engagement is designed to solve the retention crisis in longevity medicine.',
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
            headline:
              'The Silent Revenue Killer in Longevity Medicine—and What\'s Finally Fixing It',
            description:
              'The majority of longevity patients disengage within 6 months. Learn why patients disappear and how AI-powered engagement is designed to solve the retention crisis in longevity medicine.',
            author: {
              '@type': 'Organization',
              name: 'The A2V2 Team',
            },
            image: 'https://www.a2v2.ai/images/Blog_post_photo1.png',
            publisher: {
              '@type': 'Organization',
              name: 'A2V2.ai',
              url: 'https://www.a2v2.ai',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.a2v2.ai/icons/Solo-Logo-A2V2.svg',
              },
            },
            datePublished: '2026-03-11',
            dateModified: '2026-03-11',
            url: 'https://www.a2v2.ai/blog/silent-revenue-killer-longevity-medicine',
            articleSection: 'Best Practices',
            keywords:
              'longevity medicine, patient retention, patient engagement, NAD+, peptide therapy, HIPAA compliance, healthcare AI',
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
              { '@type': 'ListItem', position: 3, name: 'The Silent Revenue Killer in Longevity Medicine', item: 'https://www.a2v2.ai/blog/silent-revenue-killer-longevity-medicine' },
            ],
          }),
        }}
      />
      <main>
        <ScrollAnimator />
        <Navbar />
        <BlogPost />
        <Footer />
      </main>
    </>
  )
}
