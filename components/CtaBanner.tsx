import Image from 'next/image'

export default function CtaBanner() {
  return (
    <section className="bg-background py-8 md:py-section-y">
      {/* Same container as all other sections for alignment */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">

        {/* Banner card */}
        <div data-animate="" className="relative rounded-[20px] bg-primary overflow-hidden
          flex flex-col md:flex-row md:items-center md:justify-between
          px-6 py-6 md:px-[96px] md:py-[24px] md:h-[460px]
          gap-8 md:gap-2">

          {/* Background texture */}
          <Image
            src="/images/cta-background.png"
            alt=""
            fill
            className="object-cover object-center opacity-20 pointer-events-none select-none"
          />

          {/* Left — text + CTA */}
          <div className="relative z-10 flex flex-col items-start max-w-[480px] md:min-w-[50%]">
            <h2 className="text-[24px] md:text-h2 font-bold text-white leading-tight">
              Your audience is waiting to talk to you.
            </h2>
            <p className="mt-4 text-btn text-white/70 leading-[22px]">
              Join the creators and professionals turning static traffic into
              active conversations. It&apos;s free to start and takes less
              than 2 minutes to train your first model.
            </p>

            <a
              href="https://www.app.a2v2.ai/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-8 bg-white text-surface text-btn font-medium px-btn-x py-btn-y rounded-btn hover:bg-gray-100 transition-colors"
            >
              Sign up Free
            </a>

            <div className="mt-4 flex items-center gap-2">
              <Image
                src="/icons/wallet.svg"
                alt=""
                width={16}
                height={16}
                className="opacity-60 invert"
              />
              <span className="text-sm text-white/60">
                No credit card required
              </span>
            </div>
          </div>

          {/* Right — decorative illustration */}
          <div className="hidden md:flex relative z-0 flex-shrink-0 items-center justify-end md:self-stretch overflow-hidden">
            <Image
              src="/images/cta-decoration.png"
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
