import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { CookieBanner } from '@/components/layout/CookieBanner'
import { ScrollProgress } from '@/components/ui/ScrollProgress'
import { SITE } from '@/lib/constants'
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
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Restaurant POSEIDON | Griechisches Restaurant Landsberg am Lech',
    description:
      'Authentische griechische Familienküche der Familie Papakyritsis. Reservierung unter 08191/21721.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Restaurant POSEIDON — Griechisches Familienrestaurant in Landsberg am Lech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant POSEIDON | Landsberg am Lech',
    description:
      'Authentische griechische Familienküche der Familie Papakyritsis. Jetzt Tisch reservieren.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
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
        <ScrollProgress />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
