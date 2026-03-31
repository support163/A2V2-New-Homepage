const barHeights = [85, 78, 70, 62, 58, 50, 44, 35]

const alerts = [
  { name: 'Jennifer W.', issue: 'missed 2 check-ins', time: '2h ago' },
  { name: 'Robert T.', issue: 'labs overdue by 12 days', time: '5h ago' },
]

export default function PredictiveAnalyticsMockup() {
  return (
    <div className="p-5 flex flex-col gap-3 h-full justify-center">
      <p style={{ color: 'rgba(255,255,255,0.5)' }} className="text-xs font-semibold uppercase tracking-wider">
        Patient risk dashboard
      </p>

      {/* Stats row */}
      <div className="grid grid-cols-2 gap-2">
        <div className="p-2.5 rounded-lg" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>Retention rate</p>
          <p className="text-xl font-bold mt-0.5" style={{ color: 'rgba(255,255,255,0.95)' }}>87%</p>
          <p className="text-[10px]" style={{ color: 'rgba(200,255,210,0.8)' }}>+12% vs. baseline</p>
        </div>
        <div className="p-2.5 rounded-lg" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>At-risk patients</p>
          <p className="text-xl font-bold mt-0.5" style={{ color: 'rgba(255,255,255,0.95)' }}>4</p>
          <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.5)' }}>Flagged this week</p>
        </div>
      </div>

      {/* Alerts */}
      {alerts.map((alert, i) => (
        <div
          key={i}
          className="flex items-center gap-2.5 px-3 py-2 rounded-lg"
          style={{ background: 'rgba(255,180,180,0.12)', border: '1px solid rgba(255,180,180,0.2)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'rgba(255,180,180,0.8)' }} />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
              {alert.name}{' '}
              <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>{alert.issue}</span>
            </p>
          </div>
          <span className="text-[10px] flex-shrink-0" style={{ color: 'rgba(255,255,255,0.4)' }}>{alert.time}</span>
        </div>
      ))}

      {/* Bar chart */}
      <div className="rounded-lg p-3" style={{ background: 'rgba(255,255,255,0.08)' }}>
        <div className="flex items-end gap-1 h-10">
          {barHeights.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                height: `${h}%`,
                background: i === barHeights.length - 1
                  ? 'rgba(255,255,255,0.7)'
                  : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>
        <p className="text-[10px] mt-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
          Drop-off risk trending down over 8 weeks
        </p>
      </div>
    </div>
  )
}
