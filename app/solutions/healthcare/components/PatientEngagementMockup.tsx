interface Patient {
  name: string
  protocol: string
  message: string
  status: 'sent' | 'opened' | 'scheduled'
  time?: string
}

const patients: Patient[] = [
  { name: 'Sarah M.', protocol: 'NAD+ Week 3', message: 'SMS sent: Time for your follow-up labs', status: 'opened' },
  { name: 'Marcus D.', protocol: 'HRT Cycle 2', message: 'SMS sent: Dosage check-in this week', status: 'sent' },
  { name: 'Elena R.', protocol: 'Peptide Day 14', message: 'SMS sent: Lab results reminder', status: 'scheduled', time: '10:30 AM' },
  { name: 'James T.', protocol: 'NAD+ Week 1', message: 'SMS sent: Welcome to your protocol', status: 'sent' },
]

function StatusTag({ patient }: { patient: Patient }) {
  if (patient.status === 'opened') {
    return (
      <span
        className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
        style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}
      >
        Opened
      </span>
    )
  }
  if (patient.status === 'scheduled') {
    return (
      <span
        className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
        style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}
      >
        {patient.time}
      </span>
    )
  }
  return (
    <span
      className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
      style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.5)' }}
    >
      Sent
    </span>
  )
}

export default function PatientEngagementMockup() {
  return (
    <div className="p-5 flex flex-col justify-center gap-2.5 h-full">
      <p style={{ color: 'rgba(255,255,255,0.5)' }} className="text-xs font-semibold uppercase tracking-wider mb-1">
        Active patient sequences
      </p>

      {patients.map((patient, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-3 rounded-lg"
          style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid transparent' }}
        >
          {/* Avatar */}
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold leading-tight" style={{ color: 'rgba(255,255,255,0.9)' }}>
              {patient.name}{' '}
              <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>
                · {patient.protocol}
              </span>
            </p>
            <p className="text-[10px] mt-0.5 truncate" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {patient.message}
            </p>
          </div>

          <StatusTag patient={patient} />
        </div>
      ))}
    </div>
  )
}
