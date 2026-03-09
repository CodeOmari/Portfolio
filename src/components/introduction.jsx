import { useState, useEffect} from "react";
import "../styles/introduction.css";
export default function Introduction(){
    const [roleText, setRoleText] = useState("");
    const roleName = "Full Stack Developer";

    useEffect( () => {
        let index = 0;

        function displayRole() {
            if (index < roleName.length){
                const characters = roleName.charAt(index)
                setRoleText( (prev) => prev + characters);
                index++;
                setTimeout(displayRole, 100);
            }
        }

        displayRole();
    }, []);

    return(
        <div className="container-fluid mt-5 d-flex flex-column justify-content-center align-items-center">
            <h3 className="title mb-4">PORTFOLIO</h3>

            <div className="intro-name">
                <h1 className="mb-2">Jackson Omari</h1>
            </div>

            <div id="role">
                <h5 className="mb-4">{roleText}</h5>
            </div>

            <div className="container description mb-5">
                <p>
                    A Computer Science student passionate about building elegant, 
                    performant web applications from frontend to backend.
                </p>
            </div>

            <div className="container w-25">
                <div className="row">
                    <div className="col-sm-6 projects">
                        <a href="#projects" className="p-3 rounded-pill">View Projects</a>
                    </div>
                    <div className="col-sm-6 reach-me">
                        <a href="mailto:jacksonomari2230@gmail.com" target="_blank" className="p-3 rounded-pill">Get in touch</a>
                    </div>
                </div>
            </div>
        </div>
    )
}