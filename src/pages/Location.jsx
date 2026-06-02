import { useParams, Navigate, Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaLeaf,
  FaSeedling,
  FaShieldAlt,
  FaBug,
  FaCheckCircle,
  FaChevronRight,
} from 'react-icons/fa'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import ProductCard from '../components/ProductCard.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'
import Seo from '../components/Seo.jsx'
import JsonLd from '../components/JsonLd.jsx'
import { getLocationBySlug, locations } from '../data/locations.js'
import { products } from '../data/products.js'
import { img } from '../data/images.js'
import { NAP } from '../seo/site.js'
import {
  localBusinessSchema,
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
} from '../seo/schema.js'
import { ABS } from '../seo/site.js'

export default function Location() {
  const { citySlug } = useParams()
  const loc = getLocationBySlug(citySlug)

  if (!loc) return <Navigate to="/" replace />

  const path = `/pesticide-company/${loc.slug}`
  const featured = loc.productCodes
    .map((code) => products.find((p) => p.code === code))
    .filter(Boolean)
  const others = locations.filter((l) => l.slug !== loc.slug)
  const cityLabel = loc.shortCity || loc.city

  return (
    <>
      <Seo
        title={loc.metaTitle}
        rawTitle
        description={loc.metaDescription}
        path={path}
        keywords={`pesticide company in ${loc.city}, pesticide dealer ${cityLabel}, agrochemical company ${cityLabel}, insecticide herbicide fungicide ${cityLabel}, crop protection ${cityLabel}`}
      />
      <JsonLd
        data={[
          organizationSchema(),
          localBusinessSchema({
            id: `${ABS(path)}#localbusiness`,
            name: `Cropland Agritech — Pesticide Company in ${loc.city}`,
            url: ABS(path),
            areaServedName: loc.city,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: `Pesticide Company in ${cityLabel}`, path },
          ]),
          faqSchema(loc.faqs),
        ]}
      />

      {/* ───────── Hero ───────── */}
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <img src={img.heroField} alt="" loading="eager" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink-900 from-20% via-ink-900/90 via-60% to-ink-900/50" aria-hidden="true" />

        <Container className="py-12 sm:py-16 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] font-medium text-brand-100/80">
              <li><Link to="/" className="transition-colors hover:text-white">Home</Link></li>
              <FaChevronRight className="text-[8px]" aria-hidden="true" />
              <li className="font-semibold text-white" aria-current="page">Pesticide Company in {cityLabel}</li>
            </ol>
          </nav>

          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-100 backdrop-blur">
            <FaMapMarkerAlt className="text-brand-300" aria-hidden="true" />
            {loc.region}
          </span>
          <h1 className="mt-5 max-w-4xl font-display text-[2.3rem] font-bold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {loc.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
            {loc.lede}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Button href={`https://wa.me/${NAP.whatsapp}`} variant="cta" size="lg" icon={FaWhatsapp}>
              WhatsApp enquiry
            </Button>
            <Button href={`tel:${NAP.phoneE164}`} variant="white" size="lg" icon={FaPhoneAlt}>
              {NAP.phone}
            </Button>
          </div>
        </Container>
      </section>

      {/* ───────── Intro + crops ───────── */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
                Crop protection for {cityLabel}
              </span>
              <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-700 sm:text-base">
                {loc.intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>

              <h2 className="mt-9 font-display text-2xl font-bold text-ink-900">
                Major crops we support around {cityLabel}
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {loc.crops.map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3.5 py-1.5 text-sm font-semibold text-brand-800 ring-1 ring-brand-100">
                    <FaLeaf className="text-[11px] text-brand-600" aria-hidden="true" />
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Local desk card */}
            <aside className="lg:col-span-5">
              <div className="rounded-3xl bg-white p-6 shadow-card ring-1 ring-brand-100 sm:p-7 lg:sticky lg:top-28">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700 ring-1 ring-brand-100">
                  <FaShieldAlt aria-hidden="true" /> CIB&amp;RC registered
                </span>
                <h2 className="mt-4 font-display text-xl font-bold text-ink-900">
                  Buy from a local manufacturer
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">
                  Cropland Agritech manufactures its full range at Pinna, Muzaffarnagar and supplies
                  dealers and farmers across {cityLabel}. Genuine, registered product — direct from the source.
                </p>
                <dl className="mt-5 space-y-3 border-t border-brand-100 pt-5 text-sm">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-0.5 shrink-0 text-brand-600" aria-hidden="true" />
                    <dd className="text-ink-700">{NAP.address.full}</dd>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhoneAlt className="shrink-0 text-brand-600" aria-hidden="true" />
                    <dd><a href={`tel:${NAP.phoneE164}`} className="font-semibold text-ink-900 hover:text-brand-800">{NAP.phone}</a></dd>
                  </div>
                </dl>
                <Button to="/contact" variant="primary" size="md" iconRight={FaArrowRight} className="mt-5 w-full">
                  Get a quote / dealership
                </Button>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* ───────── Local pest & disease problems ───────── */}
      <section className="border-y border-brand-100 bg-surface-muted py-12 sm:py-16">
        <Container>
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            Pest &amp; disease pressure around {cityLabel}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600">
            The problems we help {cityLabel} growers and dealers solve through the season.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {loc.problems.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70}>
                <div className="h-full rounded-3xl bg-white p-6 shadow-soft ring-1 ring-brand-100">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                    <FaBug aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────── Featured products ───────── */}
      {featured.length > 0 && (
        <section className="py-12 sm:py-16">
          <Container>
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Recommended range</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                  Products for {cityLabel} crops
                </h2>
              </div>
              <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-900">
                View full catalogue <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((p) => <ProductCard key={p.code} product={p} />)}
            </div>
          </Container>
        </section>
      )}

      {/* ───────── Why us + areas served ───────── */}
      <section className="border-t border-brand-100 bg-surface-muted py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                Why {cityLabel} dealers and farmers choose Cropland
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {loc.highlights.map((h) => (
                  <div key={h.title} className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-brand-100">
                    <FaCheckCircle className="text-brand-600" aria-hidden="true" />
                    <h3 className="mt-3 font-display text-base font-bold text-ink-900">{h.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                Areas we supply near {cityLabel}
              </h2>
              <p className="mt-2 text-sm text-ink-600">We deliver to dealers across:</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {[...new Set(loc.nearbyAreas)].map((a) => (
                  <span key={a} className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-medium text-ink-700 ring-1 ring-brand-100">
                    <FaSeedling className="text-[10px] text-brand-600" aria-hidden="true" />
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="py-12 sm:py-16">
        <Container className="max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">
            Pesticide supply in {cityLabel} — FAQs
          </h2>
          <div className="mt-6 space-y-3">
            {loc.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white p-5 shadow-soft ring-1 ring-brand-100">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-bold text-ink-900 marker:content-none">
                  {f.q}
                  <FaChevronRight className="shrink-0 text-xs text-brand-600 transition-transform group-open:rotate-90" aria-hidden="true" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{f.a}</p>
              </details>
            ))}
          </div>

          {/* Internal links to other locations */}
          <div className="mt-10 rounded-2xl bg-brand-50/70 p-5 ring-1 ring-brand-100">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">We also serve</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {others.map((o) => (
                <Link
                  key={o.slug}
                  to={`/pesticide-company/${o.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-brand-800 ring-1 ring-brand-100 transition-colors hover:bg-brand-700 hover:text-white"
                >
                  <FaMapMarkerAlt className="text-[11px]" aria-hidden="true" />
                  {o.shortCity || o.city}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}
