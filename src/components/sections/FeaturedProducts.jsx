import { FaArrowRight } from 'react-icons/fa'
import Container from '../ui/Container.jsx'
import Button from '../ui/Button.jsx'
import Reveal from '../ui/Reveal.jsx'
import ProductCard from '../ProductCard.jsx'
import { products } from '../../data/products.js'

export default function FeaturedProducts() {
  const featured = products.slice(0, 6)
  return (
    <section id="featured" className="relative py-16 sm:py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-5 sm:gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-700 sm:text-xs">Featured range</span>
            <h2 className="mt-3 font-display text-[1.75rem] font-bold leading-[1.1] text-ink-900 sm:text-4xl lg:text-[2.75rem]">
              Field-tested products,{' '}
              <span className="font-serif-accent text-brand-700">ready for your next spray.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <Button to="/products" variant="outline" size="md" iconRight={FaArrowRight}>
              View catalogue
            </Button>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.code} delay={(i % 3) * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
