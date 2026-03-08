import "../styles/navigation.css";

export default function NavBar(){
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top p-3 navigation-section">
            <div className="container-fluid">
                <div className="name">
                    <h4>Jackson Omari</h4>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end navigation-menu" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">My Portfolio</h5>
                        <button type="button" className="btn-close btn-close-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
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
            </div>
        </nav>
    )
}