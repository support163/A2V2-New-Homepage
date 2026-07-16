'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import {
  Home, Settings, Database, Users,
  Download, GitMerge, Layers,
  Stethoscope, User, FileSearch,
  Upload, FileUp, CheckCircle2,
  type LucideIcon,
} from 'lucide-react'
import TestHomepage2Navbar from '@/components/TestHomepage2Navbar'
import TestHomepage2Footer from '@/components/TestHomepage2Footer'
import { DEMO_BOOKING_URL, SIGN_IN_URL } from '@/lib/constants'

const H = "'Helvetica Neue', Helvetica, Arial, sans-serif"
const I = "'Inter', sans-serif"

const btnBlack: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  background: '#0F0E0D', color: '#ffffff', fontSize: 14, fontWeight: 500,
  fontFamily: I, padding: '10px 20px', borderRadius: 8, textDecoration: 'none',
  letterSpacing: '-0.2px', transition: 'opacity 200ms ease',
}

const btnGhost: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  background: 'transparent', color: '#0F0E0D', fontSize: 14, fontWeight: 500,
  fontFamily: I, padding: '10px 20px', borderRadius: 8, border: '1px solid #0F0E0D',
  textDecoration: 'none', letterSpacing: '-0.2px', transition: 'opacity 200ms ease',
}

function FadeIn({ children, delay = 0, className = '', style = {} }: {
  children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties
}) {
  const [v, setV] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <div ref={ref} className={className} style={{
      ...style,
      opacity: v ? 1 : 0,
      transform: v ? 'none' : 'translateY(20px)',
      transition: `opacity 600ms ease ${delay}ms, transform 600ms ease ${delay}ms`,
    }}>
      {children}
    </div>
  )
}

function BadgeSVG({ label }: { label: string }) {
  const cx = 35, cy = 35, r = 34, ringR = 29, arcR = 25
  const arcCirc = 2 * Math.PI * arcR
  const arcLen = arcCirc * 0.22
  const gapLen = arcCirc * 0.03
  return (
    <svg width={70} height={70} viewBox="0 0 70 70" fill="none">
      <circle cx={cx} cy={cy} r={r} fill="#0F0E0D" />
      <circle cx={cx} cy={cy} r={ringR} stroke="rgba(255,255,255,0.35)" strokeWidth={1} fill="none" />
      <circle cx={cx} cy={cy} r={arcR} stroke="rgba(255,255,255,0.55)" strokeWidth={1} fill="none"
        strokeDasharray={`${arcLen} ${gapLen}`} strokeLinecap="round"
        transform={`rotate(-90 ${cx} ${cy})`} />
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fill="#ffffff"
        fontSize={label.length > 4 ? 10 : 11} fontWeight={500} fontFamily={I} letterSpacing="0.5">
        {label}
      </text>
    </svg>
  )
}

const PILLARS = [
  { badge: 'HIPAA',   title: 'HIPAA Compliant',    desc: 'Built for healthcare from day one. BAA provided on every plan, with full audit trails.' },
  { badge: 'AES-256', title: 'AES-256 Encryption', desc: 'All data encrypted at rest and in transit using industry-standard AES-256 and TLS 1.3.' },
  { badge: 'BAA',     title: 'Secured LLM Access',  desc: 'AI runs under a Business Associate Agreement. Your data is never used to train models.' },
  { badge: 'U.S.',    title: 'U.S. Data Centers',   desc: 'All patient data is stored in U.S.-based data centers with complete access controls.' },
]

type SidebarItem = { Icon: LucideIcon; active: boolean }

const SIDEBAR_EHR: SidebarItem[] = [
  { Icon: Home,     active: false },
  { Icon: Database, active: true  },
  { Icon: Users,    active: false },
  { Icon: Settings, active: false },
]

