export default function ViewingSchedulerMockup() {
  return (
    <div className="flex flex-col p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 flex-shrink-0">
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: 'rgba(255,255,255,0.6)' }}
        />
        <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
          Booking confirmation
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {/* Property thumbnail */}
        <div
          className="rounded-xl p-3"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs font-semibold text-white/90">742 Oak Street, Unit 4B</p>
          <p className="text-[10px] text-white/55 mt-0.5">3 bed · 2 bath · 1,450 sqft</p>
          <p className="text-xs font-semibold text-white/80 mt-1.5">$525,000</p>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />

        {/* Available times */}
        <div>
          <p className="text-[10px] text-white/50 uppercase tracking-wider mb-2">Available times</p>
          <div className="flex gap-2">
            {[
              { label: 'Tue 2:00 PM', highlight: false },
              { label: 'Wed 10:00 AM', highlight: true },
              { label: 'Thu 4:30 PM', highlight: false },
            ].map((slot) => (
              <div
                key={slot.label}
                className="rounded-lg px-2.5 py-1.5 text-[10px] font-medium"
                style={{
                  background: slot.highlight
                    ? 'rgba(255,255,255,0.22)'
                    : 'rgba(255,255,255,0.08)',
                  color: slot.highlight
                    ? 'rgba(255,255,255,0.95)'
                    : 'rgba(255,255,255,0.60)',
                }}
              >
                {slot.label}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />

        {/* Confirmation */}
        <div
          className="rounded-xl p-3 flex items-start gap-3"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
            style={{ background: 'rgba(255,255,255,0.15)' }}
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8l3 3 7-7" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-white/90">Viewing booked</p>
            <p className="text-[10px] text-white/60 mt-0.5">Wed, Apr 2 at 10:00 AM</p>
            <p className="text-[10px] text-white/45 mt-0.5">Rachel S. · Pre-approved buyer</p>
          </div>
        </div>
      </div>
    </div>
  )
}
