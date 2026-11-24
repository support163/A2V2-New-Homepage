import { SectionHeading, Subtext } from './ui'
import Reveal from './Reveal'
import Frame from './mock/Frame'
import TrainingPanel from './mock/TrainingPanel'

export default function TrainingSection() {
  return (
    <section id="training" className="w-full scroll-mt-20" style={{ background: '#fff' }}>
      <Reveal>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-28">
          <div className="flex flex-col md:grid items-center md:items-start gap-12 md:gap-16" style={{ gridTemplateColumns: '40% 1fr' }}>
            <div>
              <SectionHeading>Sounds like you. Knows when to stop.</SectionHeading>
              <Subtext>
                Write the instructions, test conversations in the sandbox before anything reaches a patient, and decide exactly what goes to a clinician. Every instruction change is saved and reversible.
              </Subtext>
            </div>
            <Frame h={[598, 579, 483, 425]}>
              <TrainingPanel />
            </Frame>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
