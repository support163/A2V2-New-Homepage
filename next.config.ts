import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    qualities: [25, 50, 75, 100],
  },
  async redirects() {
    return [
      {
        source: '/test-homepage-2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/solutions/real-estate',
        destination: '/solutions/healthcare',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
