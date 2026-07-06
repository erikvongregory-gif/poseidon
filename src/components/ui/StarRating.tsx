type StarRatingProps = {
  rating: number
  max?: number
  size?: 'sm' | 'md'
  className?: string
}

export function StarRating({ rating, max = 5, size = 'md', className = '' }: StarRatingProps) {
  const filled = Math.round(rating * 2) / 2
  const starClass = size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'

  return (
    <div
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${rating.toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} von ${max} Sternen`}
    >
      {Array.from({ length: max }, (_, i) => {
        const fill = Math.min(1, Math.max(0, filled - i))
        return (
          <span key={i} className={`relative inline-block ${starClass}`} aria-hidden>
            <svg viewBox="0 0 20 20" className="h-full w-full text-sand" fill="currentColor">
              <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
            </svg>
            {fill > 0 && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <svg viewBox="0 0 20 20" className="h-full w-[20px] text-terracotta-light" fill="currentColor">
                  <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.77l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
                </svg>
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}
