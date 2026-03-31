'use client'

import { useState } from 'react'

export default function RoiCalculator() {
  const [patients, setPatients] = useState(500)
  const [ltv, setLtv] = useState(5000)

  const recoverableRevenue = Math.round(patients * ltv * 0.38)
  const annualFormatted = recoverableRevenue.toLocaleString()

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[800px] px-6 md:px-12">

        {/* Heading */}
        <div data-animate="" className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Calculate your projected ROI
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Based on industry retention data and our engagement model
          </p>
        </div>

        {/* Calculator card */}
        <div
          data-animate=""
          className="bg-white border border-gray-100 rounded-2xl p-8"
          style={{ transitionDelay: '100ms' }}
        >

          {/* Slider 1 — Active patients */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">Active patients</span>
              <span className="text-2xl font-medium text-gray-900">{patients.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={50}
              max={2000}
              step={50}
              value={patients}
              onChange={(e) => setPatients(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #2563EB ${((patients - 50) / (2000 - 50)) * 100}%, #E5E7EB ${((patients - 50) / (2000 - 50)) * 100}%)`,
              }}
            />
          </div>

          {/* Slider 2 — Average patient LTV */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">Average patient lifetime value</span>
              <span className="text-2xl font-medium text-gray-900">${ltv.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={1000}
              max={20000}
              step={500}
              value={ltv}
              onChange={(e) => setLtv(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #2563EB ${((ltv - 1000) / (20000 - 1000)) * 100}%, #E5E7EB ${((ltv - 1000) / (20000 - 1000)) * 100}%)`,
              }}
            />
          </div>

          {/* Results */}
          <div className="border-t border-gray-100 pt-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Recoverable revenue */}
              <div className="rounded-xl p-5" style={{ background: '#EEF4FF' }}>
                <p className="text-xs text-gray-500 mb-1">Estimated recoverable revenue</p>
                <p className="text-2xl font-medium" style={{ color: '#2563EB' }}>
                  ${annualFormatted}
                </p>
                <p className="text-xs text-gray-500 mt-1">/year</p>
              </div>
              {/* Time to ROI */}
              <div className="rounded-xl p-5 bg-gray-50">
                <p className="text-xs text-gray-500 mb-1">Projected time to ROI</p>
                <p className="text-2xl font-medium text-gray-900">&lt; 60 days</p>
                <p className="text-xs text-gray-500 mt-1">from go-live</p>
              </div>
            </div>

            {/* Breakdown row */}
            <div className="border-t border-gray-100 pt-4 flex flex-col md:flex-row md:gap-6 gap-2">
              <span className="text-sm text-gray-500">
                Est. drop-off without AI: <span className="font-medium text-gray-900">73%</span>
              </span>
              <span className="text-sm text-gray-500">
                Est. drop-off with A2V2: <span className="font-medium text-gray-900">35%</span>
              </span>
              <span className="text-sm text-gray-500">
                Projected reduction: <span className="font-medium text-gray-900">38%</span>
              </span>
            </div>
          </div>

        </div>

        {/* Disclaimer */}
        <p
          data-animate=""
          className="mt-4 text-xs text-gray-400 text-center leading-relaxed"
          style={{ transitionDelay: '200ms' }}
        >
          Revenue projections are estimates based on industry retention data and our engagement model. Actual results may vary.
        </p>

      </div>
    </section>
  )
}
