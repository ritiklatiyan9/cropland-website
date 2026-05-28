import { FaLeaf, FaHandshake, FaShieldAlt, FaFlask, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CountUp from '../components/ui/CountUp.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'
import { img } from '../data/images.js'

const values = [
  { icon: FaLeaf, title: 'Soil-first', text: 'Every product is tuned to leave the soil microbiome stronger than we found it.' },
  { icon: FaShieldAlt, title: 'Safety, always', text: 'Operator, consumer, environment — three audits before a label gets approved.' },
  { icon: FaFlask, title: 'Science, on farm', text: 'No claim ships without zonal field-trial data, replicated across seasons.' },
  { icon: FaHandshake, title: 'Farmer-led', text: 'Agronomists co-design programs alongside growers, not from a head office.' },
]

const milestones = [
  { year: '2000', title: 'Founded in Ahmedabad', text: 'Started as a regional formulator focused on cotton and groundnut belts.' },
  { year: '2008', title: 'CIB&RC scale-up', text: 'Crossed 25 registered formulations across protection and nutrition.' },
  { year: '2014', title: 'GMP facility', text: 'Commissioned a 40,000 MT/year manufacturing block with effluent ZLD.' },
  { year: '2019', title: 'Bio-Solutions launch', text: 'Bio-pesticide and bio-fertilizer range, co-developed with two ICAR institutes.' },
  { year: '2024', title: 'Pan-India network', text: '1,800+ distributors across 18 states; export to 11 countries.' },
]

const leadership = [
  { name: 'Vikram Mehta',  role: 'Founder & Managing Director', avatar: img.farmer2 },
  { name: 'Anita Iyer',    role: 'Chief Scientist · R&D',       avatar: img.farmer3 },
  { name: 'Rohit Sharma',  role: 'Head of Operations',          avatar: img.farmer1 },
]

const facilityHighlights = [
  '40,000 MT/year formulation capacity',
  'Zero-liquid-discharge effluent system',
  'In-house analytical & micro labs',
  'GMP-certified bulk storage',
  'Solar + grid hybrid power',
  '24×7 stewardship helpline',
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-brand-100 bg-surface">
        <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16 lg:py-24">
          <Reveal className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">About Cropland</span>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              A quarter-century of growing
              with <span className="font-serif-accent text-brand-700">Indian agriculture.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
              We started on a single bench in Ahmedabad with a stubborn idea:
              agricultural inputs should be honest, science-backed and built
              around the people who actually farm. Twenty-five years on, that
              idea still runs the company.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button to="/research" variant="primary" size="lg" iconRight={FaArrowRight}>Our research</Button>
              <Button to="/contact" variant="outline" size="lg">Talk to us</Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-4/5 w-full max-w-md">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-4xl bg-brand-700" aria-hidden="true" />
              <div className="photo-treatment relative h-full w-full overflow-hidden rounded-4xl bg-brand-100 shadow-photo">
                <img
                  src={img.heroFarmer}
                  alt="Cropland team with farmers in the field"
                  loading="eager"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -right-3 bottom-8 rounded-2xl bg-white p-5 shadow-card ring-1 ring-black/4">
                <p className="font-display text-3xl font-bold text-ink-900">
                  <CountUp to={500} suffix="K+" />
                </p>
                <p className="mt-0.5 max-w-40 text-xs leading-snug text-ink-500">Farmer touchpoints every season</p>
              </div>
              <div className="absolute -left-2 top-10 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-ink-800 shadow-card ring-1 ring-black/4">
                <span className="text-brand-700">●</span> 18 states · 11 export markets
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Numbers strip */}
      <section className="border-b border-brand-100 bg-surface-muted py-10">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: 25,   suffix: '+',  l: 'Years in Indian agriculture' },
              { v: 120,  suffix: '+',  l: 'Registered formulations' },
              { v: 1800, suffix: '+',  l: 'Distributors nationwide' },
              { v: 11,   suffix: '',   l: 'Export markets' },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 80}>
                <p className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                  <CountUp to={s.v} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs text-ink-500">{s.l}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission + values */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Our mission</span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
                Inputs that work,
                harvests that <span className="font-serif-accent text-brand-700">hold.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                To put scientifically rigorous, residue-managed agricultural
                inputs in the hands of every Indian farmer — and to do so
                without compromising the soil they pass on to the next
                generation.
              </p>
            </Reveal>

            <div className="lg:col-span-7">
              <div className="grid gap-5 sm:grid-cols-2">
                {values.map((v, i) => (
                  <Reveal key={v.title} delay={(i % 2) * 80}>
                    <div className="h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-brand-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700">
                        <v.icon aria-hidden="true" />
                      </span>
                      <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{v.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{v.text}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="bg-surface-muted py-20 sm:py-24">
        <Container>
          <Reveal className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Leadership</span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              The people behind
              the <span className="font-serif-accent text-brand-700">label.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              A founder-led team of agronomists, chemists and supply-chain
              veterans — most of whom grew up on family farms themselves.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className="group h-full overflow-hidden rounded-3xl bg-white shadow-soft ring-1 ring-brand-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                  <div className="aspect-5/4 overflow-hidden bg-brand-100">
                    <img
                      src={p.avatar}
                      alt={`${p.name}, ${p.role}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-ink-900">{p.name}</h3>
                    <p className="mt-1 text-sm font-medium text-brand-800">{p.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Facility split */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal delay={80} className="relative lg:col-span-5 lg:order-1">
              <div className="relative mx-auto aspect-4/5 w-full max-w-md">
                <div className="absolute -right-4 -top-4 h-full w-full rounded-4xl bg-harvest-200" aria-hidden="true" />
                <div className="photo-treatment relative h-full w-full overflow-hidden rounded-4xl bg-brand-100 shadow-photo">
                  <img
                    src={img.facility}
                    alt="Cropland manufacturing facility in Bharuch, Gujarat"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -left-3 bottom-8 rounded-2xl bg-white p-4 shadow-card ring-1 ring-black/4">
                  <p className="font-display text-2xl font-bold text-ink-900">
                    <CountUp to={40000} />
                  </p>
                  <p className="text-xs text-ink-500">MT / year capacity</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Facility</span>
              <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
                A GMP plant built
                for <span className="font-serif-accent text-brand-700">the long season.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                Our Bharuch facility consolidates formulation, packaging and
                quality control under one roof — designed from day one for
                operator safety, batch traceability and environmental compliance.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {facilityHighlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-ink-700">
                    <FaCheckCircle className="mt-0.5 shrink-0 text-brand-600" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Milestones */}
      <section id="sustainability" className="bg-surface-muted py-20 sm:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">Milestones</span>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.1] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Twenty-five seasons.
              <span className="font-serif-accent text-brand-700"> Counted.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              A short timeline of how Cropland grew from one bench in Ahmedabad
              into a pan-India agritech.
            </p>
          </Reveal>

          <ol className="relative mx-auto mt-14 max-w-4xl">
            <span className="absolute left-4 top-2 bottom-2 w-px bg-linear-to-b from-brand-200 via-brand-400 to-brand-200 md:left-1/2" aria-hidden="true" />
            {milestones.map((m, i) => (
              <li
                key={m.year}
                className={`relative mb-10 grid grid-cols-[2rem_1fr] gap-4 md:grid-cols-2 md:gap-12`}
              >
                <Reveal
                  delay={i * 60}
                  className={i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}
                >
                  <p className="font-display text-3xl font-bold text-brand-800">{m.year}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink-900">{m.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{m.text}</p>
                </Reveal>

                <span className="absolute left-4 top-1.5 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-brand-600 ring-4 ring-surface-muted md:left-1/2 md:block" aria-hidden="true" />
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}
