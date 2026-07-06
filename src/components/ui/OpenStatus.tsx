'use client'

import { useEffect, useState } from 'react'
import { getOpenStatus, msUntilNextChange, type OpenStatusResult } from '@/lib/opening-hours'

type OpenStatusProps = {
  className?: string
  variant?: 'default' | 'hero' | 'compact'
}

export function OpenStatus({ className = '', variant = 'default' }: OpenStatusProps) {
  const [status, setStatus] = useState<OpenStatusResult | null>(null)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>

    const refresh = () => {
      setStatus(getOpenStatus())
      timeout = setTimeout(refresh, msUntilNextChange())
    }

    refresh()
    const interval = setInterval(refresh, 60_000)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [])

  if (!status) return null

  if (variant === 'hero') {
    return (
      <div
        className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 ${className} ${
          status.isOpen
            ? 'border-emerald-400/30 bg-emerald-950/55'
            : 'border-cream/15 bg-anthracite/55'
        }`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
          {status.isOpen && (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          )}
          <span
            className={`relative inline-flex h-2 w-2 rounded-full ${
              status.isOpen ? 'bg-emerald-400' : 'bg-cream/40'
            }`}
          />
        </span>
        <p className="font-sans text-sm text-cream">
          <span className="font-medium">{status.label}</span>
          <span className="text-cream/65"> · {status.detail}</span>
        </p>
      </div>
    )
  }

  const compact = variant === 'compact'

  return (
    <div
      className={`inline-flex items-start gap-3 ${className}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="relative mt-1.5 flex h-2.5 w-2.5 shrink-0" aria-hidden>
        <span
          className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
            status.isOpen ? 'animate-ping bg-emerald-500' : 'bg-anthracite-muted/40'
          }`}
        />
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            status.isOpen ? 'bg-emerald-500' : 'bg-anthracite-muted/50'
          }`}
        />
      </span>
      <div>
        <p
          className={`font-sans font-medium tracking-wide ${
            compact ? 'text-sm' : 'text-base'
          } ${status.isOpen ? 'text-emerald-700' : 'text-anthracite-muted'}`}
        >
          {status.label}
        </p>
        <p className={`mt-0.5 capitalize text-anthracite-muted ${compact ? 'text-xs' : 'text-sm'}`}>
          {status.detail}
        </p>
      </div>
    </div>
  )
}
