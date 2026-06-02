import {
  FaArrowRight,
  FaFlask,
  FaHandshake,
  FaLeaf,
  FaMapMarkerAlt,
  FaRecycle,
  FaSeedling,
  FaShieldAlt,
  FaTruck,
  FaUsers,
} from 'react-icons/fa'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import CountUp from '../components/ui/CountUp.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'
import { img } from '../data/images.js'
import Seo from '../components/Seo.jsx'
import JsonLd from '../components/JsonLd.jsx'
import { organizationSchema, breadcrumbSchema } from '../seo/schema.js'

const values = [
  { icon: FaSeedling, title: 'Farm-first advice', text: 'Recommendations start with crop stage, weather, pest pressure and grower constraints.' },
  { icon: FaFlask, title: 'Formulation discipline', text: 'Products are selected for tank usability, residue windows and real spray conditions.' },
  { icon: FaShieldAlt, title: 'Responsible protection', text: 'Labels, PPE guidance and re-entry intervals stay connected to product decisions.' },
  { icon: FaHandshake, title: 'Dealer partnership', text: 'Retailers and distributors get practical product support, not just cartons.' },
]

const capabilities = [
  { icon: FaLeaf, title: 'Crop programs', text: 'Season-wise protection and nutrition plans for local crop belts.' },
  { icon: FaUsers, title: 'Grower support', text: 'Field issue intake through WhatsApp, call and dealer networks.' },
  { icon: FaTruck, title: 'Reliable supply', text: 'Category-led catalogue for recurring seasonal requirements.' },
  { icon: FaRecycle, title: 'Stewardship', text: 'Residue-aware use guidance and responsible application support.' },
]

const numbers = [
  { v: 25, suffix: '+', label: 'Years of field experience' },
  { v: 120, suffix: '+', label: 'Formulation options' },
  { v: 18, suffix: '', label: 'States served' },
  { v: 14, suffix: '', label: 'Trial zones referenced' },
]

const timeline = [
  { year: '2000', title: 'Field-first beginnings', text: 'Started with crop protection recommendations shaped by dealer feedback and grower problems.' },
  { year: '2008', title: 'Product range expansion', text: 'Built a wider catalogue across insecticides, herbicides, fungicides and crop nutrition.' },
  { year: '2014', title: 'Quality-led operations', text: 'Strengthened formulation selection, batch consistency and practical label guidance.' },
  { year: '2019', title: 'Bio-solutions focus', text: 'Added biological and soil-support products for residue-aware crop programs.' },
  { year: '2026', title: 'Pinna support desk', text: 'Website enquiries now route into WhatsApp so growers and dealers can share crop details quickly.' },
]

