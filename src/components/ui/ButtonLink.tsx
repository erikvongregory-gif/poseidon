import { type ReactNode } from 'react'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'light'
  className?: string
}

const variants = {
  primary:
    'bg-aegean text-cream hover:bg-aegean-light border border-aegean',
  secondary:
    'bg-transparent text-cream border border-cream/60 hover:bg-cream/10',
  light:
    'bg-transparent text-aegean border border-aegean hover:bg-aegean/5',
}

export function ButtonLink({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden px-7 py-3 font-sans text-sm font-medium tracking-wide transition-colors active:scale-[0.98] ${variants[variant]} ${className}`}
    >
      <span
        className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-current opacity-40 transition-transform duration-500 group-hover:scale-x-100"
        aria-hidden
      />
      {children}
    </a>
  )
}
