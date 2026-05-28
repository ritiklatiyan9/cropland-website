import Container from './Container.jsx'

export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="relative border-b border-brand-100 bg-surface">
      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl">
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-700">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink-900 sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-600">
              {description}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  )
}
