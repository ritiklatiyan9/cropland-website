import { useState } from 'react'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
  FaCheckCircle,
  FaUsers,
  FaTruck,
  FaGlobe,
  FaBriefcase,
  FaSeedling,
  FaNewspaper,
} from 'react-icons/fa'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import { img } from '../data/images.js'

const enquiryTypes = [
  { id: 'product',     label: 'Product / Technical',  icon: FaSeedling },
  { id: 'distributor', label: 'Distributor / Dealer', icon: FaTruck },
  { id: 'export',      label: 'Export / International', icon: FaGlobe },
  { id: 'fpo',         label: 'Farm Programs · FPO',  icon: FaUsers },
  { id: 'press',       label: 'Press & Media',        icon: FaNewspaper },
  { id: 'careers',     label: 'Careers',              icon: FaBriefcase },
]

const offices = [
  {
    name: 'Corporate HQ',
    city: 'Ahmedabad, Gujarat',
    address: 'Plot 12, Industrial Zone Phase II, Ahmedabad 380015',
    phone: '+91 1234 567 890',
  },
  {
    name: 'Manufacturing Plant',
    city: 'Bharuch, Gujarat',
    address: 'GIDC Dahej, Bharuch 392130',
    phone: '+91 2645 251 200',
  },
  {
    name: 'South Regional',
    city: 'Hyderabad, Telangana',
    address: 'Plot 7, Cyber Industrial Park, Madhapur 500081',
    phone: '+91 40 4567 1200',
  },
]

