import "./Nav.css";
import profilePic from "./FinnJake.webp";

export default function Nav() {
  return (
    <div className="logosProfileImgDiv">
      <img src={profilePic} alt="profile" />
    </div>
  );
}
