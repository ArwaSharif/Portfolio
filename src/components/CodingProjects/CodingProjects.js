import "./CodingProjects.css";
import weatherProject from "./weather-project.png";
import gameProject from "./game-project.png";
import githubIcon from "./transparent-github.png";
import reactIcon from "./React-icon.svg.png";
import nodeIcon from "./nodejs-1-logo-png-transparent.png";
import apiIcon from "./api-icon.png";
import cssIcon from "./transparentCSS.png";
import htmlCssJsIcon from "./transparent3.png";

export default function CodingProjects() {
  return (
    <>
      <hr />
      <h1>CODING PROJECTS</h1>
      <div className="codingProjectsContainer">
        <div className="projectWeather">
          <h2>Compare Weather Conditions</h2>
          <a
            href="https://compare-weather-conditions-11.netlify.app/"
            target="_blank"
          >
            <img
              className="projImg"
              src={weatherProject}
              alt="Screenshot of Compare Weather Conditions"
            />
          </a>
          <div className="techIconsDiv">
            <a
              href="https://github.com/ArwaSharif/CompareWeatherConditions/tree/main"
              target="_blank"
            >
              <img
                className="githubRepo"
                src={githubIcon}
                alt="Github repository"
              />
            </a>
            <img className="techIcons" src={reactIcon} alt="react.js" />
            <img className="techIcons" src={nodeIcon} alt="Node.js" />
            <img className="techIcons" src={cssIcon} alt="CSS" />
            <img className="techIcons" src={apiIcon} alt="API" />
          </div>
        </div>
        <div className="projectGame">
          <h2>Find The Hidden Object</h2>
          <a
            href="https://arwasharif.github.io/FindTheHiddenObjects-Game/"
            target="_blank"
          >
            <img
              className="projImg"
              src={gameProject}
              alt="Screenshot of Find The Hidden Object"
              target="_blank"
            />
          </a>
          <div className="techIconsDiv">
            <a
              href="https://github.com/ArwaSharif/FindTheHiddenObjects-Game"
              target="_blank"
            >
              <img
                className="githubRepo"
                src={githubIcon}
                alt="Github repository"
              />
            </a>
            <img
              className="techIcons"
              src={htmlCssJsIcon}
              alt="HTML CSS JavaScript"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
