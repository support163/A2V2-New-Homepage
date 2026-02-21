import Image from 'next/image'
import Link from 'next/link'

const cards = [
  {
    icon: '/icons/icon-security.svg',
    title: 'Enterprise-Grade Data Security',
    titleMaxW: '',
    description:
      'SOC2 Type II certified with AES-256 encryption at rest and in transit.',
  },
  {
    icon: '/icons/icon-lock.svg',
    title: 'Zero-Retention Private AI',
    titleMaxW: 'max-w-[160px]',
    description:
      'Your data is isolated and never used to train our public models.',
  },
  {
    icon: '/icons/icon-hipaa.svg',
    title: 'HIPAA Compliant Architecture',
    titleMaxW: '',
    description:
      'Full BAA support and PHI protection for all healthcare providers.',
  },
]

export default function TrustSection() {
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
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1mosl4E14DaFo3zdh1kBAVaQm7utfpH2Ns0Xt2fmknpca-KOeaAoP_pTLfDoQa3eXV4luzv_Eb"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-blue-700 transition-colors"
            >
              Book a Demo
            </a>
            <Link
              href="/security"
              className="text-btn font-medium text-text-primary hover:text-primary transition-colors"
            >
              Learn more &rarr;
            </Link>
          </div>
        </div>

        {/* Three trust cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-card-gap">
          {cards.map((card, i) => (
            <div
              key={card.title}
              data-animate=""
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              className="bg-surface rounded-card p-card-p flex flex-col items-center text-center"
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
              <p className="mt-4 text-[12px] md:text-btn text-white/60 leading-[22px] min-h-[44px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
