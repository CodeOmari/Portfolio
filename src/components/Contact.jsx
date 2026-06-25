import contactData from "../data/contactData";
import "../styles/Contact.css";
import "../styles/global.css";

export default function Contact() {
  return (
    <section className="pm-section pm-contact" id="contact">
      <p className="pm-eyebrow">04 — CONTACT</p>
      <h2 className="pm-section-title">Let's create something.</h2>
      <p className="pm-contact-sub">
        Have a project in mind, a campaign to launch, or a story to tell?
        <br />
        Reach out on any of the channels below.
      </p>

      <div className="pm-contact-cards">
        {contactData.map((item) => (
          <a href={item.href} style={{ textDecoration: "none" }} key={item.id}>
            <div className="pm-contact-card">
              <div className="pm-contact-icon">{item.icon}</div>
              <div className="pm-contact-type">{item.type}</div>
              <div className="pm-contact-value">{item.value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}