const securityRows = [
  { label: 'HIPAA Compliance', sub: 'Active since deployment', icon: 'shield' },
  { label: 'AES-256 Encryption', sub: 'At rest and in transit', icon: 'lock' },
]

const badges = ['BAA provided', 'Private LLM', 'Audit logs', 'ITAR compliant', 'Pen testing', 'RBAC']

function ShieldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export default function ComplianceMockup() {
  return (
    <div className="p-5 flex flex-col gap-3 h-full justify-center">
      <p style={{ color: 'rgba(255,255,255,0.5)' }} className="text-xs font-semibold uppercase tracking-wider">
        Security overview
      </p>

      {/* Security rows */}
      {securityRows.map((row, i) => (
        <div
          key={i}
          className="p-3 rounded-lg"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid transparent' }}
        >
          <div className="flex items-center gap-2 mb-2">
            {row.icon === 'shield' ? <ShieldIcon /> : <LockIcon />}
            <div>
              <p className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.9)' }}>{row.label}</p>
              <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>{row.sub}</p>
            </div>
          </div>
          {/* Full progress bar */}
          <div className="w-full rounded-full h-1" style={{ background: 'rgba(255,255,255,0.15)' }}>
            <div className="h-1 rounded-full w-full" style={{ background: 'rgba(255,255,255,0.6)' }} />
          </div>
        </div>
      ))}

      {/* Badge pills */}
      <div className="flex flex-wrap gap-1.5">
        {badges.map((badge, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium"
            style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}
          >
            <CheckIcon />
            {badge}
          </span>
        ))}
      </div>
    </div>
  )
}
