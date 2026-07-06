import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { CookieBanner } from '@/components/layout/CookieBanner'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Griechisches Restaurant Landsberg am Lech | Restaurant POSEIDON',
  description:
    'Restaurant POSEIDON in Landsberg am Lech: Authentische griechische Familienküche nach alten Rezepten, herzlicher Service und Feste für jeden Anlass. Jetzt Tisch reservieren.',
  metadataBase: new URL('https://poseidon-landsberg.de'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    title: 'Restaurant POSEIDON | Griechisches Restaurant Landsberg am Lech',
    description:
      'Authentische griechische Familienküche der Familie Papakyritsis. Reservierung unter 08191/21721.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
