import "./Main.css";
import About from "../../components/About/About";
import CodingProjects from "../../components/CodingProjects/CodingProjects";
import Resume from "../../components/Resume/Resume";

export default function Main() {
  return (
    <div className="main">
      <div className="container"></div>
      <div className="about">
        <About />
      </div>
      <div className="codingProjectsDiv">
        <CodingProjects />
      </div>
      <div className="resumeDiv">
        <Resume />
      </div>
    </div>
  );
}
