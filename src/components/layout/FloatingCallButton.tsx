'use client'

import { Phone } from '@phosphor-icons/react'
import { SITE } from '@/lib/constants'

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${SITE.phoneTel}`}
      data-floating-call
      className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-aegean text-cream shadow-[0_8px_32px_rgba(30,77,107,0.35)] transition-transform active:scale-[0.95] hover:bg-aegean-light md:bottom-6 md:hidden"
      aria-label={`Anrufen: ${SITE.phone}`}
    >
      <Phone size={24} weight="fill" />
    </a>
  )
}
