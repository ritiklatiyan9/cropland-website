import {
  FaArrowRight,
  FaBug,
  FaChartLine,
  FaCheckCircle,
  FaClipboardCheck,
  FaDna,
  FaFlask,
  FaLeaf,
  FaMicroscope,
  FaRecycle,
  FaSeedling,
  FaShieldAlt,
  FaTint,
} from 'react-icons/fa'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CountUp from '../components/ui/CountUp.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'
import { img } from '../data/images.js'
import Seo from '../components/Seo.jsx'
import JsonLd from '../components/JsonLd.jsx'
import { breadcrumbSchema } from '../seo/schema.js'

const stages = [
  {
    icon: FaDna,
    title: 'Discovery intelligence',
    text: 'Active molecules, biological strains and formulation gaps are screened against crop pressure, resistance patterns and regulatory runway.',
    proof: '1,200+ dossiers screened / yr',
  },
  {
    icon: FaFlask,
    title: 'Formulation engineering',
    text: 'EC, SC, WDG, WP and bio-formats are tuned for Indian water hardness, tank mixes, heat stability and real sprayer behavior.',
    proof: '48-hour heat stress checks',
  },
  {
    icon: FaShieldAlt,
    title: 'Tox and eco-tox review',
    text: 'Operator exposure, beneficial insects, soil half-life and aquatic safety are checked before a candidate reaches field scale.',
    proof: 'Independent audit trail',
  },
  {
    icon: FaSeedling,
    title: 'Zonal field validation',
    text: 'Replicated kharif and rabi trials measure efficacy, crop safety and residue performance across representative Indian conditions.',
    proof: '14 agro-climatic zones',
  },
  {
    icon: FaClipboardCheck,
    title: 'Registration readiness',
    text: 'CIB&RC and export-market packs are prepared with analytical data, label claims, dose guidance and stewardship notes in one flow.',
    proof: 'Label-to-lab traceability',
  },
  {
    icon: FaRecycle,
    title: 'Field stewardship',
    text: 'Container return, PPE guidance, re-entry intervals and IPM training continue after dispatch, where product decisions matter most.',
    proof: '60,000+ applicators trained',
  },
]

const focus = [
  {
    icon: FaBug,
    tag: 'Bio-control',
    title: 'Microbial durability',
    text: 'Trichoderma, Pseudomonas and Bacillus consortia built for stronger shelf life and predictable field activation.',
    metric: '18 mo shelf-life target',
  },
  {
    icon: FaTint,
    tag: 'Residue',
    title: 'Low-PHI formulations',
    text: 'Re-engineering legacy chemistries for tighter residue windows, export MRL planning and late-season spray confidence.',
    metric: 'MRL-ready labels',
  },
  {
    icon: FaLeaf,
    tag: 'Nutrition',
    title: 'Precision plant nutrition',
    text: 'Chelated micronutrients and crop-stage blends matched to soil-test maps, stress windows and varietal response.',
    metric: 'Stage-specific dose maps',
  },
  {
    icon: FaChartLine,
    tag: 'Adjuvants',
    title: 'Smarter spray systems',
    text: 'Spreader-stickers, drift-control agents and rainfastness boosters designed around variable field spray quality.',
    metric: 'Hard-water tuned',
  },
]

const numbers = [
  { v: 80, suffix: '+', label: 'R&D scientists and agronomists' },
  { v: 38, suffix: '', label: 'Active patents' },
  { v: 14, suffix: '', label: 'Agro-climatic trial zones' },
  { v: 6, suffix: ' yr', label: 'Average development cycle' },
]

const safeguards = [
  'Multi-language label leaflets with PPE iconography',
  'Zone-specific re-entry and pre-harvest intervals',
  'Container collection and distributor-side training',
]

