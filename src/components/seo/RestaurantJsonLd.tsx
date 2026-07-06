import { SITE } from '@/lib/constants'
import { GOOGLE_REVIEWS } from '@/lib/google-reviews'

export function RestaurantJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: SITE.name,
    description: SITE.tagline,
    servesCuisine: 'Greek',
    telephone: SITE.phoneTel,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: 'Landsberg am Lech',
      postalCode: '86899',
      addressCountry: 'DE',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_REVIEWS.rating,
      reviewCount: GOOGLE_REVIEWS.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '11:00',
        closes: '14:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '17:00',
        closes: '23:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '11:00',
        closes: '23:00',
      },
    ],
    url: SITE.url,
    image: `${SITE.url}/images/og-image.jpg`,
    priceRange: '€€',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