export default function About() {
  return (
    <>
      <Seo
        title="About Cropland Agritech — Pesticide Manufacturer in Muzaffarnagar"
        description="Cropland Agritech India Pvt. Ltd. is a Muzaffarnagar-based pesticide and agrochemical manufacturer with 25+ years of field experience, serving farmers and dealers across Western Uttar Pradesh, Meerut, Lucknow and 18 states."
        path="/about"
      />
      <JsonLd
        data={[
          organizationSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
        ]}
      />
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <img
          src={img.heroFarmer}
          alt=""
          loading="eager"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 hidden bg-linear-to-r from-ink-900 from-10% via-ink-900/85 via-55% to-ink-900/20 lg:block" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink-900 from-20% via-ink-900/80 to-ink-900/60 lg:hidden" aria-hidden="true" />

        <Container className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-12 lg:gap-14 lg:py-24">
          <Reveal className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-100 backdrop-blur">
              <FaLeaf className="text-brand-300" aria-hidden="true" />
              About Cropland
            </span>
            <h1 className="mt-5 max-w-4xl font-display text-[2.35rem] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5rem]">
              Built close to the field,
              <span className="block font-serif-accent text-harvest-200">not far from it.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
              Cropland Agritech brings crop protection, nutrition and bio-solution
              guidance together for growers, dealers and distributors who need
              practical answers during the season.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9">
              <Button to="/products" variant="cta" size="lg" iconRight={FaArrowRight}>
                Explore products
              </Button>
              <Button to="/contact" variant="white" size="lg">
                Talk to us
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-card backdrop-blur-xl">
              <div className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-300/20 text-brand-100">
                  <FaMapMarkerAlt aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-100/80">
                    Local base
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-bold text-white">Pinna, Muzaffarnagar</h2>
                  <p className="mt-2 text-sm leading-relaxed text-brand-100/80">
                    Uttar Pradesh 251001, positioned for fast communication with
                    growers, dealers and regional field teams.
                  </p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                <div>
                  <p className="font-display text-3xl font-bold text-white">24h</p>
                  <p className="mt-1 text-xs text-brand-100/70">WhatsApp intake</p>
                </div>
                <div>
                  <p className="font-display text-3xl font-bold text-white">4</p>
                  <p className="mt-1 text-xs text-brand-100/70">Core categories</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-brand-100 bg-surface py-8 sm:py-10">
        <Container>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {numbers.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <p className="font-display text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
                  <CountUp to={s.v} suffix={s.suffix} />
                </p>
                <p className="mt-1 max-w-36 text-xs leading-snug text-ink-500">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-xs">
                What guides us
              </span>
              <h2 className="mt-3 font-display text-[2rem] font-bold leading-[1.08] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
                Products are useful only when
                <span className="block font-serif-accent text-brand-700">farmers can use them well.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-ink-600">
                Our work sits between science and season reality: clear labels,
                practical dose guidance, fast response, and inputs that fit
                actual field workflows.
              </p>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {values.map((item, i) => (
                <Reveal key={item.title} delay={(i % 2) * 80}>
                  <div className="h-full rounded-2xl bg-white p-6 shadow-soft ring-1 ring-brand-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-50 text-brand-700">
                      <item.icon aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl bg-ink-900 shadow-photo">
                <img
                  src={img.fields}
                  alt="Crop field representing Cropland field support"
                  loading="lazy"
                  className="h-[28rem] w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink-900 via-ink-900/30 to-transparent" aria-hidden="true" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="font-display text-2xl font-bold leading-tight text-white">
                    Field context comes before product advice.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-xs">
                  How we work
                </span>
                <h2 className="mt-3 font-display text-[2rem] font-bold leading-[1.08] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
                  A responsive support system
                  <span className="block font-serif-accent text-brand-700">for season decisions.</span>
                </h2>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {capabilities.map((item, i) => (
                  <Reveal key={item.title} delay={(i % 2) * 80}>
                    <div className="flex h-full gap-4 border-t border-brand-100 py-5">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-brand-700 shadow-soft ring-1 ring-brand-100">
                        <item.icon aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-bold text-ink-900">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-600">{item.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="timeline" className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-xs">
              Timeline
            </span>
            <h2 className="mt-3 font-display text-[2rem] font-bold leading-[1.08] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Milestones that shaped
              <span className="font-serif-accent text-brand-700"> Cropland.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-600">
              The growth story stays on the page: from field-led product advice
              to a faster WhatsApp support workflow for growers and dealers.
            </p>
          </Reveal>

          <ol className="relative mx-auto mt-12 max-w-5xl sm:mt-14">
            <span className="absolute left-4 top-3 bottom-3 w-px bg-linear-to-b from-brand-200 via-brand-500 to-brand-200 md:left-1/2" aria-hidden="true" />
            {timeline.map((item, i) => (
              <li key={item.year} className="relative mb-8 last:mb-0 md:grid md:grid-cols-2 md:gap-12">
                <span className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-700 ring-4 ring-surface md:left-1/2" aria-hidden="true" />
                <Reveal
                  delay={i * 70}
                  className={`ml-10 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-brand-100 md:ml-0 md:p-6 ${
                    i % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:col-start-2 md:ml-8'
                  }`}
                >
                  <p className="font-display text-3xl font-bold text-brand-700">{item.year}</p>
                  <h3 className="mt-2 font-display text-xl font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{item.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-xs">
                Sustainability
              </span>
              <h2 className="mt-3 font-display text-[2rem] font-bold leading-[1.08] text-ink-900 sm:text-4xl">
                Growing responsibly,
                <span className="block font-serif-accent text-brand-700">season after season.</span>
              </h2>
            </Reveal>

            <Reveal className="lg:col-span-8">
              <p className="max-w-3xl text-base leading-relaxed text-ink-600">
                Cropland focuses on practical stewardship: clear usage guidance,
                residue-aware recommendations, safer application behavior and
                a product range that helps growers solve the right problem at
                the right crop stage.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-ink-900 py-14 text-white sm:py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-200">Ready to connect</span>
              <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
                Send crop details directly to the team.
              </h2>
            </div>
            <Button to="/contact" variant="cta" size="lg" iconRight={FaArrowRight}>
              Open contact form
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner />
    </>
  )
}
