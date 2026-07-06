'use client'

import { useEffect, useState } from 'react'
import { MapPin } from '@phosphor-icons/react'
import Link from 'next/link'
import { getStoredConsent, openCookieSettings } from '@/components/layout/CookieBanner'

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
      <iframe
        title="Karte: Restaurant POSEIDON, Hindenburgring 82, Landsberg am Lech"
        src="https://www.openstreetmap.org/export/embed.html?bbox=10.868%2C48.042%2C10.878%2C48.048&layer=mapnik&marker=48.045%2C10.873"
        className="h-full min-h-[320px] w-full border-0 md:min-h-[400px]"
        loading="lazy"
      />
    )
  }

  if (!externalAllowed) {
    return (
      <div className="flex min-h-[320px] w-full flex-col items-center justify-center bg-cream-dark px-6 text-center md:min-h-[400px]">
        <MapPin size={32} weight="light" className="mb-4 text-aegean/30" aria-hidden />
        <p className="font-sans text-sm text-anthracite-muted">
          Für die Kartenanzeige benötigen wir Ihre Zustimmung zu externen Medien.
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
    )
  }

  return (
    <div className="flex min-h-[320px] w-full flex-col items-center justify-center bg-cream-dark md:min-h-[400px]">
      <MapPin size={32} weight="light" className="mb-4 text-aegean/30" aria-hidden />
      <p className="mb-1 font-sans text-sm text-anthracite-muted">Externe Karte (OpenStreetMap)</p>
      <p className="mb-8 max-w-xs text-center font-sans text-xs text-anthracite-muted/70">
        Beim Laden werden Daten an den Kartenanbieter übertragen.
      </p>
      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="bg-aegean px-8 py-3 font-sans text-sm font-medium text-cream transition-colors hover:bg-aegean-light"
      >
        Karte laden
      </button>
    </div>
  )
}
