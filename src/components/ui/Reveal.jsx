import useInView from '../../hooks/useInView.js'

export default function Reveal({
  as: Tag = 'div',
  delay = 0,
  distance = 18,
  duration = 700,
  className = '',
  children,
  ...rest
}) {
  const [ref, inView] = useInView()
  const style = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
    transform: inView ? 'translateY(0)' : `translateY(${distance}px)`,
    opacity: inView ? 1 : 0,
    transitionProperty: 'transform, opacity',
    transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    willChange: 'transform, opacity',
  }
  return (
    <Tag ref={ref} style={style} className={className} {...rest}>
      {children}
    </Tag>
  )
}
