import Image from 'next/image'

export default function FeaturesSection() {
  return (
    <section className="bg-background py-8 md:py-section-y">
      <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">

        {/* Heading */}
        <div data-animate="">
          <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
            The smartest link in your bio.
          </h2>
          <p className="mt-4 text-btn md:text-body-lg text-text-secondary max-w-[600px]">
            Replace your static buttons with an interactive profile. A2V2
            combines your content, your personality, and your sales funnel into
            one link.
          </p>
        </div>

        {/* Bento grid — flex so heights stay perfectly equal */}
        <div className="mt-12 flex flex-col md:flex-row gap-card-gap">

          {/* Left card — tall, spans full height */}
          <div data-animate="" style={{ transitionDelay: '100ms' }} className="md:flex-[3] rounded-card bg-surface flex flex-col overflow-hidden">
            <div className="flex-1 flex items-end justify-center px-6 pt-6 overflow-hidden">
              <Image
                src="/images/chat-mockup.png"
                alt="AI conversation interface"
                width={480}
                height={520}
                className="w-full object-contain object-bottom"
              />
            </div>
            <div className="px-card-p pb-card-p pt-2">
              <h3 className="text-btn md:text-body-lg font-bold text-white">
                Conversations, not just clicks.
              </h3>
              <p className="mt-2 text-[12px] md:text-btn text-white/60 leading-[22px]">
                Your AI twin engages every visitor, recommends your best
                content, and keeps them talking — converting 3x longer than any
                static link page.
              </p>
            </div>
          </div>

          {/* Right column — two equal stacked cards */}
          <div data-animate="" style={{ transitionDelay: '200ms' }} className="md:flex-[2] flex flex-col gap-card-gap">

            {/* Top right — Instant Lead Capture */}
            <div className="flex-1 rounded-card bg-surface flex flex-col overflow-hidden">
              <div className="flex-1 flex items-end justify-center px-6 pt-6 overflow-hidden">
                <Image
                  src="/images/lead-capture-mockup.png"
                  alt="Lead capture interface"
                  width={360}
                  height={260}
                  className="w-full object-contain object-bottom"
                />
              </div>
              <div className="px-card-p pb-card-p pt-2">
                <h3 className="text-btn md:text-body-lg font-bold text-white">
                  Instant Lead Capture
                </h3>
                <p className="mt-2 text-[12px] md:text-btn text-white/60 leading-[22px]">
                  Your AI asks for contact info at the perfect moment and syncs
                  every lead directly to your dashboard.
                </p>
              </div>
            </div>

            {/* Bottom right — Secure by Design */}
            <div className="flex-1 rounded-card bg-surface flex flex-col overflow-hidden">
              <div className="flex-1 flex items-end justify-center px-6 pt-6 overflow-hidden">
                <Image
                  src="/images/security-badge.png"
                  alt="HIPAA compliant security badge"
                  width={360}
                  height={260}
                  className="w-full object-contain object-bottom"
                />
              </div>
              <div className="px-card-p pb-card-p pt-2">
                <h3 className="text-btn md:text-body-lg font-bold text-white">
                  Secure by Design.
                </h3>
                <p className="mt-2 text-[12px] md:text-btn text-white/60 leading-[22px]">
                  Built on HIPAA-compliant infrastructure with SOC2
                  certification, so your audience&apos;s data stays private and
                  protected.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
