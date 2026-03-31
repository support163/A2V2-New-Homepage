export default function ListingInquiriesMockup() {
  return (
    <div className="flex flex-col p-5">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 flex-shrink-0">
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: 'rgba(255,255,255,0.6)' }}
        />
        <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
          Live chat
        </span>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3">
        {/* Incoming */}
        <div
          className="rounded-xl px-3.5 py-2.5 max-w-[85%] self-start"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs text-white/80 leading-relaxed">
            Hi, is the 3BR on Oak Street still available? What are the HOA fees?
          </p>
        </div>

        {/* AI response */}
        <div
          className="rounded-xl px-3.5 py-2.5 max-w-[90%] self-end"
          style={{ background: 'rgba(255,255,255,0.15)' }}
        >
          <p className="text-xs text-white/90 leading-relaxed">
            Yes, 742 Oak Street is still available! The HOA is $285/mo and covers water, trash, and pool access. Would you like to schedule a viewing?
          </p>
        </div>

        {/* Incoming */}
        <div
          className="rounded-xl px-3.5 py-2.5 max-w-[60%] self-start"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs text-white/80 leading-relaxed">
            What about parking?
          </p>
        </div>

        {/* AI response */}
        <div
          className="rounded-xl px-3.5 py-2.5 max-w-[90%] self-end"
          style={{ background: 'rgba(255,255,255,0.15)' }}
        >
          <p className="text-xs text-white/90 leading-relaxed">
            The unit comes with 2 dedicated garage spots plus guest parking. Want me to book a showing this week?
          </p>
        </div>

        {/* Typing indicator */}
        <div
          className="rounded-xl px-4 py-3 self-start"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          <div className="flex items-center gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-white/50"
                style={{
                  animation: 'bounce 1.2s ease-in-out infinite',
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
