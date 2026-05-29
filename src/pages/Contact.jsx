import { useState } from 'react'
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSeedling,
  FaTruck,
  FaUsers,
  FaWhatsapp,
} from 'react-icons/fa'
import Container from '../components/ui/Container.jsx'
import Button from '../components/ui/Button.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import { img } from '../data/images.js'

const whatsappNumber = '919760302690'
const displayPhone = '+91 97603 02690'
const pinnaLocation = {
  label: 'Pinna, Muzaffarnagar, Uttar Pradesh 251001',
  lat: '29.4568871',
  lng: '77.7128312',
}

const enquiryTypes = [
  { id: 'Product / Technical', label: 'Product', icon: FaSeedling },
  { id: 'Distributor / Dealer', label: 'Dealer', icon: FaTruck },
  { id: 'Farm Program / FPO', label: 'FPO', icon: FaUsers },
  { id: 'Bulk / Institutional', label: 'Bulk', icon: FaGlobe },
]

const contactCards = [
  { icon: FaWhatsapp, label: 'WhatsApp', value: displayPhone, href: `https://wa.me/${whatsappNumber}` },
  { icon: FaPhoneAlt, label: 'Call', value: displayPhone, href: 'tel:+919760302690' },
  { icon: FaEnvelope, label: 'Email', value: 'hello@croplandagritech.in', href: 'mailto:hello@croplandagritech.in' },
]

const checklist = [
  'Product recommendations and crop questions',
  'Dealer, distributor and bulk enquiries',
  'Location, crop and message included in WhatsApp',
]

