import { Link } from 'react-router-dom'
import { FaArrowRight, FaFileAlt } from 'react-icons/fa'
import Container from './Container.jsx'

const legalNav = [
  { to: '/privacy',    label: 'Privacy Policy' },
  { to: '/terms',      label: 'Terms of Use' },
  { to: '/compliance', label: 'Compliance' },
  { to: '/csr',        label: 'CSR' },
]

export default function LegalPage({ title, updated, intro, sections, activePath }) {
  return (
    <>
      {/* Header */}
      <section className="relative border-b border-brand-100 bg-surface">
        <Container className="py-14 sm:py-20">
          <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-ink-500">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 ring-1 ring-brand-100">
              <FaFileAlt className="text-[10px] text-brand-700" aria-hidden="true" />
              Legal &amp; Policies
            </span>
            <span>·</span>
            <span>Last updated {updated}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {intro && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-600">
              {intro}
            </p>
          )}
        </Container>
      </section>

      {/* Body with sticky sidebar */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <aside className="lg:col-span-3 lg:sticky lg:top-28">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-500">
                Policies
              </p>
              <nav aria-label="Legal pages" className="mt-3 flex flex-row gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
                {legalNav.map((l) => {
                  const isActive = l.to === activePath
                  return (
                    <Link
                      key={l.to}
                      to={l.to}
                      className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors lg:rounded-2xl ${
                        isActive
                          ? 'bg-brand-700 text-white shadow-soft'
                          : 'bg-white text-ink-700 ring-1 ring-brand-100 hover:bg-brand-50 hover:text-brand-800'
                      }`}
                    >
                      {l.label}
                    </Link>
                  )
                })}
              </nav>

              <div className="mt-8 hidden rounded-2xl bg-white p-5 shadow-soft ring-1 ring-brand-100 lg:block">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  Questions?
                </p>
                <p className="mt-2 text-sm text-ink-600">
                  Reach our compliance desk for any clarifications on this document.
                </p>
                <Link
                  to="/contact"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800 hover:text-brand-900"
                >
                  Contact us <FaArrowRight className="text-xs" aria-hidden="true" />
                </Link>
              </div>
            </aside>

            <article className="lg:col-span-9">
              <div className="rounded-3xl bg-white p-6 shadow-soft ring-1 ring-brand-100 sm:p-10">
                <div className="space-y-10">
                  {sections.map((s) => (
                    <section key={s.heading}>
                      <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-[1.75rem]">
                        {s.heading}
                      </h2>
                      <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-ink-700">
                        {s.body.map((para, i) =>
                          Array.isArray(para) ? (
                            <ul key={i} className="ml-1 space-y-2">
                              {para.map((item) => (
                                <li key={item} className="flex gap-2.5">
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p key={i}>{para}</p>
                          ),
                        )}
                      </div>
                    </section>
                  ))}
                </div>

                <div className="mt-12 rounded-2xl bg-brand-50/70 p-5 text-sm text-ink-700">
                  Have a question about this document? Email{' '}
                  <a href="mailto:compliance@croplandagritech.in" className="font-semibold text-brand-800 hover:underline">
                    compliance@croplandagritech.in
                  </a>{' '}
                  or call <a href="tel:+911234567890" className="font-semibold text-brand-800 hover:underline">+91 1234 567 890</a>.
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  )
}
