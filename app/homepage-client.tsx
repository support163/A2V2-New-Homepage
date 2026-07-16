'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Activity, Sparkles, Bell, ChevronDown, Search, Users, FileText, BarChart2, Shield, UserCog, ClipboardList, Check, MessageSquare, Stethoscope, FlaskConical, Heart } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import TrustBadges from '@/app/Test-Website/components/TrustBadges'
import CtaSection from '@/app/Test-Website/components/CtaSection'
import { APP_URL, DEMO_BOOKING_URL } from '@/lib/constants'

// ─── Shared helpers ──────────────────────────────────────────────────────────

const gradientDot: React.CSSProperties = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundImage: "url('/images/dot-image.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  flexShrink: 0,
}

const glassBg: React.CSSProperties = {
  background: 'rgba(0,0,0,0.55)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.1)',
  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
}

function MiniTabBar({ items }: { items: string[] }) {
  return (
    <div className="flex items-center gap-0.5 mb-3 rounded-lg p-0.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
      {items.map((t, i) => (
        <div
          key={t}
          className="flex-1 text-center text-[10px] font-medium py-1 rounded-md"
          style={{
            background: i === 0 ? 'rgba(255,255,255,0.12)' : 'transparent',
            color: i === 0 ? '#ffffff' : 'rgba(255,255,255,0.4)',
          }}
        >
          {t}
        </div>
      ))}
    </div>
  )
}

function ActionRow({ cancelLabel = 'Cancel', confirmLabel }: { cancelLabel?: string; confirmLabel: string }) {
  return (
    <div className="flex items-center justify-between mt-3">
      <button className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{cancelLabel}</button>
      <button className="text-[11px] font-semibold rounded-lg px-3 py-1.5" style={{ background: '#ffffff', color: '#000000' }}>
        {confirmLabel}
      </button>
    </div>
  )
}

// ─── Animated count-up ───────────────────────────────────────────────────────

function AnimatedNumber({ target, format, duration = 2000 }: {
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
    const observer = new IntersectionObserver(([entry]) => {
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
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, format, duration])

  return <span ref={ref} />
}

// ─── Section 1: Hero ─────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden flex items-center justify-center -mt-[72px]"
      style={{ height: '90vh', minHeight: '600px', background: '#0F0E0D' }}
    >
      <Image
        src="/images/hero-background-Image4.jpg"
        alt="Healthcare AI platform dashboard interface"
        fill
        sizes="100vw"
        quality={100}
        unoptimized
        className="object-cover"
        priority
        style={{ zIndex: 0 }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '200px', background: 'linear-gradient(to bottom, transparent, #0F0E0D)', zIndex: 2 }}
      />
      <div className="relative mx-auto max-w-[720px] px-6 text-center w-full" style={{ zIndex: 3 }}>
        <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-tight">
          AI engagement built for every healthcare practice
        </h1>
        <p className="mt-4 text-lg mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.95)', maxWidth: '580px' }}>
          From longevity clinics to functional medicine to HRT practices. HIPAA-compliant AI that automates patient engagement and recovers lost revenue.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`${APP_URL}/signin`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center rounded-full px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: '#ffffff', color: '#0F0E0D' }}
          >
            Try For Free
          </a>
          <a
            href={DEMO_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex justify-center items-center rounded-full px-8 py-3 text-sm font-semibold text-white transition-colors"
            style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.2)' }}
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

// ─── Section 2: Stats ────────────────────────────────────────────────────────

function StatsSection() {
  return (
    <section style={{ background: '#0F0E0D' }} className="py-12">
      {/* GEO/LLM brand definition — visually hidden, read by crawlers */}
      <p className="sr-only">
        A2V2.ai is a HIPAA-compliant AI platform designed for longevity clinics, HRT practices, and functional medicine offices. It automates patient engagement, tracks treatment adherence, and recovers lost revenue through clinical-grade AI communication. A2V2 provides healthcare AI, patient engagement AI, and clinical workflow automation tools built to meet HIPAA compliance requirements.
      </p>
      <div className="mx-auto max-w-[900px] px-6">
        <div
          className="flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x"
          style={{ borderColor: 'rgba(255,255,255,0.1)' }}
        >
          <div data-animate="" className="flex-1 text-center py-8 md:py-4">
            <div className="text-3xl font-semibold text-white">
              <AnimatedNumber target={73} format={(n) => `${Math.round(n)}%`} />
            </div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.75)' }}>Avg patient drop-off</div>
          </div>
          <div data-animate="" className="flex-1 text-center py-8 md:py-4" style={{ transitionDelay: '80ms' }}>
            <div className="text-3xl font-semibold text-white">30-45</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.75)' }}>Day early warning</div>
          </div>
          <div data-animate="" className="flex-1 text-center py-8 md:py-4" style={{ transitionDelay: '160ms' }}>
            <div className="text-3xl font-semibold text-white">&lt;2 Weeks</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.75)' }}>Implementation</div>
          </div>
          <div data-animate="" className="flex-1 text-center py-8 md:py-4" style={{ transitionDelay: '240ms' }}>
            <div className="text-3xl font-semibold text-white">100%</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(255,255,255,0.75)' }}>HIPAA Compliant</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section 3: Benefit cards ────────────────────────────────────────────────

