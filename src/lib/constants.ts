export const SITE = {
  name: 'Restaurant POSEIDON',
  tagline: 'Authentische griechische Familienküche in Landsberg am Lech',
  phone: '08191/21721',
  phoneTel: '+49819121721',
  email: 'info@poseidon-landsberg.de',
  address: {
    street: 'Hindenburgring 82',
    city: '86899 Landsberg am Lech',
    full: 'Hindenburgring 82, 86899 Landsberg am Lech',
  },
  menuPdf: '/speisekarte.pdf',
} as const

export const WEBDESIGN = {
  url: 'https://webdesign.evglab.com',
  label: 'webdesign.evglab.com',
} as const

export const NAV_LINKS = [
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Speisekarte', href: '#speisekarte' },
  { label: 'Feiern', href: '#feiern' },
  { label: 'Öffnungszeiten', href: '#oeffnungszeiten' },
  { label: 'Kontakt', href: '#kontakt' },
] as const

export const OPENING_HOURS = [
  {
    days: 'Montag bis Samstag',
    slots: ['11:00 - 14:30', '17:00 - 23:00'],
  },
  {
    days: 'Sonntag',
    slots: ['11:00 - 23:00 durchgehend'],
  },
] as const

/** Echte Bilder von poseidon-landsberg.de, lokal in /public/images */
export const IMAGES = {
  logo: '/images/logo.png',
  hero: '/images/hero-hq.png',
  about: '/images/interior.jpg',
  menuBanner: '/images/food-02.jpg',
  events: '/images/interior.jpg',
} as const

export const MENU_CATEGORIES = [
  {
    title: 'Vorspeisen',
    description:
      'Eine der umfangreichsten Vorspeisenkarten in der Region. Von Tzatziki bis Saganaki, alles hausgemacht.',
    image: '/images/food-01.jpg',
    alt: 'Hausgemachtes Saganaki mit frischem Salat im Restaurant POSEIDON',
  },
  {
    title: 'Grillspezialitäten',
    description: 'Souvlaki, Gyros und Fleisch vom Grill, mariniert nach Familienrezept.',
    image: '/images/grill-souvlaki.png',
    alt: 'Souvlaki vom Grill mit Reis und Sauce im Restaurant POSEIDON',
  },
  {
    title: 'Fisch',
    description: 'Frischer Fisch und Meeresfrüchte, einfach und authentisch zubereitet.',
    image: '/images/food-02.jpg',
    alt: 'Gegrillter Oktopus auf mediterranem Salat',
  },
  {
    title: 'Desserts',
    description: 'Griechischer Joghurt mit Honig, Walnüssen und hausgemachte Süßspeisen.',
    image: '/images/food-03.jpg',
    alt: 'Griechischer Joghurt mit Honig und Walnüssen auf Olivenholz',
  },
] as const

export const EVENT_TYPES = [
  'Geburtstage',
  'Verlobungen',
  'Hochzeiten',
  'Taufen',
  'Weihnachtsfeiern',
] as const
