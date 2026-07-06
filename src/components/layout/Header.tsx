'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { List, X } from '@phosphor-icons/react'
import { IMAGES, NAV_LINKS, SITE } from '@/lib/constants'

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const onHero = isHome && !scrolled

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        onHero
          ? 'bg-gradient-to-b from-anthracite/50 to-transparent py-1'
          : 'border-b border-sand/60 bg-cream/95 py-0 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-[68px] lg:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label={`${SITE.name} Startseite`}>
          <Image
            src={IMAGES.logo}
            alt=""
            width={44}
            height={44}
            className="h-10 w-10 rounded-full"
            priority
          />
          <span
            className={`hidden font-serif text-xl tracking-[0.1em] transition-colors sm:block ${
              onHero ? 'text-cream' : 'text-anthracite'
            }`}
          >
            POSEIDON
          </span>
        </Link>

        <nav className="hidden items-center gap-10 lg:flex" aria-label="Hauptnavigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              className={`font-sans text-[13px] font-medium tracking-wide transition-colors ${
                onHero
                  ? 'text-cream/85 hover:text-cream'
                  : 'text-anthracite-muted hover:text-aegean'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${SITE.phoneTel}`}
            className={`px-5 py-2 font-sans text-[13px] font-medium tracking-wide transition-colors ${
              onHero
                ? 'bg-cream text-anthracite hover:bg-cream/90'
                : 'bg-aegean text-cream hover:bg-aegean-light'
            }`}
          >
            Reservieren
          </a>
        </nav>

        <button
          type="button"
          className={`flex h-10 w-10 items-center justify-center lg:hidden ${
            onHero ? 'text-cream' : 'text-anthracite'
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {open && (
        <nav
          className="fixed inset-0 top-16 z-40 flex flex-col bg-anthracite px-6 py-8 lg:hidden"
          aria-label="Mobile Navigation"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              onClick={() => setOpen(false)}
              className="border-b border-cream/10 py-5 font-serif text-3xl text-cream"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${SITE.phoneTel}`}
            onClick={() => setOpen(false)}
            className="mt-8 bg-aegean py-4 text-center font-sans text-sm font-medium tracking-wide text-cream"
          >
            Tisch reservieren
          </a>
          <Link
            href="/impressum-datenschutz"
            onClick={() => setOpen(false)}
            className="mt-6 text-center font-sans text-sm text-cream/50"
          >
            Impressum & Datenschutz
          </Link>
        </nav>
      )}
    </header>
  )
}
