import Image from 'next/image'
import { APP_URL, DEMO_BOOKING_URL } from '@/lib/constants'

interface CtaSectionProps {
  heading: string
  subtext: string
}

export default function CtaSection({ heading, subtext }: CtaSectionProps) {
  return (
    <section className="bg-white py-8 md:py-section-y">
      <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
        <div
          data-animate=""
          className="relative rounded-[20px] overflow-hidden
            flex flex-col md:flex-row md:items-center md:justify-between
            px-6 py-6 md:px-[96px] md:py-[24px] md:h-[460px]
            gap-8 md:gap-2"
          style={{
            backgroundImage: 'url(/images/New-Cta-Background.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="relative z-10 flex flex-col items-start max-w-[480px] md:min-w-[50%]">
            <h2 className="text-[24px] md:text-h2 font-bold text-white leading-tight">
              {heading}
            </h2>
            <p className="mt-4 text-btn text-white/70 leading-[22px]">
              {subtext}
            </p>
            <div className="mt-4 md:mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={`${APP_URL}/signin`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-surface text-btn font-medium px-btn-x py-btn-y rounded-full hover:bg-gray-100 transition-colors text-center"
              >
                Get Started
              </a>
              <a
                href={DEMO_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white text-btn font-medium px-btn-x py-btn-y rounded-full hover:bg-white/10 transition-colors text-center"
              >
                See a Demo
              </a>
            </div>
          </div>

          <div className="hidden md:flex relative z-0 flex-shrink-0 items-center justify-end md:self-stretch overflow-hidden">
            <Image
              src="/images/New-Cta-Decoration.png"
              alt=""
              width={400}
              height={412}
              className="w-full max-w-[320px] md:h-full md:w-auto md:max-w-none object-contain object-center md:object-right"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
