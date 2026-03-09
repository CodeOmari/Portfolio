import '../styles/skills.css';
export default function Skills() {
    return(
        <div className="container-fluid skills-section bg-light" id='skills'>
            <h3>SKILLS</h3>
            <h5 className='mb-4'>
                Technologies I work with
            </h5>
            <div className="container technology">
                <div className="row">
                    <div className="col-6 col-sm-4 col-md-3">
                        <button className='rounded tech-box'>HTML</button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                        <button  className='rounded tech-box'>CSS</button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                        <button  className='rounded tech-box'>BootStrap</button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                        <button  className='rounded tech-box'>JavaScript</button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                        <button  className='rounded tech-box'>React</button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                        <button  className='rounded tech-box'>Python</button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                        <button  className='rounded tech-box'>Django</button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                        <button  className='rounded tech-box'>REST APIs</button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                        <button  className='rounded tech-box'>SQL</button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                        <button  className='rounded tech-box'>Git</button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                        <button  className='rounded tech-box'>Github</button>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3">
                        <button  className='rounded tech-box'>Postman</button>
                    </div>
                </div>
            </div>
        </div>
    )
}