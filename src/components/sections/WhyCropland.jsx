import { FaArrowRight } from 'react-icons/fa'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import { img } from '../../data/images.js'

const pillars = [
  { title: 'Built for Indian agro-climates', text: 'Formulations tuned across 14 agro-climatic zones — from Punjab plains to the Konkan coast.' },
  { title: 'Residue-managed by design',      text: 'Low-PHI chemistries and export-grade MRL compliance baked in at formulation.' },
  { title: 'Agronomy at your gate',          text: 'A ground network of agronomists co-designs spray calendars with growers, FPOs and KVKs.' },
  { title: 'Stewardship that travels',       text: 'Multi-language labels, applicator training, and closed-loop container collection.' },
]

export default function WhyCropland() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Copy column */}
          <div className="lg:col-span-7 lg:order-2">
            <Reveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-xs">
                Why Cropland
              </span>
              <h2 className="mt-3 max-w-xl font-display text-[1.75rem] font-bold leading-[1.1] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
                We don&apos;t ship a product
                until <span className="font-serif-accent text-brand-700">the field signs off.</span>
              </h2>
            </Reveal>

            <ul className="mt-8 space-y-5 sm:mt-10 sm:space-y-7">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 80} as="li" className="grid grid-cols-[2.25rem_1fr] items-start gap-3 sm:grid-cols-[2.5rem_1fr] sm:gap-4">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-brand-200 bg-white font-display text-[13px] font-bold text-brand-700 sm:h-10 sm:w-10 sm:text-sm">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink-900 sm:text-lg">{p.title}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed text-ink-600 sm:mt-1.5 sm:text-[15px]">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120} className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <Button to="/about" variant="primary" size="md" iconRight={FaArrowRight}>About Cropland</Button>
              <Button to="/research" variant="ghost" size="md">Inside the lab</Button>
            </Reveal>
          </div>

          {/* Photo column */}
          <Reveal delay={100} className="relative lg:col-span-5 lg:order-1">
            <div className="relative mx-auto aspect-4/5 w-full max-w-sm sm:max-w-md">
              <div className="absolute -left-3 -top-3 h-full w-full rounded-4xl bg-brand-700 sm:-left-4 sm:-top-4" aria-hidden="true" />
              <div className="photo-treatment relative h-full w-full overflow-hidden rounded-4xl bg-brand-100 shadow-photo">
                <img
                  src={img.whyPortrait}
                  alt="Cropland agronomist evaluating crop health in the field"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -right-2 bottom-6 rounded-2xl bg-white p-4 shadow-card ring-1 ring-black/4 sm:-right-6 sm:bottom-8 sm:p-5">
                <p className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">98%</p>
                <p className="mt-0.5 max-w-32 text-[11px] leading-snug text-ink-500 sm:max-w-40 sm:text-xs">
                  of dealers re-ordered within the same season
                </p>
              </div>

              <div className="absolute -left-2 top-6 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-ink-800 shadow-card ring-1 ring-black/4 sm:top-8 sm:px-3.5 sm:py-2 sm:text-xs">
                <span className="text-brand-700">●</span> Trials in 14 zones
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
