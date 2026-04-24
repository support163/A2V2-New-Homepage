'use client'

import Image from 'next/image'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollAnimator from '@/components/ScrollAnimator'
import CtaSection from '@/app/Test-Website/components/CtaSection'
import { SIGN_IN_URL, DEMO_BOOKING_URL } from '@/lib/constants'

/* ─── Types ─── */

type ModelKey = 'annual' | 'monthly' | 'per-appointment' | 'medication'
type MedKey = 'TRT' | 'HRT' | 'NAD+' | 'Peptides'

/* ─── Constants ─── */

const gradientDot: React.CSSProperties = {
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundImage: "url('/images/dot-image.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  flexShrink: 0,
}

const TEAL = '#0D9488'
const BLUE = '#1D6FD6'
const CYAN = '#00C6D4'

const MODELS: { key: ModelKey; icon: string; label: string; tagline: string; accent: string }[] = [
  { key: 'annual',           icon: '◈', label: 'Annual Membership',    tagline: 'Flat yearly fee',          accent: '#1D6FD6' },
  { key: 'monthly',          icon: '◉', label: 'Monthly Subscription', tagline: 'Recurring monthly',        accent: '#3A8FEF' },
  { key: 'per-appointment',  icon: '◎', label: 'Per Appointment',      tagline: 'Per in-office visit',      accent: '#00C6D4' },
  { key: 'medication',       icon: '⬡', label: 'Medication Markup',    tagline: 'Markup on Rx and protocols', accent: '#7C5CFC' },
]

const MED_TYPES: Record<MedKey, { min: number; max: number; default: number }> = {
  TRT:      { min: 99,  max: 199, default: 149 },
  HRT:      { min: 149, max: 299, default: 199 },
  'NAD+':   { min: 299, max: 499, default: 349 },
  Peptides: { min: 199, max: 499, default: 299 },
}

/* ─── Helpers ─── */

function fmt$(n: number): string {
  return '$' + Math.round(n).toLocaleString()
}

/* ─── Slider ─── */

function RangeSlider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  accent,
  formatValue = (v) => String(v),
  note,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  onChange: (v: number) => void
  accent: string
  formatValue?: (v: number) => string
  note?: string
}) {
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100))

  return (
    <div>
      <div className="flex items-center justify-between" style={{ marginBottom: 8 }}>
        <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>{label}</span>
        <span className="text-sm font-semibold text-white">{formatValue(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-slider w-full"
        style={{
          '--accent': accent,
          background: `linear-gradient(to right, ${accent} 0%, ${accent} ${pct}%, rgba(255,255,255,0.1) ${pct}%, rgba(255,255,255,0.1) 100%)`,
        } as React.CSSProperties}
      />
      <div className="flex justify-between" style={{ marginTop: 4 }}>
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 }}>{formatValue(min)}</span>
        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 }}>{formatValue(max)}</span>
      </div>
      {note && <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{note}</p>}
    </div>
  )
}

/* ─── Summary Bar ─── */

function SummaryBar({ label, value, detail }: { label: string; value: number; detail: string }) {
  return (
    <div
      className="rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
      style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <span className="text-sm font-semibold text-white">{label}: {fmt$(value)} / patient / year</span>
      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{detail}</span>
    </div>
  )
}

/* ─── Page ─── */

