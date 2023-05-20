import "./Footer.css";
import githubIcon from "./gihub.png";
import linkedinIcon from "./linkedin-icon.png";
import emailIcon from "./png-clipart-emai.png";
import phoneIcon from "./phone icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/ArwaSharif" target="_link" target="_blank">
        <img className="iconsImg" src={githubIcon} alt="GitHub icon" />
      </a>

      <a href="https://www.linkedin.com/in/arwa-sharif/" target="_blank">
        <img className="iconsImg" src={linkedinIcon} alt="LinkedIn icon" />
      </a>
      <a href="mailto:arwamsharif@gmail.com" target="_blank">
        <img className="iconsImg" src={emailIcon} alt="Email icon" />
      </a>
      <a href="tel:+1-917-498-6935" target="_blank">
        <img className="iconsImg" src={phoneIcon} alt="Phone icon" />
      </a>
    </div>
  );
}
