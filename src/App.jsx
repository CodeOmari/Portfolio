import NavBar from "./components/navigation";
import Introduction from "./components/introduction";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";
export default function App(){
    return(
        <div>
            <NavBar />
            <Introduction />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}