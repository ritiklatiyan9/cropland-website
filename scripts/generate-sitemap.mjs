// Generates public/sitemap.xml from the live route table, product catalogue and
// location pages. Run automatically before `vite build` (Vite copies public/ ->
// dist/). Google ignores <priority>/<changefreq>, so we emit <loc> + <lastmod>
// only. Run manually with: node scripts/generate-sitemap.mjs
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { products, slug } from '../src/data/products.js'
import { locations } from '../src/data/locations.js'

const SITE_URL = 'https://www.croplandagritech.com'
const __dirname = dirname(fileURLToPath(import.meta.url))
const lastmod = new Date().toISOString().slice(0, 10)

// Static, indexable routes (excludes the 404 page).
const staticPaths = [
  '/',
  '/products',
  '/research',
  '/about',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/compliance',
  '/csr',
  '/delete-account',
]

const locationPaths = locations.map((l) => `/pesticide-company/${l.slug}`)
const productPaths = products.map((p) => `/products/${slug(p.code)}`)

const allPaths = [...staticPaths, ...locationPaths, ...productPaths]

const urls = allPaths
  .map(
    (p) =>
      `  <url>\n    <loc>${SITE_URL}${p}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
  )
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

const out = resolve(__dirname, '../public/sitemap.xml')
writeFileSync(out, xml, 'utf8')
console.log(`✓ sitemap.xml written with ${allPaths.length} URLs -> ${out}`)
