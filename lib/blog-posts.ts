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
