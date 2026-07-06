import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCallButton } from '@/components/layout/FloatingCallButton'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ReviewsSection } from '@/components/sections/ReviewsSection'
import { HighlightsSection } from '@/components/sections/HighlightsSection'
import { MenuSection } from '@/components/sections/MenuSection'
import { EventsSection } from '@/components/sections/EventsSection'
import { SectionWave } from '@/components/ui/SectionWave'
import { HoursSection } from '@/components/sections/HoursSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { RestaurantJsonLd } from '@/components/seo/RestaurantJsonLd'

export default function HomePage() {
  return (
    <>
      <RestaurantJsonLd />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ReviewsSection />
        <HighlightsSection />
        <MenuSection />
        <SectionWave fill="var(--color-cream)" className="bg-anthracite" />
        <EventsSection />
        <HoursSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingCallButton />
    </>
  )
}
