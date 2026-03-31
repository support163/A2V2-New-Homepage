const protocols = [
  { name: 'NAD+ IV Therapy', detail: '8 patients active · Week 3 of 6', progress: 50 },
  { name: 'HRT Program', detail: '12 patients active · Cycle 2 of 4', progress: 50 },
  { name: 'Peptide Sequence', detail: '5 patients active · Day 14 of 30', progress: 47 },
  { name: 'Supplement Stack', detail: '15 patients active · Month 2 of 6', progress: 33 },
]

export default function ProtocolIntelligenceMockup() {
  return (
    <div className="p-5 flex flex-col justify-center gap-2.5 h-full">
      <p style={{ color: 'rgba(255,255,255,0.5)' }} className="text-xs font-semibold uppercase tracking-wider mb-1">
        Active protocols
      </p>

      {protocols.map((protocol, i) => (
        <div
          key={i}
          className="p-3 rounded-lg"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid transparent' }}
        >
          <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.95)' }}>
            {protocol.name}
          </p>
          <p className="text-[11px] mt-0.5 mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {protocol.detail}
          </p>
          {/* Progress bar */}
          <div className="w-full rounded-full h-1" style={{ background: 'rgba(255,255,255,0.15)' }}>
            <div
              className="h-1 rounded-full"
              style={{ width: `${protocol.progress}%`, background: 'rgba(255,255,255,0.6)' }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
