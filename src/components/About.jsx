import "../styles/About.css";
import "../styles/global.css";

export default function About() {
  return (
    <section className="pm-section pm-about" id="about">
      <div className="pm-about-inner">
        <div>
          <p className="pm-eyebrow">01 — ABOUT</p>
          <h2 className="pm-section-title">
            Building
            <br />
            software with
            <br />
            security in mind.
          </h2>
        </div>

        <div>
          <div className="pm-about-text">
            <p>
              A goal-oriented and adaptable individual with strong problem-solving abilities and 
              a passion for technology. Committed to continuous learning, collaboration, and delivering 
              innovative solutions that create meaningful impact.
            </p>
            <p>
              I am a{" "}
              <strong>
                Computer Science student,
              </strong>{" "}
              passionate full-stack developer, and aspiring cybersecurity professional committed to building secure, user-friendly, 
              and impactful digital solutions.I enjoy solving real-world problems through technology, continuously learning new skills, 
              and exploring the latest trends in software development and cybersecurity.
              My goal is to create digital experiences that combine functionality, security, and innovation.
            </p>
          </div>

          <div className="pm-stats">
          <div className="pm-stat">
            <div className="pm-stat-num">10+</div>
            <div className="pm-stat-label">Projects Built</div>
          </div>

          <div className="pm-stat">
            <div className="pm-stat-num">6+</div>
            <div className="pm-stat-label">Technologies</div>
          </div>

          <div className="pm-stat">
            <div className="pm-stat-num">∞</div>
            <div className="pm-stat-label">Learning Journey</div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}