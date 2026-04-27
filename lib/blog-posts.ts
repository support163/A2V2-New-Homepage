export interface BlogPost {
  id: number
  title: string
  description: string
  category: string
  href: string
  thumbnail?: string
}

/** All published blog posts, newest first. */
export const blogPosts: BlogPost[] = [
  {
    id: 7,
    title: 'April 2026 Model Catalog Update: More HIPAA-Eligible AI Models, Lower Costs, Zero Downtime',
    description:
      'We just refreshed the entire model catalog. The HIPAA-eligible lineup got a lot bigger, most credit costs went down, and every retired model has been auto-migrated.',
    category: "What's New",
    href: '/blog/april-2026-model-catalog-update',
    thumbnail: '/images/blog-post7.png',
  },
  {
    id: 6,
    title: 'Your Front Desk Is Doing the Work of Five People and Patients Are Still Falling Through the Cracks',
    description:
      'The problem is not your team. It is the system they are working inside. Here is what needs to change.',
    category: 'Quick Guides',
    href: '/blog/longevity-clinic-staff-burnout-automation',
    thumbnail: '/images/Blog-Post6-Heroimage.png',
  },
  {
    id: 5,
    title: 'The Patients You Already Lost Are Your Biggest Revenue Opportunity',
    description:
      'You spent thousands to acquire them. They already trust your clinic. And right now, hundreds of them are sitting in your EHR doing absolutely nothing.',
    category: 'Best Practices',
    href: '/blog/lapsed-patient-re-engagement-longevity-clinics',
    thumbnail: '/images/Blog-Post5-Heroimage.png',
  },
  {
    id: 4,
    title: 'Your Patients Are Generating Health Data 24/7 — Your Clinic Is Ignoring All of It',
    description:
      'They wear Oura Rings. They strap on Whoop bands. They stick CGMs to their arms. So why isn\'t any of that data reaching your clinic?',
    category: 'Quick Guides',
    href: '/blog/wearable-data-gap-longevity-clinics',
    thumbnail: '/images/Blog-Post4-Heroimage.png',
  },
  {
    id: 3,
    title: 'Why Your NAD+ Patients Quit After 90 Days — The Protocol Adherence Crisis No One Is Tracking',
    description:
      'The problem isn\'t your protocols. It\'s the 89 days between appointments when no one is paying attention.',
    category: 'Best Practices',
    href: '/blog/protocol-adherence-crisis-longevity-medicine',
    thumbnail: '/images/Blog-Post3-MainHeroImage.png',
  },
  {
    id: 2,
    title: 'Your AI Is a HIPAA Violation Waiting to Happen — Here\'s How to Fix It',
    description:
      'If your staff has ever pasted patient data into ChatGPT, Claude, or Gemini, your clinic is already exposed.',
    category: 'Privacy & Trust',
    href: '/blog/hipaa-compliant-ai-healthcare',
    thumbnail: '/images/Blog-Post-photo2.png',
  },
  {
    id: 1,
    title: 'The Silent Revenue Killer in Longevity Medicine—and What\'s Finally Fixing It',
    description:
      'Most longevity clinics don\'t have a patient acquisition problem. They have a patient disappearance problem.',
    category: 'Best Practices',
    href: '/blog/silent-revenue-killer-longevity-medicine',
    thumbnail: '/images/Blog_post_photo1.png',
  },
]

/**
 * Returns related posts for a given post, excluding the current post.
 * Shows up to `limit` most recent published posts.
 */
export function getRelatedPosts(currentHref: string, limit = 3): BlogPost[] {
  return blogPosts
    .filter((p) => p.href !== currentHref)
    .slice(0, limit)
}
