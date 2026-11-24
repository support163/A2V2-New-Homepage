import { Zap, AlertCircle, UserCheck, type LucideIcon } from 'lucide-react'
import Frame from './website1/mock/Frame'
import EscalationPanel from './website1/mock/EscalationPanel'
import Reveal from './website1/Reveal'

const POINTS: { Icon: LucideIcon; title: string; description: string }[] = [
  { Icon: Zap, title: 'Automated, not autonomous', description: 'The AI handles intake, reminders, refills, and follow-ups.' },
  { Icon: AlertCircle, title: 'Every flag routes to your team', description: 'Anything clinical is escalated, never decided by AI.' },
  { Icon: UserCheck, title: 'You stay in control', description: 'Your providers make every treatment decision.' },
]

/** the homepage only. The shared TestHomepage2EscalationSection is left untouched. */
export default function Website1EscalationSection() {
  return (
    <section className="w-full" style={{ background: '#ffffff' }}>
      <Reveal>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-24">
          <div className="flex flex-col-reverse md:grid gap-12 items-start" style={{ gridTemplateColumns: '55% 1fr' }}>
            <div className="w-full min-w-0">
              <Frame h={[590, 580, 560, 540]}>
                <EscalationPanel />
              </Frame>
            </div>

            <div>
              <h2
                className="font-normal leading-[1.05]"
                style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              >
                AI does the work. Your team makes the calls.
              </h2>
              <p
                className="leading-relaxed"
                style={{ marginTop: 20, fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: "'Inter', sans-serif", letterSpacing: '-0.3px' }}
              >
                A2V2 automates the routine communication that fills your team&apos;s day. The moment
                anything needs clinical judgment, it escalates to your staff with full context.
              </p>

              <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 20 }}>
                {POINTS.map(({ Icon, title, description }) => (
                  <div key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <Icon size={18} color="#0F0E0D" style={{ flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>{title}</div>
                      <div style={{ fontSize: 13, color: '#68655E', fontFamily: "'Inter', sans-serif", marginTop: 3, lineHeight: 1.5 }}>{description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
