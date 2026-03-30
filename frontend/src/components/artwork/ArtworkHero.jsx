import artistImg from "../../assets/img_3464.jpg";


export default function ArtworkHero() {
  return (
    <section className="section container artwork-grid">
      {/* You can change the size of the image by adjusting the 'maxWidth' or 'height' below */}
      <div className="artwork-main-image" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <img
          src={artistImg}
          alt="Portrait Artwork"
          style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
        />
      </div>

      <div className="artwork-meta">
        <span className="eyebrow">Featured Portrait</span>
        <h1>Floral Portrait</h1>
        <p className="quote-text">
          "Capturing the fleeting moment of internal silence through delicate
          charcoal gradients."
        </p>

        <div className="spec-grid">
          <div>
            <span>Dimensions</span>
            <strong>A3 (297 x 420 mm)</strong>
          </div>
          <div>
            <span>Subject</span>
            <strong>Single Portrait</strong>
          </div>
          <div>
            <span>Medium</span>
            <strong>Graphite & Charcoal</strong>
          </div>
          <div>
            <span>Paper</span>
            <strong>150gsm Paper</strong>
          </div>
        </div>

        <button className="btn btn-dark btn-full">
          I want a drawing like this
        </button>
      </div>
    </section>
  )
}