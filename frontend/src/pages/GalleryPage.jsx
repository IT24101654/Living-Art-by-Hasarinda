import PageLayout from '../components/layout/PageLayout'
import GalleryHero from '../components/gallery/GalleryHero'
import GalleryA3 from '../components/gallery/GalleryA3'
import GalleryA4 from '../components/gallery/GalleryA4'
import GalleryA5 from '../components/gallery/GalleryA5'
import BackgroundStyles from '../components/gallery/BackgroundStyles'

export default function GalleryPage() {
  return (
    <PageLayout>
      <GalleryHero />
      <GalleryA3 />
      <GalleryA4 />
      <GalleryA5 />
      <BackgroundStyles />
    </PageLayout>
  )
}