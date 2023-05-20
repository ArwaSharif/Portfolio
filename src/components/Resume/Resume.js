import "./Resume.css";
import resumePDF from "./ArwaSharif-Resume.pdf";
import resumePage1 from "./Resume-page1-.png";
import resumePage2 from "./resume-page2-.png";

export default function Resume() {
  return (
    <>
      <h1>RESUME</h1>
      <div className="resumeImgContainer">
        <a className="resumeLink" href={resumePDF} target="-blank">
          <div>
            <img className="resumeImg" src={resumePage1} alt="Resume pag1" />
          </div>
        </a>
        <a href={resumePDF} target="-blank">
          <div></div>
          <img className="resumeImg" src={resumePage2} alt="Resume pag2" />
        </a>
      </div>
      <hr/>
    </>
  );
}
