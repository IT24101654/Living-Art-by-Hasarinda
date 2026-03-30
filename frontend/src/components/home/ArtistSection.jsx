import artistImg from "../../assets/artist.jpg";

export default function ArtistSection() {
  return (
    <section className="section section-muted">
      <div className="container grid-2 gap-lg">
        <div>
          <h2>The Artist Behind the Canvas</h2>
          <p>
            Yasith Lathika Hasarinda is a SLIIT student and creator of
            realistic portrait drawings. His work is defined by an obsessive
            attention to detail, capturing the soul behind the gaze.
          </p>
          <p>
            Based in Sri Lanka, Yasith bridges the gap between academic
            technology and traditional fine arts.
          </p>
        </div>
        <div className="image-card">
          <img
            src={artistImg}
            alt="Artist working in studio"
          />
        </div>
      </div>
    </section>
  )
}