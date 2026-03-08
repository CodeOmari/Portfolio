import "../styles/contact.css";
import Email from "../assets/email.svg";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
import Gmail from "../assets/gmail.svg";
export default function Contact(){
    return(
        <div className="container-fluid contact-section bg-light d-flex flex-column justify-content-center align-items-center" id="contact">
            <h3>CONTACT</h3>
            <h5 className="mb-4">
                Let's work together
            </h5>

            <div className="work-together mb-5">
                <p>
                    I'm always open to new opportunities, collaborations, or 
                    just a friendly chat about tech.
                </p>
            </div>
            <div className="mail mb-5">
                <a href="mailto:jacksonomari2230@gmail.com" target="_blank" className="p-3 rounded-pill">
                    <img src={Email} alt="envelope icon" className="pe-2" />
                    Say Hello
                </a>
            </div>
            <div className="container social-media">
                <div className="row">
                    <div className="col-sm-4">
                        <a href="https://github.com/CodeOmari" target="_blank">
                            <img src={Github} alt="github logo" className="w-50" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="https://www.linkedin.com/in/jackson-omari/" target="_blank">
                            <img src={Linkedin} alt="linkedin logo" className="w-50" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="mailto:jacksonomari2230@gmail.com" target="_blank">
                            <img src={Gmail} alt="gmail logo" className="w-50" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}