const SIDEBAR_PATIENTS: SidebarItem[] = [
  { Icon: Home,     active: false },
  { Icon: Users,    active: true  },
  { Icon: Database, active: false },
  { Icon: Settings, active: false },
]

function DashboardShell({
  children, sidebar, height = 540,
}: {
  children: React.ReactNode
  sidebar: SidebarItem[]
  height?: number
}) {
  return (
    <div className="relative overflow-hidden" style={{ height, width: '100%' }}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/Background-website-3.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      />
      <div className="flex" style={{ position: 'absolute', top: 109, left: 149, right: -13, bottom: 0 }}>
        {/* Sidebar */}
        <div style={{
          width: 56, flexShrink: 0, background: '#F5F4F2',
          borderRight: '1px solid rgba(0,0,0,0.06)', borderRadius: '8px 0 0 0',
          padding: '14px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
        }}>
          <div style={{ marginBottom: 14 }}>
            <Image src="/favicon.svg" alt="A2V2" width={22} height={22} style={{ width: 22, height: 22 }} />
          </div>
          {sidebar.map(({ Icon, active }, i) => (
            <div key={i} style={{
              width: 32, height: 32, borderRadius: 7,
              background: active ? '#0F0E0D' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Icon size={14} color={active ? '#ffffff' : 'rgba(0,0,0,0.32)'} />
            </div>
          ))}
        </div>
        {/* Main */}
        <div style={{
          flex: 1, background: '#FAFAF8', borderRadius: '0 8px 0 0',
          overflow: 'hidden', display: 'flex', flexDirection: 'column',
        }}>
          {children}
        </div>
      </div>
    </div>
  )
}

/* ── HERO DASHBOARD — unified patient record view ── */
function UnifiedPatientDashboard() {
  const HISTORY = [
    { label: 'HRT Protocol Started', date: 'Mar 2026', source: 'EHR Import' },
    { label: 'Comprehensive Metabolic Panel', date: 'Jan 2026', source: 'EHR Import' },
    { label: 'Initial Consultation', date: 'Nov 2025', source: 'EHR Import' },
  ]
  const PARAMS = ['Estrogen: 68 pg/mL', 'Progesterone: 1.2 ng/mL', 'TSH: 2.1 mIU/L']
  return (
    <DashboardShell sidebar={SIDEBAR_PATIENTS} height={560}>
      {/* Topbar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#E8E6E3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 9, fontWeight: 600, color: '#68655E', fontFamily: I }}>SM</span>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Sarah Mitchell</div>
            <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>HRT Protocol · Est. patient since Nov 2025</div>
          </div>
        </div>
        <span style={{ fontSize: 9, background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
          EHR Imported
        </span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Clinical history */}
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 7 }}>Clinical History</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {HISTORY.map((h) => (
              <div key={h.label} style={{
                background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 8, padding: '8px 12px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div>
                  <div style={{ fontSize: 10, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{h.label}</div>
                  <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I, marginTop: 1 }}>{h.date}</div>
                </div>
                <span style={{ fontSize: 8, background: '#F5F4F2', color: '#68655E', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 999, padding: '2px 7px', fontFamily: I, fontWeight: 500, flexShrink: 0 }}>
                  {h.source}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Health parameters */}
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 7 }}>Health Parameters</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {PARAMS.map((p) => (
              <span key={p} style={{ fontSize: 9, background: '#FFFFFF', color: '#0F0E0D', border: '1px solid rgba(0,0,0,0.09)', borderRadius: 6, padding: '4px 9px', fontFamily: I, fontWeight: 500 }}>
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* Documents */}
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 7 }}>Documents</div>
          <div style={{ background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)', borderRadius: 8, padding: '9px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Patient Records Export.pdf</div>
            <span style={{ fontSize: 8, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 999, padding: '2px 7px', fontFamily: I, fontWeight: 500 }}>Imported</span>
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── SECTION 2 DASHBOARD — data mapping view ── */
function DataMappingDashboard() {
  const ROWS = [
    { source: 'Patient Name',    mapped: 'Name',             status: 'Mapped', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0' },
    { source: 'Date of Birth',   mapped: 'DOB',              status: 'Mapped', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0' },
    { source: 'Diagnosis List',  mapped: 'Clinical History', status: 'Mapped', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0' },
    { source: 'Medication List', mapped: 'Medications',      status: 'Mapped', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0' },
    { source: 'Visit Notes',     mapped: 'Provider Notes',   status: 'Mapped', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0' },
  ]
  return (
    <DashboardShell sidebar={SIDEBAR_EHR} height={540}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Data Import</span>
        <span style={{ fontSize: 9, background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
          5 fields mapped
        </span>
      </div>

      <div style={{ padding: '10px 16px 6px', borderBottom: '1px solid rgba(0,0,0,0.05)', flexShrink: 0 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto', gap: 6, alignItems: 'center' }}>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, textTransform: 'uppercase', letterSpacing: '0.3px' }}>EHR Field</div>
          <div />
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, textTransform: 'uppercase', letterSpacing: '0.3px' }}>A2V2 Field</div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, textTransform: 'uppercase', letterSpacing: '0.3px' }}>Status</div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: 5 }}>
        {ROWS.map((r) => (
          <div key={r.source} style={{
            background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
            borderRadius: 8, padding: '8px 10px',
            display: 'grid', gridTemplateColumns: '1fr 14px 1fr auto', gap: 6, alignItems: 'center',
          }}>
            <span style={{ fontSize: 10, fontWeight: 500, color: '#0F0E0D', fontFamily: I }}>{r.source}</span>
            <span style={{ fontSize: 9, color: '#9A9590', fontFamily: I, textAlign: 'center' }}>&#8594;</span>
            <span style={{ fontSize: 10, fontWeight: 500, color: '#0F0E0D', fontFamily: I }}>{r.mapped}</span>
            <span style={{ fontSize: 9, background: r.statusBg, color: r.statusFg, border: `1px solid ${r.statusBorder}`, borderRadius: 999, padding: '2px 7px', fontFamily: I, fontWeight: 500, whiteSpace: 'nowrap' }}>
              {r.status}
            </span>
          </div>
        ))}
      </div>
    </DashboardShell>
  )
}

/* ── SECTION 3 DASHBOARD — provider review view (reversed) ── */
function ProviderReviewDashboard() {
  const SECTIONS = [
    {
      label: 'Clinical History',
      items: [
        { name: 'HRT Protocol Started', detail: 'Mar 2026 · Imported from EHR' },
        { name: 'Metabolic Panel', detail: 'Jan 2026 · Patient uploaded' },
      ],
    },
    {
      label: 'Active Medications',
      items: [
        { name: 'Estradiol 1mg', detail: 'Daily · Since Mar 2026' },
        { name: 'Progesterone 100mg', detail: 'Daily · Since Mar 2026' },
      ],
    },
  ]
  return (
    <DashboardShell sidebar={SIDEBAR_PATIENTS} height={540}>
      {/* Patient header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#E0EFF9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontSize: 9, fontWeight: 600, color: '#2563EB', fontFamily: I }}>JR</span>
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>James Reyes</div>
            <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>NAD+ Protocol · Patient since Jan 2026</div>
          </div>
        </div>
        <span style={{ fontSize: 9, background: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>Active</span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        {SECTIONS.map((s) => (
          <div key={s.label}>
            <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 7 }}>{s.label}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {s.items.map((item) => (
                <div key={item.name} style={{
                  background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
                  borderRadius: 8, padding: '9px 12px',
                }}>
                  <div style={{ fontSize: 10, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{item.name}</div>
                  <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I, marginTop: 2 }}>{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Documents row */}
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 7 }}>Documents</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {[
              { name: 'CBC Results - May 2026.pdf',      tag: 'Patient Upload' },
              { name: 'Patient Records Export.pdf',       tag: 'EHR Import'    },
            ].map((d) => (
              <div key={d.name} style={{
                background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 8, padding: '8px 12px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span style={{ fontSize: 10, fontWeight: 500, color: '#0F0E0D', fontFamily: I }}>{d.name}</span>
                <span style={{ fontSize: 8, background: '#F5F4F2', color: '#68655E', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 999, padding: '2px 7px', fontFamily: I, fontWeight: 500, flexShrink: 0 }}>{d.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── SECTION 4 DASHBOARD — lab upload extraction ── */
function LabUploadDashboard() {
  const FIELDS = [
    { name: 'WBC',         value: '6.2 K/uL',  status: 'Extracted', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0' },
    { name: 'Hemoglobin',  value: '13.8 g/dL', status: 'Extracted', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0' },
    { name: 'Platelets',   value: '245 K/uL',  status: 'Extracted', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0' },
    { name: 'Glucose',     value: '94 mg/dL',  status: 'Extracted', statusBg: '#F0FDF4', statusFg: '#16A34A', statusBorder: '#BBF7D0' },
  ]
  return (
    <DashboardShell sidebar={SIDEBAR_PATIENTS} height={540}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '10px 24px 10px 16px', borderBottom: '1px solid rgba(0,0,0,0.06)', flexShrink: 0,
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>Lab Results Upload</span>
        <span style={{ fontSize: 9, background: '#FFF7ED', color: '#EA580C', border: '1px solid #FED7AA', borderRadius: 999, padding: '2px 8px', fontFamily: I, fontWeight: 500 }}>
          Pending review
        </span>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {/* Uploaded file */}
        <div style={{
          background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
          borderRadius: 9, padding: '11px 14px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>CBC Results - Jun 2026.pdf</span>
            <span style={{ fontSize: 9, background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', borderRadius: 999, padding: '2px 7px', fontFamily: I, fontWeight: 500 }}>Uploaded</span>
          </div>
          <div style={{ fontSize: 9, color: '#9A9590', fontFamily: I }}>Maria Chen &middot; Uploaded Jul 14, 2026</div>
        </div>

        {/* Extracted fields */}
        <div>
          <div style={{ fontSize: 9, fontWeight: 600, color: '#9A9590', fontFamily: I, letterSpacing: '0.3px', textTransform: 'uppercase', marginBottom: 7 }}>Extracted fields</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
            {FIELDS.map((f) => (
              <div key={f.name} style={{
                background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.07)',
                borderRadius: 8, padding: '8px 12px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <CheckCircle2 size={11} color="#16A34A" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: 10, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{f.name}</span>
                  <span style={{ fontSize: 10, color: '#68655E', fontFamily: I }}>{f.value}</span>
                </div>
                <span style={{ fontSize: 9, background: f.statusBg, color: f.statusFg, border: `1px solid ${f.statusBorder}`, borderRadius: 999, padding: '2px 7px', fontFamily: I, fontWeight: 500 }}>
                  {f.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Review notice */}
        <div style={{
          background: '#FFF7ED', border: '1px solid #FED7AA',
          borderRadius: 9, padding: '10px 12px',
          display: 'flex', alignItems: 'flex-start', gap: 8,
        }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#EA580C', flexShrink: 0, marginTop: 5 }} />
          <p style={{ fontSize: 10, color: '#92400E', fontFamily: I, lineHeight: 1.5, margin: 0 }}>
            Extracted data is a draft. Your team reviews and confirms before it saves to the record.
          </p>
        </div>
      </div>
    </DashboardShell>
  )
}

/* ── FEATURE POINT ── */
function FeaturePoint({ Icon, title, desc }: { Icon: LucideIcon; title: string; desc: string }) {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{ width: 36, height: 36, borderRadius: 8, background: '#F5F4F2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={16} color="#0F0E0D" />
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600, color: '#0F0E0D', fontFamily: I }}>{title}</div>
        <div style={{ fontSize: 14, color: '#68655E', fontFamily: I, marginTop: 3, lineHeight: 1.5 }}>{desc}</div>
      </div>
    </div>
  )
}

/* ── MAIN PAGE ── */
export default function EhrDataPage() {
  return (
    <main style={{ background: '#ffffff', fontFamily: H }}>
      <style>{`
        @media (max-width: 880px) {
          .ehr-hero-row   { flex-direction: column !important; gap: 28px !important; }
          .ehr-hero-right { padding-left: 0 !important; }
          .ehr-hero-dash  { display: none !important; }
          .ehr-feat-row   { flex-direction: column !important; gap: 40px !important; }
          .ehr-feat-col   { flex: 0 0 auto !important; width: 100% !important; }
          .ehr-rev-row    { flex-direction: column !important; gap: 40px !important; }
          .ehr-rev-text   { order: 1 !important; }
          .ehr-rev-dash   { order: 2 !important; }
          .ehr-pillars    { flex-direction: column !important; }
          .ehr-pillar     { border-right: none !important; border-bottom: 1px solid rgba(0,0,0,0.08) !important; }
          .ehr-pillar:last-child { border-bottom: none !important; }
        }
      `}</style>

      <TestHomepage2Navbar />

      {/* ── SECTION 1: HERO ── */}
      <section style={{ background: '#ffffff', paddingTop: 128, paddingBottom: 80 }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <FadeIn>
            <div className="ehr-hero-row" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <div style={{ flex: '0 0 55%' }}>
                <h1
                  className="font-normal leading-[1.05]"
                  style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#0F0E0D', fontFamily: H, maxWidth: 640 }}
                >
                  Your patient data, brought together
                </h1>
              </div>
              <div className="ehr-hero-right" style={{ flex: '0 0 45%', paddingLeft: 'clamp(0px, 8vw, 128px)' }}>
                <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 470 }}>
                  A2V2 pulls your existing EHR and EMR data and maps it into your patient records, so your team and your patients can see the full picture in one place. All inside HIPAA-compliant infrastructure.
                </p>
                <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
                  <a
                    href={DEMO_BOOKING_URL}
                    style={btnBlack}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Book a Demo
                  </a>
                  <a
                    href={SIGN_IN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={btnGhost}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120} className="ehr-hero-dash" style={{ marginTop: 64 }}>
            <UnifiedPatientDashboard />
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 2: BRING YOUR DATA IN ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="ehr-feat-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            <FadeIn className="ehr-feat-col" style={{ flex: '0 0 38%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Stop working across disconnected systems
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Your patient&apos;s history should not live in one system while their conversations live in another. A2V2 brings your EHR and EMR data in and maps it to your patient records.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <FeaturePoint Icon={Download}  title="Pull your existing data"   desc="Bring EHR and EMR data into A2V2." />
                <FeaturePoint Icon={GitMerge}  title="Mapped to your records"    desc="Data lands in the right place on each patient." />
                <FeaturePoint Icon={Layers}    title="One patient view"          desc="History and conversations together, not scattered." />
              </div>
            </FadeIn>

            <FadeIn className="ehr-feat-col" delay={120} style={{ flex: '0 0 58%' }}>
              <DataMappingDashboard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: AVAILABLE FOR REVIEW (reversed) ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="ehr-rev-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            <FadeIn className="ehr-rev-dash ehr-feat-col" style={{ flex: '0 0 55%' }}>
              <ProviderReviewDashboard />
            </FadeIn>

            <FadeIn className="ehr-rev-text ehr-feat-col" delay={120} style={{ flex: '0 0 41%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Ready for your team and your patients
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Once your data is in A2V2, it is available for both patient and provider review, so everyone is working from the same information.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <FeaturePoint Icon={Stethoscope} title="Provider review"  desc="Your team sees the full patient picture." />
                <FeaturePoint Icon={User}        title="Patient visibility" desc="Patients can see their own information." />
                <FeaturePoint Icon={FileSearch}  title="Nothing buried"   desc="The details are where you expect them." />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: PATIENTS CAN ADD TO IT ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <div className="ehr-feat-row" style={{ display: 'flex', alignItems: 'flex-start', gap: 60 }}>
            <FadeIn className="ehr-feat-col" style={{ flex: '0 0 38%' }}>
              <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(28px, 4vw, 48px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
                Patients fill in the gaps
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, marginBottom: 36 }}>
                Not every result comes from your system. Patients can upload their own lab results and documents, and AI extracts the details straight into their record.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
                <FeaturePoint Icon={Upload}      title="Patients upload labs"       desc="Blood labs and documents come in directly." />
                <FeaturePoint Icon={FileUp}      title="AI extracts the details"    desc="Uploaded documents populate the record." />
                <FeaturePoint Icon={CheckCircle2} title="Reviewed before it saves" desc="Extracted data becomes a draft your team confirms." />
              </div>
            </FadeIn>

            <FadeIn className="ehr-feat-col" delay={120} style={{ flex: '0 0 58%' }}>
              <LabUploadDashboard />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SECURITY ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-16 md:py-24">
          <FadeIn>
            <h2 className="font-normal leading-[1.05]" style={{ fontSize: 'clamp(24px, 3vw, 40px)', color: '#0F0E0D', fontFamily: H, marginBottom: 16 }}>
              Your data, protected at every step
            </h2>
            <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 560, marginBottom: 48 }}>
              Every import, every upload, and every patient record is handled inside A2V2&apos;s HIPAA-compliant infrastructure.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <div className="ehr-pillars" style={{ display: 'flex', border: '1px solid rgba(0,0,0,0.08)' }}>
              {PILLARS.map(({ badge, title, desc }, i) => (
                <div
                  key={title}
                  className="ehr-pillar"
                  style={{
                    flex: 1, padding: '32px 28px',
                    display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                    borderRight: i < PILLARS.length - 1 ? '1px solid rgba(0,0,0,0.08)' : 'none',
                  }}
                >
                  <BadgeSVG label={badge} />
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#0F0E0D', fontFamily: I, marginTop: 20 }}>{title}</div>
                  <div style={{ fontSize: 14, color: '#68655E', fontFamily: I, marginTop: 8, lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={120} style={{ marginTop: 24 }}>
            <Link
              href="/security"
              style={{ fontSize: 14, fontWeight: 500, color: '#0F0E0D', fontFamily: I, textDecoration: 'underline', textUnderlineOffset: 3, letterSpacing: '-0.2px', transition: 'color 150ms ease' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#2563EB')}
              onMouseLeave={e => (e.currentTarget.style.color = '#0F0E0D')}
            >
              Learn more about our security &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 6: CTA ── */}
      <section style={{ background: '#ffffff' }}>
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 py-20 md:py-28">
          <FadeIn>
            <div style={{ textAlign: 'center' }}>
              <h2
                className="font-normal leading-[1.05]"
                style={{ fontSize: 'clamp(32px, 5.5vw, 64px)', color: '#0F0E0D', fontFamily: H, maxWidth: 700, margin: '0 auto' }}
              >
                See your patient data in one place
              </h2>
              <p style={{ fontSize: 16, fontWeight: 500, color: '#68655E', fontFamily: I, letterSpacing: '-0.3px', lineHeight: 1.6, maxWidth: 500, margin: '20px auto 36px' }}>
                Book a demo and we will show you how A2V2 brings your data together.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a
                  href={DEMO_BOOKING_URL}
                  style={btnBlack}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.82')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Book a Demo
                </a>
                <a
                  href={SIGN_IN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={btnGhost}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.65')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Get Started
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <TestHomepage2Footer />
    </main>
  )
}
