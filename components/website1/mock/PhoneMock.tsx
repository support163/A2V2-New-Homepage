'use client'

import { useEffect, useRef, useState } from 'react'
import { cv } from './util'
import { BRAND_NAME, BrandMark } from './parts'

const SLIDES = 5

/** Reference phone screen (.ph / .ph-s) drawn as a phone frame, with the auto-advancing slides. */
export default function PhoneMock() {
  const [cur, setCur] = useState(0)
  const hover = useRef(false)

  useEffect(() => {
    const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const t = setInterval(() => {
      if (!hover.current) setCur((c) => (c + 1) % SLIDES)
    }, 3500)
    return () => clearInterval(t)
  }, [])

  const cls = (i: number) => `psl${i === cur ? ' on' : ''}`

  return (
    <div className="ph w1-ph" onMouseEnter={() => { hover.current = true }} onMouseLeave={() => { hover.current = false }}>
      <div className="ph-s">
        <span className="ph-isl" />
        <div className="ph-st"><span>9:41</span><span className="ph-bat"><i /></span></div>
        <div className="ph-br"><BrandMark /><span>{BRAND_NAME}</span><i>JD</i></div>

        <div className="sl-wrap">
          {/* 1. My plan with fasting glucose trend */}
          <div className={cls(0)}>
            <div className="ph-h">My Plan<small>Day 34 of 90 · Phase 2: Rebuild</small></div>
            <div className="ph-bar"><i /></div>
            <div className="ph-c">
              <div className="ph-n"><b>96</b><span>mg/dL<br />fasting glucose</span><em className="ok">↓ 9 points</em></div>
              <div className="ph-ch">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="w1pa" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="var(--brand)" stopOpacity=".3" />
                      <stop offset="1" stopColor="var(--brand)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M2 20C28 30 52 52 96 68V100H2z" fill="url(#w1pa)" />
                  <path d="M2 20C28 30 52 52 96 68" fill="none" style={{ stroke: 'var(--brand)' }} strokeWidth="2.2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </svg>
                <i className="gd" style={{ left: '2%', top: '20%' }} /><i className="gd" style={{ left: '96%', top: '68%' }} />
              </div>
              <div className="ph-lg"><span>30 days ago · 105</span><span>Today · 96</span></div>
            </div>
            <div className="ph-c">
              <div className="ph-t">Today&apos;s plan<span>2 of 3</span></div>
              <div className="ph-i on">Morning walk, 30 min</div>
              <div className="ph-i on">Magnesium glycinate</div>
              <div className="ph-i">Lights out by 10:30</div>
            </div>
          </div>

          {/* 2. Parameters */}
          <div className={cls(1)}>
            <div className="ph-h">My Parameters<small>Updated today · 3 tracked</small></div>
            <div className="ph-c">
              <div className="ph-hb" style={cv({ '--c': '#22b455', '--w': 0.7 })}><span>HbA1c 5.6%<em>↓ from 5.9</em></span><i /></div>
              <div className="ph-hb" style={cv({ '--c': '#2f7bf0', '--w': 0.6 })}><span>Fasting glucose 96<em>↓ 9 points</em></span><i /></div>
              <div className="ph-hb" style={cv({ '--c': '#f0a02f', '--w': 0.86 })}><span>LDL 142<em>above range</em></span><i /></div>
            </div>
            <div className="ph-c">
              <div className="ph-t">What moved<span>30 days</span></div>
              <div className="ph-f">HbA1c 5.9 to 5.6<b className="up">Better</b></div>
              <div className="ph-f">LDL above range<b className="dn">Watch</b></div>
            </div>
          </div>

          {/* 3. Care plan */}
          <div className={cls(2)}>
            <div className="ph-h">Care Plan<small>90-day metabolic reset · Dr. Reyes</small></div>
            <div className="ph-c">
              <div className="ph-p done"><b /><span>Phase 1 · Reset<small>Days 1 to 30 · complete</small></span></div>
              <div className="ph-p now"><b>2</b><span>Phase 2 · Rebuild<small>Day 34 · in progress</small><i className="ph-bar"><i /></i></span></div>
              <div className="ph-p"><b>3</b><span>Phase 3 · Optimize<small>Days 61 to 90</small></span></div>
            </div>
            <div className="ph-c">
              <div className="ph-t">Why this plan</div>
              <p className="ph-q">“Your labs show early insulin resistance. Steady sleep and daily movement will help most.”</p>
              <div className="ph-sig">Dr. Reyes</div>
            </div>
          </div>

          {/* 4. To-do */}
          <div className={cls(3)}>
            <div className="ph-h">Health To-Do<small>3 due this week</small></div>
            <div className="ph-c">
              <div className="ph-i">Upload food log<em className="due">Today</em></div>
              <div className="ph-i">Fasting lipid panel<em>Sat 9:00 AM</em></div>
              <div className="ph-i">Weekly check-in<em>Sun</em></div>
              <div className="ph-i on">Book follow-up visit<em>Done</em></div>
              <div className="ph-i on">Sign consent form<em>Done</em></div>
            </div>
            <div className="ph-c ph-up"><i>18</i><span>Follow-up, Dr. Reyes<small>Tue · 10:30 AM</small></span></div>
          </div>

          {/* 5. Patient agent */}
          <div className={cls(4)}>
            <div className="ph-h">Patient Agent<small>Keeping an eye on your plan with you</small></div>
            <div className="ph-c ph-ag"><b>86%</b><span>adherence<small>this month</small></span><em className="ok">On track</em></div>
            <div className="ph-m">You walked 6 of 7 days, and your fasting glucose is down 9 points. Nice work, John.</div>
            <div className="ph-m">Lights out slipped twice this week. Want a reminder at 10:00 PM?</div>
            <div className="ph-btns"><span className="pri">Yes, remind me</span><span>Not now</span></div>
          </div>
        </div>

        <div className="ph-dots">
          {Array.from({ length: SLIDES }).map((_, i) => <i key={i} className={i === cur ? 'on' : undefined} />)}
        </div>
        <div className="ph-ask"><span>✦</span>Ask about my plan</div>
      </div>
    </div>
  )
}
