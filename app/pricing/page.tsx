'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Users, Bot } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import TrustBadges from '@/app/Test-Website/components/TrustBadges'

/* ─── Shared ─── */

const gradientDot: React.CSSProperties = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundImage: "url('/images/dot-image.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  flexShrink: 0,
}

function AnimatedNumber({
  target,
  format,
  duration = 2000,
}: {
  target: number
  format: (n: number) => string
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.textContent = format(0)
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()
          const update = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = format(eased * target)
            if (progress < 1) requestAnimationFrame(update)
            else el.textContent = format(target)
          }
          requestAnimationFrame(update)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, format, duration])

  return <span ref={ref} />
}

function FeatureRow({ text, active }: { text: string; active: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {active ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
          <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.12)" />
          <path d="M5 8l2 2 4-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
          <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.05)" />
          <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
      <span
        className="text-sm"
        style={{ color: active ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)' }}
      >
        {text}
      </span>
    </div>
  )
}

/* ─── Section 1: Hero ─── */

function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden -mt-[72px]"
      style={{ background: '#0F0E0D', height: '90vh' }}
    >
      <Image
        src="/images/hero-background-Image5.jpg"
        alt=""
        fill
        className="object-cover"
        quality={100}
        unoptimized
        priority
        style={{ zIndex: 0 }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '220px', background: 'linear-gradient(to bottom, transparent, #0F0E0D)', zIndex: 2 }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div
          className="flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
          style={{ border: '1px solid rgba(255,255,255,0.2)' }}
        >
          <span style={gradientDot} />
          <span className="text-sm text-white">Pricing</span>
        </div>

        <h1
          className="text-3xl md:text-5xl text-white tracking-tight text-center"
          style={{ fontWeight: 600, maxWidth: '720px', lineHeight: 1.15 }}
        >
          Pricing built for practices that grow
        </h1>

        <p
          className="text-lg mt-4 text-center"
          style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '580px' }}
        >
          Start free. Scale as your patient base grows. HIPAA-compliant infrastructure included on every plan.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.app.a2v2.ai/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: '#ffffff', color: '#0F0E0D' }}
          >
            Try For Free
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold transition-colors"
            style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
          >
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  )
}

/* ─── Section 2: Pricing Cards ─── */

