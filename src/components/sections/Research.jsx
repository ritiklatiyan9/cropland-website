import { FaMicroscope, FaSeedling, FaChartLine, FaUsers, FaArrowRight } from 'react-icons/fa'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import { img } from '../../data/images.js'

const pipeline = [
  { icon: FaMicroscope, title: 'Molecule sourcing', text: 'Globally screened actives, vetted against efficacy + safety dossiers.' },
  { icon: FaSeedling,   title: 'Zonal field trials', text: 'Replicated across 14 agro-climatic zones, kharif and rabi.' },
  { icon: FaChartLine,  title: 'Residue engineering', text: 'Formulation tuned for low PHI and export-grade MRL compliance.' },
  { icon: FaUsers,      title: 'Field agronomy', text: 'Co-designed with farmers, FPOs and KVKs, season after season.' },
]

export default function Research() {
  return (
    <section id="research-preview" className="relative bg-surface-muted py-16 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Image column */}
          <Reveal delay={80} className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-4/5 w-full max-w-sm sm:max-w-md">
              <div className="absolute -right-3 -top-3 h-full w-full rounded-4xl bg-harvest-200 sm:-right-4 sm:-top-4" aria-hidden="true" />
              <div className="photo-treatment relative h-full w-full overflow-hidden rounded-4xl bg-brand-100 shadow-photo">
                <img
                  src={img.labResearch}
                  alt="Cropland scientist working in formulation lab"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -left-2 bottom-6 rounded-2xl bg-white p-3 shadow-card ring-1 ring-black/4 sm:-left-3 sm:bottom-8 sm:p-4">
                <p className="font-display text-xl font-bold text-ink-900 sm:text-2xl">38</p>
                <p className="text-[11px] text-ink-500 sm:text-xs">Active patents</p>
              </div>
              <div className="absolute -right-2 top-6 rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold text-ink-800 shadow-card ring-1 ring-black/4 sm:top-10 sm:px-3.5 sm:py-2 sm:text-xs">
                <span className="text-brand-700">●</span> 14 agro-zones
              </div>
            </div>
          </Reveal>

          {/* Copy column */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-xs">R&amp;D + Innovation</span>
              <h2 className="mt-3 font-display text-[1.75rem] font-bold leading-[1.1] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
                From molecule
                to <span className="font-serif-accent text-brand-700">monsoon.</span>
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-ink-600 sm:mt-5 sm:text-base">
                An 80-strong R&amp;D team works across formulation chemistry,
                microbiology, agronomy and analytical sciences. Every product on
                our shelf has been proven on Indian soil — literally.
              </p>
            </Reveal>

            <ul className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 sm:grid-cols-2">
              {pipeline.map((p, i) => (
                <Reveal key={p.title} delay={i * 80} as="li" className="flex items-start gap-3 sm:gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-700 sm:h-11 sm:w-11">
                    <p.icon aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink-900">{p.title}</h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-600 sm:text-sm">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={120} className="mt-8 flex flex-wrap gap-3 sm:mt-10">
              <Button to="/research" variant="primary" size="md" iconRight={FaArrowRight}>Inside the lab</Button>
              <Button to="/contact" variant="ghost" size="md">Partner with R&amp;D</Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}
