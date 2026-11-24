'use client'

import { useState } from 'react'

const RULES = [
  { label: 'Never suggest dose changes', on: true },
  { label: 'Escalate new symptoms', on: true },
  { label: 'Emergency language goes to 911', on: true },
  { label: 'Send without staff approval', on: false },
]

/** Reference ".train" test-run panel with chat messages and ".tog" toggle rows. */
export default function TrainingPanel() {
  const [rules, setRules] = useState(RULES)
  return (
    <div className="panel cut">
      <div className="panel-h"><strong>Patient Agent · Sandbox</strong><span className="tag blue">Version 2.4</span></div>
      <div className="train">
        <div className="convo">
          <div className="msg pt">I&apos;ve been dizzy since the new dose. Should I just double up on electrolytes?</div>
          <div className="msg ai">I&apos;m sorry you&apos;re feeling dizzy. I can&apos;t change your dosing, but I&apos;ve flagged this for your care team right now. If it gets worse or you faint, call 911.</div>
          <div className="msg flag">Escalated to care team · new symptom after a medication change</div>
        </div>
        <div className="rules">
          {rules.map((r, i) => (
            <div key={r.label} className="rule">
              {r.label}
              <button
                type="button"
                role="switch"
                aria-checked={r.on}
                aria-label={r.label}
                className={`tog${r.on ? '' : ' off'}`}
                style={{ border: 0, padding: 0, cursor: 'pointer' }}
                onClick={() => setRules((p) => p.map((x, j) => (j === i ? { ...x, on: !x.on } : x)))}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
