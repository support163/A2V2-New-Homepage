import { APP_URL, DEMO_BOOKING_URL } from '@/lib/constants'

export default function HeroSection() {
  return (
    <section className="bg-white pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="mx-auto max-w-[680px] px-6 text-center">

        {/* Pill badge */}
        <div data-animate="" className="inline-flex mb-6">
          <span className="border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600">
            Healthcare AI Platform
          </span>
        </div>

        {/* H1 */}
        <h1
          data-animate=""
          className="text-3xl md:text-[52px] font-semibold text-gray-900 leading-tight tracking-tight"
          style={{ transitionDelay: '80ms' }}
        >
          The healthcare AI platform that&apos;s actually built for healthcare
        </h1>

        {/* Subtitle */}
        <p
          data-animate=""
          className="mt-5 text-lg text-gray-500 leading-relaxed"
          style={{ transitionDelay: '160ms' }}
        >
          HIPAA-compliant AI that automates patient engagement, tracks treatment adherence, and scales your practice without compromising compliance.
        </p>

        {/* CTAs */}
        <div
          data-animate=""
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
          style={{ transitionDelay: '240ms' }}
        >
          <a
            href={`${APP_URL}/signin`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center bg-primary text-white text-btn font-medium px-btn-x py-btn-y rounded-full hover:bg-blue-700 transition-colors"
          >
            Try For Free
          </a>
          <a
            href={DEMO_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center bg-background text-text-primary text-btn font-medium px-btn-x py-btn-y rounded-full border border-text-primary hover:bg-gray-50 transition-colors"
          >
            See a Demo
          </a>
        </div>

      </div>
    </section>
  )
}
