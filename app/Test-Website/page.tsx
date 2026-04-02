'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import HeroSection from './components/HeroSection'
import StatsRow from './components/StatsRow'
import ProductCards from './components/ProductCards'
import HealthcareShowcase from './components/HealthcareShowcase'
import PayForAccessShowcase from './components/PayForAccessShowcase'
import TrustBadges from './components/TrustBadges'
import CtaSection from './components/CtaSection'

export default function TestWebsitePage() {
  return (
    <main className="font-sans" style={{ background: '#0F0E0D' }}>
      <ScrollAnimator />
      <Navbar />
      <HeroSection />
      <StatsRow />
      <ProductCards />
      <HealthcareShowcase />
      <PayForAccessShowcase />
      <TrustBadges />
      <CtaSection />
      <Footer />
    </main>
  )
}
