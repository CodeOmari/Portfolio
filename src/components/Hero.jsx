import "../styles/Hero.css";
import Profile from "../assets/Profile.webp";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section className="pm-hero">
      {/* Left — text */}
      <div>
        <div className="pm-available-badge">
          <span className="pm-available-dot" />
          Available for work
        </div>

        <h1 className="pm-hero-title">
          Jackson
          <br />
          <span className="accent">Omari.</span>
        </h1>

        <p className="pm-hero-sub">
          Full-Stack Developer & Aspiring Cybersecurity Professional. 
          I build secure, scalable, and user-friendly web applications that solve real-world problems.
        </p>

        <div className="pm-hero-ctas">
          <button
            className="pm-btn-primary"
            onClick={() => scrollTo("projects")}
          >
            View Projects
          </button>
          <button
            className="pm-btn-secondary"
            onClick={() => scrollTo("contact")}
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* Right — portrait */}
      <div className="pm-hero-img-wrap">
        <div className="pm-hero-img-placeholder">
            <img src={Profile} alt="Patrick Mwenga" className="pm-hero-img img-fluid" />
        </div>
      </div>
    </section>
  );
}