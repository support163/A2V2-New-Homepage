import { ClipboardList, HeartPulse, CalendarCheck, MessageCircle, Search, type LucideIcon } from 'lucide-react'

const AGENTS: { icon: LucideIcon; name: string; job: string; ch: string }[] = [
  { icon: ClipboardList, name: 'Intake Agent', job: 'Sends intake forms, follows up on missing documents, prepares the record for your team.', ch: 'SMS · Email' },
  { icon: HeartPulse, name: 'Patient Agent', job: "Checks in on each patient's plan and flags anyone who has gone quiet.", ch: 'SMS · Portal' },
  { icon: CalendarCheck, name: 'Scheduling Agent', job: 'Books and reschedules visits and sends the meeting link.', ch: 'Email · Portal' },
  { icon: MessageCircle, name: 'Portal Assistant', job: 'Answers patient questions about their own plan inside the portal.', ch: 'Portal chat' },
]

/** Reference ".panel" with the ".agents" / ".agent" grid. */
export function AgentsPanel() {
  return (
    <div className="panel cut">
      <div className="panel-h"><strong>Your agents</strong><span className="tag">4 live</span></div>
      <div className="agents">
        {AGENTS.map((a) => (
          <div key={a.name} className="agent">
            <div className="top">
              <div className="ic"><a.icon size={18} color="#1d1d1f" /></div>
              <h4>{a.name}</h4>
            </div>
            <p>{a.job}</p>
            <div className="meta"><span className="tag">Live</span><span className="tag grey">{a.ch}</span></div>
          </div>
        ))}
      </div>
    </div>
  )
}

const SOURCES = [
  { fi: 'FILE', t: 'Metabolic reset protocol v3', m: '42 pages · used by 3 agents', done: true },
  { fi: 'TEXT', t: 'Supplement guide', m: 'Updated 2 days ago', done: true },
  { fi: 'LINK', t: 'Membership FAQ', m: 'northsidehealth.com/faq', done: true },
  { fi: 'YT', t: 'Fasting prep explained', m: '8 min video', done: true },
  { fi: 'Q&A', t: 'Lab day questions', m: '24 pairs', done: false },
]

/** Reference knowledge panel (".src-row" rows and the test question box). */
export function KnowledgePanel() {
  return (
    <div className="panel cut">
      <div className="panel-h"><strong>Knowledge base</strong><span>Functional Medicine</span></div>
      <div className="kb-ask" style={{ marginTop: 0, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', color: '#86868b' }}>
        <Search size={15} /> Search sources
      </div>
      <div className="src">
        {SOURCES.map((s) => (
          <div key={s.t} className="src-row">
            <div className="fi">{s.fi}</div>
            <div>{s.t}<small>{s.m}</small></div>
            <span className={`tag${s.done ? '' : ' amber'}`}>{s.done ? 'Completed' : 'Processing'}</span>
          </div>
        ))}
      </div>
      <div className="kb-ask">
        <div className="q">Test question: &quot;Can I take magnesium with my thyroid medication?&quot;</div>
        Your plan schedules magnesium with dinner, at least 4 hours apart from your morning medication. Check with your care team before changing anything.
        <div><span className="cite">From: Supplement guide</span></div>
      </div>
    </div>
  )
}
