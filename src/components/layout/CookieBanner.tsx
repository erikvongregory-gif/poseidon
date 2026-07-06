'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  CONSENT_STORAGE_KEY,
  COOKIE_CATEGORIES,
  DEFAULT_CONSENT,
  type CookieConsent,
} from '@/content/legal'

export const COOKIE_SETTINGS_EVENT = 'poseidon-open-cookie-settings'

function loadConsent(): CookieConsent | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as CookieConsent
    return { ...DEFAULT_CONSENT, ...parsed, necessary: true }
  } catch {
    return null
  }
}

function saveConsent(consent: CookieConsent) {
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent))
  window.dispatchEvent(new CustomEvent('poseidon-consent-change', { detail: consent }))
}

export function getStoredConsent(): CookieConsent {
  return loadConsent() ?? DEFAULT_CONSENT
}

export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent(COOKIE_SETTINGS_EVENT))
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>(DEFAULT_CONSENT)

  useEffect(() => {
    const stored = loadConsent()
    if (!stored) {
      setVisible(true)
    } else {
      setConsent(stored)
    }
  }, [])

  useEffect(() => {
    const onOpenSettings = () => {
      setConsent(getStoredConsent())
      setShowSettings(true)
      setVisible(true)
    }
    window.addEventListener(COOKIE_SETTINGS_EVENT, onOpenSettings)
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, onOpenSettings)
  }, [])

  const apply = (next: CookieConsent) => {
    const value = { ...next, necessary: true }
    saveConsent(value)
    setConsent(value)
    setVisible(false)
    setShowSettings(false)
  }

  const close = () => {
    setVisible(false)
    setShowSettings(false)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-sand bg-cream/98 p-5 shadow-[0_-8px_40px_rgba(31,34,38,0.12)] backdrop-blur-md md:p-6"
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      aria-modal="true"
    >
      <div className="mx-auto max-w-[1400px]">
        {!showSettings ? (
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-10">
            <div>
              <p id="cookie-banner-title" className="font-serif text-xl text-anthracite">
                Cookie-Einstellungen
              </p>
              <p
                id="cookie-banner-desc"
                className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-anthracite-muted"
              >
                Wir verwenden technisch notwendige Cookies, um Ihre Einwilligung zu speichern. Externe
                Medien (z. B. Karten) laden wir nur mit Ihrer Zustimmung. Details finden Sie in unserer{' '}
                <Link href="/impressum-datenschutz" className="text-aegean underline-offset-2 hover:underline">
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => apply({ necessary: true, external: true })}
                className="bg-aegean px-5 py-2.5 font-sans text-sm font-medium text-cream transition-colors hover:bg-aegean-light"
              >
                Alle akzeptieren
              </button>
              <button
                type="button"
                onClick={() => apply({ necessary: true, external: false })}
                className="border border-sand px-5 py-2.5 font-sans text-sm font-medium text-anthracite transition-colors hover:border-aegean/30"
              >
                Nur notwendige
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(true)}
                className="px-2 py-2.5 font-sans text-sm text-anthracite-muted underline-offset-2 hover:text-aegean hover:underline"
              >
                Einstellungen
              </button>
              {loadConsent() && (
                <button
                  type="button"
                  onClick={close}
                  className="px-2 py-2.5 font-sans text-sm text-anthracite-muted hover:text-anthracite"
                >
                  Schließen
                </button>
              )}
            </div>
          </div>
        ) : (
          <div>
            <p className="font-serif text-xl text-anthracite">Datenschutzeinstellungen</p>
            <p className="mt-2 font-sans text-sm text-anthracite-muted">
              Wählen Sie, welche Kategorien Sie zulassen möchten.
            </p>
            <ul className="mt-6 space-y-4">
              {COOKIE_CATEGORIES.map((cat) => (
                <li
                  key={cat.id}
                  className="flex items-start justify-between gap-4 border-b border-sand pb-4"
                >
                  <div>
                    <p className="font-sans text-sm font-medium text-anthracite">
                      {cat.title}
                      {cat.required && (
                        <span className="ml-2 font-sans text-xs text-anthracite-muted">(immer aktiv)</span>
                      )}
                    </p>
                    <p className="mt-1 max-w-xl font-sans text-xs leading-relaxed text-anthracite-muted">
                      {cat.description}
                    </p>
                  </div>
                  <label className="flex shrink-0 items-center gap-2">
                    <input
                      type="checkbox"
                      checked={cat.required ? true : consent[cat.id]}
                      disabled={cat.required}
                      onChange={(e) =>
                        setConsent((prev) => ({ ...prev, [cat.id]: e.target.checked }))
                      }
                      className="h-4 w-4 accent-aegean"
                    />
                  </label>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => apply(consent)}
                className="bg-aegean px-5 py-2.5 font-sans text-sm font-medium text-cream hover:bg-aegean-light"
              >
                Auswahl speichern
              </button>
              <button
                type="button"
                onClick={() => setShowSettings(false)}
                className="px-5 py-2.5 font-sans text-sm text-anthracite-muted hover:text-anthracite"
              >
                Zurück
              </button>
              <button
                type="button"
                onClick={close}
                className="px-5 py-2.5 font-sans text-sm text-anthracite-muted hover:text-anthracite"
              >
                Schließen
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
