import Image from 'next/image'
import Link from 'next/link'

const innerBg = 'rgba(255,255,255,0.08)'
const avatarBg = 'rgba(255,255,255,0.15)'

function HealthcareGlass() {
  const patients = [
    { initials: 'SJ', name: 'Sarah J.', protocol: 'HRT Protocol · Week 6', sbg: 'rgba(37,99,235,0.3)', sc: '#93c5fd', status: 'Sent' },
    { initials: 'MK', name: 'Michael K.', protocol: 'NAD+ Protocol · Week 3', sbg: 'rgba(22,163,74,0.3)', sc: '#86efac', status: 'Opened' },
    { initials: 'AL', name: 'Amy L.', protocol: 'Peptide Protocol · Week 1', sbg: 'rgba(217,119,6,0.3)', sc: '#fcd34d', status: 'Scheduled' },
  ]
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.45)' }}>
        Patient Queue
      </p>
      {patients.map((p) => (
        <div key={p.name} className="flex items-center gap-2.5 rounded-lg px-3 py-2" style={{ background: innerBg }}>
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-semibold flex-shrink-0"
            style={{ background: avatarBg, color: 'rgba(255,255,255,0.8)' }}
          >
            {p.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-semibold text-white truncate">{p.name}</p>
            <p className="text-[9px] truncate" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.protocol}</p>
          </div>
          <span
            className="text-[9px] font-semibold px-1.5 py-0.5 rounded-full whitespace-nowrap"
            style={{ background: p.sbg, color: p.sc }}
          >
            {p.status}
          </span>
        </div>
      ))}
    </div>
  )
}

const payBars = [35, 50, 42, 60, 72, 55, 80, 68]

function PayForAccessGlass() {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg px-3 py-2" style={{ background: innerBg }}>
          <p className="text-[9px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Sessions</p>
          <p className="text-sm font-semibold text-white">1,247</p>
        </div>
        <div className="rounded-lg px-3 py-2" style={{ background: innerBg }}>
          <p className="text-[9px]" style={{ color: 'rgba(255,255,255,0.45)' }}>Revenue (est.)</p>
          <p className="text-sm font-semibold text-white">$6,223</p>
        </div>
      </div>
      <div className="rounded-lg px-3 py-2.5" style={{ background: innerBg }}>
        <p className="text-[9px] mb-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>Last 8 weeks</p>
        <div className="flex items-end gap-0.5 h-8">
          {payBars.map((h, i) => (
            <div
              key={i}
              className={`flex-1 rounded-sm ${i === payBars.length - 1 ? 'bg-blue-400' : 'bg-blue-400/30'}`}
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

interface CardColumnProps {
  bgImage: string
  dotColor: string
  tag: string
  title: string
  description: string
  href: string
  linkLabel: string
  glass: React.ReactNode
  animateDelay: string
}

function CardColumn({ bgImage, dotColor, tag, title, description, href, linkLabel, glass, animateDelay }: CardColumnProps) {
  return (
    <div data-animate="" style={{ transitionDelay: animateDelay }}>
      {/* Standalone image container — fully rounded */}
      <div className="relative rounded-xl overflow-hidden" style={{ height: '400px' }}>
        <Image
          src={bgImage}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={100}
          unoptimized
          className="object-cover"
          priority
        />
        {/* Subtle dark tint */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.2)' }} />
        {/* Floating glass card */}
        <div className="absolute inset-0 flex items-center justify-center p-5">
          <div
            className="w-full rounded-xl p-4"
            style={{
              maxWidth: '280px',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.15)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            {glass}
          </div>
        </div>
      </div>

      {/* Text — sits directly on page background, no card wrapper */}
      <div className="pt-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: dotColor }} />
          <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>{tag}</span>
        </div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {description}
        </p>
        <div className="mt-5">
          <Link
            href={href}
            className="inline-flex items-center text-sm text-white rounded-full px-5 py-2 transition-colors"
            style={{ border: '1px solid rgba(255,255,255,0.2)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            {linkLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ProductCards() {
  return (
    <section style={{ background: '#0F0E0D' }} className="py-20 md:py-24">
      <div className="mx-auto max-w-[1000px] px-6">

        {/* Heading */}
        <div data-animate="" className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white">
            Two platforms. One mission.
          </h2>
          <p className="mt-3 text-lg max-w-[600px] mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Whether you&apos;re running a clinic or building an audience, A2V2 helps you scale without scaling your team.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CardColumn
            bgImage="/images/Ui-Card-Background1.jpg"
            dotColor="#ffffff"
            tag="Live"
            title="Healthcare Platform"
            description="HIPAA-compliant AI that automates patient engagement, tracks treatment adherence, and recovers lost revenue for longevity and HRT clinics."
            href="/solutions/healthcare"
            linkLabel="Explore Healthcare →"
            glass={<HealthcareGlass />}
            animateDelay="100ms"
          />
          <CardColumn
            bgImage="/images/Ui-Card-Background2.jpg"
            dotColor="#ffffff"
            tag="New"
            title="PayForAccess"
            description="Let followers pay $4.99 for 24-hour access to an AI trained on your content. Earn passive income while your AI handles conversations."
            href="/features/pay-for-access"
            linkLabel="Explore PayForAccess →"
            glass={<PayForAccessGlass />}
            animateDelay="200ms"
          />
        </div>

      </div>
    </section>
  )
}
