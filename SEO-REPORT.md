# Cropland Agritech — SEO Implementation & Local Ranking Plan

**Goal:** rank `croplandagritech.com` at the top for *"pesticide company"* (and
related crop-protection queries) in **Western UP, Muzaffarnagar, Meerut and
Lucknow**.

**Site:** React + Vite SPA on Vercel · **Done:** 2026-06-02

---

## 1. What was the core problem

The site was a **client-side-rendered SPA** — the HTML Google first received was
an almost-empty shell, with every title, paragraph and bit of structured data
injected by JavaScript afterwards. That is the single biggest handicap for a site
trying to win competitive local search. It also had **no `robots.txt`, no
`sitemap.xml`, no per-page titles/descriptions, no structured data and no
location-specific pages.**

Everything below fixes that.

---

## 2. What was implemented

### A. Static pre-rendering (the big one)
All **77 pages now ship as real, fully-rendered HTML** — title, meta, content,
schema baked in — instead of an empty shell. A build step renders every route
server-side and writes a static `index.html` per URL; the browser then hydrates
it. Crawlers (and AI engines) get the full page on the first request.

- `src/entry-server.jsx` — server render entry
- `scripts/prerender.mjs` — renders each route, hoists SEO tags into `<head>`, writes `dist/<route>/index.html`
- `src/main.jsx` — hydrates prerendered HTML (falls back to client render when empty)
- Build pipeline (in `package.json`): `sitemap → vite build → vite build --ssr → prerender`

### B. Per-page metadata (React 19 native)
- `src/components/Seo.jsx` — unique `<title>`, meta description, canonical, robots, Open Graph + Twitter cards per page; updates correctly on in-app navigation too.
- Wired into **every page**: Home, Products, each of 64 product pages, About, Research, Contact, all legal pages, and the new location pages. The 404 page is `noindex`.

### C. Structured data (JSON-LD) — `src/seo/schema.js`
A linked entity graph using stable `@id`s:
- **Organization** (the manufacturer) — name, logo, address, contact, areas served, `knowsAbout`
- **LocalBusiness** — full NAP, **geo-coordinates (7 decimals)**, opening hours, price range — on Home, Contact and every location page
- **WebSite**, **BreadcrumbList**, **Product** (per product, with technical name + CIB&RC reg.), **FAQPage** and **ItemList**

### D. Local landing pages (the ranking engine) — `/pesticide-company/<city>`
Dedicated service pages are the **#1 local-organic ranking factor** (Whitespark 2026). Four were built, each with **genuinely unique, non-swappable content** (local crops, real pest/disease pressure, district names, tailored product picks, local FAQs):
- `/pesticide-company/muzaffarnagar` — "Pesticide Company in Muzaffarnagar" (HQ / sugarcane belt)
- `/pesticide-company/meerut` — "Pesticide Company Serving Meerut"
- `/pesticide-company/lucknow` — "Pesticide Company Serving Lucknow" (mango/mentha belt)
- `/pesticide-company/west-up` — "Pesticide Company in Western Uttar Pradesh"

Linked from the **footer** ("Service areas") and cross-linked to each other.

### E. Technical SEO files
- `public/robots.txt` — allows all + explicitly allows AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended…), points to the sitemap
- `public/sitemap.xml` — auto-generated, **77 URLs**, kept in sync at every build (`scripts/generate-sitemap.mjs`)
- `public/llms.txt` — structured business summary for AI answer engines
- `index.html` — strong homepage defaults + **geo meta** (`geo.region=IN-UP`, `geo.position`, `ICBM`) + canonical + OG image + `lang="en-IN"`
- `vercel.json` — `cleanUrls`, `trailingSlash:false`; the SPA rewrite now only catches routes without a prerendered file

### F. On-page fixes
- Products H1 → "Pesticides & Crop Protection Products"
- Hero image `fetchPriority` (LCP) + descriptive alt text
- Removed dead imports; lint passes clean

---

## 3. Target keywords → page

| Query | Page |
|---|---|
| pesticide company in Muzaffarnagar | `/pesticide-company/muzaffarnagar` |
| pesticide company in Meerut | `/pesticide-company/meerut` |
| pesticide company in Lucknow | `/pesticide-company/lucknow` |
| pesticide company in West UP / Western Uttar Pradesh | `/pesticide-company/west-up` |
| pesticide / agrochemical manufacturer | Home, About |
| \<product / molecule\> (e.g. chlorantraniliprole) | individual product pages |

---

## 4. What YOU need to do off-site (this is where local rank is won)

