const statCards = [
  { label: 'Sessions', value: '1,247', change: '+18%' },
  { label: 'Revenue', value: '$6,223', change: '+24%' },
  { label: 'Conversion', value: '3.2%', change: null },
  { label: 'Avg. session', value: '14 min', change: null },
]

const bars = [38, 52, 34, 72, 48, 63, 100]

export default function AnalyticsMockup() {
  return (
    <div className="p-5 flex flex-col gap-3 h-full">

      {/* Header */}
      <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>
        Creator Dashboard
      </p>

      {/* Stat cards 2x2 */}
      <div className="grid grid-cols-2 gap-2">
        {statCards.map((card, i) => (
          <div
            key={i}
            className="rounded-lg p-3"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <p className="text-[10px] uppercase tracking-wide mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {card.label}
            </p>
            <div className="flex items-end gap-1.5">
              <span className="text-sm font-bold leading-none" style={{ color: 'rgba(255,255,255,0.95)' }}>
                {card.value}
              </span>
              {card.change && (
                <span className="text-[10px] font-semibold leading-none pb-px" style={{ color: 'rgba(134,239,172,1)' }}>
                  {card.change}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div
        className="flex-1 rounded-lg p-3 flex items-end gap-1.5 min-h-[80px]"
        style={{ background: 'rgba(255,255,255,0.08)' }}
      >
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: i === 6 ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.2)',
            }}
          />
        ))}
      </div>

    </div>
  )
}
