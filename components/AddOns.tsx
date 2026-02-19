import Image from 'next/image'

const addOns = [
  {
    icon: '/icons/icon-team-members.svg',
    name: 'Additional Team Members',
    description: 'Add team members on-demand',
    price: '$10',
    priceLabel: 'per additional slot',
  },
  {
    icon: '/icons/icon-chatbots.svg',
    name: 'Additional Chatbots',
    description: 'Add chatbots on-demand',
    price: '$12',
    priceLabel: 'per additional slot',
  },
]

export default function AddOns() {
  return (
    <section className="bg-background py-8 md:py-section-y">
      <div className="mx-auto max-w-[1280px] px-6 md:px-section-x">

        <div data-animate="" className="text-center">
          <h2 className="text-[24px] md:text-h2 font-bold text-text-primary">
            Scale on your terms.
          </h2>
          <p className="mt-4 text-btn md:text-body-lg text-text-secondary max-w-[560px] mx-auto">
            Need to manage a second brand or bring in an assistant? Add resources without jumping to a higher tier.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {addOns.map((addon, i) => (
            <div
              key={addon.name}
              data-animate=""
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              className="flex flex-col rounded-card border border-gray-200 bg-white p-6"
            >
              {/* Top row: icon + info left, price right */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Image
                    src={addon.icon}
                    alt=""
                    width={48}
                    height={48}
                    className="flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-sm md:text-btn font-bold text-text-primary leading-tight">
                      {addon.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-text-secondary">
                      {addon.description}
                    </p>
                  </div>
                </div>

                <div className="flex-shrink-0 text-right">
                  <span className="text-[20px] md:text-h3 font-bold text-text-primary leading-none">
                    {addon.price}
                  </span>
                  <p className="mt-0.5 text-xs text-text-secondary">
                    {addon.priceLabel}
                  </p>
                </div>
              </div>

              {/* Get add on button */}
              <a
                href="https://www.app.a2v2.ai/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block text-center text-sm font-medium text-text-primary bg-gray-100 hover:bg-gray-200 transition-colors py-2.5 rounded-btn"
              >
                Get add on
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
