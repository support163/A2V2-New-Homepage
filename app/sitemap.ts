import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'

const BASE = 'https://www.a2v2.ai'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                                      lastModified: '2026-06-19', changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/book-a-demo`,                     lastModified: '2026-06-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/pricing`,                         lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`,                            lastModified: '2026-06-17', changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/roi-calculator`,                  lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.7 },
    // Specialty landing pages
    { url: `${BASE}/ai-for-longevity-clinics`,        lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ai-for-functional-medicine`,      lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/ai-for-hrt-clinics`,              lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/patient-retention-software`,      lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.9 },
    // Solutions
    { url: `${BASE}/solutions/healthcare`,            lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.8 },
    // Features
    { url: `${BASE}/features/security`,               lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/features/pay-for-access`,         lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.6 },
    // Legal
    { url: `${BASE}/privacy-policy`,                  lastModified: '2026-03-24', changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/terms-and-conditions`,            lastModified: '2026-03-24', changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}${post.href}`,
    lastModified: '2026-06-17',
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
