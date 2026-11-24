import { MockFrame, PrimaryButton, GhostButton, INTER, INK, MUTED } from './ui'
import Scope from './mock/Scope'
import PortalHome from './mock/PortalHome'
import PhoneMock from './mock/PhoneMock'

export default function Hero() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8 pt-32 pb-20 md:pb-28">
        <div className="flex flex-col md:grid gap-8 md:gap-10 items-start" style={{ gridTemplateColumns: '55% 1fr' }}>
          <div>
            <h1 className="font-normal tracking-tight leading-[1.05] text-4xl md:text-6xl" style={{ color: INK, maxWidth: 760 }}>
              Your clinic. Your portal. Powered by A2V2 agents.
            </h1>
          </div>
          <div className="pt-0 md:pt-2 pl-0 md:pl-32">
            <p className="leading-relaxed" style={{ fontSize: 16, fontWeight: 500, color: MUTED, maxWidth: 560, fontFamily: INTER, letterSpacing: '-0.3px' }}>
              Build the agents, teach them your protocols, track every patient&apos;s health, and give each one a portal with your clinic&apos;s name on it.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <PrimaryButton>Book a Demo</PrimaryButton>
              <GhostButton external>Get Started</GhostButton>
            </div>
          </div>
        </div>

        <style>{`
          .w1-outer { margin-top: 64px; }
          .w1-inner { position: relative; width: 100%; height: 720px; overflow: hidden; }
          @media (max-width: 880px) {
            .w1-outer { --s: .7; position: relative; left: 50%; transform: translateX(-50%); width: 100vw; height: calc(720px * var(--s)); overflow: hidden; margin-top: 48px; }
            .w1-inner { position: absolute; top: 0; left: 50%; width: 1240px; transform: translateX(-50%) scale(var(--s)); transform-origin: top center; }
          }
          @media (max-width: 700px) { .w1-outer { --s: .56; } }
          @media (max-width: 560px) { .w1-outer { --s: .45; } }
          @media (max-width: 440px) { .w1-outer { --s: .34; } }
          @media (max-width: 380px) { .w1-outer { --s: .3; } }
        `}</style>
        <div className="w1-outer">
          <MockFrame className="w1-inner">
            <Scope className="absolute" style={{ left: '26%', top: 60, width: 1020 }}>
              <PortalHome style={{ borderRadius: '28px 0 0 28px' }} />
            </Scope>
            <Scope className="absolute" style={{ left: '6%', top: 190, width: 252, height: 516, transform: 'scale(1.3)', transformOrigin: 'top left' }}>
              <PhoneMock />
            </Scope>
          </MockFrame>
        </div>
      </div>
    </section>
  )
}
