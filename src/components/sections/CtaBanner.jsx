import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import { img } from '../../data/images.js'

export default function CtaBanner() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink-900 px-5 py-10 shadow-card sm:rounded-4xl sm:px-12 sm:py-20 lg:px-16">
            <img
              src={img.ctaField}
              alt=""
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-ink-900 via-ink-900/80 to-brand-900/40" aria-hidden="true" />

            <div className="relative grid items-center gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-10">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-100 ring-1 ring-white/15 sm:text-xs">
                  Distributor program
                </span>
                <h2 className="mt-4 max-w-2xl font-display text-[1.75rem] font-bold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
                  Grow your territory with
                  a partner who knows{' '}
                  <span className="font-serif-accent text-harvest-200">the field.</span>
                </h2>
                <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-brand-100 sm:mt-5 sm:text-lg">
                  Join 1,800+ distributors across India earning with a brand
                  growers actually re-order. Margin protection, agronomy support,
                  rapid dispatch from 8 regional warehouses.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button to="/contact" variant="cta" size="lg" iconRight={FaArrowRight} className="w-full justify-center">
                  Apply to distribute
                </Button>
                <Button href="tel:+911234567890" variant="white" size="lg" icon={FaPhoneAlt} className="w-full justify-center">
                  Talk to sales
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
