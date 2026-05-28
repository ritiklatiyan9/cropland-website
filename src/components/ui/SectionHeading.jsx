export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  children,
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <div className={`max-w-2xl ${alignCls} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200/70">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-bold text-ink-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
          {description}
        </p>
      )}
      {children}
    </div>
  )
}
