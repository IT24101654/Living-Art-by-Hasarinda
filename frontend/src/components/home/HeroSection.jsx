import { Link } from "react-router-dom";
import artistImg from "../../assets/FamBW.jpg";
import artistHover from "../../assets/FamC.jpg";

export default function HeroSection() {
  return (
    <section className="hero-section container grid-2">
      <div>
        <span className="eyebrow">Private Exhibition</span>
        <h1 className="hero-title">Living Art</h1>
        <p className="hero-text">
          Exploring the delicate boundary between reality and representation
          through meticulously detailed portraiture.
        </p>
        <Link to="/gallery" className="btn btn-dark">
          Explore the Gallery
        </Link>
      </div>

      <div className="hero-image-wrap">
        <img
          src={artistImg}
          alt="Hyper-realistic portrait drawing"
          className="hero-img main-img"
        />
        <img
          src={artistHover}
          alt="Behind the artwork process"
          className="hero-img hover-img"
        />
      </div>
    </section>
  );
}