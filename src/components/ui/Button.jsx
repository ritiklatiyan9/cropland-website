import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-brand-700 text-white hover:bg-brand-800 shadow-soft hover:shadow-glow',
  cta:
    'bg-harvest-400 text-ink-900 hover:bg-harvest-300 shadow-soft hover:shadow-glow',
  outline:
    'border border-brand-700/30 text-brand-800 bg-white/60 backdrop-blur hover:border-brand-700 hover:bg-white',
  ghost:
    'text-brand-800 hover:bg-brand-50',
  white:
    'bg-white text-brand-800 hover:bg-brand-50 shadow-soft',
}

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-6 py-3 text-base gap-2',
}

export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  icon: Icon,
  iconRight: IconRight,
  type,
  ...rest
}) {
  const cls = `inline-flex cursor-pointer items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${sizes[size]} ${variants[variant]} ${className}`

  const inner = (
    <>
      {Icon && <Icon className="text-base" aria-hidden="true" />}
      {children}
      {IconRight && <IconRight className="text-base" aria-hidden="true" />}
    </>
  )

  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button type={type || 'button'} className={cls} {...rest}>{inner}</button>
}
