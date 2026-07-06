'use client'

import Image from 'next/image'
import Link from 'next/link'
import { openCookieSettings } from '@/components/layout/CookieBanner'
import { IMAGES, NAV_LINKS, SITE, WEBDESIGN } from '@/lib/constants'
import { Reveal } from '@/components/ui/Reveal'

export function Footer() {
  return (
    <footer className="bg-anthracite text-cream">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-24 lg:px-10">
        <Reveal>
          <div className="grid gap-14 md:grid-cols-3 md:gap-10">
            <div className="flex flex-col items-start gap-4">
              <Image src={IMAGES.logo} alt="Restaurant POSEIDON Logo" width={72} height={72} />
              <p className="max-w-xs font-sans text-sm leading-relaxed text-cream/55">
                Griechisches Familienrestaurant in Landsberg am Lech.
              </p>
            </div>

            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-cream/40">
                Navigation
              </p>
              <ul className="mt-5 space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-cream/70 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-sans text-xs font-medium uppercase tracking-widest text-cream/40">
                Kontakt
              </p>
              <address className="mt-5 space-y-2 not-italic">
                <p className="font-sans text-sm text-cream/70">{SITE.address.street}</p>
                <p className="font-sans text-sm text-cream/70">{SITE.address.city}</p>
                <p className="pt-2">
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="font-sans text-sm text-cream transition-colors hover:text-terracotta-light"
                  >
                    {SITE.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-sans text-sm text-cream transition-colors hover:text-terracotta-light"
                  >
                    {SITE.email}
                  </a>
                </p>
              </address>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 space-y-4 border-t border-cream/10 pt-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="font-sans text-xs text-cream/35">
              &copy; {new Date().getFullYear()} {SITE.name}
            </p>
            <nav
              className="flex flex-wrap items-center gap-x-4 gap-y-2 font-sans text-xs text-cream/50"
              aria-label="Rechtliches"
            >
              <Link href="/impressum-datenschutz" className="transition-colors hover:text-cream">
                Impressum & Datenschutz
              </Link>
              <span className="text-cream/20" aria-hidden>
                |
              </span>
              <button
                type="button"
                onClick={openCookieSettings}
                className="transition-colors hover:text-cream"
              >
                Cookie-Einstellungen
              </button>
            </nav>
          </div>
          <p className="font-sans text-xs text-cream/35">
            Webseite erstellt von{' '}
            <a
              href={WEBDESIGN.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/55 transition-colors hover:text-cream"
            >
              {WEBDESIGN.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
