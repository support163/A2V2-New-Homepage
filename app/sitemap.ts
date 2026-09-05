import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'

const BASE = 'https://www.a2v2.ai'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                                      lastModified: '2026-06-19', changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/platform`,                         lastModified: '2026-07-01', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/book-a-demo`,                     lastModified: '2026-06-19', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog`,                            lastModified: '2026-06-17', changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/roi-calculator`,                  lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.7 },
    // Specialty landing pages
    { url: `${BASE}/patient-retention-software`,      lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.9 },
    // Solutions
    { url: `${BASE}/solutions/healthcare`,            lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/solutions/custom-dashboard`,      lastModified: '2026-06-29', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`,                            lastModified: '2026-07-07', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/security`,                         lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.8 },
    // Features
    { url: `${BASE}/features/patient-intake`,         lastModified: '2026-07-09', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/features/patient-crm`,            lastModified: '2026-07-09', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/features/ai-agents`,              lastModified: '2026-07-09', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/features/scheduling`,             lastModified: '2026-07-10', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/features/pay-for-access`,         lastModified: '2026-06-17', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/features/patient-messaging`,      lastModified: '2026-07-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/features/ehr-data`,              lastModified: '2026-07-15', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog/text-reminders-for-patients`,          lastModified: '2026-08-13', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog/why-patients-drop-off-between-visits`,      lastModified: '2026-08-14', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog/patient-engagement-specialty-clinics`,           lastModified: '2026-08-19', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog/getting-your-clinic-team-to-adopt-new-software`, lastModified: '2026-08-20', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog/first-30-days-new-patient`,                      lastModified: '2026-08-21', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog/re-engaging-patients-who-went-quiet`,            lastModified: '2026-09-03', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/blog/patient-retention-metrics-to-track`,            lastModified: '2026-09-04', changeFrequency: 'monthly', priority: 0.7 },
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
