import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaEnvelope,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSeedling,
} from 'react-icons/fa'
import Container from './ui/Container.jsx'
import Logo from './ui/Logo.jsx'
import { img } from '../data/images.js'

const groups = [
  {
    title: 'Solutions',
    links: [
      { label: 'Crop Protection', to: '/products#crop-protection' },
      { label: 'Plant Nutrition', to: '/products#plant-nutrition' },
      { label: 'Bio-Solutions', to: '/products#bio-solutions' },
      { label: 'Specialty Agro', to: '/products#specialty' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/about' },
      { label: 'Research & Innovation', to: '/research' },
      { label: 'Sustainability', to: '/about#sustainability' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Service areas',
    links: [
      { label: 'Muzaffarnagar', to: '/pesticide-company/muzaffarnagar' },
      { label: 'Meerut', to: '/pesticide-company/meerut' },
      { label: 'Lucknow', to: '/pesticide-company/lucknow' },
      { label: 'Western UP', to: '/pesticide-company/west-up' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy-policy' },
      { label: 'Terms of Use', to: '/terms' },
      { label: 'Compliance', to: '/compliance' },
      { label: 'CSR', to: '/csr' },
      { label: 'Delete Account', to: '/delete-account' },
    ],
  },
]

const certifications = ['CIB&RC', 'ISO 9001', 'ISO 14001', 'GMP', 'FCO', 'REACH']

export default function Footer() {
  return (
    <footer className="relative isolate mt-12 overflow-hidden bg-ink-900 text-brand-100/80">
      <div className="h-1 w-full bg-linear-to-r from-brand-700 via-harvest-300 to-brand-700" aria-hidden="true" />

      <Container className="relative py-10 sm:py-12 lg:py-14">
        <div className="relative isolate overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 shadow-card sm:p-7 lg:p-8">
          <img
            src={img.ctaField}
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink-900 via-ink-900/90 to-brand-900/70" aria-hidden="true" />

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-300/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-100 ring-1 ring-white/10">
                <FaLeaf aria-hidden="true" />
                Advisory desk
              </span>
              <h2 className="mt-4 max-w-2xl font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                Crop calendars, residue alerts and spray windows matched to the season.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-brand-100/75">
                Practical notes from Cropland agronomists for distributors,
                retailers and progressive growers.
              </p>
            </div>

            <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter" className="sr-only">Email address</label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="you@farm.in"
                className="min-w-0 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-brand-100/60 focus:border-brand-300 focus:bg-white/15 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-harvest-300 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-harvest-200"
              >
                Subscribe
                <FaArrowRight className="text-xs" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 grid gap-9 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo invert />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-100/70">
              Safe, high-efficacy agricultural inputs for resilient farms, built
              across formulation chemistry, agronomy and field stewardship.
            </p>

            <div className="mt-6 grid gap-3">
              <a href="tel:+919760302690" className="inline-flex min-w-0 items-center gap-3 text-sm font-medium transition-colors hover:text-white">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-brand-200 ring-1 ring-white/10">
                  <FaPhoneAlt aria-hidden="true" />
                </span>
                <span>+91 97603 02690</span>
              </a>
              <a href="mailto:sales@croplandagritech.com" className="inline-flex min-w-0 items-center gap-3 text-sm font-medium transition-colors hover:text-white">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-brand-200 ring-1 ring-white/10">
                  <FaEnvelope aria-hidden="true" />
                </span>
                <span className="truncate">sales@croplandagritech.com</span>
              </a>
              <p className="inline-flex items-start gap-3 text-sm leading-relaxed">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-brand-200 ring-1 ring-white/10">
                  <FaMapMarkerAlt aria-hidden="true" />
                </span>
                <span>
                  Pinna, Muzaffarnagar,<br />
                  Uttar Pradesh 251001, India
                </span>
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">Certified</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {certifications.map((c) => (
                  <span key={c} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-brand-100 ring-1 ring-white/10">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title} className="lg:col-span-2">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="inline-flex items-center gap-2 text-brand-100/70 transition-colors hover:text-white"
                    >
                      <span className="h-1 w-1 rounded-full bg-brand-300/70" aria-hidden="true" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-brand-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cropland Agritech India Pvt. Ltd. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 font-semibold text-brand-100/75 ring-1 ring-white/10">
              <FaSeedling className="text-brand-300" aria-hidden="true" />
              Proudly made in India
            </span>
            <span>Pinna, Muzaffarnagar, Uttar Pradesh</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