const reasons = [
  { v: '< 1 day', l: 'Avg. response SLA' },
  { v: '11 langs', l: 'Spoken on the helpline' },
  { v: '8 hubs',   l: 'Regional dispatch warehouses' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [enquiry, setEnquiry] = useState('product')

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero — split layout */}
      <section className="relative border-b border-brand-100 bg-surface">
        <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              Talk to Cropland
            </span>
            <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
              We&apos;d love to{' '}
              <span className="font-serif-accent text-brand-700">hear from you.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-600">
              Whether you&apos;re a farmer with a field question, a distributor
              looking at a new territory, or a buyer evaluating a supplier — our
              team is one call or email away.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="tel:+911234567890" variant="primary" size="md" icon={FaPhoneAlt}>
                +91 1234 567 890
              </Button>
              <Button href="mailto:hello@croplandagritech.in" variant="outline" size="md" icon={FaEnvelope}>
                hello@croplandagritech.in
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-brand-100 pt-8">
              {reasons.map((r) => (
                <div key={r.l}>
                  <dt className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">{r.v}</dt>
                  <dd className="mt-1 text-xs text-ink-500">{r.l}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-4/5 w-full max-w-md">
              <div className="absolute -right-4 -top-4 h-full w-full rounded-4xl bg-harvest-200" aria-hidden="true" />
              <div className="photo-treatment relative h-full w-full overflow-hidden rounded-4xl bg-brand-100 shadow-photo">
                <img
                  src={img.whyPortrait}
                  alt="Cropland agronomist on a call with a farmer"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -left-3 bottom-8 flex items-center gap-3 rounded-2xl bg-white p-3 pr-4 shadow-card ring-1 ring-black/4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-700">
                  <FaClock aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">Sales · Mon–Sat</p>
                  <p className="text-sm font-bold text-ink-900">9:00 – 18:00 IST</p>
                </div>
              </div>

              <div className="absolute -right-2 top-10 rounded-full bg-white px-3.5 py-2 text-xs font-semibold text-ink-800 shadow-card ring-1 ring-black/4">
                <span className="text-brand-700">●</span> 24×7 emergency desk
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Form + offices */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-4xl bg-white shadow-soft ring-1 ring-brand-100">
                <div className="border-b border-brand-100 bg-brand-50/40 p-6 sm:p-8">
                  <h2 className="font-display text-2xl font-bold text-ink-900">Send us a message</h2>
                  <p className="mt-1.5 text-sm text-ink-600">
                    Pick a topic so we can route your enquiry to the right team.
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {enquiryTypes.map((t) => {
                      const isActive = enquiry === t.id
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setEnquiry(t.id)}
                          className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-[13px] font-medium transition-all ${
                            isActive
                              ? 'border-brand-600 bg-white text-brand-800 shadow-soft'
                              : 'border-brand-100 bg-white text-ink-700 hover:border-brand-300 hover:text-brand-800'
                          }`}
                        >
                          <t.icon className={`shrink-0 text-sm ${isActive ? 'text-brand-700' : 'text-ink-500'}`} aria-hidden="true" />
                          <span className="truncate">{t.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  {submitted ? (
                    <div className="py-10 text-center">
                      <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-3xl text-brand-700">
                        <FaCheckCircle aria-hidden="true" />
                      </span>
                      <h3 className="mt-5 font-display text-2xl font-bold text-ink-900">
                        Thank you — your enquiry is in.
                      </h3>
                      <p className="mt-2 mx-auto max-w-md text-ink-600">
                        A Cropland team member will get back to you within one working day.
                        For urgent matters, please call our HQ.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="mt-6 cursor-pointer rounded-full bg-brand-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-brand-800 transition-colors"
                      >
                        Send another enquiry
                      </button>
                    </div>
                  ) : (
                    <form className="space-y-5" onSubmit={onSubmit}>
                      <input type="hidden" name="enquiry_type" value={enquiry} />

                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field id="name" label="Full name" required />
                        <Field id="company" label="Company / Farm name" />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field id="email" type="email" label="Email" required placeholder="you@farm.in" />
                        <Field id="phone" type="tel" label="Phone" placeholder="+91 …" />
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <Field id="state" label="State" placeholder="e.g. Maharashtra" />
                        <Field id="crop" label="Crop / interest" placeholder="e.g. Cotton, Grapes" />
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-800">
                          Message <span className="text-brand-700">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell us about your crop, location, season or specific product interest…"
                          className="w-full resize-y rounded-2xl border border-brand-100 bg-surface-muted px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 focus:border-brand-400 focus:bg-white focus:outline-none"
                        />
                      </div>

                      <label className="flex cursor-pointer items-start gap-3 text-sm text-ink-600">
                        <input
                          type="checkbox"
                          required
                          className="mt-1 h-4 w-4 cursor-pointer accent-brand-700"
                        />
                        <span>
                          I agree to Cropland&apos;s{' '}
                          <a href="/privacy" className="font-medium text-brand-800 hover:underline">privacy policy</a> and
                          consent to being contacted about my enquiry.
                        </span>
                      </label>

                      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-ink-500">We respond within one working day.</p>
                        <Button type="submit" variant="primary" size="lg" iconRight={FaArrowRight}>
                          Send enquiry
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Side — offices */}
            <aside className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="rounded-4xl bg-ink-900 p-7 text-white shadow-card sm:p-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-100 ring-1 ring-white/10">
                  Quick contacts
                </span>
                <h3 className="mt-4 font-display text-xl font-bold">Reach the right team, faster.</h3>
                <ul className="mt-5 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <FaPhoneAlt className="mt-1 shrink-0 text-brand-200" aria-hidden="true" />
                    <div>
                      <p className="text-brand-100">Sales · Mon–Sat 9–6 IST</p>
                      <a href="tel:+911234567890" className="font-semibold text-white hover:text-brand-100">+91 1234 567 890</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaEnvelope className="mt-1 shrink-0 text-brand-200" aria-hidden="true" />
                    <div>
                      <p className="text-brand-100">General enquiries</p>
                      <a href="mailto:hello@croplandagritech.in" className="font-semibold text-white hover:text-brand-100">hello@croplandagritech.in</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaCheckCircle className="mt-1 shrink-0 text-brand-200" aria-hidden="true" />
                    <div>
                      <p className="text-brand-100">Compliance desk</p>
                      <a href="mailto:compliance@croplandagritech.in" className="font-semibold text-white hover:text-brand-100">compliance@croplandagritech.in</a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-6 space-y-4">
                {offices.map((o) => (
                  <div key={o.name} className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-brand-100">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-700">{o.name}</p>
                        <h4 className="mt-1 font-display text-lg font-bold text-ink-900">{o.city}</h4>
                      </div>
                      <FaMapMarkerAlt className="text-brand-600" aria-hidden="true" />
                    </div>
                    <p className="mt-2 text-sm text-ink-700">{o.address}</p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-ink-700">
                      <FaPhoneAlt className="text-xs text-brand-600" aria-hidden="true" />
                      <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="hover:text-brand-800">{o.phone}</a>
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Map */}
      <section className="pb-20 sm:pb-24">
        <Container>
          <div className="overflow-hidden rounded-4xl bg-white shadow-soft ring-1 ring-brand-100">
            <div className="grid items-stretch md:grid-cols-[1fr_1.5fr]">
              <div className="border-b border-brand-100 bg-brand-50/40 p-6 sm:p-8 md:border-b-0 md:border-r">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-700">Visit us</span>
                <h2 className="mt-3 font-display text-2xl font-bold text-ink-900 sm:text-3xl">
                  Corporate HQ — Ahmedabad
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">
                  Plot 12, Industrial Zone Phase II,<br />
                  Ahmedabad, Gujarat 380015, India
                </p>
                <a
                  href="https://maps.google.com/?q=Ahmedabad+Gujarat+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800 hover:text-brand-900"
                >
                  Open in Google Maps <FaArrowRight className="text-xs" aria-hidden="true" />
                </a>
              </div>
              <div className="aspect-video min-h-72 w-full md:aspect-auto">
                <iframe
                  title="Cropland Agritech India — Ahmedabad HQ"
                  src="https://www.google.com/maps?q=Ahmedabad+Gujarat+India&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

function Field({ id, label, type = 'text', required, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-800">
        {label} {required && <span className="text-brand-700">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-brand-100 bg-surface-muted px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 focus:border-brand-400 focus:bg-white focus:outline-none"
      />
    </div>
  )
}
