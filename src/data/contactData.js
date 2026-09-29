import Whatsapp from '../assets/whatsapp.svg';
import Gmail from "../assets/gmail.svg";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
const contactData = [
  {
    id: 1,
    icon: Gmail,
    type: "EMAIL",
    value: "jackomari74@gmail.com",
    href: "mailto:jackomari74@gmail.com",
  },
  {
    id: 2,
    icon: Whatsapp,
    type: "WHATSAPP",
    value: "+254 715895954",
    href: "https://wa.me/254715895954",
  },
  {
    id: 3,
    icon: LinkedIn,
    type: "LINKEDIN",
    value: "Jackson Omari",
    href: "https://www.linkedin.com/in/jackson-omari/",
  },
  {
  id: 4,
  icon: Github,
  type: "GITHUB",
  value: "@CodeOmari",
  href: "https://github.com/CodeOmari",
  },
];

export default contactData;