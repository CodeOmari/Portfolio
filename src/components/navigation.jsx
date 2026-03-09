import "../styles/navigation.css";

export default function NavBar(){
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top p-3 navigation-section">
            <div className="container-fluid">
                <div className="name">
                    <h4>Jackson Omari</h4>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <a className="nav-link rounded-pill p-2" href="#about">About</a>
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