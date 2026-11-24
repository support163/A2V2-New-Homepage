import { BRAND_NAME, BrandMark, TopIcons, Dots } from './parts'

const WIRE_RY = [100, 84, 68, 52, 36, 20, 6]
const WIRE_RX = [70, 44, 18]

/** Reference "#portal" showcase: .stage2 + .grain, .px with .hp-grid, .hp-main, .rail, .hp-chart, .hp-side, .glass cards. */
export default function PortalShowcase() {
  return (
    <div className="stage2 bg3">
      <div className="grain">
        <div className="px">
          <div className="hp-grid">
            <div className="hp-main">
              <div className="hp-top">
                <div className="px-brand"><BrandMark /><span>{BRAND_NAME}</span></div>
                <TopIcons />
              </div>
              <h3>Good<br />morning,<br />John</h3>
              <div className="rail">
                <span className="sq on"><svg viewBox="0 0 24 24"><path d="M3 12h4l2-5 4 10 2-5h6" /></svg></span>
                <span className="sq"><svg viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" /></svg></span>
                <span className="sq"><svg viewBox="0 0 24 24"><path d="M12 3c3 4 6 7 6 11a6 6 0 0 1-12 0c0-4 3-7 6-11z" /></svg></span>
              </div>
              <div className="hp-chart">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label="Fasting glucose over the last 30 days, down 9 points">
                  <defs>
                    <linearGradient id="w1ar" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="var(--brand)" stopOpacity=".28" />
                      <stop offset="1" stopColor="var(--brand)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 36C25 46 50 66 100 82V100H0z" fill="url(#w1ar)" />
                  <path d="M0 36C25 46 50 66 100 82" fill="none" style={{ stroke: 'var(--brand)' }} strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
                </svg>
                <i className="gd sm" style={{ left: '0', top: '36%' }} />
                <i className="gd sm" style={{ left: '40.6%', top: '57%' }} />
                <i className="gd" style={{ left: '100%', top: '82%' }} />
                <div className="co" style={{ left: '0', top: '36%', transform: 'translate(-8%,-128%)' }}><b>105</b><span>30 days ago</span><em>Baseline</em></div>
                <div className="co" style={{ left: '40.6%', top: '57%', transform: 'translate(-50%,-128%)' }}><b>101</b><span>2 weeks ago</span><em>Improving</em></div>
                <div className="co r" style={{ left: '100%', top: '82%', transform: 'translate(-100%,-124%)' }}><b>96<i> mg/dL</i></b><span>today</span><em>↓ 9 points</em></div>
              </div>
              <div className="hp-ask"><span className="sp">✦</span><span>Why did my fasting glucose drop this month?</span><span className="rv">From your care plan</span></div>
            </div>
            <div className="hp-side">
              <div className="hp-grad">
                <div className="grain">
                  <small>HbA1c</small>
                  <div className="n">5.6</div>
                  <div className="u">% · from 5.9</div>
                  <svg viewBox="0 0 200 210" fill="none" stroke="#fff" strokeWidth=".8" opacity=".85">
                    {WIRE_RY.map((r) => <ellipse key={`y${r}`} cx="100" cy="105" rx="92" ry={r} />)}
                    {WIRE_RX.map((r) => <ellipse key={`x${r}`} cx="100" cy="105" rx={r} ry="100" />)}
                    <circle cx="192" cy="105" r="9" fill="rgba(225,240,120,.45)" stroke="none" />
                    <circle cx="192" cy="105" r="4.5" fill="#d4f000" stroke="none" />
                  </svg>
                  <div className="st">Improving</div>
                </div>
              </div>
              <div className="hp-tile"><div className="grain"><b>3</b><small>parameters tracked</small><span className="ar">↗</span></div></div>
            </div>
          </div>
        </div>
        <div className="glassrow">
          <div className="glass g1"><div className="who"><i>NR</i>Nurse Rivera</div><p style={{ margin: 0 }}>Great work this week. Your labs are booked for Saturday at 9:00 AM.</p></div>
          <div className="glass g2"><div className="gh"><h6>Next visit</h6><Dots /></div><p>Dr. Reyes · Tuesday<br />10:30 AM · Follow-up</p></div>
          <div className="glass g3"><div className="gh"><h6>Labs</h6><Dots /></div><p>Lipid panel uploaded<br /><b style={{ color: '#1f7a37', fontWeight: 500 }}>Values extracted</b></p></div>
        </div>
      </div>
    </div>
  )
}
