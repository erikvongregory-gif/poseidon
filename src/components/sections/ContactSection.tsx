'use client'

import { Envelope, MapPin, Phone } from '@phosphor-icons/react'
import { SITE } from '@/lib/constants'
import { MapPlaceholder } from '@/components/ui/MapPlaceholder'
import { OpenStatus } from '@/components/ui/OpenStatus'
import { Reveal } from '@/components/ui/Reveal'

export function ContactSection() {
  return (
    <section id="kontakt" className="bg-cream py-28 md:py-40" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="mb-16 md:mb-20">
          <h2
            id="contact-heading"
            className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.1] text-anthracite"
          >
            Kontakt & Anfahrt
          </h2>
          <OpenStatus compact className="mt-5" />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <Reveal>
            <dl className="space-y-10">
              <div>
                <dt className="flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-terracotta">
                  <MapPin size={16} aria-hidden />
                  Adresse
                </dt>
                <dd className="mt-3 font-sans text-lg leading-relaxed text-anthracite">
                  {SITE.name}
                  <br />
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-terracotta">
                  <Phone size={16} aria-hidden />
                  Telefon
                </dt>
                <dd className="mt-3">
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="font-serif text-3xl text-aegean transition-colors hover:text-aegean-light"
                  >
                    {SITE.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-terracotta">
                  <Envelope size={16} aria-hidden />
                  E-Mail
                </dt>
                <dd className="mt-3">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-sans text-lg text-aegean transition-colors hover:text-aegean-light"
                  >
                    {SITE.email}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <MapPlaceholder />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
