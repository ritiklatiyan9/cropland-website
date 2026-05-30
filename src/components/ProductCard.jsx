import { Link } from 'react-router-dom'
import { FaArrowRight, FaSeedling } from 'react-icons/fa'
import { slug, categoryLabel } from '../data/products.js'
import ProductLabel from './ProductLabel.jsx'

const categoryDot = {
  insecticide: 'bg-brand-500',
  fungicide: 'bg-harvest-400',
  herbicide: 'bg-soil-400',
  nutrition: 'bg-brand-400',
  bio: 'bg-emerald-500',
  pgr: 'bg-amber-500',
}

export default function ProductCard({ product, className = '' }) {
  const href = `/products/${slug(product.code)}`
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card ${className}`}
    >
      <Link to={href} className="relative block aspect-16/10 overflow-hidden bg-brand-50">
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
          <ProductLabel product={product} />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-ink-900/45 via-transparent to-transparent" aria-hidden="true" />

        <span className="absolute left-3 top-3 inline-flex max-w-[58%] items-center gap-2 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-700 shadow-soft backdrop-blur">
          <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${categoryDot[product.category]}`} />
          <span className="truncate">{categoryLabel[product.category]}</span>
        </span>

        {product.badge && (
          <span className="absolute right-3 top-3 inline-flex max-w-[40%] rounded-full bg-harvest-300 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-ink-900 shadow-soft">
            {product.badge}
          </span>
        )}

        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-3">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-white/95">
            {product.code}
          </p>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand-800 shadow-soft transition-transform duration-300 group-hover:translate-x-0.5">
            <FaArrowRight className="text-xs" aria-hidden="true" />
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link to={href} className="block">
          <h3 className="line-clamp-1 font-display text-base font-bold leading-tight text-ink-900 transition-colors group-hover:text-brand-800 sm:text-lg">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-1 text-[13px] font-semibold leading-snug text-brand-800">
          {product.technical}
        </p>

        <div className="mt-3 flex min-w-0 items-center gap-2 rounded-xl bg-surface-muted px-3 py-2 text-xs">
          <FaSeedling className="shrink-0 text-brand-700" aria-hidden="true" />
          <span className="min-w-0 flex-1 truncate font-semibold text-ink-800">
            {product.crops.join(', ')}
          </span>
          <span className="shrink-0 rounded-full bg-white px-2 py-0.5 font-bold text-ink-600 ring-1 ring-brand-100">
            {product.pack.split(' · ')[0]}
          </span>
        </div>

        <div className="mt-auto pt-4">
          <Link
            to={href}
            className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-full bg-ink-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
          >
            View
            <FaArrowRight className="text-xs" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
