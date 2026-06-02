import { FaArrowRight, FaCheckCircle, FaWhatsapp } from 'react-icons/fa'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { img } from '../../data/images.js'

const heroStats = [
  { v: '25+', l: 'Years on Indian farms' },
  { v: '120+', l: 'Registered formulations' },
  { v: '18', l: 'States served' },
]

const heroChecks = ['Trusted by growers', 'Modern product catalogue', 'Residue-aware usage']

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-ink-900 text-white">
      {/* Full-bleed background photograph */}
      <img
        src={img.heroWide}
        alt="Cropland Agritech crop-protection products in an Indian farm field"
        loading="eager"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full scale-105 object-cover object-center"
      />

      {/* Layered overlays — depth + legibility */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-t from-ink-900 from-15% via-ink-900/70 via-55% to-ink-900/45"
        aria-hidden="true"
      />
      {/* Centered vignette for text legibility */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_50%,transparent_30%,rgba(14,26,18,0.6)_100%)]"
        aria-hidden="true"
      />
      {/* Warm brand glow accent */}
      <div
        className="absolute -bottom-24 left-1/4 -z-10 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative flex w-full flex-col py-14 sm:py-16 lg:py-20">
        {/* Full-width copy */}
        <div className="flex w-full flex-col">
          <span className="inline-flex w-fit animate-fade-up items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-100 backdrop-blur sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-300" />
            </span>
            Crop protection · Nutrition · Bio-solutions
          </span>

          <h1 className="mt-5 font-display text-[2.6rem] font-bold leading-[0.95] tracking-tight text-white drop-shadow-sm sm:text-4xl lg:text-[4rem] xl:text-[5rem]">
            CROPLAND AGRITECH INDIA
            <span className="mt-2 block font-serif-accent text-[2.1rem] font-medium text-harvest-200 sm:text-5xl lg:text-[3.5rem]">
              for every Indian farmer.
            </span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-brand-100/90 sm:text-lg">
            Crop protection, plant nutrition and bio-solutions — with practical
            guidance for growers, retailers and distributors.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5 text-[13px] font-medium text-brand-100 sm:gap-x-6 sm:text-sm">
            {heroChecks.map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <FaCheckCircle className="shrink-0 text-brand-300" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button to="/products" variant="cta" size="lg" iconRight={FaArrowRight}>
              Explore Products
            </Button>
            <Button to="/contact" variant="white" size="lg" icon={FaWhatsapp}>
              WhatsApp enquiry
            </Button>
          </div>

          {/* Inline stats */}
          <dl className="mt-9 grid grid-cols-3 gap-x-4 gap-y-5 border-t border-white/15 pt-6 sm:flex sm:flex-wrap sm:gap-x-12">
            {heroStats.map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">
                  {s.v}
                </dt>
                <dd className="mt-1 text-[10px] font-medium leading-tight text-brand-100/70 sm:text-xs">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>

      
      </Container>

      {/* Bottom fade into next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-ink-900 to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
