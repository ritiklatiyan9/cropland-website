import Hero from '../components/sections/Hero.jsx'
import HomeHighlights from '../components/sections/HomeHighlights.jsx'
import TrustStrip from '../components/sections/TrustStrip.jsx'
import Solutions from '../components/sections/Solutions.jsx'
import WhyCropland from '../components/sections/WhyCropland.jsx'
import Stats from '../components/sections/Stats.jsx'
import FeaturedProducts from '../components/sections/FeaturedProducts.jsx'
import ProductCarousel from '../components/sections/ProductCarousel.jsx'
import Research from '../components/sections/Research.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import CtaBanner from '../components/sections/CtaBanner.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HomeHighlights />
      <Solutions />
      <WhyCropland />
      <Stats />
      <FeaturedProducts />
      <ProductCarousel />
      <Research />
      <Testimonials />
      <CtaBanner />
    </>
  )
}
