import { galleryCollections } from '../../data/siteData'

export default function GalleryA5() {
  return (
    <section className="section container">
      <div className="section-row">
        <div>
          <span className="eyebrow">Intimate Series</span>
          <h2>A5 Small Scale</h2>
        </div>
        <p>14.8 x 21.0 cm</p>
      </div>

      <div className="card-grid four staggered-grid">
        {galleryCollections.a5.map((image, index) => (
          <article
            key={image}
            className={`art-card mini ${index % 2 === 1 ? 'offset-card' : ''}`}
          >
            <img src={image} alt={`A5 artwork ${index + 1}`} />
          </article>
        ))}
      </div>
    </section>
  )
}