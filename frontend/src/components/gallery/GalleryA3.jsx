import { galleryCollections } from '../../data/siteData'

export default function GalleryA3() {
  const { featured, secondary } = galleryCollections.a3

  return (
    <section className="section container">
      <div className="section-row">
        <div>
          <span className="eyebrow">Premium Series</span>
          <h2>A3 Size Masterpieces</h2>
        </div>
        <p>29.7 x 42.0 cm</p>
      </div>

      <div className="gallery-a3-grid">
        <article className="art-card large">
          <img src={featured.image} alt={featured.title} />
          <div className="art-info">
            <h3>{featured.title}</h3>
            <p>{featured.meta}</p>
          </div>
        </article>

        <article className="art-card">
          <img src={secondary.image} alt={secondary.title} />
          <div className="art-info">
            <h3>{secondary.title}</h3>
            <p>{secondary.meta}</p>
          </div>
        </article>
      </div>
    </section>
  )
}