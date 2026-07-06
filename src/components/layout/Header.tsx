'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { List, X } from '@phosphor-icons/react'
import { AnimatePresence, motion } from 'motion/react'
import { IMAGES, NAV_LINKS, SITE } from '@/lib/constants'

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.documentElement.classList.add('mobile-menu-open')
    } else {
      document.documentElement.classList.remove('mobile-menu-open')
    }
    return () => document.documentElement.classList.remove('mobile-menu-open')
  }, [open])

  useEffect(() => {
    if (!open) return

    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''
      window.scrollTo(0, scrollY)
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const onHero = isHome && !scrolled && !open

  const mobileMenu =
    mounted &&
    createPortal(
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
            className="fixed inset-0 z-[200] flex flex-col bg-anthracite lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav
              className="flex flex-1 flex-col overflow-y-auto overscroll-contain px-6 pb-10 pt-20"
              aria-label="Mobile Navigation"
            >
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  onClick={() => setOpen(false)}
                  className="border-b border-cream/10 py-5 font-serif text-3xl text-cream"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 + i * 0.035, duration: 0.28 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={`tel:${SITE.phoneTel}`}
                onClick={() => setOpen(false)}
                className="mt-8 bg-aegean py-4 text-center font-sans text-sm font-medium tracking-wide text-cream"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.28 }}
              >
                Tisch reservieren
              </motion.a>
              <Link
                href="/impressum-datenschutz"
                onClick={() => setOpen(false)}
                className="mt-6 block text-center font-sans text-sm text-cream/50"
              >
                Impressum & Datenschutz
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body,
    )

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[201] transition-all duration-500 ${
          open
            ? 'border-b border-cream/10 bg-anthracite'
            : onHero
              ? 'bg-gradient-to-b from-anthracite/50 to-transparent py-1'
              : 'border-b border-sand/60 bg-cream/95 backdrop-blur-md'
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
                onHero || open ? 'text-cream' : 'text-anthracite'
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
                  onHero ? 'text-cream/85 hover:text-cream' : 'text-anthracite-muted hover:text-aegean'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${SITE.phoneTel}`}
              className={`px-5 py-2 font-sans text-[13px] font-medium tracking-wide transition-colors ${
                onHero ? 'bg-cream text-anthracite hover:bg-cream/90' : 'bg-aegean text-cream hover:bg-aegean-light'
              }`}
            >
              Reservieren
            </a>
          </nav>

          <button
            type="button"
            className={`relative z-[202] flex h-10 w-10 items-center justify-center lg:hidden ${
              onHero || open ? 'text-cream' : 'text-anthracite'
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </header>
      {mobileMenu}
    </>
  )
}
