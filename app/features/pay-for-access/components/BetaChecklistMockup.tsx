const items = [
  { text: '1:1 onboarding call booked', done: true },
  { text: 'Content uploaded (12 videos, 3 PDFs)', done: true },
  { text: 'AI tone customized', done: true },
  { text: 'PayForAccess link generated', done: true },
  { text: 'Share with audience', done: false },
]

export default function BetaChecklistMockup() {
  return (
    <div className="p-5 flex flex-col justify-between gap-4 h-full">

      <div>
        {/* Header */}
        <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>
          Setup Progress
        </p>

        {/* Checklist */}
        <div className="flex flex-col gap-3">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              {/* Circle */}
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'transparent',
                  border: item.done ? '2px solid rgba(255,255,255,0.8)' : '2px solid rgba(255,255,255,0.3)',
                }}
              >
                {item.done && (
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <span
                className="text-sm leading-snug"
                style={{ color: item.done ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.4)' }}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Success banner */}
      <div
        className="flex items-center gap-2.5 rounded-lg px-3 py-2.5"
        style={{
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.8)' }}>
          AI training complete. Ready to go live.
        </span>
      </div>

    </div>
  )
}
