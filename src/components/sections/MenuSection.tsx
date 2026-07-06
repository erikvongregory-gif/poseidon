import Image from 'next/image'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { IMAGES, MENU_CATEGORIES, SITE } from '@/lib/constants'
import { Reveal } from '@/components/ui/Reveal'

export function MenuSection() {
  return (
    <section id="speisekarte" className="bg-anthracite text-cream" aria-labelledby="menu-heading">
      <div className="relative h-[45vh] min-h-[280px] max-h-[480px] w-full md:h-[50vh]">
        <Image
          src={IMAGES.menuBanner}
          alt="Reich gedeckter Tisch mit griechischen Vorspeisen und Mezze"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-anthracite/30" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28 lg:px-10">
        <Reveal className="mb-16 max-w-xl md:mb-20">
          <h2
            id="menu-heading"
            className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.1] text-cream"
          >
            Vorspeisen wie in Griechenland
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-cream/65 md:text-lg">
            Unsere Vorspeisenkarte ist ungewöhnlich umfangreich. Eine Vielfalt, die sonst nur in der
            griechischen Heimat zu finden ist.
          </p>
        </Reveal>

        <div className="divide-y divide-cream/10">
          {MENU_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.06}>
              <article className="group grid items-center gap-8 py-10 md:grid-cols-[1fr_1fr_auto] md:gap-12 md:py-14">
                <div>
                  <span className="font-sans text-xs tabular-nums tracking-widest text-terracotta-light">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2 font-serif text-3xl font-medium text-cream md:text-4xl">{cat.title}</h3>
                </div>
                <p className="font-sans text-base leading-relaxed text-cream/60">{cat.description}</p>
                <div className="relative aspect-square w-full max-w-[200px] overflow-hidden md:max-w-[160px]">
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    sizes="200px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 border-t border-cream/10 pt-12">
          <a
            href={SITE.menuPdf}
            className="inline-flex items-center gap-3 font-sans text-sm font-medium tracking-wide text-cream transition-colors hover:text-terracotta-light"
          >
            Vollständige Speisekarte ansehen
            <ArrowRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
