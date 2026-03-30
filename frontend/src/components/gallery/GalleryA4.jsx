import { galleryCollections } from '../../data/siteData'

export default function GalleryA4() {
  return (
    <section className="section container">
      <div className="section-row">
        <div>
          <span className="eyebrow">Classic Series</span>
          <h2>A4 Size Portfolio</h2>
        </div>
        <p>21.0 x 29.7 cm</p>
      </div>

      <div className="card-grid three">
        {galleryCollections.a4.map((item) => (
          <article key={item.title} className="art-card">
            <img src={item.image} alt={item.title} />
            <div className="art-info">
              <h3>{item.title}</h3>
              <p>{item.meta}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}