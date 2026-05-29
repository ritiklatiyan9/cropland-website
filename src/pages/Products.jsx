import { useMemo, useState } from 'react'
import {
  FaArrowRight,
  FaBoxOpen,
  FaDownload,
  FaSearch,
  FaSlidersH,
  FaTimes,
} from 'react-icons/fa'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import ProductCard from '../components/ProductCard.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'
import { categories, products } from '../data/products.js'

export default function Products() {
  const [active, setActive] = useState('all')
  const [query, setQuery] = useState('')

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
  const activeLabel = categories.find((c) => c.id === active)?.label || 'All Products'

  return (
    <>
      <section id="catalogue" className="border-b border-brand-100 bg-surface">
        <Container className="py-4 sm:py-5">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700">Catalogue</span>
              <h1 className="mt-1 font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
                Products
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm text-ink-600">
              <span className="inline-flex h-8 items-center rounded-full bg-white px-3 font-semibold shadow-soft ring-1 ring-brand-100">
                {filtered.length} / {products.length} shown
              </span>
              <Button to="/contact" variant="outline" size="sm" icon={FaDownload}>
                Catalogue PDF
              </Button>
            </div>
          </div>

          <div className="mt-4 grid gap-2 lg:grid-cols-[minmax(14rem,19rem)_1fr_auto] lg:items-center">
            <label className="relative block">
              <span className="sr-only">Search products</span>
              <FaSearch className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-xs text-ink-400" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search product, crop or pest"
                className="h-9 w-full rounded-full border border-brand-100 bg-white pl-9 pr-9 text-[13px] font-medium text-ink-900 shadow-soft placeholder:text-ink-500 focus:border-brand-400 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-1 top-1/2 grid h-7 w-7 -translate-y-1/2 cursor-pointer place-items-center rounded-full text-ink-500 transition-colors hover:bg-brand-50 hover:text-brand-800"
                  aria-label="Clear search"
                >
                  <FaTimes className="text-xs" />
                </button>
              )}
            </label>

            <div className="relative -mx-4 sm:mx-0">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-linear-to-r from-surface to-transparent sm:hidden" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-linear-to-l from-surface to-transparent sm:hidden" />
              <div className="flex snap-x snap-mandatory gap-1.5 overflow-x-auto px-4 pb-0.5 sm:px-0">
                {categories.map((c) => {
                  const isActive = c.id === active
                  return (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setActive(c.id)}
                      className={`inline-flex h-9 shrink-0 cursor-pointer snap-start items-center gap-1.5 rounded-full px-3 text-xs font-semibold transition-all duration-200 ${
                        isActive
                          ? 'bg-ink-900 text-white shadow-soft'
                          : 'bg-white text-ink-700 ring-1 ring-brand-100 hover:bg-brand-50 hover:text-brand-800'
                      }`}
                    >
                      {c.label}
                      <span className={`rounded-full px-1.5 text-[10px] font-bold ${isActive ? 'bg-white/20 text-white' : 'bg-surface-muted text-ink-500'}`}>
                        {counts[c.id] || 0}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {hasFilters && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex h-9 w-fit cursor-pointer items-center gap-2 rounded-full bg-white px-3 text-xs font-semibold text-ink-700 shadow-soft ring-1 ring-brand-100 transition-colors hover:text-brand-800"
              >
                <FaTimes className="text-[10px]" aria-hidden="true" />
                Clear
              </button>
            )}
          </div>
        </Container>
      </section>

      <section className="py-6 sm:py-8 lg:py-10">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-100 pb-4">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800">
              <FaSlidersH className="text-xs" aria-hidden="true" />
              {activeLabel}
              {query && <span className="text-ink-500">matching "{query}"</span>}
            </p>
          </div>

          {filtered.length === 0 ? (
            <Reveal>
              <div className="mt-10 border border-dashed border-brand-200 bg-white px-6 py-14 text-center shadow-soft">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-2xl text-brand-700">
                  <FaBoxOpen aria-hidden="true" />
                </span>
                <p className="mt-5 font-display text-xl font-bold text-ink-900">
                  No products match your filters.
                </p>
                <p className="mt-2 text-sm text-ink-600">
                  Try another crop, molecule or category.
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
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {filtered.map((p, i) => (
                <Reveal key={p.code} delay={(i % 3) * 70}>
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
