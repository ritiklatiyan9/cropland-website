// ───────────────────────────────────────────────────────────────────────────
// JSON-LD schema builders. All nodes share a small set of stable @ids so they
// link into one entity graph across pages:
//   #organization  — the corporate manufacturer entity (site-wide)
//   #website       — the website itself
//   #localbusiness — the physical HQ in Muzaffarnagar
// Schema is not a direct ranking factor, but it drives rich results, entity
// understanding and AI-search citability.
// ───────────────────────────────────────────────────────────────────────────
import { SITE_URL, ABS, BRAND, NAP, SOCIAL, OG_IMAGE, AREAS_SERVED } from './site.js'

const ORG_ID = `${SITE_URL}/#organization`
const WEBSITE_ID = `${SITE_URL}/#website`
const LOCALBUSINESS_ID = `${SITE_URL}/#localbusiness`

const postalAddress = () => ({
  '@type': 'PostalAddress',
  streetAddress: NAP.address.streetAddress,
  addressLocality: NAP.address.locality,
  addressRegion: NAP.address.region,
  postalCode: NAP.address.postalCode,
  addressCountry: NAP.address.country,
})

const openingHours = () =>
  NAP.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  }))

// Corporate manufacturer entity — referenced everywhere via @id.
export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: BRAND.legalName,
  alternateName: BRAND.name,
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: ABS('/favicon.svg'), caption: BRAND.legalName },
  image: OG_IMAGE,
  description: BRAND.description,
  email: NAP.email,
  telephone: NAP.phoneE164,
  address: postalAddress(),
  areaServed: AREAS_SERVED.map((name) => ({ '@type': 'AdministrativeArea', name })),
  knowsAbout: [
    'Pesticides',
    'Insecticides',
    'Herbicides',
    'Fungicides',
    'Plant growth regulators',
    'Crop protection',
    'Agrochemicals',
    'Integrated pest management',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: NAP.phoneE164,
    contactType: 'sales',
    areaServed: 'IN',
    availableLanguage: ['en', 'hi'],
  },
  ...(SOCIAL.length ? { sameAs: SOCIAL } : {}),
})

// The website node.
export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: BRAND.legalName,
  inLanguage: 'en-IN',
  publisher: { '@id': ORG_ID },
})

// Physical HQ. `areaServedName` lets location pages reuse this with a city focus
// (and a unique @id) without inventing fake addresses.
export const localBusinessSchema = ({ id = LOCALBUSINESS_ID, name = BRAND.legalName, url = SITE_URL, areaServedName } = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': id,
  name,
  image: OG_IMAGE,
  url,
  telephone: NAP.phoneE164,
  email: NAP.email,
  priceRange: '₹₹',
  address: postalAddress(),
  geo: { '@type': 'GeoCoordinates', latitude: NAP.geo.lat, longitude: NAP.geo.lng },
  openingHoursSpecification: openingHours(),
  areaServed: (areaServedName ? [areaServedName, ...AREAS_SERVED] : AREAS_SERVED)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((nm) => ({ '@type': 'AdministrativeArea', name: nm })),
  parentOrganization: { '@id': ORG_ID },
})

// Breadcrumbs — items is an array of { name, path }.
export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: ABS(it.path),
  })),
})

// Product schema from a catalogue entry (see data/products.js).
export const productSchema = (product, path) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': `${ABS(path)}#product`,
  name: product.name,
  sku: product.code,
  description: product.summary,
  category: product.category,
  url: ABS(path),
  image: OG_IMAGE,
  brand: { '@type': 'Brand', name: BRAND.name },
  manufacturer: { '@id': ORG_ID },
  additionalProperty: [
    { '@type': 'PropertyValue', name: 'Technical formulation', value: product.technical },
    { '@type': 'PropertyValue', name: 'CIB&RC registration', value: product.reg },
    { '@type': 'PropertyValue', name: 'Target pests / diseases', value: product.targets },
    { '@type': 'PropertyValue', name: 'Recommended dosage', value: product.dosage },
    { '@type': 'PropertyValue', name: 'Pre-harvest interval', value: product.phi },
  ],
  audience: { '@type': 'Audience', audienceType: 'Farmers, agri-dealers and distributors' },
})

// FAQPage — items is an array of { q, a }. (No Google rich result for commercial
// sites since Aug 2023, but valuable for AI / LLM citation and entity context.)
export const faqSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((it) => ({
    '@type': 'Question',
    name: it.q,
    acceptedAnswer: { '@type': 'Answer', text: it.a },
  })),
})

// ItemList for collection pages (e.g. the products grid).
export const itemListSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  numberOfItems: items.length,
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    url: ABS(it.path),
    name: it.name,
  })),
})