function RetentionDashboard() {
  return (
    <div className="flex h-full">
      <DashboardSidebar
        navItems={[
          { label: 'Dashboard', icon: <BarChart2 size={12} />, active: false },
          { label: 'Patient queue', icon: <Users size={12} />, active: true },
          { label: 'At-risk', icon: <Bell size={12} />, active: false },
          { label: 'Sequences', icon: <FileText size={12} />, active: false },
          { label: 'Reports', icon: <BarChart2 size={12} />, active: false },
        ]}
        subListLabel="Queue"
        subListItems={['Active (24)', 'Paused (3)', 'Completed (87)']}
      />
      <div className="flex flex-col flex-1 overflow-hidden" style={{ padding: '14px' }}>
        <DashboardTopBar title="Patient queue" />
        <ScenarioBlock
          title="Active patients"
          rows={[
            { type: 'Patient', content: 'Sarah J. — HRT Week 6 — Message sent 2h ago' },
            { type: 'Patient', content: 'Michael K. — NAD+ Week 3 — Opened 30m ago' },
            { type: 'Patient', content: 'Amy L. — Peptide Week 1 — Scheduled for tomorrow' },
            { type: 'Patient', content: 'Robert T. — HRT Week 12 — At risk, 12 days inactive' },
          ]}
        />
      </div>
    </div>
  )
}

function ComplianceDashboard() {
  return (
    <div className="flex h-full">
      <DashboardSidebar
        navItems={[
          { label: 'Overview', icon: <BarChart2 size={12} />, active: false },
          { label: 'Compliance', icon: <Shield size={12} />, active: true },
          { label: 'Audit log', icon: <FileText size={12} />, active: false },
          { label: 'Access control', icon: <UserCog size={12} />, active: false },
          { label: 'Encryption', icon: <Shield size={12} />, active: false },
        ]}
        subListLabel="Status"
        subListItems={['Active checks (12)', 'Last audit', 'Reports']}
      />
      <div className="flex flex-col flex-1 overflow-hidden" style={{ padding: '14px' }}>
        <DashboardTopBar title="Compliance status" />
        <ScenarioBlock
          title="Security checks"
          rows={[
            { type: 'Check', content: 'HIPAA compliance — Active since deployment' },
            { type: 'Check', content: 'AES-256 encryption — Enabled at rest and in transit' },
            { type: 'Check', content: 'BAA signed and stored — Verified' },
            { type: 'Check', content: 'Last penetration test — 14 days ago' },
            { type: 'Check', content: 'Audit log — 2,847 events logged this month' },
          ]}
        />
      </div>
    </div>
  )
}

