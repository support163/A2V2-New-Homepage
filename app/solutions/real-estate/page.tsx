import type { Metadata } from 'next'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import RealEstateFAQ from '@/components/real-estate/RealEstateFAQ'
import CtaBanner from '@/components/CtaBanner'
import { APP_URL, CHAT_EMBED_URL, DEMO_BOOKING_URL } from '@/lib/constants'
import {
  PhoneOff,
  MessageCircleQuestion,
  UserX,
  MessageSquare,
  Filter,
  CalendarCheck,
  Link as LinkIcon,
  Upload,
  Palette,
  Rocket,
} from 'lucide-react'

const CALENDLY_LINK = DEMO_BOOKING_URL

export const metadata: Metadata = {
  title: 'AI for Real Estate Agents - Automated Lead Engagement | A2V2.ai',
  description:
    'A2V2.ai is the AI-powered platform built for real estate agents. Qualify leads 24/7, answer listing questions automatically, and never lose a prospect to a missed call again. Your AI inside sales agent that works around the clock.',
  keywords:
    'real estate AI, real estate lead engagement, AI for realtors, real estate chatbot, listing inquiry automation, real estate lead capture, AI inside sales agent, real estate CRM alternative, automated lead follow-up real estate',
  alternates: {
    canonical: 'https://www.a2v2.ai/solutions/real-estate',
  },
  openGraph: {
    title: 'AI for Real Estate Agents - Automated Lead Engagement | A2V2.ai',
    description:
      'A2V2.ai is the AI-powered platform built for real estate agents. Qualify leads 24/7, answer listing questions automatically, and never lose a prospect to a missed call again.',
    url: 'https://www.a2v2.ai/solutions/real-estate',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI for Real Estate Agents - Automated Lead Engagement | A2V2.ai',
    description:
      'A2V2.ai is the AI-powered platform built for real estate agents. Qualify leads 24/7, answer listing questions automatically, and never lose a prospect to a missed call again.',
  },
}

/* ───────────────────────── data ───────────────────────── */

const trustBarItems = [
  'Captures Leads 24/7',
  'Answers Listing Questions Instantly',
  'Schedules Viewings Automatically',
  'Works From Your Bio Link',
]

const problemCards = [
  {
    title: 'Missed Inquiries',
    body: 'Buyers browse listings at night, on weekends, and during open houses when you\u2019re busy. Every unanswered inquiry is a lead that goes to another agent. Industry data suggests agents who respond within 5 minutes are 100x more likely to connect with a lead than those who wait 30 minutes.',
    icon: PhoneOff,
  },
  {
    title: 'Repetitive Questions Drain Your Time',
    body: 'How many square feet? Is there parking? What are the HOA fees? Are pets allowed? You answer the same listing questions dozens of times a week. Every minute spent on repetitive inquiries is a minute not spent closing deals.',
    icon: MessageCircleQuestion,
  },
  {
    title: 'Leads Fall Through the Cracks',
    body: 'You collect leads from Zillow, your website, social media, open houses, and referrals. They live in different apps, spreadsheets, and text threads. Without a system to follow up automatically, warm leads go cold while you\u2019re juggling showings.',
    icon: UserX,
  },
]

const solutionCards = [
  {
    title: 'Instant Listing Inquiries',
    body: 'Your AI knows every detail about your listings \u2014 square footage, price, HOA fees, neighborhood info, school districts. When a prospect asks a question at 11 PM, they get an accurate, helpful answer instantly. No waiting. No voicemail. No lost interest.',
    icon: MessageSquare,
  },
  {
    title: 'Automated Lead Qualification',
    body: 'Not every inquiry is a serious buyer. A2V2.ai is designed to ask the right questions \u2014 budget, timeline, pre-approval status, preferred neighborhoods \u2014 and flag the high-intent leads so you spend your time on prospects ready to move.',
    icon: Filter,
  },
  {
    title: 'Smart Viewing Scheduler',
    body: 'When a qualified lead wants to see a property, your AI is designed to offer available time slots and book the viewing directly into your calendar. No back-and-forth texts. No phone tag. The prospect gets instant confirmation and you get a booked showing.',
    icon: CalendarCheck,
  },
  {
    title: 'Lead Capture From Your Bio Link',
    body: 'Your A2V2 bio link becomes your digital storefront. Prospects from Instagram, TikTok, YouTube, or anywhere else land on your interactive profile where your AI engages them, captures their contact info, and starts the conversation \u2014 all before you even know they exist.',
    icon: LinkIcon,
  },
]

const howItWorksSteps = [
  {
    step: 1,
    title: 'Connect',
    description:
      'Upload your listings, property details, and FAQs. Paste your website URL. Your AI learns everything about your properties and your business.',
    icon: Upload,
  },
  {
    step: 2,
    title: 'Customize',
    description:
      'Set your brand voice, qualification questions, and scheduling preferences. Choose which listings to highlight. Set up your bio link.',
    icon: Palette,
  },
  {
    step: 3,
    title: 'Launch',
    description:
      'Share your A2V2 link in your bio, on your website, on listing pages, and on business cards. Your AI starts engaging leads 24/7.',
    icon: Rocket,
  },
]

