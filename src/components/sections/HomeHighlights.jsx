import { Link } from 'react-router-dom'
import { FaArrowRight, FaMapMarkerAlt, FaSearch, FaWhatsapp } from 'react-icons/fa'
import Container from '../ui/Container.jsx'
import Reveal from '../ui/Reveal.jsx'

const actions = [
  {
    icon: FaSearch,
    title: 'Find the right product',
    text: 'Search by crop, molecule, category or pest pressure.',
    to: '/products',
    label: 'Open catalogue',
  },
  {
    icon: FaWhatsapp,
    title: 'Send crop details',
    text: 'Submit the contact form and continue with a pre-filled WhatsApp message.',
    to: '/contact',
    label: 'Start enquiry',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Visit the local base',
    text: 'Pinna, Muzaffarnagar, Uttar Pradesh with map and directions.',
    to: '/contact',
    label: 'View location',
  },
]

export default function HomeHighlights() {
  return (
    <section className="bg-surface py-10 sm:py-12">
      <Container>
        <div className="grid gap-4 lg:grid-cols-3">
          {actions.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <Link
                to={item.to}
                className="group flex h-full gap-4 rounded-2xl bg-white p-5 shadow-soft ring-1 ring-brand-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <item.icon aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-lg font-bold text-ink-900">{item.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-ink-600">{item.text}</span>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-800">
                    {item.label}
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