function BenefitCardsSection() {
  const cards = [
    {
      bgImage: '/images/Ui-Card-Background1.jpg',
      bgAlt: 'Patient retention dashboard showing at-risk patient tracking and re-engagement workflows',
      tag: 'Retention',
      title: 'Patient Retention Engine',
      description: 'Designed to identify at-risk patients 30-45 days before they drop off. Automated re-engagement sequences keep patients on protocol and reduce churn without adding staff.',
      glass: <RetentionDashboard />,
      delay: '100ms',
    },
    {
      bgImage: '/images/Ui-Card-Background2.jpg',
      bgAlt: 'HIPAA-compliant AI security dashboard showing encryption and audit trail features',
      tag: 'Compliance',
      title: 'HIPAA-Compliant by Default',
      description: 'BAA provided, AES-256 encryption, secured LLM access, and complete audit trails. Built to pass your compliance review on day one.',
      glass: <ComplianceDashboard />,
      delay: '200ms',
    },
  ]

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div data-animate="" className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white">Built for clinical workflows</h2>
          <p className="mt-3 text-lg max-w-[540px] mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
            AI that understands medicine, not marketing funnels.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cards.map((card) => (
            <div key={card.title} data-animate="" style={{ transitionDelay: card.delay }}>
              <div className="relative rounded-xl overflow-hidden w-full" style={{ height: '400px' }}>
                <Image src={card.bgImage} alt={card.bgAlt} fill sizes="(max-width: 768px) 100vw, 50vw" quality={100} unoptimized className="object-cover" loading="lazy" />
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.2)' }} />
                <div className="absolute inset-0 flex items-center justify-center p-5">
                  <div
                    className="rounded-xl w-full overflow-hidden"
                    style={{
                      maxWidth: '480px',
                      height: '320px',
                      background: 'rgba(0,0,0,0.55)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                    }}
                  >
                    {card.glass}
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex items-center gap-2 mb-3">
                  <span style={gradientDot} />
                  <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.75)' }}>{card.tag}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section 4: Feature showcase (auto-cycling tabs) ─────────────────────────

// ─── Dashboard components for showcase cards ─────────────────────────────────

function DashboardSidebar({
  navItems,
  subListLabel,
  subListItems,
}: {
  navItems: { label: string; icon: React.ReactNode; active?: boolean }[]
  subListLabel: string
  subListItems: string[]
}) {
  return (
    <div
      className="flex flex-col flex-shrink-0 h-full overflow-hidden"
      style={{
        width: '32%',
        background: 'rgba(0,0,0,0.3)',
        borderRight: '1px solid rgba(255,255,255,0.06)',
        padding: '14px 10px',
        boxSizing: 'border-box',
      }}
    >
      <div className="mb-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/Logo.svg"
          alt="A2V2"
          style={{ height: '16px', width: 'auto', filter: 'brightness(0) invert(1)' }}
        />
      </div>
      <div
        className="flex items-center gap-1.5 rounded-md px-2 py-1.5 mb-4"
        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <Search size={10} style={{ color: 'rgba(255,255,255,0.3)', flexShrink: 0 }} />
        <span className="text-[10px]" style={{ color: 'rgba(255,255,255,0.3)' }}>Search...</span>
      </div>
      <div className="text-[9px] uppercase mb-1.5" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>
        Sections
      </div>
      <div className="flex flex-col gap-0.5 mb-4">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-1.5 rounded-md px-2 py-1.5"
            style={{
              background: item.active ? 'rgba(255,255,255,0.1)' : 'transparent',
              color: item.active ? '#ffffff' : 'rgba(255,255,255,0.5)',
            }}
          >
            {item.icon}
            <span className="text-[11px] truncate">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="text-[9px] uppercase mb-1.5" style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.08em' }}>
        {subListLabel}
      </div>
      <div className="flex flex-col gap-0.5">
        {subListItems.map((item) => (
          <div key={item} className="text-[11px] px-2 py-1 truncate" style={{ color: 'rgba(255,255,255,0.4)' }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function Var({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] rounded px-1 mx-0.5" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.55)' }}>
      {children}
    </span>
  )
}

function ScenarioBlock({ title, rows }: {
  title: string
  rows: Array<{ type: string; content: React.ReactNode }>
}) {
  return (
    <div className="mb-3">
      <div className="text-[11px] font-semibold text-white mb-1.5">{title}</div>
      <div className="flex flex-col gap-1">
        {rows.map((row, ri) => (
          <div key={ri} className="flex items-start gap-1.5 ml-1">
            <span
              className="text-[9px] font-semibold rounded px-1 py-0.5 flex-shrink-0 mt-0.5"
              style={{
                background: row.type === 'Say' ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.06)',
                color: row.type === 'Say' ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)',
              }}
            >
              {row.type}:
            </span>
            <span className="text-[11px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              {row.content}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

function DashboardTopBar({ title, badge }: { title: string; badge?: string }) {
  return (
    <div className="flex items-center justify-between mb-3 pb-2.5 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
      <span className="text-xs font-semibold text-white truncate mr-2">{title}</span>
      <div className="flex items-center gap-1.5 flex-shrink-0">
        {badge && (
          <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}>
            {badge}
          </span>
        )}
        <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(74,222,128,0.12)', color: 'rgba(74,222,128,0.8)' }}>
          Active
        </span>
      </div>
    </div>
  )
}

function LongevityDashboard() {
  return (
    <div className="flex h-full">
      <DashboardSidebar
        navItems={[
          { label: 'Patients', icon: <Users size={12} />, active: false },
          { label: 'Protocols', icon: <FileText size={12} />, active: true },
          { label: 'Labs', icon: <BarChart2 size={12} />, active: false },
          { label: 'Wearables', icon: <Activity size={12} />, active: false },
          { label: 'Biomarkers', icon: <Shield size={12} />, active: false },
        ]}
        subListLabel="Protocols"
        subListItems={['NAD+ IV Therapy', 'BPC-157 Peptide', 'Senolytic Cycle']}
      />
      <div className="flex flex-col flex-1 overflow-hidden" style={{ padding: '14px' }}>
        <DashboardTopBar title="NAD+ IV Therapy" />
        <ScenarioBlock
          title="Protocol details"
          rows={[
            { type: 'Dose', content: '250mg weekly infusion' },
            { type: 'Duration', content: '6-week initial cycle' },
            { type: 'Lab tracking', content: 'Upload labs for AI extraction' },
            { type: 'Wearable sync', content: 'Wearable integrations coming soon' },
            { type: 'Check-in', content: '48h post-infusion cadence' },
          ]}
        />
      </div>
    </div>
  )
}

function HRTDashboard() {
  return (
    <div className="flex h-full">
      <DashboardSidebar
        navItems={[
          { label: 'Patients', icon: <Users size={12} />, active: false },
          { label: 'Hormone Panels', icon: <FileText size={12} />, active: true },
          { label: 'Dosing', icon: <ClipboardList size={12} />, active: false },
          { label: 'Labs', icon: <BarChart2 size={12} />, active: false },
          { label: 'Cycles', icon: <Activity size={12} />, active: false },
        ]}
        subListLabel="Protocols"
        subListItems={['Testosterone', 'Estrogen', 'Thyroid']}
      />
      <div className="flex flex-col flex-1 overflow-hidden" style={{ padding: '14px' }}>
        <DashboardTopBar title="Testosterone Optimization" />
        <ScenarioBlock
          title="Protocol details"
          rows={[
            { type: 'Protocol', content: 'Weekly injection, 100mg' },
            { type: 'Lab schedule', content: '6-week follow-up' },
            { type: 'Reminder', content: 'Dosing alert every Monday' },
            { type: 'Tracking', content: 'Free T, Total T, E2, SHBG' },
            { type: 'Adherence', content: '94% this month' },
          ]}
        />
      </div>
    </div>
  )
}

function FunctionalMedicineDashboard() {
  return (
    <div className="flex h-full">
      <DashboardSidebar
        navItems={[
          { label: 'Cases', icon: <Users size={12} />, active: false },
          { label: 'Protocols', icon: <FileText size={12} />, active: true },
          { label: 'Supplements', icon: <Activity size={12} />, active: false },
          { label: 'Symptoms', icon: <ClipboardList size={12} />, active: false },
          { label: 'Diets', icon: <Shield size={12} />, active: false },
        ]}
        subListLabel="Protocols"
        subListItems={['Gut Healing', 'Adrenal Support', 'Detox']}
      />
      <div className="flex flex-col flex-1 overflow-hidden" style={{ padding: '14px' }}>
        <DashboardTopBar title="Gut Healing Protocol" />
        <ScenarioBlock
          title="Protocol phases"
          rows={[
            { type: 'Phase 1', content: 'Remove — Elimination diet tracking' },
            { type: 'Phase 2', content: 'Replace — Digestive enzyme support' },
            { type: 'Phase 3', content: 'Reinoculate — Probiotic regimen' },
            { type: 'Symptom', content: 'Daily check-in journal' },
            { type: 'Lab work', content: 'Comprehensive stool analysis' },
          ]}
        />
      </div>
    </div>
  )
}

function HealthOptimizationDashboard() {
  return (
    <div className="flex h-full">
      <DashboardSidebar
        navItems={[
          { label: 'Members', icon: <Users size={12} />, active: false },
          { label: 'Programs', icon: <FileText size={12} />, active: true },
          { label: 'Biomarkers', icon: <BarChart2 size={12} />, active: false },
          { label: 'Wearables', icon: <Activity size={12} />, active: false },
          { label: 'Reports', icon: <Shield size={12} />, active: false },
        ]}
        subListLabel="Programs"
        subListItems={['Executive Panel', 'VO2 Max', 'Sleep Rx']}
      />
      <div className="flex flex-col flex-1 overflow-hidden" style={{ padding: '14px' }}>
        <DashboardTopBar title="Executive Health Program" />
        <ScenarioBlock
          title="Program details"
          rows={[
            { type: 'Review', content: 'Quarterly full biomarker panel' },
            { type: 'Wearables', content: 'Wearable integrations coming soon' },
            { type: 'Training', content: 'VO2 max optimization plan' },
            { type: 'Sleep', content: 'Chronotype-based schedule' },
            { type: 'Follow-up', content: '90-day cadence' },
          ]}
        />
      </div>
    </div>
  )
}

const showcaseCardContent = [
  <LongevityDashboard key="0" />,
  <HRTDashboard key="1" />,
  <FunctionalMedicineDashboard key="2" />,
  <HealthOptimizationDashboard key="3" />,
]

const showcaseTabs = [
  { title: 'Longevity clinics', description: 'Native support for NAD+ IV therapy, peptide protocols, senolytics, and biomarker optimization. Lab document upload with AI extraction. Wearable integrations coming soon.' },
  { title: 'HRT practices', description: 'Hormone optimization workflows with cycle-aware dosing reminders, lab schedule tracking, and testosterone, estrogen, and thyroid protocol support.' },
  { title: 'Functional medicine', description: 'Multi-protocol coordination for complex root-cause treatment. Supplement stack management, elimination diet tracking, and symptom journaling.' },
  { title: 'Health optimization', description: 'Executive health programs with VO2 max tracking, sleep optimization workflows, quarterly biomarker reviews, and lab document upload.' },
]

const showcaseSummary = [
  { Icon: Stethoscope, title: 'Specialty-Aware', desc: 'Built for your practice type' },
  { Icon: FlaskConical, title: 'Protocol Library', desc: 'NAD+, HRT, peptides, more' },
  { Icon: Heart, title: 'Care Continuity', desc: 'From intake to long-term' },
]

const showcaseBgs = [
  '/images/Ui-Card-Background1.jpg',
  '/images/Ui-Card-Background2.jpg',
  '/images/Ui-Card-Background3.jpg',
  '/images/Ui-Card-Background4.jpg',
]

function FeatureShowcaseSection() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % showcaseTabs.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [activeTab])

  function switchTab(i: number) {
    if (i === activeTab) return
    setActiveTab(i)
  }

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">

          {/* Left: label + heading */}
          <div data-animate="" className="flex-shrink-0 max-w-[400px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundImage: "url('/images/dot-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.75)' }}>Healthcare Platform</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Built for every type of practice
            </h2>
          </div>

          {/* Right: 3 summary items */}
          <div data-animate="" className="flex flex-row items-stretch flex-shrink-0" style={{ transitionDelay: '80ms' }}>
            {showcaseSummary.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className="flex flex-col gap-2 flex-1"
                style={{
                  minWidth: '200px',
                  paddingLeft: i === 0 ? '0' : '20px',
                  paddingRight: i === showcaseSummary.length - 1 ? '0' : '20px',
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                }}
              >
                <Icon size={16} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.5)' }} />
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-[65fr_35fr] gap-8 items-start">

          {/* Left on desktop (order-2 on mobile = below tabs): background image + glass card */}
          <div
            data-animate=""
            className="order-2 md:order-1 relative rounded-2xl overflow-hidden"
            style={{ height: '500px', transitionDelay: '160ms' }}
          >
            {showcaseBgs.map((src, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: activeTab === i ? 1 : 0,
                  transition: 'opacity 300ms ease',
                }}
              />
            ))}
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.15)' }} />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div
                className="rounded-xl w-full overflow-hidden"
                style={{
                  maxWidth: '600px',
                  height: '380px',
                  background: 'rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                {showcaseCardContent[activeTab]}
              </div>
            </div>
          </div>

          {/* Right on desktop (order-1 on mobile = above image): product info + tabs */}
          <div data-animate="" className="order-1 md:order-2" style={{ transitionDelay: '120ms' }}>
            <p className="text-xl font-semibold text-white">Specialty Deep-Dive</p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Every practice type gets workflows, protocols, and integrations built for their specific specialty.
            </p>
            <div className="mt-4">
              <a
                href={DEMO_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white rounded-full px-4 py-1.5 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                Book a free audit &#8250;
              </a>
            </div>

            {/* Tabs */}
            <style>{`
              @keyframes hcFillProgress {
                from { width: 0%; }
                to { width: 100%; }
              }
            `}</style>
            <div className="flex flex-col">
              {showcaseTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => switchTab(i)}
                  className="w-full text-left py-4 transition-all duration-200 relative"
                >
                  <span
                    className="text-sm block"
                    style={{
                      fontWeight: activeTab === i ? 600 : 500,
                      color: activeTab === i ? '#ffffff' : 'rgba(255,255,255,0.4)',
                      transition: 'color 200ms ease',
                    }}
                  >
                    {tab.title}
                  </span>
                  <div
                    style={{
                      maxHeight: activeTab === i ? '200px' : '0px',
                      opacity: activeTab === i ? 1 : 0,
                      marginTop: activeTab === i ? '8px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 300ms ease, opacity 300ms ease, margin 300ms ease',
                    }}
                  >
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                      {tab.description}
                    </p>
                  </div>
                  {/* Progress line */}
                  <div className="absolute bottom-0 left-0 w-full" style={{ height: '2px', background: 'rgba(255,255,255,0.1)' }}>
                    {activeTab === i && (
                      <div
                        key={`hc-progress-${activeTab}`}
                        style={{
                          height: '100%',
                          background: 'rgba(255,255,255,0.8)',
                          animation: 'hcFillProgress 8s linear forwards',
                        }}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

// ─── Section 4b: Platform Features ──────────────────────────────────────────

function AgentsBuilderDashboard() {
  return (
    <div className="flex h-full">
      <DashboardSidebar
        navItems={[
          { label: 'Agents', icon: <Sparkles size={12} />, active: true },
          { label: 'Templates', icon: <FileText size={12} />, active: false },
          { label: 'Deployed', icon: <Activity size={12} />, active: false },
          { label: 'Analytics', icon: <BarChart2 size={12} />, active: false },
        ]}
        subListLabel="Agent library"
        subListItems={['Patient Engagement', 'Lab Results Bot', 'Intake Assistant']}
      />
      <div className="flex flex-col flex-1 overflow-hidden" style={{ padding: '14px' }}>
        <DashboardTopBar title="Healthcare Agent Builder" badge="Draft" />
        <ScenarioBlock
          title="Agent configuration"
          rows={[
            { type: 'Model', content: <>Claude — <Var>Secured LLM</Var> (HIPAA)</> },
            { type: 'Role', content: 'Warm & clinical patient communicator' },
            { type: 'Knowledge', content: 'NAD+ IV, peptides, biomarker tracking' },
            { type: 'Status', content: <><Var>draft</Var> → ready to deploy</> },
          ]}
        />
        <ScenarioBlock
          title="Trigger settings"
          rows={[
            { type: 'Channel', content: 'SMS + Email' },
            { type: 'Trigger', content: <><Var>new_patient_added</Var> → send welcome</> },
          ]}
        />
      </div>
    </div>
  )
}

function TeamsRolesDashboard() {
  return (
    <div className="flex h-full">
      <DashboardSidebar
        navItems={[
          { label: 'Team', icon: <Users size={12} />, active: false },
          { label: 'Roles', icon: <UserCog size={12} />, active: true },
          { label: 'Permissions', icon: <Shield size={12} />, active: false },
          { label: 'Audit log', icon: <FileText size={12} />, active: false },
        ]}
        subListLabel="Roles"
        subListItems={['Super Admin', 'Clinical Director', 'Doctors']}
      />
      <div className="flex flex-col flex-1 overflow-hidden" style={{ padding: '14px' }}>
        <DashboardTopBar title="Role permissions" />
        <ScenarioBlock
          title="Permission levels"
          rows={[
            { type: 'Role', content: <><Var>Super Admin</Var> → Full access</> },
            { type: 'Role', content: <><Var>Clinical Director</Var> → Patient data + reports</> },
            { type: 'Role', content: <><Var>Doctor</Var> → Assigned patients only</> },
            { type: 'Role', content: <><Var>Nurse Practitioner</Var> → Limited view</> },
          ]}
        />
      </div>
    </div>
  )
}

function TaskManagementDashboard() {
  return (
    <div className="flex h-full">
      <DashboardSidebar
        navItems={[
          { label: 'Dashboard', icon: <BarChart2 size={12} />, active: false },
          { label: 'Tasks', icon: <ClipboardList size={12} />, active: true },
          { label: 'Assignments', icon: <Users size={12} />, active: false },
          { label: 'Completed', icon: <Activity size={12} />, active: false },
        ]}
        subListLabel="Views"
        subListItems={['My tasks', 'Team tasks', 'Overdue']}
      />
      <div className="flex flex-col flex-1 overflow-hidden" style={{ padding: '14px' }}>
        <DashboardTopBar title="Today's tasks" badge="12 open" />
        <ScenarioBlock
          title="In progress"
          rows={[
            { type: 'Task', content: <>Review lab results — Dr. Smith <Var>In progress</Var></> },
            { type: 'Task', content: <>Follow up with Sarah J. <Var>Pending</Var></> },
            { type: 'Task', content: <>New patient intake — Alex R. <Var>Pending</Var></> },
          ]}
        />
        <ScenarioBlock
          title="Completed today"
          rows={[
            { type: 'Done', content: 'Protocol review — team confirmed' },
            { type: 'Done', content: 'Lab orders sent — 3 patients' },
          ]}
        />
      </div>
    </div>
  )
}

function CRMDashboard() {
  return (
    <div className="flex h-full">
      <DashboardSidebar
        navItems={[
          { label: 'Contacts', icon: <Users size={12} />, active: true },
          { label: 'Stages', icon: <BarChart2 size={12} />, active: false },
          { label: 'Segments', icon: <FileText size={12} />, active: false },
          { label: 'Activity', icon: <Activity size={12} />, active: false },
        ]}
        subListLabel="Lists"
        subListItems={['All contacts', 'Leads', 'Customers']}
      />
      <div className="flex flex-col flex-1 overflow-hidden" style={{ padding: '14px' }}>
        <DashboardTopBar title="Contact pipeline" />
        <ScenarioBlock
          title="Stage overview"
          rows={[
            { type: 'Stage', content: <>Leads — <Var>24</Var> contacts</> },
            { type: 'Stage', content: <>Prospects — <Var>12</Var> contacts</> },
            { type: 'Stage', content: <>Customers — <Var>87</Var> contacts</> },
            { type: 'Stage', content: <>Old Customers — <Var>15</Var> contacts</> },
          ]}
        />
        <ScenarioBlock
          title="Recent contacts"
          rows={[
            { type: 'Contact', content: <>Sarah J. — <Var>Lead</Var></> },
            { type: 'Contact', content: <>Michael K. — <Var>Customer</Var></> },
          ]}
        />
      </div>
    </div>
  )
}

function CustomFormsDashboard() {
  return (
    <div className="flex h-full">
      <DashboardSidebar
        navItems={[
          { label: 'Forms', icon: <FileText size={12} />, active: true },
          { label: 'Templates', icon: <FileText size={12} />, active: false },
          { label: 'Submissions', icon: <ClipboardList size={12} />, active: false },
          { label: 'Integrations', icon: <BarChart2 size={12} />, active: false },
        ]}
        subListLabel="Form library"
        subListItems={['Onboarding', 'Blood labs', 'Check-ins']}
      />
      <div className="flex flex-col flex-1 overflow-hidden" style={{ padding: '14px' }}>
        <DashboardTopBar title="Form builder" badge="Draft" />
        <ScenarioBlock
          title="Onboarding form fields"
          rows={[
            { type: 'Field', content: 'Full name — Text input' },
            { type: 'Field', content: 'Date of birth — Date picker' },
            { type: 'Field', content: 'Current medications — Textarea' },
            { type: 'Field', content: 'Lab results upload — File upload' },
            { type: 'Field', content: 'HIPAA consent — Checkbox' },
          ]}
        />
      </div>
    </div>
  )
}

const platformCardContent = [
  <AgentsBuilderDashboard key="0" />,
  <TeamsRolesDashboard key="1" />,
  <TaskManagementDashboard key="2" />,
  <CRMDashboard key="3" />,
  <CustomFormsDashboard key="4" />,
]

const platformTabs = [
  { title: 'Create agents', description: 'Deploy custom healthcare AI agents tailored to your clinic\'s protocols, specialties, and patient communication style.' },
  { title: 'Teams & roles', description: 'Designed to support Super Admin, Clinical Director, Admin, Doctors, and Nurse Practitioners with role-based permissions and granular access control.' },
  { title: 'Task management', description: 'AI agents are designed to automatically generate tasks. Managers assign them to team members. Track status across pending, in-progress, and completed.' },
  { title: 'CRM per agent', description: 'Every agent has its own CRM. Visitors are auto-added as contacts, assigned to team members, and tracked through stages: Lead, Prospect, Customer, Old Customer.' },
  { title: 'Custom forms', description: 'Build forms for onboarding, blood labs, health check-ins, and any workflow specific to your practice.' },
]

const platformSummary = [
  { Icon: UserCog, title: 'Teams', desc: 'Role-based access for your staff' },
  { Icon: ClipboardList, title: 'Tasks', desc: 'Automated task management' },
  { Icon: FileText, title: 'Forms', desc: 'Custom intake and check-ins' },
]

function PlatformFeaturesSection() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % platformTabs.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [activeTab])

  function switchTab(i: number) {
    if (i === activeTab) return
    setActiveTab(i)
  }

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">

          {/* Left: label + heading */}
          <div data-animate="" className="flex-shrink-0 max-w-[440px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundImage: "url('/images/dot-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.75)' }}>Platform Features</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Everything you need to run your practice
            </h2>
          </div>

          {/* Right: 3 summary items */}
          <div data-animate="" className="flex flex-row items-stretch flex-shrink-0" style={{ transitionDelay: '80ms' }}>
            {platformSummary.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className="flex flex-col gap-2 flex-1"
                style={{
                  minWidth: '200px',
                  paddingLeft: i === 0 ? '0' : '20px',
                  paddingRight: i === platformSummary.length - 1 ? '0' : '20px',
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                }}
              >
                <Icon size={16} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.5)' }} />
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-[35fr_65fr] gap-8 items-start">

          {/* Left: product info + tabs */}
          <div data-animate="" style={{ transitionDelay: '120ms' }}>
            <p className="text-xl font-semibold text-white">Practice Management</p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Built-in tools designed to run your clinic without juggling multiple platforms.
            </p>
            <div className="mt-4">
              <a
                href="/security"
                className="inline-flex items-center gap-1.5 text-sm text-white rounded-full px-4 py-1.5 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                Learn more &#8250;
              </a>
            </div>

            {/* Tabs */}
            <style>{`
              @keyframes pfFillProgress {
                from { width: 0%; }
                to { width: 100%; }
              }
            `}</style>
            <div className="flex flex-col">
              {platformTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => switchTab(i)}
                  className="w-full text-left py-4 transition-all duration-200 relative"
                >
                  <span
                    className="text-sm block"
                    style={{
                      fontWeight: activeTab === i ? 600 : 500,
                      color: activeTab === i ? '#ffffff' : 'rgba(255,255,255,0.4)',
                      transition: 'color 200ms ease',
                    }}
                  >
                    {tab.title}
                  </span>
                  <div
                    style={{
                      maxHeight: activeTab === i ? '200px' : '0px',
                      opacity: activeTab === i ? 1 : 0,
                      marginTop: activeTab === i ? '8px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 300ms ease, opacity 300ms ease, margin 300ms ease',
                    }}
                  >
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                      {tab.description}
                    </p>
                  </div>
                  {/* Progress line */}
                  <div className="absolute bottom-0 left-0 w-full" style={{ height: '2px', background: 'rgba(255,255,255,0.1)' }}>
                    {activeTab === i && (
                      <div
                        key={`pf-progress-${activeTab}`}
                        style={{
                          height: '100%',
                          background: 'rgba(255,255,255,0.8)',
                          animation: 'pfFillProgress 8s linear forwards',
                        }}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: static background + glass card */}
          <div
            data-animate=""
            className="relative rounded-2xl overflow-hidden"
            style={{ height: '500px', transitionDelay: '160ms' }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/images/Ui-Card-Background3.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.15)' }} />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div
                className="rounded-xl w-full overflow-hidden"
                style={{
                  maxWidth: '600px',
                  height: '380px',
                  background: 'rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
              >
                {platformCardContent[activeTab]}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ─── Section 5: Chatbot mockups ──────────────────────────────────────────────

type ChatMessage = { role: 'bot' | 'user'; text: string; time: string }

function ChatbotMockup({ botName, messages }: { botName: string; messages: ChatMessage[] }) {
  return (
    <div
      className="flex flex-col rounded-2xl w-full overflow-hidden flex-shrink-0"
      style={{
        maxWidth: '420px',
        height: '630px',
        background: 'rgba(0,0,0,0.55)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-4 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div
          className="rounded-full flex-shrink-0"
          style={{ width: 40, height: 40, backgroundImage: "url('/images/dot-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white truncate">{botName}</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <div className="rounded-full flex-shrink-0" style={{ width: 8, height: 8, background: '#ffffff' }} />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>Online</span>
          </div>
        </div>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-hidden p-4 flex flex-col gap-3">
        {messages.map((msg, i) => (
          <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
            <div
              className="p-3 text-sm text-white"
              style={{
                maxWidth: '80%',
                background: msg.role === 'bot' ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.15)',
                borderRadius: msg.role === 'bot' ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
              }}
            >
              {msg.text}
            </div>
            <span className="text-[10px] mt-1" style={{ color: 'rgba(255,255,255,0.3)' }}>{msg.time}</span>
          </div>
        ))}
      </div>
      {/* Input bar */}
      <div className="flex items-center gap-2 p-3 flex-shrink-0" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <input
          readOnly
          placeholder="Type a message..."
          className="flex-1 rounded-full px-4 py-2 text-sm outline-none"
          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)' }}
        />
        <button
          className="flex items-center justify-center rounded-full flex-shrink-0"
          style={{ width: 32, height: 32, background: '#ffffff' }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function BulletItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div
        className="flex items-center justify-center rounded-full flex-shrink-0"
        style={{ width: 18, height: 18, background: 'rgba(255,255,255,0.1)' }}
      >
        <Check size={10} style={{ color: '#ffffff' }} />
      </div>
      <span className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>{text}</span>
    </div>
  )
}

const chatbotTabs = [
  { title: 'Symptom check-ins', description: 'Patients describe how they feel after treatment. The AI responds with clinical accuracy and flags concerns to your team.' },
  { title: 'Protocol questions', description: "Answers questions about NAD+, peptides, HRT, and supplements in your clinic's voice." },
  { title: 'Appointment booking', description: 'Patients book, reschedule, and confirm visits directly through chat without picking up the phone.' },
  { title: 'Lab result explanations', description: 'Walks patients through their lab results in plain language and recommends next steps based on your protocols.' },
  { title: 'Smart escalation', description: 'When a question requires human judgment, the AI flags it to the right team member with full context attached.' },
]

const chatbotMessages: ChatMessage[][] = [
  [
    { role: 'bot', text: "Hi Sarah! How are you feeling after your NAD+ infusion this week?", time: "2:14 PM" },
    { role: 'user', text: "Pretty good, but I've had a slight headache since yesterday.", time: "2:15 PM" },
    { role: 'bot', text: "That can be normal in the first few sessions. Are you staying hydrated?", time: "2:15 PM" },
    { role: 'user', text: "Yes, drinking plenty.", time: "2:16 PM" },
    { role: 'bot', text: "Headaches usually subside within 48 hours. I'll flag this for Dr. Martinez to review.", time: "2:16 PM" },
  ],
  [
    { role: 'user', text: "What time should I take my BPC-157 injection?", time: "10:02 AM" },
    { role: 'bot', text: "Based on Dr. Martinez's protocol, take it in the morning on an empty stomach, 30 minutes before breakfast.", time: "10:02 AM" },
    { role: 'user', text: "Can I mix it with my other peptides?", time: "10:03 AM" },
    { role: 'bot', text: "BPC-157 can be combined with TB-500 in the same syringe. I'd recommend keeping NAD+ separate.", time: "10:03 AM" },
    { role: 'user', text: "Got it, thanks!", time: "10:04 AM" },
  ],
  [
    { role: 'user', text: "I need to reschedule my appointment next Tuesday.", time: "3:21 PM" },
    { role: 'bot', text: "No problem. I see Dr. Martinez has openings on Wednesday at 10am or Thursday at 2pm. Which works?", time: "3:21 PM" },
    { role: 'user', text: "Wednesday at 10.", time: "3:22 PM" },
    { role: 'bot', text: "Done! You're confirmed for Wednesday at 10am with Dr. Martinez. I'll send a reminder 24 hours before.", time: "3:22 PM" },
  ],
  [
    { role: 'user', text: "I just got my lab results. What does my testosterone level mean?", time: "11:15 AM" },
    { role: 'bot', text: "Your total T came back at 685 ng/dL, which is in the optimal range for your age. Your free T is also healthy at 18.2 pg/mL.", time: "11:15 AM" },
    { role: 'user', text: "What about the liver enzymes?", time: "11:16 AM" },
    { role: 'bot', text: "ALT and AST are both normal. Dr. Martinez will review the full panel at your next visit.", time: "11:16 AM" },
  ],
  [
    { role: 'user', text: "I'm feeling really off today. Chest pressure and shortness of breath.", time: "4:07 PM" },
    { role: 'bot', text: "These symptoms need immediate attention. I'm flagging this to Dr. Martinez right now and connecting you to our on-call line.", time: "4:07 PM" },
    { role: 'bot', text: "If symptoms get worse before someone reaches you, please call 911 immediately.", time: "4:08 PM" },
    { role: 'user', text: "Okay, thank you.", time: "4:08 PM" },
  ],
]

const chatbotSummary = [
  { Icon: MessageSquare, title: 'Real Conversations', desc: 'Patient-grade dialogue' },
  { Icon: Shield, title: 'HIPAA Safe', desc: 'Compliant by design' },
  { Icon: Bell, title: 'Smart Escalation', desc: 'Hands off when needed' },
]

function HealthcareChatbotSection() {
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % chatbotTabs.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [activeTab])

  function switchTab(i: number) {
    if (i === activeTab) return
    setActiveTab(i)
  }

  return (
    <section style={{ background: '#0F0E0D' }} className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">

        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-14">

          {/* Left: label + heading */}
          <div data-animate="" className="flex-shrink-0 max-w-[400px]">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundImage: "url('/images/dot-image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.75)' }}>Healthcare AI</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Trained on your clinical workflows
            </h2>
          </div>

          {/* Right: 3 summary items */}
          <div data-animate="" className="flex flex-row items-stretch flex-shrink-0" style={{ transitionDelay: '80ms' }}>
            {chatbotSummary.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className="flex flex-col gap-2 flex-1"
                style={{
                  minWidth: '200px',
                  paddingLeft: i === 0 ? '0' : '20px',
                  paddingRight: i === chatbotSummary.length - 1 ? '0' : '20px',
                  borderLeft: i > 0 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                }}
              >
                <Icon size={16} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.5)' }} />
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.75)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-[35fr_65fr] gap-8 items-start">

          {/* Left: product info + tabs */}
          <div data-animate="" style={{ transitionDelay: '120ms' }}>
            <p className="text-xl font-semibold text-white">Conversational AI</p>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Your AI handles the routine so your team handles what matters most.
            </p>
            <div className="mt-4">
              <a
                href={DEMO_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-white rounded-full px-4 py-1.5 transition-colors"
                style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                Book a demo &#8250;
              </a>
            </div>

            {/* Tabs */}
            <style>{`
              @keyframes cbFillProgress {
                from { width: 0%; }
                to { width: 100%; }
              }
            `}</style>
            <div className="flex flex-col">
              {chatbotTabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => switchTab(i)}
                  className="w-full text-left py-4 transition-all duration-200 relative"
                >
                  <span
                    className="text-sm block"
                    style={{
                      fontWeight: activeTab === i ? 600 : 500,
                      color: activeTab === i ? '#ffffff' : 'rgba(255,255,255,0.4)',
                      transition: 'color 200ms ease',
                    }}
                  >
                    {tab.title}
                  </span>
                  <div
                    style={{
                      maxHeight: activeTab === i ? '200px' : '0px',
                      opacity: activeTab === i ? 1 : 0,
                      marginTop: activeTab === i ? '8px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 300ms ease, opacity 300ms ease, margin 300ms ease',
                    }}
                  >
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                      {tab.description}
                    </p>
                  </div>
                  {/* Progress line */}
                  <div className="absolute bottom-0 left-0 w-full" style={{ height: '2px', background: 'rgba(255,255,255,0.1)' }}>
                    {activeTab === i && (
                      <div
                        key={`cb-progress-${activeTab}`}
                        style={{
                          height: '100%',
                          background: 'rgba(255,255,255,0.8)',
                          animation: 'cbFillProgress 8s linear forwards',
                        }}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: background image + per-tab chatbot */}
          <div
            data-animate=""
            className="relative rounded-2xl overflow-hidden"
            style={{ height: '730px', transitionDelay: '160ms' }}
          >
            <Image src="/images/Ui-Card-Background3.jpg" alt="A2V2 clinical AI chatbot interface showing patient conversation workflows" fill sizes="(max-width: 768px) 100vw, 65vw" quality={100} unoptimized className="object-cover" loading="lazy" />
            <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.15)' }} />
            {chatbotMessages.map((msgs, i) => (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center p-6"
                style={{ opacity: activeTab === i ? 1 : 0, transition: 'opacity 300ms ease' }}
              >
                <ChatbotMockup botName="A2V2 Care Assistant" messages={msgs} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}


// ─── Section 6: FAQ ──────────────────────────────────────────────────────────

const faqs = [
  {
    q: 'What types of practices does A2V2 support?',
    a: 'Longevity, HRT, functional medicine, health optimization, and any practice with ongoing treatment protocols.',
  },
  {
    q: 'Is A2V2 HIPAA compliant?',
    a: 'Yes. BAA provided, AES-256 encryption, secured LLM access, and complete audit trails.',
  },
  {
    q: 'How long does implementation take?',
    a: 'Most practices go live in under 2 weeks with our dedicated implementation team.',
  },
  {
    q: 'Do I need to replace my EHR?',
    a: 'No. A2V2 sits on top of your existing stack with native integrations.',
  },
  {
    q: 'What does the free audit include?',
    a: 'A 30-minute review of patient retention, drop-off patterns, and a custom revenue projection.',
  },
]

function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section aria-label="Frequently Asked Questions" style={{ background: '#0F0E0D' }} className="py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12">
        <div data-animate="" className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white">Frequently asked questions</h2>
        </div>
        <div data-animate="" className="mx-auto" style={{ maxWidth: '700px', transitionDelay: '80ms' }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {faqs.map((item, i) => (
              <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                  aria-label={item.q}
                >
                  <span className="text-base font-medium text-white">{item.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      color: 'rgba(255,255,255,0.4)',
                      flexShrink: 0,
                      transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 300ms ease',
                    }}
                  />
                </button>
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: open === i ? '200px' : '0px',
                    transition: 'max-height 300ms ease',
                  }}
                >
                  <p className="pb-5 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function HomepageClient() {
  return (
    <main style={{ background: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>
      <ScrollAnimator />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <BenefitCardsSection />
      <HealthcareChatbotSection />
      <FeatureShowcaseSection />
      <PlatformFeaturesSection />
      <TrustBadges descriptionColor="rgba(255,255,255,0.75)" />
      <FAQSection />
      <CtaSection
        heading={
          <>
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>Your Patients.</span>
            <br />
            <span style={{ color: 'rgba(255,255,255,0.35)' }}>Engaged.</span>
            {' '}
            <span style={{ color: '#ffffff' }}>Every Day.</span>
          </>
        }
        subtitle="Automated clinical communication that keeps patients on protocol and revenue in the door."
        subtitleColor="rgba(255,255,255,0.75)"
        subtitleSize="text-base"
        subtitleMaxWidth="500px"
      />
      <Footer />
    </main>
  )
}
