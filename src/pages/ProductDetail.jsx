import { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  FaArrowLeft,
  FaArrowRight,
  FaPhoneAlt,
  FaLeaf,
  FaShieldAlt,
  FaFlask,
  FaBoxOpen,
  FaClock,
  FaSeedling,
  FaCheckCircle,
} from 'react-icons/fa'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import ProductCard from '../components/ProductCard.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'
import { products, getProductBySlug, categoryLabel } from '../data/products.js'

const categoryDot = {
  insecticide: 'bg-brand-500',
  fungicide:   'bg-harvest-400',
  herbicide:   'bg-soil-400',
  nutrition:   'bg-brand-400',
  bio:         'bg-emerald-500',
  pgr:         'bg-amber-500',
}

export default function ProductDetail() {
  const { productSlug } = useParams()
  const product = useMemo(() => getProductBySlug(productSlug), [productSlug])

  if (!product) return <Navigate to="/products" replace />

  const related = products
    .filter((p) => p.code !== product.code && p.category === product.category)
    .slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative bg-surface">
        <Container className="pt-8 pb-4">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-600 transition-colors hover:text-brand-800"
          >
            <FaArrowLeft className="text-xs" aria-hidden="true" />
            Back to catalogue
          </Link>
        </Container>

        <Container className="grid items-center gap-12 pb-16 pt-6 lg:grid-cols-12 lg:gap-16 lg:pb-24">
          {/* Image */}
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto aspect-4/5 w-full max-w-lg">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-4xl bg-brand-700" aria-hidden="true" />
              <div className="photo-treatment relative h-full w-full overflow-hidden rounded-4xl bg-brand-100 shadow-photo">
                <img
                  src={product.image}
                  alt={`${product.name} — ${product.technical}`}
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
              {product.badge && (
                <div className="absolute -right-3 top-8 rounded-full bg-harvest-300 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-900 shadow-card">
                  {product.badge}
                </div>
              )}
              <div className="absolute -left-3 bottom-8 flex items-center gap-3 rounded-2xl bg-white p-3 pr-4 shadow-card ring-1 ring-black/4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <FaCheckCircle aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">CIB&amp;RC</p>
                  <p className="text-sm font-bold text-ink-900">Registered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-6">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-700 ring-1 ring-brand-100">
                <span className={`h-1.5 w-1.5 rounded-full ${categoryDot[product.category]}`} />
                {categoryLabel[product.category]}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-500">{product.code}</span>
            </div>

            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-3 text-lg font-semibold text-brand-800">{product.technical}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-600">{product.summary}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/contact" variant="primary" size="lg" iconRight={FaArrowRight}>
                Request a quote
              </Button>
              <Button href="tel:+919760302690" variant="outline" size="lg" icon={FaPhoneAlt}>
                Call sales
              </Button>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-brand-100 pt-6 sm:grid-cols-3">
              <Spec icon={FaSeedling} label="Crops" value={product.crops.join(', ')} />
              <Spec icon={FaBoxOpen} label="Pack sizes" value={product.pack} />
              <Spec icon={FaClock} label="PHI" value={product.phi} />
            </dl>
          </div>
        </Container>
      </section>

      {/* Detail blocks */}
      <section className="border-y border-brand-100 bg-surface-muted py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            <DetailCard
              icon={FaLeaf}
              eyebrow="Target spectrum"
              title="What it controls"
              body={product.targets}
            />
            <DetailCard
              icon={FaFlask}
              eyebrow="Mode of action"
              title="How it works"
              body={product.moa}
            />
            <DetailCard
              icon={FaShieldAlt}
              eyebrow="Application"
              title="How to use"
              body={product.application}
              footer={
                <div className="rounded-xl bg-brand-50 px-3 py-2 text-sm">
                  <span className="font-semibold text-brand-800">Recommended dosage · </span>
                  <span className="text-ink-700">{product.dosage}</span>
                </div>
              }
            />
          </div>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-20 sm:py-24">
          <Container>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Related products</span>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
                  More in <span className="font-serif-accent text-brand-700">{categoryLabel[product.category]}</span>
                </h2>
              </div>
              <Link
                to={`/products#${product.category}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-900"
              >
                View all {categoryLabel[product.category].toLowerCase()}
                <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.code} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBanner />
    </>
  )
}

function Spec({ icon: Icon, label, value }) {
  return (
    <div>
      <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-ink-500">
        <Icon className="text-brand-700" aria-hidden="true" />
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-ink-900">{value}</p>
    </div>
  )
}

function DetailCard({ icon: Icon, eyebrow, title, body, footer }) {
  return (
    <div className="flex flex-col rounded-3xl bg-white p-6 shadow-soft ring-1 ring-black/4">
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
        <Icon aria-hidden="true" />
      </span>
      <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-brand-700">{eyebrow}</p>
      <h3 className="mt-1 font-display text-xl font-bold text-ink-900">{title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-600">{body}</p>
      {footer && <div className="mt-5">{footer}</div>}
    </div>
  )
}
