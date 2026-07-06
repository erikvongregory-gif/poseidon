import { OPENING_HOURS, SITE } from '@/lib/constants'
import { Reveal } from '@/components/ui/Reveal'

export function HoursSection() {
  return (
    <section
      id="oeffnungszeiten"
      className="border-y border-sand bg-cream-dark py-28 md:py-32"
      aria-labelledby="hours-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <Reveal>
            <h2
              id="hours-heading"
              className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.1] text-anthracite"
            >
              Öffnungszeiten
            </h2>
            <p className="mt-6 max-w-sm font-sans text-base leading-relaxed text-anthracite-muted">
              Reservierungen nehmen wir gerne telefonisch entgegen unter{' '}
              <a href={`tel:${SITE.phoneTel}`} className="text-aegean hover:text-aegean-light">
                {SITE.phone}
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="space-y-12">
              {OPENING_HOURS.map((block) => (
                <div key={block.days}>
                  <dt className="font-sans text-sm font-medium uppercase tracking-widest text-terracotta">
                    {block.days}
                  </dt>
                  <dd className="mt-3 space-y-1">
                    {block.slots.map((slot) => (
                      <p
                        key={slot}
                        className="font-serif text-3xl font-medium tabular-nums text-anthracite md:text-4xl"
                      >
                        {slot}
                      </p>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
