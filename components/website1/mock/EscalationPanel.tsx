const STATS = [
  { n: '1,665', l: 'conversations this week' },
  { n: '1,617', l: 'handled automatically' },
  { n: '48', l: 'sent to your team' },
]

const NEEDS: { name: string; line: string; tag: string; tone: 'red' | 'amber' }[] = [
  { name: 'Sarah J.', line: 'Chest pressure and shortness of breath · 2 min ago', tag: 'Dr. Martinez', tone: 'red' },
  { name: 'Michael K.', line: 'Asked about adjusting his dosage · 18 min ago', tag: 'Care team', tone: 'amber' },
]

const HANDLED: { name: string; line: string }[] = [
  { name: 'Amy L.', line: 'Appointment reminder sent' },
  { name: 'Robert T.', line: 'Refill reminder scheduled' },
]

/** Reference ".panel" styled escalation card (fictional demo data). */
export default function EscalationPanel() {
  return (
    <div className="panel cut esc">
      <div className="panel-h"><strong>Escalations</strong><span className="tag">Live</span></div>

      <div className="esc-stats">
        {STATS.map((s) => (
          <div key={s.l} className="esc-stat">
            <div className="esc-n">{s.n}</div>
            <div className="esc-l">{s.l}</div>
          </div>
        ))}
      </div>

      <div className="esc-label"><span>Needs your team</span><span className="tag grey">2 new</span></div>
      <div className="esc-rows">
        {NEEDS.map((r) => (
          <div key={r.name} className="risk-row">
            <div className="esc-txt"><b>{r.name}</b><small>{r.line}</small></div>
            <span className={`tag ${r.tone}`}>{r.tag}</span>
          </div>
        ))}
      </div>

      <div className="esc-label" style={{ marginTop: 20 }}><span>Handled automatically</span></div>
      <div className="esc-rows quiet">
        {HANDLED.map((r) => (
          <div key={r.name} className="risk-row">
            <div className="esc-txt"><b>{r.name}</b><small>{r.line}</small></div>
            <span className="tag">Done</span>
          </div>
        ))}
      </div>
    </div>
  )
}
