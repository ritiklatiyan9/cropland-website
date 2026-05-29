import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaArrowRight,
  FaBars,
  FaCheckCircle,
  FaEnvelope,
  FaFlask,
  FaPhoneAlt,
  FaSeedling,
  FaTimes,
} from 'react-icons/fa'
import Container from './ui/Container.jsx'
import Logo from './ui/Logo.jsx'
import Button from './ui/Button.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/research', label: 'Research' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`hidden overflow-hidden border-b border-white/10 bg-ink-900 text-ink-400 transition-all duration-300 lg:block ${
          scrolled ? 'max-h-0 opacity-0' : 'max-h-11 opacity-100'
        }`}
      >
        <Container className="flex items-center justify-between py-2 text-xs">
          <p className="inline-flex items-center gap-2 font-medium">
            <FaSeedling className="text-brand-300" aria-hidden="true" />
            Research-backed crop inputs for Indian growing conditions
          </p>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-2 text-brand-100">
              <FaCheckCircle className="text-[10px] text-brand-300" aria-hidden="true" />
              CIB&amp;RC · ISO 9001 · GMP
            </span>
            <a href="tel:+919760302690" className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <FaPhoneAlt className="text-[10px] text-brand-300" aria-hidden="true" />
              +91 97603 02690
            </a>
            <a href="mailto:hello@croplandagritech.in" className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <FaEnvelope className="text-[10px] text-brand-300" aria-hidden="true" />
              hello@croplandagritech.in
            </a>
          </div>
        </Container>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'border-brand-100/80 bg-surface/95 shadow-soft backdrop-blur-xl'
            : 'border-brand-100/40 bg-surface/80 backdrop-blur-md'
        }`}
      >
        <Container className="flex items-center justify-between gap-4 py-3">
          <Logo />

          <nav
            aria-label="Primary"
            className="hidden rounded-full border border-brand-100/80 bg-white/70 p-1 shadow-soft backdrop-blur lg:block"
          >
            <ul className="flex items-center gap-0.5">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `inline-flex items-center rounded-full px-4 py-2 text-[13px] font-semibold transition-all duration-200 ${
                        isActive
                          ? 'bg-ink-900 text-white shadow-soft'
                          : 'text-ink-600 hover:bg-brand-50 hover:text-brand-800'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="mailto:hello@croplandagritech.in"
              className="hidden items-center gap-2 rounded-full border border-brand-100 bg-white/70 px-4 py-2 text-xs font-semibold text-ink-700 shadow-soft transition-colors hover:border-brand-300 hover:text-brand-800 xl:inline-flex"
            >
              <FaFlask className="text-brand-700" aria-hidden="true" />
              R&amp;D desk
            </a>
            <Button to="/contact" variant="primary" size="md" iconRight={FaArrowRight}>
              Get a Quote
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-brand-100 bg-white text-ink-800 shadow-soft transition-colors hover:border-brand-300 hover:text-brand-800 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </Container>

        <div
          id="mobile-nav"
          className={`overflow-hidden border-brand-100 bg-white/95 shadow-soft backdrop-blur-xl transition-[max-height,border,opacity] duration-300 lg:hidden ${
            open ? 'max-h-[calc(100vh-4rem)] border-t opacity-100' : 'pointer-events-none max-h-0 border-t-0 opacity-0'
          }`}
        >
          <Container className="py-4 sm:py-5">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold transition-colors ${
                        isActive
                          ? 'bg-ink-900 text-white'
                          : 'text-ink-800 hover:bg-brand-50 hover:text-brand-800'
                      }`
                    }
                  >
                    {l.label}
                    <FaArrowRight className="text-xs opacity-50" aria-hidden="true" />
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-4 grid gap-3 rounded-2xl border border-brand-100 bg-surface-muted/70 p-4 sm:grid-cols-2">
              <a href="tel:+919760302690" className="inline-flex min-w-0 items-center gap-3 text-sm font-semibold text-ink-700">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-brand-700 shadow-soft">
                  <FaPhoneAlt aria-hidden="true" />
                </span>
                <span className="truncate">+91 97603 02690</span>
              </a>
              <a href="mailto:hello@croplandagritech.in" className="inline-flex min-w-0 items-center gap-3 text-sm font-semibold text-ink-700">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-brand-700 shadow-soft">
                  <FaEnvelope aria-hidden="true" />
                </span>
                <span className="truncate">hello@croplandagritech.in</span>
              </a>
              <Button
                to="/contact"
                variant="primary"
                size="md"
                iconRight={FaArrowRight}
                className="w-full sm:col-span-2"
                onClick={() => setOpen(false)}
              >
                Get a Quote
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}
