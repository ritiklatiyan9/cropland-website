import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaPhoneAlt, FaArrowRight, FaEnvelope, FaCheckCircle } from 'react-icons/fa'
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
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility strip — thin, hidden on mobile and once scrolled */}
      <div
        className={`hidden border-b border-white/10 bg-ink-900 text-ink-400 transition-all duration-300 lg:block ${
          scrolled ? 'max-h-0 overflow-hidden opacity-0' : 'max-h-12 opacity-100'
        }`}
      >
        <Container className="flex items-center justify-between py-2 text-xs">
          <p className="inline-flex items-center gap-2">
            <FaCheckCircle className="text-brand-300" aria-hidden="true" />
            CIB&amp;RC registered · ISO 9001 + 14001 · GMP facility
          </p>
          <div className="flex items-center gap-6">
            <a href="tel:+911234567890" className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <FaPhoneAlt className="text-[10px] text-brand-300" aria-hidden="true" />
              +91 1234 567 890
            </a>
            <a href="mailto:hello@croplandagritech.in" className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <FaEnvelope className="text-[10px] text-brand-300" aria-hidden="true" />
              hello@croplandagritech.in
            </a>
          </div>
        </Container>
      </div>

      {/* Main nav bar */}
      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'border-brand-100 bg-surface/95 shadow-soft backdrop-blur-md'
            : 'border-brand-100/60 bg-surface/85 backdrop-blur'
        }`}
      >
        <Container className="flex items-center justify-between gap-4 py-3.5 sm:py-4">
          <Logo />

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `relative inline-flex items-center px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${
                        isActive ? 'text-ink-900' : 'text-ink-600 hover:text-ink-900'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {l.label}
                        <span
                          className={`absolute left-3 right-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-brand-700 transition-transform duration-200 ${
                            isActive ? 'scale-x-100' : 'scale-x-0'
                          }`}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button to="/contact" variant="primary" size="md" iconRight={FaArrowRight}>
              Get a Quote
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="grid h-11 w-11 cursor-pointer place-items-center rounded-xl border border-brand-100 bg-white text-ink-800 transition-colors hover:border-brand-300 hover:text-brand-800 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </Container>

        {/* Mobile drawer */}
        <div
          id="mobile-nav"
          className={`overflow-hidden border-brand-100 bg-white transition-[max-height,border] duration-300 lg:hidden ${
            open ? 'max-h-[80vh] border-t' : 'max-h-0 border-t-0'
          }`}
        >
          <Container className="py-4">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-brand-50 text-brand-800'
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
            <div className="mt-4 flex flex-col gap-3 border-t border-brand-100 pt-4">
              <a href="tel:+911234567890" className="inline-flex items-center gap-2 text-sm font-medium text-ink-700">
                <FaPhoneAlt className="text-brand-700" aria-hidden="true" />
                +91 1234 567 890
              </a>
              <a href="mailto:hello@croplandagritech.in" className="inline-flex items-center gap-2 text-sm font-medium text-ink-700">
                <FaEnvelope className="text-brand-700" aria-hidden="true" />
                hello@croplandagritech.in
              </a>
              <Button to="/contact" variant="primary" size="md" iconRight={FaArrowRight} className="mt-2 w-full">
                Get a Quote
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </header>
  )
}
