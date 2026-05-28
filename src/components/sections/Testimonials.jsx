import { FaStar } from 'react-icons/fa'
import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'
import { testimonials } from '../../data/testimonials.js'

export default function Testimonials() {
  return (
    <section className="relative py-16 sm:py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-xs">From the field</span>
          <h2 className="mt-3 font-display text-[1.75rem] font-bold leading-[1.1] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
            What growers say
            <span className="font-serif-accent text-brand-700"> after harvest.</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 80}>
              <figure className="group relative flex h-full flex-col rounded-2xl bg-white p-5 shadow-soft ring-1 ring-black/4 transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:rounded-3xl sm:p-7">
                <div className="flex items-center gap-0.5 text-harvest-400 sm:gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <FaStar key={k} className="text-xs sm:text-sm" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[14px] leading-relaxed text-ink-800 sm:mt-5 sm:text-[15px]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-brand-100 pt-4 sm:mt-7 sm:pt-5">
                  <img
                    src={t.avatar}
                    alt=""
                    loading="lazy"
                    className="h-10 w-10 shrink-0 rounded-full object-cover ring-2 ring-brand-100 sm:h-12 sm:w-12"
                  />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-ink-900 sm:text-base">{t.author}</p>
                    <p className="truncate text-[11px] text-ink-500 sm:text-xs">{t.role}</p>
                    <p className="truncate text-[11px] text-ink-500 sm:text-xs">{t.place}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
