import Link from 'next/link'
import type { ReactNode } from 'react'
import { Mail } from 'lucide-react'
import { HELV, INTER, INK, MUTED } from '../ui'

function Tile({ title, text, href, dark = false, children }: { title: string; text: string; href: string; dark?: boolean; children: ReactNode }) {
  return (
    <div className={`tile${dark ? ' dk' : ''}`}>
      <h3 className="font-normal" style={{ fontFamily: HELV, fontSize: 28, lineHeight: 1.1, color: dark ? '#f5f5f7' : INK }}>{title}</h3>
      <p className="mx-auto mt-3" style={{ fontFamily: INTER, fontSize: 14, lineHeight: 1.6, color: dark ? '#a1a1a6' : MUTED, maxWidth: 340, letterSpacing: '-0.2px' }}>{text}</p>
      <Link href={href} className="mt-4 hover:opacity-70 transition-opacity" style={{ fontFamily: INTER, fontSize: 14, fontWeight: 500, color: dark ? '#f5f5f7' : INK, textDecoration: 'none' }}>
        Learn more ›
      </Link>
      <div className="vis">{children}</div>
    </div>
  )
}

/** Reference "#behind" tiles: .journey, .thread (dark tile) and .risk rows. */
export default function Tiles() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <Tile title="Automated plans" text="Workflows that wait for the patient, remind them, then move to the next step." href="/features/patient-crm">
        <div className="journey">
          <div className="jn"><Mail /> Send intake form</div>
          <div className="jline" />
          <div className="jsplit">
            <div className="jn ok">Completed → Book labs</div>
            <div className="jn wait">After 24h → Send reminder</div>
          </div>
        </div>
      </Tile>

      <Tile dark title="Text and email messaging" text="Reminders and check-ins reach patients where they actually read." href="/features/patient-messaging">
        <div className="thread">
          <div className="msg ai">Hi John, your lab draw is Saturday at 9:00 AM. Reply C to confirm.</div>
          <div className="msg pt">C</div>
        </div>
      </Tile>

      <Tile title="Win back quiet patients" text="Spot who is slipping and reach out before they leave." href="/features/patient-crm">
        <div className="risk">
          <div className="risk-row"><span><b>John D.</b><small>86% adherence</small></span><span className="tag">On track</span></div>
          <div className="risk-row"><span><b>Dana K.</b><small>3 items overdue</small></span><span className="tag amber">Slipping</span></div>
          <div className="risk-row"><span><b>Luis P.</b><small>Quiet 21 days</small></span><span className="tag red">At risk</span></div>
        </div>
      </Tile>
    </div>
  )
}
