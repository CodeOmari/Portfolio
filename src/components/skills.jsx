import '../styles/skills.css';
import skillData from "../skills";
export default function Skills() {
    return(
        <div className="container-fluid skills-section bg-light" id='skills'>
            <h3>SKILLS</h3>
            <h5 className='mb-4'>
                Technologies I work with
            </h5>
            <div className="container technology">
                <div className="row g-3">
                    {skillData.map((skill) => (
                        <div className="col-6 col-sm-4 col-md-3">
                            <button className='rounded tech-box'>{skill.name}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}