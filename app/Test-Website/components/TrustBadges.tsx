import Link from 'next/link'

const badges = [
  { title: 'HIPAA', sub: 'Compliant' },
  { title: 'SOC 2', sub: 'Certified' },
  { title: 'AES-256', sub: 'Encryption' },
]

export default function TrustBadges() {
  return (
    <section style={{ background: '#0F0E0D' }} className="py-20">
      <div className="mx-auto max-w-[1000px] px-6">
        <div
          data-animate=""
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-10"
        >

          {/* Left */}
          <div className="flex flex-col items-start" style={{ maxWidth: '500px' }}>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Built to earn trust
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Your trust is our foundation. A2V2.ai is designed with a deep commitment to data privacy, HIPAA compliance, and enterprise-grade security across both platforms.
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
          <div className="flex items-center gap-6 md:justify-end">
            {badges.map(({ title, sub }) => (
              <div
                key={title}
                className="flex flex-col items-center justify-center flex-shrink-0"
                style={{
                  width: '88px',
                  height: '88px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                <span className="text-sm font-bold text-white leading-tight">{title}</span>
                <span className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>{sub}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
