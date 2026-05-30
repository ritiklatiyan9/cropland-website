import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { products, slug, categoryLabel } from '../../data/products.js'
import ProductLabel from '../ProductLabel.jsx'

const categoryDot = {
  insecticide: 'bg-brand-500',
  fungicide:   'bg-harvest-400',
  herbicide:   'bg-soil-400',
  nutrition:   'bg-brand-400',
  bio:         'bg-emerald-500',
  pgr:         'bg-amber-500',
}

export default function ProductCarousel() {
  const loop = [...products, ...products]

  return (
    <section className="relative overflow-hidden bg-surface-muted py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end md:gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-xs">Full range</span>
            <h2 className="mt-3 font-display text-[1.75rem] font-bold leading-[1.1] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Every product,
              one <span className="font-serif-accent text-brand-700">scroll away.</span>
            </h2>
          </div>
          <Button to="/products" variant="outline" size="md" iconRight={FaArrowRight}>
            Open catalogue
          </Button>
        </div>
      </Container>

      <div className="relative mt-8 sm:mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-surface-muted to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-surface-muted to-transparent sm:w-32" />

        <div
          className="group flex w-max gap-4 animate-marquee py-2 sm:gap-5"
          style={{ animationDuration: '150s' }}
        >
          {loop.map((p, i) => (
            <Link
              key={`${p.code}-${i}`}
              to={`/products/${slug(p.code)}`}
              className="relative flex w-60 shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/4 transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:w-72 sm:rounded-3xl"
              aria-label={`Open ${p.name} details`}
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <div className="h-full w-full transition-transform duration-700 hover:scale-105">
                  <ProductLabel product={p} />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-ink-900/30 via-transparent to-transparent" />
                <span className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink-700">
                  <span className={`h-1.5 w-1.5 rounded-full ${categoryDot[p.category]}`} />
                  {categoryLabel[p.category]}
                </span>
                {p.badge && (
                  <span className="absolute right-3 top-3 inline-flex items-center rounded-full bg-harvest-300 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-900">
                    {p.badge}
                  </span>
                )}
                <p className="absolute bottom-3 left-3 font-mono text-[10px] font-semibold uppercase tracking-wider text-white/90">
                  {p.code}
                </p>
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-5">
                <h3 className="font-display text-base font-bold text-ink-900 sm:text-lg">{p.name}</h3>
                <p className="mt-1 line-clamp-2 text-[13px] text-ink-600 sm:text-sm">{p.technical}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-800 sm:mt-4 sm:text-sm">
                  View details <FaArrowRight className="text-xs" aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
