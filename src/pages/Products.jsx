import { useMemo, useState } from 'react'
import { FaSearch, FaArrowRight, FaDownload, FaTimes, FaSlidersH, FaBoxOpen } from 'react-icons/fa'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CountUp from '../components/ui/CountUp.jsx'
import ProductCard from '../components/ProductCard.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'
import { categories, products } from '../data/products.js'
import { img } from '../data/images.js'

export default function Products() {
  const [active, setActive] = useState('all')
  const [query, setQuery] = useState('')

  // Per-category counts for the filter pills
  const counts = useMemo(() => {
    const map = { all: products.length }
    for (const p of products) map[p.category] = (map[p.category] || 0) + 1
    return map
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return products.filter((p) => {
      const cat = active === 'all' || p.category === active
      if (!cat) return false
      if (!q) return true
      return (
        p.name.toLowerCase().includes(q) ||
        p.technical.toLowerCase().includes(q) ||
        p.targets.toLowerCase().includes(q) ||
        p.crops.join(' ').toLowerCase().includes(q)
      )
    })
  }, [active, query])

  const resetFilters = () => { setActive('all'); setQuery('') }
  const hasFilters = active !== 'all' || query.trim()

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-brand-100 bg-surface">
        <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <Reveal className="lg:col-span-7">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-xs">
              Product Catalogue
            </span>
            <h1 className="mt-3 font-display text-[2rem] font-bold leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              A complete toolkit
              for the <span className="font-serif-accent text-brand-700">modern Indian farm.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-600 sm:mt-5 sm:text-lg">
              Crop protection, plant nutrition, bio-solutions and specialty
              chemistries — searchable by molecule, crop or pest.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
              <Button to="/contact" variant="primary" size="lg" iconRight={FaArrowRight}>
                Request a sample
              </Button>
              <Button href="#catalogue" variant="outline" size="lg" icon={FaDownload}>
                Download PDF
              </Button>
            </div>
          </Reveal>

          {/* Hero photo — only on lg+ to keep mobile clean */}
          <Reveal delay={120} className="relative hidden lg:col-span-5 lg:block">
            <div className="relative mx-auto aspect-4/5 w-full max-w-md">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-4xl bg-brand-700" aria-hidden="true" />
              <div className="photo-treatment relative h-full w-full overflow-hidden rounded-4xl bg-brand-100 shadow-photo">
                <img
                  src={img.cropProtection}
                  alt="Cropland product range applied in the field"
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-3 bottom-10 rounded-2xl bg-white p-5 shadow-card ring-1 ring-black/4">
                <p className="font-display text-3xl font-bold text-ink-900">
                  <CountUp to={120} suffix="+" />
                </p>
                <p className="mt-0.5 text-xs text-ink-500">Registered formulations</p>
              </div>
              <div className="absolute -left-2 top-10 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-ink-800 shadow-card ring-1 ring-black/4">
                <span className="text-brand-700">●</span> 9 categories · 18 states
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Stat strip — 2 cols on mobile, 4 on lg */}
      <section className="border-b border-brand-100 bg-surface-muted py-8 sm:py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
            {[
              { v: 120, suffix: '+', l: 'Active formulations' },
              { v: 25, suffix: '+', l: 'Years on Indian farms' },
              { v: 1800, suffix: '+', l: 'Distributors nationwide' },
              { v: 14, suffix: '', l: 'Agro-climatic zones' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 80}>
                <p className="font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl lg:text-4xl">
                  <CountUp to={s.v} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-[11px] text-ink-500 sm:text-xs">{s.l}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Sticky filter bar */}
      <div
        id="catalogue"
        className="sticky top-14 z-30 border-b border-brand-100 bg-surface/90 backdrop-blur-md sm:top-16"
      >
        <Container className="py-3 sm:py-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="relative w-full sm:max-w-md">
              <span className="sr-only">Search products</span>
              <FaSearch className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-ink-400" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, molecule, crop or pest…"
                className="w-full rounded-full border border-brand-100 bg-white py-2.5 pl-11 pr-10 text-sm text-ink-900 placeholder:text-ink-500 focus:border-brand-400 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-2 top-1/2 grid h-7 w-7 -translate-y-1/2 cursor-pointer place-items-center rounded-full text-ink-500 hover:bg-brand-50 hover:text-brand-800"
                  aria-label="Clear search"
                >
                  <FaTimes className="text-xs" />
                </button>
              )}
            </label>

            {/* Category pills — horizontally scrollable */}
            <div className="relative -mx-4 sm:mx-0 sm:flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-linear-to-r from-surface to-transparent sm:hidden" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-linear-to-l from-surface to-transparent sm:hidden" />
              <div className="flex snap-x snap-mandatory gap-1.5 overflow-x-auto px-4 pb-1 sm:snap-none sm:overflow-visible sm:px-0">
                {categories.map((c) => {
                  const isActive = c.id === active
                  const count = counts[c.id] || 0
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setActive(c.id)}
                      className={`inline-flex shrink-0 cursor-pointer snap-start items-center gap-2 rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                        isActive
                          ? 'bg-brand-700 text-white shadow-soft'
                          : 'bg-surface-muted text-ink-700 ring-1 ring-brand-100 hover:bg-brand-50 hover:text-brand-800'
                      }`}
                    >
                      {c.label}
                      <span
                        className={`rounded-full px-1.5 text-[10px] font-bold ${
                          isActive ? 'bg-white/20 text-white' : 'bg-white text-ink-500 ring-1 ring-brand-100'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Results */}
      <section className="py-10 sm:py-14">
        <Container>
          <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm text-ink-600">
              <FaSlidersH className="mr-2 inline-block text-xs text-brand-700" aria-hidden="true" />
              Showing <strong className="text-ink-900">{filtered.length}</strong> of {products.length} products
              {active !== 'all' && (
                <> in <span className="font-semibold text-brand-800">{categories.find((c) => c.id === active)?.label}</span></>
              )}
              {query && <> matching “<span className="font-semibold text-brand-800">{query}</span>”</>}
            </p>
            {hasFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex cursor-pointer items-center gap-1.5 self-start text-xs font-semibold text-brand-800 hover:text-brand-900 sm:self-auto"
              >
                <FaTimes className="text-[10px]" aria-hidden="true" />
                Clear filters
              </button>
            )}
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <Reveal>
              <div className="mt-10 rounded-3xl border border-dashed border-brand-200 bg-white px-6 py-14 text-center">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-2xl text-brand-700">
                  <FaBoxOpen aria-hidden="true" />
                </span>
                <p className="mt-5 font-display text-xl font-bold text-ink-900">
                  No products match your filters.
                </p>
                <p className="mt-2 text-sm text-ink-600">
                  Try a different keyword or pick another category.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
                >
                  Reset filters
                  <FaArrowRight className="text-xs" aria-hidden="true" />
                </button>
              </div>
            </Reveal>
          ) : (
            <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p, i) => (
                <Reveal key={p.code} delay={(i % 3) * 80}>
                  <ProductCard product={p} />
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}
