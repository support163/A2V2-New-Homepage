'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import HeroSection from './Test-Website/components/HeroSection'
import StatsRow from './Test-Website/components/StatsRow'
import ProductCards from './Test-Website/components/ProductCards'
import HealthcareShowcase from './Test-Website/components/HealthcareShowcase'
import PayForAccessShowcase from './Test-Website/components/PayForAccessShowcase'
import TrustBadges from './Test-Website/components/TrustBadges'
import CtaSection from './Test-Website/components/CtaSection'

export default function HomePage() {
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
