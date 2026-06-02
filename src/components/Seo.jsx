import { SITE_URL, ABS, BRAND, OG_IMAGE } from '../seo/site.js'

// ───────────────────────────────────────────────────────────────────────────
// <Seo> — per-page document metadata.
//
// React 19 natively hoists <title>, <meta> and <link> rendered anywhere in the
// tree up into <head>, and updates them on client-side route changes — so this
// works for both the live SPA and the build-time prerenderer (which extracts
// these tags from the rendered markup and moves them into <head>).
//
// Pass an absolute-from-root `path` (e.g. "/products") so the canonical/OG URLs
// resolve correctly. `title` should be the page-specific part; the brand suffix
// is appended automatically unless `rawTitle` is set.
// ───────────────────────────────────────────────────────────────────────────
export default function Seo({
  title,
  description = BRAND.description,
  path = '/',
  image = OG_IMAGE,
  type = 'website',
  noindex = false,
  rawTitle = false,
  keywords,
  children,
}) {
  const canonical = ABS(path)
  const fullTitle = rawTitle
    ? title
    : title
      ? `${title} | ${BRAND.legalName}`
      : `${BRAND.legalName} — Pesticide & Agrochemical Manufacturer`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph */}
      <meta property="og:site_name" content={BRAND.legalName} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {children}
    </>
  )
}

export { SITE_URL }
