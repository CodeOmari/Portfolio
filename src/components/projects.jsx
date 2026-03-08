import '../styles/projects.css';

export default function Projects() {
    return(
        <div className="container-fluid projects-section" id='projects'>
            <div className="container">
                <h3>WORK</h3>
                <h5 className='mb-4'>
                    My Projects
                </h5>
            </div>
            <div className="container project-container p-4">
                <div className="project-name">
                    <a href="https://omari14.pythonanywhere.com/" target='_blank'>NovaCare</a>
                </div>
                <div className="project-description w-50">
                    <p>
                        A hospital management system built with HTML, CSS, Bootstrap, 
                        and Django, using MySQL as the database to manage hospital services 
                        and patient information efficiently.
                    </p>
                    <div className="lang-box d-flex">
                        <button className='rounded-pill language'>HTML</button>
                        <button className='rounded-pill language'>CSS</button>
                        <button className='rounded-pill language'>Bootstrap</button>
                        <button className='rounded-pill language'>Django</button>
                        <button className='rounded-pill language'>MySQL</button>
                    </div>
                </div>
            </div>
            <div className="container project-container p-4">
                <div className="project-name">
                    <a href="https://codeomari.pythonanywhere.com/" target='_blank'>Eventify</a>
                </div>
                <div className="project-description w-50">
                    <p>
                        A hospital management system built with HTML, CSS, Bootstrap, 
                        and Django, using MySQL as the database to manage hospital services 
                        and patient information efficiently.
                    </p>
                    <div className="lang-box d-flex">
                        <button className='rounded-pill language'>HTML</button>
                        <button className='rounded-pill language'>CSS</button>
                        <button className='rounded-pill language'>Bootstrap</button>
                        <button className='rounded-pill language'>Django</button>
                        <button className='rounded-pill language'>MySQL</button>
                    </div>
                </div>
            </div>
        </div>
    )
}