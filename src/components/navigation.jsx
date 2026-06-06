import "../styles/navigation.css";

export default function NavBar(){
    return (
        <nav class="navbar navbar-expand-sm navbar-light bg-light sticky-top p-3 navigation-section">
            <div class="container-fluid">
                <div className="name">
                    <h4>Jackson Omari</h4>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <a className="nav-link rounded-pill p-2" href="#about">Aboutss</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link rounded-pill p-2" href="#skills">Skills</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link rounded-pill p-2" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link rounded-pill p-2" href="#contact">Contact</a>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}