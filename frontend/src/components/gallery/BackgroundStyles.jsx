export default function BackgroundStyles() {
  const styles = [
    'Cotton Paper',
    'Vintage Parchment',
    'Midnight Charcoal',
    'Golden Haze',
    'Nordic Mist',
  ]

  return (
    <section className="section section-muted">
      <div className="container">
        <div className="center-text narrow">
          <span className="eyebrow">Personalize Your Art</span>
          <h2>Background Style Options</h2>
        </div>

        <div className="card-grid five style-grid">
          {styles.map((label) => (
            <div key={label} className="style-card">
              <div className="style-preview" />
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}