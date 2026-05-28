import { Link } from 'react-router-dom'

export default function Logo({ className = '', invert = false }) {
  const text = invert ? 'text-white' : 'text-ink-900'
  const accent = invert ? 'text-brand-200' : 'text-brand-700'
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`} aria-label="Cropland Agritech India home">
      <span className="relative grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-brand-500 to-brand-800 shadow-soft">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2c-3 5-3 9 0 13 3-4 3-8 0-13z" fill="currentColor" stroke="none" />
          <path d="M5 21c3-6 9-9 14-9" />
          <path d="M5 21c5 0 9-2 12-6" opacity=".55" />
        </svg>
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-harvest-400 ring-2 ring-white" />
      </span>
      <span className="flex flex-col leading-tight">
        <span className={`font-display text-base font-bold tracking-tight ${text}`}>
          CROPLAND<span className={accent}>.</span>
        </span>
        <span className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${invert ? 'text-brand-200/80' : 'text-ink-500'}`}>
          Agritech India
        </span>
      </span>
    </Link>
  )
}
