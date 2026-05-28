import Container from '../ui/Container.jsx'
import { certifications } from '../../data/stats.js'

export default function TrustStrip() {
  const items = [...certifications, ...certifications]
  return (
    <section aria-label="Certifications and compliance" className="border-y border-brand-100 bg-white">
      <Container className="py-7">
        <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
          <p className="max-w-xs text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
            Compliant with global<br />agri-input standards
          </p>
          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent" />
            <ul className="flex w-max animate-marquee gap-10">
              {items.map((c, i) => (
                <li
                  key={`${c}-${i}`}
                  className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-ink-700"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
