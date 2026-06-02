// ───────────────────────────────────────────────────────────────────────────
// Central SEO / business configuration — single source of truth for NAP,
// geo-coordinates, social profiles and the canonical domain. Used by the <Seo>
// component, the JSON-LD schema builders, the sitemap generator and the
// prerenderer. Keep every fact here IDENTICAL to the Google Business Profile
// (NAP consistency is a confirmed local ranking factor).
// ───────────────────────────────────────────────────────────────────────────

// Canonical origin — no trailing slash. All absolute URLs are built from this.
export const SITE_URL = 'https://www.croplandagritech.com'

export const ABS = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`

// Brand / company identity
export const BRAND = {
  name: 'Cropland Agritech',
  legalName: 'Cropland Agritech India Pvt. Ltd.',
  shortName: 'Cropland',
  // One-line positioning used as the default meta description fallback.
  tagline: 'Pesticide & agrochemical manufacturer',
  description:
    'Cropland Agritech is a CIB&RC-registered pesticide and agrochemical manufacturer based in Muzaffarnagar, Uttar Pradesh, supplying insecticides, herbicides, fungicides, plant growth regulators and bio-solutions to farmers and dealers across Western UP, Meerut, Lucknow and India.',
}

// NAP — Name, Address, Phone. Must match the Google Business Profile exactly.
export const NAP = {
  phone: '+91 97603 02690',
  phoneE164: '+919760302690',
  whatsapp: '919760302690',
  email: 'sales@croplandagritech.com',
  address: {
    streetAddress: 'Pinna',
    locality: 'Muzaffarnagar',
    region: 'Uttar Pradesh',
    postalCode: '251001',
    country: 'IN',
    full: 'Pinna, Muzaffarnagar, Uttar Pradesh 251001, India',
  },
  geo: { lat: 29.4568871, lng: 77.7128312 },
  // Mon–Sat 09:00–18:00 desk hours (see Contact page).
  hours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
}

// Public social / citation profiles. Add real URLs as they go live — these feed
// the Organization `sameAs` array (entity confirmation + AI-search signal).
// Leave the array empty rather than pointing at non-existent profiles.
export const SOCIAL = [
  // 'https://www.facebook.com/croplandagritech',
  // 'https://www.instagram.com/croplandagritech',
  // 'https://www.linkedin.com/company/croplandagritech',
  // 'https://www.youtube.com/@croplandagritech',
]

// Default Open Graph / Twitter share image (absolute URL).
export const OG_IMAGE =
  'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&q=80&auto=format&fit=crop'

// Areas the business serves (feeds areaServed + keyword targeting).
export const AREAS_SERVED = [
  'Muzaffarnagar',
  'Meerut',
  'Lucknow',
  'Western Uttar Pradesh',
  'Saharanpur',
  'Shamli',
  'Baghpat',
  'Bijnor',
  'India',
]
