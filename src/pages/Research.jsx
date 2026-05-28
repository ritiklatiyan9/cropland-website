import { FaFlask, FaMicroscope, FaSeedling, FaShieldAlt, FaRecycle, FaChartLine, FaArrowRight } from 'react-icons/fa'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CountUp from '../components/ui/CountUp.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'
import { img } from '../data/images.js'

const stages = [
  { icon: FaMicroscope, title: 'Discovery', text: 'Active molecule sourcing, IP screening, efficacy modelling.' },
  { icon: FaFlask, title: 'Formulation', text: 'EC, SC, WDG, WP — built for Indian water hardness & sprayers.' },
  { icon: FaShieldAlt, title: 'Tox & Eco-tox', text: 'Operator, beneficial-insect, soil-half-life — independently audited.' },
  { icon: FaSeedling, title: 'Field Trials', text: '3-year, 14-zone replicated trials across kharif and rabi.' },
  { icon: FaChartLine, title: 'Registration', text: 'CIB&RC and global registration packs prepared in-house.' },
  { icon: FaRecycle, title: 'Stewardship', text: 'Container collection, residue advisories, IPM training.' },
]

const focus = [
  { title: 'Bio-pesticides & Microbials', tag: 'Bio',       text: 'Trichoderma, Pseudomonas, Bacillus consortia — shelf-life > 18 months.' },
  { title: 'Low-PHI Formulations',       tag: 'Residue',   text: 'Re-engineering legacy chemistries for export-grade MRL compliance.' },
  { title: 'Precision Nutrition',        tag: 'Nutrition', text: 'Chelated micronutrients matched to soil-test maps + crop stage.' },
  { title: 'Adjuvant Systems',           tag: 'Adjuvants', text: 'Spreader-sticker and drift-control agents for variable spray quality.' },
]

const numbers = [
  { v: 80,  suffix: '+',  l: 'R&D scientists & agronomists' },
  { v: 38,  suffix: '',   l: 'Active patents' },
  { v: 14,  suffix: '',   l: 'Agro-climatic zones in trial' },
  { v: 6,   suffix: ' yr', l: 'Avg. development cycle' },
]

export default function Research() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-brand-100 bg-surface">
        <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <Reveal className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">R&amp;D + Innovation</span>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              Where the molecule meets
              the <span className="font-serif-accent text-brand-700">monsoon.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
              An 80-strong team works across formulation chemistry, microbiology,
              agronomy and analytical sciences. Every Cropland product cleared
              this pipeline — there are no shortcuts between the lab and the leaf.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/products" variant="primary" size="lg" iconRight={FaArrowRight}>See the output</Button>
              <Button to="/contact" variant="outline" size="lg">Partner with R&amp;D</Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-4/5 w-full max-w-md">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-4xl bg-harvest-200" aria-hidden="true" />
              <div className="photo-treatment relative h-full w-full overflow-hidden rounded-4xl bg-brand-100 shadow-photo">
                <img
                  src={img.labResearch}
                  alt="Cropland scientist at work in the formulation lab"
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -left-3 bottom-8 rounded-2xl bg-white p-4 shadow-card ring-1 ring-black/4">
                <p className="font-display text-2xl font-bold text-ink-900">
                  <CountUp to={38} />
                </p>
                <p className="text-xs text-ink-500">Active patents</p>
              </div>
              <div className="absolute -right-2 top-10 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-ink-800 shadow-card ring-1 ring-black/4">
                <span className="text-brand-700">●</span> 14 agro-zones
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Numbers strip */}
      <section className="border-b border-brand-100 bg-surface-muted py-10">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {numbers.map((n, i) => (
              <Reveal key={n.l} delay={i * 80}>
                <p className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                  <CountUp to={n.v} suffix={n.suffix} />
                </p>
                <p className="mt-1 text-xs text-ink-500">{n.l}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Pipeline */}
      <section className="py-20 sm:py-24">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">The 6-stage pipeline</span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Bench → trial → registration → <span className="font-serif-accent text-brand-700">field.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              No shortcut between the lab and the leaf. Every step is auditable,
              documented and zonally validated.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stages.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 80}>
                <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-7 shadow-soft ring-1 ring-brand-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="absolute -right-4 -top-6 font-display text-7xl font-bold text-brand-50 transition-colors group-hover:text-brand-100" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-brand-500 to-brand-800 text-white shadow-soft">
                    <s.icon aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-5 font-display text-xl font-bold text-ink-900">{s.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-ink-600">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Focus areas */}
      <section className="bg-surface-muted py-20 sm:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Research focus</span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
                Four areas that
                earn our <span className="font-serif-accent text-brand-700">priority.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                The next decade of Indian agriculture demands more biology, less
                residue, and chemistry that travels — across export borders, soil
                layers and seasons.
              </p>

              <div className="mt-8 hidden overflow-hidden rounded-3xl shadow-card lg:block">
                <img src={img.labGloves} alt="Sample preparation in the analytical lab" loading="lazy" className="h-64 w-full object-cover" />
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <div className="grid gap-4 sm:grid-cols-2">
                {focus.map((f, i) => (
                  <Reveal key={f.title} delay={(i % 2) * 80}>
                    <div className="h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-brand-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                      <span className="inline-flex rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-700">
                        {f.tag}
                      </span>
                      <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{f.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{f.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Safety pledge */}
      <section id="safety" className="py-20 sm:py-24">
        <Container>
          <Reveal>
            <div className="grid items-center gap-10 rounded-4xl bg-white p-8 shadow-soft ring-1 ring-brand-100 md:grid-cols-[1.2fr_1fr] md:p-12 lg:p-16">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Safety &amp; stewardship</span>
                <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] text-ink-900 sm:text-4xl">
                  Labels you can trust,
                  residues you can <span className="font-serif-accent text-brand-700">defend.</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-600">
                  Every Cropland product ships with multi-language label
                  leaflets, PPE iconography and zone-specific re-entry intervals.
                  Our stewardship team trains 60,000+ applicators each year.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-4">
                  {[
                    { v: 60, suffix: 'K+', l: 'Applicators trained / yr' },
                    { v: 11, suffix: '',   l: 'Languages on label' },
                    { v: 'ZLD', l: 'Effluent at plants' },
                  ].map((m) => (
                    <div key={m.l} className="rounded-2xl bg-brand-50/50 p-4 text-center ring-1 ring-brand-100">
                      <p className="font-display text-2xl font-bold text-brand-800">
                        {typeof m.v === 'number' ? <CountUp to={m.v} suffix={m.suffix || ''} /> : m.v}
                      </p>
                      <p className="mt-1 text-xs text-ink-600">{m.l}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-3xl bg-linear-to-br from-brand-600 via-brand-700 to-ink-900 p-8 text-white shadow-card">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
                    Safety Pledge
                  </span>
                  <p className="mt-6 font-display text-3xl font-bold leading-tight">
                    &ldquo;If a label can&apos;t protect a farmer, it doesn&apos;t leave our plant.&rdquo;
                  </p>
                  <p className="mt-6 text-sm text-brand-100">— Cropland Quality Charter, 2024</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}