const comparisonRows = [
  {
    feature: '24/7 Lead Response',
    a2v2: 'Instant AI responses',
    crm: 'Email autoresponder only',
    diy: 'Only when you\u2019re available',
  },
  {
    feature: 'Listing Question Answers',
    a2v2: 'AI knows every property detail',
    crm: 'Generic templates',
    diy: 'Manual replies',
  },
  {
    feature: 'Lead Qualification',
    a2v2: 'Automated screening questions',
    crm: 'Manual review',
    diy: 'Gut feeling',
  },
  {
    feature: 'Viewing Scheduling',
    a2v2: 'Automated booking',
    crm: 'Manual coordination',
    diy: 'Phone tag',
  },
  {
    feature: 'Bio Link Integration',
    a2v2: 'Built-in interactive profile',
    crm: 'Not available',
    diy: 'Link tree with no AI',
  },
  {
    feature: 'Setup Time',
    a2v2: 'Minutes',
    crm: 'Weeks to months',
    diy: 'N/A',
  },
  {
    feature: 'Cost',
    a2v2: 'Subscription-based',
    crm: 'High + per-seat fees',
    diy: 'Your time',
  },
]

const roiStats = [
  { value: '100x', label: 'More likely to connect responding in 5 min vs 30 min' },
  { value: '24/7', label: 'Lead engagement \u2014 nights, weekends, holidays' },
  { value: '0', label: 'Additional staff needed' },
  { value: 'Minutes', label: 'To set up and go live' },
]

/* ───────────────────────── page ───────────────────────── */

