import { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import {
  FaArrowRight,
  FaPhoneAlt,
  FaLeaf,
  FaShieldAlt,
  FaFlask,
  FaBoxOpen,
  FaClock,
  FaSeedling,
  FaCheckCircle,
  FaChevronRight,
  FaSprayCan,
  FaPrescriptionBottleAlt,
  FaVial,
  FaExclamationTriangle,
  FaDownload,
  FaBullseye,
} from 'react-icons/fa'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import ProductCard from '../components/ProductCard.jsx'
import ProductLabel from '../components/ProductLabel.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'
import {
  products,
  getProductBySlug,
  categoryLabel,
  formCode,
  packForm,
} from '../data/products.js'

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

  const form = packForm(product.technical)
  const code = formCode(product.technical)
  const formLabel = form === 'bottle' ? 'Liquid · Bottle' : 'Solid · Bag / Pouch'
  const FormIcon = form === 'bottle' ? FaPrescriptionBottleAlt : FaBoxOpen

  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden bg-surface">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-harvest-100/40 blur-3xl" aria-hidden="true" />

        {/* Breadcrumb */}
        <Container className="relative pt-7">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] font-medium text-ink-500">
              <li><Link to="/" className="transition-colors hover:text-brand-800">Home</Link></li>
              <FaChevronRight className="text-[8px] text-ink-400" aria-hidden="true" />
              <li><Link to="/products" className="transition-colors hover:text-brand-800">Products</Link></li>
              <FaChevronRight className="text-[8px] text-ink-400" aria-hidden="true" />
              <li>
                <Link to={`/products#${product.category}`} className="transition-colors hover:text-brand-800">
                  {categoryLabel[product.category]}s
                </Link>
              </li>
              <FaChevronRight className="text-[8px] text-ink-400" aria-hidden="true" />
              <li className="font-semibold text-ink-800" aria-current="page">{product.name}</li>
            </ol>
          </nav>
        </Container>

        <Container className="relative grid items-center gap-10 pb-14 pt-8 lg:grid-cols-12 lg:gap-16 lg:pb-20">
          {/* Pack visual */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-4/5 w-full max-w-md">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-4xl bg-brand-700/90" aria-hidden="true" />
              <div className="absolute -right-3 -bottom-3 h-24 w-24 rounded-3xl bg-harvest-300/60 blur-sm" aria-hidden="true" />
              <div className="relative h-full w-full overflow-hidden rounded-4xl bg-white shadow-photo ring-1 ring-black/5">
                <ProductLabel product={product} />
              </div>

              {product.badge && (
                <div className="absolute -right-3 top-7 rounded-full bg-harvest-300 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-900 shadow-card">
                  {product.badge}
                </div>
              )}

              <div className="absolute -left-3 bottom-7 flex items-center gap-3 rounded-2xl bg-white p-3 pr-4 shadow-card ring-1 ring-black/5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <FaCheckCircle aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">CIB&amp;RC Reg.</p>
                  <p className="font-mono text-[13px] font-bold text-ink-900">{product.reg}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink-700 ring-1 ring-brand-100">
                <span className={`h-1.5 w-1.5 rounded-full ${categoryDot[product.category]}`} />
                {categoryLabel[product.category]}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-700 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                {code}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-ink-500">{product.code}</span>
            </div>

            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.04] tracking-tight text-ink-900 sm:text-5xl">
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

            {/* Quick facts */}
            <dl className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <QuickFact icon={FaVial} label="Formulation" value={code} />
              <QuickFact icon={FormIcon} label="Pack form" value={form === 'bottle' ? 'Bottle' : 'Bag / Pouch'} />
              <QuickFact icon={FaClock} label="PHI" value={product.phi} />
              <QuickFact icon={FaBoxOpen} label="Pack sizes" value={product.pack.split(' · ')[0] + ' +'} />
            </dl>
          </div>
        </Container>
      </section>

      {/* ──────────────────── Body: content + spec sheet ──────────────────── */}
      <section className="border-y border-brand-100 bg-surface-muted py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Content */}
            <div className="space-y-5 lg:col-span-7">
              <InfoBlock
                icon={FaBullseye}
                eyebrow="Target spectrum"
                title="What it controls"
                body={product.targets}
              />
              <InfoBlock
                icon={FaFlask}
                eyebrow="Mode of action"
                title="How it works"
                body={product.moa}
              />
              <InfoBlock
                icon={FaSprayCan}
                eyebrow="Directions for use"
                title="How to apply"
                body={product.application}
              >
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <Highlight icon={FaFlask} label="Recommended dosage" value={product.dosage} accent />
                  <Highlight icon={FaClock} label="Pre-harvest interval (PHI)" value={product.phi} />
                </div>
              </InfoBlock>

              {/* Recommended crops */}
              <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-black/4">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                  <FaSeedling aria-hidden="true" /> Recommended crops
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.crops.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-sm font-semibold text-brand-800 ring-1 ring-brand-100"
                    >
                      <FaLeaf className="text-[10px] text-brand-600" aria-hidden="true" />
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Safety / stewardship */}
              <div className="flex gap-4 rounded-3xl border border-harvest-200 bg-harvest-50 p-5">
                <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-harvest-300/70 text-harvest-600">
                  <FaExclamationTriangle aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-ink-900">Use agrochemicals responsibly</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-ink-600">
                    Always read the product label and leaflet before use. Wear recommended protective
                    equipment, observe the pre-harvest interval, and keep out of reach of children and
                    livestock. Dosage may vary by crop, region and pest pressure — consult your local
                    agronomist or our technical team.
                  </p>
                </div>
              </div>
            </div>

            {/* Sticky spec sheet */}
            <aside className="lg:col-span-5">
              <div className="lg:sticky lg:top-24 space-y-4">
                <div className="overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-black/5">
                  <div className="flex items-center justify-between gap-3 border-b border-brand-100 bg-brand-700 px-5 py-4">
                    <h2 className="font-display text-base font-bold text-white">Specification sheet</h2>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      <FormIcon className="text-[11px]" aria-hidden="true" />
                      {code}
                    </span>
                  </div>
                  <dl className="divide-y divide-brand-100/80">
                    <SpecRow label="Technical name" value={product.technical} />
                    <SpecRow label="Formulation type" value={`${code} · ${formLabel}`} />
                    <SpecRow label="CIB&RC reg. no." value={product.reg} mono />
                    <SpecRow label="Product code" value={product.code} mono />
                    <SpecRow label="Recommended dosage" value={product.dosage} />
                    <SpecRow label="Pre-harvest interval" value={product.phi} />
                    <SpecRow label="Available packs" value={product.pack} />
                    <SpecRow label="Recommended crops" value={product.crops.join(', ')} />
                  </dl>
                </div>

                {/* Enquiry card */}
                <div className="rounded-3xl bg-ink-900 p-6 text-white shadow-card">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-200">
                    Distributor &amp; bulk enquiries
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-bold">
                    Get pricing &amp; availability
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">
                    Request a quote for {product.name}, ask for a technical datasheet, or talk to our
                    field team about the right pack size for your acreage.
                  </p>
                  <div className="mt-5 flex flex-col gap-2.5">
                    <Button to="/contact" variant="cta" size="md" iconRight={FaArrowRight} className="w-full">
                      Request a quote
                    </Button>
                    <Button to="/contact" variant="white" size="md" icon={FaDownload} className="w-full">
                      Technical datasheet
                    </Button>
                  </div>
                  <a
                    href="tel:+919760302690"
                    className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold text-brand-200 transition-colors hover:text-white"
                  >
                    <FaPhoneAlt className="text-xs" aria-hidden="true" />
                    +91 97603 02690
                  </a>
                </div>

                <div className="flex items-center justify-center gap-2 rounded-2xl bg-brand-50 px-4 py-3 text-[13px] font-semibold text-brand-800 ring-1 ring-brand-100">
                  <FaShieldAlt className="text-brand-600" aria-hidden="true" />
                  CIB&amp;RC registered &amp; quality assured
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ───────────────────────── Related ───────────────────────── */}
      {related.length > 0 && (
        <section className="py-16 sm:py-24">
          <Container>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Related products</span>
                <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-ink-900 sm:text-4xl">
                  More in <span className="font-serif-accent text-brand-700">{categoryLabel[product.category]}s</span>
                </h2>
              </div>
              <Link
                to={`/products#${product.category}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-900"
              >
                View all {categoryLabel[product.category].toLowerCase()}s
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

function QuickFact({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl bg-white px-3.5 py-3 shadow-soft ring-1 ring-black/4">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-50 text-brand-700">
        <Icon className="text-sm" aria-hidden="true" />
      </span>
      <p className="mt-2.5 text-[10px] font-semibold uppercase tracking-wider text-ink-500">{label}</p>
      <p className="mt-0.5 text-sm font-bold text-ink-900">{value}</p>
    </div>
  )
}

function InfoBlock({ icon: Icon, eyebrow, title, body, children }) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-black/4 sm:p-7">
      <div className="flex items-center gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700">
          <Icon aria-hidden="true" />
        </span>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">{eyebrow}</p>
          <h3 className="font-display text-xl font-bold text-ink-900">{title}</h3>
        </div>
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-ink-600">{body}</p>
      {children}
    </div>
  )
}

function Highlight({ icon: Icon, label, value, accent = false }) {
  return (
    <div className={`rounded-2xl px-4 py-3 ring-1 ${accent ? 'bg-brand-50 ring-brand-100' : 'bg-surface-muted ring-black/4'}`}>
      <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-ink-500">
        <Icon className="text-brand-600" aria-hidden="true" />
        {label}
      </p>
      <p className="mt-1 text-sm font-bold text-ink-900">{value}</p>
    </div>
  )
}

function SpecRow({ label, value, mono = false }) {
  return (
    <div className="flex items-start justify-between gap-4 px-5 py-3">
      <dt className="shrink-0 text-[13px] font-medium text-ink-500">{label}</dt>
      <dd className={`text-right text-[13px] font-semibold text-ink-900 ${mono ? 'font-mono' : ''}`}>{value}</dd>
    </div>
  )
}
