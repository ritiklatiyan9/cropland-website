import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { slug, categoryLabel } from '../data/products.js'

const categoryDot = {
  insecticide: 'bg-brand-500',
  fungicide:   'bg-harvest-400',
  herbicide:   'bg-soil-400',
  nutrition:   'bg-brand-400',
  bio:         'bg-emerald-500',
  pgr:         'bg-amber-500',
}

export default function ProductCard({ product, className = '' }) {
  const href = `/products/${slug(product.code)}`
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-black/4 transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:rounded-3xl ${className}`}
    >
      <Link to={href} className="relative block aspect-4/3 overflow-hidden bg-brand-100">
        <img
          src={product.image}
          alt={`${product.name} — ${product.technical}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ink-900/45 via-transparent to-transparent" aria-hidden="true" />

        {product.badge && (
          <span className="absolute right-2 top-2 inline-flex items-center rounded-full bg-harvest-300 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-ink-900 shadow-soft sm:right-3 sm:top-3 sm:px-2.5 sm:py-1 sm:text-[10px]">
            {product.badge}
          </span>
        )}

        <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-white/95 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-ink-700 backdrop-blur-sm sm:left-3 sm:top-3 sm:gap-2 sm:px-2.5 sm:py-1 sm:text-[10px]">
          <span className={`h-1 w-1 rounded-full sm:h-1.5 sm:w-1.5 ${categoryDot[product.category]}`} />
          <span className="hidden sm:inline">{categoryLabel[product.category]}</span>
          <span className="sm:hidden">{categoryLabel[product.category].split(' ')[0]}</span>
        </span>

        <p className="absolute bottom-2 left-2 font-mono text-[9px] font-semibold uppercase tracking-wider text-white/95 sm:bottom-3 sm:left-3 sm:text-[10px]">
          {product.code}
        </p>
      </Link>

      <div className="flex flex-1 flex-col p-3 sm:p-5">
        <Link to={href}>
          <h3 className="font-display text-[15px] font-bold leading-tight text-ink-900 transition-colors group-hover:text-brand-800 sm:text-lg lg:text-xl">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-[12px] font-semibold leading-snug text-brand-800 sm:line-clamp-none sm:text-[13px]">
          {product.technical}
        </p>

        <dl className="mt-2.5 hidden space-y-1.5 text-[13px] sm:mt-4 sm:block">
          <div className="grid grid-cols-[4rem_1fr] gap-2 sm:grid-cols-[4.5rem_1fr]">
            <dt className="text-ink-500">Crops</dt>
            <dd className="text-ink-800">{product.crops.join(', ')}</dd>
          </div>
          <div className="grid grid-cols-[4rem_1fr] gap-2 sm:grid-cols-[4.5rem_1fr]">
            <dt className="text-ink-500">Pack</dt>
            <dd className="text-ink-800">{product.pack}</dd>
          </div>
        </dl>

        {/* Compact mobile-only meta */}
        <p className="mt-2 line-clamp-1 text-[11px] text-ink-500 sm:hidden">
          {product.crops.join(' · ')}
        </p>

        <Link
          to={href}
          className="mt-3 inline-flex items-center gap-1.5 self-start text-[12px] font-semibold text-brand-800 transition-transform duration-300 group-hover:translate-x-0.5 sm:mt-5 sm:text-sm"
        >
          View details
          <FaArrowRight className="text-[10px] sm:text-xs" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
