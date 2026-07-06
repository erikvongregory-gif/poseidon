export const SITE = {
  name: 'Restaurant POSEIDON',
  tagline: 'Authentische griechische Familienküche in Landsberg am Lech',
  url: 'https://poseidon-ruby.vercel.app',
  phone: '08191/21721',
  phoneTel: '+49819121721',
  email: 'info@poseidon-landsberg.de',
  address: {
    street: 'Hindenburgring 82',
    city: '86899 Landsberg am Lech',
    full: 'Hindenburgring 82, 86899 Landsberg am Lech',
  },
  menuPdf: '/speisekarten/hauptkarte.pdf',
} as const

const mapQuery = encodeURIComponent(`${SITE.name}, ${SITE.address.full}`)

export const MAP = {
  embed: `https://maps.google.com/maps?q=${mapQuery}&hl=de&z=16&ie=UTF8&iwloc=&output=embed`,
  google: `https://www.google.com/maps/search/?api=1&query=${mapQuery}`,
  apple: `https://maps.apple.com/?q=${encodeURIComponent(SITE.name)}&address=${encodeURIComponent(`${SITE.address.full}, Deutschland`)}`,
} as const

export const MENU_PDFS = [
  {
    label: 'Vorspeisenkarte',
    href: '/speisekarten/vorspeisenkarte.pdf',
    description: 'Mezze, Salate, kalte und warme Platten',
    preview: '/images/menu-previews/menu-preview-vorspeisen.webp',
    previewAlt: 'Griechische Vorspeisen: Tzatziki, Oliven, Dolmades und Feta',
  },
  {
    label: 'Hauptkarte',
    href: '/speisekarten/hauptkarte.pdf',
    description: 'Grill, Fisch und Hauptgerichte',
    preview: '/images/menu-previews/menu-preview-hauptkarte.webp',
    previewAlt: 'Souvlaki und Gyros vom Grill mit Beilagen',
  },
  {
    label: 'Speisekarte (Einzelseiten)',
    href: '/speisekarten/speisekarte-einzelseiten.pdf',
    description: 'Komplette Karte zum Ausdrucken',
    preview: '/images/menu-previews/menu-preview-speisekarte.webp',
    previewAlt: 'Aufgeschlagene Speisekarte auf gedecktem Tisch',
  },
  {
    label: 'Dessertkarte',
    href: '/speisekarten/dessertkarte.pdf',
    description: 'Süße Spezialitäten aus Griechenland',
    preview: '/images/menu-previews/menu-preview-dessert.webp',
    previewAlt: 'Griechische Desserts: Baklava und Joghurt mit Honig',
  },
  {
    label: 'Weinkarte',
    href: '/speisekarten/weinkarte.pdf',
    description: 'Griechische Weine und Getränke',
    preview: '/images/menu-previews/menu-preview-wein.webp',
    previewAlt: 'Griechischer Wein mit Trauben und Olivenholz',
  },
] as const

export const WEBDESIGN = {
  url: 'https://webdesign.evglab.com',
  label: 'webdesign.evglab.com',
} as const

export const NAV_LINKS = [
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'Bewertungen', href: '#bewertungen' },
  { label: 'Spezialitäten', href: '#spezialitaeten' },
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

/** Echte Bilder von poseidon-landsberg.de, lokal in /public/images (WebP) */
export const IMAGES = {
  logo: '/images/logo.webp',
  hero: '/images/hero-hq.webp',
  about: '/images/interior.webp',
  events: '/images/interior.webp',
  mapPreview: '/images/map-preview.webp',
} as const

export const GREEK_HIGHLIGHTS = [
  {
    greek: 'Φιλοξενία',
    title: 'Filoxenia',
    description:
      'Herzlicher Service und eine einzigartige Atmosphäre — damit Sie sich bei uns vom ersten Moment an willkommen fühlen.',
    image: '/images/interior.webp',
    alt: 'Gastlicher Empfang im Restaurant POSEIDON',
  },
  {
    greek: 'Μεζέδες',
    title: 'Mezedes & Vorspeisen',
    description:
      'Eine ungewöhnlich umfangreiche Vorspeisenkarte — von Zaziki über Dolmades und Tyrokafteri bis zu kalten und warmen Platten.',
    image: '/images/menu-previews/menu-preview-vorspeisen.webp',
    alt: 'Hausgemachte griechische Vorspeisen und Mezze',
  },
  {
    greek: 'Σαγανάκι',
    title: 'Saganaki',
    description:
      'Original griechischer Fetakäse, gebacken — auf der Karte in mehreren Varianten, auch mit Honig und Sesam.',
    image: '/images/food-01.webp',
    alt: 'Saganaki — gebackener Fetakäse',
  },
  {
    greek: 'Σουβλάκι',
    title: 'Vom Grill',
    description:
      'Souvlaki, Gyros, Lammkoteletts und Bifteki — nach alten Familienrezepten, frisch vom Grill zubereitet.',
    image: '/images/grill-souvlaki.webp',
    alt: 'Souvlaki und Gyros vom Grill',
  },
  {
    greek: 'Θάλασσα',
    title: 'Fisch & Meeresfrüchte',
    description:
      'Gegrillter Oktopus, Calamari und Muscheln aus dem Backofen — auf der Vorspeisen- und Hauptkarte zu finden.',
    image: '/images/food-02.webp',
    alt: 'Gegrillter Fisch und Meeresfrüchte',
  },
  {
    greek: 'Κρασί',
    title: 'Weine & Aperitif',
    description:
      'Ein erfrischender Aperitif oder ein gutes Glas Wein zum Einstieg — unsere Weinkarte gibt es als PDF.',
    image: '/images/menu-previews/menu-preview-wein.webp',
    alt: 'Griechischer Wein und mediterrane Atmosphäre',
  },
] as const

export const EVENT_TYPES = [
  'Geburtstage',
  'Verlobungen',
  'Hochzeiten',
  'Taufen',
  'Weihnachtsfeiern',
] as const
