export default function Container({ as: Tag = 'div', className = '', children, size = 'xl' }) {
  const sizes = {
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
  }
  return (
    <Tag className={`mx-auto w-full ${sizes[size]} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  )
}
