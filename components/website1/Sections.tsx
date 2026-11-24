import { FileStack, RefreshCw, Search, type LucideIcon } from 'lucide-react'
import Frame from './mock/Frame'
import { AgentsPanel, KnowledgePanel } from './mock/Panels'
import { SectionHeading, Subtext, GhostButton, INTER, HELV, INK, MUTED } from './ui'
import Reveal from './Reveal'

/* ───────────────────────── Agents ───────────────────────── */

export function AgentsSection() {
  return (
    <section id="agents" className="w-full scroll-mt-20" style={{ background: '#fff' }}>
      <Reveal>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-28">
          <div className="flex flex-col md:grid items-center md:items-start gap-12 md:gap-16" style={{ gridTemplateColumns: '40% 1fr' }}>
            <div>
              <SectionHeading>One for every job. Working every hour.</SectionHeading>
              <Subtext>
                Start from a template or a blank page. Each agent has a single job and its own instructions, and anything clinical goes to your team.
              </Subtext>
              <div className="mt-8 inline-flex">
                <GhostButton href="/features/ai-agents">See how agents work</GhostButton>
              </div>
            </div>
            <Frame h={[808, 618, 535, 516]}><AgentsPanel /></Frame>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

/* ───────────────────────── Knowledge ───────────────────────── */

const FACTS: { icon: LucideIcon; title: string; line: string }[] = [
  { icon: FileStack, title: 'Many formats', line: 'Text, files, YouTube, Q&A and links.' },
  { icon: RefreshCw, title: 'Always current', line: 'Update a protocol once and every agent uses it.' },
  { icon: Search, title: 'Easy to manage', line: 'See every source and its status.' },
]

export function KnowledgeSection() {
  return (
    <section id="knowledge" className="w-full scroll-mt-20" style={{ background: '#fff' }}>
      <Reveal>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-28">
          <div className="flex flex-col md:grid items-center md:items-start gap-12 md:gap-16" style={{ gridTemplateColumns: '1fr 40%' }}>
            <div className="order-2 md:order-1 min-w-0">
              <Frame h={[779, 789, 749, 728]}><KnowledgePanel /></Frame>
            </div>

            <div className="order-1 md:order-2">
              <SectionHeading>It knows your clinic. Only your clinic.</SectionHeading>
              <Subtext>
                Upload your protocols, guides, FAQs and videos. Your agents answer from your material instead of the open internet.
              </Subtext>
              <div className="flex flex-col gap-5 mt-8">
                {FACTS.map((f) => (
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
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
