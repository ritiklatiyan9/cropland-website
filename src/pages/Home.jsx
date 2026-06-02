import Seo from '../components/Seo.jsx'
import JsonLd from '../components/JsonLd.jsx'
import { organizationSchema, websiteSchema, localBusinessSchema } from '../seo/schema.js'
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
      <Seo
        title="Pesticide Company in Muzaffarnagar, Meerut & Lucknow"
        rawTitle={false}
        description="Cropland Agritech is a CIB&RC-registered pesticide manufacturer in Muzaffarnagar, UP — insecticides, herbicides, fungicides, PGRs & bio-solutions for farmers and dealers across Western UP, Meerut and Lucknow. Call +91 97603 02690."
        path="/"
        keywords="pesticide company, pesticide manufacturer, agrochemical company Muzaffarnagar, insecticide company Meerut, pesticide dealer Lucknow, crop protection West UP"
      />
      <JsonLd data={[organizationSchema(), websiteSchema(), localBusinessSchema()]} />
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
