import { CalIcon, Dots, HbRow, A1cChart, CheckIns } from './parts'

/** Health tracking visual: reference .px-a1c chart card, .px-check dot-grid card and .hb bar rows. */
export default function HealthMock() {
  return (
    <div className="px hx">
      <div className="px-head" style={{ paddingTop: 22 }}>
        <h3 style={{ fontSize: 34 }}>John D.</h3>
        <div className="px-range"><span><CalIcon />Last 30 days</span></div>
      </div>
      <div className="px-grid">
        <div className="px-card s7">
          <div className="px-ch"><h4>Parameters</h4><Dots /></div>
          <HbRow label="HbA1c" value="5.6 %" note="↓ from 5.9" color="#22b455" w={0.7} />
          <HbRow label="Fasting glucose" value="96 mg/dL" note="↓ 9 points" color="#2f7bf0" w={0.6} />
          <HbRow label="LDL" value="142 mg/dL" note="above range" color="#f0a02f" w={0.86} />
        </div>
        <A1cChart className="px-card px-a1c s5" />
        <div className="px-ins s4" style={{ gridColumn: undefined }}>
          <div className="grain">
            <span className="pl">Insight</span>
            <div className="n">↓ 9<small>Fasting glucose has dropped 9 points over 30 days.</small></div>
          </div>
        </div>
        <CheckIns className="px-card px-check s8" />
      </div>
    </div>
  )
}
