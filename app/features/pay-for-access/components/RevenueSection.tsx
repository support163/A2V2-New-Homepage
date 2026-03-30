'use client'

import { useState } from 'react'

function formatFollowers(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M`
  if (n >= 1_000) return `${Math.round(n / 1_000)}k`
  return n.toString()
}

export default function RevenueSection() {
  const [followers, setFollowers] = useState(100_000)
  const [conversionRate, setConversionRate] = useState(3)

  const payingFollowers = Math.round(followers * (conversionRate / 100))
  const annualEarnings = Math.round(payingFollowers * 4.99)
  const monthlyEarnings = Math.round(annualEarnings / 12)

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[800px] px-6 md:px-12">

        {/* Heading */}
        <div data-animate="" className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Projected earnings based on follower count
          </h2>
          <p className="mt-3 text-base text-gray-500">
            Based on $4.99 per session, 1–5% follower conversion rate
          </p>
        </div>

        {/* Calculator card */}
        <div
          data-animate=""
          className="bg-white border border-gray-100 rounded-2xl p-8"
          style={{ transitionDelay: '100ms' }}
        >

          {/* Slider 1 — Follower count */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">Your follower count</span>
              <span className="text-2xl font-medium text-gray-900">{formatFollowers(followers)}</span>
            </div>
            <input
              type="range"
              min={10_000}
              max={1_000_000}
              step={10_000}
              value={followers}
              onChange={(e) => setFollowers(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #2563EB ${((followers - 10_000) / (1_000_000 - 10_000)) * 100}%, #E5E7EB ${((followers - 10_000) / (1_000_000 - 10_000)) * 100}%)`,
              }}
            />
          </div>

          {/* Slider 2 — Conversion rate */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-500">Expected conversion rate</span>
              <span className="text-2xl font-medium text-gray-900">{conversionRate}%</span>
            </div>
            <input
              type="range"
              min={1}
              max={5}
              step={0.5}
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #2563EB ${((conversionRate - 1) / (5 - 1)) * 100}%, #E5E7EB ${((conversionRate - 1) / (5 - 1)) * 100}%)`,
              }}
            />
          </div>

          {/* Results */}
          <div className="border-t border-gray-100 pt-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Annual */}
              <div className="rounded-xl p-5" style={{ background: '#EEF4FF' }}>
                <p className="text-xs text-gray-500 mb-1">Projected annual earnings</p>
                <p className="text-2xl font-medium" style={{ color: '#2563EB' }}>
                  ${annualEarnings.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">per year</p>
              </div>
              {/* Monthly */}
              <div className="rounded-xl p-5 bg-gray-50">
                <p className="text-xs text-gray-500 mb-1">Projected monthly earnings</p>
                <p className="text-2xl font-medium text-gray-900">
                  ${monthlyEarnings.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500 mt-1">per month</p>
              </div>
            </div>

            {/* Breakdown row */}
            <div className="border-t border-gray-100 pt-4 flex flex-col md:flex-row md:gap-6 gap-2">
              <span className="text-sm text-gray-500">
                Sessions/year: <span className="font-medium text-gray-900">{payingFollowers.toLocaleString()}</span>
              </span>
              <span className="text-sm text-gray-500">
                Price/session: <span className="font-medium text-gray-900">$4.99</span>
              </span>
              <span className="text-sm text-gray-500">
                Paying followers: <span className="font-medium text-gray-900">{payingFollowers.toLocaleString()}</span>
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
          Revenue projections are estimates based on conversion rate modeling. Actual results may vary.
        </p>

      </div>
    </section>
  )
}
