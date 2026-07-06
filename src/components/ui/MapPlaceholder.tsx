'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { ArrowSquareOut, MapPin } from '@phosphor-icons/react'
import Link from 'next/link'
import { getStoredConsent, openCookieSettings } from '@/components/layout/CookieBanner'
import { IMAGES, MAP, SITE } from '@/lib/constants'

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

function StaticMapPreview() {
  return (
    <a
      href={MAP.google}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block min-h-[280px] overflow-hidden md:min-h-[360px]"
      aria-label={`${SITE.name} in Google Maps öffnen: ${SITE.address.full}`}
    >
      <Image
        src={IMAGES.mapPreview}
        alt={`Kartenvorschau: ${SITE.name}, ${SITE.address.street}, ${SITE.address.city}`}
        fill
        sizes="(max-width: 1024px) 100vw, 58vw"
        className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/75 via-anthracite/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
        <p className="flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-cream/70">
          <MapPin size={14} weight="fill" aria-hidden />
          Standort
        </p>
        <p className="mt-2 font-serif text-xl text-cream md:text-2xl">{SITE.address.street}</p>
        <p className="font-sans text-sm text-cream/85">{SITE.address.city}</p>
        <p className="mt-3 inline-flex items-center gap-1.5 font-sans text-sm font-medium text-cream/90 transition-colors group-hover:text-cream">
          In Google Maps öffnen
          <ArrowSquareOut size={14} aria-hidden />
        </p>
      </div>
      <p className="absolute right-3 top-3 rounded-sm bg-anthracite/55 px-2 py-1 font-sans text-[10px] text-cream/80">
        Kartenvorschau · © OpenStreetMap
      </p>
    </a>
  )
}

function InteractiveMapBar({
  externalAllowed,
  onLoad,
}: {
  externalAllowed: boolean
  onLoad: () => void
}) {
  if (!externalAllowed) {
    return (
      <div className="border-t border-sand bg-cream px-4 py-4">
        <p className="font-sans text-sm text-anthracite-muted">
          Für die interaktive eingebettete Karte benötigen wir Ihre Zustimmung zu externen Medien.{' '}
          <button
            type="button"
            onClick={openCookieSettings}
            className="text-aegean underline-offset-2 hover:underline"
          >
            Cookie-Einstellungen
          </button>
          {' · '}
          <Link href="/impressum-datenschutz" className="text-aegean underline-offset-2 hover:underline">
            Datenschutz
          </Link>
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-start justify-between gap-3 border-t border-sand bg-cream-dark px-4 py-4 sm:flex-row sm:items-center">
      <p className="font-sans text-sm text-anthracite-muted">
        Interaktive Karte (Google Maps) — lädt erst nach Ihrem Klick.
      </p>
      <button
        type="button"
        onClick={onLoad}
        className="shrink-0 bg-aegean px-5 py-2.5 font-sans text-sm font-medium text-cream transition-colors hover:bg-aegean-light"
      >
        Karte laden
      </button>
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

  return (
    <div className="overflow-hidden border border-sand">
      <StaticMapPreview />
      <InteractiveMapBar externalAllowed={externalAllowed} onLoad={() => setLoaded(true)} />
      <MapLinks />
    </div>
  )
}
