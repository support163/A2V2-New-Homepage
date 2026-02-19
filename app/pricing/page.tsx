import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import PricingSection from '@/components/PricingSection'
import AddOns from '@/components/AddOns'
import TrustSection from '@/components/TrustSection'
import FAQ from '@/components/FAQ'
import CtaBanner from '@/components/CtaBanner'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'

export const metadata: Metadata = {
  title: 'Pricing — A2V2.ai',
  description:
    'Clone yourself. Scale your time. Choose the plan that fits your needs.',
}

export default function PricingPage() {
  return (
    <main className="pricing-page">
      <ScrollAnimator />
      <Navbar />
      <PricingSection />
      <AddOns />
      <TrustSection />
      <FAQ />
      <CtaBanner />
      <Footer />
    </main>
  )
}
