import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-background py-8 md:py-section-y">
      <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left — Text content */}
          <div className="flex-1 w-full flex flex-col items-center lg:items-start" data-animate="">
            <h1 className="text-[28px] md:text-h1 font-bold text-text-primary leading-[1.2] md:leading-[58px] w-full md:max-w-[520px] text-center lg:text-left">
              Clone Yourself. Scale Your Influence.
            </h1>

            <p className="mt-6 text-btn md:text-body-lg text-text-secondary leading-[25px] max-w-[460px] text-center lg:text-left">
              The all-in-one bio hub that chats like you, captures leads like a
              CRM, and converts while you sleep.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 md:mt-6 flex items-center justify-center lg:justify-start gap-4 flex-wrap">
              <a
                href="https://www.app.a2v2.ai/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-blue-700 transition-colors"
              >
                Try For Free
              </a>
              <Link
                href="/demo"
                className="bg-background text-text-primary text-btn font-medium px-btn-x py-btn-y rounded-btn border border-text-primary hover:bg-gray-50 transition-colors"
              >
                See a Demo
              </Link>
            </div>

            {/* No credit card note */}
            <div className="mt-4 md:mt-6 flex items-center justify-center lg:justify-start gap-2">
              <Image
                src="/icons/wallet.svg"
                alt=""
                width={16}
                height={16}
                className="opacity-50"
              />
              <span className="text-sm text-text-secondary">
                No credit card required
              </span>
            </div>
          </div>

          {/* Right — Chat mockup */}
          <div className="flex-1 flex justify-center lg:justify-end w-full max-w-[520px] lg:max-w-none" data-animate="" style={{ transitionDelay: '150ms' }}>
            <Image
              src="/images/hero-chat-mockup.png"
              alt="A2V2 AI Assistant chat interface"
              width={520}
              height={480}
              className="w-full max-w-[520px] object-contain drop-shadow-xl"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  )
}
