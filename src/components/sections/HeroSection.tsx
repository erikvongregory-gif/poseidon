import Image from 'next/image'
import { IMAGES, SITE } from '@/lib/constants'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Reveal } from '@/components/ui/Reveal'

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[100dvh]" aria-labelledby="hero-heading">
      <Image
        src={IMAGES.hero}
        alt="Restaurant-Interior des POSEIDON mit elegantem griechischem Ambiente in Landsberg am Lech"
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover object-[center_40%]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-anthracite/90 via-anthracite/55 to-anthracite/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/50 via-transparent to-anthracite/25" />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-28 md:px-10 md:pb-24 lg:pb-28">
        <Reveal className="max-w-2xl">
          <h1
            id="hero-heading"
            className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-cream"
          >
            Herzlich willkommen im Poseidon
          </h1>
          <p className="mt-5 max-w-lg font-sans text-lg leading-relaxed text-cream/80 md:text-xl">
            Ein unvergleichliches Ambiente, authentische griechische Küche nach alten Familienrezepten und
            herzlicher Service der Familie Papakyritsis.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href={`tel:${SITE.phoneTel}`}>Tisch reservieren</ButtonLink>
            <ButtonLink href="#speisekarte" variant="secondary">
              Speisekarte
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
