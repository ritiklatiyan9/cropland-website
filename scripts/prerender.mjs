// Static pre-rendering for the SPA.
//
// Pipeline (see package.json "build"):
//   1. vite build                          -> client bundle into dist/
//   2. vite build --ssr src/entry-server   -> SSR bundle into dist-ssr/
//   3. node scripts/prerender.mjs          -> this file
//
// For every indexable route we render the app to HTML, hoist the <Seo>/<JsonLd>
// tags (title, meta, canonical, JSON-LD) out of the body and into <head>, then
// write dist/<route>/index.html. Vercel serves these static files directly; the
// SPA catch-all rewrite only handles routes without a prerendered file.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve, join } from 'node:path'
import { products, slug } from '../src/data/products.js'
import { locations } from '../src/data/locations.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, '..')
const distDir = join(root, 'dist')

const { render } = await import(pathToFileURL(join(root, 'dist-ssr/entry-server.js')).href)

const routes = [
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
  ...locations.map((l) => `/pesticide-company/${l.slug}`),
  ...products.map((p) => `/products/${slug(p.code)}`),
]

const template = readFileSync(join(distDir, 'index.html'), 'utf8')

// Tags <Seo>/<JsonLd> emit that belong in <head>.
const HEAD_TAG_RE =
  /<title[^>]*>[\s\S]*?<\/title>|<meta\b[^>]*?\/?>|<link\b[^>]*?rel="canonical"[^>]*?\/?>|<script type="application\/ld\+json">[\s\S]*?<\/script>/gi

// Remove the template's default head tags that each page overrides, so we don't
// ship duplicate <title>/description/canonical/og/twitter. Geo, charset,
// viewport, theme-color, favicon and preconnect are kept.
function stripTemplateDefaults(head) {
  return head
    .replace(/<title[^>]*>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name="description"[^>]*>/i, '')
    .replace(/<meta\s+name="robots"[^>]*>/i, '')
    .replace(/<link\s+rel="canonical"[^>]*>/i, '')
    .replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, '')
}

let ok = 0
const failed = []

for (const route of routes) {
  try {
    const appHtml = render(route)

    // Pull head-worthy tags out of the rendered body.
    const headTags = appHtml.match(HEAD_TAG_RE) || []
    const bodyHtml = appHtml.replace(HEAD_TAG_RE, '')

    // Rebuild <head>: strip the template's default tags FIRST, then append this
    // page's hoisted tags (order matters — otherwise the strip removes the
    // page's own og/twitter/title/canonical).
    const headInjection = headTags.length ? `    ${headTags.join('\n    ')}\n  ` : ''
    let page = template.replace(
      /<head>([\s\S]*?)<\/head>/i,
      (full, head) => `<head>${stripTemplateDefaults(head)}\n${headInjection}</head>`,
    )

    page = page.replace(
      /(<div id="root">)(<\/div>)/i,
      (m, open, close) => `${open}${bodyHtml}${close}`,
    )

    const outDir = route === '/' ? distDir : join(distDir, route)
    mkdirSync(outDir, { recursive: true })
    writeFileSync(join(outDir, 'index.html'), page, 'utf8')
    ok++
  } catch (err) {
    failed.push({ route, error: err.message })
  }
}

console.log(`✓ prerendered ${ok}/${routes.length} routes`)
if (failed.length) {
  console.warn(`⚠ ${failed.length} route(s) failed (SPA fallback will serve them):`)
  for (const f of failed) console.warn(`   ${f.route} — ${f.error}`)
}
