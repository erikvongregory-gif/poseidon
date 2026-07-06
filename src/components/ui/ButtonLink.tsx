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
      className={`inline-flex items-center justify-center px-7 py-3 font-sans text-sm font-medium tracking-wide transition-colors active:scale-[0.98] ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
