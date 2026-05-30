import { packForm, formCode, categoryLabel } from '../data/products.js'

// Per-category palette for the package mock-ups.
// [cap/seal (dark), label band (mid), background tint (light)]
const palette = {
  insecticide: ['#0f5132', '#15803d', '#dcfce7'],
  herbicide:   ['#7c2d12', '#b45309', '#ffedd5'],
  fungicide:   ['#1e3a8a', '#1d4ed8', '#dbeafe'],
  pgr:         ['#4c1d95', '#7c3aed', '#ede9fe'],
  nutrition:   ['#134e4a', '#0d9488', '#ccfbf1'],
  bio:         ['#14532d', '#16a34a', '#dcfce7'],
}

// Fit long names by shrinking with textLength; keep short names natural.
const fit = (text, max) => (text.length > max ? { textLength: 96, lengthAdjust: 'spacingAndGlyphs' } : {})

export default function ProductLabel({ product, className = '' }) {
  const [dark, mid, light] = palette[product.category] || palette.insecticide
  const form = packForm(product.technical)
  const code = formCode(product.technical)
  const gid = `pl-${product.code}`

  return (
    <svg
      viewBox="0 0 320 260"
      role="img"
      aria-label={`${product.name} — ${categoryLabel[product.category]} pack`}
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full ${className}`}
    >
      <defs>
        <linearGradient id={`${gid}-bg`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={light} />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id={`${gid}-pk`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="55%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e9eef3" />
        </linearGradient>
      </defs>

      {/* backdrop */}
      <rect x="0" y="0" width="320" height="260" fill={`url(#${gid}-bg)`} />
      <circle cx="262" cy="46" r="58" fill="#ffffff" opacity="0.35" />
      <circle cx="44" cy="230" r="46" fill={mid} opacity="0.08" />

      {/* soft ground shadow */}
      <ellipse cx="160" cy="236" rx="78" ry="11" fill="#0f172a" opacity="0.10" />

      {form === 'bottle' ? (
        <g>
          {/* cap */}
          <rect x="138" y="30" width="44" height="24" rx="5" fill={dark} />
          <rect x="138" y="36" width="44" height="3" fill="#ffffff" opacity="0.25" />
          {/* neck */}
          <rect x="146" y="52" width="28" height="12" fill={dark} opacity="0.85" />
          {/* shoulders + body */}
          <path
            d="M124 92 q0-16 16-22 l4-6 h32 l4 6 q16 6 16 22 v110 q0 14-14 14 h-44 q-14 0-14-14 z"
            fill={`url(#${gid}-pk)`}
            stroke={dark}
            strokeOpacity="0.18"
            strokeWidth="2"
          />
          {/* label band */}
          <rect x="116" y="120" width="88" height="78" rx="6" fill={mid} />
          <rect x="116" y="120" width="88" height="20" rx="6" fill={dark} />
          <text x="160" y="134" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="700" letterSpacing="2" fontFamily="system-ui, sans-serif">CROPLAND</text>
          <text x="160" y="166" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="800" fontFamily="system-ui, sans-serif" {...fit(product.name, 14)}>{product.name}</text>
          <text x="160" y="184" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="600" opacity="0.85" fontFamily="system-ui, sans-serif">{categoryLabel[product.category]}</text>
          {/* highlight */}
          <rect x="130" y="96" width="8" height="106" rx="4" fill="#ffffff" opacity="0.45" />
        </g>
      ) : (
        <g>
          {/* top seal with notches */}
          <path d="M92 44 h136 v18 l-6 6 -8-6 -8 6 -8-6 -8 6 -8-6 -8 6 -8-6 -8 6 -8-6 -8 6 -8-6 -8 6 -8-6 -8 6 -6-6 z" fill={dark} />
          <circle cx="88" cy="52" r="5" fill={light} />
          <circle cx="232" cy="52" r="5" fill={light} />
          {/* pouch body */}
          <path
            d="M96 64 q4-4 14-4 h100 q10 0 14 4 q8 8 8 26 v110 q0 16-16 18 q-56 6-112 0 q-16-2-16-18 v-110 q0-18 8-26 z"
            fill={`url(#${gid}-pk)`}
            stroke={dark}
            strokeOpacity="0.16"
            strokeWidth="2"
          />
          {/* label band */}
          <rect x="104" y="104" width="112" height="92" rx="8" fill={mid} />
          <rect x="104" y="104" width="112" height="22" rx="8" fill={dark} />
          <text x="160" y="119" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="700" letterSpacing="2.5" fontFamily="system-ui, sans-serif">CROPLAND</text>
          <text x="160" y="156" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="800" fontFamily="system-ui, sans-serif" {...fit(product.name, 13)}>{product.name}</text>
          <text x="160" y="176" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="600" opacity="0.85" fontFamily="system-ui, sans-serif">{categoryLabel[product.category]}</text>
          {/* sheen */}
          <path d="M104 64 q4-4 14-4 h22 v140 q-20-1-36-3 z" fill="#ffffff" opacity="0.18" />
        </g>
      )}

      {/* formulation chip */}
      <g>
        <rect x="248" y="206" width="48" height="26" rx="13" fill="#0f172a" />
        <text x="272" y="223" textAnchor="middle" fill="#ffffff" fontSize="12" fontWeight="800" letterSpacing="1" fontFamily="system-ui, sans-serif">{code}</text>
      </g>
    </svg>
  )
}
