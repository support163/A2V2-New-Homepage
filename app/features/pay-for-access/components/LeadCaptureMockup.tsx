export default function LeadCaptureMockup() {
  return (
    <div className="p-6 flex flex-col items-center justify-center gap-4 h-full">

      {/* Avatar */}
      <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </div>

      {/* Heading */}
      <div className="text-center">
        <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.95)' }}>
          Enter your info to chat
        </p>
        <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
          24-hour unlimited access for $4.99
        </p>
      </div>

      {/* Form */}
      <div className="w-full flex flex-col gap-2">
        <div
          className="w-full rounded-lg px-3 py-2.5 text-xs"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          Full name
        </div>
        <div
          className="w-full rounded-lg px-3 py-2.5 text-xs"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          Email address
        </div>
        <div className="w-full bg-primary text-white rounded-lg px-3 py-2.5 text-xs font-medium text-center">
          Start chatting for $4.99
        </div>
      </div>

      {/* Stripe */}
      <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
        <span>Secured by Stripe</span>
      </div>

    </div>
  )
}
