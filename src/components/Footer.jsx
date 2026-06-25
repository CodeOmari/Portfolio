import "../styles/Contact.css";

export default function Footer() {
    const date = new Date();
    const currentYear = date.getFullYear();
  return (
    <footer className="pm-footer">
      <div className="pm-footer-left">
        © {currentYear} Jackson Omari. All rights reserved.
      </div>
      <div className="pm-footer-right">
        <span>Nairobi County, Kenya</span>
        <span>English</span>
        <span>Swahili</span>
      </div>
    </footer>
  );
}