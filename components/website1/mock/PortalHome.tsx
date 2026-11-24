import type { CSSProperties } from 'react'
import { cv } from './util'
import { BRAND_NAME, BrandMark, TopIcons, CalIcon, Dots, HbRow, A1cChart, CheckIns } from './parts'

const COLS = [
  { h: 0.71, s: 'Sleep', l: 'Sleep 7h+', n: 5 },
  { h: 0.57, s: 'Protein', l: 'Protein goal', n: 4 },
  { h: 0.86, s: 'Walk', l: 'Morning walk', n: 6, sel: true },
  { h: 1, s: 'Supps', l: 'Supplements', n: 7 },
  { h: 0.71, s: 'Lights', l: 'Lights out', n: 5 },
]

/** Reference ".px" portal dashboard (hero desktop part). Health Score replaced with tracked parameters. */
export default function PortalHome({ style }: { style?: CSSProperties }) {
  return (
    <div className="px" style={style}>
      <div className="px-top">
        <div className="px-brand"><BrandMark /><span>{BRAND_NAME}</span></div>
        <div className="px-nav">
          <span className="on">Home</span><span>Care Plan</span><span>Health</span><span>Messages</span><span>Labs</span><span>Visits</span>
        </div>
        <TopIcons />
      </div>
      <div className="px-head">
        <h3>Good morning, John</h3>
        <div className="px-range"><span><CalIcon />Day 34 of 90</span><em>phase</em><span>2 · Rebuild</span></div>
      </div>
      <div className="px-grid">
        <div className="px-card px-proto">
          <div className="px-ch"><h4>Daily protocol</h4><Dots /></div>
          <div className="cols">
            <div className="yax"><span>7d</span><span>5d</span><span>3d</span><span>1d</span></div>
            {COLS.map((c) => (
              <div key={c.s} className={`col${c.sel ? ' sel' : ''}`} style={cv({ '--h': c.h })}>
                <small data-s={c.s}><span>{c.l}</span></small>
                <b>{c.n}<i>/7</i></b>
                <span className="cap" /><span className="bar" />
              </div>
            ))}
            <div className="tip"><b>6 of 7</b> days | Streak: <b>4</b> | vs last week: <b>+1</b></div>
            <svg className="cur" viewBox="0 0 20 22"><path d="M2 2l5.5 17 3-7 7-2.5z" fill="#111" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round" /></svg>
          </div>
          <div className="ask">
            <div className="ask-h"><span style={{ color: 'var(--brand)' }}>✦</span><span>What would you like to know about your plan?</span><span>⌃</span></div>
            <div className="ask-in">How has my fasting glucose changed this month? <span className="chip">/glucose</span><span className="caret" /></div>
          </div>
        </div>

        <div className="px-card px-score">
          <div className="px-ch"><h4>Fasting glucose</h4><Dots /></div>
          <div className="bigN">96<sup>↓ 9 points</sup></div>
          <HbRow label="HbA1c" value="5.6%" note="↓ from 5.9" color="#22b455" w={0.7} />
          <HbRow label="LDL" value="142" note="above range" color="#f0a02f" w={0.86} />
          <HbRow label="Glucose" value="96" note="mg/dL" color="#2f7bf0" w={0.6} />
        </div>

        <A1cChart />
        <CheckIns />
        <div className="px-ins"><div className="grain"><span className="pl">Insights</span><div className="n">86%<small>plan adherence</small></div></div></div>
      </div>
    </div>
  )
}
