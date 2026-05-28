import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'
import { solutions } from '../../data/solutions.js'

export default function Solutions() {
  return (
    <section id="solutions" className="relative bg-surface-muted py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-6">
          <Reveal className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-xs">What we make</span>
            <h2 className="mt-3 font-display text-[1.75rem] font-bold leading-[1.1] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Four pillars.{' '}
              <span className="font-serif-accent text-ink-700">One resilient farm.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Link
              to="/products"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-800 transition-colors hover:text-brand-900"
            >
              Browse the full catalogue
              <FaArrowRight className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <Reveal key={s.id} delay={(i % 4) * 60}>
              <Link
                to={`/products#${s.id}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/4 transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:rounded-3xl"
              >
                <div className="relative aspect-5/4 overflow-hidden">
                  <img
                    src={s.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-2 top-2 inline-flex items-center rounded-full bg-white/95 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-brand-800 backdrop-blur-sm sm:left-4 sm:top-4 sm:px-2.5 sm:py-1 sm:text-[10px]">
                    {s.tag.split(' · ')[0]}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <h3 className="font-display text-base font-bold text-ink-900 sm:text-xl">{s.title}</h3>
                  <p className="mt-1 hidden text-[11px] font-semibold uppercase tracking-wider text-brand-700 sm:block">
                    {s.tag}
                  </p>
                  <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-ink-600 sm:mt-3 sm:line-clamp-none sm:text-sm">
                    {s.description}
                  </p>

                  <ul className="mt-4 hidden space-y-1.5 text-sm text-ink-700 sm:block">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-800 sm:mt-6 sm:text-sm">
                    View range
                    <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover:translate-x-1 sm:text-xs" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
