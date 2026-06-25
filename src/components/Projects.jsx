import { useState } from "react";
import projectsData from "../data/projectsData";
import "../styles/Projects.css";
import "../styles/global.css";

// Build filter tags dynamically from the data
const allTags = [
  "All",
  ...new Set(
    projectsData.map(
      (p) => p.tag.charAt(0).toUpperCase() + p.tag.slice(1).toLowerCase()
    )
  ),
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter(
          (p) => p.tag.toLowerCase() === activeFilter.toLowerCase()
        );

  return (
    <section className="pm-section pm-projects" id="projects">
      <div className="pm-projects-header">
        <div>
          <p className="pm-eyebrow">03 — PROJECTS</p>
          <h2 className="pm-section-title" style={{ marginBottom: 0 }}>
            Selected work.
          </h2>
        </div>

        <div className="pm-filter-btns">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`pm-filter-btn${activeFilter === tag ? " active" : ""}`}
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="pm-projects-grid">
        {filtered.map((project) => (
          <div className="pm-project-card" key={project.id}>
            <div className="pm-project-top">
              <span className="pm-project-num">/ {project.number}</span>
              <span className="pm-project-tag">{project.tag}</span>
            </div>

            {/* Title is a link — update href in projectsData.js */}
            <a href={project.href} className="pm-project-title">
              {project.title}
            </a>

            <p className="pm-project-desc">{project.description}</p>

            <div className="pm-project-footer">{project.type}</div>
          </div>
        ))}
      </div>
    </section>
  );
}