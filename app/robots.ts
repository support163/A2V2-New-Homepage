import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'Amazonbot',
        ],
        allow: '/',
      },
      {
        userAgent: ['Bytespider', 'CCBot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://www.a2v2.ai/sitemap.xml',
  }
}
