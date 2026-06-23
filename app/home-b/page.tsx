import type { Metadata } from 'next'
import TestHomepage2 from '../test-homepage-2/page'
import HomeVariantTracker from '@/components/HomeVariantTracker'

export const metadata: Metadata = {
  title: 'A2V2.ai',
  robots: { index: false, follow: false },
}

export default function HomeBPage() {
  return (
    <>
      <TestHomepage2 />
      <HomeVariantTracker variant="home-b" />
    </>
  )
}