export default function Research() {
  return (
    <>
      <Seo
        title="Research & Innovation — Formulation Science"
        description="Inside Cropland Agritech's R&D: molecule discovery, formulation engineering for Indian field conditions, tox/eco-tox review and field trials behind our crop-protection range."
        path="/research"
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Research', path: '/research' },
        ])}
      />
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <img
          src={img.labResearch}
          alt=""
          loading="eager"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 hidden bg-linear-to-r from-ink-900 from-10% via-ink-900/85 via-55% to-ink-900/20 lg:block" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink-900 from-20% via-ink-900/85 to-ink-900/60 lg:hidden" aria-hidden="true" />

        <Container className="grid min-h-[calc(100svh-8rem)] items-center gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
          <Reveal className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-100 backdrop-blur">
              <FaMicroscope className="text-brand-300" aria-hidden="true" />
              R&amp;D + Innovation
            </span>
            <h1 className="mt-5 max-w-4xl font-display text-[2.35rem] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5.25rem]">
              Research that holds up
              <span className="block font-serif-accent text-harvest-200">outside the lab.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
              Cropland&apos;s formulation, biology and agronomy teams work as one
              product system. Every claim is tested through analytical labs,
              replicated trials and stewardship planning before it reaches a
              grower&apos;s tank.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
              <Button to="/products" variant="cta" size="lg" iconRight={FaArrowRight}>
                See the output
              </Button>
              <Button to="/contact" variant="white" size="lg">
                Partner with R&amp;D
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="hidden lg:col-span-5 lg:block">
            <div className="ml-auto max-w-md rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-card backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-300/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-100">
                  <FaCheckCircle aria-hidden="true" />
                  Trial board
                </span>
                <span className="text-xs font-semibold text-harvest-200">Kharif &apos;26</span>
              </div>
              <div className="mt-6 space-y-5">
                {[
                  { label: 'Field efficacy', value: '92%', width: '92%' },
                  { label: 'Residue readiness', value: '88%', width: '88%' },
                  { label: 'Grower usability', value: '95%', width: '95%' },
                ].map((row) => (
                  <div key={row.label}>
                    <div className="flex items-center justify-between gap-4 text-xs font-semibold">
                      <span className="text-brand-100">{row.label}</span>
                      <span>{row.value}</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                      <span className="block h-full rounded-full bg-harvest-300" style={{ width: row.width }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5 text-sm">
                <div>
                  <p className="font-display text-3xl font-bold text-white">14</p>
                  <p className="mt-1 text-xs text-brand-100/80">Trial zones</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-white">3 yr</p>
                  <p className="mt-1 text-xs text-brand-100/80">Replicated cycle</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-y border-brand-100 bg-surface py-8 sm:py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {numbers.map((n, i) => (
              <Reveal key={n.label} delay={i * 70}>
                <p className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                  <CountUp to={n.v} suffix={n.suffix} />
                </p>
                <p className="mt-1 max-w-40 text-xs leading-snug text-ink-500">{n.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-xs">
                  Development system
                </span>
                <h2 className="mt-3 font-display text-[2rem] font-bold leading-[1.08] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
                  From candidate to
                  <span className="block font-serif-accent text-brand-700">confident field use.</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-600">
                  The pipeline is built for decisions, not theatre: move faster
                  when evidence is strong, stop early when safety or usability is
                  weak, and document every handoff.
                </p>
              </div>
            </Reveal>

            <ol className="lg:col-span-8">
              {stages.map((stage, i) => (
                <Reveal key={stage.title} delay={(i % 3) * 70} as="li">
                  <div className="grid gap-4 border-t border-brand-100 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-6 lg:py-8">
                    <div className="flex items-center gap-3 sm:block">
                      <span className="block font-display text-3xl font-bold text-brand-200 sm:text-4xl">
                        0{i + 1}
                      </span>
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-700 text-white shadow-soft sm:mt-4">
                        <stage.icon aria-hidden="true" />
                      </span>
                    </div>
                    <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-start">
                      <div>
                        <h3 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">{stage.title}</h3>
                        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600 sm:text-base">{stage.text}</p>
                      </div>
                      <span className="inline-flex w-fit items-center rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-800 shadow-soft ring-1 ring-brand-100">
                        {stage.proof}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-200 sm:text-xs">
                Research priorities
              </span>
              <h2 className="mt-3 font-display text-[2rem] font-bold leading-[1.08] text-white sm:text-4xl lg:text-[2.75rem]">
                Four bets shaping
                <span className="block font-serif-accent text-harvest-200">the next product wave.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-100/85">
                The next decade asks for more biology, cleaner residues and
                formulations that still perform when water, weather and pressure
                are imperfect.
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 shadow-photo">
                <img
                  src={img.labGloves}
                  alt="Sample preparation in Cropland analytical lab"
                  loading="lazy"
                  className="h-72 w-full object-cover"
                />
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <div className="border-y border-white/10">
                {focus.map((item, i) => (
                  <Reveal key={item.title} delay={(i % 2) * 80}>
                    <div className="grid gap-4 border-b border-white/10 py-6 last:border-b-0 sm:grid-cols-[3rem_1fr] sm:gap-5">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-harvest-200 ring-1 ring-white/10">
                        <item.icon aria-hidden="true" />
                      </span>
                      <div>
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <span className="w-fit rounded-full bg-brand-300/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-100">
                            {item.tag}
                          </span>
                          <span className="text-xs font-semibold text-harvest-200">{item.metric}</span>
                        </div>
                        <h3 className="mt-3 font-display text-xl font-bold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-brand-100/80 sm:text-base">{item.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="safety" className="bg-surface py-20 sm:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-7">
              <div className="relative min-h-[26rem] overflow-hidden rounded-2xl bg-ink-900 shadow-photo">
                <img
                  src={img.fields}
                  alt="Field trial plots used for Cropland product validation"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink-900 via-ink-900/40 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-100 ring-1 ring-white/15 backdrop-blur">
                    <FaCheckCircle aria-hidden="true" />
                    Stewardship standard
                  </span>
                  <p className="mt-4 max-w-xl font-display text-2xl font-bold leading-tight text-white sm:text-4xl">
                    Labels, residues and training are designed before launch.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <div className="flex h-full flex-col justify-center">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-xs">
                  Safety &amp; stewardship
                </span>
                <h2 className="mt-3 font-display text-[2rem] font-bold leading-[1.08] text-ink-900 sm:text-4xl">
                  Built for the person
                  <span className="block font-serif-accent text-brand-700">holding the sprayer.</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-ink-600">
                  Product success is more than efficacy. Our safety workflow
                  keeps label language, PPE behavior, residue intervals and
                  field training connected to the formulation file.
                </p>

                <ul className="mt-6 space-y-3">
                  {safeguards.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-medium text-ink-700">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-brand-700" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { v: 60, suffix: 'K+', label: 'Trained / yr' },
                    { v: 11, suffix: '', label: 'Label languages' },
                    { v: 100, suffix: '%', label: 'ZLD plants' },
                  ].map((m) => (
                    <div key={m.label} className="rounded-2xl bg-white p-4 text-center shadow-soft ring-1 ring-brand-100">
                      <p className="font-display text-2xl font-bold text-brand-800">
                        <CountUp to={m.v} suffix={m.suffix} />
                      </p>
                      <p className="mt-1 text-[11px] leading-tight text-ink-500">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}
