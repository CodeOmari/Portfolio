import "../styles/Navbar.css";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Navbar() {
  return (
    <nav className="pm-nav">
      <div className="pm-logo">
        Omari<span>.</span>
      </div>

      <ul className="pm-nav-links">
        {["about", "skills", "projects", "contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(section);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <button className="pm-hire-btn" onClick={() => scrollTo("contact")}>
        Hire me
      </button>
    </nav>
  );
}