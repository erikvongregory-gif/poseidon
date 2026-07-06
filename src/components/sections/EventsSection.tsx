import Image from 'next/image'
import { EVENT_TYPES, IMAGES } from '@/lib/constants'
import { Reveal } from '@/components/ui/Reveal'

export function EventsSection() {
  return (
    <section id="feiern" className="bg-cream py-28 md:py-40" aria-labelledby="events-heading">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] w-full lg:aspect-[3/4]">
              <Image
                src={IMAGES.events}
                alt="Festlich gedeckter Restauranttisch mit Wein und Kerzenlicht"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              id="events-heading"
              className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.1] text-anthracite"
            >
              Feiern & Events
            </h2>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-anthracite-muted md:text-lg">
              Wir übernehmen die Organisation. Sie genießen den Abend mit Ihren Gästen, wir kümmern uns um
              den Rest.
            </p>
            <ul className="mt-12 space-y-0">
              {EVENT_TYPES.map((event) => (
                <li
                  key={event}
                  className="border-b border-sand py-5 font-serif text-2xl text-anthracite first:border-t first:border-sand"
                >
                  {event}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
