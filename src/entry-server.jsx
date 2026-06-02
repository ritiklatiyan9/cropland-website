import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

// SSR entry used by scripts/prerender.mjs. Renders the app at a given URL to an
// HTML string. <Seo>/<JsonLd> emit <title>/<meta>/<link>/<script ld+json> into
// this markup; the prerenderer extracts those and hoists them into <head>.
export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
