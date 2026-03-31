'use client'

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import HealthcareAiFAQ from '@/components/healthcare-ai/HealthcareAiFAQ'
import CtaSection from './components/CtaSection'
import {
  MessageSquare,
  Clock,
  User,
  Activity,
  FileText,
  Calendar,
  Layers,
  AlertTriangle,
  BarChart3,
  Users,
  Shield,
  Lock,
} from 'lucide-react'
import HeroSection from './components/HeroSection'
import StatsRow from './components/StatsRow'
import FeatureSection from './components/FeatureSection'
import PatientEngagementMockup from './components/PatientEngagementMockup'
import ProtocolIntelligenceMockup from './components/ProtocolIntelligenceMockup'
import PredictiveAnalyticsMockup from './components/PredictiveAnalyticsMockup'
import ComplianceMockup from './components/ComplianceMockup'
import RoiCalculator from './components/RoiCalculator'

export default function HealthcareAiPlatformPage() {
  return (
    <main className="font-sans">
      <ScrollAnimator />
      <Navbar />

      <HeroSection />
      <StatsRow />

      {/* Section 1 — Patient Engagement */}
      <FeatureSection
        number="01"
        pill="Patient engagement"
        title="Clinical-grade patient engagement"
        subtitle="AI-powered SMS, email, and phone sequences built around treatment protocols. Every touchpoint is clinically timed and personalized to therapy stage."
        bgImage="/images/Grass-Background-1.png"
        mockup={<PatientEngagementMockup />}
        features={[
          {
            Icon: MessageSquare,
            title: 'Protocol-based messaging',
            description:
              'AI sends SMS, email, and calls timed to each patient\'s treatment stage. Not marketing drip campaigns. Real clinical sequences based on therapy protocols.',
          },
          {
            Icon: Clock,
            title: 'Clinically timed touchpoints',
            description:
              'Follow-ups trigger based on treatment milestones, not arbitrary date ranges. The AI knows when Week 3 labs are due or when a dosage adjustment window opens.',
          },
          {
            Icon: User,
            title: 'Personalized per patient',
            description:
              'Each patient gets communication tailored to their therapy stage, adherence history, and preferences. No generic blasts.',
          },
          {
            Icon: Activity,
            title: 'Multi-channel orchestration',
            description:
              'SMS, email, and phone work together in a coordinated sequence. If a patient doesn\'t respond to SMS, the AI escalates to a call.',
          },
        ]}
        divider={false}
      />

      {/* Section 2 — Protocol Intelligence */}
      <FeatureSection
        reverse
        number="02"
        pill="Protocol intelligence"
        title="Treatment protocol intelligence"
        subtitle="Native support for NAD+ therapy, peptide sequences, HRT programs, supplement protocols, and biomarker optimization. AI that understands clinical workflows."
        bgImage="/images/Grass-Background-2.png"
        mockup={<ProtocolIntelligenceMockup />}
        features={[
          {
            Icon: FileText,
            title: 'Native clinical protocols',
            description:
              'Built-in support for NAD+, HRT, peptide therapy, supplement stacks, and biomarker optimization. No custom field hacking or workarounds.',
          },
          {
            Icon: Activity,
            title: 'Biomarker tracking',
            description:
              'Track labs, hormone levels, and biomarkers over time. AI correlates engagement patterns with clinical outcomes.',
          },
          {
            Icon: Calendar,
            title: 'Dosage cycle management',
            description:
              'Automated tracking of dosage schedules, cycle timing, and refill reminders. The AI manages the cadence so your staff doesn\'t have to.',
          },
          {
            Icon: Layers,
            title: 'Multi-protocol patients',
            description:
              'Patients on multiple simultaneous protocols are managed holistically. The AI coordinates touchpoints across all active treatments.',
          },
        ]}
        divider
      />

      {/* Section 3 — Predictive Analytics */}
      <FeatureSection
        number="03"
        pill="Predictive analytics"
        title="Predictive patient analytics"
        subtitle="AI is designed to analyze engagement patterns and flag at-risk patients 30 to 45 days before they drop off. Actionable alerts, not data dumps."
        bgImage="/images/Grass-Background-3.png"
        mockup={<PredictiveAnalyticsMockup />}
        features={[
          {
            Icon: AlertTriangle,
            title: '30 to 45 day early warning',
            description:
              'AI is designed to flag patients showing signs of disengagement weeks before they disappear. Your team gets alerts with enough time to intervene.',
          },
          {
            Icon: BarChart3,
            title: 'Engagement pattern analysis',
            description:
              'Track open rates, response times, appointment attendance, and treatment adherence across your entire patient base.',
          },
          {
            Icon: Users,
            title: 'Cohort-level insights',
            description:
              'Compare retention and engagement across treatment types, demographics, and enrollment periods to optimize your protocols.',
          },
          {
            Icon: Shield,
            title: 'Revenue impact reporting',
            description:
              'See exactly how much revenue is at risk from disengaged patients and how much the AI is projected to recover.',
          },
        ]}
        divider
      />

      {/* Section 4 — Compliance */}
      <FeatureSection
        reverse
        number="04"
        pill="Compliance"
        title="Enterprise-grade compliance"
        subtitle="100% HIPAA compliant with private LLM deployment. Your patient data never touches public AI models, never leaves your secure environment."
        bgImage="/images/Grass-Background-4.png"
        mockup={<ComplianceMockup />}
        features={[
          {
            Icon: Shield,
            title: 'HIPAA compliant from day one',
            description:
              'Not bolted on as an afterthought. End-to-end AES-256 encryption, private LLM deployment, BAA provided, quarterly pen testing, and complete audit logs.',
          },
          {
            Icon: Lock,
            title: 'Private LLM deployment',
            description:
              'Your patient data never touches OpenAI, Google, or any public model. A2V2 runs on private infrastructure in U.S. data centers.',
          },
          {
            Icon: FileText,
            title: 'Complete audit trails',
            description:
              'Every interaction, decision, and data access is logged and traceable. Built for practices that take compliance audits seriously.',
          },
          {
            Icon: Users,
            title: 'Role-based access control',
            description:
              'Control exactly who sees what. Assign permissions by role so clinical staff, admins, and providers each have appropriate access.',
          },
        ]}
        divider
      />

      {/* ROI Calculator */}
      <RoiCalculator />

      {/* FAQ */}
      <HealthcareAiFAQ />

      {/* CTA */}
      <CtaSection
        heading="Ready to stop losing patients?"
        subtext="Join longevity clinics and functional medicine practices using A2V2 to automate patient engagement, track protocols, and recover revenue on autopilot."
      />

      <Footer />
    </main>
  )
}
