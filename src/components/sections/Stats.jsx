import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'
import { img } from '../../data/images.js'
import { stats } from '../../data/stats.js'

export default function Stats() {
  return (
    <section aria-label="Company by the numbers" className="relative py-10 sm:py-16">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 shadow-card sm:rounded-4xl">
            <img
              src={img.fields}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-linear-to-r from-ink-900 via-ink-900/85 to-brand-900/70" aria-hidden="true" />

            <div className="relative grid grid-cols-2 gap-px lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="p-5 sm:p-8 lg:p-10">
                  <p className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                    {s.value}
                  </p>
                  <p className="mt-1.5 text-[11px] font-medium text-brand-100 sm:mt-2 sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
