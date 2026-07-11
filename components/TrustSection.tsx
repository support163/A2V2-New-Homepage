import Image from 'next/image'
import { ShieldCheck, Lock, ShieldPlus } from 'lucide-react'
import { APP_URL, DEMO_BOOKING_URL } from '@/lib/constants'

const cards = [
  {
    icon: '/icons/icon-security.svg',
    lucideIcon: ShieldCheck,
    title: 'Enterprise-Grade Data Security',
    titleMaxW: '',
    description:
      'HIPAA compliant with AES-256 encryption at rest and TLS 1.3 in transit.',
    bgPosition: 'left',
  },
  {
    icon: '/icons/icon-lock.svg',
    lucideIcon: Lock,
    title: 'Zero-Retention Private AI',
    titleMaxW: 'max-w-[160px]',
    description:
      'Your data is isolated and never used to train our public models.',
    bgPosition: 'center',
  },
  {
    icon: '/icons/icon-hipaa.svg',
    lucideIcon: ShieldPlus,
    title: 'HIPAA Compliant Architecture',
    titleMaxW: '',
    description:
      'Full BAA support and PHI protection for all healthcare providers.',
    bgPosition: 'right',
  },
]

interface TrustSectionProps {
  gradientCards?: boolean
  flatDesign?: boolean
}

export default function TrustSection({ gradientCards = false, flatDesign = false }: TrustSectionProps) {
  const appUrl = APP_URL
  const demoBookingUrl = DEMO_BOOKING_URL

  return (
    <section className="bg-background py-8 md:py-section-y">
      <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">

        {/* Centered heading + subtext + CTAs */}
        <div data-animate="" className="text-center">
          <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
            Your data. Your audience. Protected.
          </h2>
          <p className="mt-4 text-btn md:text-body-lg text-text-secondary max-w-[620px] mx-auto">
            We built A2V2 on a privacy-first architecture. We never train public
            models on your private client data, and every conversation is
            encrypted.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <a
              href={demoBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-blue-700 transition-colors"
            >
              Book a Demo
            </a>
            <a
              href={`${appUrl}/signin`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-text-primary text-text-primary text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-gray-50 transition-colors"
            >
              Try For Free
            </a>
          </div>
        </div>

        {/* Three trust cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-card-gap">
          {cards.map((card, i) => {
            const LucideIcon = card.lucideIcon

            if (flatDesign) {
              return (
                <div
                  key={card.title}
                  data-animate=""
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                  className="flex flex-col items-center text-center py-8"
                >
                  <LucideIcon size={48} strokeWidth={1.5} className="text-gray-800" />
                  <h3 className="mt-5 text-btn md:text-body-lg font-bold text-text-primary">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[12px] md:text-btn leading-[22px] text-text-secondary max-w-[280px]">
                    {card.description}
                  </p>
                </div>
              )
            }

            return (
              <div
                key={card.title}
                data-animate=""
                style={{
                  transitionDelay: `${(i + 1) * 100}ms`,
                  ...(gradientCards ? {
                    backgroundImage: 'url(/images/New-Cta-Background.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: card.bgPosition,
                  } : {}),
                }}
                className={`rounded-card p-card-p flex flex-col items-center text-center ${gradientCards ? '' : 'bg-surface'}`}
              >
                <Image
                  src={card.icon}
                  alt=""
                  width={64}
                  height={64}
                  className=""
                />
                <h3 className={`mt-4 text-btn md:text-body-lg font-bold text-white ${card.titleMaxW}`}>
                  {card.title}
                </h3>
                <p className={`mt-4 text-[12px] md:text-btn leading-[22px] min-h-[44px] ${gradientCards ? 'text-[#F3F3F3]' : 'text-white/60'}`}>
                  {card.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