export default function RoiCalculatorPage() {
  /* Revenue model */
  const [selectedModel, setSelectedModel] = useState<ModelKey>('monthly')

  /* Annual */
  const [annualFee, setAnnualFee] = useState(3000)

  /* Monthly */
  const [monthlyFee, setMonthlyFee] = useState(299)

  /* Per appointment */
  const [apptFee, setApptFee] = useState(299)
  const [visitsPerYear, setVisitsPerYear] = useState(6)

  /* Medication markup */
  const [selectedMed, setSelectedMed] = useState<MedKey>('TRT')
  const [markup, setMarkup] = useState(MED_TYPES.TRT.default)
  const [refillsPerYear, setRefillsPerYear] = useState(10)

  /* Conversion engine */
  const [leads, setLeads] = useState(100)
  const [convCurrent, setConvCurrent] = useState(12)
  const [convTarget, setConvTarget] = useState(34)

  /* Retention engine */
  const [patients, setPatients] = useState(200)
  const [dropCurrent, setDropCurrent] = useState(73)
  const [dropTarget, setDropTarget] = useState(35)

  /* LTV */
  const getLTV = (): number => {
    switch (selectedModel) {
      case 'annual':          return annualFee
      case 'monthly':         return monthlyFee * 12
      case 'per-appointment': return apptFee * visitsPerYear
      case 'medication':      return markup * refillsPerYear
    }
  }
  const ltv = getLTV()
  const modelAccent = MODELS.find(m => m.key === selectedModel)!.accent

  /* Conversion calculations */
  const newPatientsCurrent  = Math.round((leads * convCurrent) / 100)
  const newPatientsTarget   = Math.round((leads * convTarget) / 100)
  const newPatientsGained   = Math.max(0, newPatientsTarget - newPatientsCurrent)
  const convRevenueAnnual   = newPatientsGained * 12 * ltv

  /* Retention calculations */
  const dropDiff            = Math.max(0, dropCurrent - dropTarget)
  const retained            = Math.round(patients * dropDiff / 100)
  const retentionRevenue    = retained * ltv

  /* Totals */
  const totalAnnual  = convRevenueAnnual + retentionRevenue
  const totalMonthly = Math.round(totalAnnual / 12)
  const payback      = totalAnnual >= 500000 ? '30 days' : '60 days'

  /* Bar percentages */
  const convPct = totalAnnual > 0 ? Math.round((convRevenueAnnual / totalAnnual) * 100) : 50
  const retPct  = 100 - convPct

  return (
    <main style={{ background: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>

      {/* Slider styles */}
      <style>{`
        .roi-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          border-radius: 2px;
          outline: none;
          cursor: pointer;
          display: block;
        }
        .roi-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--accent, #1D6FD6);
          border: 2px solid #ffffff;
          cursor: pointer;
          margin-top: -6px;
        }
        .roi-slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--accent, #1D6FD6);
          border: 2px solid #ffffff;
          cursor: pointer;
          border: none;
        }
        .roi-slider::-webkit-slider-runnable-track {
          height: 4px;
          border-radius: 2px;
        }
        .roi-slider::-moz-range-track {
          height: 4px;
          border-radius: 2px;
          background: transparent;
        }
        @media (max-width: 880px) {
          .roi-two-col { grid-template-columns: 1fr !important; }
          .roi-four-col { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <ScrollAnimator />
      <Navbar />

      {/* ─── Section 1: Hero ─── */}
      <section
        className="relative flex items-center justify-center overflow-hidden -mt-[72px]"
        style={{ background: '#0F0E0D', height: '70vh' }}
      >
        <Image
          src="/images/hero-background-Image9.jpg"
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
            <span className="text-sm text-white">ROI Calculator</span>
          </div>

          <h1
            className="text-3xl md:text-5xl text-white tracking-tight text-center"
            style={{ fontWeight: 600, maxWidth: '720px', lineHeight: 1.15 }}
          >
            See what A2V2 could recover for your clinic
          </h1>

          <p
            className="text-lg mt-4 text-center"
            style={{ color: 'rgba(255,255,255,0.95)', maxWidth: '580px' }}
          >
            A2V2 grows clinic revenue on two fronts simultaneously. Converting more prospects into patients, and keeping existing patients engaged long-term.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SIGN_IN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold transition-opacity hover:opacity-90"
              style={{ background: '#ffffff', color: '#0F0E0D' }}
            >
              Try For Free
            </a>
            <a
              href={DEMO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold transition-colors"
              style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#ffffff',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Revenue Model Selector ─── */}
      <section style={{ background: '#0F0E0D' }} className="pt-20 pb-4">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">

          <div data-animate="" className="mb-8">
            <h2 className="text-2xl text-white" style={{ fontWeight: 600 }}>Choose your revenue model</h2>
            <p className="mt-2 text-base" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Select how your clinic charges patients. This value is applied to both conversion and retention calculations below.
            </p>
          </div>

          {/* Model buttons */}
          <div
            data-animate=""
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
            style={{ transitionDelay: '80ms' }}
          >
            {MODELS.map((m) => {
              const active = selectedModel === m.key
              return (
                <button
                  key={m.key}
                  onClick={() => setSelectedModel(m.key)}
                  className="text-left rounded-xl p-4 transition-all duration-200"
                  style={{
                    background: active ? m.accent : 'rgba(255,255,255,0.04)',
                    border: `1px solid ${active ? m.accent : 'rgba(255,255,255,0.08)'}`,
                    boxShadow: active ? `0 0 24px ${m.accent}40` : 'none',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => { if (!active) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)' }}
                  onMouseLeave={(e) => { if (!active) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
                >
                  <div className="text-2xl mb-2" style={{ color: active ? '#ffffff' : 'rgba(255,255,255,0.8)', lineHeight: 1 }}>
                    {m.icon}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: active ? '#ffffff' : 'rgba(255,255,255,0.8)' }}>
                    {m.label}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: active ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.5)' }}>
                    {m.tagline}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Model config card */}
          <div
            data-animate=""
            className="rounded-2xl p-8"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              transitionDelay: '160ms',
            }}
          >
            {/* Annual */}
            {selectedModel === 'annual' && (
              <div className="flex flex-col gap-6">
                <RangeSlider
                  label="Annual Membership Fee per Patient"
                  value={annualFee}
                  min={500}
                  max={10000}
                  step={100}
                  onChange={setAnnualFee}
                  accent={modelAccent}
                  formatValue={fmt$}
                />
                <SummaryBar
                  label="Annual patient value"
                  value={annualFee}
                  detail={`${fmt$(annualFee)} flat fee per year`}
                />
              </div>
            )}

            {/* Monthly */}
            {selectedModel === 'monthly' && (
              <div className="flex flex-col gap-6">
                <RangeSlider
                  label="Monthly Subscription Fee per Patient"
                  value={monthlyFee}
                  min={99}
                  max={999}
                  step={10}
                  onChange={setMonthlyFee}
                  accent={modelAccent}
                  formatValue={fmt$}
                />
                <div
                  className="rounded-lg p-3 text-sm"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>Annualised: </span>
                  <span className="font-semibold text-white">{fmt$(monthlyFee)} x 12 = {fmt$(monthlyFee * 12)}</span>
                </div>
                <SummaryBar
                  label="Annual patient value"
                  value={monthlyFee * 12}
                  detail={`${fmt$(monthlyFee)}/month x 12 months`}
                />
              </div>
            )}

            {/* Per appointment */}
            {selectedModel === 'per-appointment' && (
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <RangeSlider
                    label="Fee per Appointment"
                    value={apptFee}
                    min={99}
                    max={999}
                    step={10}
                    onChange={setApptFee}
                    accent={modelAccent}
                    formatValue={fmt$}
                  />
                  <RangeSlider
                    label="Avg. Visits / Year"
                    value={visitsPerYear}
                    min={1}
                    max={24}
                    step={1}
                    onChange={setVisitsPerYear}
                    accent={modelAccent}
                    formatValue={(v) => `${v} visits`}
                  />
                </div>
                <div
                  className="rounded-lg p-3 text-sm"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>Annualised: </span>
                  <span className="font-semibold text-white">
                    {fmt$(apptFee)} x {visitsPerYear} visits = {fmt$(apptFee * visitsPerYear)}
                  </span>
                </div>
                <SummaryBar
                  label="Annual patient value"
                  value={apptFee * visitsPerYear}
                  detail={`${fmt$(apptFee)} x ${visitsPerYear} visits/year`}
                />
              </div>
            )}

            {/* Medication markup */}
            {selectedModel === 'medication' && (
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.75)' }}>Medication type</p>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(MED_TYPES) as MedKey[]).map((med) => (
                      <button
                        key={med}
                        onClick={() => {
                          setSelectedMed(med)
                          setMarkup(MED_TYPES[med].default)
                        }}
                        className="rounded-full px-4 py-1.5 text-sm font-medium transition-colors"
                        style={{
                          background: selectedMed === med ? modelAccent : 'rgba(255,255,255,0.08)',
                          color: '#ffffff',
                          border: selectedMed === med ? `1px solid ${modelAccent}` : '1px solid rgba(255,255,255,0.1)',
                          cursor: 'pointer',
                        }}
                      >
                        {med}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <RangeSlider
                    label="Markup per Prescription"
                    value={Math.max(MED_TYPES[selectedMed].min, Math.min(MED_TYPES[selectedMed].max, markup))}
                    min={MED_TYPES[selectedMed].min}
                    max={MED_TYPES[selectedMed].max}
                    step={10}
                    onChange={setMarkup}
                    accent={modelAccent}
                    formatValue={fmt$}
                  />
                  <RangeSlider
                    label="Refills per Patient / Year"
                    value={refillsPerYear}
                    min={1}
                    max={24}
                    step={1}
                    onChange={setRefillsPerYear}
                    accent={modelAccent}
                    formatValue={(v) => `${v} refills`}
                  />
                </div>
                <div
                  className="rounded-lg p-3 text-sm"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.5)' }}>Annualised: </span>
                  <span className="font-semibold text-white">
                    {fmt$(markup)} x {refillsPerYear} refills = {fmt$(markup * refillsPerYear)}
                  </span>
                </div>
                <SummaryBar
                  label="Annual patient value"
                  value={markup * refillsPerYear}
                  detail={`${fmt$(markup)} markup x ${refillsPerYear} refills/year`}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Two Engines ─── */}
      <section style={{ background: '#0F0E0D' }} className="pt-4 pb-4">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div
            className="roi-two-col grid gap-4"
            style={{ gridTemplateColumns: '1fr 1fr' }}
          >

            {/* New Patient Conversion */}
            <div
              data-animate=""
              className="rounded-2xl p-8 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(13,148,136,0.2)' }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ width: 36, height: 36, background: 'rgba(13,148,136,0.15)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3l2.5 5 5.5.8-4 3.9.95 5.5L12 15.5l-4.95 2.7.95-5.5L4 8.8l5.5-.8z" fill={TEAL} />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#FFFFFF' }}>New Patient Conversion</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>Powered by A2V2 AI engagement</p>
                </div>
              </div>

              <div
                className="rounded-xl p-4 mb-6"
                style={{ background: 'rgba(13,148,136,0.06)', border: '1px solid rgba(13,148,136,0.15)' }}
              >
                <p className="text-sm font-semibold mb-2" style={{ color: TEAL }}>Why AI-powered engagement changes conversion</p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  A prospect visits your site and instantly engages with your AI agent. It answers their clinical questions, explains your protocols, and captures their contact info. By the time they book a consultation, they already understand your approach and are ready to commit.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['24/7 AI lead engagement', 'Clinical Q&A automation', 'Contact capture & CRM', 'Pre-qualified appointments'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs rounded-full px-3 py-1"
                      style={{ background: 'rgba(13,148,136,0.15)', color: TEAL, border: '1px solid rgba(13,148,136,0.2)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5 flex-1">
                <RangeSlider
                  label="Monthly Prospects / Leads"
                  value={leads}
                  min={10}
                  max={1000}
                  step={10}
                  onChange={setLeads}
                  accent={TEAL}
                  formatValue={(v) => v.toLocaleString()}
                />
                <RangeSlider
                  label="Current Conversion Rate"
                  value={convCurrent}
                  min={1}
                  max={40}
                  step={1}
                  onChange={setConvCurrent}
                  accent={TEAL}
                  formatValue={(v) => `${v}%`}
                  note={`Current: ~${newPatientsCurrent} new patients / month`}
                />
                <RangeSlider
                  label="Conversion Rate with A2V2"
                  value={convTarget}
                  min={5}
                  max={60}
                  step={1}
                  onChange={setConvTarget}
                  accent={TEAL}
                  formatValue={(v) => `${v}%`}
                  note={`Projected: ~${newPatientsTarget} new patients / month`}
                />
              </div>

              <div
                className="mt-6 rounded-lg p-4 grid grid-cols-2 gap-4"
                style={{ background: 'rgba(13,148,136,0.08)', border: '1px solid rgba(13,148,136,0.15)' }}
              >
                <div>
                  <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Additional new patients / year</p>
                  <p className="text-2xl font-bold" style={{ color: TEAL }}>+{newPatientsGained * 12}</p>
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Conversion revenue / year</p>
                  <p className="text-2xl font-bold" style={{ color: TEAL }}>{fmt$(convRevenueAnnual)}</p>
                </div>
              </div>
            </div>

            {/* Patient Retention */}
            <div
              data-animate=""
              className="rounded-2xl p-8 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1.5px solid rgba(29,111,214,0.2)', transitionDelay: '80ms' }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ width: 36, height: 36, background: 'rgba(29,111,214,0.15)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke={BLUE} strokeWidth="1.5" />
                    <path d="M8 12l3 3 5-6" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#FFFFFF' }}>Patient Retention</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>AI re-engagement and protocol adherence</p>
                </div>
              </div>

              <div
                className="rounded-xl p-4 mb-6"
                style={{ background: 'rgba(29,111,214,0.06)', border: '1px solid rgba(29,111,214,0.15)' }}
              >
                <p className="text-sm font-semibold mb-2" style={{ color: BLUE }}>Once they're in -- keeping them</p>
                <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  A2V2 monitors every patient's engagement, protocol adherence, and biomarker trends. When drop-off risk is detected the system triggers personalised re-engagement automatically.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Automated follow-up sequences', 'Protocol adherence monitoring', 'Biomarker trend tracking', 'Drop-off risk scoring'].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs rounded-full px-3 py-1"
                      style={{ background: 'rgba(29,111,214,0.15)', color: BLUE, border: '1px solid rgba(29,111,214,0.2)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-5 flex-1">
                <RangeSlider
                  label="Active Patients"
                  value={patients}
                  min={50}
                  max={2000}
                  step={10}
                  onChange={setPatients}
                  accent={BLUE}
                  formatValue={(v) => v.toLocaleString()}
                />
                <RangeSlider
                  label="Current Annual Drop-Off Rate"
                  value={dropCurrent}
                  min={20}
                  max={90}
                  step={1}
                  onChange={setDropCurrent}
                  accent={BLUE}
                  formatValue={(v) => `${v}%`}
                  note={`Currently losing ~${Math.round(patients * dropCurrent / 100)} patients / year`}
                />
                <RangeSlider
                  label="Target Drop-Off Rate with A2V2"
                  value={dropTarget}
                  min={10}
                  max={50}
                  step={1}
                  onChange={setDropTarget}
                  accent={BLUE}
                  formatValue={(v) => `${v}%`}
                  note={`Designed to recover ~${retained} patients / year`}
                />
              </div>

              <div
                className="mt-6 rounded-lg p-4 grid grid-cols-2 gap-4"
                style={{ background: 'rgba(29,111,214,0.08)', border: '1px solid rgba(29,111,214,0.15)' }}
              >
                <div>
                  <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Patients retained / year</p>
                  <p className="text-2xl font-bold" style={{ color: BLUE }}>+{retained}</p>
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Retention revenue / year</p>
                  <p className="text-2xl font-bold" style={{ color: BLUE }}>{fmt$(retentionRevenue)}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Section 4: Total Results ─── */}
      <section style={{ background: '#0F0E0D' }} className="pt-4 pb-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12">
          <div
            data-animate=""
            className="rounded-2xl p-10"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#FFFFFF' }}>
                Total Annual Revenue Impact
              </p>

              <p
                className="font-semibold tracking-tight text-white"
                style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1 }}
              >
                {fmt$(totalAnnual)}
              </p>
              <p className="mt-2 mb-8" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>
                additional revenue per year with A2V2
              </p>

              {/* Revenue composition bar */}
              <div className="mb-2">
                <div
                  className="flex overflow-hidden rounded-full"
                  style={{ height: 12, background: 'rgba(255,255,255,0.08)' }}
                >
                  <div style={{ width: `${convPct}%`, background: TEAL, transition: 'width 400ms ease' }} />
                  <div style={{ flex: 1, background: BLUE }} />
                </div>
              </div>
              <div className="flex items-center gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: TEAL }} />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    Conversion {fmt$(convRevenueAnnual)} ({convPct}%)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: BLUE }} />
                  <span className="text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    Retention {fmt$(retentionRevenue)} ({retPct}%)
                  </span>
                </div>
              </div>

              {/* Stat pills */}
              <div
                className="roi-four-col grid gap-3 mb-8"
                style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
              >
                {[
                  { label: 'Monthly Impact',          value: fmt$(totalMonthly) },
                  { label: 'Platform Payback',         value: payback },
                  { label: 'New Patients / Year',      value: `+${newPatientsGained * 12}` },
                  { label: 'Patients Retained / Year', value: `+${retained}` },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="rounded-xl p-4"
                    style={{ background: 'rgba(255,255,255,0.06)' }}
                  >
                    <p className="text-xs mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</p>
                    <p className="text-xl font-bold text-white">{value}</p>
                  </div>
                ))}
              </div>

              {/* CTA row */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={DEMO_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg px-6 py-3 font-bold text-sm transition-opacity hover:opacity-90"
                  style={{ background: '#FFFFFF', color: '#0F0E0D' }}
                >
                  See this live for your clinic &rsaquo;
                </a>
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Free 30-min session. No obligation.
                </span>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <p
            className="text-xs text-center mt-4 mx-auto"
            style={{ color: 'rgba(255,255,255,0.3)', maxWidth: '600px' }}
          >
            Revenue projections are estimates based on the inputs you provide. Actual results may vary based on clinic operations, market conditions, and implementation.
          </p>
        </div>
      </section>

      {/* ─── Section 5: CTA ─── */}
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
        subtitleMaxWidth="550px"
      />

      <Footer />
    </main>
  )
}