export default function Contact() {
  const [enquiry, setEnquiry] = useState(enquiryTypes[0].id)
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const message = [
      'Hello Cropland Agritech,',
      '',
      'I am submitting an enquiry from the website.',
      `Enquiry type: ${enquiry}`,
      `Name: ${data.get('name') || '-'}`,
      `Company / Farm: ${data.get('company') || '-'}`,
      `Phone: ${data.get('phone') || '-'}`,
      `Email: ${data.get('email') || '-'}`,
      `State / District: ${data.get('state') || '-'}`,
      `Crop / Interest: ${data.get('crop') || '-'}`,
      '',
      `Message: ${data.get('message') || '-'}`,
    ].join('\n')

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink-900 text-white">
        <img
          src={img.fields}
          alt=""
          loading="eager"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 hidden bg-linear-to-r from-ink-900 from-10% via-ink-900/90 via-55% to-ink-900/40 lg:block" aria-hidden="true" />
        <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink-900 from-25% via-ink-900/80 to-ink-900/60 lg:hidden" aria-hidden="true" />

        <Container className="grid min-h-[30rem] items-center gap-8 py-12 sm:py-16 lg:grid-cols-12 lg:gap-12 lg:py-20">
          <Reveal className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-100 backdrop-blur">
              <FaWhatsapp className="text-brand-300" aria-hidden="true" />
              Contact Cropland
            </span>
            <h1 className="mt-5 max-w-4xl font-display text-[2.45rem] font-bold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[5rem]">
              Reach Cropland Agritech
              <span className="block font-serif-accent text-harvest-200">from Pinna.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">
              Send product questions, dealership requests or crop details. Your
              form opens WhatsApp with the enquiry ready for our team.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href={`https://wa.me/${whatsappNumber}`} variant="cta" size="lg" icon={FaWhatsapp}>
                WhatsApp now
              </Button>
              <Button href="tel:+919760302690" variant="white" size="lg" icon={FaPhoneAlt}>
                {displayPhone}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="ml-auto max-w-md rounded-2xl border border-white/15 bg-white/10 p-5 shadow-card backdrop-blur-xl sm:p-6">
              <div className="flex items-start gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-300/20 text-brand-100 ring-1 ring-white/10">
                  <FaMapMarkerAlt aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-100/80">Local desk</p>
                  <h2 className="mt-1 font-display text-2xl font-bold text-white">Pinna, Muzaffarnagar</h2>
                  <p className="mt-2 text-sm leading-relaxed text-brand-100/80">{pinnaLocation.label}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <p className="font-display text-2xl font-bold text-white">9-6</p>
                  <p className="mt-1 text-xs text-brand-100/75">Mon-Sat desk</p>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/10">
                  <p className="font-display text-2xl font-bold text-white">24h</p>
                  <p className="mt-1 text-xs text-brand-100/75">WhatsApp intake</p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative z-10 -mt-8 bg-surface pb-4">
        <Container>
          <div className="grid gap-3 sm:grid-cols-3">
            {contactCards.map((card, i) => (
              <Reveal key={card.label} delay={i * 70}>
                <a
                  href={card.href}
                  target={card.href.startsWith('http') ? '_blank' : undefined}
                  rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex h-full items-center gap-4 rounded-2xl bg-white p-4 shadow-card ring-1 ring-brand-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                    <card.icon aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-500">{card.label}</span>
                    <span className="mt-0.5 block truncate text-sm font-bold text-ink-900 group-hover:text-brand-800">{card.value}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-7">
              <form className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-brand-100 sm:p-7 lg:p-8" onSubmit={onSubmit}>
                <div className="flex flex-col gap-4 border-b border-brand-100 pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl">Send enquiry</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                      Choose a topic and fill the details below.
                    </p>
                  </div>
                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-50 px-3 py-1.5 text-xs font-semibold text-brand-800 ring-1 ring-brand-100">
                    <FaClock aria-hidden="true" />
                    Mon-Sat 9-6
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {enquiryTypes.map((t) => {
                    const isActive = enquiry === t.id
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setEnquiry(t.id)}
                        className={`flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full px-3 text-xs font-semibold transition-all ${
                          isActive
                            ? 'bg-ink-900 text-white shadow-soft'
                            : 'bg-surface-muted text-ink-700 ring-1 ring-brand-100 hover:bg-brand-50 hover:text-brand-800'
                        }`}
                      >
                        <t.icon className="text-xs" aria-hidden="true" />
                        {t.label}
                      </button>
                    )
                  })}
                </div>

                <input type="hidden" name="enquiry_type" value={enquiry} />

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field id="name" label="Full name" required />
                  <Field id="company" label="Company / Farm name" />
                  <Field id="phone" type="tel" label="Phone / WhatsApp" required placeholder="+91 ..." />
                  <Field id="email" type="email" label="Email" placeholder="you@farm.in" />
                  <Field id="state" label="State / District" placeholder="e.g. Muzaffarnagar, UP" />
                  <Field id="crop" label="Crop / product interest" placeholder="e.g. Paddy, BioRoot" />
                </div>

                <div className="mt-4">
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink-800">
                    Requirement <span className="text-brand-700">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your crop, acreage, pest problem, dealership enquiry or product requirement."
                    className="w-full resize-y rounded-2xl border border-brand-100 bg-surface-muted px-4 py-3 text-sm text-ink-900 placeholder:text-ink-500 focus:border-brand-400 focus:bg-white focus:outline-none"
                  />
                </div>

                <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm text-ink-600">
                  <input type="checkbox" required className="mt-1 h-4 w-4 cursor-pointer accent-brand-700" />
                  <span>I agree to be contacted by Cropland Agritech regarding this enquiry.</span>
                </label>

                <div className="mt-6 flex flex-col gap-3 border-t border-brand-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs text-ink-500">
                    {sent ? 'WhatsApp opened with your enquiry details.' : 'Your message opens in WhatsApp before sending.'}
                  </p>
                  <Button type="submit" variant="primary" size="lg" icon={FaWhatsapp} iconRight={FaArrowRight}>
                    Open WhatsApp
                  </Button>
                </div>
              </form>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-brand-100">
                <div className="aspect-[4/3] min-h-72">
                  <iframe
                    title="Cropland Agritech location in Pinna, Muzaffarnagar"
                    src={`https://www.google.com/maps?q=${pinnaLocation.lat},${pinnaLocation.lng}&z=15&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-700 ring-1 ring-brand-100">
                    <FaMapMarkerAlt aria-hidden="true" />
                    Location
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-ink-900">Pinna, Muzaffarnagar</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{pinnaLocation.label}</p>
                  <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl bg-surface-muted p-3">
                      <p className="text-xs font-semibold text-ink-500">Latitude</p>
                      <p className="mt-1 font-bold text-ink-900">{pinnaLocation.lat}</p>
                    </div>
                    <div className="rounded-xl bg-surface-muted p-3">
                      <p className="text-xs font-semibold text-ink-500">Longitude</p>
                      <p className="mt-1 font-bold text-ink-900">{pinnaLocation.lng}</p>
                    </div>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${pinnaLocation.lat},${pinnaLocation.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
                  >
                    Open directions
                    <FaArrowRight className="text-xs" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="mt-5 rounded-2xl bg-ink-900 p-5 text-white shadow-card">
                <h3 className="font-display text-xl font-bold text-white">Before you send</h3>
                <ul className="mt-4 space-y-3">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-brand-100/85">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-brand-300" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}

function Field({ id, label, type = 'text', required, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-ink-800">
        {label} {required && <span className="text-brand-700">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-2xl border border-brand-100 bg-surface-muted px-4 text-sm text-ink-900 placeholder:text-ink-500 focus:border-brand-400 focus:bg-white focus:outline-none"
      />
    </div>
  )
}