The website is now optimised. But **~32% of local-pack ranking is your Google
Business Profile and ~20% is reviews** — both live off the website. The site
cannot rank in the map pack without these.

### Google Business Profile (you said you already have one) — verify it matches the site EXACTLY
- [ ] **Primary category = "Pesticide supplier" / "Agricultural products supplier"** (the #1 local factor; a wrong primary category is the #1 *negative* factor)
- [ ] NAP matches the site **character-for-character**: `Cropland Agritech India Pvt. Ltd.`, `Pinna, Muzaffarnagar, Uttar Pradesh 251001`, `+91 97603 02690`
- [ ] Business is **Verified**
- [ ] Add 4+ secondary categories (Insecticide, Herbicide, Fungicide suppliers, etc.)
- [ ] Upload real photos of the works, products, team
- [ ] Set the service-area list to Muzaffarnagar, Meerut, Lucknow, Saharanpur, Shamli, Baghpat, Bijnor
- [ ] Post regularly

> ✅ **Email fixed (2026-06-02):** public/sales contact is now `sales@croplandagritech.com` (site, schema, footer, navbar, contact, llms.txt); legal/compliance/whistleblower/CSR contacts now use `admin@croplandagritech.com`. The old `.in` addresses are gone. Make sure these match your GBP and all citations. (Primary email lives in `src/seo/site.js → NAP.email`.)
>
> ℹ️ If dedicated `compliance@`, `csr@` or `whistleblower@` mailboxes exist on `.com`, tell me and I'll point the legal pages at them instead of `admin@`.

### Reviews (the **18-day rule** — Sterling Sky)
- [ ] Get to **10+ Google reviews** (the "magic 10" threshold), then keep a steady drip — **rankings cliff if no new review for ~3 weeks**
- [ ] Reply to every review
- [ ] Ask dealers and farmers right after a sale/visit (no incentives — review gating is illegal)

### Citations & directories (consistent NAP everywhere)
- [ ] **Bing Places** (powers ChatGPT, Copilot, Alexa), **Apple Business Connect**, **Facebook**, **Justdine/IndiaMART/TradeIndia/Sulekha** (strong in India for agri-inputs)
- [ ] Indian agri marketplaces: IndiaMART, TradeIndia, Agribegri, BigHaat dealer listings
- [ ] Local: any UP/Muzaffarnagar chamber of commerce or trade-body listing

### Authority / backlinks
- [ ] Get listed on agri-input "best of" / dealer-directory lists (top AI-visibility factor)
- [ ] Local press / trade publication mentions

---

## 5. Verify & monitor

1. **Deploy** (push to the Vercel-connected branch — build command unchanged).
2. **Google Search Console** → add `https://www.croplandagritech.com` → **submit `/sitemap.xml`**.
3. **Bing Webmaster Tools** → same.
4. Use GSC **URL Inspection** on a city page → "Test live URL" → confirm the rendered HTML now contains the title, content and structured data.
5. Validate schema: [Rich Results Test](https://search.google.com/test/rich-results) + [Schema validator](https://validator.schema.org/) on a city page and a product page.
6. Watch GSC **Performance** for the target queries over 4–12 weeks.

---

## 6. Honest limitations

- **Rankings take time.** New local pages typically take **4–12 weeks** to settle; competitive "near me" terms longer. There is no instant top-1.
- This work makes the **website** maximally rankable. The **map pack** position is driven by your GBP + reviews + proximity, which only you can build off-site (Section 4).
- Featured-image/OG uses a stock farm photo. Replace `OG_IMAGE` in `src/seo/site.js` with a branded 1200×630 image when you have one.
- `sameAs` social links in `src/seo/site.js` are empty — add real Facebook/Instagram/LinkedIn/YouTube URLs to strengthen entity confirmation.

---

## 7. Files added / changed

**Added:** `src/seo/site.js`, `src/seo/schema.js`, `src/components/Seo.jsx`,
`src/components/JsonLd.jsx`, `src/data/locations.js`, `src/pages/Location.jsx`,
`src/entry-server.jsx`, `scripts/generate-sitemap.mjs`, `scripts/prerender.mjs`,
`public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`, this report.

**Changed:** `index.html`, `src/main.jsx`, `src/App.jsx`, `package.json`,
`vercel.json`, `src/components/Footer.jsx`, `src/components/ui/LegalPage.jsx`,
`src/components/sections/Hero.jsx`, and every page component (`Home`, `Products`,
`ProductDetail`, `About`, `Research`, `Contact`, `NotFound`).

To edit business facts (NAP, hours, social, areas) change **one file**:
`src/seo/site.js`. To add/edit a city page, edit `src/data/locations.js`.
