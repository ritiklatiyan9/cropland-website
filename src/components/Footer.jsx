import { Link } from 'react-router-dom'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
} from 'react-icons/fa'
import Container from './ui/Container.jsx'
import Logo from './ui/Logo.jsx'

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
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms of Use', to: '/terms' },
      { label: 'Compliance', to: '/compliance' },
      { label: 'CSR', to: '/csr' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative isolate mt-12 overflow-hidden bg-ink-900 text-ink-400">
      {/* Subtle warm accent on top edge */}
      <div className="h-1 w-full bg-linear-to-r from-brand-700 via-harvest-300 to-brand-700" aria-hidden="true" />

      <Container className="relative pt-16 pb-10">
        {/* Newsletter band */}
        <div className="rounded-4xl border border-white/10 bg-white/3 p-8 md:p-10">
          <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-700/30 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-100 ring-1 ring-white/10">
                <FaCheckCircle aria-hidden="true" />
                Free crop advisory
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold text-white md:text-3xl">
                Crop calendars, residue alerts and<br className="hidden md:block" /> spray windows — to your inbox.
              </h3>
              <p className="mt-2 text-sm text-ink-400">
                Zone-specific guidance written by our agronomy team. No spam, ever.
              </p>
            </div>
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="newsletter" className="sr-only">Email address</label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="you@farm.in"
                className="w-full rounded-full border border-white/15 bg-white/6 px-5 py-3 text-sm text-white placeholder:text-ink-400 focus:border-brand-300 focus:bg-white/10 focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-harvest-300 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-harvest-200"
              >
                Subscribe <FaArrowRight aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        {/* Main grid */}
        <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo invert />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-400">
              Cropland Agritech India formulates safe, high-efficacy agricultural
              inputs for resilient farms — from molecule to monsoon. Built by
              agronomists, for the people who actually farm.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-brand-300" aria-hidden="true" />
                <span>
                  Plot 12, Industrial Zone Phase II,<br />
                  Ahmedabad, Gujarat 380015, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0 text-brand-300" aria-hidden="true" />
                <a href="tel:+911234567890" className="hover:text-white transition-colors">+91 1234 567 890</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-brand-300" aria-hidden="true" />
                <a href="mailto:hello@croplandagritech.in" className="hover:text-white transition-colors">hello@croplandagritech.in</a>
              </li>
            </ul>
          </div>

          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title} className="md:col-span-2">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                {g.title}
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      className="inline-block text-ink-400 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Trust strip */}
          <div className="md:col-span-1 md:border-l md:border-white/10 md:pl-8">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white">Certified</h4>
            <ul className="mt-4 space-y-2 text-xs text-ink-400">
              {['CIB&RC', 'ISO 9001', 'ISO 14001', 'GMP', 'FCO', 'REACH'].map((c) => (
                <li key={c} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-brand-300" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} Cropland Agritech India Pvt. Ltd. · All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 font-medium text-ink-400 ring-1 ring-white/10">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-300" aria-hidden="true" />
              Proudly made in India
            </span>
            <span className="text-ink-500">CIN: U24290GJ2000PTC123456</span>
          </div>
        </div>
      </Container>
    </footer>
  )
}
