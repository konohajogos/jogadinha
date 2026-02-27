export function D20Icon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      {/* D20 icosahedron shape */}
      <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="8.5" x2="22" y2="15.5" />
      <line x1="22" y1="8.5" x2="2" y2="15.5" />
      <text x="12" y="14" textAnchor="middle" fontSize="6" fill="currentColor" stroke="none" fontWeight="bold">20</text>
    </svg>
  )
}

export function D4Icon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      {/* D4 tetrahedron triangle */}
      <polygon points="12,2 2,22 22,22" />
      <line x1="12" y1="2" x2="12" y2="22" />
      <line x1="2" y1="22" x2="17" y2="12" />
      <text x="12" y="17" textAnchor="middle" fontSize="7" fill="currentColor" stroke="none" fontWeight="bold">4</text>
    </svg>
  )
}

export function D8Icon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      {/* D8 octahedron diamond */}
      <polygon points="12,1 23,12 12,23 1,12" />
      <line x1="1" y1="12" x2="23" y2="12" />
      <line x1="12" y1="1" x2="12" y2="23" />
      <text x="12" y="14.5" textAnchor="middle" fontSize="6" fill="currentColor" stroke="none" fontWeight="bold">8</text>
    </svg>
  )
}

export function D12Icon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className} style={style}>
      {/* D12 pentagon-ish */}
      <polygon points="12,1 21,6 23,16 16,23 8,23 1,16 3,6" />
      <polygon points="12,5 18,8 19,15 14,19 10,19 5,15 6,8" />
      <text x="12" y="15" textAnchor="middle" fontSize="6" fill="currentColor" stroke="none" fontWeight="bold">12</text>
    </svg>
  )
}

export function MeepleIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <circle cx="12" cy="5" r="3" />
      <path d="M4 22l3-9h2l1 3h4l1-3h2l3 9H4z" />
    </svg>
  )
}

export function BoardGamePieceIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      {/* Chess-like pawn */}
      <circle cx="12" cy="6" r="3.5" />
      <path d="M9 9.5C7.5 11 7 13 7 14.5h10c0-1.5-.5-3.5-2-5" />
      <rect x="8" y="15" width="8" height="2" rx="1" />
      <path d="M6 19h12a2 2 0 012 2H4a2 2 0 012-2z" />
    </svg>
  )
}

export function MagicCardIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* Card with 5-color pentagon (MTG mana) */}
      <rect x="3" y="1" width="18" height="22" rx="2" />
      <polygon points="12,6 17,9.5 15.5,15 8.5,15 7,9.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12" cy="5.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="17.2" cy="9.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.5" cy="15.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="8.5" cy="15.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="6.8" cy="9.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function PokemonIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      {/* Pokeball */}
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="8.5" y2="12" />
      <line x1="15.5" y1="12" x2="22" y2="12" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <path d="M2 12 A10 10 0 0 0 22 12" fill="currentColor" fillOpacity="0.15" stroke="none" />
    </svg>
  )
}
