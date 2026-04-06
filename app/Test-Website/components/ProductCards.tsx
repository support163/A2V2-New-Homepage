import Image from 'next/image'
import Link from 'next/link'

const gradientDot: React.CSSProperties = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  background: 'radial-gradient(circle at top left, #e8e0d8, #f5c77e, #ef8a3e, #e05a2b)',
  flexShrink: 0,
}

const glassBg: React.CSSProperties = {
  background: 'rgba(0,0,0,0.55)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.1)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
}

function MiniTabBar({ items }: { items: string[] }) {
  return (
    <div className="flex items-center gap-0.5 mb-3 rounded-lg p-0.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
      {items.map((t, i) => (
        <div
          key={t}
          className="flex-1 text-center text-[10px] font-medium py-1 rounded-md"
          style={{
            background: i === 0 ? 'rgba(255,255,255,0.12)' : 'transparent',
            color: i === 0 ? '#ffffff' : 'rgba(255,255,255,0.4)',
          }}
        >
          {t}
        </div>
      ))}
    </div>
  )
}

function ActionRow({ cancelLabel, confirmLabel }: { cancelLabel: string; confirmLabel: string }) {
  return (
    <div className="flex items-center justify-between mt-3">
      <button className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{cancelLabel}</button>
      <button
        className="text-[11px] font-semibold rounded-lg px-3 py-1.5"
        style={{ background: '#ffffff', color: '#000000' }}
      >
        {confirmLabel}
      </button>
    </div>
  )
}

function HealthcareGlass() {
  const patients = [
    { initials: 'SJ', name: 'Sarah J.', protocol: 'HRT · Week 6', status: 'Sent' },
    { initials: 'MK', name: 'Michael K.', protocol: 'NAD+ · Week 3', status: 'Opened' },
    { initials: 'AL', name: 'Amy L.', protocol: 'Peptide · Week 1', status: 'Scheduled' },
  ]
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <div style={gradientDot} />
        <span className="text-sm font-semibold text-white">Patient queue</span>
      </div>
      <MiniTabBar items={['Active', 'Pending', 'Completed']} />
      <div className="flex flex-col">
        {patients.map((p, i) => (
          <div
            key={p.name}
            className="flex items-center gap-2 py-2"
            style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-semibold flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)' }}
            >
              {p.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white truncate">{p.name}</p>
              <p className="text-[10px] truncate" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.protocol}</p>
            </div>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
            >
              {p.status}
            </span>
          </div>
        ))}
      </div>
      <ActionRow cancelLabel="View all" confirmLabel="New sequence" />
    </div>
  )
}

const payBars = [35, 50, 42, 60, 72, 55, 80, 68]

function PayForAccessGlass() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center gap-2 mb-3">
        <div style={gradientDot} />
        <span className="text-sm font-semibold text-white">Earnings snapshot</span>
      </div>
      <MiniTabBar items={['Today', 'Week', 'Month']} />
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Sessions</p>
          <p className="text-lg font-bold text-white">1,247</p>
        </div>
        <div className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Revenue</p>
          <p className="text-lg font-bold text-white">$6,223</p>
        </div>
      </div>
      <p className="text-[10px] mb-1.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Last 8 weeks</p>
      <div className="flex items-end gap-0.5 h-8">
        {payBars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: i === payBars.length - 1 ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)',
            }}
          />
        ))}
      </div>
      <ActionRow cancelLabel="Export" confirmLabel="View dashboard" />
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
      <div className="relative rounded-xl overflow-hidden w-full" style={{ height: '480px' }}>
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
              ...glassBg,
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
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <CardColumn
            bgImage="/images/Ui-Card-Background1.jpg"
            dotColor="radial-gradient(circle at top left, #e8e0d8, #f5c77e, #ef8a3e, #e05a2b)"
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
            dotColor="radial-gradient(circle at top left, #e8e0d8, #f5c77e, #ef8a3e, #e05a2b)"
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
