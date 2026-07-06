'use client'

import Link from 'next/link'
import { openCookieSettings } from '@/components/layout/CookieBanner'
import { IMPRESSUM_SECTIONS, PRIVACY_SECTIONS } from '@/content/legal'

function LegalBlock({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section>
      <h2 className="font-serif text-2xl font-medium text-anthracite md:text-3xl">{title}</h2>
      <div className="mt-5 space-y-4">
        {paragraphs.map((paragraph) => (
          <p
            key={paragraph.slice(0, 40)}
            className="whitespace-pre-line font-sans text-base leading-relaxed text-anthracite-muted"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  )
}

export function LegalContent() {
  return (
    <div className="space-y-14">
      {IMPRESSUM_SECTIONS.map((section) => (
        <LegalBlock key={section.id} title={section.title} paragraphs={section.paragraphs} />
      ))}

      <hr className="border-sand" />

      {PRIVACY_SECTIONS.map((section) => (
        <LegalBlock key={section.id} title={section.title} paragraphs={section.paragraphs} />
      ))}

      <p className="font-sans text-sm text-anthracite-muted">
        <button
          type="button"
          onClick={openCookieSettings}
          className="text-aegean underline-offset-2 hover:underline"
        >
          Cookie-Einstellungen bearbeiten
        </button>
      </p>
    </div>
  )
}

export function LegalBackLink() {
  return (
    <Link
      href="/"
      className="mb-8 inline-flex items-center gap-2 font-sans text-sm text-aegean transition-colors hover:text-aegean-light"
    >
      <span aria-hidden>←</span>
      Zurück zur Startseite
    </Link>
  )
}
