import Image from 'next/image'
import { ArrowSquareOut } from '@phosphor-icons/react/dist/ssr'
import { MENU_PDFS } from '@/lib/constants'
import { Reveal } from '@/components/ui/Reveal'

export function MenuSection() {
  return (
    <section id="speisekarte" className="bg-anthracite text-cream" aria-labelledby="menu-heading">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:py-28 lg:px-10">
        <Reveal className="mb-16 max-w-2xl md:mb-20">
          <h2
            id="menu-heading"
            className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.1] text-cream"
          >
            Unsere Speisekarten
          </h2>
          <p className="mt-6 font-sans text-base leading-relaxed text-cream/65 md:text-lg">
            Von der umfangreichen Vorspeisenkarte bis zur Weinkarte — hier finden Sie alle Karten
            zum Ansehen und Herunterladen.
          </p>
          <div className="greek-rule mt-10 max-w-xs opacity-60" aria-hidden />
        </Reveal>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MENU_PDFS.map((menu, i) => (
            <li key={menu.href}>
              <Reveal delay={i * 0.04}>
                <a
                  href={menu.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col overflow-hidden border border-cream/10 bg-cream/[0.03] transition-colors hover:border-terracotta-light/40 hover:bg-cream/[0.06]"
                >
                  <div className="relative aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src={menu.preview}
                      alt={menu.previewAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-anthracite/80 via-anthracite/20 to-transparent" />
                    <span className="absolute bottom-3 left-4 font-serif text-lg font-medium text-cream">
                      {menu.label}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col justify-between gap-4 p-5">
                    <p className="font-sans text-sm leading-relaxed text-cream/55">{menu.description}</p>
                    <span className="inline-flex items-center gap-2 font-sans text-sm font-medium text-cream/80 transition-colors group-hover:text-terracotta-light">
                      PDF öffnen
                      <ArrowSquareOut size={16} aria-hidden />
                    </span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
