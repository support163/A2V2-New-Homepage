export default function BioLinkMockup() {
  return (
    <div className="flex flex-col p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 flex-shrink-0">
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: 'rgba(255,255,255,0.6)' }}
        />
        <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
          Bio link profile
        </span>
      </div>

      <div className="flex flex-col gap-3">
        {/* Profile */}
        <div className="flex flex-col items-center text-center gap-2">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center"
            style={{ border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">Sarah Mitchell</p>
            <p className="text-[11px] text-white/55">Luxury Real Estate · Beverly Hills</p>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="flex items-center justify-around rounded-xl px-3 py-2.5"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          {[
            { value: '142', label: 'Listings' },
            { value: '4.9', label: 'Rating' },
            { value: '12 Yrs', label: 'Exp' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-xs font-semibold text-white/90">{stat.value}</p>
              <p className="text-[9px] text-white/45 mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Listing thumbnails */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { address: '742 Oak St', price: '$525k' },
            { address: '1200 Vine Ave', price: '$1.2M' },
          ].map((listing) => (
            <div
              key={listing.address}
              className="rounded-xl p-2.5"
              style={{ background: 'rgba(255,255,255,0.08)' }}
            >
              <p className="text-[10px] font-semibold text-white/80">{listing.address}</p>
              <p className="text-[10px] text-white/50 mt-0.5">{listing.price}</p>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <button
          className="w-full rounded-xl py-2.5 text-xs font-semibold text-white/90"
          style={{ background: 'rgba(255,255,255,0.15)' }}
        >
          Chat with my AI assistant
        </button>

        {/* Small text */}
        <p className="text-[10px] text-white/40 text-center">
          Ask about any listing, get instant answers
        </p>
      </div>
    </div>
  )
}
