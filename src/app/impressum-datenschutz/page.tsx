import type { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Reveal } from '@/components/ui/Reveal'
import { LegalBackLink, LegalContent } from '@/components/legal/LegalContent'

export const metadata: Metadata = {
  title: 'Impressum & Datenschutz | Restaurant POSEIDON',
  description: 'Impressum und Datenschutzerklärung des Restaurant POSEIDON in Landsberg am Lech.',
  robots: { index: true, follow: true },
}

export default function LegalPage() {
  return (
    <>
      <Header />
      <main className="min-h-[100dvh] bg-cream pt-24 pb-16 md:pt-28">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <LegalBackLink />

          <Reveal>
            <h1 className="font-serif text-4xl font-medium text-anthracite md:text-5xl">
              Impressum & Datenschutz
            </h1>
          </Reveal>

          <Reveal delay={0.08} className="mt-12">
            <LegalContent />
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
