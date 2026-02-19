import Image from 'next/image'

const cards = [
  {
    title: 'Connect',
    description: 'Sync your YouTube, PDFs, and website URLs.',
    image: '/images/connect-illustration.png',
    alt: 'Connect your content sources',
  },
  {
    title: 'Train',
    description: 'Our engine learns your voice, facts, and offers.',
    image: '/images/train-illustration.png',
    alt: 'Train your AI model',
  },
  {
    title: 'Deploy',
    description: 'Share your a2v2 link anywhere.',
    image: '/images/deploy-mockup.png',
    alt: 'Deploy your AI profile',
  },
]

export default function TrainSection() {
  return (
    <section className="bg-background py-8 md:py-section-y">
      <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">

        {/* Heading */}
        <div data-animate="">
          <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
            Train your AI in seconds.
          </h2>
          <p className="mt-4 text-btn md:text-body-lg text-text-secondary max-w-[520px]">
            No coding. Just upload your content, and we build your digital twin.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-card-gap">
          {cards.map((card, i) => (
            <div
              key={card.title}
              data-animate=""
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              className="bg-surface rounded-card flex flex-col overflow-hidden"
            >
              {/* Illustration area */}
              <div className="flex-1 flex items-end justify-center px-6 pt-6 min-h-[300px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={480}
                  height={360}
                  className="w-full object-contain object-bottom"
                />
              </div>

              {/* Text area */}
              <div className="px-card-p pb-card-p pt-4">
                <h3 className="text-btn md:text-body-lg font-bold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-[12px] md:text-btn text-white/60 leading-[22px]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
