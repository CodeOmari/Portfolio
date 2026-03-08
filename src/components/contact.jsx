import "../styles/contact.css";
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
                    <img src="../src/assets/email.svg" alt="envelope icon" className="pe-2" />
                    Say Hello
                </a>
            </div>
            <div className="container social-media">
                <div className="row">
                    <div className="col-sm-4">
                        <a href="https://github.com/CodeOmari" target="_blank">
                            <img src="../src/assets/github.svg" alt="github logo" className="w-50" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="https://www.linkedin.com/in/jackson-omari/" target="_blank">
                            <img src="../src/assets/linkedin.svg" alt="github logo" className="w-50" />
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="mailto:jacksonomari2230@gmail.com" target="_blank">
                            <img src="../src/assets/gmail.svg" alt="github logo" className="w-50" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}