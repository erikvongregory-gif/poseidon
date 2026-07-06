'use client'

import { useEffect, useState } from 'react'
import { ArrowSquareOut, MapPin } from '@phosphor-icons/react'
import Link from 'next/link'
import { getStoredConsent, openCookieSettings } from '@/components/layout/CookieBanner'
import { MAP, SITE } from '@/lib/constants'

function MapLinks() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-sand bg-cream px-4 py-3">
      <a
        href={MAP.google}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-sans text-sm text-aegean transition-colors hover:text-aegean-light"
      >
        Google Maps
        <ArrowSquareOut size={14} aria-hidden />
      </a>
      <a
        href={MAP.apple}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-sans text-sm text-aegean transition-colors hover:text-aegean-light"
      >
        Apple Karten
        <ArrowSquareOut size={14} aria-hidden />
      </a>
    </div>
  )
}

export function MapPlaceholder() {
  const [loaded, setLoaded] = useState(false)
  const [externalAllowed, setExternalAllowed] = useState(false)

  useEffect(() => {
    const sync = () => setExternalAllowed(getStoredConsent().external)
    sync()
    window.addEventListener('poseidon-consent-change', sync)
    return () => window.removeEventListener('poseidon-consent-change', sync)
  }, [])

  if (loaded) {
    return (
      <div className="overflow-hidden border border-sand">
        <iframe
          title={`Karte: ${SITE.name}, ${SITE.address.full}`}
          src={MAP.embed}
          className="h-full min-h-[320px] w-full border-0 md:min-h-[400px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <MapLinks />
      </div>
    )
  }

  if (!externalAllowed) {
    return (
      <div className="overflow-hidden border border-sand">
        <div className="flex min-h-[320px] w-full flex-col items-center justify-center bg-cream-dark px-6 text-center md:min-h-[400px]">
          <MapPin size={32} weight="light" className="mb-4 text-aegean/30" aria-hidden />
          <p className="font-sans text-sm text-anthracite-muted">
            Für die eingebettete Karte benötigen wir Ihre Zustimmung zu externen Medien.
          </p>
          <p className="mt-2 font-sans text-xs text-anthracite-muted/70">
            Bitte aktivieren Sie externe Medien in den{' '}
            <button
              type="button"
              onClick={openCookieSettings}
              className="text-aegean underline-offset-2 hover:underline"
            >
              Cookie-Einstellungen
            </button>{' '}
            oder lesen Sie unsere{' '}
            <Link href="/impressum-datenschutz" className="text-aegean underline-offset-2 hover:underline">
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>
        <MapLinks />
      </div>
    )
  }

  return (
    <div className="overflow-hidden border border-sand">
      <div className="flex min-h-[320px] w-full flex-col items-center justify-center bg-cream-dark md:min-h-[400px]">
        <MapPin size={32} weight="light" className="mb-4 text-aegean/30" aria-hidden />
        <p className="mb-1 font-sans text-sm text-anthracite-muted">Eingebettete Karte (Google Maps)</p>
        <p className="mb-8 max-w-xs text-center font-sans text-xs text-anthracite-muted/70">
          Beim Laden werden Daten an Google übermittelt.
        </p>
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="bg-aegean px-8 py-3 font-sans text-sm font-medium text-cream transition-colors hover:bg-aegean-light"
        >
          Karte laden
        </button>
      </div>
      <MapLinks />
    </div>
  )
}