function PricingSection() {
  const cardBase: React.CSSProperties = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '16px',
  }

  const cardHighlight: React.CSSProperties = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '16px',
  }

  const btnStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.08)',
    border: '1px solid rgba(255,255,255,0.15)',
    color: '#fff',
    borderRadius: '9999px',
    width: '100%',
    padding: '12px 0',
    marginTop: '24px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 500,
    transition: 'background 0.15s',
    display: 'block',
    textAlign: 'center',
    textDecoration: 'none',
  }

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20">
      <div className="mx-auto max-w-[1280px] px-6">

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Free */}
          <div data-animate="" className="p-6 flex flex-col" style={cardBase}>
            <div className="min-h-[100px]">
              <div className="text-sm font-medium uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Free
              </div>
              <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                For solo practitioners or clinics testing AI patient engagement for the first time.
              </p>
            </div>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold text-white">$0</span>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>/month</span>
            </div>
            <div className="mt-6 pt-6 flex flex-col flex-1 gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <FeatureRow text="1 AI clone" active={true} />
              <FeatureRow text="100 credits per month" active={true} />
              <FeatureRow text="10 documents per chatbot" active={true} />
              <FeatureRow text="1M characters per chatbot" active={true} />
              <FeatureRow text="Public access" active={false} />
              <FeatureRow text="Premium models" active={false} />
              <FeatureRow text="Team option" active={false} />
            </div>
            <a
              href="https://www.app.a2v2.ai/signin"
              target="_blank"
              rel="noopener noreferrer"
              style={btnStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            >
              Get Started
            </a>
          </div>

          {/* Starter */}
          <div data-animate="" className="p-6 flex flex-col" style={{ ...cardBase, transitionDelay: '80ms' }}>
            <div className="min-h-[100px]">
              <div className="flex items-start justify-between">
                <div className="text-sm font-medium uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Starter
                </div>
                <span
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: 14,
                      height: 14,
                      flexShrink: 0,
                      backgroundImage: "url('/images/dot-image.jpg')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      maskImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'><polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/></svg>\")",
                      WebkitMaskImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'><polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/></svg>\")",
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center',
                    } as React.CSSProperties}
                  />
                  BEST VALUE
                </span>
              </div>
              <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                For small clinics ready to automate routine patient communication and capture leads.
              </p>
            </div>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold text-white">$19.99</span>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>/month</span>
            </div>
            <div className="mt-6 pt-6 flex flex-col flex-1 gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <FeatureRow text="1 AI clone" active={true} />
              <FeatureRow text="1,000 credits per month" active={true} />
              <FeatureRow text="100 documents per chatbot" active={true} />
              <FeatureRow text="15M characters per chatbot" active={true} />
              <FeatureRow text="Public access" active={true} />
              <FeatureRow text="Premium models" active={true} />
              <FeatureRow text="Team option" active={false} />
            </div>
            <a
              href="https://www.app.a2v2.ai/signin"
              target="_blank"
              rel="noopener noreferrer"
              style={btnStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            >
              Upgrade
            </a>
          </div>

          {/* Pro */}
          <div data-animate="" className="p-6 flex flex-col" style={{ ...cardHighlight, transitionDelay: '160ms' }}>
            <div className="min-h-[100px]">
              <div className="flex items-start justify-between">
                <div className="text-sm font-medium uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Pro
                </div>
                <span
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff' }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: 14,
                      height: 14,
                      flexShrink: 0,
                      backgroundImage: "url('/images/dot-image.jpg')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      maskImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'><polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/></svg>\")",
                      WebkitMaskImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'><polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2'/></svg>\")",
                      maskSize: 'contain',
                      WebkitMaskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      WebkitMaskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      WebkitMaskPosition: 'center',
                    } as React.CSSProperties}
                  />
                  RECOMMENDED
                </span>
              </div>
              <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                For growing practices managing multiple protocols and patient cohorts.
              </p>
            </div>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold text-white">$39.99</span>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>/month</span>
            </div>
            <div className="mt-6 pt-6 flex flex-col flex-1 gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <FeatureRow text="2 AI clones" active={true} />
              <FeatureRow text="2,000 credits per month" active={true} />
              <FeatureRow text="Unlimited documents per chatbot" active={true} />
              <FeatureRow text="35M characters per chatbot" active={true} />
              <FeatureRow text="Public access" active={true} />
              <FeatureRow text="Premium models" active={true} />
              <FeatureRow text="3 team members included" active={true} />
            </div>
            <a
              href="https://www.app.a2v2.ai/signin"
              target="_blank"
              rel="noopener noreferrer"
              style={btnStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            >
              Upgrade
            </a>
          </div>

          {/* Enterprise */}
          <div data-animate="" className="p-6 flex flex-col" style={{ ...cardBase, transitionDelay: '240ms' }}>
            <div className="min-h-[100px]">
              <div className="text-sm font-medium uppercase tracking-wide" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Enterprise
              </div>
              <p className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.5)' }}>
                For multi-location clinics, healthcare networks, and teams with complex workflows.
              </p>
            </div>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="text-4xl font-semibold text-white">$99.99</span>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>/month</span>
            </div>
            <div className="mt-6 pt-6 flex flex-col flex-1 gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <FeatureRow text="3 AI clones" active={true} />
              <FeatureRow text="6,000 credits per month" active={true} />
              <FeatureRow text="Unlimited documents per chatbot" active={true} />
              <FeatureRow text="35M characters per chatbot" active={true} />
              <FeatureRow text="Public access" active={true} />
              <FeatureRow text="Premium models" active={true} />
              <FeatureRow text="5 team members included" active={true} />
            </div>
            <a
              href="https://www.app.a2v2.ai/signin"
              target="_blank"
              rel="noopener noreferrer"
              style={btnStyle}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
            >
              Upgrade
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── Section 3: Add-Ons ─── */

