import { MAP } from '@/lib/constants'

/** Manuell gepflegt — keine Google API. Zahlen/Zitate regelmäßig auf Google Maps prüfen. */
export const GOOGLE_REVIEWS = {
  rating: 4.9,
  reviewCount: 574,
  mapsUrl: MAP.google,
  syncedAt: '2026-07',
} as const

export type GoogleReview = {
  author: string
  stars: 4 | 5
  relativeDate: string
  text: string
}

/** Ausgewählte Zitate aus öffentlichen Google-Bewertungen (gekürzt mit …) */
export const FEATURED_GOOGLE_REVIEWS: readonly GoogleReview[] = [
  {
    author: 'Christian Winkler',
    stars: 5,
    relativeDate: 'vor 1 Monat',
    text: 'Super Service, wir haben uns enorm wohl gefühlt.',
  },
  {
    author: 'Gast auf Google',
    stars: 5,
    relativeDate: 'vor 1 Jahr',
    text:
      'Das Essen war sehr gut und von hochwertiger Qualität — super saftig und frisch. Der Service war zuvorkommend und sehr freundlich. …',
  },
  {
    author: 'Gast auf Google',
    stars: 5,
    relativeDate: 'vor 1 Jahr',
    text:
      'Einfach spitze: Essen, Service und Ambiente. Wir kommen sehr gerne wieder und empfehlen das Restaurant weiter. …',
  },
  {
    author: 'Gast auf Google',
    stars: 5,
    relativeDate: 'vor 2 Jahren',
    text:
      'Das Essen schmeckt super lecker, der Service ist sehr gut. Man wird mit unglaublicher Gastfreundschaft empfangen — unbedingt empfehlenswert.',
  },
  {
    author: 'Gast auf Google',
    stars: 5,
    relativeDate: 'vor 2 Jahren',
    text:
      'Üppige Portionen zu fairem Preis. Der Poseidon-Teller war einwandfrei, alles noch heiß vom Grill. Service engagiert und humorvoll — Espresso aufs Haus inklusive. …',
  },
] as const
