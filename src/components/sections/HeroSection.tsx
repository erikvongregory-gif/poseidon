'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { IMAGES, SITE } from '@/lib/constants'
import { ButtonLink } from '@/components/ui/ButtonLink'

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '8%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section ref={ref} id="hero" className="relative min-h-[100dvh] overflow-hidden" aria-labelledby="hero-heading">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src={IMAGES.hero}
          alt="Restaurant-Interior des POSEIDON mit elegantem griechischem Ambiente in Landsberg am Lech"
          fill
          priority
          quality={90}
          sizes="100vw"
          className={`object-cover object-[center_40%] ${reduce ? '' : 'animate-hero-ken-burns'}`}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-anthracite/90 via-anthracite/55 to-anthracite/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/50 via-transparent to-anthracite/25" />
      <div className="film-grain pointer-events-none absolute inset-0" aria-hidden />

      <motion.div
        className="relative mx-auto flex min-h-[100dvh] max-w-[1400px] flex-col justify-end px-6 pb-16 pt-28 md:px-10 md:pb-24 lg:pb-28"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="max-w-2xl">
          <motion.p
            className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.35em] text-terracotta-light"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Landsberg am Lech
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="font-serif text-[clamp(3rem,8vw,5.5rem)] font-medium leading-[1.02] tracking-tight text-cream"
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Herzlich willkommen im Poseidon
          </motion.h1>

          <motion.p
            className="mt-5 max-w-lg font-sans text-lg leading-relaxed text-cream/80 md:text-xl"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            Ein unvergleichliches Ambiente, authentische griechische Küche nach alten Familienrezepten und
            herzlicher Service der Familie Papakyritsis.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ButtonLink href={`tel:${SITE.phoneTel}`}>Tisch reservieren</ButtonLink>
            <ButtonLink href="#speisekarte" variant="secondary">
              Speisekarte
            </ButtonLink>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