function AddOnsSection() {
  return (
    <section style={{ background: '#0F0E0D' }} className="py-20">
      <div className="mx-auto max-w-[1280px] px-6">

        <div data-animate="" className="text-center mb-12">
          <h2 className="text-3xl text-white tracking-tight" style={{ fontWeight: 600 }}>
            Scale on your terms
          </h2>
          <p className="mt-4 mx-auto text-sm" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '600px' }}>
            Need to manage a second brand or bring in an assistant? Add resources without jumping to a higher tier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div
            data-animate=""
            className="p-6 rounded-2xl flex flex-col"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <Users size={20} style={{ color: 'rgba(255,255,255,0.5)' }} />
                </div>
                <div>
                  <h3 className="text-base text-white" style={{ fontWeight: 600 }}>Additional Team Members</h3>
                  <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Add team members on-demand</p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-2xl font-semibold text-white">$10</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>per additional slot</div>
              </div>
            </div>
            <a
              href="https://www.app.a2v2.ai/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full text-center text-sm font-medium text-white rounded-full py-3 transition-colors"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
            >
              Get add-on
            </a>
          </div>

          <div
            data-animate=""
            className="p-6 rounded-2xl flex flex-col"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', transitionDelay: '80ms' }}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <div
                  className="flex items-center justify-center rounded-full flex-shrink-0"
                  style={{ width: 48, height: 48, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <Bot size={20} style={{ color: 'rgba(255,255,255,0.5)' }} />
                </div>
                <div>
                  <h3 className="text-base text-white" style={{ fontWeight: 600 }}>Additional Chatbots</h3>
                  <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Add chatbots on-demand</p>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-2xl font-semibold text-white">$12</div>
                <div className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>per additional slot</div>
              </div>
            </div>
            <a
              href="https://www.app.a2v2.ai/signin"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full text-center text-sm font-medium text-white rounded-full py-3 transition-colors"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
            >
              Get add-on
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ─── Section 4: Security and Trust ─── */

/* ─── Section 4: Trust (shared with homepage) ─── */

/* ─── Section 5: FAQ ─── */

const faqItems = [
  {
    q: 'Is A2V2 HIPAA compliant on every plan?',
    a: 'Yes. Every plan includes HIPAA compliance, BAA coverage, AES-256 encryption, and complete audit trails. Security is never a paid upgrade.',
  },
  {
    q: 'How does the AI know what to say to my patients?',
    a: 'You upload your protocols, intake forms, and clinical workflows. The AI is trained only on your content, not general internet knowledge, so responses stay on-protocol and on-brand.',
  },
  {
    q: 'Can the AI give bad clinical advice?',
    a: 'The AI uses strict guardrails and is designed to escalate anything outside its training to your team. If it does not know the answer, it says so rather than guessing.',
  },
  {
    q: 'Do I need to replace my EHR or CRM?',
    a: 'No. A2V2 sits on top of your existing stack. EHR, lab systems, communication tools, and payment processors. No migrations required.',
  },
  {
    q: 'Who owns the patient conversations and data?',
    a: 'You do. All conversations, captured contact info, and patient data belong to your practice. You can export your data at any time. Your data is never used to train AI models.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most practices go live in under 2 weeks. Our implementation team handles EHR integration, protocol mapping, and staff training.',
  },
  {
    q: 'What happens if I need more than the Enterprise plan?',
    a: 'Reach out to our team. We offer custom plans for multi-location networks, health systems, and practices with specialized compliance needs.',
  },
]

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20">
      <div className="mx-auto max-w-[1280px] px-6">

        <div data-animate="" className="text-center mb-12">
          <h2 className="text-3xl text-white tracking-tight" style={{ fontWeight: 600 }}>
            Frequently asked questions
          </h2>
          <p className="mt-4 mx-auto text-sm" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '700px' }}>
            Every A2V2 subscription is HIPAA compliant and built for clinical workflows. If you still have questions, our team is just a click away.
          </p>
        </div>

        <div className="mx-auto" style={{ maxWidth: '700px' }}>
          {faqItems.map((item, i) => (
            <div
              key={i}
              data-animate=""
              style={{ borderTop: '1px solid rgba(255,255,255,0.1)', transitionDelay: `${i * 40}ms` }}
            >
              <button
                className="w-full flex items-center justify-between py-5 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-base font-medium text-white pr-4">{item.q}</span>
                <ChevronDown
                  size={20}
                  style={{
                    color: 'rgba(255,255,255,0.5)',
                    flexShrink: 0,
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s',
                  }}
                />
              </button>
              <div
                style={{
                  maxHeight: openIndex === i ? '400px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                }}
              >
                <p className="text-sm pb-5" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {item.a}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} />
        </div>

      </div>
    </section>
  )
}

/* ─── Section 6: CTA ─── */

function CtaSection() {
  return (
    <section style={{ background: '#0F0E0D', marginBottom: '-8px' }}>
      <div data-animate="" className="relative z-10 pt-20 mx-auto max-w-[700px] px-6 text-center">
        <h2 className="text-4xl md:text-6xl tracking-tight" style={{ fontWeight: 600, lineHeight: 1.35 }}>
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>Your Patients.</span>
          <br />
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>Engaged.</span>
          {' '}
          <span style={{ color: '#ffffff' }}>Every Day.</span>
        </h2>
        <p className="mt-6 text-sm mx-auto" style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '400px' }}>
          Start free. Upgrade when your practice is ready. No credit card required.
        </p>
        <div className="mt-8">
          <a
            href="https://www.app.a2v2.ai/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: '#ffffff', color: '#0F0E0D' }}
          >
            Get Started
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden" style={{ marginTop: '-180px', zIndex: 0 }}>
        <Image
          src="/images/Cta-Background3.png"
          alt=""
          width={1920}
          height={800}
          quality={100}
          unoptimized
          className="w-full h-auto pointer-events-none"
          style={{ display: 'block', verticalAlign: 'bottom' }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: '280px',
            background: 'linear-gradient(to bottom, transparent, #0F0E0D)',
            zIndex: 10,
          }}
        />
      </div>
    </section>
  )
}

/* ─── Page ─── */

export default function PricingPage() {
  return (
    <main style={{ background: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>
      <ScrollAnimator />
      <Navbar />
      <HeroSection />
      <PricingSection />
      <AddOnsSection />
      <TrustBadges />
      <FAQSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
