const steps: { num: number; label: string; sub: string; status: 'done' | 'running' | 'pending' }[] = [
  { num: 1, label: 'Classify', sub: 'determine complexity', status: 'done' },
  { num: 2, label: 'Plan', sub: 'build response strategy', status: 'done' },
  { num: 3, label: 'Execute', sub: 'generate personalized answer', status: 'pending' },
  { num: 4, label: 'Analyze', sub: 'quality control check', status: 'pending' },
]

export default function AIPipelineMockup() {
  return (
    <div className="p-5 flex flex-col justify-center gap-2.5 h-full">
      {/* Header */}
      <p style={{ color: 'rgba(255,255,255,0.5)' }} className="text-xs font-semibold uppercase tracking-wider mb-1">
        Response Pipeline
      </p>

      {steps.map((step) => {
        const isRunning = step.status === 'running'
        const isDone = step.status === 'done'

        return (
          <div
            key={step.num}
            className="flex items-center gap-3 p-3 rounded-lg"
            style={{
              background: isRunning ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)',
              border: isRunning ? '1px solid rgba(255,255,255,0.25)' : '1px solid transparent',
            }}
          >
            {/* Circle */}
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0"
              style={{
                background: isDone
                  ? 'rgba(34,197,94,0.8)'
                  : isRunning
                  ? 'rgba(37,99,235,0.8)'
                  : 'rgba(255,255,255,0.2)',
                color: '#fff',
              }}
            >
              {isDone ? '✓' : step.num}
            </div>

            {/* Text */}
            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.95)' }}>
                {step.label}
              </span>
              <span className="text-xs ml-1.5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                — {step.sub}
              </span>
            </div>

            {/* Status pill */}
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
              style={{
                background: 'rgba(255,255,255,0.15)',
                color: isDone ? 'rgba(134,239,172,1)' : isRunning ? 'rgba(147,197,253,1)' : 'rgba(255,255,255,0.5)',
              }}
            >
              {isDone ? 'Done' : isRunning ? 'Running' : 'Pending'}
            </span>
          </div>
        )
      })}
    </div>
  )
}
