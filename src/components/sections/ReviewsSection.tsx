import { ArrowSquareOut } from '@phosphor-icons/react/dist/ssr'
import { FEATURED_GOOGLE_REVIEWS, GOOGLE_REVIEWS } from '@/lib/google-reviews'
import { GoogleMark } from '@/components/ui/GoogleMark'
import { Reveal } from '@/components/ui/Reveal'
import { StarRating } from '@/components/ui/StarRating'

function ReviewCard({
  author,
  stars,
  relativeDate,
  text,
}: (typeof FEATURED_GOOGLE_REVIEWS)[number]) {
  const initial = author === 'Gast auf Google' ? 'G' : author.charAt(0).toUpperCase()

  return (
    <article className="flex h-full min-w-[min(100%,20rem)] flex-col border border-sand bg-cream p-6 md:min-w-0 md:p-7">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-aegean/10 font-sans text-sm font-medium text-aegean"
            aria-hidden
          >
            {initial}
          </div>
          <div>
            <p className="font-sans text-sm font-medium text-anthracite">{author}</p>
            <p className="mt-0.5 flex items-center gap-1.5 font-sans text-xs text-anthracite-muted">
              <GoogleMark />
              <span>{relativeDate}</span>
            </p>
          </div>
        </div>
        <StarRating rating={stars} size="sm" className="shrink-0" />
      </div>
      <blockquote className="flex-1 font-sans text-sm leading-relaxed text-anthracite-muted md:text-[0.95rem]">
        „{text}"
      </blockquote>
    </article>
  )
}

export function ReviewsSection() {
  const ratingLabel = GOOGLE_REVIEWS.rating.toLocaleString('de-DE', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })

  return (
    <section
      id="bewertungen"
      className="border-t border-sand bg-cream-dark py-28 md:py-40"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal className="mb-12 flex flex-col gap-8 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-[0.25em] text-anthracite-muted">
              <GoogleMark />
              Google-Bewertungen
            </p>
            <h2
              id="reviews-heading"
              className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] font-medium leading-[1.1] text-anthracite"
            >
              Das sagen unsere Gäste
            </h2>
            <p className="mt-6 font-sans text-base leading-relaxed text-anthracite-muted md:text-lg">
              Ausgewählte Zitate aus öffentlichen Google-Bewertungen — der vollständige Überblick liegt auf
              Google Maps.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-3 rounded-sm border border-sand bg-cream px-6 py-5 lg:items-end lg:text-right">
            <div className="flex items-center gap-3">
              <span className="font-serif text-4xl font-medium leading-none text-anthracite">{ratingLabel}</span>
              <StarRating rating={GOOGLE_REVIEWS.rating} />
            </div>
            <p className="font-sans text-sm text-anthracite-muted">
              Durchschnitt auf Google · {GOOGLE_REVIEWS.reviewCount.toLocaleString('de-DE')} Bewertungen
            </p>
            <p className="font-sans text-xs text-anthracite-muted/80">Stand {GOOGLE_REVIEWS.syncedAt}</p>
          </div>
        </Reveal>

        <div className="-mx-6 flex gap-5 overflow-x-auto px-6 pb-2 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:overflow-visible lg:px-0 xl:grid-cols-5 [&::-webkit-scrollbar]:hidden">
          {FEATURED_GOOGLE_REVIEWS.map((review, i) => (
            <Reveal key={`${review.author}-${i}`} delay={i * 0.05} className="h-full snap-start lg:snap-none">
              <ReviewCard {...review} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            <a
              href={GOOGLE_REVIEWS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-anthracite/15 bg-cream px-5 py-3 font-sans text-sm font-medium text-anthracite transition-colors hover:border-aegean hover:text-aegean"
            >
              Alle Bewertungen auf Google
              <ArrowSquareOut size={16} weight="bold" aria-hidden />
            </a>
            <a
              href={GOOGLE_REVIEWS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-aegean px-5 py-3 font-sans text-sm font-medium text-cream transition-colors hover:bg-aegean-light"
            >
              Jetzt bewerten
            </a>
          </div>
          <p className="max-w-lg font-sans text-xs leading-relaxed text-anthracite-muted">
            Ausgewählte, ggf. gekürzte Zitate (…) aus öffentlichen Google-Bewertungen. Google und Google Maps
            sind Marken von Google LLC. Vollständige Rezensionen und aktueller Durchschnitt auf Google Maps.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
