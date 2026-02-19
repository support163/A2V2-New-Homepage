import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrainSection from '@/components/TrainSection'
import FeaturesSection from '@/components/FeaturesSection'
import UseCasesSection from '@/components/UseCasesSection'
import TrustSection from '@/components/TrustSection'
import CtaBanner from '@/components/CtaBanner'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'

export default function HomePage() {
  return (
    <main>
      <ScrollAnimator />
      <Navbar />
      <Hero />
      <TrainSection />
      <FeaturesSection />
      <UseCasesSection />
      <TrustSection />
      <CtaBanner />
      <Footer />
    </main>
  )
}
