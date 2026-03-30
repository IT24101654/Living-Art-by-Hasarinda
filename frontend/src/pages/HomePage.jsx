import PageLayout from '../components/layout/PageLayout'
import HeroSection from '../components/home/HeroSection'
import ArtistSection from '../components/home/ArtistSection'
import FeaturedArtwork from '../components/home/FeaturedArtwork'
import NewsletterCTA from '../components/home/NewsletterCTA'

export default function HomePage() {
  return (
    <PageLayout>
      <HeroSection />
      <ArtistSection />
      <FeaturedArtwork />
      <NewsletterCTA />
    </PageLayout>
  )
}