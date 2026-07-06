import Image from 'next/image'
import { GREEK_HIGHLIGHTS } from '@/lib/constants'
import { Reveal } from '@/components/ui/Reveal'

export function HighlightsSection() {
  return (
    <section
      id="spezialitaeten"
      className="border-t border-sand bg-cream py-28 md:py-40"
      aria-labelledby="highlights-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="mb-16 max-w-2xl md:mb-20">
          <h2
            id="highlights-heading"
            className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.1] text-anthracite"
          >
            Griechische Highlights
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-anthracite-muted md:text-lg">
            Was das Poseidon auszeichnet — von der Gastfreundschaft bis zum Grill, alles nach alten
            Familienrezepten.
          </p>
          <div className="greek-rule mt-10 max-w-xs" aria-hidden />
        </Reveal>

        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {GREEK_HIGHLIGHTS.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={i * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden border border-sand bg-cream transition-shadow duration-500 hover:shadow-[0_12px_40px_rgba(31,34,38,0.08)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-aegean/0 transition-colors duration-500 group-hover:bg-aegean/10" />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <p className="font-sans text-sm tracking-widest text-terracotta transition-colors group-hover:text-terracotta-light">
                      {item.greek}
                    </p>
                    <h3 className="mt-2 font-serif text-2xl font-medium text-anthracite">{item.title}</h3>
                    <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-anthracite-muted md:text-base">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
