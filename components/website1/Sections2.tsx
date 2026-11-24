import { Activity, TrendingUp, Upload, type LucideIcon } from 'lucide-react'
import { SectionHeading, Subtext, PrimaryButton, GhostButton, INTER, HELV, INK, MUTED } from './ui'
import Frame from './mock/Frame'
import Scope from './mock/Scope'
import HealthMock from './mock/HealthMock'
import PortalShowcase from './mock/PortalShowcase'
import Reveal from './Reveal'

const CARD_SHADOW = '0 12px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06)'

function FactList({ facts }: { facts: { icon: LucideIcon; title: string; line: string }[] }) {
  return (
    <div className="flex flex-col gap-5 mt-8">
      {facts.map((f) => (
        <div key={f.title} className="flex items-start gap-3">
          <f.icon size={20} color={INK} className="mt-0.5 shrink-0" />
          <p style={{ fontFamily: INTER, fontSize: 14, color: MUTED }}>
            <strong style={{ color: INK, fontWeight: 600 }}>{f.title}</strong>
            <br />
            {f.line}
          </p>
        </div>
      ))}
    </div>
  )
}

/* ───────────────────────── Health tracking ───────────────────────── */

export function HealthSection() {
  return (
    <section id="health" className="w-full scroll-mt-20" style={{ background: '#fff' }}>
      <Reveal>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-28">
          <div className="flex flex-col md:grid items-center md:items-start gap-12 md:gap-16" style={{ gridTemplateColumns: '1fr 40%' }}>
            <div className="order-2 md:order-1 min-w-0">
              <Frame h={[1081, 743, 697, 667]}><HealthMock /></Frame>
            </div>

            <div className="order-1 md:order-2">
              <SectionHeading>Every patient&apos;s progress, in one view.</SectionHeading>
              <Subtext>
                Track the health parameters that matter for your protocols and watch them trend over time. Patients see their progress, and your team sees who needs attention.
              </Subtext>
              <FactList
                facts={[
                  { icon: Activity, title: 'Your parameters', line: 'Define the metrics that fit your protocols.' },
                  { icon: TrendingUp, title: 'Trends over time', line: 'See how each value moves across visits.' },
                  { icon: Upload, title: 'Labs in, data out', line: 'Patients upload lab results and AI extracts the values.' },
                ]}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ───────────────────────── Patient portal ───────────────────────── */

export function PortalSection() {
  return (
    <section id="portal" className="w-full scroll-mt-20" style={{ background: '#fff' }}>
      <Reveal>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-28">
          <SectionHeading center>Made for your patients. Branded as yours.</SectionHeading>
          <Subtext center max={640}>
            Everything you build comes together in one place. Patients follow their plan, upload labs, message their care team, and keep track of their visits.
          </Subtext>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <PrimaryButton>Book a Demo</PrimaryButton>
            <GhostButton external>Get Started</GhostButton>
          </div>

          <Scope className="mt-14"><PortalShowcase /></Scope>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              { t: 'Care plans.', d: "Phases, tasks and the physician's note on why this plan." },
              { t: 'Messages and assistant.', d: "Secure threads with the care team, plus answers about the patient's own plan." },
              { t: 'Labs and visits.', d: 'Upload results and see what is coming next.' },
            ].map((f) => (
              <p key={f.t} style={{ fontFamily: INTER, fontSize: 14, color: MUTED }}>
                <strong style={{ color: INK, fontWeight: 600 }}>{f.t}</strong> {f.d}
              </p>
            ))}
          </div>
          <p className="mt-6" style={{ fontFamily: INTER, fontSize: 12, color: MUTED }}>Portal screens shown are illustrative.</p>
        </div>
      </Reveal>
    </section>
  )
}

/* ───────────────────────── Final CTA ───────────────────────── */

export function FinalCta() {
  return (
    <section className="w-full" style={{ background: '#fff' }}>
      <Reveal>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-28 flex flex-col items-center text-center">
          <h2 className="font-normal leading-[1.05] text-4xl md:text-6xl" style={{ color: INK, fontFamily: HELV, maxWidth: 800 }}>
            See it with your protocols.
          </h2>
          <Subtext center max={640}>
            A 30-minute demo of your agents, knowledge base, health tracking and patient portal, built around your clinic.
          </Subtext>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <PrimaryButton>Book a Demo</PrimaryButton>
            <GhostButton external>Get Started</GhostButton>
          </div>
          <p className="mx-auto mt-10" style={{ fontFamily: INTER, fontSize: 12, color: MUTED, maxWidth: 640 }}>
            A2V2 provides software for clinics and does not provide medical advice. Clinical decisions are made by the clinic&apos;s providers.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
