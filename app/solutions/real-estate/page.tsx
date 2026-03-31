'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import RealEstateFAQ from '@/components/real-estate/RealEstateFAQ'
import CtaSection from './components/CtaSection'
import {
  MessageSquare,
  Home,
  RefreshCw,
  Globe,
  Filter,
  Target,
  UserPlus,
  TrendingUp,
  Calendar,
  Clock,
  Bell,
  MapPin,
  Link as LinkIcon,
  Zap,
} from 'lucide-react'
import HeroSection from './components/HeroSection'
import StatsRow from './components/StatsRow'
import FeatureSection from './components/FeatureSection'
import ListingInquiriesMockup from './components/ListingInquiriesMockup'
import LeadQualificationMockup from './components/LeadQualificationMockup'
import ViewingSchedulerMockup from './components/ViewingSchedulerMockup'
import BioLinkMockup from './components/BioLinkMockup'
import RoiCalculator from './components/RoiCalculator'

export default function RealEstatePage() {
  return (
    <main className="font-sans">
      <ScrollAnimator />
      <Navbar />

      <HeroSection />
      <StatsRow />

      {/* Section 1 — Instant Listing Inquiries */}
      <FeatureSection
        number="01"
        pill="Listing intelligence"
        title="Instant answers to every listing question"
        subtitle="Your AI knows every detail about your properties. Square footage, HOA fees, school districts, parking. Prospects get accurate answers instantly, even at 11 PM."
        bgImage="/images/Grass-Background-1.png"
        mockup={<ListingInquiriesMockup />}
        features={[
          {
            Icon: MessageSquare,
            title: '24/7 instant responses',
            description:
              'Buyers browse at night and on weekends. Your AI answers property questions the moment they ask, so you never lose a lead to a slow reply.',
          },
          {
            Icon: Home,
            title: 'Knows every property detail',
            description:
              'Square footage, price, HOA, neighborhood, schools, parking, pet policies. Upload once and the AI handles every question accurately.',
          },
          {
            Icon: RefreshCw,
            title: 'Auto-updates with new listings',
            description:
              'Add or update a listing and your AI learns the changes immediately. No manual retraining or content management.',
          },
          {
            Icon: Globe,
            title: 'Works across all channels',
            description:
              'Website, Instagram bio, TikTok, YouTube, business cards. One link that works everywhere your prospects are.',
          },
        ]}
        divider={false}
      />

      {/* Section 2 — Lead Qualification */}
      <FeatureSection
        reverse
        number="02"
        pill="Lead qualification"
        title="Automated lead qualification that filters for serious buyers"
        subtitle="Not every inquiry is a serious buyer. A2V2.ai asks the right questions and flags high-intent leads so you spend time on prospects ready to move."
        bgImage="/images/Grass-Background-2.png"
        mockup={<LeadQualificationMockup />}
        features={[
          {
            Icon: Filter,
            title: 'Smart screening questions',
            description:
              'AI asks about budget, timeline, pre-approval status, and preferred neighborhoods. You get qualified leads, not tire-kickers.',
          },
          {
            Icon: Target,
            title: 'High-intent lead flagging',
            description:
              'Leads ready to buy get flagged immediately so you can prioritize your follow-up and focus on the prospects most likely to close.',
          },
          {
            Icon: UserPlus,
            title: 'Automatic contact capture',
            description:
              'Every conversation captures name, email, phone, and preferences. Exported to your CRM automatically.',
          },
          {
            Icon: TrendingUp,
            title: 'Lead scoring',
            description:
              'Each lead gets a score based on their responses. Budget, timeline, and engagement level combine into one clear priority ranking.',
          },
        ]}
        divider
      />

      {/* Section 3 — Viewing Scheduler */}
      <FeatureSection
        number="03"
        pill="Scheduling"
        title="Viewings booked automatically, zero phone tag"
        subtitle="When a qualified lead wants to see a property, your AI offers available slots and books directly into your calendar. Instant confirmation, no back-and-forth."
        bgImage="/images/Grass-Background-3.png"
        mockup={<ViewingSchedulerMockup />}
        features={[
          {
            Icon: Calendar,
            title: 'Direct calendar booking',
            description:
              'AI checks your availability and books viewings directly into your calendar. Prospects get instant confirmation. You get a booked showing.',
          },
          {
            Icon: Clock,
            title: 'No back-and-forth',
            description:
              'Eliminates the text and email ping-pong of scheduling. The AI handles it in the same conversation where the lead was qualified.',
          },
          {
            Icon: Bell,
            title: 'Automatic reminders',
            description:
              'Both you and the prospect get reminders before the showing. Reduces no-shows and keeps everyone on the same page.',
          },
          {
            Icon: MapPin,
            title: 'Multi-property tours',
            description:
              'Interested in multiple listings? The AI can schedule back-to-back viewings and organize a property tour route.',
          },
        ]}
        divider
      />

      {/* Section 4 — Bio Link Lead Capture */}
      <FeatureSection
        reverse
        number="04"
        pill="Bio link"
        title="Your bio link becomes a lead generation machine"
        subtitle="Prospects from Instagram, TikTok, YouTube, or anywhere else land on your interactive profile where the AI engages them, captures their info, and starts the conversation."
        bgImage="/images/Grass-Background-4.png"
        mockup={<BioLinkMockup />}
        features={[
          {
            Icon: LinkIcon,
            title: 'One link for everything',
            description:
              'Replace your link tree with an AI-powered profile. Prospects engage with your listings, ask questions, and get qualified in one seamless experience.',
          },
          {
            Icon: Globe,
            title: 'Works on every platform',
            description:
              'Instagram, TikTok, YouTube, Facebook, email signatures, business cards. One link that turns any traffic source into qualified leads.',
          },
          {
            Icon: UserPlus,
            title: 'Captures contact info automatically',
            description:
              'Every visitor who engages leaves their name, email, and property preferences. Your list grows on autopilot.',
          },
          {
            Icon: Zap,
            title: 'Starts conversations before you know they exist',
            description:
              'By the time you check your dashboard, the AI has already engaged the prospect, answered their questions, and captured their info.',
          },
        ]}
        divider
      />

      {/* ROI Calculator */}
      <RoiCalculator />

      {/* FAQ */}
      <RealEstateFAQ />

      {/* CTA */}
      <CtaSection
        heading="Stop losing leads to missed calls and slow replies"
        subtext="Your next buyer is browsing listings right now. Make sure your AI is there to answer their questions, capture their info, and book the showing."
      />

      <Footer />
    </main>
  )
}
