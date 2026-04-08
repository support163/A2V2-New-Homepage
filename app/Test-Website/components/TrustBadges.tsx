import Link from 'next/link'


export default function TrustBadges() {
  return (
    <section style={{ background: '#0F0E0D' }} className="py-20">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div
          data-animate=""
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-10"
        >

          {/* Left */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Built to earn trust
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Your trust is our foundation. A2V2.ai is built with HIPAA-compliant infrastructure, encrypted data handling, and secured LLM access under a Business Associate Agreement so your data is never used for AI training.
            </p>
            <div className="mt-6">
              <Link
                href="/solutions/healthcare"
                className="inline-flex items-center text-sm text-white rounded-full px-5 py-2 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                Learn more ›
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-8 justify-center md:justify-end">
            {[
              { title: 'HIPAA', sub: 'Compliant' },
              { title: 'Encrypted', sub: 'Infrastructure' },
              { title: 'BAA', sub: 'Coverage' },
            ].map(({ title, sub }) => (
              <div
                key={title}
                className="flex flex-col items-center justify-center flex-shrink-0"
                style={{
                  width: '116px',
                  height: '116px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <span className="text-lg font-bold text-white leading-tight text-center px-2">{title}</span>
                <span className="text-sm mt-0.5 text-center" style={{ color: 'rgba(255,255,255,0.5)' }}>{sub}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
