import skillsData from "../data/skillsData";
import "../styles/Skills.css";
import "../styles/global.css";

export default function Skills() {
  return (
    <section className="pm-section pm-skills" id="skills">
      <p className="pm-eyebrow">02 — SKILLS</p>
      <h2 className="pm-section-title">Software &amp; tools I work with.</h2>

      <div className="pm-skills-grid">
        {skillsData.map((skill) => (
          <div className="pm-skill-card" key={skill.id}>
            <div>
              <div className="pm-skill-name">{skill.name}</div>
              <div className="pm-skill-cat">{skill.category}</div>
            </div>
            <div className="pm-skill-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}