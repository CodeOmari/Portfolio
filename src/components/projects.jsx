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
                    <a href="https://note-nest-bird.vercel.app/" target='_blank'>NoteNest</a>
                </div>
                <div className="project-description">
                    <p>
                        A simple notes app built with React, Bootstrap, Django Rest Framework, and MySQL 
                        for creating, organizing, and managing personal notes.
                    </p>
                    <div className="lang-box d-flex">
                        <button className='rounded-pill language'>React</button>
                        <button className='rounded-pill language'>Bootstrap</button>
                        <button className='rounded-pill language'>REST APIs</button>
                        <button className='rounded-pill language'>MySQL</button>
                    </div>
                </div>
            </div>
            <div className="container project-container p-4">
                <div className="project-name">
                    <a href="https://omari14.pythonanywhere.com/" target='_blank'>NovaCare</a>
                </div>
                <div className="project-description">
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
                    <a href="https://talkio-gray.vercel.app/" target='_blank'>Talkio</a>
                </div>
                <div className="project-description">
                    <p>
                        A lightweight messaging app built with React, Bootstrap, Django Rest Framework, and MySQL 
                        designed to make connecting and chatting with people simple, fast, and seamless.
                    </p>
                    <div className="lang-box d-flex">
                        <button className='rounded-pill language'>React</button>
                        <button className='rounded-pill language'>Bootstrap</button>
                        <button className='rounded-pill language'>REST APIs</button>
                        <button className='rounded-pill language'>MySQL</button>
                    </div>
                </div>
            </div>
            <div className="container project-container p-4">
                <div className="project-name">
                    <a href="https://codeomari.pythonanywhere.com/" target='_blank'>Eventify</a>
                </div>
                <div className="project-description">
                    <p>
                        events management platform that allows users to discover, register, and 
                        manage educational, tech, business, and art events, as well as workshops. 
                        Users can explore both free and paid events, whether physical or virtual, all 
                        in one place.
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