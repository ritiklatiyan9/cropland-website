import { FaArrowRight, FaPlay, FaLeaf, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import { img } from '../../data/images.js'

const heroStats = [
  { v: '25+', l: 'Years on Indian farms' },
  { v: '120+', l: 'Registered formulations' },
  { v: '18', l: 'States · Pan-India' },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 text-white">
      {/* Full-bleed background photograph */}
      <img
        src={img.heroWide}
        alt=""
        loading="eager"
        fetchpriority="high"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right"
      />

      {/* Desktop gradient — heavy on left, fades to reveal the field on right */}
      <div
        className="absolute inset-0 -z-10 hidden bg-linear-to-r from-ink-900 from-10% via-ink-900/85 via-45% to-ink-900/10 lg:block"
        aria-hidden="true"
      />
      {/* Mobile gradient — heavy bottom-to-top for full-width text legibility */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-t from-ink-900 from-30% via-ink-900/80 to-ink-900/60 lg:hidden"
        aria-hidden="true"
      />

      <Container className="relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:py-32">
        {/* Left — copy */}
        <div className="lg:col-span-7">
          <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-100 backdrop-blur sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-300" />
            </span>
            CIB&amp;RC · ISO 9001 · GMP
          </span>

          <h1 className="mt-5 font-display text-[2.25rem] font-bold leading-[1.02] tracking-tight text-white sm:mt-6 sm:text-6xl lg:text-[5rem]">
            CROPLAND AGRITECH
            <br />
            <span className="font-serif-accent text-harvest-200">for every Indian farmer.</span>
          </h1>

          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-brand-100 sm:mt-7 sm:gap-x-6 sm:text-sm">
            {['Trusted by 500K+ growers', '120+ formulations', 'Export-grade residue'].map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <FaCheckCircle className="shrink-0 text-brand-300" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-9">
            <Button to="/products" variant="cta" size="lg" iconRight={FaArrowRight}>
              Explore Products
            </Button>
            <Button to="/research" variant="white" size="lg" icon={FaPlay}>
              See how we make it
            </Button>
          </div>

          {/* Inline stats — clean, no boxes, white type on dark */}
          <dl className="mt-10 grid grid-cols-3 gap-x-4 gap-y-6 border-t border-white/10 pt-6 sm:mt-14 sm:flex sm:flex-wrap sm:gap-x-10 sm:pt-8">
            {heroStats.map((s) => (
              <div key={s.l}>
                <dt className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                  {s.v}
                </dt>
                <dd className="mt-0.5 text-[10px] font-medium text-brand-100/80 sm:text-xs">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right — floating chips overlaid on the visible field area (desktop only) */}
        <div className="relative hidden lg:col-span-5 lg:block">
          <div className="relative mx-auto h-[28rem] w-full max-w-md">
            <div className="absolute right-0 top-4 w-64 rounded-2xl bg-white/95 p-5 text-ink-900 shadow-card backdrop-blur ring-1 ring-black/4 animate-float">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-800">
                  <FaLeaf className="text-[10px]" aria-hidden="true" /> Live field data
                </span>
                <span className="rounded-full bg-harvest-200 px-2 py-0.5 text-[10px] font-bold text-harvest-600">
                  Kharif &apos;26
                </span>
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-ink-500">
                Avg. yield uplift
              </p>
              <p className="mt-1 font-display text-4xl font-bold tracking-tight text-ink-900">
                +18<span className="text-2xl text-ink-500">%</span>
              </p>
              <p className="mt-2 text-xs leading-snug text-ink-600">
                Across cotton plots on Cropland&apos;s integrated program
              </p>
            </div>

            <div
              className="absolute -left-2 top-44 flex items-center gap-3 rounded-2xl bg-white/95 p-3 pr-4 text-ink-900 shadow-card ring-1 ring-black/4 backdrop-blur animate-float"
              style={{ animationDelay: '1.2s' }}
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                <FaShieldAlt aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">Residue</p>
                <p className="text-sm font-bold text-ink-900">Export-grade</p>
              </div>
            </div>

            <div className="absolute bottom-6 right-4 flex items-center gap-3 rounded-2xl bg-ink-800/85 p-3 pr-4 shadow-card ring-1 ring-white/10 backdrop-blur">
              <div className="flex -space-x-2">
                {[img.farmer1, img.farmer2, img.farmer3].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    loading="lazy"
                    className="h-9 w-9 rounded-full border-2 border-ink-800 object-cover"
                  />
                ))}
              </div>
              <div>
                <p className="font-display text-base font-bold text-white">500K+</p>
                <p className="text-[11px] font-medium text-brand-100/80">Indian growers</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
