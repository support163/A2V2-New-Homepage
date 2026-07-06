'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getRelatedPosts } from '@/lib/blog-posts'
import CtaSection from '@/app/Test-Website/components/CtaSection'

const CURRENT_HREF = '/blog/april-2026-model-catalog-update'
const relatedPosts = getRelatedPosts(CURRENT_HREF)

const faqItems = [
  {
    q: 'What AI models does A2V2.ai support for HIPAA-compliant Medical Agents?',
    a: 'As of April 2026: Claude Opus 4.6, Claude Sonnet 4.6, Claude Haiku 4.5, Gemini 2.5 Pro, Gemini 2.5 Flash, GLM-5, and open-source models including Llama and GPT-OSS. Major expansion from previous open-source-only lineup.',
  },
  {
    q: 'Were any models retired?',
    a: 'Yes. GPT-4.1, GPT-4o, o3, GPT-4.5 and variants replaced by GPT-5.4 family. Claude Opus 4.1 replaced by Claude Opus 4.6. Claude Sonnet 4.5 replaced by Claude Sonnet 4.6. Gemini 2.0 Flash replaced by Gemini 2.5 Flash. All auto-migrated.',
  },
  {
    q: 'Do I need to do anything?',
    a: 'If you never picked a model, no. If you selected a retired model, open Sandbox, confirm replacement, test prompts, adjust if needed. Medical Agent users should consider trying the new flagship HIPAA models.',
  },
  {
    q: 'Did migration change anything besides the model?',
    a: 'No. Knowledge base, chat history, instructions, temperature, sub-agents, skills, tools, CRM data, parameters, prescriptions. All unchanged. Only the model selection was updated.',
  },
  {
    q: 'How did credit costs change?',
    a: 'Most went down. Claude Opus 4.6: 10 to 3 credits. Claude Sonnet 4.6: 3 to 2. GLM-5: 2 to 1. Only increase: Gemini 2.5 Pro from 1 to 2 credits. Switch to Flash or Sonnet to keep costs flat.',
  },
]

const retiredModels = [
  { retired: 'GPT-4.1, GPT-4o, o3, GPT-4.5', replacement: 'GPT-5.4' },
  { retired: 'GPT-4.1-mini, GPT-4o-mini, o3-mini, o4-mini', replacement: 'GPT-5.4-mini' },
  { retired: 'GPT-4.1-nano', replacement: 'GPT-5.4-nano' },
  { retired: 'Claude Opus 4.1', replacement: 'Claude Opus 4.6' },
  { retired: 'Claude Sonnet 4.5', replacement: 'Claude Sonnet 4.6' },
  { retired: 'Gemini 2.0 Flash, Gemini 2.5 Flash-Lite', replacement: 'Gemini 2.5 Flash' },
  { retired: 'DeepSeek R1 Distill 70B (HIPAA)', replacement: 'GPT OSS 120b (HIPAA)' },
]

const creditChanges = [
  { model: 'Claude Opus 4.6', before: '10 credits', after: '3 credits', direction: 'down' },
  { model: 'Claude Sonnet 4.6', before: '3 credits', after: '2 credits', direction: 'down' },
  { model: 'GLM-5', before: '2 credits', after: '1 credit', direction: 'down' },
  { model: 'Gemini 2.5 Pro', before: '1 credit', after: '2 credits', direction: 'up' },
]

