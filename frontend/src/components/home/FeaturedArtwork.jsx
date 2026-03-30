import { Link } from 'react-router-dom'
import { featuredArtworks } from '../../data/siteData'

export default function FeaturedArtwork() {
  const [main, ...others] = featuredArtworks

  return (
    <section className="section container">
      <div className="section-row">
        <div>
          <span className="eyebrow">Curated Selection</span>
          <h2>Featured Artwork</h2>
        </div>
      </div>

      <div className="featured-grid">
        <Link to={`/artwork/${main.id}`} className="art-card large">
          <img src={main.image} alt={main.title} />
          <div className="art-info">
            <h3>{main.title}</h3>
            <p>{main.subtitle}</p>
            <span>{main.price}</span>
          </div>
        </Link>

        <div className="stacked-cards">
          {others.map((art) => (
            <Link key={art.id} to={`/artwork/${art.id}`} className="art-card">
              <img src={art.image} alt={art.title} />
              <div className="art-info">
                <h3>{art.title}</h3>
                <p>{art.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}