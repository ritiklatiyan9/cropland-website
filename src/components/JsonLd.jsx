// Renders a JSON-LD structured-data block. JSON-LD is valid in <head> or
// <body>; Google and AI crawlers parse it from either. Accepts a single schema
// object or an array of nodes (rendered as an @graph-style list of scripts).
export default function JsonLd({ data }) {
  const nodes = Array.isArray(data) ? data : [data]
  return (
    <>
      {nodes.filter(Boolean).map((node, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
    </>
  )
}
