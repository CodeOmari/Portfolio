import '../styles/projects.css';
import projectData from "../projects";

export default function Projects(){
    return(
        <div className="container-fluid projects-section" id='projects'>
            <div className="container">
                <h3>WORK</h3>
                <h5 className='mb-4'>
                    My Projects
                </h5>
            </div>
            {projectData.map((project) => (
                <div className="container project-container p-4">
                    <div className="project-name">
                        <a href={project.link} target='_blank'>{project.title}</a>
                    </div>
                    <div className="project-description">
                        <p>{project.description}</p>

                        <div className="lang-box d-flex">
                            {project.technologies.map((tech, index) => (
                                <button key={index} className="rounded-pill language">
                                    {tech}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}