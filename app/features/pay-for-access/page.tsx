'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import {
  Layers,
  CheckCircle,
  MessageSquare,
  Globe,
  UserPlus,
  Activity,
  Eye,
  Users,
  BarChart3,
  Search,
  User,
  DollarSign,
  Calendar,
  Mail,
  FileText,
} from 'lucide-react'

import HeroSection from './components/HeroSection'
import StatsRow from './components/StatsRow'
import FeatureSection from './components/FeatureSection'
import AIPipelineMockup from './components/AIPipelineMockup'
import LeadCaptureMockup from './components/LeadCaptureMockup'
import AnalyticsMockup from './components/AnalyticsMockup'
import BetaChecklistMockup from './components/BetaChecklistMockup'
import RevenueSection from './components/RevenueSection'
import FaqAccordion from './components/FaqAccordion'
import FinalCta from './components/FinalCta'


const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'PayForAccess by A2V2.ai',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'PayForAccess by A2V2.ai lets creators monetize their expertise by charging followers $4.99 for 24-hour access to a personalized AI clone trained on their content.',
  url: 'https://www.a2v2.ai/features/pay-for-access',
  offers: {
    '@type': 'Offer',
    price: '4.99',
    priceCurrency: 'USD',
    description: '24-hour access to creator AI clone',
  },
  provider: {
    '@type': 'Organization',
    name: 'A2V2.ai',
    url: 'https://www.a2v2.ai',
  },
}

export default function PayForAccessPage() {
  return (
    <>
      <Navbar />
      <ScrollAnimator />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="font-sans">
        {/* Hero + Stats */}
        <HeroSection />
        <StatsRow />

        {/* Section 1 — AI Engine */}
        <FeatureSection
          number="01"
          pill="AI engine"
          title="Self-correcting AI trained on your content"
          subtitle="Four-stage intelligence that classifies, plans, executes, and quality-checks every response so followers get answers that sound like you."
          bgImage="/images/Grass-Background-1.png"
          mockup={<AIPipelineMockup />}
          features={[
            {
              Icon: Layers,
              title: 'Trained on your content only',
              description:
                'AI reflects your expertise, tone, and methodology. Not generic answers. Upload videos, courses, PDFs, and articles.',
            },
            {
              Icon: CheckCircle,
              title: 'Self-correcting quality control',
              description:
                'Every response goes through a built-in quality check before it reaches your follower. The AI catches errors and refines answers automatically.',
            },
            {
              Icon: MessageSquare,
              title: 'Conversational memory',
              description:
                "Returning users pick up right where they left off. The AI remembers past conversations so followers don't have to repeat themselves.",
            },
            {
              Icon: Globe,
              title: '24/7 availability',
              description:
                'Your AI works around the clock, answering questions at 3am, on weekends, and during holidays. No scheduling, no time zones.',
            },
          ]}
          divider={false}
        />

        {/* Section 2 — Lead Capture */}
        <FeatureSection
          reverse
          number="02"
          pill="Lead capture"
          title="Every conversation is a conversion opportunity"
          subtitle="Automatically collect name and email before AI access. Built-in CRM identifies high-intent users and encourages upgrades."
          bgImage="/images/Grass-Background-2.png"
          mockup={<LeadCaptureMockup />}
          features={[
            {
              Icon: UserPlus,
              title: 'Automatic lead collection',
              description:
                'Collects name and email before granting access. Every session builds your contact list, exportable to any CRM or email tool.',
            },
            {
              Icon: Activity,
              title: 'High-intent user detection',
              description:
                'The AI identifies followers asking advanced, specific questions, flagging them as your hottest leads for premium offers.',
            },
            {
              Icon: Eye,
              title: 'Personalized CTAs',
              description:
                'Based on what a follower asks about, the AI serves relevant calls-to-action, promoting your course, membership, or coaching at the right moment.',
            },
            {
              Icon: Users,
              title: 'Course/membership upsell engine',
              description:
                'The AI naturally encourages followers to upgrade to your full offerings, turning $4.99 sessions into high-ticket conversions.',
            },
          ]}
          divider
        />

        {/* Section 3 — Analytics */}
        <FeatureSection
          number="03"
          pill="Analytics"
          title="See exactly what your audience wants"
          subtitle="Track sessions, revenue, top questions, and conversion rates. Identify content gaps and double down on what works."
          bgImage="/images/Grass-Background-3.png"
          mockup={<AnalyticsMockup />}
          features={[
            {
              Icon: BarChart3,
              title: 'Real-time revenue tracking',
              description:
                "See daily, weekly, and monthly revenue at a glance. Know exactly how much you're earning while you sleep.",
            },
            {
              Icon: Search,
              title: 'Top questions asked',
              description:
                'See the exact questions your audience is asking most. Use these insights to create new content that fills gaps and drives engagement.',
            },
            {
              Icon: User,
              title: 'User demographics',
              description:
                "Understand who's paying for access: location, session frequency, and engagement patterns to help you tailor your content strategy.",
            },
            {
              Icon: Activity,
              title: 'Conversion funnel analysis',
              description:
                'Track how many followers go from clicking your link to paying, chatting, and upgrading to your premium offerings.',
            },
          ]}
          divider
        />

        {/* Section 4 — Beta Program */}
        <FeatureSection
          reverse
          number="04"
          pill="Beta program"
          title="White-glove onboarding, zero risk"
          subtitle="Free setup, 3 months free, priority support, and 1:1 onboarding. We handle everything so you can focus on creating."
          bgImage="/images/Grass-Background-4.png"
          mockup={<BetaChecklistMockup />}
          features={[
            {
              Icon: DollarSign,
              title: 'Free setup ($500 value)',
              description:
                'We handle everything: content upload, AI training, tone customization, and link generation. You just show up to a 15-minute call.',
            },
            {
              Icon: Calendar,
              title: '3 months free ($297 value)',
              description:
                'Use PayForAccess completely free for 3 months. No credit card required. Start earning from day one with zero upfront cost.',
            },
            {
              Icon: Mail,
              title: 'Priority 24-hour support',
              description:
                'Beta creators get direct access to our team. Any question, any issue, we respond within 24 hours.',
            },
            {
              Icon: FileText,
              title: 'Content optimization help',
              description:
                'We review your uploaded content and suggest improvements to help your AI give better, more accurate responses.',
            },
          ]}
          divider
        />

        {/* Revenue + FAQ + CTA */}
        <RevenueSection />
        <FaqAccordion />
        <FinalCta />
      </main>

      <Footer />
    </>
  )
}
