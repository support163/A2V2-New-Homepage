'use client'

import { useState } from 'react'

export default function RoiCalculator() {
  const [inquiries, setInquiries] = useState(100)
  const [commission, setCommission] = useState(15000)

  const additionalRevenue = Math.round(inquiries * 0.15 * 0.20 * commission * 12)
  const additionalDeals = Math.round(inquiries * 0.15 * 0.20 * 12)
  const monthlyRecovered = Math.round(inquiries * 0.15)

  const revenueFormatted = additionalRevenue.toLocaleString()
  const commissionFormatted = commission.toLocaleString()

  const inquiriesPct = ((inquiries - 10) / (500 - 10)) * 100
  const commissionPct = ((commission - 5000) / (50000 - 5000)) * 100

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[800px] px-6 md:px-12">

        {/* Heading */}
        <div data-animate="" className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            The math on never missing a lead
          </h2>
          <p className="mt-3 text-base text-gray-500">
            See how much revenue you could recover with 24/7 lead engagement
          </p>
        </div>

        {/* Calculator card */}
        <div
          data-animate=""
          className="bg-white border border-gray-100 rounded-2xl p-8"
          style={{ transitionDelay: '100ms' }}
        >

          {/* Slider 1 — Monthly inquiries */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">Monthly inquiries</span>
              <span className="text-2xl font-medium text-gray-900">{inquiries.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min={10}
              max={500}
              step={10}
              value={inquiries}
              onChange={(e) => setInquiries(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #2563EB ${inquiriesPct}%, #E5E7EB ${inquiriesPct}%)`,
              }}
            />
          </div>

          {/* Slider 2 — Commission */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">Average commission per deal</span>
              <span className="text-2xl font-medium text-gray-900">${commissionFormatted}</span>
            </div>
            <input
              type="range"
              min={5000}
              max={50000}
              step={1000}
              value={commission}
              onChange={(e) => setCommission(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #2563EB ${commissionPct}%, #E5E7EB ${commissionPct}%)`,
              }}
            />
          </div>

          {/* Results */}
          <div className="border-t border-gray-100 pt-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Additional revenue */}
              <div className="rounded-xl p-5" style={{ background: '#EEF4FF' }}>
                <p className="text-xs text-gray-500 mb-1">Estimated additional revenue</p>
                <p className="text-2xl font-medium" style={{ color: '#2563EB' }}>
                  ${revenueFormatted}
                </p>
                <p className="text-xs text-gray-500 mt-1">/year</p>
              </div>
              {/* Additional deals */}
              <div className="rounded-xl p-5 bg-gray-50">
                <p className="text-xs text-gray-500 mb-1">Estimated additional deals</p>
                <p className="text-2xl font-medium text-gray-900">{additionalDeals}</p>
                <p className="text-xs text-gray-500 mt-1">/year</p>
              </div>
            </div>

            {/* Breakdown row */}
            <div className="border-t border-gray-100 pt-4 flex flex-col md:flex-row md:gap-6 gap-2">
              <span className="text-sm text-gray-500">
                Projected lead capture increase: <span className="font-medium text-gray-900">15%</span>
              </span>
              <span className="text-sm text-gray-500">
                Estimated close rate: <span className="font-medium text-gray-900">20%</span>
              </span>
              <span className="text-sm text-gray-500">
                Monthly inquiries recovered: <span className="font-medium text-gray-900">{monthlyRecovered}</span>
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
          Revenue projections are estimates based on industry conversion data. Actual results may vary.
        </p>

      </div>
    </section>
  )
}
