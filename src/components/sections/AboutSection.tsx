import Image from 'next/image'
import { IMAGES } from '@/lib/constants'
import { Reveal } from '@/components/ui/Reveal'

export function AboutSection() {
  return (
    <section id="ueber-uns" className="bg-cream py-28 md:py-40" aria-labelledby="about-heading">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <h2
              id="about-heading"
              className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.1] text-anthracite"
            >
              Die Familie Papakyritsis
            </h2>
            <div className="mt-10 space-y-6 font-sans text-base leading-[1.8] text-anthracite-muted md:text-[1.05rem]">
              <p>
                In unserem Restaurant Poseidon erwartet Sie ein unvergleichliches Ambiente mit eigenem
                Charakter. Beginnen Sie mit einem erfrischenden Aperitif oder einem guten Glas Wein und
                lassen Sie sich anschließend kulinarisch von uns verwöhnen.
              </p>
              <p>
                Es erwartet Sie eine ungewöhnlich umfangreiche Vorspeisenkarte, gefolgt von vielen
                authentischen griechischen Gerichten nach alten Familienrezepten. Verbunden mit herzlichem
                Service und angenehmer musikalischer Untermalung schaffen wir für Sie eine einzigartige
                Atmosphäre für unvergessliche Momente.
              </p>
              <p className="font-serif text-xl text-anthracite">Bis bald, Ihre Familie Papakyritsis</p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7 lg:row-start-1">
            <div className="relative aspect-[4/5] w-full lg:aspect-[3/4]">
              <Image
                src={IMAGES.about}
                alt="Gedeckter Tisch im Restaurant POSEIDON mit Speisekarte und Kerzenlicht"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
