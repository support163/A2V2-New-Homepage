type LeadStatus = 'hot' | 'nurturing' | 'early'

interface Lead {
  name: string
  detail: string
  status: LeadStatus
}

const leads: Lead[] = [
  { name: 'Rachel S.', detail: 'Budget: $650k · Pre-approved · Timeline: 30 days', status: 'hot' },
  { name: 'Marcus J.', detail: 'Budget: $400k · Exploring · Timeline: 3-6 months', status: 'nurturing' },
  { name: 'Tanya W.', detail: 'Budget: $800k · Pre-approved · Timeline: ASAP', status: 'hot' },
  { name: 'Derek P.', detail: 'Budget: TBD · Just browsing · No timeline', status: 'early' },
]

function StatusTag({ status }: { status: LeadStatus }) {
  if (status === 'hot') {
    return (
      <span
        className="text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
        style={{ background: 'rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.95)' }}
      >
        Hot lead
      </span>
    )
  }
  if (status === 'nurturing') {
    return (
      <span
        className="text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
        style={{ background: 'rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.65)' }}
      >
        Nurturing
      </span>
    )
  }
  return (
    <span
      className="text-[10px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap"
      style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.45)' }}
    >
      Early stage
    </span>
  )
}

export default function LeadQualificationMockup() {
  return (
    <div className="flex flex-col p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 flex-shrink-0">
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: 'rgba(255,255,255,0.6)' }}
        />
        <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
          Lead pipeline
        </span>
      </div>

      {/* Lead cards */}
      <div className="flex flex-col gap-2.5">
        {leads.map((lead, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            {/* Avatar */}
            <div
              className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white/90 truncate">{lead.name}</p>
              <p className="text-[10px] text-white/50 truncate mt-0.5">{lead.detail}</p>
            </div>

            {/* Status */}
            <StatusTag status={lead.status} />
          </div>
        ))}
      </div>
    </div>
  )
}