/* ── Share bar ── */
function ShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false)
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const btnStyle = {
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#ffffff',
  }

  return (
    <div className="flex items-center gap-3 mt-6">
      <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>Share:</span>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
        style={btnStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.727-8.842L1.064 2.25H8.08l4.262 5.639L18.244 2.25Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
        </svg>
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex items-center justify-center w-9 h-9 rounded-full transition-colors"
        style={btnStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
        </svg>
      </a>

      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="flex items-center gap-1.5 px-3 h-9 rounded-full transition-colors text-sm"
        style={btnStyle}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
      >
        {copied ? (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
            Copy link
          </>
        )}
      </button>
    </div>
  )
}

/* ── FAQ accordion ── */
function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div data-animate="" className="mt-16 pt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <h2 className="text-[22px] md:text-[28px] font-semibold mb-8" style={{ color: '#ffffff' }}>
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col">
        {faqItems.map((item, i) => (
          <div
            key={i}
            style={{ borderTop: i === 0 ? '1px solid rgba(255,255,255,0.1)' : 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
            >
              <span className="text-[15px] md:text-base font-semibold leading-snug" style={{ color: '#ffffff' }}>
                {item.q}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-[500px] pb-5' : 'max-h-0'}`}
            >
              <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Dark table ── */
function DarkTable({ headers, rows, changeCol }: {
  headers: string[]
  rows: (string | { text: string; dir?: 'up' | 'down' })[][]
  changeCol?: number
}) {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse' as const,
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '12px',
    overflow: 'hidden',
  }
  return (
    <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', marginBottom: '1.5rem' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: 'rgba(255,255,255,0.06)' }}>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  padding: '12px 16px',
                  textAlign: 'left',
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#ffffff',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              style={{ background: ri % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}
            >
              {row.map((cell, ci) => {
                const isObj = typeof cell === 'object'
                const text = isObj ? cell.text : cell
                const dir = isObj ? cell.dir : undefined
                return (
                  <td
                    key={ci}
                    style={{
                      padding: '12px 16px',
                      fontSize: 14,
                      color: dir === 'down'
                        ? 'rgba(16,185,129,0.9)'
                        : dir === 'up'
                        ? 'rgba(239,68,68,0.9)'
                        : 'rgba(255,255,255,0.75)',
                      borderBottom: ri < rows.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                    }}
                  >
                    {text}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ── Note box ── */
function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-r-lg p-4 mb-6"
      style={{
        background: 'rgba(255,255,255,0.04)',
        borderLeft: '3px solid rgba(255,255,255,0.15)',
      }}
    >
      <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
        {children}
      </p>
    </div>
  )
}

/* ── Action callout box ── */
function ActionBox({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-xl p-4 mb-3"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {children}
    </div>
  )
}

/* ── Body text styles ── */
const bodyText: React.CSSProperties = {
  fontSize: 18,
  lineHeight: 1.75,
  color: 'rgba(255,255,255,0.8)',
  marginBottom: '1.5rem',
}

const h2Style: React.CSSProperties = {
  fontSize: 26,
  fontWeight: 600,
  color: '#ffffff',
  marginTop: '3rem',
  marginBottom: '1rem',
  lineHeight: 1.3,
}

const strongStyle: React.CSSProperties = {
  color: '#ffffff',
  fontWeight: 700,
}

/* ── Main component ── */
export default function ModelCatalogBlogPost() {
  const articleUrl = 'https://www.a2v2.ai/blog/april-2026-model-catalog-update'
  const articleTitle = 'April 2026 Model Catalog Update: More HIPAA-Eligible AI Models, Lower Costs, Zero Downtime'

  return (
    <div style={{ background: '#0F0E0D', fontFamily: "'Inter', sans-serif" }}>
        <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24">

          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <Link href="/blog" className="transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >
              Blog
            </Link>
            <span>/</span>
            <span>What&apos;s New</span>
          </div>

          {/* Header */}
          <header className="mb-10">
            <span
              className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-4"
              style={{ border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)' }}
            >
              What&apos;s New
            </span>
            <h1
              className="text-[28px] md:text-[40px] font-semibold leading-tight tracking-tight"
              style={{ color: '#ffffff' }}
            >
              April 2026 Model Catalog Update: More HIPAA-Eligible AI Models, Lower Costs, Zero Downtime
            </h1>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              We just refreshed the entire model catalog. The HIPAA-eligible lineup got a lot bigger, most credit costs went down, and every chatbot running a retired model has already been migrated. Here is what changed and what it means for your clinic.
            </p>

            {/* Author row */}
            <div className="mt-6 flex items-center gap-3">
              <Image
                src="/icons/Solo-Logo-A2V2.svg"
                alt="A2V2"
                width={32}
                height={32}
                className="w-8 h-8 object-contain"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                By The A2V2 Team · 7 min read · Apr 26, 2026
              </span>
            </div>

            <ShareBar url={articleUrl} title={articleTitle} />
          </header>

          {/* Hero image */}
          <div className="w-full mb-12">
            <Image
              src="/images/blog-post7.png"
              alt="April 2026 Model Catalog Update"
              width={720}
              height={405}
              className="w-full aspect-[16/9] object-cover"
              quality={100}
              unoptimized
              priority
            />
          </div>

          {/* Body */}
          <article>
            <p style={bodyText}>
              The AI landscape moves fast. Models that were state-of-the-art six months ago have already been replaced by faster, more capable, and more cost-effective successors. For clinics running patient-facing chatbots and Medical Agents on A2V2.ai, staying current with the best available models should not require constant manual oversight.
            </p>
            <p style={bodyText}>
              That is why we handle it for you.
            </p>
            <p style={bodyText}>
              This month we ran a full catalog refresh. A number of older models have been retired, several newer and more powerful ones have taken their place, and the list of HIPAA-eligible models available for Medical Agents got significantly bigger. If your chatbot was still configured with a retired model, we have already moved it to the recommended replacement. No downtime. No action required on your end.
            </p>
            <p style={bodyText}>
              Here is the full breakdown.
            </p>

            <h2 style={h2Style} data-animate="">What Changed at a Glance</h2>
            <p style={bodyText}>
              Three big moves happened in this update.
            </p>
            <p style={bodyText}>
              First, OpenAI&apos;s older model families have been retired. The GPT-4.x line (GPT-4.1, GPT-4o, GPT-4.5) and the o-series models (o3, o3-mini, o4-mini) are gone. The GPT-5 family is now the default across the platform.
            </p>
            <p style={bodyText}>
              Second, the HIPAA-eligible model lineup expanded dramatically. Previously, Medical Agents were limited to a handful of open-source models like Llama, Qwen, and GPT-OSS. Now, the Claude 4.6 family from Anthropic (Opus, Sonnet, and Haiku) and Google&apos;s Gemini 2.5 (Pro and Flash) are all HIPAA-eligible. So is GLM-5. That means clinics running Medical Agents now have access to flagship-tier reasoning models inside a fully compliant environment for the first time.
            </p>
            <p style={bodyText}>
              Third, most credit costs went down. Claude Opus 4.6 dropped from 10 credits per message to 3. Claude Sonnet 4.6 dropped from 3 to 2. GLM-5 dropped from 2 to 1. The one increase is Gemini 2.5 Pro, which went from 1 credit to 2 credits per message.
            </p>

            <h2 style={h2Style} data-animate="">Models Retired and Their Replacements</h2>

            <DarkTable
              headers={['Retired', 'Replacement']}
              rows={retiredModels.map((r) => [r.retired, r.replacement])}
            />

            <NoteBox>
              If you never explicitly picked a model, the platform default moved from GPT-4o-mini to GPT-5-mini. For Medical Agents, the default is now Llama 3.1 8B Instant.
            </NoteBox>

            <h2 style={h2Style} data-animate="">New Models Now Available</h2>
            <p style={bodyText}>
              <strong style={strongStyle}>From OpenAI:</strong> GPT-5, GPT-5-mini, GPT-5-nano, plus GPT-5.4, GPT-5.4-mini, and GPT-5.4-nano.
            </p>
            <p style={bodyText}>
              <strong style={strongStyle}>From Anthropic:</strong> Claude Opus 4.6, Claude Sonnet 4.6, and Claude Haiku 4.5. All three HIPAA-eligible.
            </p>
            <p style={bodyText}>
              <strong style={strongStyle}>From Google:</strong> Gemini 2.5 Pro and Gemini 2.5 Flash. Both HIPAA-eligible.
            </p>
            <p style={bodyText}>
              <strong style={strongStyle}>Also new:</strong> GLM-5. HIPAA-eligible, 1 credit per message.
            </p>

            <h2 style={h2Style} data-animate="">HIPAA Coverage Just Got Wider</h2>
            <p style={bodyText}>
              This is the biggest change for clinics running Medical Agents.
            </p>
            <p style={bodyText}>
              Until this update, the HIPAA-eligible model selection was limited to open-source models. Llama, Qwen, and GPT-OSS are solid models, but they do not match the reasoning depth of flagship commercial models. Clinics that needed the best available AI for complex patient interactions had to choose between capability and compliance.
            </p>
            <p style={bodyText}>
              That trade-off is gone.
            </p>
            <p style={bodyText}>
              With Claude Opus 4.6, Claude Sonnet 4.6, Claude Haiku 4.5, Gemini 2.5 Pro, Gemini 2.5 Flash, and GLM-5 all now HIPAA-eligible, Medical Agents can run on the same caliber models that power the most advanced AI applications anywhere, all within a fully compliant environment.
            </p>
            <p style={bodyText}>
              For clinics managing complex longevity protocols (NAD+ therapy, peptide therapy sequences, hormone optimization programs, rapamycin cycling, senolytics therapy), this means Medical Agents that are designed to handle nuanced patient questions with significantly more depth and accuracy.
            </p>
            <p style={{ ...bodyText }}>
              <Link
                href="/blog/hipaa-compliant-ai-healthcare"
                style={{ color: '#2563EB', textDecoration: 'underline' }}
              >
                Your AI Is a HIPAA Violation Waiting to Happen
              </Link>
              {' '}explains the compliance landscape in detail if you want the full picture.
            </p>

            <h2 style={h2Style} data-animate="">Auto-Migration: What We Changed and What We Did Not</h2>
            <p style={bodyText}>
              We touched one thing: the model selection field. That is it.
            </p>
            <p style={bodyText}>
              What we did NOT touch: knowledge base, chat history, instructions, temperature settings, sub-agents, skills, tools, CRM data, parameters, and prescriptions.
            </p>
            <p style={bodyText}>
              Important for Medical Agent users: HIPAA compliance was preserved throughout. If a retired HIPAA model&apos;s replacement was non-HIPAA, we substituted the HIPAA default (Llama 3.1 8B Instant) instead.
            </p>
            <p style={bodyText}>
              No in-app notification for the migration. Check your Sandbox, then Choose Your GPT picker to confirm. Contact{' '}
              <a href="mailto:support@a2v2.ai" style={{ color: '#2563EB' }}>support@a2v2.ai</a>
              {' '}if anything looks wrong.
            </p>

            <h2 style={h2Style} data-animate="">Credit Changes Worth Knowing About</h2>

            <DarkTable
              headers={['Model', 'Before', 'After', 'Change']}
              rows={creditChanges.map((r) => [
                r.model,
                r.before,
                r.after,
                { text: r.direction === 'down' ? 'Down' : 'Up', dir: r.direction as 'up' | 'down' },
              ])}
            />

            <NoteBox>
              If you are running high-volume on Gemini 2.5 Pro, consider Gemini 2.5 Flash or Claude Sonnet 4.6 as cost-effective alternatives.
            </NoteBox>

            <h2 style={h2Style} data-animate="">Will My Chatbot Behave Differently?</h2>
            <p style={bodyText}>
              Probably yes, but subtly. Newer models tend to be more concise, stronger on complex reasoning, and slightly different in tone. For most chatbots, these will be improvements. But if you fine-tuned instructions tightly around the old model, spend a few minutes in the Sandbox running common prompts and tweaking if needed.
            </p>
            <p style={bodyText}>
              For Medical Agents previously on open-source HIPAA models, this is a real opportunity. Claude Opus 4.6 and Gemini 2.5 Pro are noticeably stronger on long-document reasoning and complex protocol questions.
            </p>

            <h2 style={h2Style} data-animate="">What You Should Do</h2>

            <ActionBox>
              <p style={{ ...bodyText, marginBottom: 0 }}>
                <strong style={strongStyle}>Never picked a model:</strong> Nothing. New defaults are running.
              </p>
            </ActionBox>
            <ActionBox>
              <p style={{ ...bodyText, marginBottom: 0 }}>
                <strong style={strongStyle}>Explicitly picked a retired model:</strong> Open Sandbox, confirm replacement, run test prompts, adjust instructions if tone shifted.
              </p>
            </ActionBox>
            <ActionBox>
              <p style={{ ...bodyText, marginBottom: 0 }}>
                <strong style={strongStyle}>Running Medical Agent on older HIPAA model:</strong> Try Claude Sonnet 4.6 or Gemini 2.5 Pro in Sandbox with real patient questions.
              </p>
            </ActionBox>
            <ActionBox>
              <p style={{ ...bodyText, marginBottom: 0 }}>
                <strong style={strongStyle}>Price-sensitive on Gemini 2.5 Pro:</strong> Consider Gemini 2.5 Flash or Claude Sonnet 4.6 at lower or equal cost.
              </p>
            </ActionBox>
            <ActionBox>
              <p style={{ ...bodyText, marginBottom: 0 }}>
                <strong style={strongStyle}>Questions about migration:</strong> Email{' '}
                <a href="mailto:support@a2v2.ai" style={{ color: '#2563EB' }}>support@a2v2.ai</a>.
              </p>
            </ActionBox>

            <h2 style={{ ...h2Style, marginTop: '2rem' }} data-animate="">Why This Matters for Longevity Clinics</h2>
            <p style={bodyText}>
              The language model powering your chatbot is the brain behind every patient interaction. Better models mean better patient interactions. And better interactions are correlated with stronger adherence, higher retention, and improved outcomes.
            </p>
            <p style={bodyText}>
              This update ensures every A2V2.ai user has access to the most capable, cost-effective, and compliant AI models available. No manual upgrades. No compliance gaps. No downtime.
            </p>
            <p style={bodyText}>
              Read more:{' '}
              <Link href="/blog/silent-revenue-killer-longevity-medicine" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                The Silent Revenue Killer
              </Link>
              {', '}
              <Link href="/blog/protocol-adherence-crisis-longevity-medicine" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                Why Your NAD+ Patients Quit
              </Link>
              {', and '}
              <Link href="/ai-for-longevity-clinics" style={{ color: '#2563EB', textDecoration: 'underline' }}>
                AI for Longevity Clinics
              </Link>
              .
            </p>
          </article>

          {/* FAQ */}
          <FAQAccordion />

          {/* Bottom share bar */}
          <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <ShareBar url={articleUrl} title={articleTitle} />
          </div>
        </div>

        {/* Related Posts */}
        <div className="mx-auto max-w-[1280px] px-6 md:px-section-x py-16 md:py-20">
          <h2
            className="text-[22px] md:text-[28px] font-semibold mb-8"
            style={{ color: '#ffffff' }}
          >
            Related Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((post, i) => (
              <Link
                key={i}
                href={post.href}
                className="flex flex-col transition-transform duration-200 hover:scale-[1.02]"
              >
                {post.thumbnail ? (
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    width={600}
                    height={338}
                    className="w-full aspect-[16/9] object-cover"
                  />
                ) : (
                  <div className="w-full aspect-[16/9]" style={{ background: 'rgba(255,255,255,0.06)' }} />
                )}
                <span
                  className="inline-flex self-start text-xs px-2.5 py-1 rounded-full mt-4 mb-2"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {post.category}
                </span>
                <h3 className="text-sm font-semibold leading-snug" style={{ color: '#ffffff' }}>
                  {post.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {post.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: '#ffffff' }}>
                  Read Post
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
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
    </div>
  )
}