export default function RealEstatePage() {
  return (
    <main>
      <ScrollAnimator />
      <Navbar />

      {/* ── HERO ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1 w-full flex flex-col items-center lg:items-start" data-animate="">
              <h1 className="text-[28px] md:text-h1 font-bold text-text-primary leading-[1.2] md:leading-[58px] w-full md:max-w-[520px] text-center lg:text-left">
                Your 24/7 Inside Sales Agent for Real Estate
              </h1>
              <p className="mt-6 text-btn md:text-body-lg text-text-secondary leading-[25px] max-w-[460px] text-center lg:text-left">
                A2V2.ai qualifies leads, answers listing questions, and schedules
                private viewings automatically &mdash; so you only focus on serious
                buyers. No missed calls. No lost leads. No extra staff.
              </p>

              <div className="mt-8 md:mt-6 flex items-center justify-center lg:justify-start gap-4 flex-wrap">
                <a
                  href={`${APP_URL}/signin`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-blue-700 transition-colors"
                >
                  Try For Free
                </a>
                <a
                  href={CALENDLY_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background text-text-primary text-btn font-medium px-btn-x py-btn-y rounded-btn border border-text-primary hover:bg-gray-50 transition-colors"
                >
                  See a Demo
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start">
                {trustBarItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm md:text-btn text-text-secondary"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                      <circle cx="8" cy="8" r="8" fill="#2563EB" />
                      <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end w-full max-w-[520px] lg:max-w-none" data-animate="" style={{ transitionDelay: '150ms' }}>
              <div className="relative w-full max-w-[520px]">
                <Image
                  src="/images/hero-background-mockup-2.0.png"
                  alt="A2V2 device frame"
                  width={520}
                  height={480}
                  className="w-full object-contain"
                  priority
                />
                <iframe
                  src={CHAT_EMBED_URL}
                  title="A2V2 AI Chat"
                  allow="clipboard-write"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  className="absolute rounded-[12px] border-0"
                  style={{ top: '4.5%', left: '4.5%', width: '91%', height: '91%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary max-w-[720px]">
              You&apos;re Losing Leads Every Hour You&apos;re Not Available
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-card-gap">
            {problemCards.map((card, i) => (
              <div
                key={card.title}
                data-animate=""
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                className="flex flex-col"
              >
                <card.icon className="w-12 h-12 text-black" strokeWidth={1.5} />
                <h3 className="mt-4 text-btn md:text-body-lg font-bold text-black">
                  {card.title}
                </h3>
                <p className="mt-4 text-[12px] md:text-btn text-gray-500 leading-[22px]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="" className="max-w-[780px]">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
              A2V2.ai: Your AI-Powered Inside Sales Agent
            </h2>
            <p className="mt-4 text-btn md:text-body-lg text-text-secondary leading-relaxed">
              Whether you&apos;re managing luxury listings, residential properties,
              or commercial real estate, A2V2.ai works as your always-on assistant
              &mdash; qualifying leads, answering property questions, and booking
              viewings while you focus on closing deals.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-card-gap">
            {solutionCards.map((card, i) => (
              <div
                key={card.title}
                data-animate=""
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                className="flex flex-col"
              >
                <card.icon className="w-10 h-10 text-black" strokeWidth={1.5} />
                <h3 className="mt-4 text-btn md:text-body-lg font-bold text-black">
                  {card.title}
                </h3>
                <p className="mt-4 text-[12px] md:text-btn text-gray-500 leading-[22px]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
              Live in Minutes. Leads Coming in by Tomorrow.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-card-gap">
            {howItWorksSteps.map((step, i) => (
              <div
                key={step.title}
                data-animate=""
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                className="flex flex-col"
              >
                <step.icon className="w-10 h-10 text-black" strokeWidth={1.5} />
                <span className="mt-4 text-gray-500 text-sm font-bold uppercase tracking-wide">
                  Step {step.step}
                </span>
                <h3 className="mt-3 text-btn md:text-body-lg font-bold text-black">
                  {step.title}
                </h3>
                <p className="mt-4 text-[12px] md:text-btn text-gray-500 leading-[22px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
              A2V2.ai vs. Traditional Lead Management
            </h2>
          </div>

          <div data-animate="" className="mt-12 overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#F5F5F5]">
                  <th className="py-4 pr-4 pl-4 text-left text-btn font-bold text-black">
                    Feature
                  </th>
                  <th className="py-4 px-4 text-left text-btn font-bold text-primary">
                    A2V2.ai
                  </th>
                  <th className="py-4 px-4 text-left text-btn font-bold text-black">
                    Traditional CRM
                  </th>
                  <th className="py-4 px-4 text-left text-btn font-bold text-black">
                    Doing It Yourself
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAFAFA]'}
                  >
                    <td className="py-4 pr-4 pl-4 text-sm font-medium text-black">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-sm text-text-secondary">
                      {row.a2v2}
                    </td>
                    <td className="py-4 px-4 text-sm text-text-secondary">
                      {row.crm}
                    </td>
                    <td className="py-4 px-4 text-sm text-text-secondary">
                      {row.diy}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── ROI SECTION ── */}
      <section className="bg-background py-8 md:py-section-y">
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
          <div data-animate="">
            <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
              The Math on Never Missing a Lead
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-card-gap">
            {roiStats.map((stat, i) => (
              <div
                key={stat.value}
                data-animate=""
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                className="flex flex-col"
              >
                <p className="text-[36px] md:text-h2 font-bold text-primary leading-tight">
                  {stat.value}
                </p>
                <p className="mt-2 text-[12px] md:text-btn text-gray-500 leading-[22px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div data-animate="" className="mt-10 max-w-[600px]">
            <p className="text-btn md:text-body-lg text-text-secondary leading-relaxed">
              Every missed inquiry is a potential commission lost. A2V2.ai makes
              sure no lead goes unanswered, no matter when they reach out.
            </p>
            <div className="mt-6">
              <a
                href={`${APP_URL}/signin`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex bg-primary text-white text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-blue-700 transition-colors"
              >
                Try For Free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How does the AI know about my listings?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You upload your listing details, property information, and FAQs during setup. You can also paste your website URL and the AI will learn from it. Whenever you add or update a listing, the AI updates automatically.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can the AI schedule property viewings?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. A2V2.ai is designed to offer available time slots to qualified leads and book viewings directly into your calendar. No back-and-forth coordination needed.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does it work with my existing real estate tools?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "A2V2.ai is designed to work alongside your existing tools \u2014 your website, social media, and calendar. It\u2019s not designed to replace your CRM but to handle the front-end lead engagement that feeds into your existing workflow.",
                },
              },
              {
                '@type': 'Question',
                name: 'Can I customize what the AI says?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Absolutely. You control the tone, the qualification questions, which listings to highlight, and how the AI represents your brand. It sounds like you, not like a generic chatbot.',
                },
              },
              {
                '@type': 'Question',
                name: 'How is this different from a chatbot on my website?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most website chatbots are basic Q&A tools with scripted responses. A2V2.ai is an AI that actually understands your listings, qualifies leads intelligently, and books viewings. Plus it lives on your bio link so it works across all your social channels, not just your website.',
                },
              },
              {
                '@type': 'Question',
                name: 'How quickly can I get started?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Most agents are live within minutes. Upload your listings, customize your profile, and share your link. No technical setup required.',
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'A2V2.ai for Real Estate',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            description:
              'AI-powered lead engagement platform for real estate agents. Qualify leads 24/7, answer listing questions automatically, and schedule viewings.',
            audience: {
              '@type': 'Audience',
              audienceType: 'Real Estate Agents, Brokerages, Real Estate Teams',
            },
          }),
        }}
      />
      <RealEstateFAQ />

      {/* ── CTA ── */}
      <CtaBanner
        heading="Stop Losing Leads to Missed Calls and Slow Replies"
        subtext="Your next buyer is browsing listings right now. Make sure your AI is there to answer their questions, capture their info, and book the showing — even while you sleep."
      />

      <Footer />
    </main>
  )
}
